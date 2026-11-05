import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  ChevronRight,
  Droplets,
  FlaskConical,
  Home,
  Layers3,
  Link2,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Chemistry & Surface Protection | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's advanced construction chemistry categories for structural waterproofing, polymer concrete repair, protective coatings, industrial flooring and joint sealing.",
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
        <linearGradient id="const-splash-drop-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="const-splash-ring-1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1769A6" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#B9D9E8" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="const-splash-pool-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#const-splash-pool-1)" />
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#const-splash-ring-1)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#const-splash-ring-1)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#const-splash-ring-1)"
        strokeWidth="2"
      />
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#const-splash-drop-1)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#const-splash-drop-1)" />
      <circle cx="52" cy="36" r="2.5" fill="#B9D9E8" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#1769A6" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#const-splash-drop-1)" />
      <circle cx="94" cy="44" r="1.8" fill="#B9D9E8" fillOpacity="0.8" />
    </svg>
  );
}

const keyBenefits = [
  {
    icon: ShieldCheck,
    title: "Structural Protection",
    description: "Shields concrete, masonry and steel reinforcement from environmental decay.",
  },
  {
    icon: Droplets,
    title: "Moisture Mitigation",
    description: "Continuous barriers that prevent water seepage, rising damp and efflorescence.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Resistance",
    description: "Tolerates alkalis, solvents, mild acids, industrial fumes and aggressive washdowns.",
  },
  {
    icon: Award,
    title: "Long-Term Durability",
    description: "High-adhesion formulations engineered to withstand thermal cycling and heavy traffic.",
  },
];

const problemChecklistCol1 = [
  "Water ingress leads to structural rebar corrosion and concrete spalling.",
  "Thermal expansion and shrinkage create active cracks in concrete slabs.",
  "Harsh outdoor weathering and UV radiation break down exterior wall finishes.",
];

const problemChecklistCol2 = [
  "Heavy industrial wheel loads degrade unreinforced floor surfaces and toppings.",
  "Joint movement leads to sealant detachment, moisture intrusion and damage.",
  "Chemical spills, fumes and dampness shorten the operational lifespan of structures.",
];

const categoryCards = [
  {
    id: "waterproofing-systems",
    title: "Waterproofing systems",
    description:
      "Seamless elastomeric acrylic, modified bitumen, and clear waterproofers for roofs, basements, water tanks, and retaining walls.",
    tags: ["POLYPROOF-SPR", "POLYGARD-AC", "POLYROOF-MB", "Roofs & foundations"],
    linkText: "See the waterproofing range",
    href: "/solutions/waterproofing-repair-coatings",
    icon: Droplets,
  },
  {
    id: "concrete-repair",
    title: "Concrete repair & bonding",
    description:
      "Polymer-modified emulsions and carboxylated SBR latex additives for structural concrete repair, bonding slurries, and mortar patching.",
    tags: ["POLYBOND-SP", "POLYBOND-SPR", "POLYBOND-SPA", "Mortar admixtures"],
    linkText: "See the repair range",
    href: "/solutions/waterproofing-repair-coatings",
    icon: Wrench,
  },
  {
    id: "flooring-systems",
    title: "Flooring & surface protection",
    description:
      "Two-component epoxy coatings, heavy-duty solvent-free epoxy mortars, and aliphatic polyurethane finishes for high-wear industrial floors.",
    tags: ["POLYBOND-HB", "POLYBOND HB MORTAR", "POLYBOND PU-100", "Chemical floors"],
    linkText: "See the flooring range",
    href: "/solutions/flooring-joint-sealing",
    icon: Building2,
  },
  {
    id: "sealants-joints",
    title: "Sealants & joint fillers",
    description:
      "Flexible synthetic resin and silicone elastomeric sealing compounds engineered for expansion joints, crack repairs, and window perimeters.",
    tags: ["POLYROOF CRACKSEAL", "POLYBOND SILICON", "Concrete joints", "Perimeters"],
    linkText: "See the sealants range",
    href: "/solutions/flooring-joint-sealing",
    icon: Link2,
  },
];

