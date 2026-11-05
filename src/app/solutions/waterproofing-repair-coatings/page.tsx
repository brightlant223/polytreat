import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrickWall,
  Check,
  ChevronRight,
  Droplets,
  Home,
  Layers,
  Layers3,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Waterproofing, Repair & Coatings | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's advanced construction formulations for elastomeric waterproofing membranes, polymer concrete repair, and protective exterior building coatings.",
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
        <linearGradient id="wp-splash-drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="wp-splash-ring" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#B9D9E8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="wp-splash-pool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#wp-splash-pool)" />
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#wp-splash-ring)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#wp-splash-ring)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#wp-splash-ring)"
        strokeWidth="2"
      />
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#wp-splash-drop)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#wp-splash-drop)" />
      <circle cx="52" cy="36" r="2.5" fill="#B9D9E8" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#1769A6" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#wp-splash-drop)" />
      <circle cx="94" cy="44" r="1.8" fill="#B9D9E8" fillOpacity="0.8" />
    </svg>
  );
}

const keyBenefits = [
  {
    icon: Droplets,
    title: "Zero Water Ingress",
    description: "Seamless elastomeric barriers block moisture migration and hydrostatic pressure.",
  },
  {
    icon: Layers,
    title: "Crack-Bridging Flexibility",
    description: "High elongation accommodates thermal movement and active micro-cracking.",
  },
  {
    icon: ShieldCheck,
    title: "High-Adhesion Bonding",
    description: "Polymer-modified repair additives create lasting bond with existing concrete substrates.",
  },
  {
    icon: Sun,
    title: "UV & Weather Stability",
    description: "Exterior protective coatings resist intense solar radiation, rain, and thermal shock.",
  },
];

const problemChecklistCol1 = [
  "Seepage through roof slabs, terraces and retaining walls causes internal dampness.",
  "Aging concrete develops micro-cracks that allow carbonation and rebar corrosion.",
  "Exterior masonry degrades rapidly under continuous rainfall and ultraviolet radiation.",
];

const problemChecklistCol2 = [
  "Cold joints and construction seams become natural paths for water migration.",
  "Weak bonding between old and new cement plaster leads to hollow debonding.",
  "Traditional bitumen felts become brittle over time and tear under thermal stress.",
];

const categoryCards = [
  {
    id: "elastomeric-membranes",
    title: "Elastomeric membranes",
    description:
      "Single-component liquid-applied acrylic and polyurethane membranes that cure into seamless, flexible waterproofing skins for roofs, terraces, and water tanks.",
    tags: ["POLYPROOF-SPR", "POLYGARD-AC", "Roofs & terraces", "Water tanks & basements"],
    linkText: "Explore elastomeric systems",
    href: "#catalogue-overview",
    icon: Droplets,
  },
  {
    id: "bitumen-clear",
    title: "Bitumen & clear waterproofers",
    description:
      "Modified bitumen damp-proofing barriers for foundations and retaining walls, plus clear coatings where the natural masonry finish must show through.",
    tags: ["POLYROOF-MB", "POLYROOF-ACR", "Foundations", "Stone & brick claddings"],
    linkText: "Explore bitumen & clear range",
    href: "#catalogue-overview",
    icon: Layers3,
  },
  {
    id: "bonding-repair",
    title: "Concrete repair & bonding",
    description:
      "Carboxylated SBR latex and acrylic emulsions engineered for structural patch repair, bonding coats, and waterproof cementitious mortar admixtures.",
    tags: ["POLYBOND-SPR", "POLYBOND-SP", "POLYBOND-SPA", "Mortar admixtures"],
    linkText: "Explore bonding & repair range",
    href: "#catalogue-overview",
    icon: Wrench,
  },
  {
    id: "exterior-coatings",
    title: "Exterior building coatings",
    description:
      "Pure acrylic, modified acrylic, and single-component polyurethane exterior coatings formulated for weather resistance, UV stability, and tinted finishes.",
    tags: ["PROTEX 2000", "POLYROOF-ACE", "POLYROOF-PU-100", "Exterior walls"],
    linkText: "Explore exterior finishes",
    href: "#catalogue-overview",
    icon: Paintbrush,
  },
];

