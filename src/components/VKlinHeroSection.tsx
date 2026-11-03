"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Leaf,
  Maximize2,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Utensils,
  Wind,
} from "lucide-react";

const heroCategories = [
  {
    id: "floor-surface",
    title: "Floor & surface care",
    image: "/images/home/categories/cat-floor-surface.jpg",
    href: "/vklin/products#floor-surface",
    icon: Sparkles,
  },
  {
    id: "hand-hygiene",
    title: "Hand care & hygiene",
    image: "/images/home/categories/cat-hand-hygiene.jpg",
    href: "/vklin/products#hand-hygiene",
    icon: Droplets,
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    image: "/images/home/categories/cat-dishwashing.jpg",
    href: "/vklin/products#dishwashing",
    icon: Utensils,
  },
  {
    id: "glass-window",
    title: "Glass & window care",
    image: "/images/home/categories/cat-glass-window.jpg",
    href: "/vklin/products#glass-care",
    icon: Maximize2,
  },
  {
    id: "bathroom-toilet",
    title: "Bathroom & toilet care",
    image: "/images/home/categories/cat-bathroom-toilet.jpg",
    href: "/vklin/products#toilet-care",
    icon: ShieldCheck,
  },
  {
    id: "odour-air",
    title: "Odour & air care",
    image: "/images/home/categories/cat-odour-air.jpg",
    href: "/specialty/polydor-ws",
    icon: Wind,
    badge: "POLYDOR",
  },
  {
    id: "natural-wellness",
    title: "Natural wellness",
    image: "/images/home/categories/cat-natural-wellness.jpg",
    href: "/vklin/products/herbal-mosquito-repellent",
    icon: Leaf,
  },
];



const heroSlides = [
  {
    id: "lineup",
    image: "/images/home/vklin-hero-showcase.jpg",
    alt: "V-Klin Complete Range of Cleaning Products",
    title: "Complete Care Lineup",
    tag: "10 Formulated Care Products",
  },
  {
    id: "floor",
    image: "/images/home/hero-slide-floor.jpg",
    alt: "V-Klin Golden Floor Cleaner & Protector Lemon on Marble Floor",
    title: "Floor & Surface Care",
    tag: "Mirror-Polished Living Spaces",
  },
  {
    id: "kitchen",
    image: "/images/home/hero-slide-kitchen.jpg",
    alt: "V-Klin Lemon Dishwash Liquid Gel & Multipurpose Cleaner on Quartz Countertop",
    title: "Kitchen & Utensils",
    tag: "1-Drop Grease Cutter Action",
  },
  {
    id: "bathroom",
    image: "/images/home/hero-slide-bathroom.jpg",
    alt: "V-Klin Power Plus Toilet Cleaner & Streak-Free Glass Cleaner",
    title: "Bathroom & Glass Care",
    tag: "Porcelain & Crystal Clarity",
  },
  {
    id: "herbal",
    image: "/images/home/hero-slide-herbal.jpg",
    alt: "V-Klin Herbal Mosquito Repellent & Room Freshener with Pure Botanicals",
    title: "Herbal Wellness & Freshness",
    tag: "Pure Neem & Citronella Shield",
  },
];

const heroTitles = [
  { line1: "Complete Cleaning &", line2: "Care Solutions" },
  { line1: "Sparkling Floor &", line2: "Surface Hygiene" },
  { line1: "Tough Stain & 99.9%", line2: "Germ Protection" },
  { line1: "Grease-Cutting Utensils &", line2: "Kitchen Care" },
  { line1: "Streak-Free Glass &", line2: "Mirror Shine" },
  { line1: "Molecular Odour &", line2: "Herbal Freshness" },
];