const catalogueRows = [
  {
    title: "Elastomeric waterproofing membranes",
    description:
      "Single-pack acrylic and modified bitumen formulations providing flexible waterproofing barriers for basements, terraces, and water tanks.",
    badges: ["POLYPROOF-SPR", "POLYGARD-AC", "POLYROOF-MB"],
    href: "/solutions/waterproofing-repair-coatings",
    icon: Droplets,
  },
  {
    title: "Concrete repair & bonding admixtures",
    description:
      "Modified acrylic and carboxylated SBR latex emulsions engineered to enhance cement adhesion, tensile strength, and water resistance.",
    badges: ["POLYBOND-SP", "POLYBOND-SPR", "POLYBOND-SPA"],
    href: "/solutions/waterproofing-repair-coatings",
    icon: Layers3,
  },
  {
    title: "Exterior architectural building coatings",
    description:
      "Pure acrylic, modified acrylic and single-pack polyurethane exterior finishes formulated for weather resistance and tinted aesthetics.",
    badges: ["PROTEX 2000", "POLYROOF-ACE", "POLYROOF-PU-100"],
    href: "/solutions/waterproofing-repair-coatings",
    icon: Paintbrush,
  },
  {
    title: "Industrial epoxy & polyurethane flooring",
    description:
      "High-build chemical-resistant two-component coatings, solvent-free epoxy mortars, and UV-stable polyurethane topcoats for factories and workshops.",
    badges: ["POLYBOND-HB", "POLYBOND HB MORTAR", "POLYBOND PU-100"],
    href: "/solutions/flooring-joint-sealing",
    icon: Building2,
  },
  {
    title: "Joint sealants & anti-corrosive primers",
    description:
      "Flexible crack repair sealants, general-purpose silicone joint fillers, and anti-corrosive primers for structural steel and reinforcement.",
    badges: ["POLYROOF CRACKSEAL", "POLYBOND SILICON", "POLYCOR"],
    href: "/solutions/flooring-joint-sealing",
    icon: ShieldCheck,
  },
];

export default function ConstructionChemistryPage() {
  return (
    <main className="construction-solution-page construction-chemistry-page">
      {/* 1. HERO SECTION */}
      <section
        className="construction-hero construction-chemistry-hero"
        aria-labelledby="construction-chemistry-title"
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
            <Link href="/#solutions">Solutions</Link>
            <span aria-hidden="true" className="construction-breadcrumb-sep">
              &gt;
            </span>
            <span aria-current="page">Construction &amp; Surface Protection</span>
          </nav>

          <div className="construction-hero-layout">
            <div className="construction-hero-copy">
              <div className="construction-eyebrow-badge">
                <ShieldCheck size={14} aria-hidden="true" />
                <span>Construction &amp; Surface Protection</span>
              </div>

              <h1 id="construction-chemistry-title">
                Construction chemistry for{" "}
                <br className="industrial-hero-br-desktop" />
                waterproofing, repair and{" "}
                <br className="industrial-hero-br-desktop" />
                <span className="construction-hero-highlight">protected surfaces.</span>
              </h1>

              <div className="construction-hero-accent-line" aria-hidden="true" />

              <p>
                Explore PolyTreat&apos;s advanced construction formulations across
                structural waterproofing, polymer-modified concrete repair, high-build
                exterior finishes, industrial flooring, and elastomeric joint sealants.
              </p>

              <div className="construction-hero-actions">
                <Link className="btn btn-construction-primary" href="#product-categories">
                  <span>Explore application areas</span>
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
                  src="/images/solutions/construction-hero-facility.jpg"
                  alt="Industrial and commercial infrastructure building site with modern architectural concrete structures and protective coatings"
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
              <linearGradient id="const-wave-back-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B9D9E8" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#B9D9E8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="const-wave-mid-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#1C5F91" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#1769A6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#1C5F91" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="const-wave-front-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1769A6" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#1C5F91" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#B9D9E8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4F8FD" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="const-wave-shine-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#EAF3F8" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#EAF3F8" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#const-wave-back-1)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#const-wave-mid-1)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#const-wave-front-1)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#const-wave-shine-1)"
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
        aria-labelledby="construction-challenges-title"
      >
        <div className="container">
          <div className="construction-problems-layout">
            <div className="construction-problems-image-col">
              <div className="construction-problems-image-frame">
                <video
                  src="/Construction%20%26%20Surface%20Protection.mp4"
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
              <h2 id="construction-challenges-title" className="construction-problems-title">
                Every built structure faces environmental and operational stress.
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
                Categories in the construction range.
              </h2>
            </div>
            <div className="construction-section-header-right">
              <span className="construction-header-divider" aria-hidden="true" />
              <p>
                Browse the broad product groups by the type of construction or surface
                work involved. Site and substrate conditions shape product selection.
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
                Also in the construction catalogue.
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
      <section className="construction-cta-section" aria-labelledby="construction-cta-title">
        <div className="container">
          <div className="construction-cta-banner">
            <div className="construction-cta-content">
              <div className="construction-section-eyebrow construction-section-eyebrow-cta">
                <span className="construction-eyebrow-bar" aria-hidden="true" />
                <span>Have a project or surface in mind?</span>
              </div>
              <h2 id="construction-cta-title" className="construction-cta-title">
                Let&apos;s find the right solution for your application.
              </h2>
              <p className="construction-cta-desc">
                Share the surface type, application area, and operating conditions.
                PolyTreat&apos;s technical team will recommend the right formulation
                and system build-up.
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
