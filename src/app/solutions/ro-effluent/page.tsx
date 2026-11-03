import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Factory,
  Filter,
  FlaskConical,
  Home,
  Layers,
  Leaf,
  MessageCircle,
  RefreshCw,
  Settings,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { industrialAnchors } from "@/data/industrialWater";
import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";

export const metadata: Metadata = {
  title: "RO & Effluent Treatment | PolyTreat Chemicals",
  description:
    "Explore product categories for reverse-osmosis membrane systems and industrial wastewater treatment processes.",
};

const keyFeatures = [
  {
    icon: Droplets,
    title: "Reliable Water Quality",
    description: "Consistent, high-purity output",
  },
  {
    icon: Layers,
    title: "Membrane Performance",
    description: "Effective and long service life",
  },
  {
    icon: RefreshCw,
    title: "Wastewater Compliance",
    description: "Supports regulatory discharge norms",
  },
  {
    icon: Leaf,
    title: "Sustainable Operations",
    description: "Water reuse and lower environmental impact",
  },
];

const keyBenefits = [
  {
    icon: Droplets,
    title: "Higher water recovery",
    description: "Maximises usable water and reduces losses",
    color: "green",
  },
  {
    icon: Settings,
    title: "Process stability",
    description: "Maintains consistent performance",
    color: "red",
  },
  {
    icon: Leaf,
    title: "Lower treatment cost",
    description: "Optimises chemical usage and operations",
    color: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory compliance",
    description: "Supports environmental discharge norms",
    color: "blue",
  },
];

const treatmentSteps = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Assess Water Quality",
    color: "green",
  },
  {
    number: "02",
    icon: Layers,
    title: "Select Product Category",
    color: "red",
  },
  {
    number: "03",
    icon: Settings,
    title: "Apply & Monitor Treatment",
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
    id: "ro-scale-inhibitors",
    title: "RO Scale Inhibitors",
    description: "Prevent scale formation and maintain membrane performance.",
    image: "/images/solutions/product-scale-inhibitors.png",
    href: `#${industrialAnchors.ro}`,
  },
  {
    id: "ro-membrane-cleaners",
    title: "RO Membrane Cleaners",
    description: "Remove inorganic, organic and bio-fouling deposits.",
    image: "/images/solutions/product-corrosion-inhibitors.png",
    href: `#${industrialAnchors.ro}`,
  },
  {
    id: "biocides",
    title: "Biocides",
    description: "Control microbial growth in RO and water reuse systems.",
    image: "/images/solutions/product-dispersants.png",
    href: `#${industrialAnchors.ro}`,
  },
  {
    id: "coagulants-flocculants",
    title: "Coagulants & Flocculants",
    description: "Destabilise and aggregate suspended solids for removal.",
    image: "/images/solutions/product-biocides.png",
    href: `#${industrialAnchors.effluent}`,
  },
  {
    id: "effluent-conditioning",
    title: "Effluent Conditioning",
    description: "pH control, clarifiers and sludge dewatering aids.",
    image: "/images/solutions/product-auxiliary-treatments.png",
    href: "/contact#contact-form",
  },
];

function CardWaterSplash({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ro-splash-drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="ro-splash-ring" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#B9D9E8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="ro-splash-pool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Soft corner water pool */}
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#ro-splash-pool)" />

      {/* Concentric ripple arcs emanating from corner */}
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#ro-splash-ring)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#ro-splash-ring)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#ro-splash-ring)"
        strokeWidth="2"
      />

      {/* Dynamic water splash droplets */}
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#ro-splash-drop)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#ro-splash-drop)" />
      <circle cx="52" cy="36" r="2.5" fill="#B9D9E8" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#1769A6" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#ro-splash-drop)" />
      <circle cx="94" cy="44" r="1.8" fill="#B9D9E8" fillOpacity="0.8" />
    </svg>
  );
}

