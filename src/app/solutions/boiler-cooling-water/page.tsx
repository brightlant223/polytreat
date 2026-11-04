import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Home,
  Layers,
  Leaf,
  MessageCircle,
  Settings,
  ShieldCheck,
  Thermometer,
  TrendingUp,
  Waves,
} from "lucide-react";
import { industrialAnchors } from "@/data/industrialWater";

export const metadata: Metadata = {
  title: "Boiler & Cooling Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's treatment categories for steam-generation boilers and recirculating cooling-water systems.",
};

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: "Scale & Corrosion Control",
    description: "Protects equipment & improves life",
  },
  {
    icon: Settings,
    title: "Higher Efficiency",
    description: "Maintains heat transfer performance",
  },
  {
    icon: Leaf,
    title: "Water & Energy Savings",
    description: "Reduces operational costs",
  },
  {
    icon: Award,
    title: "Reliable Operations",
    description: "Stable, long-term system performance",
  },
];

const keyBenefits = [
  {
    icon: Thermometer,
    title: "Better heat transfer",
    description: "Keeps systems efficient and reliable",
    color: "green",
  },
  {
    icon: Layers,
    title: "Reduced scaling",
    description: "Minimises deposition and fouling",
    color: "red",
  },
  {
    icon: ShieldCheck,
    title: "Lower corrosion risk",
    description: "Protects metallic surfaces and equipment",
    color: "orange",
  },
  {
    icon: Leaf,
    title: "Cost-effective operations",
    description: "Extends asset life and reduces downtime",
    color: "blue",
  },
];

const treatmentSteps = [
  {
    number: "01",
    icon: Droplets,
    title: "Analyse Water Chemistry",
    color: "green",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Select Treatment Programme",
    color: "red",
  },
  {
    number: "03",
    icon: Settings,
    title: "Dose & Monitor",
    color: "orange",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimise Performance",
    color: "blue",
  },
];

const productCards = [
  {
    id: "scale-inhibitors",
    title: "Scale Inhibitors",
    description: "Prevent scale formation and maintain heat transfer.",
    image: "/images/solutions/product-scale-inhibitors.png",
    href: `#${industrialAnchors.boiler}`,
  },
  {
    id: "corrosion-inhibitors",
    title: "Corrosion Inhibitors",
    description: "Protect metal surfaces from corrosion and extend life.",
    image: "/images/solutions/product-corrosion-inhibitors.png",
    href: `#${industrialAnchors.boiler}`,
  },
  {
    id: "dispersants",
    title: "Dispersants",
    description: "Keep deposits in suspension and reduce fouling.",
    image: "/images/solutions/product-dispersants.png",
    href: `#${industrialAnchors.cooling}`,
  },
  {
    id: "biocides",
    title: "Biocides",
    description: "Control microbial growth in cooling water systems.",
    image: "/images/solutions/product-biocides.png",
    href: `#${industrialAnchors.cooling}`,
  },
  {
    id: "auxiliary-treatments",
    title: "Auxiliary Treatments",
    description: "pH control, oxygen scavengers and system conditioners.",
    image: "/images/solutions/product-auxiliary-treatments.png",
    href: "/contact#contact-form",
  },
];

function LaboratoryFlaskDesign({ type = "scale-inhibitors" }: { type?: string }) {
  const gradientMap: Record<string, { start: string; end: string; accent: string; shadow: string }> = {
    "scale-inhibitors": { start: "#FBBF24", end: "#D97706", accent: "#FDE68A", shadow: "rgba(217, 119, 6, 0.18)" },
    "corrosion-inhibitors": { start: "#F87171", end: "#DC2626", accent: "#FECDD3", shadow: "rgba(220, 38, 38, 0.18)" },
    dispersants: { start: "#34D399", end: "#059669", accent: "#A7F3D0", shadow: "rgba(5, 150, 105, 0.18)" },
    biocides: { start: "#C084FC", end: "#7E22CE", accent: "#E9D5FF", shadow: "rgba(126, 34, 206, 0.18)" },
    "auxiliary-treatments": { start: "#38BDF8", end: "#0284C7", accent: "#BAE6FD", shadow: "rgba(2, 132, 199, 0.18)" },
  };

  const colors = gradientMap[type] || gradientMap["scale-inhibitors"];
  const gradId = `flask-liq-${type}`;

  return (
    <svg
      viewBox="0 0 96 108"
      width="82"
      height="94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="boiler-flask-svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.start} stopOpacity="0.88" />
          <stop offset="100%" stopColor={colors.end} stopOpacity="0.96" />
        </linearGradient>
      </defs>

      {/* Soft Base Shadow */}
      <ellipse cx="48" cy="100" rx="30" ry="4.5" fill={colors.shadow} />

      {/* Internal Liquid Fill */}
      <path
        d="M32 58 Q48 54 64 58 L72 86 C74 90 71 93 67 93 L29 93 C25 93 22 90 24 86 Z"
        fill={`url(#${gradId})`}
      />

      {/* Liquid Meniscus Highlight Arc */}
      <path
        d="M32 58 Q48 54 64 58"
        stroke={colors.accent}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Rising Chemistry Micro-Bubbles */}
      <circle cx="42" cy="74" r="2" fill="#ffffff" fillOpacity="0.75" />
      <circle cx="54" cy="67" r="2.5" fill="#ffffff" fillOpacity="0.65" />
      <circle cx="46" cy="83" r="1.5" fill="#ffffff" fillOpacity="0.8" />
      <circle cx="58" cy="80" r="1.8" fill="#ffffff" fillOpacity="0.6" />

      {/* Flask Glass Body Outline */}
      <path
        d="M42 12 L42 34 L21 85 C18 91 22 95 28 95 L68 95 C74 95 78 91 75 85 L54 34 L54 12 Z"
        stroke="#0284C7"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Flask Neck Graduation Tick Marks */}
      <line x1="45" y1="64" x2="51" y2="64" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="72" x2="52" y2="72" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="43" y1="80" x2="53" y2="80" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left Glass Specular Reflection Highlight */}
      <path
        d="M30 63 L24 83"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Flask Lip / Rim */}
      <rect
        x="38"
        y="8"
        width="20"
        height="5"
        rx="2.5"
        fill="#F0F7FD"
        stroke="#0284C7"
        strokeWidth="2"
      />
    </svg>
  );
}

