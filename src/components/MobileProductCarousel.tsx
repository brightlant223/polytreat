"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileProductCarouselProps {
  gridClassName: string;
  ariaLabel: string;
  children: React.ReactNode;
}

/** Renders a standard CSS grid on tablet/desktop and a 1-by-1 Embla carousel on mobile (<= 640px). */
export function MobileProductCarousel({
  gridClassName,
  ariaLabel,
  children,
}: MobileProductCarouselProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);

    const motionMql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionMql.matches);
    const onMotionChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    motionMql.addEventListener("change", onMotionChange);

    return () => {
      mql.removeEventListener("change", onChange);
      motionMql.removeEventListener("change", onMotionChange);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    dragFree: false,
    duration: prefersReducedMotion ? 0 : 25,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = React.Children.toArray(children);

  if (isMobile !== true) {
    return <div className={gridClassName}>{children}</div>;
  }

  return (
    <div className="mobile-product-carousel">
      <div
        ref={emblaRef}
        className="mobile-product-embla-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
      >
        <div className="mobile-product-embla-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="mobile-product-embla-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-product-carousel-controls">
        <button
          type="button"
          className="mobile-product-nav-btn"
          onClick={() => emblaApi?.scrollPrev(prefersReducedMotion)}
          aria-label="Previous product"
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </button>

        <div
          className="industrial-catalogue-dots mobile-product-dots"
          role="tablist"
          aria-label="Product slide pagination"
        >
          {slides.map((_, i) => {
            const isActive = selectedIndex === i;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                className={`industrial-catalogue-dot${isActive ? " is-active" : ""}`}
                aria-label={`Show product ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => emblaApi?.scrollTo(i, prefersReducedMotion)}
              />
            );
          })}
        </div>

        <button
          type="button"
          className="mobile-product-nav-btn"
          onClick={() => emblaApi?.scrollNext(prefersReducedMotion)}
          aria-label="Next product"
        >
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
