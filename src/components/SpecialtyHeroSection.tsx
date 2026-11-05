"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Home,
  Leaf,
  MessageCircle,
  Play,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
} from "lucide-react";

const specialtySlides = [
  {
    id: "corosil",
    line1: "COROSIL® Metallo-Organic",
    line2: "Rust Converter & Primer Base",
    lead: "Chemically transforms iron oxides into stable metallo-organic complexes, creating an adherent foundation for compatible industrial coatings.",
    image: "/images/specialty/corosil-hero.webp",
    alt: "COROSIL rust converter primer application on structural steel",
    badgeTitle: "COROSIL",
    tag: "Metallo-Organic Steel Protection",
    href: "/specialty/corosil",
    icon: ShieldCheck,
  },
  {
    id: "polydor",
    line1: "POLYDOR-WS® Molecular",
    line2: "Chemical Odour Neutralisation",
    lead: "Broad-spectrum chemical odour neutraliser that permanently alters foul molecules into non-odorous adducts without masking perfumes.",
    image: "/images/specialty/polydor-hero.webp",
    alt: "POLYDOR-WS molecular chemical odour control application",
    badgeTitle: "POLYDOR-WS",
    tag: "Permanent Chemical Adduct Formation",
    href: "/specialty/polydor-ws",
    icon: Wind,
  },
  {
    id: "polyklin",
    line1: "POLYKLIN® Fast-Acting",
    line2: "HVAC Coil Care & Airflow",
    lead: "Professional coil cleaning compound for AHU, FCU, evaporator, and condenser coils that loosens stubborn grime and oxidation via spray-and-rinse.",
    image: "/images/specialty/polyklin-hero.webp",
    alt: "POLYKLIN HVAC cooling coil decontamination and care",
    badgeTitle: "POLYKLIN",
    tag: "Spray-and-Rinse Airflow Restoration",
    href: "/specialty/polyklin",
    icon: Snowflake,
  },
];

const featureHighlights = [
  {
    icon: ShieldCheck,
    title: "High Chemical Efficacy",
    desc: "Lab-tested stoichiometric active conversion",
  },
  {
    icon: FlaskConical,
    title: "Contractor Grade",
    desc: "Engineered for demanding field & plant maintenance",
  },
  {
    icon: Sparkles,
    title: "Rapid Action",
    desc: "Fast-reacting contact conversion & coil cleaning",
  },
  {
    icon: Leaf,
    title: "Safe & Eco Aligned",
    desc: "EPA criteria aligned non-toxic odour neutralisation",
  },
];

