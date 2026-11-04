"use client";

import { useState } from "react";
import { Camera, Package, ShieldCheck } from "lucide-react";

export default function CorosilHeroVisual() {
  const [activeTab, setActiveTab] = useState<"application" | "product">("application");

  return (
    <div className="corosil-hero-visual-wrap">
      {/* Frame styled identical to Specialty Product Hero Visual */}
      <div className="corosil-hero-visual-card">
        {/* Slide 1: Field Application Photography */}
        <div
          className={`corosil-visual-slide ${activeTab === "application" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "application"}
        >
          <img
            src="/images/specialty/corosil-hero.webp"
            alt="COROSIL rust converter primer application on structural steel"
            className="corosil-visual-cover-img"
          />
        </div>

        {/* Slide 2: Product Packaging Container */}
        <div
          className={`corosil-visual-slide is-product ${activeTab === "product" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "product"}
        >
          <div className="corosil-product-contain-backdrop">
            <img
              src="/images/specialty/corosil-product.webp"
              alt="COROSIL 20L Product Packaging Container"
              className="corosil-visual-contain-img"
            />
          </div>
        </div>

        {/* Floating Brand Pill (Top-Left) */}
        <div className="corosil-hero-visual-badge">
          <span className="corosil-brand-pill">
            <span className="corosil-pill-dot" aria-hidden="true" />
            <strong>COROSIL®</strong>
            <span className="corosil-pill-sep">·</span>
            <span>Rust Converter</span>
          </span>
        </div>

        {/* Floating View Switcher (Top-Right) */}
        <div className="corosil-visual-tabs" role="tablist" aria-label="View selection">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "application"}
            onClick={() => setActiveTab("application")}
            className={`corosil-visual-tab-btn ${activeTab === "application" ? "is-active" : ""}`}
          >
            <Camera size={13} />
            <span>Field View</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "product"}
            onClick={() => setActiveTab("product")}
            className={`corosil-visual-tab-btn ${activeTab === "product" ? "is-active" : ""}`}
          >
            <Package size={13} />
            <span>Product</span>
          </button>
        </div>


      </div>
    </div>
  );
}

