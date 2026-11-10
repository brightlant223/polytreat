"use client";

import { useState } from "react";
import { Camera, Package } from "lucide-react";

export default function PolyklinHeroVisual() {
  const [activeTab, setActiveTab] = useState<"application" | "product">("application");

  return (
    <div className="polyklin-hero-visual-wrap">
      {/* Frame styled identical to Corosil & Specialty Product Hero Visual */}
      <div className="polyklin-hero-visual-card">
        {/* Slide 1: Field Application Photography */}
        <div
          className={`polyklin-visual-slide ${activeTab === "application" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "application"}
        >
          <img
            src="/images/specialty/polyklin-hero.webp"
            alt="POLYKLIN AHU and FCU coil cleaning compound application"
            className="polyklin-visual-cover-img"
          />
        </div>

        {/* Slide 2: Product Packaging Container */}
        <div
          className={`polyklin-visual-slide is-product ${activeTab === "product" ? "is-active" : ""}`}
          aria-hidden={activeTab !== "product"}
        >
          <img
            src="/images/specialty/polyklin-product.webp"
            alt="POLYKLIN Product Packaging Container"
            className="polyklin-visual-cover-img"
          />
        </div>

        {/* Floating Brand Pill (Top-Left) */}
        <div className="polyklin-hero-visual-badge">
          <span className="polyklin-brand-pill">
            <span className="polyklin-pill-dot" aria-hidden="true" />
            <strong>POLYKLIN®</strong>
            <span className="polyklin-pill-sep">·</span>
            <span>Coil Cleaner</span>
          </span>
        </div>

        {/* Floating View Switcher (Top-Right) */}
        <div className="polyklin-visual-tabs" role="tablist" aria-label="View selection">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "application"}
            onClick={() => setActiveTab("application")}
            className={`polyklin-visual-tab-btn ${activeTab === "application" ? "is-active" : ""}`}
          >
            <Camera size={13} />
            <span>Field View</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "product"}
            onClick={() => setActiveTab("product")}
            className={`polyklin-visual-tab-btn ${activeTab === "product" ? "is-active" : ""}`}
          >
            <Package size={13} />
            <span>Product</span>
          </button>
        </div>

        {/* Floating Stats Card (Bottom Overlay: Mix ratio, Rinse dwell, Pack sizing) */}
        <div className="polyklin-floating-stats-card" aria-label="Key Product Highlights">
          <div className="polyklin-fstat-item">
            <span className="polyklin-fstat-val">1:1 Ratio</span>
            <span className="polyklin-fstat-lbl">Mix with Water</span>
          </div>
          <div className="polyklin-fstat-divider" aria-hidden="true" />
          <div className="polyklin-fstat-item">
            <span className="polyklin-fstat-val">5–10 Min</span>
            <span className="polyklin-fstat-lbl">Rinse Dwell</span>
          </div>
          <div className="polyklin-fstat-divider" aria-hidden="true" />
          <div className="polyklin-fstat-item">
            <span className="polyklin-fstat-val">35–200 kg</span>
            <span className="polyklin-fstat-lbl">Pack Sizes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

