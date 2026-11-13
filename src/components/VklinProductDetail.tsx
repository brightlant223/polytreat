"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Info,
  Leaf,
  ListOrdered,
  MapPin,
  ShieldAlert,
  Maximize2,
  X,
  ChevronRight,
  Home,
  Layers,
  Hand,
  Droplet,
  AppWindow,
  ShowerHead,
  Wind,
} from "lucide-react";
import { vklinProductGroups, type VKlinProduct } from "@/data/vklinProducts";

// Authentic packaging labels for each product
const PRODUCT_LABEL_MAP: Record<string, string> = {
  "golden-floor-cleaner": "/vklin-products/product-label-vklin-golden-floor-cleaner-deodoriser.jpeg",
  "protector-floor-cleaner-lemon": "/vklin-products/product-label-vklin-protector-lemon-floor-cleaner.jpeg",
  "perfumed-floor-cleaner-floral": "/vklin-products/product-label-vklin-perfumed-floor-cleaner-floral.jpeg",
  "multipurpose-surface-cleaner": "/vklin-products/product-label-vklin-multipurpose-surface-cleaner.jpeg",
  "perfumed-liquid-soap-aqua": "/vklin-products/product-label-vklin-perfumed-liquid-soap-aqua.jpeg",
  "dishwash-liquid-gel-lemon": "/vklin-products/product-label-vklin-dishwash-liquid-gel-lemon.jpeg",
  "streak-free-glass-cleaner": "/vklin-products/product-label-vklin-streak-free-glass-cleaner.jpeg",
  "power-plus-toilet-cleaner": "/vklin-products/product-label-vklin-power-plus-toilet-cleaner.jpeg",
  "air-freshener-ac-duct-odour-eliminator": "/vklin-products/product-label-vklin-air-freshener-ac-duct-odor-eliminator.jpeg",
  "herbal-mosquito-repellent": "/vklin-products/product-label-vklin-herbal-mosquito-repellent.jpeg",
};

// Authentic surface / application context photos
const CATEGORY_IMAGE_MAP: Record<string, string> = {
  "floor-surface": "/images/home/categories/cat-floor-surface-clean.jpg",
  "hand-hygiene": "/images/home/categories/cat-hand-hygiene-clean.jpg",
  "dishwashing": "/images/home/categories/cat-dishwashing-clean.jpg",
  "glass-care": "/images/home/categories/cat-glass-window-clean.jpg",
  "toilet-care": "/images/home/categories/cat-bathroom-toilet-clean.jpg",
  "odour-care": "/images/home/categories/cat-odour-air-clean.jpg",
  "natural-wellness": "/images/home/categories/cat-natural-wellness-clean.jpg",
};

// Lucide category icons
const CATEGORY_ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean | "true" | "false" }>> = {
  "floor-surface": Layers,
  "hand-hygiene": Hand,
  "dishwashing": Droplet,
  "glass-care": AppWindow,
  "toilet-care": ShowerHead,
  "odour-care": Wind,
  "natural-wellness": Leaf,
};