function LaboratoryFlaskDesign({ type = "ro-scale-inhibitors" }: { type?: string }) {
  const gradientMap: Record<string, { start: string; end: string; accent: string; shadow: string }> = {
    "ro-scale-inhibitors": { start: "#FBBF24", end: "#D97706", accent: "#FDE68A", shadow: "rgba(217, 119, 6, 0.18)" },
    "ro-membrane-cleaners": { start: "#38BDF8", end: "#0284C7", accent: "#BAE6FD", shadow: "rgba(2, 132, 199, 0.18)" },
    biocides: { start: "#C084FC", end: "#7E22CE", accent: "#E9D5FF", shadow: "rgba(126, 34, 206, 0.18)" },
    "coagulants-flocculants": { start: "#60A5FA", end: "#1E3A8A", accent: "#BFDBFE", shadow: "rgba(30, 58, 138, 0.18)" },
    "effluent-conditioning": { start: "#FB7185", end: "#9F1239", accent: "#FECDD3", shadow: "rgba(159, 18, 57, 0.18)" },
  };

  const colors = gradientMap[type] || gradientMap["ro-scale-inhibitors"];
  const gradId = `ro-flask-liq-${type}`;

  return (
    <svg
      viewBox="0 0 96 108"
      width="82"
      height="94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ro-flask-svg"
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
        stroke="#1769A6"
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
        stroke="#1769A6"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function RoEffluentPage() {
  return (
    <main className="ro-effluent-page">
      {/* 1. HERO SECTION */}
      <section
        className="ro-hero"
        aria-labelledby="ro-effluent-title"
      >
        <div className="container ro-hero-container">
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
            <span aria-current="page">RO &amp; Effluent</span>
          </nav>

          <div className="ro-hero-layout">
            <div className="ro-hero-copy">
              <div className="ro-hero-badge">
                <Droplets size={14} className="ro-hero-badge-icon" aria-hidden="true" />
                <span>Membrane &amp; Wastewater Systems</span>
              </div>

              <h1 id="ro-effluent-title">
                RO and effluent<br />
                <span className="ro-hero-highlight">treatment categories.</span>
              </h1>

              <div className="ro-hero-accent-line" aria-hidden="true" />

              <p>
                Explore product categories for reverse-osmosis membrane systems
                and industrial wastewater treatment processes.
              </p>

              <div className="ro-hero-actions">
                <Link className="btn btn-industrial-primary" href="#treatment-areas">
                  <span>Explore treatment areas</span>
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

            <div className="ro-hero-visual-col">
              {/* Modern technical architectural backdrop & ambient glow */}
              <div className="ro-hero-backdrop-shape" aria-hidden="true">
                <div className="ro-hero-backdrop-glow" />
                <div className="ro-hero-backdrop-frame" />
                <div className="ro-hero-backdrop-dots" />
              </div>

              {/* Main RO & Effluent plant photograph */}
              <div className="ro-hero-figure-wrap">
                <div className="ro-hero-image-pill" aria-hidden="true">
                  <Factory size={13} />
                  <span>RO &amp; Effluent Systems</span>
                </div>
                <img
                  src="/images/solutions/ro-effluent-hero-facility.jpg"
                  alt="Industrial wastewater treatment plant clarifiers, sedimentation basins, and membrane filtration facilities"
                  className="ro-hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Multi-layered responsive aquatic SVG wave divider */}
        <div className="ro-hero-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="ro-wave-svg"
          >
            <defs>
              <linearGradient id="ro-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#B9D9E8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="ro-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#1C5F91" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#1769A6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="ro-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#1C5F91" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#B9D9E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="ro-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#EAF3F8" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#ro-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#ro-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#ro-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#ro-wave-shine)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. KEY FEATURES STRIP */}
      <section className="ro-features-section" aria-label="Key features">
        <div className="container">
          <div className="ro-features-strip">
            {keyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div className="ro-feature-col" key={feature.title}>
                  <div className="ro-feature-icon-box" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <div className="ro-feature-text">
                    <h3 className="ro-feature-title">{feature.title}</h3>
                    <p className="ro-feature-desc">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE BY PROCESS */}
      <section
        className="ro-process-section"
        id="treatment-areas"
        aria-labelledby="process-section-title"
      >
        <div className="container">
          <div className="ro-section-header">
            <div className="ro-section-header-left">
              <div className="ro-section-eyebrow">
                <span className="ro-eyebrow-icon-box" aria-hidden="true">
                  <Layers size={14} />
                </span>
                <span>Explore by process</span>
              </div>
              <h2 id="process-section-title" className="ro-section-title">
                Two distinct water-treatment applications.
              </h2>
            </div>
            <div className="ro-section-header-right">
              <span className="ro-header-divider" aria-hidden="true" />
              <p>
                RO membrane systems and effluent processes have different
                treatment needs. Product selection depends on the system and process conditions.
              </p>
            </div>
          </div>

          <div className="ro-process-grid" id="process">
            {/* CARD 01 - REVERSE OSMOSIS SYSTEMS */}
            <article
              className="ro-process-card"
              id={industrialAnchors.ro}
            >
              <div className="ro-card-inner">
                <div className="ro-card-topline">
                  <span className="ro-card-num-badge">01</span>
                  <span className="ro-card-icon-pill" aria-hidden="true">
                    <Filter size={18} />
                  </span>
                </div>
                <h3 className="ro-card-title">Reverse-osmosis systems</h3>
                <p className="ro-card-desc">
                  The product catalogue lists categories for membrane scale
                  control, cleaning, and microbiological control in RO systems.
                </p>
                <div
                  className="ro-card-tags"
                  aria-label="Reverse-osmosis contexts"
                >
                  <span className="ro-card-tag">Membrane systems</span>
                  <span className="ro-card-tag">Scale control</span>
                  <span className="ro-card-tag">Membrane cleaning</span>
                </div>
              </div>

              {/* RO membrane skid rack equipment image */}
              <div className="ro-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/ro-card-membrane.png"
                  alt=""
                  className="ro-card-img"
                />
              </div>

              {/* Bottom decorative wave splash */}
              <CardWaterSplash className="ro-card-water-splash" />
            </article>

            {/* CARD 02 - EFFLUENT TREATMENT */}
            <article
              className="ro-process-card"
              id={industrialAnchors.effluent}
            >
              <div className="ro-card-inner">
                <div className="ro-card-topline">
                  <span className="ro-card-num-badge">02</span>
                  <span className="ro-card-icon-pill" aria-hidden="true">
                    <Factory size={18} />
                  </span>
                </div>
                <h3 className="ro-card-title">Effluent treatment</h3>
                <p className="ro-card-desc">
                  Effluent-treatment categories include products described for
                  coagulation, flocculation, and sludge dewatering processes.
                </p>
                <div
                  className="ro-card-tags"
                  aria-label="Effluent treatment contexts"
                >
                  <span className="ro-card-tag">Process wastewater</span>
                  <span className="ro-card-tag">Particle separation</span>
                  <span className="ro-card-tag">Sludge handling</span>
                </div>
              </div>

              {/* Effluent treatment clarifier plant image */}
              <div className="ro-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/effluent-card-clarifier.png"
                  alt=""
                  className="ro-card-img"
                />
              </div>

              {/* Bottom decorative wave splash */}
              <CardWaterSplash className="ro-card-water-splash" />
            </article>
          </div>

          <p className="ro-process-note">
            The catalogue describes broad product categories; confirm product fit
            against the specific system and its operating conditions.
          </p>

          <div className="ro-back-link-wrap">
            <Link
              className="ro-back-link"
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
        className="ro-benefits-section"
        aria-labelledby="ro-benefits-title"
      >
        <div className="container">
          <div className="ro-benefits-panel">
            <div className="ro-benefits-header">
              <span className="ro-badge-pill">Key benefits</span>
              <h2 id="ro-benefits-title" className="ro-benefits-heading">
                Why treat RO &amp;<br />
                effluent systems?
              </h2>
            </div>

            <div className="ro-benefits-grid">
              {keyBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div className={`ro-benefit-card color-${benefit.color}`} key={benefit.title}>
                    <div className="ro-benefit-icon-box" aria-hidden="true">
                      <Icon size={22} />
                    </div>
                    <h3 className="ro-benefit-card-title">{benefit.title}</h3>
                    <p className="ro-benefit-card-desc">
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
        className="ro-approach-section"
        aria-labelledby="ro-approach-title"
      >
        <div className="container">
          <div className="ro-approach-header">
            <span className="ro-section-subeyebrow">Our treatment approach</span>
            <h2 id="ro-approach-title" className="ro-approach-heading">
              A complete water<br />
              treatment programme.
            </h2>
          </div>

          <div className="ro-process-timeline">
            {treatmentSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div className="ro-timeline-step-wrap" key={step.title}>
                  <div className={`ro-timeline-step color-${step.color}`}>
                    <span className="ro-step-num-pill">{step.number}</span>
                    <div className="ro-step-circle-box" aria-hidden="true">
                      <Icon size={24} />
                    </div>
                    <div className="ro-step-title">{step.title}</div>
                  </div>
                  {idx < treatmentSteps.length - 1 && (
                    <div className="ro-timeline-arrow" aria-hidden="true">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT AREAS */}
      <section
        className="ro-products-section"
        id="products"
        aria-labelledby="ro-products-title"
      >
        <div className="container">
          <div className="ro-section-header">
            <div className="ro-section-header-left">
              <div className="ro-section-eyebrow">
                <span className="ro-eyebrow-bar" aria-hidden="true" />
                <span>Product areas</span>
              </div>
              <h2 id="ro-products-title" className="ro-section-title">
                Treatment solutions<br />
                for RO &amp; effluent systems.
              </h2>
            </div>
            <div className="ro-section-header-right">
              <span className="ro-header-divider" aria-hidden="true" />
              <p>
                A focused range of chemical solutions for RO membrane systems and
                wastewater treatment, including scale control, cleaning and effluent conditioning.
              </p>
            </div>
          </div>

          <div className="ro-products-grid">
            {productCards.map((product) => (
              <article className="ro-product-card" key={product.id}>
                <div className="ro-product-img-wrap">
                  <LaboratoryFlaskDesign type={product.id} />
                </div>
                <h3 className="ro-product-title">{product.title}</h3>
                <p className="ro-product-desc">{product.description}</p>
                <Link
                  href={product.href}
                  className="ro-product-arrow-btn"
                  aria-label={`Learn more about ${product.title}`}
                >
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section
        className="industries-contact-band"
        aria-labelledby="ro-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">
                Have an RO or effluent application?
              </span>
              <h2 id="ro-cta-title">
                Share the process context <span className="industries-highlight">with our team.</span>
              </h2>
              <p>
                Include the system type and the information you need to help
                direct your enquiry.
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
