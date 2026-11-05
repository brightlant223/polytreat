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
            src="/images/specialty/polydor-odour-control.jpg"
            alt="POLYDOR-WS molecular odour neutraliser application"
            className="polydor-visual-cover-img"
          />
        </div>

        {/* Slide 2: Product Packaging Container */}
        <div
          className={`polydor-visual-slide is-product ${activeTab === "product" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "product"}
        >
          <div className="polydor-product-contain-backdrop">
            <img
              src="/images/specialty/polydor-crop.jpg"
              alt="POLYDOR-WS Product Packaging Container"
              className="polydor-visual-contain-img"
            />
          </div>
        </div>

        {/* Floating Brand Pill (Top-Left) */}
        <div className="polydor-hero-visual-badge">
          <span className="polydor-brand-pill">
            <span className="polydor-pill-dot" aria-hidden="true" />
            <strong>POLYDOR-WS®</strong>
            <span className="polydor-pill-sep">·</span>
            <span>Odour Neutraliser</span>
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

        {/* Floating Stats Card (Bottom Overlay: Dilution, Eco-status, Mechanism) */}
        <div className="polydor-floating-stats-card" aria-label="Key Product Highlights">
          <div className="polydor-fstat-item">
            <span className="polydor-fstat-val">1:20 – 1:1000</span>
            <span className="polydor-fstat-lbl">Dilution Range</span>
          </div>
          <div className="polydor-fstat-divider" aria-hidden="true" />
          <div className="polydor-fstat-item">
            <span className="polydor-fstat-val">EPA Aligned</span>
            <span className="polydor-fstat-lbl">Eco Criteria</span>
          </div>
          <div className="polydor-fstat-divider" aria-hidden="true" />
          <div className="polydor-fstat-item">
            <span className="polydor-fstat-val">Adduct Form</span>
            <span className="polydor-fstat-lbl">Neutralisation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

