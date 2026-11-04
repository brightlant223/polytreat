"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronRight,
  FlaskConical,
  ShieldCheck,
  Pipette,
  Droplets,
  Recycle,
} from "lucide-react";

export interface CatalogueRow {
  title: string;
  description: string;
  badges: string[];
  href: string;
  icon?: React.ComponentType<{ size?: number; className?: string }> | string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Scale & deposition control": FlaskConical,
  "Corrosion control": ShieldCheck,
  "Membrane cleaning & care": Pipette,
  "Water quality conditioning": Droplets,
  "Effluent treatment aids": Recycle,
};

export const defaultCatalogueRows: CatalogueRow[] = [
  {
    title: "Scale & deposition control",
    description: "Helps prevent scale formation in boilers, cooling systems and RO.",
    badges: ["Scale inhibitors", "Antiscalants", "Dispersants"],
    href: "/solutions/boiler-cooling-water#boiler-water",
    icon: FlaskConical,
  },
  {
    title: "Corrosion control",
    description: "Protects metal surfaces in water and steam systems.",
    badges: ["Corrosion inhibitors", "pH control", "Film-forming agents"],
    href: "/solutions/boiler-cooling-water#cooling-water",
    icon: ShieldCheck,
  },
  {
    title: "Membrane cleaning & care",
    description: "Cleaning solutions to remove foulants and maintain performance.",
    badges: ["Membrane cleaners", "Descalers", "Cleaning programmes"],
    href: "/solutions/ro-effluent#reverse-osmosis",
    icon: Pipette,
  },
  {
    title: "Water quality conditioning",
    description: "Helps maintain key water parameters for different systems.",
    badges: ["pH control", "Alkalinity control", "Oxygen scavengers"],
    href: "/solutions/boiler-cooling-water#boiler-water",
    icon: Droplets,
  },
  {
    title: "Effluent treatment aids",
    description: "Chemical solutions to support industrial effluent treatment and compliance.",
    badges: ["Coagulants", "Flocculants", "Metal precipitants"],
    href: "/solutions/ro-effluent#effluent-treatment",
    icon: Recycle,
  },
];

interface CatalogueCardProps {
  row: CatalogueRow;
  role?: string;
  key?: React.Key;
}

function CatalogueCard({ row, role }: CatalogueCardProps) {
  const Icon =
    (row.icon && typeof row.icon !== "string" ? row.icon : null) ||
    iconMap[row.title] ||
    FlaskConical;

  return (
    <Link
      href={row.href}
      className="industrial-catalogue-row"
      role={role}
    >
      <div className="industrial-catalogue-title-col">
        <span className="industrial-catalogue-icon" aria-hidden="true">
          <Icon size={20} />
        </span>
        <span className="industrial-catalogue-title">{row.title}</span>
      </div>
      <p className="industrial-catalogue-desc">{row.description}</p>
      <div
        className="industrial-catalogue-badges"
        aria-label={`${row.title} products`}
      >
        {row.badges.map((badge) => (
          <span key={badge} className="industrial-catalogue-badge">
            {badge}
          </span>
        ))}
      </div>
      <div className="industrial-catalogue-arrow" aria-hidden="true">
        <ChevronRight size={18} />
      </div>
    </Link>
  );
}

function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mql.addEventListener("change", onChange);
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}

interface MobileCatalogueCarouselProps {
  items: CatalogueRow[];
}

function MobileCatalogueCarousel({ items }: MobileCatalogueCarouselProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
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

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index, prefersReducedMotion);
    },
    [emblaApi, prefersReducedMotion]
  );

  return (
    <div className="industrial-catalogue-mobile-carousel">
      <div
        ref={emblaRef}
        className="industrial-catalogue-embla-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Industrial catalogue categories"
        tabIndex={0}
      >
        <div className="industrial-catalogue-embla-container">
          {items.map((row, index) => (
            <div
              key={row.title}
              className="industrial-catalogue-embla-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
            >
              <CatalogueCard row={row} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots (mobile only) */}
      <div
        className="industrial-catalogue-dots"
        role="tablist"
        aria-label="Carousel pagination"
      >
        {items.map((row, i) => {
          const isActive = selectedIndex === i;
          return (
            <button
              key={row.title}
              type="button"
              role="tab"
              className={`industrial-catalogue-dot${isActive ? " is-active" : ""}`}
              aria-label={`Go to card ${i + 1}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => scrollTo(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface IndustrialCatalogueCarouselProps {
  items?: CatalogueRow[];
}

export function IndustrialCatalogueCarousel({
  items = defaultCatalogueRows,
}: IndustrialCatalogueCarouselProps) {
  const isMobile = useIsMobile();

  // 1. Initial render / SSR: placeholder to prevent layout shift and avoid hydration mismatch
  if (isMobile === null) {
    return (
      <div
        className="industrial-catalogue-placeholder"
        style={{ minHeight: "360px" }}
        aria-hidden="true"
      />
    );
  }

  // 2. Desktop/tablet (>= 768px): render ONLY the existing desktop list (exactly 5 cards in DOM)
  if (isMobile === false) {
    return (
      <div className="industrial-catalogue-table" role="list">
        {items.map((row) => (
          <CatalogueCard key={row.title} row={row} role="listitem" />
        ))}
      </div>
    );
  }

  // 3. Mobile (< 768px): render ONLY the Embla mobile carousel (exactly 5 cards in DOM)
  return <MobileCatalogueCarousel items={items} />;
}
