import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  FlaskConical,
  Gauge,
  Home,
  Layers3,
  Link2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Flooring & Joint Sealing | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial epoxy and polyurethane flooring systems, solvent-free mortars, and elastomeric joint sealants.",
};

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
        <linearGradient id="floor-splash-drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="floor-splash-ring" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#B9D9E8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="floor-splash-pool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#floor-splash-pool)" />
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#floor-splash-ring)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#floor-splash-ring)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#floor-splash-ring)"
        strokeWidth="2"
      />
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#floor-splash-drop)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#floor-splash-drop)" />
      <circle cx="52" cy="36" r="2.5" fill="#B9D9E8" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#1769A6" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#floor-splash-drop)" />
      <circle cx="94" cy="44" r="1.8" fill="#B9D9E8" fillOpacity="0.8" />
    </svg>
  );
}

const keyBenefits = [
  {
    icon: Truck,
    title: "Heavy Wheel Load Resistance",
    description: "High compressive strength withstands forklifts, pallet trucks, and machinery movement.",
  },
  {
    icon: FlaskConical,
    title: "Chemical & Solvent Barrier",
    description: "Resists alkalis, mild acids, industrial solvents, fuels, oils, and washdowns.",
  },
  {
    icon: Link2,
    title: "Flexible Joint Accommodation",
    description: "Absorbs concrete slab expansion, structural contraction, and mechanical vibrations.",
  },
  {
    icon: Sparkles,
    title: "Hygienic & Dust-Free Finish",
    description: "Seamless non-porous surfaces that prevent dusting and simplify facility sanitization.",
  },
];

const problemChecklistCol1 = [
  "Heavy forklift and pallet truck movement causes concrete dusting, pitting, and edge chipping.",
  "Acid, alkali, and chemical spills rapidly erode unprotected concrete slabs in processing plants.",
  "Unsealed or failed expansion joints collect dirt, moisture, and contaminants, leading to slab failure.",
];

const problemChecklistCol2 = [
  "Active cracks in high-footfall areas create trip hazards and violate hygienic compliance standards.",
  "Rigid fillers crack under thermal movement, breaking the moisture and environmental seal.",
  "Severe machinery vibration loosens foundation bedding pads without polymer mortar support.",
];

const categoryCards = [
  {
    id: "epoxy-coatings",
    title: "Industrial epoxy coatings",
    description:
      "Two-component epoxy coating systems providing high-wear, chemical-resistant finishes for manufacturing facilities, workshops, and chemical plants.",
    tags: ["POLYBOND-HB", "Chemical resistant", "High-gloss finish", "Factories & workshops"],
    linkText: "Explore epoxy systems",
    href: "#catalogue-overview",
    icon: Building2,
  },
  {
    id: "epoxy-mortars",
    title: "Heavy-duty epoxy mortars",
    description:
      "Two-component solvent-free epoxy mortars engineered for bridge bearing pads, airport runways, machinery foundations, and heavy-wear floor toppings.",
    tags: ["POLYBOND HB MORTAR", "Solvent-free", "Runways & foundations", "Dam & tank repairs"],
    linkText: "Explore epoxy mortars",
    href: "#catalogue-overview",
    icon: Layers3,
  },
  {
    id: "polyurethane-finishes",
    title: "Polyurethane protective finishes",
    description:
      "Two-component aliphatic polyurethane topcoats offering superior UV stability, chemical resistance, and heavy-wear protection across exterior and interior floors.",
    tags: ["POLYBOND PU-100", "Aliphatic polyurethane", "UV stable", "Heavy-wear topcoat"],
    linkText: "Explore polyurethane finishes",
    href: "#catalogue-overview",
    icon: ShieldCheck,
  },
  {
    id: "joint-sealants",
    title: "Elastomeric joint & crack sealants",
    description:
      "Flexible acrylic and silicone sealing compounds designed to accommodate expansion, prevent leaks, and seal window and concrete perimeters.",
    tags: ["POLYROOF CRACKSEAL", "POLYBOND SILICON", "Expansion joints", "Perimeter sealing"],
    linkText: "Explore sealant range",
    href: "#catalogue-overview",
    icon: Link2,
  },
];