export default function SpecialtyHeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeout = useRef<number | null>(null);

  // Synchronized timer: text and image change together at the exact same moment
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      
      // Start text transition fade
      setIsTransitioning(true);
      
      transitionTimeout.current = window.setTimeout(() => {
        // Change both slide image and text simultaneously
        setSlideIdx((prev) => (prev + 1) % specialtySlides.length);
        setIsTransitioning(false);
      }, 280);
    }, 4500);

    return () => {
      clearInterval(cycleTimer);
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  const goToSlide = (idx: number) => {
    if (idx === slideIdx) return;
    setIsTransitioning(true);
    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = window.setTimeout(() => {
      setSlideIdx(idx);
      setIsTransitioning(false);
    }, 200);
  };

  const active = specialtySlides[slideIdx];

  return (
    <section className="specialty-hero-wrap" aria-labelledby="specialty-hero-title">
      {/* Soft ambient background glow */}
      <div className="specialty-hero-bg-glow" aria-hidden="true" />

      <div className="container specialty-hero-container">
        {/* Breadcrumb Navigation */}
        <nav className="industrial-water-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/" className="industrial-water-breadcrumb-home">
            <Home size={13} aria-hidden="true" />
            <span>Home</span>
          </Link>
          <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
            &gt;
          </span>
          <Link href="/#solutions">Solutions</Link>
          <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
            &gt;
          </span>
          <span aria-current="page">Specialty Products Overview</span>
        </nav>

        {/* Main 2-Column Hero Grid */}
        <div className="specialty-hero-grid">
          {/* Left Column: Heading, Lead & Feature Badges */}
          <div className="specialty-hero-copy">
            <div className="specialty-hero-eyebrow">
              <FlaskConical size={14} aria-hidden="true" />
              <span>SPECIALTY FORMULATIONS &amp; SOLUTIONS</span>
            </div>

            {/* Synchronized Headline (changes at exact same time as image) */}
            <h1 id="specialty-hero-title" className="specialty-hero-title">
              <span className={`specialty-rotating-text ${isTransitioning ? "is-transitioning" : ""}`}>
                <span className="specialty-title-line-1">{active.line1}</span>
                <span className="specialty-title-line-2">{active.line2}</span>
              </span>
            </h1>

            {/* Synchronized Lead Paragraph */}
            <p className={`specialty-hero-lead ${isTransitioning ? "is-transitioning" : ""}`}>
              {active.lead}
            </p>

            {/* CTAs */}
            <div className="specialty-hero-actions">
              <Link href={active.href} className="btn btn-industrial-primary">
                <span>View {active.badgeTitle} Details</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href="#specialty-video-showcase" className="btn btn-specialty-video">
                <Play size={14} fill="currentColor" />
                <span>Watch Overview Video</span>
              </a>
              <Link href="/contact#contact-form" className="btn btn-industrial-secondary">
                <span>Discuss an application</span>
                <MessageCircle size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Rotating Specialty Hero Image Showcase */}
          <div className="specialty-hero-visual-wrap">
            <div className="specialty-hero-visual-card">
              <div className="specialty-hero-slider-track">
                {specialtySlides.map((slide, index) => {
                  const isActive = slideIdx === index;
                  return (
                    <div
                      key={slide.id}
                      className={`specialty-hero-slide ${isActive ? "is-active" : ""}`}
                      aria-hidden={!isActive}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        width={960}
                        height={540}
                        priority={index === 0}
                        className="specialty-hero-image"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Badge Updating in Real Time with Active Scene */}
              <div className="specialty-hero-visual-badge">
                <span className="specialty-brand-pill">
                  <span className="specialty-pill-dot" aria-hidden="true" />
                  <strong>{active.badgeTitle}</strong>
                  <span className="specialty-pill-sep">·</span>
                  <span>{active.tag}</span>
                </span>
              </div>

              {/* Carousel Navigation Dots */}
              <div className="specialty-hero-dots-nav" aria-label="Hero slide navigation">
                {specialtySlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`specialty-hero-dot ${slideIdx === index ? "is-active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Show ${slide.badgeTitle}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bigger, Dedicated Hallmark Features Section with Lean Hover Animations */}
        <div className="specialty-features-section" aria-label="Specialty hallmarks">
          <div className="specialty-features-grid">
            {featureHighlights.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="specialty-feature-card">
                  <div className="specialty-feat-icon-box" aria-hidden="true">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <div className="specialty-feat-content">
                    <h3 className="specialty-feat-title">{feat.title}</h3>
                    <p className="specialty-feat-desc">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Baseline Wave Divider */}
      <div className="specialty-hero-wave-bottom" aria-hidden="true">
        <svg
          className="industrial-hero-wave-svg"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="spec-hero-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.65" />
              <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="spec-hero-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
              <stop offset="30%" stopColor="#0369A1" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0369A1" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="spec-hero-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
              <stop offset="25%" stopColor="#0369A1" stopOpacity="0.65" />
              <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="spec-hero-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="35%" stopColor="#E0F2FE" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          <path
            d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
            fill="url(#spec-hero-wave-back)"
          />
          <path
            d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
            fill="url(#spec-hero-wave-mid)"
          />
          <path
            d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
            fill="url(#spec-hero-wave-front)"
          />
          <path
            d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
            stroke="url(#spec-hero-wave-shine)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
