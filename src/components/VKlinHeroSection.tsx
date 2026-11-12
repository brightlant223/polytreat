"use client";

import Image from "next/image";
import Link from "next/link";
import VKlinHeroCarousel from "@/components/VKlinHeroCarousel";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Leaf,
  Maximize2,
  MessageCircle,
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
    image: "/images/home/categories/cat-floor-surface-v2.webp",
    href: "/vklin/products#floor-surface",
    icon: Sparkles,
  },
  {
    id: "hand-hygiene",
    title: "Hand care & hygiene",
    image: "/images/home/categories/cat-hand-hygiene-v2.webp",
    href: "/vklin/products#hand-hygiene",
    icon: Droplets,
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    image: "/images/home/categories/cat-dishwashing-v2.webp",
    href: "/vklin/products#dishwashing",
    icon: Utensils,
  },
  {
    id: "glass-window",
    title: "Glass & window care",
    image: "/images/home/categories/cat-glass-window-v2.webp",
    href: "/vklin/products#glass-care",
    icon: Maximize2,
  },
  {
    id: "bathroom-toilet",
    title: "Bathroom & toilet care",
    image: "/images/home/categories/cat-bathroom-toilet-v2.webp",
    href: "/vklin/products#toilet-care",
    icon: ShieldCheck,
  },
  {
    id: "odour-air",
    title: "Odour & air care",
    image: "/images/home/categories/cat-odour-air-v2.webp",
    href: "/specialty/polydor-ws",
    icon: Wind,
  },
  {
    id: "natural-wellness",
    title: "Natural wellness",
    image: "/images/home/categories/cat-natural-wellness-v2.webp",
    href: "/vklin/products/herbal-mosquito-repellent",
    icon: Leaf,
  },
];

export default function VKlinHeroSection() {
  return (
    <section className="vklin-hero-wrap" aria-labelledby="vklin-hero-title">
      {/* Ambient Faint-Blue Sky & Window Light Glows */}
      <div className="vklin-hero-bg-glow" aria-hidden="true" />
      <div className="vklin-hero-ambient-soft" aria-hidden="true" />

      <div className="hp-hero-container">
        {/* Main 2-Column Wide Split Layout Matching Reference 2 */}
        <div className="vklin-hero-grid">
          {/* Left Column: Heading, Lead, Dual CTA Buttons & 4 Value Icons */}
          <div className="vklin-hero-copy">
            <div className="vklin-hero-eyebrow">
              <span className="vklin-eyebrow-accent" aria-hidden="true" />
              <span>CLEAN SPACES, HEALTHY LIVING</span>
            </div>

            <h1 id="vklin-hero-title" className="vklin-hero-title">
              <span className="vklin-rotating-text">
                <span className="vklin-title-line-1">Complete Cleaning &amp;</span>
                <span className="vklin-title-line-2">Care Solutions</span>
              </span>
            </h1>

            <p className="vklin-hero-lead">
              Powerful, safe and eco-friendly products for hygiene, freshness and everyday care.
            </p>

            {/* CTAs: Primary Explore + Contact Us + Polydor Specialty Pill */}
            <div className="vklin-hero-actions">
              <div className="vklin-btn-group">
                <Link href="/vklin/products" className="vklin-hero-btn-primary">
                  <span>Explore Products</span>
                  <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
                </Link>

                <Link href="/contact" className="vklin-hero-btn-secondary">
                  <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
                  <span>Contact Us</span>
                </Link>
              </div>

              {/* Polydor Molecular Odour Control & Repellent Spotlight from Reference 1 */}
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

            {/* 4 Feature Hallmarks with Circular Outlined Light-Blue Rings */}
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

          {/* Right Column: Grand Unobstructed Product Lineup Showcase Carousel */}
          <div className="vklin-hero-visual-wrap">
            <VKlinHeroCarousel />
          </div>
        </div>

        {/* Bottom Category Grid Inside Frosted Wave Shelf Tray (7 Cards Matching Reference 2) */}
        <div className="vklin-shelf-wrapper">
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
                      width={400}
                      height={250}
                      className="vklin-cat-img"
                    />
                  </div>

                  <div className="vklin-cat-footer">
                    <span className="vklin-cat-icon">
                      <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="vklin-cat-title">{cat.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