const catalogueRows = [
  {
    title: "POLYBOND-HB Two-Component Epoxy Coating",
    description:
      "Protective epoxy coating for floors and walls where chemicals, fumes, alkalis, solvents, or mild acids are present. Coverage: 65 to 75 sq ft per kg.",
    badges: ["Two-component", "Chemical resistant", "Factories & workshops", "High-build"],
    href: "/contact#contact-form",
    icon: Building2,
  },
  {
    title: "POLYBOND HB MORTAR Solvent-Free Epoxy Mortar",
    description:
      "Two-component solvent-free epoxy mortar for bridge bearings, airport runways, machinery foundations, and floor toppings. Applied at 2 to 3 mm.",
    badges: ["High compressive", "Solvent-free", "Machinery beddings", "Runway repairs"],
    href: "/contact#contact-form",
    icon: Layers3,
  },
  {
    title: "POLYBOND PU-100 Aliphatic Polyurethane Topcoat",
    description:
      "Two-component aliphatic polyurethane coating for exterior weather exposure and chemical resistance across metal, concrete, wood, and fiberglass.",
    badges: ["Aliphatic PU", "UV resistant", "Heavy wear", "Protective topcoat"],
    href: "/contact#contact-form",
    icon: ShieldCheck,
  },
  {
    title: "POLYBOND SILICON SEALANT Joint Compound",
    description:
      "One-component general-purpose silicone sealant for expansion joints in windows, frames, glass, ceramics, and aluminium surfaces.",
    badges: ["Silicone elastomeric", "Expansion joints", "Sanitary seal", "Flexible"],
    href: "/contact#contact-form",
    icon: Link2,
  },
];

