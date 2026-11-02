import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Boxes,
  Car,
  ChevronRight,
  Droplets,
  Flame,
  FlaskConical,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

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
  { label: "Industrial water treatment", href: "/solutions/industrial-water", icon: Droplets },
  { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water", icon: Gauge },
  { label: "RO & effluent", href: "/solutions/ro-effluent", icon: Waves },
  { label: "Construction & protection", href: "/solutions/construction-chemistry", icon: ShieldCheck },
  { label: "Waterproofing, repair & coatings", href: "/solutions/waterproofing-repair-coatings", icon: Paintbrush },
  { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing", icon: Layers },
  { label: "Paint preservatives", href: "/solutions/paint-preservatives", icon: FlaskConical },
  { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals", icon: Sparkles },
  { label: "Fireside treatment", href: "/solutions/fireside-treatment", icon: Flame },
  { label: "Automotive chemicals", href: "/solutions/automotive-chemicals", icon: Car },
  { label: "Specialty products", href: "/specialty", icon: Boxes },
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

        {/* 1. Bright & Clearly Visible POLYTREAT Watermark with 1.5px Gradient Stroke & Faint Fill */}
        <div className="pt-brand-watermark-wrap" aria-hidden="true">
          <svg
            className="pt-brand-watermark-svg"
            viewBox="0 0 1400 160"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pt-wm-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="pt-wm-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.07" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#pt-wm-fill)"
              stroke="url(#pt-wm-stroke)"
              strokeWidth="1.5"
              letterSpacing="0.14em"
              fontWeight="900"
              className="pt-wm-svg-text"
            >
              POLYTREAT
            </text>
          </svg>
        </div>

        <div className="container pt-panel-inner">
          {/* Equal-Height 4-Column Balanced Grid */}
          <div className="footer-main pt-main-grid">
            {/* Brand Column (Top-aligned Logo, Tagline Below, Drop at Bottom-Right) */}
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

              {/* Water Drop at bottom-right of brand column */}
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

            {/* Explore Column (Card with Left Indicator Line, "Industries & applications" Fits on One Line) */}
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

            {/* Our Work Column (2-Column Equal-Height Tile Grid with Icons) */}
            <nav className="footer-column pt-col-card pt-work-card" aria-label="Our work">
              <h2 className="pt-col-heading">
                Our work
                <span className="pt-heading-line" aria-hidden="true" />
              </h2>
              <div className="pt-work-tiles-grid">
                {solutionLinks.map(({ label, href, icon: Icon }, index) => (
                  <Link
                    href={href}
                    key={href}
                    className={`pt-work-tile ${index === 10 ? "pt-work-tile-span-2" : ""}`}
                  >
                    <Icon size={18} strokeWidth={1.75} className="pt-work-tile-icon" aria-hidden="true" />
                    <span className="pt-work-tile-label">{label}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Contact Column (Light Card, 4px Top Strip, Colorless 40px Icons, Dark Navy Text, Persistent Arrow) */}
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
                    <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">polyind2@gmail.com</span>
                  <ArrowUpRight size={16} className="pt-contact-arrow-refined" aria-hidden="true" />
                </a>

                <a href="tel:+919820235995" className="pt-contact-row-refined">
                  <span className="pt-contact-icon-bubble-refined">
                    <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">+91 98202 35995</span>
                  <ArrowUpRight size={16} className="pt-contact-arrow-refined" aria-hidden="true" />
                </a>

                <div className="pt-contact-row-refined pt-contact-static-row-refined">
                  <span className="pt-contact-icon-bubble-refined">
                    <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="pt-contact-text-refined">Goregaon (West), Mumbai</span>
                  <ArrowUpRight size={16} className="pt-contact-arrow-refined" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with Frosted Glass Backdrop-Blur Strip */}
          <div className="pt-bottom-section">
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
          padding-bottom: 0.75rem;
        }

        /* 1. Bright & Clear Watermark along Bottom */
        .pt-brand-watermark-wrap {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          z-index: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
          line-height: 0;
        }

        .pt-brand-watermark-svg {
          width: 100%;
          height: auto;
          display: block;
          max-height: 220px;
        }

        .pt-wm-svg-text {
          font-family: var(--font-heading, system-ui, -apple-system, sans-serif);
          font-size: 148px;
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

        /* Staggered Column Entrance */
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
          .pt-work-tile,
          .pt-explore-item,
          .pt-contact-row-refined {
            transition: none !important;
          }
        }

        /* Equal-Height 4-Column Desktop Grid */
        .pt-main-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.88fr) minmax(0, 1.52fr) minmax(0, 1.05fr) !important;
          gap: clamp(1rem, 1.75vw, 1.75rem) !important;
          align-items: stretch !important;
          padding: 0.5rem 0 1.5rem !important;
        }

        /* Brand Column Alignment */
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

        /* Translucent Cards with Depth, Hover Lift & 1px Gradient Border Effect */
        .pt-col-card {
          position: relative;
          border-radius: 1.25rem !important;
          padding: 1.25rem 1.15rem !important;
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

        /* Translucent Explore & Our Work Cards (Letters faintly visible through) */
        .pt-explore-card,
        .pt-work-card {
          background: rgba(255, 255, 255, 0.70) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(186, 230, 253, 0.65);
          box-shadow: 0 8px 24px -6px rgba(2, 132, 199, 0.06);
        }

        /* Explore Links */
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
          font-size: 0.8125rem;
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

        /* 3. Our Work Equal-Height Tile Grid */
        .pt-work-tiles-grid {
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 0.65rem !important;
          align-content: stretch;
          flex: 1;
        }

        .pt-work-tile {
          display: flex !important;
          align-items: center !important;
          gap: 0.55rem !important;
          padding: 0.65rem 0.75rem !important;
          min-height: 44px;
          border-radius: 0.75rem !important;
          border: 1px solid rgba(226, 232, 240, 0.75) !important;
          background: rgba(255, 255, 255, 0.82) !important;
          color: #081A2C !important;
          font-size: 0.8125rem !important;
          font-weight: 500 !important;
          line-height: 1.35 !important;
          text-decoration: none !important;
          box-sizing: border-box;
          transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
                      background 200ms ease,
                      border-color 200ms ease,
                      box-shadow 200ms ease,
                      color 200ms ease !important;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
        }

        .pt-work-tile-span-2 {
          grid-column: span 2 !important;
        }

        .pt-work-tile-icon {
          flex-shrink: 0;
          color: #64748b !important;
          transition: color 200ms ease, transform 200ms ease;
        }

        .pt-work-tile-label {
          flex: 1;
          transition: color 200ms ease;
        }

        .pt-work-tile:hover,
        .pt-work-tile:focus-visible {
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 100%) !important;
          border-color: transparent !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.28) !important;
        }

        .pt-work-tile:hover .pt-work-tile-icon,
        .pt-work-tile:focus-visible .pt-work-tile-icon {
          color: #ffffff !important;
          transform: scale(1.05);
        }

        .pt-work-tile:hover .pt-work-tile-label,
        .pt-work-tile:focus-visible .pt-work-tile-label {
          color: #ffffff !important;
        }

        .pt-work-tile:active {
          transform: scale(0.98) !important;
        }

        /* 2. Contact Column with Colorless 40px Icons, Dark Navy Text & Equal Divided Rows */
        .pt-contact-card-refined {
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(240, 249, 255, 0.70) 50%, rgba(240, 253, 250, 0.70) 100%) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
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
          gap: 0.75rem !important;
          flex: 1 !important;
          min-height: 48px;
          padding: 0.65rem 0.25rem !important;
          background: transparent;
          border-bottom: 1px solid rgba(226, 232, 240, 0.85) !important;
          color: #081A2C !important;
          text-decoration: none;
          transition: transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
                      color 220ms ease;
          box-sizing: border-box;
        }

        .pt-contact-icon-bubble-refined {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 9999px;
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #64748b;
          transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: none;
        }

        .pt-contact-text-refined {
          font-size: 0.875rem;
          font-weight: 500;
          color: #081A2C;
          line-height: 1.4;
          flex: 1;
          transition: color 0.2s ease;
        }

        @media (min-width: 1081px) {
          .pt-contact-text-refined {
            white-space: nowrap;
          }
        }

        .pt-contact-arrow-refined {
          color: #94a3b8;
          opacity: 1 !important;
          transform: translateX(0);
          transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .pt-contact-row-refined:hover {
          transform: translateX(4px);
        }

        .pt-contact-row-refined:hover .pt-contact-text-refined {
          color: #0284c7;
        }

        .pt-contact-row-refined:hover .pt-contact-icon-bubble-refined,
        .pt-contact-row-refined:focus-visible .pt-contact-icon-bubble-refined {
          background: linear-gradient(135deg, #0284c7 0%, #0d9488 100%) !important;
          border-color: transparent !important;
          color: #ffffff !important;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35) !important;
          transform: scale(1.04);
        }

        .pt-contact-row-refined:hover .pt-contact-arrow-refined,
        .pt-contact-row-refined:focus-visible .pt-contact-arrow-refined {
          color: #0284c7 !important;
          transform: translateX(4px) !important;
        }

        .pt-contact-static-row-refined {
          cursor: default;
        }

        /* 1. Frosted Glass Bottom Section with Backdrop-Blur Strip */
        .pt-bottom-section {
          margin-top: 1.25rem;
          position: relative;
          z-index: 3;
          background: rgba(255, 255, 255, 0.60);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 4px 16px -4px rgba(2, 132, 199, 0.06);
          padding: 0 1.25rem;
        }

        .pt-bottom-content {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 1rem !important;
          padding: 0.65rem 0 !important;
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

        /* Back to Top Button */
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

        /* Responsive Layouts: Tablet 2x2, Mobile Stack */
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

        /* Mobile Our Work Tiles: 2 columns down to 360px, 1 column below 360px */
        @media (max-width: 360px) {
          .pt-work-tiles-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
          .pt-work-tile-span-2 {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
