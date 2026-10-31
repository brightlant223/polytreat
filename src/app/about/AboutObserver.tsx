"use client";

import { useEffect } from "react";

/**
 * Controller for scroll-driven animations on the About Us page:
 * - Fluid flowing line in the Story Timeline that extends downwards only on first-time scroll.
 * - Monotonic progress: the line NEVER retreats/goes back up when the user scrolls back up.
 * - Card and ball icon pop up at the exact moment the line touches each ball icon.
 * - Once fully drawn down, the timeline is permanently locked and scroll listeners detach.
 * - Full compliance with `prefers-reduced-motion: reduce`.
 */
export default function AboutObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Clean up any lingering data-theme attribute and stored theme
    if (typeof document !== "undefined") {
      document.documentElement.removeAttribute("data-theme");
      if (document.body) document.body.removeAttribute("data-theme");
      try {
        localStorage.removeItem("polytreat-about-theme");
      } catch {}
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timelineWrap = document.querySelector<HTMLElement>(".ab-timeline-wrap");
    const lineBase = document.querySelector<HTMLElement>(".ab-timeline-line-base");
    const lineFill = document.querySelector<HTMLElement>(".ab-timeline-line-fill");
    const lineHead = document.querySelector<HTMLElement>(".ab-timeline-line-head");
    const milestoneItems = document.querySelectorAll<HTMLElement>(".ab-timeline-item");

    if (prefersReducedMotion) {
      document
        .querySelectorAll(".ab-reveal, .ab-stagger, .ab-timeline-card, .ab-timeline-dot")
        .forEach((el) => {
          el.classList.add("is-visible");
        });
      if (lineFill) {
        lineFill.style.height = "100%";
      }
      if (lineHead) {
        lineHead.style.display = "none";
      }
      return;
    }

    // 1. General section reveal observer (fires once only per element)
    const generalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            generalObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".ab-reveal, .ab-stagger").forEach((el) => {
      generalObserver.observe(el);
    });

    // 2. First-time forward-only flowing line in Timeline
    let rafId: number | null = null;
    let maxDrawnPixels = 0;
    let isCompleted = false;

    const cleanupTimeline = () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const updateFlowingTimeline = () => {
      if (isCompleted || !timelineWrap || !lineBase || !lineFill) return;

      const wrapRect = timelineWrap.getBoundingClientRect();
      const baseHeight = lineBase.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Focal trigger line in viewport (around 62% from top of screen)
      const triggerY = viewportHeight * 0.62;
      const lineTopInViewport = wrapRect.top + 15;
      const distancePastLineTop = triggerY - lineTopInViewport;

      // Calculate how far down the line should reach
      const currentDrawn = Math.max(0, Math.min(baseHeight, distancePastLineTop));

      // MONOTONIC: NEVER decrease / go back up when scrolling up!
      // Only expand downwards on forward scrolling.
      if (currentDrawn > maxDrawnPixels) {
        maxDrawnPixels = currentDrawn;
        lineFill.style.height = `${maxDrawnPixels}px`;

        if (lineHead) {
          lineHead.style.opacity = maxDrawnPixels > 6 ? "1" : "0";
        }
      }

      // Tip position of the line in current viewport coordinates
      const currentTipY = lineTopInViewport + maxDrawnPixels;

      // Pop up each card and ball icon the exact moment the line touches the ball
      milestoneItems.forEach((item) => {
        const dot = item.querySelector<HTMLElement>(".ab-timeline-dot");
        const card = item.querySelector<HTMLElement>(".ab-timeline-card");

        if (!dot || !card) return;

        // If already popped up, skip
        if (dot.classList.contains("is-visible") && card.classList.contains("is-visible")) {
          return;
        }

        const dotRect = dot.getBoundingClientRect();
        // Top edge of the ball icon in viewport coordinates
        const ballTopY = dotRect.top;

        // When the tip of the flowing line reaches or touches the ball icon:
        if (currentTipY >= ballTopY) {
          dot.classList.add("is-visible");
          card.classList.add("is-visible");
        }
      });

      // Once the line reaches the bottom of the timeline, finalize permanently
      if (maxDrawnPixels >= baseHeight) {
        isCompleted = true;
        lineFill.style.height = "100%";
        if (lineHead) {
          lineHead.style.opacity = "0";
        }
        milestoneItems.forEach((item) => {
          item.querySelector(".ab-timeline-dot")?.classList.add("is-visible");
          item.querySelector(".ab-timeline-card")?.classList.add("is-visible");
        });
        cleanupTimeline();
      }

      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null && !isCompleted) {
        rafId = window.requestAnimationFrame(updateFlowingTimeline);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check on page entrance
    updateFlowingTimeline();

    return () => {
      generalObserver.disconnect();
      cleanupTimeline();
    };
  }, []);

  return null;
}
