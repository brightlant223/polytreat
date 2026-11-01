"use client";

import { useEffect } from "react";

/**
 * Lightweight Intersection Observer that adds `is-visible` to elements
 * with `.hp-reveal`, `.hp-reveal-scale`, or `.hp-stagger` when they
 * enter the viewport. Fires once per element (no repeat animation).
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Immediately show everything
      document
        .querySelectorAll(".hp-reveal, .hp-reveal-scale, .hp-stagger, .hp-reveal-section")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll(".hp-reveal, .hp-reveal-scale, .hp-stagger, .hp-reveal-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
