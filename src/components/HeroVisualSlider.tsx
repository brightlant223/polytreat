"use client";

import { useEffect, useState } from "react";

export interface HeroSlideItem {
  id: string;
  src: string;
  alt: string;
  badgeTitle: string;
  badgeSub: string;
}

interface HeroVisualSliderProps {
  slides: HeroSlideItem[];
  wrapClassName: string;
  imgClassName: string;
  ariaLabel: string;
}

/** Auto-advancing hero facility slider with bottom-left status pill and bottom-right dot navigation. */
export function HeroVisualSlider({
  slides,
  wrapClassName,
  imgClassName,
  ariaLabel,
}: HeroVisualSliderProps) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const active = slides[slideIdx] ?? slides[0];
  if (!active) return null;

  return (
    <div className={wrapClassName}>
      <div className="specialty-hero-slider-track">
        {slides.map((slide, index) => {
          const isActive = slideIdx === index;
          return (
            <div
              key={slide.id}
              className={`specialty-hero-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
            >
              <img src={slide.src} alt={slide.alt} className={imgClassName} />
            </div>
          );
        })}
      </div>

      {/* Dynamic Slide Status Pill (Bottom-Left) */}
      <div className="specialty-hero-visual-badge">
        <span className="specialty-brand-pill">
          <span className="specialty-pill-dot" aria-hidden="true" />
          <strong>{active.badgeTitle}</strong>
          <span className="specialty-pill-sep">·</span>
          <span className="specialty-pill-sub">{active.badgeSub}</span>
        </span>
      </div>

      {/* Carousel Navigation Dots (Bottom-Right) */}
      <div className="specialty-hero-dots-nav" aria-label={ariaLabel}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`specialty-hero-dot ${slideIdx === index ? "is-active" : ""}`}
            onClick={() => setSlideIdx(index)}
            aria-label={`Show ${slide.badgeTitle}`}
          />
        ))}
      </div>
    </div>
  );
}
