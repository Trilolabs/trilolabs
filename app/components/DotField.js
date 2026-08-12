"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeSoftDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.3, "rgba(255,255,255,0.65)");
  g.addColorStop(0.6, "rgba(255,255,255,0.18)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function smoothstep(edge0, edge1, x) {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

const PRESETS = {
  hero: { segX: 96, segY: 60, width: 14.5, depth: 10.5, size: 0.085, lift: 1.45, camY: 3.55, camZ: 5.8 },
  panel: { segX: 52, segY: 34, width: 12, depth: 8, size: 0.07, lift: 1.25, camY: 3.2, camZ: 5.2 },
  strip: { segX: 64, segY: 22, width: 16, depth: 5.5, size: 0.055, lift: 0.95, camY: 2.6, camZ: 4.8 },
  ambient: { segX: 40, segY: 24, width: 13, depth: 8, size: 0.05, lift: 0.7, camY: 3.0, camZ: 5.4 },
};

/**
 * Cursor-reactive ash particle field.
 * @param {"hero"|"panel"|"strip"|"ambient"} [variant]
 * @param {boolean} [interactive]
 */
export default function DotField({
  className = "",
  variant = "hero",
  interactive = true,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const preset = PRESETS[variant] || PRESETS.hero;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const canInteract = interactive && fine && !reduced;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0b, 0.075);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, preset.camY, preset.camZ);
    camera.lookAt(0, 0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const SEG_X = preset.segX;
    const SEG_Y = preset.segY;
    const WIDTH = preset.width;
    const DEPTH = preset.depth;
    const count = (SEG_X + 1) * (SEG_Y + 1);
    const influence = 3.0;

    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const currentY = new Float32Array(count);
    const currentHeat = new Float32Array(count);
    const baseColor = new THREE.Color(0x5c5852);
    const midColor = new THREE.Color(0xa8a298);
    const hotColor = new THREE.Color(0xf4f1e8);

    let i = 0;
    for (let y = 0; y <= SEG_Y; y += 1) {
      for (let x = 0; x <= SEG_X; x += 1) {
        const px = (x / SEG_X - 0.5) * WIDTH;
        const pz = (y / SEG_Y - 0.5) * DEPTH;
        base[i] = px;
        base[i + 1] = 0;
        base[i + 2] = pz;
        positions[i] = px;
        positions[i + 1] = 0;
        positions[i + 2] = pz;
        colors[i] = baseColor.r;
        colors[i + 1] = baseColor.g;
        colors[i + 2] = baseColor.b;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const dotMap = makeSoftDotTexture();
    const material = new THREE.PointsMaterial({
      size: preset.size,
      map: dotMap,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -Math.PI * 0.38;
    scene.add(points);

    const hitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(WIDTH * 1.2, DEPTH * 1.2),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    hitPlane.rotation.copy(points.rotation);
    scene.add(hitPlane);

    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2(0.15, 0.05);
    const mouse = { x: 0.3, y: -0.1, tx: 0.3, ty: -0.1 };
    const localHit = new THREE.Vector3();
    const clock = new THREE.Clock();
    let raf = 0;
    let running = true;
    let visible = true;
    let drift = { x: 0.2, y: 0 };

    function resize() {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    function onPointer(e) {
      if (!canInteract || !visible) return;
      const rect = mount.getBoundingClientRect();
      // Allow interaction when pointer is near the field, not only inside
      const pad = 40;
      if (
        e.clientX < rect.left - pad ||
        e.clientX > rect.right + pad ||
        e.clientY < rect.top - pad ||
        e.clientY > rect.bottom + pad
      ) {
        return;
      }
      pointerNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      raycaster.setFromCamera(pointerNdc, camera);
      const hits = raycaster.intersectObject(hitPlane);
      if (hits[0]) {
        localHit.copy(hits[0].point);
        hitPlane.worldToLocal(localHit);
        mouse.tx = localHit.x;
        mouse.ty = localHit.y;
      }
    }

    function deform(t, dt) {
      if (!canInteract) {
        drift.x = Math.sin(t * 0.35) * (WIDTH * 0.22);
        drift.y = Math.cos(t * 0.28) * (DEPTH * 0.18);
        mouse.tx = drift.x;
        mouse.ty = drift.y;
      }

      mouse.x = THREE.MathUtils.damp(mouse.x, mouse.tx, 5.5, dt);
      mouse.y = THREE.MathUtils.damp(mouse.y, mouse.ty, 5.5, dt);

      const pos = geometry.attributes.position.array;
      const col = geometry.attributes.color.array;
      const tSlow = t * 0.42;
      const liftAmt = preset.lift;

      for (let p = 0; p < count; p += 1) {
        const ix = p * 3;
        const bx = base[ix];
        const bz = base[ix + 2];

        const wave =
          Math.sin(bx * 0.42 + tSlow) * 0.16 +
          Math.cos(bz * 0.55 + tSlow * 0.85) * 0.12 +
          Math.sin((bx * 0.7 + bz) * 0.28 + tSlow * 0.6) * 0.09;

        const dx = bx - mouse.x;
        const dz = bz - mouse.y;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const pull = 1 - smoothstep(0, influence, dist);
        const softPull = pull * pull * (3 - 2 * pull);
        const targetLift = wave + softPull * liftAmt;

        currentY[p] = THREE.MathUtils.damp(currentY[p], targetLift, 7.2, dt);
        const lift = currentY[p];

        pos[ix] = bx;
        pos[ix + 1] = lift;
        pos[ix + 2] = bz;

        const targetHeat = Math.min(1, softPull * 1.3);
        currentHeat[p] = THREE.MathUtils.damp(currentHeat[p], targetHeat, 6.2, dt);
        const heat = currentHeat[p];

        let r;
        let g;
        let b;
        if (heat < 0.5) {
          const u = heat * 2;
          r = baseColor.r + (midColor.r - baseColor.r) * u;
          g = baseColor.g + (midColor.g - baseColor.g) * u;
          b = baseColor.b + (midColor.b - baseColor.b) * u;
        } else {
          const u = (heat - 0.5) * 2;
          r = midColor.r + (hotColor.r - midColor.r) * u;
          g = midColor.g + (hotColor.g - midColor.g) * u;
          b = midColor.b + (hotColor.b - midColor.b) * u;
        }
        col[ix] = r;
        col[ix + 1] = g;
        col[ix + 2] = b;
      }

      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
    }

    function tick() {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      deform(reduced ? 0 : t, dt);
      renderer.render(scene, camera);
    }

    resize();
    points.updateMatrixWorld(true);
    hitPlane.updateMatrixWorld(true);
    deform(0, 1 / 60);
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
      },
      { rootMargin: "80px", threshold: 0.01 }
    );
    io.observe(mount);

    if (canInteract) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      material.dispose();
      dotMap.dispose();
      hitPlane.geometry.dispose();
      hitPlane.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant, interactive]);

  return (
    <div
      ref={mountRef}
      className={`dot-field ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