function BoilerCardFlowDecor() {
  return (
    <svg
      className="boiler-card-decor-svg"
      viewBox="0 0 360 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bcard-flow-bg" x1="0" y1="40" x2="360" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#0369A1" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0C4A6E" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="bcard-flow-fg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#082F49" stopOpacity="0.90" />
        </linearGradient>
      </defs>

      {/* Ambient background wave */}
      <path
        d="M0 52 C70 42 140 60 210 48 C260 38 300 46 360 36 V92 H0 Z"
        fill="url(#bcard-flow-bg)"
      />

      {/* Foreground flowing wave */}
      <path
        d="M0 60 C65 50 135 68 200 58 C245 52 280 56 360 48 V92 H0 Z"
        fill="url(#bcard-flow-fg)"
      />

      {/* Static Sub-surface thermal circulation contour lines */}
      <path
        d="M160 66 C210 60 255 64 310 56"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M185 74 C230 68 275 70 330 64"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function CoolingCardFlowDecor() {
  return (
    <svg
      className="boiler-card-decor-svg"
      viewBox="0 0 360 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ccard-flow-bg" x1="0" y1="40" x2="360" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.30" />
          <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.30" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="ccard-flow-fg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#075985" stopOpacity="0.90" />
        </linearGradient>
      </defs>

      {/* Ambient background cooling wave */}
      <path
        d="M0 52 C70 42 140 60 210 48 C260 38 300 46 360 36 V92 H0 Z"
        fill="url(#ccard-flow-bg)"
      />

      {/* Foreground flowing wave */}
      <path
        d="M0 60 C65 50 135 68 200 58 C245 52 280 56 360 48 V92 H0 Z"
        fill="url(#ccard-flow-fg)"
      />

      {/* Static Sub-surface cooling contour lines */}
      <path
        d="M160 66 C210 60 255 64 310 56"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M185 74 C230 68 275 70 330 64"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function BoilerCoolingWaterPage() {
  return (
    <main className="boiler-cooling-page">
      {/* 1. HERO SECTION */}
      <section
        className="boiler-cooling-hero"
        aria-labelledby="boiler-cooling-title"
      >
        <div className="container boiler-hero-container">
          <nav className="industrial-water-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="industrial-water-breadcrumb-home">
              <Home size={13} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
              &gt;
            </span>
            <Link href="/#solutions">Solutions</Link>
            <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
              &gt;
            </span>
            <Link href="/solutions/industrial-water">Industrial Water</Link>
            <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
              &gt;
            </span>
            <span aria-current="page">Boiler &amp; Cooling Water</span>
          </nav>

          <div className="boiler-hero-layout">
            <div className="boiler-hero-copy">
              <div className="boiler-hero-badge">
                <Droplets size={14} className="boiler-hero-badge-icon" aria-hidden="true" />
                <span>Industrial Water Systems</span>
              </div>

              <h1 id="boiler-cooling-title">
                Boiler &amp; cooling-<br />
                <span className="boiler-hero-highlight">water treatment.</span>
              </h1>

              <div className="boiler-hero-accent-line" aria-hidden="true" />

              <p>
                Explore PolyTreat&apos;s treatment categories for steam-generation boilers
                and recirculating cooling-water systems.
              </p>

              <div className="boiler-hero-actions">
                <Link className="btn btn-industrial-primary" href="#system-overview">
                  <span>Explore the systems</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  className="btn btn-industrial-secondary"
                  href="/contact#contact-form"
                >
                  <span>Discuss an application</span>
                  <MessageCircle size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="boiler-hero-visual-col">
              {/* Modern technical architectural backdrop & ambient glow */}
              <div className="boiler-hero-backdrop-shape" aria-hidden="true">
                <div className="boiler-hero-backdrop-glow" />
                <div className="boiler-hero-backdrop-frame" />
                <div className="boiler-hero-backdrop-dots" />
              </div>

              {/* Main boiler & cooling plant photograph */}
              <div className="boiler-hero-figure-wrap">
                <div className="boiler-hero-image-pill" aria-hidden="true">
                  <Factory size={13} />
                  <span>Boiler &amp; Cooling Water</span>
                </div>
                <img
                  src="/images/solutions/boiler-cooling-hero-facility.jpg"
                  alt="Industrial steam boiler and water treatment plant room with high-pressure piping, burner and filtration systems"
                  className="boiler-hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rich flowing water wave divider - transparent background, layered aquatic gradient */}
        <div className="boiler-hero-wave-bottom" aria-hidden="true">
          <svg
            className="boiler-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="boiler-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>

              <linearGradient id="boiler-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#0369A1" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#0284C7" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0369A1" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="boiler-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#0369A1" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="boiler-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#E0F2FE" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#boiler-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#boiler-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#boiler-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#boiler-wave-shine)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. KEY FEATURES STRIP */}
      <section className="boiler-features-section" aria-label="Key features">
        <div className="container">
          <div className="boiler-features-strip">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div className="boiler-feature-col" key={feature.title}>
                  <div className="boiler-feature-icon-box" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <div className="boiler-feature-text">
                    <h3 className="boiler-feature-title">{feature.title}</h3>
                    <p className="boiler-feature-desc">{feature.description}</p>
                  </div>
                  {idx < keyFeatures.length - 1 && (
                    <span className="boiler-feature-divider" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY SYSTEM */}
      <section
        className="boiler-systems-section"
        id="system-overview"
        aria-labelledby="systems-section-title"
      >
        <div className="container">
          <div className="boiler-section-header">
            <div className="boiler-section-header-left">
              <div className="boiler-section-eyebrow">
                <span className="boiler-eyebrow-icon-box" aria-hidden="true">
                  <Layers size={14} />
                </span>
                <span>Explore by system</span>
              </div>
              <h2 id="systems-section-title" className="boiler-section-title">
                Two systems, distinct operating contexts.
              </h2>
            </div>
            <div className="boiler-section-header-right">
              <span className="boiler-header-divider" aria-hidden="true" />
              <p>
                Start with the system type. Water chemistry and operating conditions
                inform the technical discussion for each application.
              </p>
            </div>
          </div>

          <div className="boiler-systems-grid" id="systems">
            {/* CARD 01 - BOILER WATER */}
            <article
              className="boiler-system-card"
              id={industrialAnchors.boiler}
            >
              <div className="boiler-card-inner">
                <div className="boiler-card-icon-box" aria-hidden="true">
                  <Gauge size={22} className="boiler-card-svg" />
                </div>
                <div className="boiler-card-content">
                  <h3 className="boiler-card-title">Boiler water</h3>
                  <p className="boiler-card-desc">
                    Boilers heat water to produce steam. Treatment categories for these
                    systems are considered in the context of water chemistry and
                    operating conditions.
                  </p>
                  <div
                    className="boiler-card-tags"
                    aria-label="Boiler water contexts"
                  >
                    <span className="boiler-card-tag">Steam generation</span>
                    <span className="boiler-card-tag">Boiler-water systems</span>
                    <span className="boiler-card-tag">Plant operations</span>
                  </div>
                  <Link href="#products" className="boiler-card-link">
                    <span>Explore boiler water products</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Boiler unit equipment image */}
              <div className="boiler-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/boiler-card-equipment.png"
                  alt=""
                  className="boiler-card-img"
                />
              </div>

              {/* Bottom decorative flowing wave */}
              <div className="boiler-card-decor-wrap" aria-hidden="true">
                <BoilerCardFlowDecor />
              </div>
            </article>

            {/* CARD 02 - COOLING WATER */}
            <article
              className="boiler-system-card"
              id={industrialAnchors.cooling}
            >
              <div className="boiler-card-inner">
                <div className="boiler-card-icon-box" aria-hidden="true">
                  <Waves size={22} className="boiler-card-svg" />
                </div>
                <div className="boiler-card-content">
                  <h3 className="boiler-card-title">Cooling water</h3>
                  <p className="boiler-card-desc">
                    Cooling loops circulate water to carry heat away from equipment.
                    System design and water quality shape the operating context.
                  </p>
                  <div
                    className="boiler-card-tags"
                    aria-label="Cooling water contexts"
                  >
                    <span className="boiler-card-tag">Recirculating systems</span>
                    <span className="boiler-card-tag">Open loops</span>
                    <span className="boiler-card-tag">Closed loops</span>
                  </div>
                  <Link href="#products" className="boiler-card-link">
                    <span>Explore cooling water products</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Cooling tower equipment image */}
              <div className="boiler-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/cooling-card-equipment.png"
                  alt=""
                  className="boiler-card-img"
                />
              </div>

              {/* Bottom decorative flowing wave */}
              <div className="boiler-card-decor-wrap" aria-hidden="true">
                <CoolingCardFlowDecor />
              </div>
            </article>
          </div>

          <div className="boiler-back-link-wrap">
            <Link
              className="boiler-back-link"
              href="/solutions/industrial-water"
            >
              <span>Back to industrial water treatment</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section
        className="boiler-benefits-section"
        aria-labelledby="boiler-benefits-title"
      >
        <div className="container">
          <div className="boiler-benefits-panel">
            <div className="boiler-benefits-header">
              <span className="boiler-badge-pill">Key benefits</span>
              <h2 id="boiler-benefits-title" className="boiler-benefits-heading">
                Why treat boiler &amp;<br />
                cooling water?
              </h2>
            </div>

            <div className="boiler-benefits-grid">
              {keyBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div className={`boiler-benefit-card color-${benefit.color}`} key={benefit.title}>
                    <div className="boiler-benefit-icon-box" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <h3 className="boiler-benefit-card-title">{benefit.title}</h3>
                    <p className="boiler-benefit-card-desc">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENT APPROACH (Process Timeline) */}
      <section
        className="boiler-approach-section"
        aria-labelledby="boiler-approach-title"
      >
        <div className="container">
          <div className="boiler-approach-header">
            <span className="boiler-section-subeyebrow">Our treatment approach</span>
            <h2 id="boiler-approach-title" className="boiler-approach-heading">
              A complete water<br />
              treatment programme.
            </h2>
          </div>

          <div className="boiler-process-timeline">
            {treatmentSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div className="boiler-timeline-step-wrap" key={step.title}>
                  <div className={`boiler-timeline-step color-${step.color}`}>
                    <span className="boiler-step-num-pill">{step.number}</span>
                    <div className="boiler-step-circle-box" aria-hidden="true">
                      <Icon size={24} />
                    </div>
                    <div className="boiler-step-title">{step.title}</div>
                  </div>
                  {idx < treatmentSteps.length - 1 && (
                    <div className="boiler-timeline-arrow" aria-hidden="true">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT RANGE */}
      <section
        className="boiler-products-section"
        id="products"
        aria-labelledby="boiler-products-title"
      >
        <div className="container">
          <div className="boiler-section-header">
            <div className="boiler-section-header-left">
              <div className="boiler-section-eyebrow">
                <span className="boiler-eyebrow-bar" aria-hidden="true" />
                <span>Product range</span>
              </div>
              <h2 id="boiler-products-title" className="boiler-section-title">
                Treatment solutions<br />
                for your system.
              </h2>
            </div>
            <div className="boiler-section-header-right">
              <span className="boiler-header-divider" aria-hidden="true" />
              <p>
                A focused range of chemical solutions to control scale, corrosion and
                biological growth in boiler and cooling-water systems.
              </p>
            </div>
          </div>

          <div className="boiler-products-grid">
            {productCards.map((product) => (
              <article className="boiler-product-card" key={product.id}>
                <div className="boiler-product-img-wrap">
                  <LaboratoryFlaskDesign type={product.id} />
                </div>
                <h3 className="boiler-product-title">{product.title}</h3>
                <p className="boiler-product-desc">{product.description}</p>
                <Link
                  href={product.href}
                  className="boiler-product-arrow-btn"
                  aria-label={`Learn more about ${product.title}`}
                >
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BAND - Matches Industrial Water & Industries design */}
      <section
        className="industries-contact-band"
        id="boiler-cta"
        aria-labelledby="boiler-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">
                Working with a boiler or cooling loop?
              </span>
              <h2 id="boiler-cta-title">
                Share the system context <span className="industries-highlight">with our team.</span>
              </h2>
              <p>
                Include the system type and operating context to help direct your
                enquiry.
              </p>
            </div>
            <div className="industries-contact-action">
              <Link
                className="btn btn-industries-primary"
                href="/contact#contact-form"
              >
                <span>Discuss your application</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <CtaWaterSplashDesign />
          </div>
        </div>
      </section>
    </main>
  );
}
