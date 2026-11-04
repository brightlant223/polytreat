"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Sparkles, RefreshCw } from "lucide-react";

const benefitIcons = [
  {
    icon: Leaf,
    labelLine1: "Safe &",
    labelLine2: "Eco-Friendly",
  },
  {
    icon: ShieldCheck,
    labelLine1: "Effective",
    labelLine2: "Cleaning",
  },
  {
    icon: Sparkles,
    labelLine1: "Hygienic",
    labelLine2: "& Fresh",
  },
  {
    icon: RefreshCw,
    labelLine1: "Sustainable",
    labelLine2: "Care",
  },
];

const categoryCards = [
  {
    id: "floor-surface",
    title: "Floor & surface care",
    image: "/images/home/altra-card-floor-surface@2x.png",
    href: "#ranges",
  },
  {
    id: "hand-hygiene",
    title: "Hand care & hygiene",
    image: "/images/home/altra-card-hand-hygiene@2x.png",
    href: "#ranges",
  },
  {
    id: "dishwashing",
    title: "Dishwashing",
    image: "/images/home/altra-card-dishwashing@2x.png",
    href: "#ranges",
  },
  {
    id: "glass-window",
    title: "Glass & window care",
    image: "/images/home/altra-card-glass-window@2x.png",
    href: "#ranges",
  },
  {
    id: "bathroom-toilet",
    title: "Bathroom & toilet care",
    image: "/images/home/altra-card-bathroom-toilet@2x.png",
    href: "#ranges",
  },
  {
    id: "odour-air",
    title: "Odour & air care",
    image: "/images/home/altra-card-odour-air@2x.png",
    href: "#ranges",
  },
  {
    id: "natural-wellness",
    title: "Natural wellness",
    image: "/images/home/altra-card-natural-wellness@2x.png",
    href: "#ranges",
  },
];

export default function AltraCareHero() {
  return (
    <section className="ac-hero-exact" id="hero" aria-label="Altra Care Complete Cleaning and Care Solutions">
      {/* Seamless Faint-Blue and White Room Ambient Lighting */}
      <div className="ac-ambient-layer" aria-hidden="true">
        <div className="ac-ambient-window-light" />
        <div className="ac-ambient-soft-glow" />
      </div>

      <div className="ac-hero-inner">
        {/* TOP SPLIT: Exact proportions matching Reference Image 2 */}
        <div className="ac-hero-main-row">
          {/* LEFT: Heading, Description, CTA, and 4 Benefit Icons */}
          <div className="ac-hero-left">
            {/* Eyebrow with exact underline */}
            <div className="ac-eyebrow-container">
              <span className="ac-eyebrow-text">CLEAN SPACES, HEALTHY LIVING</span>
            </div>

            {/* Exactly Two-Line Large Heading */}
            <h1 className="ac-main-heading">
              <span className="ac-heading-line">Complete Cleaning &amp;</span>
              <span className="ac-heading-line">Care Solutions</span>
            </h1>

            {/* Description */}
            <p className="ac-main-description">
              Powerful, safe and eco-friendly products for hygiene, freshness and everyday care.
            </p>

            {/* Explore Products Button */}
            <div className="ac-cta-row">
              <Link href="#ranges" className="ac-primary-pill-btn">
                <span>Explore Products</span>
                <span className="ac-btn-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* 4 Benefit Icons exactly matching Reference Image 2 */}
            <div className="ac-benefit-icons-grid" role="list" aria-label="Product Benefits">
              {benefitIcons.map(({ icon: Icon, labelLine1, labelLine2 }) => (
                <div key={labelLine1 + labelLine2} className="ac-benefit-item" role="listitem">
                  <div className="ac-benefit-icon-ring">
                    <Icon size={21} strokeWidth={1.9} aria-hidden="true" />
                  </div>
                  <div className="ac-benefit-label">
                    <span>{labelLine1}</span>
                    <span>{labelLine2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Large, Uncropped Altra Care Showcase (No Card Frame) */}
          <div className="ac-hero-right">
            <div className="ac-showcase-unboxed">
              <Image
                src="/images/home/altra-care-clean-showcase@2x.png"
                alt="Altra Care complete cleaning solutions lineup featuring six bottles including perfumed liquid soap, protector floor cleaner lemon, golden floor cleaner deodoriser, dishwash liquid gel, power plus toilet cleaner, and streak-free glass cleaner"
                width={1288}
                height={690}
                priority
                className="ac-bottles-showcase-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 720px"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM: 7 Category Cards Row matching Reference Image 2 */}
        <div className="ac-bottom-categories-row" aria-label="Product Categories">
          <div className="ac-category-cards-track">
            {categoryCards.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="ac-exact-category-card"
                title={`Explore ${card.title}`}
              >
                <div className="ac-card-media">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={260}
                    height={330}
                    className="ac-card-media-img"
                    sizes="(max-width: 768px) 120px, 140px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