export default function FlooringJointSealingPage() {
  return (
    <main className="construction-solution-page flooring-page">
      {/* 1. HERO SECTION */}
      <section
        className="construction-hero flooring-hero"
        aria-labelledby="flooring-joint-title"
      >
        <div className="container construction-hero-container">
          <nav className="construction-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="construction-breadcrumb-home">
              <Home size={13} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <span aria-hidden="true" className="construction-breadcrumb-sep">
              &gt;
            </span>
            <Link href="/solutions/construction-chemistry">Construction &amp; Surface Protection</Link>
            <span aria-hidden="true" className="construction-breadcrumb-sep">
              &gt;
            </span>
            <span aria-current="page">Flooring &amp; Joint Sealing</span>
          </nav>

          <div className="construction-hero-layout">
            <div className="construction-hero-copy">
              <div className="construction-eyebrow-badge">
                <Layers3 size={14} aria-hidden="true" />
                <span>Industrial Flooring &amp; Joint Sealing</span>
              </div>

              <h1 id="flooring-joint-title">
                High-Performance Industrial{" "}
                <br className="industrial-hero-br-desktop" />
                <span className="construction-hero-highlight">
                  Flooring &amp; Joint Solutions.
                </span>
              </h1>

              <div className="construction-hero-accent-line" aria-hidden="true" />

              <p>
                Two-component epoxy floor coatings, heavy-duty solvent-free mortars,
                and high-performance joint sealants engineered for chemical resistance,
                wheel traffic, and structural movement across manufacturing and cleanroom
                facilities.
              </p>

              <div className="construction-hero-actions">
                <Link className="btn btn-construction-primary" href="#product-categories">
                  <span>Explore product categories</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  className="btn btn-construction-secondary"
                  href="/contact#contact-form"
                >
                  <span>Discuss an application</span>
                  <MessageCircle size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="construction-hero-visual-col">
              <div className="construction-hero-backdrop-shape" aria-hidden="true">
                <div className="construction-hero-backdrop-glow" />
                <div className="construction-hero-backdrop-frame" />
                <div className="construction-hero-backdrop-dots" />
              </div>

              <div className="construction-figure-wrap">
                <img
                  src="/images/solutions/flooring-hero-facility.jpg"
                  alt="High-tech pharmaceutical manufacturing cleanroom floor with gleaming epoxy polyurethane coating and precision expansion joints"
                  className="construction-hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rich flowing water wave divider */}
        <div className="construction-hero-wave-bottom" aria-hidden="true">
          <svg
            className="construction-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="floor-wave-back-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#B9D9E8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="floor-wave-mid-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#1C5F91" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#1769A6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="floor-wave-front-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#1C5F91" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#B9D9E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4F8FD" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="floor-wave-shine-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#EAF3F8" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#floor-wave-back-3)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#floor-wave-mid-3)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#floor-wave-front-3)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#floor-wave-shine-3)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. KEY BENEFITS (Section 2 - 4 Cards Strip) */}
      <section className="construction-features-section" aria-label="Key Benefits">
        <div className="container">
          <div className="construction-features-strip">
            {keyBenefits.map(({ icon: Icon, title, description }) => (
              <div className="construction-feature-col" key={title}>
                <div className="construction-feature-icon-box">
                  <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div className="construction-feature-text">
                  <h3 className="construction-feature-title">{title}</h3>
                  <p className="construction-feature-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION (Section 3 - 2-Column Layout) */}
      <section
        className="construction-problems-section"
        id="challenges"
        aria-labelledby="flooring-challenges-title"
      >
        <div className="container">
          <div className="construction-problems-layout">
            <div className="construction-problems-image-col">
              <div className="construction-problems-image-frame">
                <video
                  src="/Flooring%20%26%20Joint%20Sealing.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="construction-problems-img"
                />
              </div>
            </div>

            <div className="construction-problems-content-col">
              <div className="construction-section-eyebrow">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Problem &amp; solution</span>
              </div>
              <h2 id="flooring-challenges-title" className="construction-problems-title">
                High-traffic floors and concrete joints require uncompromising durability.
              </h2>

              <div className="construction-problems-checklist">
                <ul className="construction-checklist-col">
                  {problemChecklistCol1.map((item) => (
                    <li key={item}>
                      <span className="construction-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="construction-checklist-col">
                  {problemChecklistCol2.map((item) => (
                    <li key={item}>
                      <span className="construction-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES (Section 4 - Attractive Cards in 2x2 Grid) */}
      <section
        className="construction-categories-section"
        id="product-categories"
        aria-labelledby="categories-heading"
      >
        <div className="container">
          <div className="construction-section-header">
            <div className="construction-section-header-left">
              <div className="construction-section-eyebrow">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Application categories</span>
              </div>
              <h2 id="categories-heading" className="construction-section-title">
                Categories in the flooring &amp; joint sealing range.
              </h2>
            </div>
            <div className="construction-section-header-right">
              <span className="construction-header-divider" aria-hidden="true" />
              <p>
                Flooring systems protect larger slab footprints while sealants address
                active joints and cracks. The right category depends on mechanical load
                and chemical exposure.
              </p>
            </div>
          </div>

          <div className="construction-categories-grid">
            {categoryCards.map(({ id, title, description, tags, linkText, href, icon: Icon }) => (
              <article className="construction-category-card" key={id} id={id}>
                <div className="construction-category-card-inner">
                  <div className="construction-category-icon-box">
                    <Icon size={26} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="construction-category-content">
                    <h3 className="construction-category-card-title">{title}</h3>
                    <p className="construction-category-card-desc">{description}</p>
                    <div className="construction-category-tags">
                      {tags.map((tag, idx) => (
                        <span key={tag} className="construction-category-tag-item">
                          <span>{tag}</span>
                          {idx < tags.length - 1 && (
                            <span className="construction-category-tag-pipe" aria-hidden="true">
                              |
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                    <Link className="construction-category-card-link" href={href}>
                      <span>{linkText}</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                <CardWaterSplash className="construction-card-water-splash" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT OVERVIEW (Section 5 - Catalogue Rows) */}
      <section
        className="construction-catalogue-section"
        id="catalogue-overview"
        aria-labelledby="catalogue-heading"
      >
        <div className="container">
          <div className="construction-section-header">
            <div className="construction-section-header-left">
              <div className="construction-section-eyebrow">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Product selection &amp; overview</span>
              </div>
              <h2 id="catalogue-heading" className="construction-section-title">
                Also in the flooring &amp; sealants catalogue.
              </h2>
            </div>
          </div>

          <div className="construction-catalogue-table">
            {catalogueRows.map((row) => {
              const Icon = row.icon;
              return (
                <Link className="construction-catalogue-row" key={row.title} href={row.href}>
                  <div className="construction-catalogue-title-col">
                    <span className="construction-catalogue-icon">
                      <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="construction-catalogue-title">{row.title}</span>
                  </div>
                  <p className="construction-catalogue-desc">{row.description}</p>
                  <div className="construction-catalogue-badges">
                    {row.badges.map((b) => (
                      <span className="construction-catalogue-badge" key={b}>
                        {b}
                      </span>
                    ))}
                  </div>
                  <span className="construction-catalogue-arrow" aria-hidden="true">
                    <ChevronRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="construction-cta-section" aria-labelledby="flooring-cta-title">
        <div className="container">
          <div className="construction-cta-banner">
            <div className="construction-cta-content">
              <div className="construction-section-eyebrow construction-section-eyebrow-cta">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Planning an industrial floor or joint application?</span>
              </div>
              <h2 id="flooring-cta-title" className="construction-cta-title">
                Let&apos;s find the right solution for your application.
              </h2>
              <p className="construction-cta-desc">
                Share the surface, mechanical wheel traffic, and project conditions.
                PolyTreat&apos;s technical team can direct your enquiry to the right
                epoxy coating, mortar, or joint sealant formulation.
              </p>
            </div>
            <div className="construction-cta-action">
              <Link className="btn btn-construction-primary" href="/contact#contact-form">
                <span>Discuss Your Application</span>
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
