"use client";

import Lenis from "lenis";
import { useEffect } from "react";

function observeReveals() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll(".reveal:not(.is-in)");
  if (!nodes.length) return null;

  if (reduced || window.matchMedia("(max-width: 40rem)").matches) {
    nodes.forEach((node) => node.classList.add("is-in"));
    return null;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((node) => io.observe(node));
  return io;
}

export default function Experience() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let raf = 0;
    let io = observeReveals();
    const timers = [];

    if (!reduced) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
        smoothWheel: true,
      });

      function tick(time) {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
      document.documentElement.classList.add("has-lenis");
    }

    // Client sections (FAQ accordion) mount after first paint.
    timers.push(
      setTimeout(() => {
        io?.disconnect();
        io = observeReveals();
      }, 120)
    );

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      lenis?.destroy();
      io?.disconnect();
      document.documentElement.classList.remove("has-lenis");
    };
  }, []);

  return null;
}
