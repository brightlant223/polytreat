"use client";

import { useState } from "react";
import { Camera, Package } from "lucide-react";

export default function PolydorHeroVisual() {
  const [activeTab, setActiveTab] = useState<"application" | "product">("application");

  return (
    <div className="polydor-hero-visual-wrap">
      {/* Frame styled identical to Corosil & Specialty Product Hero Visual */}
      <div className="polydor-hero-visual-card">
        {/* Slide 1: Field Application Photography */}
        <div
          className={`polydor-visual-slide ${activeTab === "application" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "application"}
        >
          <img
            src="/images/specialty/polydor-hero.webp"
            alt="POLYDOR-WS molecular odour neutraliser application"
            className="polydor-visual-cover-img"
          />
        </div>

        {/* Slide 2: Product Packaging Container */}
        <div
          className={`polydor-visual-slide is-product ${activeTab === "product" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "product"}
        >
          <img
            src="/images/specialty/polydor-product.webp"
            alt="POLYDOR-WS Product Packaging Container"
            className="polydor-visual-cover-img"
          />
        </div>

        {/* Floating Brand Pill (Bottom-Left, matching Corosil & Specialty Product tag) */}
        <div className="polydor-hero-visual-badge">
          <span className="polydor-brand-pill">
            <span className="polydor-pill-dot" aria-hidden="true" />
            <strong>POLYDOR-WS®</strong>
            <span className="polydor-pill-sep">·</span>
            <span className="polydor-pill-sub">Odour Neutraliser</span>
          </span>
        </div>

        {/* Floating View Switcher (Top-Right) */}
        <div className="polydor-visual-tabs" role="tablist" aria-label="View selection">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "application"}
            onClick={() => setActiveTab("application")}
            className={`polydor-visual-tab-btn ${activeTab === "application" ? "is-active" : ""}`}
          >
            <Camera size={13} />
            <span>Field View</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "product"}
            onClick={() => setActiveTab("product")}
            className={`polydor-visual-tab-btn ${activeTab === "product" ? "is-active" : ""}`}
          >
            <Package size={13} />
            <span>Product</span>
          </button>
        </div>
      </div>
    </div>
  );
}