const catalogueRows = [
  {
    title: "POLYPROOF-SPR Elastomeric Acrylic Membrane",
    description:
      "Single-pack elastomeric acrylic membrane for basements, bathrooms, toilets, terraces, and water tanks. Coverage: 30 to 40 sq ft per kg per coat.",
    badges: ["Single-pack", "Acrylic elastomeric", "Basements & tanks", "Seamless"],
    href: "/contact#contact-form",
    icon: Droplets,
  },
  {
    title: "POLYGARD-AC Pure Acrylic Coating",
    description:
      "Elastomeric pure acrylic coating for roofs, decks, and walls. Suitable for vertical and horizontal concrete, cement mortar, and metal substrates.",
    badges: ["Pure acrylic", "UV resistant", "Vertical & horizontal", "Deck coating"],
    href: "/contact#contact-form",
    icon: ShieldCheck,
  },
  {
    title: "POLYROOF-MB Modified Bitumen Membrane",
    description:
      "Elastomeric modified bitumen membrane for concrete foundations, retaining walls, columns, beams, and sandwich slabs. Coverage: 25 to 35 sq ft per kg.",
    badges: ["Modified bitumen", "Retaining walls", "Damp proofing", "Foundations"],
    href: "/contact#contact-form",
    icon: Layers3,
  },
  {
    title: "POLYBOND-SPR Carboxylated SBR Latex Admixture",
    description:
      "Carboxylated styrene butadiene latex for bonding during repairs of old structures, improved bonding of cement mixes, and rebar moisture protection.",
    badges: ["SBR latex", "Structural bonding", "Water repellence", "Rebar protection"],
    href: "/contact#contact-form",
    icon: BrickWall,
  },
];

export default function WaterproofingRepairCoatingsPage() {
  return (
    <main className="construction-solution-page waterproofing-page">
      {/* 1. HERO SECTION */}
      <section
        className="construction-hero waterproofing-hero"
        aria-labelledby="waterproofing-title"
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
            <span aria-current="page">Waterproofing, Repair &amp; Coatings</span>
          </nav>

          <div className="construction-hero-layout">
            <div className="construction-hero-copy">
              <div className="construction-eyebrow-badge">
                <Droplets size={14} aria-hidden="true" />
                <span>Waterproofing &amp; Surface Protection</span>
              </div>

              <h1 id="waterproofing-title">
                Complete Building Protection{" "}
                <br className="industrial-hero-br-desktop" />
                Through{" "}
                <span className="construction-hero-highlight">
                  Waterproofing &amp; Repair.
                </span>
              </h1>

              <div className="construction-hero-accent-line" aria-hidden="true" />

              <p>
                High-build elastomeric waterproofing membranes, SBR polymer bonding
                admixtures, and protective architectural coatings engineered to stop
                moisture ingress and restore concrete integrity across commercial and
                industrial sites.
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
                  src="/images/solutions/waterproofing-hero-facility.jpg"
                  alt="Commercial industrial building rooftop with seamless elastomeric polyurethane waterproofing coating system"
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
              <linearGradient id="wp-wave-back-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#B9D9E8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="wp-wave-mid-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#1C5F91" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#1769A6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="wp-wave-front-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#1C5F91" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#B9D9E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4F8FD" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="wp-wave-shine-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#EAF3F8" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#wp-wave-back-2)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#wp-wave-mid-2)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#wp-wave-front-2)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#wp-wave-shine-2)"
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
        aria-labelledby="waterproofing-challenges-title"
      >
        <div className="container">
          <div className="construction-problems-layout">
            <div className="construction-problems-image-col">
              <div className="construction-problems-image-frame">
                <video
                  src="/Waterproofing%2C%20Repair%20%26%20Coatings.mp4"
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
              <h2 id="waterproofing-challenges-title" className="construction-problems-title">
                Water penetration and concrete deterioration require targeted formulations.
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
                Categories in the waterproofing range.
              </h2>
            </div>
            <div className="construction-section-header-right">
              <span className="construction-header-divider" aria-hidden="true" />
              <p>
                Choose the formulation based on the substrate, water head exposure, and
                environmental demands. Below are PolyTreat&apos;s primary category solutions.
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
                Also in the waterproofing &amp; repair catalogue.
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
      <section className="construction-cta-section" aria-labelledby="waterproofing-cta-title">
        <div className="container">
          <div className="construction-cta-banner">
            <div className="construction-cta-content">
              <div className="construction-section-eyebrow construction-section-eyebrow-cta">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Planning a surface or repair project?</span>
              </div>
              <h2 id="waterproofing-cta-title" className="construction-cta-title">
                Let&apos;s find the right solution for your application.
              </h2>
              <p className="construction-cta-desc">
                Share the substrate and project conditions. PolyTreat&apos;s technical
                team can direct your enquiry to the right elastomeric membrane, repair
                latex, or protective coating system.
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
