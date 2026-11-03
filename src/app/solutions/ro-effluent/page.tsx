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
  },
  {
    icon: Settings,
    title: "Process stability",
    description: "Maintains consistent performance",
  },
  {
    icon: Leaf,
    title: "Lower treatment cost",
    description: "Optimises chemical usage and operations",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory compliance",
    description: "Supports environmental discharge norms",
  },
];

const treatmentSteps = [
  {
    number: "01",
    icon: FlaskConical,
    title: "Assess Water Quality",
  },
  {
    number: "02",
    icon: Layers,
    title: "Select Product Category",
  },
  {
    number: "03",
    icon: Settings,
    title: "Apply & Monitor Treatment",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimise Performance",
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
            <Link href="/solutions">Solutions</Link>
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
              {/* Geometric blue backing shapes */}
              <div className="ro-hero-backdrop-shape" aria-hidden="true">
                <div className="ro-hero-tab-topright" />
                <div className="ro-hero-tab-bottomleft" />
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

        {/* Smooth layered water waves along the bottom */}
        <div className="ro-hero-wave-bottom" aria-hidden="true">
          <img
            src="/images/solutions/hero-wave-bottom.png"
            alt=""
            className="ro-wave-img"
          />
        </div>
      </section>

      {/* 2. KEY FEATURES STRIP */}
      <section className="ro-features-section" aria-label="Key features">
        <div className="container">
          <div className="ro-features-strip">
            {keyFeatures.map((feature, idx) => {
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
                  {idx < keyFeatures.length - 1 && (
                    <span className="ro-feature-divider" aria-hidden="true" />
                  )}
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

              {/* Bottom right circular arrow button */}
              <Link
                href={`#${industrialAnchors.ro}`}
                className="ro-card-arrow-btn"
                aria-label="View Reverse-osmosis systems"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              {/* Bottom decorative wave splash */}
              <img
                src="/images/solutions/card-water-splash.png"
                alt=""
                className="ro-card-water-splash"
                aria-hidden="true"
              />
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

              {/* Bottom right circular arrow button */}
              <Link
                href={`#${industrialAnchors.effluent}`}
                className="ro-card-arrow-btn"
                aria-label="View Effluent treatment"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              {/* Bottom decorative wave splash */}
              <img
                src="/images/solutions/card-water-splash.png"
                alt=""
                className="ro-card-water-splash"
                aria-hidden="true"
              />
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
                  <div className="ro-benefit-card" key={benefit.title}>
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
                  <div className="ro-timeline-step">
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
                  <img
                    src={product.image}
                    alt={product.title}
                    className="ro-product-img"
                  />
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
        className="ro-cta-section"
        aria-labelledby="ro-cta-title"
      >
        <div className="container">
          <div className="ro-cta-banner">
            <div className="ro-cta-content">
              <div className="ro-cta-eyebrow">
                <Droplets size={16} className="ro-cta-droplet-icon" aria-hidden="true" />
                <span>Have an RO or effluent application?</span>
              </div>
              <h2 id="ro-cta-title" className="ro-cta-title">
                Share the process context with our team.
              </h2>
              <p className="ro-cta-desc">
                Include the system type and the information you need to help
                direct your enquiry.
              </p>
            </div>

            <div className="ro-cta-action">
              <Link
                href="/contact#contact-form"
                className="btn btn-ro-cta"
              >
                <span>Discuss your application</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            {/* Industrial facility silhouette watermark on sides */}
            <div className="ro-cta-silhouette-left" aria-hidden="true" />
            <div className="ro-cta-silhouette-right" aria-hidden="true" />

            {/* Floating bubbles decoration in banner */}
            <div className="ro-cta-bubbles" aria-hidden="true">
              <img
                src="/images/solutions/hero-bubbles.png"
                alt=""
                className="ro-cta-bubbles-img"
              />
            </div>

            {/* Layered wave bottom decoration in banner */}
            <div className="ro-cta-waves" aria-hidden="true">
              <img
                src="/images/solutions/hero-wave-bottom.png"
                alt=""
                className="ro-cta-waves-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
