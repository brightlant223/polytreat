"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const heroSlides = [
  {
    id: "marble-countertop",
    title: "V-Klin Cleaning Products on Marble Countertop",
    src: "/images/home/V-Klin Cleaning Products on Marble Countertop.png",
  },
  {
    id: "kitchen-bathroom",
    title: "V-Klin Clean Kitchen and Bathroom Essentials",
    src: "/images/home/V-Klin Clean Kitchen and Bathroom Essentials.png",
  },
  {
    id: "floor-care",
    title: "V-Klin Floor Care Collection",
    src: "/images/home/V-Klin Floor Care Collection.png",
  },
];

export default function VKlinHeroCarousel({
  className = "",
}: {
  className?: string;
}) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`vklin-hero-carousel-container ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="V-Klin Product Showcase Slideshow"
    >
      <div className="vklin-hero-slider-track">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === slideIdx;
          return (
            <div
              key={slide.id}
              className={`vklin-hero-slide ${isActive ? "is-active" : ""}`}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${heroSlides.length}: ${slide.title}`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
                className="vklin-hero-image"
              />
            </div>
          );
        })}
      </div>

      {/* Subtle Navigation Dots Indicator */}
      <div
        className="vklin-hero-dots-nav"
        role="tablist"
        aria-label="Select slide"
      >
        {heroSlides.map((slide, idx) => {
          const isActive = idx === slideIdx;
          return (
            <button
              key={slide.id}
              type="button"
              className={`vklin-hero-dot ${isActive ? "is-active" : ""}`}
              onClick={() => setSlideIdx(idx)}
              aria-label={`Show ${slide.title}`}
              aria-selected={isActive}
              role="tab"
            />
          );
        })}
      </div>
    </div>
  );
}
