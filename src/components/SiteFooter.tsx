import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries & applications", href: "/industries" },
  { label: "V-Klin", href: "/vklin" },
  { label: "V-Klin products", href: "/vklin/products" },
  { label: "Quality", href: "/quality" },
  { label: "Certifications", href: "/certifications" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks = [
  { label: "Industrial water treatment", href: "/solutions/industrial-water" },
  { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
  { label: "RO & effluent", href: "/solutions/ro-effluent" },
  { label: "Construction chemistry", href: "/solutions/construction-chemistry" },
  { label: "Waterproofing, repair & coatings", href: "/solutions/waterproofing-repair-coatings" },
  { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing" },
  { label: "Paint preservatives", href: "/solutions/paint-preservatives" },
  { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals" },
  { label: "Fireside treatment", href: "/solutions/fireside-treatment" },
  { label: "Automotive chemicals", href: "/solutions/automotive-chemicals" },
  { label: "Specialty products", href: "/specialty" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer pt-footer-wrapper">
      {/* Dual Overlapping Top Wave Divider */}
      <div className="pt-top-waves" aria-hidden="true">
        <svg
          className="pt-wave-back"
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 C280,68 560,0 840,42 C1120,84 1300,32 1440,24 L1440,84 L0,84 Z"
            fill="url(#pt-wave-grad-1)"
          />
          <defs>
            <linearGradient id="pt-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="pt-wave-front"
          viewBox="0 0 1440 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,38 C360,6 720,64 1080,28 C1260,10 1380,24 1440,32 L1440,76 L0,76 Z"
            fill="url(#pt-wave-grad-2)"
          />
          <defs>
            <linearGradient id="pt-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.55" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="site-footer-waves" aria-hidden="true" />

      {/* Floating Lifted Panel */}
      <div className="pt-floating-panel">
        {/* Ambient Bubbles (Placed only in empty margins, avoiding text) */}
        <div className="pt-bubbles-layer" aria-hidden="true">
          <span className="pt-bubble pt-bubble-1" />
          <span className="pt-bubble pt-bubble-2" />
          <span className="pt-bubble pt-bubble-3" />
          <span className="pt-bubble pt-bubble-4" />
        </div>

        {/* 6. Masked Outlined POLYTREAT Watermark (Fades out toward bottom bar) */}
        <div className="pt-brand-watermark" aria-hidden="true">
          POLYTREAT
        </div>

        <div className="container pt-panel-inner">
          {/* Equal-Height 4-Column Balanced Grid */}
          <div className="footer-main pt-main-grid">
            {/* 1 & 2. Brand Column (Top-aligned Logo, Tagline Below, Drop at Bottom-Right) */}
            <div className="footer-brand pt-brand-column">
              <div className="pt-brand-content">
                <Link href="/" className="footer-logo-link pt-brand-logo-link" aria-label="PolyTreat home">
                  <Image
                    className="footer-logo pt-brand-logo-img"
                    src="/logo.png"
                    width={2167}
                    height={726}
                    alt="PolyTreat Chemicals"
                  />
                </Link>
                <p className="pt-brand-tagline">
                  Applied chemistry for industrial water, construction, and everyday facility care.
                </p>
              </div>

              {/* 2. Low-opacity Water Drop at bottom-right of brand column */}
              <div className="pt-brand-drop-bg" aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 12 C100 12 32 88 32 135 C32 171.4 62.4 200 100 200 C137.6 200 168 171.4 168 135 C168 88 100 12 100 12 Z"
                    fill="url(#pt-brand-drop-grad)"
                  />
                  <circle cx="72" cy="132" r="10" fill="#38bdf8" fillOpacity="0.25" />
                  <circle cx="86" cy="112" r="5" fill="#38bdf8" fillOpacity="0.2" />
                  <defs>
                    <linearGradient id="pt-brand-drop-grad" x1="100" y1="12" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 4. Explore Column (Card with Left Indicator Line, "Industries & applications" Fits on One Line) */}
            <nav className="footer-column pt-col-card pt-explore-card" aria-label="Explore">
              <h2 className="pt-col-heading">
                Explore
                <span className="pt-heading-line" aria-hidden="true" />
              </h2>
              <div className="pt-explore-line-wrap">
                <div className="pt-explore-list">
                  {exploreLinks.map(({ label, href }) => (
                    <Link href={href} key={href} className="pt-explore-item">
                      <ChevronRight size={14} className="pt-explore-chevron" aria-hidden="true" />
                      <span className="pt-explore-text">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* 5 & 8. Our Work Column (Card with Inner Highlight on Alternating Chips) */}
            <nav className="footer-column pt-col-card pt-work-card" aria-label="Our work">
              <h2 className="pt-col-heading">
                Our work
                <span className="pt-heading-line" aria-hidden="true" />
              </h2>
              <div className="pt-work-chips-wrap">
                {solutionLinks.map(({ label, href }, index) => (
                  <Link
                    href={href}
                    key={href}
                    className={`pt-pill-chip ${index % 2 === 0 ? "pt-chip-blue" : "pt-chip-teal"}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* 3 & 5. Contact Column (Light Card, 4px Top Strip, Dark Navy 15px Text, Full-Divided Even Rows) */}
            <div className="footer-column footer-contact-column pt-col-card pt-contact-card-refined">
              {/* 4px top gradient strip */}
              <div className="pt-contact-top-strip" aria-hidden="true" />

              <h2 className="pt-col-heading">
                Contact
                <span className="pt-heading-line" aria-hidden="true" />
              </h2>

              <div className="pt-contact-buttons-list">
                <a href="mailto:polyind2@gmail.com" className="pt-contact-row-refined">
                  <span className="pt-contact-icon-bubble-refined">
                    <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">polyind2@gmail.com</span>
                  <ArrowUpRight size={16} className="pt-contact-arrow-refined" aria-hidden="true" />
                </a>

                <a href="tel:+919820235995" className="pt-contact-row-refined">
                  <span className="pt-contact-icon-bubble-refined">
                    <Phone size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">+91 98202 35995</span>
                  <ArrowUpRight size={16} className="pt-contact-arrow-refined" aria-hidden="true" />
                </a>

                <span className="pt-contact-row-refined pt-contact-static-row-refined">
                  <span className="pt-contact-icon-bubble-refined">
                    <MapPin size={18} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">Goregaon (West), Mumbai</span>
                  <span className="pt-contact-arrow-placeholder" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          {/* 6 & 8 & 9. Bottom Section with Elevated Divider and Polished Back-To-Top Button */}
          <div className="pt-bottom-section">
            <div className="pt-bottom-gradient-divider" aria-hidden="true" />
            <div className="footer-bottom pt-bottom-content">
              <span className="footer-copyright pt-bottom-text">
                © 2026 PolyTreat Chemicals Pvt. Ltd.
              </span>
              <span className="footer-principles pt-bottom-text pt-principles-text">
                Performance, quality, reliability, service
              </span>
              <div className="pt-bottom-right-wrap">
                <span className="footer-credit pt-bottom-text pt-credit-text">
                  Designed with <span className="footer-credit-heart pt-heart-icon" aria-hidden="true">♥</span> by{" "}
                  <a href="https://brightlant.com" target="_blank" rel="noreferrer" className="pt-brightlant-credit">
                    Brightlant
                  </a>
                </span>
                <a href="#top" aria-label="Back to top" className="pt-back-to-top-btn" title="Back to top">
                  <ArrowUp size={15} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS Styles */}
      <style>{`
        /* Root Wrapper */
        .pt-footer-wrapper {
          position: relative;
          background: transparent !important;
          padding: 0 0 2rem 0 !important;
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Dual Overlapping Top Wave Divider */
        .pt-top-waves {
          position: relative;
          width: 100%;
          height: 64px;
          overflow: hidden;
          line-height: 0;
          pointer-events: none;
          margin-bottom: -18px;
          z-index: 1;
        }

        .pt-wave-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .pt-wave-front {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Floating Lifted Panel */
        .pt-floating-panel {
          position: relative;
          margin: 0 1rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 249, 255, 0.88) 48%, rgba(240, 253, 250, 0.94) 100%);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 2rem;
          box-shadow: 0 20px 60px -20px rgba(14, 80, 160, 0.22), 0 0 0 1px rgba(186, 230, 253, 0.35);
          overflow: hidden;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .pt-floating-panel {
            margin: 0 2rem;
          }
        }

        .pt-panel-inner {
          position: relative;
          z-index: 3;
          padding-top: 1.75rem;
          padding-bottom: 0.5rem;
        }

        /* 6. Outlined POLYTREAT Watermark with Mask Linear Gradient */
        .pt-brand-watermark {
          position: absolute;
          bottom: 35px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
          font-size: clamp(4.5rem, 14vw, 11rem);
          font-weight: 900;
          letter-spacing: 0.18em;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(2, 132, 199, 0.05);
          white-space: nowrap;
          user-select: none;
          -webkit-user-select: none;
          pointer-events: none;
          z-index: 0;
          line-height: 0.75;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.35) 45%, transparent 85%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.35) 45%, transparent 85%);
        }

        /* Ambient Bubbles in Empty Corners Only */
        .pt-bubbles-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .pt-bubble {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(56, 189, 248, 0.15));
          border: 1px solid rgba(186, 230, 253, 0.35);
        }

        .pt-bubble-1 {
          width: 26px;
          height: 26px;
          top: 8%;
          left: 3%;
          animation: ptFloatBubble1 22s ease-in-out infinite;
        }

        .pt-bubble-2 {
          width: 18px;
          height: 18px;
          bottom: 14%;
          left: 12%;
          animation: ptFloatBubble2 26s ease-in-out infinite;
        }

        .pt-bubble-3 {
          width: 32px;
          height: 32px;
          top: 6%;
          right: 36%;
          animation: ptFloatBubble3 24s ease-in-out infinite;
        }

        .pt-bubble-4 {
          width: 16px;
          height: 16px;
          top: 8%;
          right: 4%;
          animation: ptFloatBubble1 28s ease-in-out infinite;
        }

        @keyframes ptFloatBubble1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(10px); }
        }

        @keyframes ptFloatBubble2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-22px) translateX(-10px); }
        }

        @keyframes ptFloatBubble3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-16px) translateX(12px); }
        }

        /* 7. Staggered Column Entrance */
        .pt-main-grid > *:nth-child(1) {
          animation: ptStaggerFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 0ms both;
        }
        .pt-main-grid > *:nth-child(2) {
          animation: ptStaggerFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
        }
        .pt-main-grid > *:nth-child(3) {
          animation: ptStaggerFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 160ms both;
        }
        .pt-main-grid > *:nth-child(4) {
          animation: ptStaggerFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 240ms both;
        }

        @keyframes ptStaggerFadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-bubble {
            animation: none !important;
          }
          .pt-main-grid > * {
            animation: none !important;
          }
          .pt-col-card,
          .pt-back-to-top-btn,
          .pt-pill-chip,
          .pt-explore-item,
          .pt-contact-row-refined {
            transition: none !important;
          }
        }

        /* 3 & 4. Equal-Height 4-Column Desktop Grid */
        .pt-main-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.98fr) minmax(0, 1.25fr) minmax(0, 1.05fr) !important;
          gap: clamp(1.25rem, 2vw, 2rem) !important;
          align-items: stretch !important;
          padding: 0.5rem 0 1.75rem !important;
        }

        /* 1 & 2. Brand Column Alignment */
        .pt-brand-column {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 1.35rem 0.5rem 1.35rem 0 !important;
          min-height: 100%;
        }

        .pt-brand-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .pt-brand-logo-link {
          display: inline-flex;
          align-items: center;
          width: 195px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .pt-brand-logo-link:hover {
          transform: scale(1.015);
          opacity: 0.94;
        }

        .pt-brand-logo-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .pt-brand-tagline {
          color: #334155 !important;
          font-size: 0.875rem !important;
          line-height: 1.65 !important;
          margin-top: 1.5rem !important;
          max-width: 24rem;
        }

        .pt-brand-drop-bg {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 140px;
          height: 140px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        /* Typography & Section Headings */
        .pt-col-heading {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1rem !important;
          color: #081A2C !important;
          font-size: 0.85rem !important;
          font-weight: 800 !important;
          letter-spacing: 0.2em !important;
          text-transform: uppercase !important;
        }

        .pt-heading-line {
          display: block;
          width: 32px;
          height: 3px;
          margin-top: 0.4rem;
          border-radius: 9999px;
          background: linear-gradient(90deg, #0284c7 0%, #0d9488 100%);
        }

        /* 5. Card Depth, Hover Lift & 1px Gradient Border Effect */
        .pt-col-card {
          position: relative;
          border-radius: 1.25rem !important;
          padding: 1.35rem 1.25rem !important;
          box-sizing: border-box;
          display: flex !important;
          flex-direction: column !important;
          height: 100%;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .pt-col-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 1.25rem;
          padding: 1px;
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.35) 0%, rgba(13, 148, 136, 0.35) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.65;
          transition: opacity 300ms ease;
          z-index: 2;
        }

        .pt-col-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 24px 50px -20px rgba(14, 100, 180, 0.3) !important;
        }

        .pt-col-card:hover::after {
          opacity: 1;
        }

        .pt-explore-card,
        .pt-work-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(186, 230, 253, 0.65);
          box-shadow: 0 8px 24px -6px rgba(2, 132, 199, 0.06);
        }

        /* 4. Explore Links (Industries & applications fits on one line on desktop) */
        .pt-explore-line-wrap {
          border-left: 2px solid rgba(186, 230, 253, 0.75);
          padding-left: 0.85rem;
          margin-left: 0.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .pt-explore-list {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .pt-explore-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #334155 !important;
          font-size: 0.815rem;
          font-weight: 500;
          line-height: 1.45;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (min-width: 1081px) {
          .pt-explore-item {
            white-space: nowrap;
          }
        }

        .pt-explore-item::before {
          content: "";
          position: absolute;
          left: calc(-0.85rem - 5px);
          top: 50%;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #0284c7;
          opacity: 0;
          transform: translateY(-50%) scale(0);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pt-explore-chevron {
          color: #94a3b8;
          flex-shrink: 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .pt-explore-item:hover {
          color: #087A78 !important;
          transform: translateX(4px);
        }

        .pt-explore-item:hover .pt-explore-chevron {
          color: #0284c7;
          transform: translateX(2px);
        }

        .pt-explore-item:hover::before {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* 8. Our Work Chips (Inner Highlight & Alternating Tints) */
        .pt-work-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.48rem;
          align-content: flex-start;
          flex: 1;
        }

        .pt-pill-chip {
          display: inline-flex;
          align-items: center;
          padding: 0.38rem 0.78rem;
          border-radius: 9999px;
          font-size: 0.77rem;
          font-weight: 550;
          line-height: 1.3;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pt-chip-blue {
          background: rgba(240, 249, 255, 0.95);
          border: 1px solid #bae6fd;
          color: #0369a1 !important;
        }

        .pt-chip-teal {
          background: rgba(240, 253, 250, 0.95);
          border: 1px solid #99f6e4;
          color: #0f766e !important;
        }

        .pt-pill-chip:hover {
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 100%) !important;
          border-color: transparent !important;
          color: #ffffff !important;
          transform: scale(1.03);
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }

        /* 3 & 5. Contact Column - Light Frosted Card with Dark Navy 15px Text & Divided Rows */
        .pt-contact-card-refined {
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.85) 50%, rgba(240, 253, 250, 0.9) 100%) !important;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(186, 230, 253, 0.65) !important;
          box-shadow: 0 8px 24px -6px rgba(2, 132, 199, 0.08) !important;
        }

        .pt-contact-top-strip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0284c7 0%, #0d9488 100%);
          z-index: 3;
        }

        .pt-contact-buttons-list {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          padding: 0.15rem 0;
        }

        .pt-contact-row-refined {
          display: flex !important;
          align-items: center !important;
          gap: 0.85rem !important;
          min-height: 44px;
          padding: 0.6rem 0.25rem !important;
          background: transparent;
          border-bottom: 1px solid rgba(226, 232, 240, 0.85);
          color: #081A2C !important;
          text-decoration: none;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .pt-contact-icon-bubble-refined {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 100%);
          color: #ffffff;
          transition: all 0.22s ease;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.18);
        }

        .pt-contact-text-refined {
          font-size: 0.95rem;
          font-weight: 500;
          color: #081A2C;
          line-height: 1.4;
          word-break: break-word;
          flex: 1;
          transition: color 0.2s ease;
        }

        .pt-contact-arrow-refined {
          color: #0284c7;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .pt-contact-arrow-placeholder {
          width: 16px;
          flex-shrink: 0;
        }

        a.pt-contact-row-refined:hover {
          transform: translateX(4px);
        }

        a.pt-contact-row-refined:hover .pt-contact-text-refined {
          color: #0284c7;
        }

        a.pt-contact-row-refined:hover .pt-contact-icon-bubble-refined {
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
          transform: scale(1.05);
        }

        a.pt-contact-row-refined:hover .pt-contact-arrow-refined {
          opacity: 1;
          transform: translateX(0);
        }

        .pt-contact-static-row-refined {
          cursor: default;
        }

        /* 6. Elevated Bottom Section Above Fade Zone */
        .pt-bottom-section {
          margin-top: 0.85rem;
          position: relative;
          z-index: 3;
        }

        .pt-bottom-gradient-divider {
          height: 1px;
          width: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(2, 132, 199, 0.25) 30%, rgba(13, 148, 136, 0.25) 70%, transparent 100%);
          margin-bottom: 0.75rem;
        }

        .pt-bottom-content {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 1rem !important;
          padding: 0.5rem 0 0.85rem !important;
          min-height: 52px;
          border-top: none !important;
        }

        .pt-bottom-text {
          font-size: 0.74rem;
          color: #475569;
        }

        .pt-principles-text {
          color: #64748b;
          letter-spacing: 0.02em;
        }

        .pt-bottom-right-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
        }

        .pt-credit-text {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: #64748b;
        }

        .pt-heart-icon {
          color: #EC4899;
          font-size: 0.92rem;
          line-height: 1;
        }

        .pt-brightlant-credit {
          background: linear-gradient(100deg, #EC4899 0%, #D946A6 48%, #A855F7 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent !important;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pt-brightlant-credit:hover {
          text-decoration: underline;
          text-decoration-color: #EC4899;
          text-underline-offset: 3px;
          filter: brightness(1.1);
        }

        /* 8. Back to Top Button Polish */
        .pt-back-to-top-btn {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          background: #e0f2fe;
          color: #0284c7;
          border: 1px solid #bae6fd;
          text-decoration: none;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pt-back-to-top-btn:hover {
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 100%);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
        }

        /* Accessibility focus rings */
        .pt-footer-wrapper a:focus-visible,
        .pt-footer-wrapper button:focus-visible {
          outline: 2px solid #0284c7 !important;
          outline-offset: 3px !important;
          border-radius: 0.375rem;
        }

        .pt-back-to-top-btn:focus-visible {
          outline: 2px solid #0284c7 !important;
          outline-offset: 2px !important;
        }

        .pt-contact-card-refined a:focus-visible {
          outline: 2px solid #0284c7 !important;
          outline-offset: 2px !important;
        }

        /* 9. Responsive Layouts: Tablet 2x2, Mobile Stack */
        @media (max-width: 1080px) and (min-width: 681px) {
          .pt-main-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }

          .pt-brand-column {
            padding: 1.25rem 0.5rem 1.25rem 0 !important;
          }
        }

        @media (max-width: 680px) {
          .pt-floating-panel {
            margin: 0 0.5rem;
            border-radius: 1.5rem;
          }

          .pt-main-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 1.5rem !important;
          }

          .pt-brand-column {
            padding: 0.5rem 0 !important;
          }

          .pt-contact-row-refined {
            width: 100%;
          }

          .pt-bottom-content {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 0.6rem !important;
          }

          .pt-bottom-right-wrap {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
