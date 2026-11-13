"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutGrid,
  Layers,
  Hand,
  Droplet,
  AppWindow,
  ShowerHead,
  Wind,
  Leaf,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { vklinProductGroups } from "@/data/vklinProducts";

export interface CategoryItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

export const CATEGORIES: CategoryItem[] = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "floor-surface", label: "Floor & surface care", icon: Layers },
  { id: "hand-hygiene", label: "Hand care & hygiene", icon: Hand },
  { id: "dishwashing", label: "Dishwashing", icon: Droplet },
  { id: "glass-care", label: "Glass & window care", icon: AppWindow },
  { id: "toilet-care", label: "Bathroom & toilet care", icon: ShowerHead },
  { id: "odour-care", label: "Odour & air care", icon: Wind },
  { id: "natural-wellness", label: "Natural wellness", icon: Leaf },
];

export const CATEGORY_META_MAP: Record<
  string,
  { label: string; icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" }> }
> = {
  "floor-surface": { label: "Floor & Surface Care", icon: Layers },
  "hand-hygiene": { label: "Hand Care & Hygiene", icon: Hand },
  "dishwashing": { label: "Dishwashing", icon: Droplet },
  "glass-care": { label: "Glass & Window Care", icon: AppWindow },
  "toilet-care": { label: "Bathroom & Toilet Care", icon: ShowerHead },
  "odour-care": { label: "Odour & Air Care", icon: Wind },
  "natural-wellness": { label: "Natural Wellness", icon: Leaf },
};

// Clean, reference-matching copy for each product card
const PRODUCT_DESCRIPTIONS: Record<string, string> = {
  "golden-floor-cleaner":
    "A cleaning and deodorising floor cleaner with a lasting residual fragrance.",
  "protector-floor-cleaner-lemon":
    "A multipurpose cleaner and deodoriser with a fresh, fragrant finish.",
  "perfumed-floor-cleaner-floral":
    "A perfumed multipurpose Floor cleaner with deodorising action.",
  "multipurpose-surface-cleaner":
    "A proven commercial cleaner for hard and soft surface care.",
  "perfumed-liquid-soap-aqua":
    "An aloe-vera handwash gel with a mild lather.",
  "dishwash-liquid-gel-lemon":
    "A concentrated lemon dishwash gel for grease and stubborn soils.",
  "streak-free-glass-cleaner":
    "A ammonia-free glass cleaner that leaves no streaks.",
  "power-plus-toilet-cleaner":
    "A high-performance toilet cleaner for effective stain and scale removal.",
  "air-freshener-ac-duct-odour-eliminator":
    "An odour neutraliser for air-conditioning ducts, coils and indoor spaces.",
  "herbal-mosquito-repellent":
    "A plant-extract repellent spray for living areas and enclosed spaces.",
};

export default function VKlinProductsCatalogue() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Read URL hash on mount or when hash changes (e.g. from navbar dropdown links like #dishwashing)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && CATEGORIES.some((c) => c.id === hash)) {
        setActiveCategory(hash);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (typeof window !== "undefined") {
      if (categoryId === "all") {
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        window.history.replaceState(null, "", `#${categoryId}`);
      }
    }
  };

  // Flatten all products across groups
  const allProducts = useMemo(() => {
    return vklinProductGroups.flatMap((group) =>
      group.products.map((prod) => ({
        ...prod,
        groupId: group.id,
        groupTitle: group.title,
        cleanDescription: PRODUCT_DESCRIPTIONS[prod.id] || prod.summary,
      }))
    );
  }, []);

  // Filter based on active category
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return allProducts;
    return allProducts.filter((p) => p.groupId === activeCategory);
  }, [allProducts, activeCategory]);

  return (
    <div className="vklin-cat-wrap">
      {/* 1. HERO SECTION */}
      <section className="vklin-cat-hero" aria-labelledby="vklin-hero-heading">
        {/* Soft background curved accents */}
        <div className="vklin-hero-curve-decor" aria-hidden="true" />
        <div className="vklin-hero-leaf-glow" aria-hidden="true" />

        <div className="container vklin-hero-container">
          {/* Breadcrumbs */}
          <nav className="vklin-cat-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="vklin-bc-link">
              Home
            </Link>
            <ChevronRight size={13} className="vklin-bc-sep" aria-hidden="true" />
            <Link href="/vklin" className="vklin-bc-link">
              V-Klin
            </Link>
            <ChevronRight size={13} className="vklin-bc-sep" aria-hidden="true" />
            <span className="vklin-bc-current" aria-current="page">
              Cleaning Product Range
            </span>
          </nav>

          <div className="vklin-hero-main-row">
            {/* Left Content Column */}
            <div className="vklin-hero-left">
              {/* Green Kicker Label */}
              <div className="vklin-hero-kicker">
                <Leaf size={14} className="vklin-kicker-icon" aria-hidden="true" />
                <span>V-Klin Home &amp; Facility Care</span>
              </div>

              {/* Main Heading */}
              <h1 id="vklin-hero-heading" className="vklin-hero-title">
                Cleaning products, <br className="vklin-hero-br" />
                organised <span className="vklin-title-green">by task.</span>
              </h1>

              {/* Supporting Text */}
              <p className="vklin-hero-sub">
                Browse the range across everyday cleaning categories for homes and shared
                facilities.
              </p>

              {/* Compliance Note */}
              <div className="vklin-compliance-note">
                <span className="vklin-compliance-bar" aria-hidden="true" />
                <p>
                  Critical commercial &amp; institutional hygiene formulations manufactured to ISO
                  9001:2015 and WHO-GMP compliance standards.
                </p>
              </div>

              {/* Ask about product button */}
              <div className="vklin-hero-actions">
                <Link href="/contact#contact-form" className="vklin-hero-cta-btn">
                  <span>Ask about a product</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column: Cleaning supplies, mop, bucket, cloth & subtle leaves */}
            <div className="vklin-hero-visual-wrap">
              <div className="vklin-hero-img-frame">
                <Image
                  src="/images/vklin/hero-cleaning-equipment.jpg"
                  alt="V-Klin professional cleaning equipment, mop, bucket and cleaning formulations"
                  width={640}
                  height={420}
                  priority
                  className="vklin-hero-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                />
                <div className="vklin-hero-img-overlay" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS & PRODUCT CATALOGUE SECTION */}
      <section className="vklin-catalogue-section" aria-label="Product Catalogue">
        <div className="container">
          {/* Horizontally Aligned Pill Category Navigation */}
          <div className="vklin-filters-scroll-wrap">
            <nav className="vklin-filters-nav" aria-label="Filter products by category">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`vklin-filter-pill ${isActive ? "is-active" : ""}`}
                    aria-pressed={isActive}
                  >
                    <IconComponent size={15} className="vklin-filter-icon" aria-hidden="true" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Section Header: Eyebrow, Main Title, Dynamic Count */}
          <div className="vklin-range-header">
            <div className="vklin-range-title-block">
              <div className="vklin-range-eyebrow-row">
                <span className="vklin-range-eyebrow">OUR PRODUCT RANGE</span>
                <span className="vklin-range-line" aria-hidden="true" />
              </div>
              <h2 className="vklin-range-title">Complete V-Klin Cleaning Range</h2>
            </div>

            {/* Dynamic Product Count Pill */}
            <div className="vklin-count-badge-wrap">
              <span className="vklin-count-badge">
                {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
              </span>
            </div>
          </div>

          {/* 3. PRODUCT CARDS GRID (4 cols desktop, 2 cols tablet & mobile) */}
          <div className="vklin-cards-grid">
            {filteredProducts.map((product) => {
              const meta = CATEGORY_META_MAP[product.groupId] || {
                label: product.groupTitle,
                icon: Layers,
              };
              const BadgeIcon = meta.icon;

              return (
                <article key={product.id} className="vklin-product-card-modern">
                  {/* Category Pill Badge at Top-Left */}
                  <div className="vklin-card-top-bar">
                    <span className="vklin-card-category-badge">
                      <BadgeIcon size={12} className="vklin-card-cat-icon" aria-hidden="true" />
                      <span>{meta.label}</span>
                    </span>
                  </div>

                  {/* Product Image Area with Light Mint Gradient */}
                  <div className="vklin-card-media-box">
                    <div className="vklin-card-img-inner">
                      <Image
                        src={`/vklin-products/${product.image}`}
                        alt={`V-Klin ${product.name} packaging`}
                        width={240}
                        height={240}
                        className="vklin-card-product-img"
                        sizes="(max-width: 480px) 44vw, (max-width: 768px) 45vw, (max-width: 1200px) 45vw, 260px"
                      />
                    </div>
                  </div>

                  {/* Card Content: Title, Description, Button */}
                  <div className="vklin-card-content-body">
                    <h3 className="vklin-card-product-name">{product.name}</h3>
                    <p className="vklin-card-product-desc">{product.cleanDescription}</p>

                    <div className="vklin-card-foot">
                      <Link
                        href={product.href}
                        className="vklin-card-view-btn"
                        aria-label={`View details for ${product.name}`}
                      >
                        <span>View Product</span>
                        <ArrowRight size={13} className="vklin-btn-arrow" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 4. FOOTER CONSULTATION / ENQUIRY BOX */}
          <div className="vklin-catalogue-bottom-cta">
            <div className="vklin-bottom-cta-copy">
              <span className="vklin-bottom-cta-kicker">TECHNICAL &amp; BULK ENQUIRIES</span>
              <h3 className="vklin-bottom-cta-title">Need help choosing the right formulation?</h3>
              <p className="vklin-bottom-cta-sub">
                Share your facility requirements, surface materials, and soil conditions with our technical team for custom dilutions and bulk commercial packaging.
              </p>
            </div>
            <div className="vklin-bottom-cta-actions">
              <Link href="/contact#contact-form" className="btn btn-vklin">
                <span>Discuss with our team</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

