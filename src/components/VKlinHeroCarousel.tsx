"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const heroSlides = [
  {
    id: "complete-lineup",
    title: "V-Klin Complete Household Cleaning Lineup",
    src: "/images/home/vklin-hero-slide-1.jpg",
  },
  {
    id: "marble-countertop",
    title: "V-Klin Cleaning Products on Marble Countertop",
    src: "/images/home/vklin-hero-slide-2.png",
  },
  {
    id: "kitchen-bathroom",
    title: "V-Klin Clean Kitchen and Bathroom Essentials",
    src: "/images/home/vklin-hero-slide-3.png",
  },
  {
    id: "floor-care",
    title: "V-Klin Floor Care Collection",
    src: "/images/home/vklin-hero-slide-4.png",
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
      className={`vklin-hero-visual-card vklin-hero-carousel-container ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="V-Klin Product Showcase Slideshow"
      style={{
        position: "relative",
        width: "100%",
        borderRadius: "26px",
        overflow: "hidden",
      }}
    >
      <div
        className="vklin-hero-slider-track"
        style={{
          display: "grid",
          gridTemplateAreas: '"slide"',
          width: "100%",
          position: "relative",
        }}
      >
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
              style={{
                gridArea: "slide",
                width: "100%",
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: isActive ? 2 : 1,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                width={1600}
                height={900}
                priority={idx === 0}
                unoptimized
                className="vklin-hero-image"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "26px",
                }}
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
        style={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
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