export default function VKlinHeroSection() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const transitionTimeout = useRef<number | null>(null);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setIsTransitioning(true);
      transitionTimeout.current = window.setTimeout(() => {
        setTitleIdx((prev) => (prev + 1) % heroTitles.length);
        setIsTransitioning(false);
      }, 350);
    }, 3200);

    return () => {
      clearInterval(timer);
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  return (
    <section className="vklin-hero-wrap" aria-labelledby="vklin-hero-title">
      {/* Soft Ambient Background Elements */}
      <div className="vklin-hero-bg-glow" aria-hidden="true" />

      <div className="hp-hero-container">
        {/* Main 2-Column Hero */}
        <div className="vklin-hero-grid">
          {/* Left Column: Heading, Lead & Value Badges */}
          <div className="vklin-hero-copy">
            <div className="vklin-hero-eyebrow">
              <span className="vklin-eyebrow-accent" aria-hidden="true" />
              <span>CLEAN SPACES, HEALTHY LIVING</span>
            </div>

            <h1 id="vklin-hero-title" className="vklin-hero-title">
              <span className={`vklin-rotating-text ${isTransitioning ? "is-transitioning" : ""}`}>
                <span className="vklin-title-line-1">{heroTitles[titleIdx].line1}</span>
                <span className="vklin-title-line-2">{heroTitles[titleIdx].line2}</span>
              </span>
            </h1>

            <p className="vklin-hero-lead">
              Powerful, safe and eco-friendly products for hygiene, freshness and everyday care.
            </p>

            {/* CTAs: 90% V-Klin + 10% Polydor Specialty */}
            <div className="vklin-hero-actions">
              <Link href="/vklin/products" className="vklin-hero-btn-primary">
                <span>Explore Products</span>
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>

              {/* 10% Polydor Molecular Odour Control & Repellent Spotlight */}
              <Link
                href="/specialty/polydor-ws"
                className="vklin-hero-polydor-badge"
                title="Explore POLYDOR-WS Molecular Odour Neutraliser"
              >
                <span className="vklin-polydor-dot" aria-hidden="true" />
                <span className="vklin-polydor-text">
                  Also by PolyTreat: <strong>POLYDOR-WS</strong> Odour Control &amp; <strong>D-MOS</strong>
                </span>
                <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>

            {/* 4 Trust & Feature Badges */}
            <div className="vklin-hero-features" aria-label="Product hallmarks">
              <div className="vklin-feat-item">
                <span className="vklin-feat-icon-wrap" aria-hidden="true">
                  <Leaf size={18} strokeWidth={2.2} />
                </span>
                <span className="vklin-feat-label">
                  Safe &amp;<br />Eco-Friendly
                </span>
              </div>

              <div className="vklin-feat-divider" aria-hidden="true" />

              <div className="vklin-feat-item">
                <span className="vklin-feat-icon-wrap" aria-hidden="true">
                  <ShieldCheck size={18} strokeWidth={2.2} />
                </span>
                <span className="vklin-feat-label">
                  Effective<br />Cleaning
                </span>
              </div>

              <div className="vklin-feat-divider" aria-hidden="true" />

              <div className="vklin-feat-item">
                <span className="vklin-feat-icon-wrap" aria-hidden="true">
                  <Sparkles size={18} strokeWidth={2.2} />
                </span>
                <span className="vklin-feat-label">
                  Hygienic<br />&amp; Fresh
                </span>
              </div>

              <div className="vklin-feat-divider" aria-hidden="true" />

              <div className="vklin-feat-item">
                <span className="vklin-feat-icon-wrap" aria-hidden="true">
                  <RefreshCw size={18} strokeWidth={2.2} />
                </span>
                <span className="vklin-feat-label">
                  Sustainable<br />Care
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: V-Klin Product Lineup Commercial Carousel (5 Rotating HD Images) */}
          <div className="vklin-hero-visual-wrap">
            <div className="vklin-hero-visual-card">
              {/* 5 Rotating HD Commercial Scenes */}
              <div className="vklin-hero-slider-track">
                {heroSlides.map((slide, index) => {
                  const isActive = slideIdx === index;
                  return (
                    <div
                      key={slide.id}
                      className={`vklin-hero-slide ${isActive ? "is-active" : ""}`}
                      aria-hidden={!isActive}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        width={1280}
                        height={720}
                        priority={index === 0}
                        className="vklin-hero-image"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Badge Updating with Active Scene */}
              <div className="vklin-hero-visual-badge">
                <span className="vklin-brand-pill">
                  <Image
                    src="/vklin-logo.webp"
                    alt="V-Klin Logo"
                    width={48}
                    height={20}
                    className="vklin-pill-logo"
                  />
                  <span>{heroSlides[slideIdx].tag}</span>
                </span>
              </div>

              {/* 5 Sleek Carousel Navigation Indicators */}
              <div className="vklin-hero-dots-nav" aria-label="Hero slide navigation">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`vklin-hero-dot ${slideIdx === index ? "is-active" : ""}`}
                    onClick={() => setSlideIdx(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Category Grid (7 Interactive Cards matching reference) */}
        <div className="vklin-categories-track" role="navigation" aria-label="Product categories">
          {heroCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={cat.href}
                className="vklin-cat-card"
                title={`Explore ${cat.title}`}
              >
                <div className="vklin-cat-thumb-box">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={140}
                    height={115}
                    className="vklin-cat-img"
                  />
                  {cat.badge && (
                    <span className="vklin-cat-badge">{cat.badge}</span>
                  )}
                </div>

                <div className="vklin-cat-footer">
                  <span className="vklin-cat-icon">
                    <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="vklin-cat-title">{cat.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