export default function VklinProductDetail({ product }: { product: VKlinProduct }) {
  const group = vklinProductGroups.find((entry) => entry.id === product.groupId);
  const categoryTitle = group?.title ?? "Floor & surface care";
  const CategoryIcon = CATEGORY_ICON_MAP[product.groupId] || Layers;

  // Gallery items for this product
  const galleryItems = [
    {
      src: `/vklin-products/${product.image}`,
      alt: `V-Klin ${product.name} Packaged Product`,
      label: "Packaged Product",
    },
    {
      src: PRODUCT_LABEL_MAP[product.id] || `/vklin-products/${product.image}`,
      alt: `V-Klin ${product.name} Official Packaging Label`,
      label: "Packaging Label",
    },
    {
      src: CATEGORY_IMAGE_MAP[product.groupId] || "/images/home/categories/cat-floor-surface-clean.jpg",
      alt: `V-Klin ${product.name} Application & Surface Context`,
      label: "Application Context",
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  // Facts Strip Calculation (matching reference Image 2)
  const shortSpec = product.specifications.find((s) => s.value.length <= 48);
  const thirdFact =
    product.fragrances.length > 0
      ? { label: "FRAGRANCES", value: product.fragrances.join(" - ") }
      : shortSpec
      ? { label: shortSpec.label.toUpperCase(), value: shortSpec.value }
      : { label: "FORMULATION", value: "Ready to use" };

  const facts = [
    { label: "CATEGORY", value: categoryTitle },
    {
      label: "PACK SIZE",
      value: product.packSizes.length > 0 ? product.packSizes.slice(0, 3).join(" - ") : "Commercial sizes",
    },
    thirdFact,
  ];

  const activeImage = galleryItems[activeImageIndex];

  return (
    <main className="vklin-pdetail-page">
      {/* 1. HERO SECTION */}
      <section className="vklin-pdetail-hero" aria-labelledby="product-title">
        <div className="container">
          {/* Breadcrumbs Navigation */}
          <nav className="vklin-pdetail-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="vklin-pdetail-bc-link">
              <Home size={13} className="vklin-pdetail-home-icon" aria-hidden="true" />
              <span>Home</span>
            </Link>
            <ChevronRight size={13} className="vklin-pdetail-bc-sep" aria-hidden="true" />
            <Link href="/vklin" className="vklin-pdetail-bc-link">
              V-Klin
            </Link>
            <ChevronRight size={13} className="vklin-pdetail-bc-sep" aria-hidden="true" />
            <Link href="/vklin/products" className="vklin-pdetail-bc-link">
              Cleaning range
            </Link>
            <ChevronRight size={13} className="vklin-pdetail-bc-sep" aria-hidden="true" />
            <span className="vklin-pdetail-bc-curr" aria-current="page">
              {product.name}
            </span>
          </nav>

          <div className="vklin-pdetail-hero-grid">
            {/* Left Column: Product Information & Actions */}
            <div className="vklin-pdetail-left">
              {/* Category Pill Badge */}
              <div className="vklin-pdetail-badge">
                <CategoryIcon size={13} className="vklin-pdetail-badge-icon" aria-hidden="true" />
                <span>V-Klin {categoryTitle}</span>
              </div>

              {/* Product Title */}
              <h1 id="product-title" className="vklin-pdetail-title">
                {product.name}
              </h1>

              {/* Product Summary */}
              <p className="vklin-pdetail-summary">{product.summary}</p>

              {/* Action Buttons */}
              <div className="vklin-pdetail-actions">
                <Link className="btn-pdetail-primary" href="/contact#contact-form">
                  <span>Enquire about this product</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link className="btn-pdetail-secondary" href="/vklin/products">
                  <ArrowLeft size={14} aria-hidden="true" />
                  <span>Back to products</span>
                </Link>
              </div>

              {/* Compact Information Strip (3 columns) */}
              <div className="vklin-pdetail-facts-strip" aria-label="Product Highlights">
                {facts.map((fact, idx) => (
                  <div key={fact.label} className="vklin-fact-col">
                    <span className="vklin-fact-label">{fact.label}</span>
                    <strong className="vklin-fact-val">{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Product Gallery */}
            <div className="vklin-pdetail-right">
              <figure className="vklin-pdetail-gallery-card">
                <div className="vklin-pdetail-gallery-main">
                  {/* Left Thumbnail Stack (3 thumbnails) */}
                  <div className="vklin-pdetail-thumbnails" aria-label="Product image thumbnails">
                    {galleryItems.map((item, idx) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`vklin-pdetail-thumb-btn ${activeImageIndex === idx ? "is-active" : ""}`}
                        aria-label={`View ${item.label}`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={60}
                          height={60}
                          className="vklin-thumb-img"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Main Display Stage */}
                  <div className="vklin-pdetail-image-stage">
                    <button
                      type="button"
                      className="vklin-pdetail-zoom-btn"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label="Expand image in full resolution"
                      title="Expand image"
                    >
                      <Maximize2 size={16} aria-hidden="true" />
                    </button>

                    <div
                      className="vklin-pdetail-main-img-wrap"
                      onClick={() => setIsLightboxOpen(true)}
                      role="button"
                      tabIndex={0}
                      aria-label="Click to enlarge product view"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setIsLightboxOpen(true);
                      }}
                    >
                      <Image
                        src={activeImage.src}
                        alt={activeImage.alt}
                        fill
                        priority
                        className="vklin-main-product-img"
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 480px"
                      />
                    </div>
                  </div>
                </div>

                {/* Caption at bottom of gallery */}
                <figcaption className="vklin-pdetail-gallery-caption">
                  <span className="vklin-caption-title">Official V-Klin Packaged Product</span>
                  <span className="vklin-caption-sub">Formulated &amp; manufactured by PolyTreat Chemicals.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT OVERVIEW & FEATURES (Two-Column Layout) */}
      <section className="vklin-pdetail-overview-section" aria-labelledby="product-overview-title">
        <div className="container">
          <div className="vklin-pdetail-overview-grid">
            {/* Left Column: Product Overview */}
            <div className="vklin-overview-copy-block">
              <div className="vklin-section-kicker-row">
                <span className="vklin-section-kicker">PRODUCT OVERVIEW</span>
                <span className="vklin-section-kicker-line" aria-hidden="true" />
              </div>
              <h2 id="product-overview-title" className="vklin-overview-heading">
                {product.headline}
              </h2>
              <div className="vklin-overview-desc">
                <p>{product.description}</p>
              </div>
            </div>

            {/* Right Column: Features Card */}
            <div className="vklin-features-col">
              <div className="vklin-section-kicker-row">
                <span className="vklin-section-kicker">FEATURES</span>
                <span className="vklin-section-kicker-line" aria-hidden="true" />
              </div>
              <div className="vklin-features-card">
                <ul className="vklin-features-list">
                  {product.features.map((feature) => (
                    <li key={feature} className="vklin-feature-item">
                      <CheckCircle2 size={16} className="vklin-feature-check-icon" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHERE IT IS USED & HOW TO USE IT (Two Cards Side by Side) */}
      <section className="vklin-pdetail-usage-section" aria-labelledby="usage-heading">
        <div className="container">
          <div className="vklin-pdetail-two-cards-grid">
            {/* Card 1: Where It Is Used */}
            <div className="vklin-usage-box">
              <div className="vklin-box-head">
                <MapPin size={17} className="vklin-box-icon" aria-hidden="true" />
                <h3 id="usage-heading" className="vklin-box-title">
                  WHERE IT IS USED
                </h3>
                <span className="vklin-box-head-line" aria-hidden="true" />
              </div>
              <ul className="vklin-app-list">
                {product.applications.map((application) => (
                  <li key={application} className="vklin-app-item">
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: How To Use It */}
            <div className="vklin-usage-box">
              <div className="vklin-box-head">
                <ListOrdered size={17} className="vklin-box-icon" aria-hidden="true" />
                <h3 className="vklin-box-title">HOW TO USE IT</h3>
                <span className="vklin-box-head-line" aria-hidden="true" />
              </div>
              <ol className="vklin-steps-list">
                {product.directions.map((step, idx) => (
                  <li key={step} className="vklin-step-item">
                    <span className="vklin-step-num" aria-hidden="true">
                      {idx + 1}
                    </span>
                    <span className="vklin-step-text">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="vklin-steps-note">
                Directions as published in our product literature. Confirm the current label and technical guidance
                with our team for your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT INFORMATION / TECHNICAL DETAILS TABLE */}
      <section className="vklin-pdetail-specs-section" aria-labelledby="specs-title">
        <div className="container">
          <div className="vklin-pdetail-specs-box">
            {/* Left Header */}
            <div className="vklin-specs-header-col">
              <div className="vklin-section-kicker-row">
                <span className="vklin-section-kicker">PRODUCT INFORMATION</span>
                <span className="vklin-section-kicker-line" aria-hidden="true" />
              </div>
              <h2 id="specs-title" className="vklin-specs-title">
                Technical details.
              </h2>
              <p className="vklin-specs-sub">
                Specifications and pack sizes as published in our product literature. Ask us for the current datasheet for
                your application.
              </p>
            </div>

            {/* Right Table Card */}
            <div className="vklin-specs-table-card">
              <dl className="vklin-specs-table">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="vklin-spec-row">
                    <dt className="vklin-spec-dt">{spec.label}</dt>
                    <dd className="vklin-spec-dd">{spec.value}</dd>
                  </div>
                ))}
                <div className="vklin-spec-row">
                  <dt className="vklin-spec-dt">Pack sizes</dt>
                  <dd className="vklin-spec-dd">{product.packSizes.join(" - ")}</dd>
                </div>
                {product.fragrances.length > 0 && (
                  <div className="vklin-spec-row">
                    <dt className="vklin-spec-dt">Fragrances</dt>
                    <dd className="vklin-spec-dd">{product.fragrances.join(" - ")}</dd>
                  </div>
                )}
                {product.specifications.length === 0 && (
                  <div className="vklin-spec-row">
                    <dt className="vklin-spec-dt">Category classification</dt>
                    <dd className="vklin-spec-dd">{categoryTitle}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HANDLING & STORAGE AND ABOUT THESE DETAILS */}
      <section className="vklin-pdetail-handling-section" aria-labelledby="handling-title">
        <div className="container">
          <div className="vklin-pdetail-bottom-two-cards">
            {/* Card 1: Handling & Storage */}
            <div className="vklin-handling-card">
              <div className="vklin-box-head">
                <ShieldAlert size={17} className="vklin-box-icon" aria-hidden="true" />
                <h3 id="handling-title" className="vklin-box-title">
                  HANDLING &amp; STORAGE
                </h3>
                <span className="vklin-box-head-line" aria-hidden="true" />
              </div>
              <ul className="vklin-app-list">
                {product.cautions.map((caution) => (
                  <li key={caution} className="vklin-app-item">
                    <span>{caution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: About These Details */}
            <div className="vklin-handling-card is-about-card">
              <div className="vklin-box-head">
                <Info size={17} className="vklin-box-icon" aria-hidden="true" />
                <h3 className="vklin-box-title">ABOUT THESE DETAILS</h3>
                <span className="vklin-box-head-line" aria-hidden="true" />
              </div>
              <p className="vklin-about-text">
                This page is written from PolyTreat&apos;s published V-Klin product literature. It is a summary, not a
                substitute for the current label or safety data sheet, and it does not claim disinfection or pesticidal
                performance.
              </p>
            </div>
          </div>

          {/* 6. BOTTOM CONSULTATION / ENQUIRY BANNER */}
          <div className="vklin-pdetail-consult-cta">
            <div className="vklin-consult-copy">
              <span className="vklin-consult-kicker">TECHNICAL &amp; INSTITUTIONAL ADVICE</span>
              <h3 className="vklin-consult-title">Need custom dilution or bulk institutional supply?</h3>
              <p className="vklin-consult-sub">
                Connect with our technical chemists to request Certificates of Analysis (COA), Safety Data Sheets (SDS), or
                site-specific dosing instructions for your facility.
              </p>
            </div>
            <div className="vklin-consult-action">
              <Link href="/contact#contact-form" className="btn btn-vklin">
                <span>Contact PolyTreat team</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="vklin-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Product Image Lightbox"
        >
          <div className="vklin-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="vklin-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close image preview"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="vklin-lightbox-img-wrap">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={800}
                height={800}
                className="vklin-lightbox-img"
              />
            </div>
            <p className="vklin-lightbox-caption">{activeImage.alt}</p>
          </div>
        </div>
      )}
    </main>
  );
}
