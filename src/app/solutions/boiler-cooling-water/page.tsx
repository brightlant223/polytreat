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
  },
  {
    icon: Layers,
    title: "Reduced scaling",
    description: "Minimises deposition and fouling",
  },
  {
    icon: ShieldCheck,
    title: "Lower corrosion risk",
    description: "Protects metallic surfaces and equipment",
  },
  {
    icon: Leaf,
    title: "Cost-effective operations",
    description: "Extends asset life and reduces downtime",
  },
];

const treatmentSteps = [
  {
    number: "01",
    icon: Droplets,
    title: "Analyse Water Chemistry",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Select Treatment Programme",
  },
  {
    number: "03",
    icon: Settings,
    title: "Dose & Monitor",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimise Performance",
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
            <Link href="/solutions">Solutions</Link>
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
              {/* Geometric blue backing shapes */}
              <div className="boiler-hero-backdrop-shape" aria-hidden="true">
                <div className="boiler-hero-tab-topright" />
                <div className="boiler-hero-tab-bottomleft" />
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

        {/* Smooth layered water waves along the bottom */}
        <div className="boiler-hero-wave-bottom" aria-hidden="true">
          <img
            src="/images/solutions/hero-wave-bottom.png"
            alt=""
            className="boiler-wave-img"
          />
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
                <div className="boiler-card-topline">
                  <span className="boiler-card-num-badge">01</span>
                  <span className="boiler-card-icon-pill" aria-hidden="true">
                    <Gauge size={18} />
                  </span>
                </div>
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
              </div>

              {/* Boiler unit equipment image */}
              <div className="boiler-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/boiler-card-equipment.png"
                  alt=""
                  className="boiler-card-img"
                />
              </div>

              {/* Bottom decorative wave splash */}
              <img
                src="/images/solutions/card-water-splash.png"
                alt=""
                className="boiler-card-water-splash"
                aria-hidden="true"
              />
            </article>

            {/* CARD 02 - COOLING WATER */}
            <article
              className="boiler-system-card"
              id={industrialAnchors.cooling}
            >
              <div className="boiler-card-inner">
                <div className="boiler-card-topline">
                  <span className="boiler-card-num-badge">02</span>
                  <span className="boiler-card-icon-pill" aria-hidden="true">
                    <Waves size={18} />
                  </span>
                </div>
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
              </div>

              {/* Cooling tower equipment image */}
              <div className="boiler-card-image-wrap" aria-hidden="true">
                <img
                  src="/images/solutions/cooling-card-equipment.png"
                  alt=""
                  className="boiler-card-img"
                />
              </div>

              {/* Bottom decorative wave splash */}
              <img
                src="/images/solutions/card-water-splash.png"
                alt=""
                className="boiler-card-water-splash"
                aria-hidden="true"
              />
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
                  <div className="boiler-benefit-card" key={benefit.title}>
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
                  <div className="boiler-timeline-step">
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
                  <img
                    src={product.image}
                    alt={product.title}
                    className="boiler-product-img"
                  />
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

      {/* 7. FINAL CTA BANNER */}
      <section
        className="boiler-cta-section"
        aria-labelledby="boiler-cta-title"
      >
        <div className="container">
          <div className="boiler-cta-banner">
            <div className="boiler-cta-content">
              <div className="boiler-cta-eyebrow">
                <Settings size={18} className="boiler-cta-gear-icon" aria-hidden="true" />
                <span>Working with a boiler or cooling loop?</span>
              </div>
              <h2 id="boiler-cta-title" className="boiler-cta-title">
                Share the system context with our team.
              </h2>
              <p className="boiler-cta-desc">
                Include the system type and operating context to help direct your
                enquiry.
              </p>
            </div>

            <div className="boiler-cta-action">
              <Link
                href="/contact#contact-form"
                className="btn btn-boiler-cta"
              >
                <span>Discuss your application</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            {/* Industrial facility silhouette watermark on sides */}
            <div className="boiler-cta-silhouette-left" aria-hidden="true" />
            <div className="boiler-cta-silhouette-right" aria-hidden="true" />

            {/* Floating bubbles decoration in banner */}
            <div className="boiler-cta-bubbles" aria-hidden="true">
              <img
                src="/images/solutions/hero-bubbles.png"
                alt=""
                className="boiler-cta-bubbles-img"
              />
            </div>

            {/* Layered wave bottom decoration in banner */}
            <div className="boiler-cta-waves" aria-hidden="true">
              <img
                src="/images/solutions/hero-wave-bottom.png"
                alt=""
                className="boiler-cta-waves-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
