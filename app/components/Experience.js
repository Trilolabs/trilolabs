"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function Experience() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let raf = 0;

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

    const nodes = document.querySelectorAll(".reveal");
    let io = null;
    if (nodes.length) {
      if (reduced || window.matchMedia("(max-width: 40rem)").matches) {
        nodes.forEach((node) => node.classList.add("is-in"));
      } else {
        io = new IntersectionObserver(
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
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      io?.disconnect();
      document.documentElement.classList.remove("has-lenis");
    };
  }, []);

  return null;
}
