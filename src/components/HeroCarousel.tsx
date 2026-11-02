"use client";

import { useEffect, useRef, useState, useCallback, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Factory,
  Fan,
  FlaskConical,
  MapPin,
  MessageCircle,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* 5 Realistic Industrial Chemistry Slides & Verified Local Imagery   */
/* ------------------------------------------------------------------ */
const industrialSlides = [
  {
    id: "boilers",
    tabLabel: "WATER & PLANTS",
    label: "Industrial Steam Boilers & Water Treatment",
    captionTitle: "Boiler · Cooling · RO · Effluent",
    chipBadge: "Water Treatment Systems",
    image: "/images/home/industrial-steam-boilers-water-treatment.jpg",
    alt: "Modern industrial steam boiler facility with high-pressure vessel, combustion burner, piping manifold, and chemical water treatment systems",
    lead: "Water treatment chemistry for critical plant systems: boilers, cooling towers, reverse osmosis, and effluent.",
    poster: "/images/home/industrial-steam-boilers-water-treatment.jpg",
    icon: Droplets,
  },
  {
    id: "cooling",
    tabLabel: "COOLING LOOPS",
    label: "Industrial Cooling Towers & Loops",
    captionTitle: "Recirculating Loops, Legionella Control",
    chipBadge: "Cooling Water Systems",
    image: "/images/home/industrial-cooling-towers-loops.jpg",
    alt: "Industrial cooling tower plant with mechanical draft fan stacks, piping manifold, and chemical water treatment pumps",
    lead: "Microbiological fouling prevention, scale inhibition, and biocide programs for industrial cooling towers.",
    poster: "/images/home/industrial-cooling-towers-loops.jpg",
    icon: Fan,
  },
  {
    id: "manufacturing",
    tabLabel: "MANUFACTURING",
    label: "Advanced Formulation & Bulk Production",
    captionTitle: "Tarapur MIDC & Mumbai Plants",
    chipBadge: "Production Infrastructure",
    image: "/images/home/Construction-protection.jpg",
    alt: "PolyTreat modern production facilities, specialized formulation blending, and direct dispatch",
    lead: "High-capacity production plants in Tarapur MIDC and Mumbai formulated for direct bulk dispatch across India.",
    poster: "/images/home/Construction-protection.jpg",
    icon: Factory,
  },
  {
    id: "effluent",
    tabLabel: "EFFLUENT ETP",
    label: "Effluent Treatment Plants & Clarifiers",
    captionTitle: "Aeration, Coagulation, Zero Discharge",
    chipBadge: "Effluent Treatment Plant",
    image: "/images/home/hero-effluent-etp.jpg",
    alt: "Realistic industrial effluent treatment plant with circular clarifier basin, mechanical scraper bridge, and aeration tanks",
    lead: "Coagulant, flocculant, and heavy metal precipitation solutions engineered to meet zero-discharge standards.",
    poster: "/images/home/hero-effluent-etp.jpg",
    icon: Factory,
  },
  {
    id: "supply",
    tabLabel: "SUPPLY & CARE",
    label: "Chemical Supply & Infrastructure Care",
    captionTitle: "Industrial Supply, Facility Protection",
    chipBadge: "Industrial Chemical Infrastructure",
    image: "/images/home/Modern Chemical Plant Operations.png",
    alt: "Industrial chemical manufacturing and supply infrastructure, chemical distribution piping, storage tanks, and facility care",
    lead: "Industrial piping protection, heavy-duty facility care, and multi-site distribution across Maharashtra.",
    poster: "/images/home/Modern Chemical Plant Operations.png",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/* Left side: Exact phrases & credentials from original design        */
/* ------------------------------------------------------------------ */
const headlinePhrases = [
  "for water, structures, and everyday care.",
  "for industrial boilers, cooling & RO systems.",
  "for odour control, dump yards & ETP facilities.",
  "for surface protection & waterproofing.",
  "for everyday hygiene & facility care.",
];

const proofChips = [
  { icon: CalendarClock, text: "Manufacturing since 1987" },
  { icon: MapPin, text: "Active clients in Maharashtra" },
  { icon: ShieldCheck, text: "ISO 9001 & GMP Certified" },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [isFullyGathered, setIsFullyGathered] = useState(false);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const isTransitioningRef = useRef(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const totalSlides = industrialSlides.length;
  const activeSlide = industrialSlides[activeIndex];
  const ActiveIcon = activeSlide.icon;

  /* Smooth scroll category tab horizontally within the container on mobile when slide changes (does not scroll window) */
  useEffect(() => {
    const activeBtn = tabButtonRefs.current[activeIndex];
    const container = tabsContainerRef.current;
    if (activeBtn && container && container.scrollWidth > container.clientWidth) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const currentScrollLeft = container.scrollLeft;
      const targetScrollLeft =
        currentScrollLeft +
        (btnRect.left - containerRect.left) -
        container.clientWidth / 2 +
        btnRect.width / 2;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  /* ------------------------------------------------------------------ */
  /* Entrance animation trigger: cards slide in one by one from left    */
  /* ------------------------------------------------------------------ */
  const triggerEntrance = useCallback(() => {
    setHasEntered(false);
    setIsFullyGathered(false);
    setProgress(0);

    const timer1 = setTimeout(() => {
      setHasEntered(true);
    }, 60);

    const timer2 = setTimeout(() => {
      setIsFullyGathered(true);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const cleanup = triggerEntrance();
    return cleanup;
  }, [triggerEntrance]);

  /* ------------------------------------------------------------------ */
  /* Slide transition: Move active card to back, bring next to front    */
  /* ------------------------------------------------------------------ */
  const goToSlide = useCallback(
    (targetIndex: number) => {
      if (isTransitioningRef.current || targetIndex === activeIndex) return;
      isTransitioningRef.current = true;

      setExitingIndex(activeIndex);
      setProgress(0);

      setTimeout(() => {
        setActiveIndex(targetIndex);
        setHeadlineIndex(targetIndex % headlinePhrases.length);
        setExitingIndex(null);
        isTransitioningRef.current = false;
      }, 550);
    },
    [activeIndex]
  );

  const advanceToNext = useCallback(() => {
    if (isTransitioningRef.current) return;
    const nextIdx = (activeIndex + 1) % totalSlides;
    goToSlide(nextIdx);
  }, [activeIndex, goToSlide, totalSlides]);

  const advanceToPrev = useCallback(() => {
    if (isTransitioningRef.current) return;
    const prevIdx = (activeIndex - 1 + totalSlides) % totalSlides;
    goToSlide(prevIdx);
  }, [activeIndex, goToSlide, totalSlides]);

  /* ------------------------------------------------------------------ */
  /* Continuous looping timer & progress bar calculation (4.5s cycle)   */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!isPlaying || isHovered || !isFullyGathered) return;

    const DURATION = 4500;
    const INTERVAL = 50;
    const increment = (INTERVAL / DURATION) * 100;

    const intervalTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advanceToNext();
          return 0;
        }
        return prev + increment;
      });
    }, INTERVAL);

    return () => clearInterval(intervalTimer);
  }, [isPlaying, isHovered, isFullyGathered, advanceToNext]);

  /* ------------------------------------------------------------------ */
  /* Dynamic 3D Transform computation for each card in the stacked deck */
  /* ------------------------------------------------------------------ */
  const getCardStyle = (index: number): CSSProperties => {
    const isExiting = exitingIndex === index;
    const relIndex = (index - activeIndex + totalSlides) % totalSlides;

    const baseStyle: CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "calc(100% - var(--stack-offset-w, 66px))",
      height: "100%",
    };

    // 1. Initial State before entrance: All cards off-screen to the left
    if (!hasEntered) {
      return {
        ...baseStyle,
        transform: `translate3d(-120%, ${12 + index * 6}px, 0px) scale(0.78) rotate(-8deg)`,
        opacity: 0,
        filter: "blur(6px)",
        zIndex: totalSlides - index,
        transition: "none",
      };
    }

    // 2. Entrance sequence: Cards fly in with staggered delay from left side
    if (!isFullyGathered) {
      const staggerDelay = index * 180;
      const targetX = relIndex === 0 ? "0px" : `var(--stack-x-${relIndex}, 24px)`;
      const targetY = relIndex === 0 ? "0px" : `var(--stack-y-${relIndex}, -10px)`;
      const targetR = relIndex === 0 ? "0deg" : `var(--stack-r-${relIndex}, 2deg)`;
      const scales = [1, 0.955, 0.91, 0.865, 0.82];
      const opacities = [1, 0.9, 0.7, 0.45, 0.25];
      const zOffsets = [0, -30, -60, -90, -120];

      return {
        ...baseStyle,
        transform: `translate3d(${targetX}, ${targetY}, ${zOffsets[relIndex] || -120}px) scale(${scales[relIndex] || 0.82}) rotate(${targetR})`,
        opacity: opacities[relIndex] ?? 0.25,
        filter: "blur(0px)",
        zIndex: 10 - relIndex,
        transition: `transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${staggerDelay}ms, opacity 750ms ease ${staggerDelay}ms, filter 650ms ease ${staggerDelay}ms`,
      };
    }

    // 3. Card is exiting: Slides smoothly out to the left and moves to the end of the stack
    if (isExiting) {
      return {
        ...baseStyle,
        transform: "translate3d(-110%, -12px, 30px) scale(0.94) rotate(-6deg)",
        opacity: 0,
        filter: "blur(2px)",
        zIndex: 15,
        transition: "transform 550ms cubic-bezier(0.25, 1, 0.5, 1), opacity 450ms ease, filter 450ms ease",
      };
    }

    // 4. Standard Stacked Card Layout:
    switch (relIndex) {
      case 0:
        return {
          ...baseStyle,
          transform: "translate3d(0px, 0px, 0px) scale(1) rotate(0deg)",
          opacity: 1,
          filter: "brightness(1)",
          zIndex: 10,
          cursor: "default",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
        };
      case 1:
        return {
          ...baseStyle,
          transform: "translate3d(var(--stack-x-1, 24px), var(--stack-y-1, -10px), -30px) scale(0.955) rotate(var(--stack-r-1, 1.8deg))",
          opacity: 0.9,
          filter: "brightness(0.94)",
          zIndex: 9,
          cursor: "pointer",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
        };
      case 2:
        return {
          ...baseStyle,
          transform: "translate3d(var(--stack-x-2, 46px), var(--stack-y-2, -18px), -60px) scale(0.91) rotate(var(--stack-r-2, 3.4deg))",
          opacity: 0.7,
          filter: "brightness(0.88)",
          zIndex: 8,
          cursor: "pointer",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
        };
      case 3:
        return {
          ...baseStyle,
          transform: "translate3d(var(--stack-x-3, 66px), var(--stack-y-3, -25px), -90px) scale(0.865) rotate(var(--stack-r-3, 4.8deg))",
          opacity: 0.45,
          filter: "brightness(0.82)",
          zIndex: 7,
          cursor: "pointer",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
        };
      default:
        return {
          ...baseStyle,
          transform: "translate3d(var(--stack-x-4, 82px), var(--stack-y-4, -31px), -120px) scale(0.82) rotate(var(--stack-r-4, 6deg))",
          opacity: 0.25,
          filter: "brightness(0.76)",
          zIndex: 6,
          cursor: "pointer",
          transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease",
        };
    }
  };

  return (
    <section
      className="hp-hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
    >
      {/* Decorative water splash background graphics (Preserved 100%) */}
      <div className="hp-hero-water-bg" aria-hidden="true">
        <div className="hp-water-splash hp-water-splash-top-right">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M120 0C170 50 160 110 220 140C290 175 360 110 420 160C470 200 480 300 500 360V0H120Z"
              fill="url(#waterGlow1)"
              opacity="0.65"
            />
            <path
              d="M260 0C300 45 350 70 410 75C460 79 490 120 500 150V0H260Z"
              fill="url(#waterGlow2)"
              opacity="0.8"
            />
            <circle cx="190" cy="180" r="14" fill="#38BDF8" opacity="0.35" />
            <circle cx="193" cy="177" r="4" fill="#FFFFFF" opacity="0.8" />
            <circle cx="140" cy="220" r="8" fill="#0EA5E9" opacity="0.3" />
            <circle cx="142" cy="218" r="2.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="280" cy="250" r="20" fill="#0284C7" opacity="0.18" />
            <circle cx="284" cy="246" r="6" fill="#FFFFFF" opacity="0.7" />
            <defs>
              <linearGradient id="waterGlow1" x1="500" y1="0" x2="160" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="0.6" stopColor="#0EA5E9" stopOpacity="0.2" />
                <stop offset="1" stopColor="#BAE6FD" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="waterGlow2" x1="500" y1="0" x2="300" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7DD3FC" stopOpacity="0.6" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hp-water-splash hp-water-splash-bottom-left">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 400C50 330 30 260 90 220C160 170 230 230 300 180C360 135 370 40 420 0H0V400Z"
              fill="url(#waterGlow3)"
              opacity="0.45"
            />
            <circle cx="180" cy="140" r="12" fill="#0284C7" opacity="0.22" />
            <circle cx="183" cy="138" r="3.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="320" cy="100" r="16" fill="#38BDF8" opacity="0.25" />
            <circle cx="324" cy="97" r="5" fill="#FFFFFF" opacity="0.7" />
            <circle cx="90" cy="160" r="7" fill="#0EA5E9" opacity="0.3" />
            <defs>
              <linearGradient id="waterGlow3" x1="0" y1="400" x2="350" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="0.7" stopColor="#0284C7" stopOpacity="0.15" />
                <stop offset="1" stopColor="#E0F2FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hp-hero-watermark" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="170" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.14" />
            <circle cx="200" cy="200" r="130" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.1" />
            <circle cx="200" cy="200" r="90" stroke="#38BDF8" strokeWidth="2" strokeDasharray="16 12" opacity="0.18" />
            <circle cx="200" cy="200" r="40" stroke="#0284C7" strokeWidth="1.5" opacity="0.12" />
          </svg>
        </div>
      </div>

      <div className="hp-hero-container hp-hero-grid">
        {/* ========================================================== */}
        {/* LEFT COLUMN: Entirely preserved exactly as requested       */}
        {/* ========================================================== */}
        <div className="hp-hero-copy">
          <h1 id="hero-title" className="hp-hero-title">
            Proven solutions{" "}
            <span
              className="hp-hero-highlight hp-hero-rotating-phrase"
              key={headlineIndex}
            >
              {headlinePhrases[headlineIndex]}
            </span>
          </h1>

          <p className="hp-hero-lead" aria-live="polite" key={activeSlide.id}>
            {activeSlide.lead}
          </p>

          <ul className="hp-hero-proof" aria-label="Company credentials">
            {proofChips.map(({ icon: Icon, text }) => (
              <li key={text} className="hp-hero-proof-item">
                <span className="hp-proof-icon-wrap">
                  <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="hp-hero-actions">
            <Link className="hp-btn-primary" href="#ranges">
              <span>Explore solutions</span>
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <a
              className="hp-btn-secondary"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20water%20treatment%20or%20industrial%20chemical%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              <span>Talk to our team</span>
            </a>
          </div>
        </div>

        {/* ========================================================== */}
        {/* RIGHT COLUMN: Redesigned 3D Animated Card Stack Carousel   */}
        {/* ========================================================== */}
        <div className="hp-hero-visual">
          <div
            className="hp-stack-container"
            role="region"
            aria-label="PolyTreat product applications 3D card carousel"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* 3D Stack of Cards */}
            <div className="hp-stack-deck">
              {industrialSlides.map((slide, index) => {
                const isActive = index === activeIndex;
                const SlideIcon = slide.icon;
                const cardStyle = getCardStyle(index);

                return (
                  <div
                    key={slide.id}
                    className={`hp-stack-card${isActive ? " is-active" : ""}`}
                    style={cardStyle}
                    onClick={() => !isActive && isFullyGathered && goToSlide(index)}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`Slide ${index + 1}: ${slide.label}`}
                  >
                    {/* Relative container with explicit dimensions for Next.js Image */}
                    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                      {/* Industrial Photograph */}
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, 580px"
                        className="hp-stack-card-img"
                      />

                      {/* Gradient Overlay Vignette */}
                      <div className="hp-stack-card-shade" aria-hidden="true" />

                      {/* Active Card Progress Bar */}
                      {isActive && (
                        <div className="hp-card-progress-track" aria-hidden="true">
                          <div
                            className="hp-card-progress-bar"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      {/* Top Controls on Active Front Card */}
                      {isActive && (
                        <div className="hp-card-top-controls" onClick={(e) => e.stopPropagation()}>
                          <span className="hp-card-index-pill">
                            0{activeIndex + 1} / 0{totalSlides}
                          </span>
                          <button
                            type="button"
                            className="hp-card-ctrl-btn"
                            onClick={advanceToPrev}
                            title="Previous industrial slide"
                            aria-label="Previous industrial slide"
                          >
                            <ChevronLeft size={16} strokeWidth={2.4} />
                          </button>
                          <button
                            type="button"
                            className="hp-card-ctrl-btn"
                            onClick={advanceToNext}
                            title="Next industrial slide"
                            aria-label="Next industrial slide"
                          >
                            <ChevronRight size={16} strokeWidth={2.4} />
                          </button>
                          <button
                            type="button"
                            className="hp-card-ctrl-btn"
                            onClick={() => setIsPlaying((p) => !p)}
                            title={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                            aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                          >
                            {isPlaying ? (
                              <Pause size={14} strokeWidth={2.5} />
                            ) : (
                              <Play size={14} strokeWidth={2.5} />
                            )}
                          </button>
                          <button
                            type="button"
                            className="hp-card-ctrl-btn"
                            onClick={triggerEntrance}
                            title="Replay entrance animation"
                            aria-label="Replay entrance animation"
                          >
                            <RotateCcw size={14} strokeWidth={2.2} />
                          </button>
                        </div>
                      )}

                      {/* Glassmorphism Badge (matches user reference image) */}
                      {isActive && (
                        <div className="hp-card-glass-badge">
                          <div className="hp-card-icon-box">
                            <SlideIcon size={20} strokeWidth={2.2} />
                          </div>
                          <div className="hp-card-text-box">
                            <span className="hp-card-badge-title">{slide.label}</span>
                            <span className="hp-card-badge-subtitle">{slide.captionTitle}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Navigation Tabs Below Carousel (Matching reference) */}
          <div ref={tabsContainerRef} className="hp-hero-tabs hp-hero-tabs-5" role="tablist" aria-label="PolyTreat product solutions">
            {industrialSlides.map((slide, index) => {
              const isActive = index === activeIndex;
              const TabIcon = slide.icon;
              return (
                <button
                  key={slide.id}
                  ref={(el) => {
                    tabButtonRefs.current[index] = el;
                  }}
                  className={`hp-hero-tab${isActive ? " is-active" : ""}`}

                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View ${slide.tabLabel}`}
                  onClick={() => goToSlide(index)}
                >
                  <TabIcon size={12} strokeWidth={2.4} className="hp-hero-tab-icon" aria-hidden="true" />
                  <span className="hp-hero-tab-label">{slide.tabLabel}</span>
                  {isActive && <span className="hp-hero-tab-dot" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}