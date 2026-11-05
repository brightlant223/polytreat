import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Droplets,
  FlaskConical,
  Play,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
} from "lucide-react";
import SpecialtyHeroSection from "@/components/SpecialtyHeroSection";
import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";

export const metadata: Metadata = {
  title: "Specialty Products Overview | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's specialty product range: COROSIL rust converter primer, POLYDOR-WS molecular odour neutraliser, and POLYKLIN AHU and FCU coil cleaning compound, plus further industrial specialty lines.",
};

/* Unified Clean Blue Flow Wave Decor */
function SpecialtyCardFlowDecor() {
  return (
    <svg
      className="specialty-card-decor-svg"
      viewBox="0 0 360 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spec-blue-flow-bg" x1="0" y1="40" x2="360" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.28" />
          <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.30" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="spec-blue-flow-fg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#075985" stopOpacity="0.90" />
        </linearGradient>
      </defs>

      {/* Ambient background wave */}
      <path
        d="M0 52 C70 42 140 60 210 48 C260 38 300 46 360 36 V92 H0 Z"
        fill="url(#spec-blue-flow-bg)"
      />

      {/* Foreground flowing wave */}
      <path
        d="M0 60 C65 50 135 68 200 58 C245 52 280 56 360 48 V92 H0 Z"
        fill="url(#spec-blue-flow-fg)"
      />

      {/* Subtle sub-surface chemical flow contour lines */}
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

const problemChecklistCol1 = [
  "Severe rust degrading structural steel, pipelines & rebar where blasting isn't feasible.",
  "Hazardous mercaptans, amines and H₂S causing foul odours in ETPs and landfills.",
  "Contaminated AHU & FCU cooling coils choking airflow and driving up energy draw.",
];

const problemChecklistCol2 = [
  "Odour issues requiring true chemical adduct formation, not masking perfumes.",
  "Unreacted rusty surfaces needing immediate conversion and stable primer adhesion.",
  "Equipment requiring contractor-grade spray-and-rinse maintenance programmes.",
];

const flagshipCards = [
  {
    slug: "corosil",
    name: "COROSIL",
    badgeTitle: "COROSIL®",
    badgeTag: "Rust Converter & Primer Base",
    category: "Corrosion control · Rust converter",
    subtitle: "Single-Coat Iron Oxide Passivation & Heavy-Duty Primer Base",
    image: "/images/specialty/corosil-product.webp",
    alt: "COROSIL metallo-organic rust converter primer packaging container",
    description:
      "A high-performance water-based rust converter that chemically reacts with iron oxides, converting active rust into a stable, inert metallo-organic protective complex. Provides an adherent, corrosion-resistant primer base for epoxy, polyurethane, and enamel topcoats without heavy sandblasting.",
    highlights: [
      "Converts active rust without sandblasting",
      "Forms adherent metallo-organic passive layer",
      "Compatible base for epoxy & PU topcoats",
      "Water-based, zero flash-point & low VOC",
    ],
    tags: [
      "Rust converter",
      "Single-coat",
      "Structural steel",
      "Ferrous metal",
      "Primer base",
    ],
    linkText: "Explore COROSIL Range",
    href: "/specialty/corosil",
    icon: ShieldCheck,
  },
  {
    slug: "polydor-ws",
    name: "POLYDOR-WS",
    badgeTitle: "POLYDOR-WS®",
    badgeTag: "Molecular Odour Neutraliser",
    category: "Molecular odour neutralisation",
    subtitle: "Permanent Chemical Adduct Formation (Non-Masking)",
    image: "/images/specialty/polydor-product.webp",
    alt: "POLYDOR-WS industrial molecular odour neutraliser formulation canister",
    description:
      "Broad-spectrum chemical odour neutraliser engineered for wastewater plants, sludge dewatering, and solid waste facilities. Reacts directly with mercaptans, amines, and hydrogen sulphide (H₂S) to form stable, non-odorous adducts without synthetic masking perfumes. Aligned with EPA non-hazardous criteria.",
    highlights: [
      "Permanent adduct bond (no masking perfumes)",
      "Neutralises H₂S, amines, mercaptans & skatole",
      "Safe for biological ETP and STP processes",
      "Ultra-high dilution economics (1:200 to 1:1000)",
    ],
    tags: [
      "Chemical neutralisation",
      "H₂S & amines",
      "ETP & landfills",
      "EPA criteria aligned",
      "High dilution",
    ],
    linkText: "Explore POLYDOR-WS Range",
    href: "/specialty/polydor-ws",
    icon: Wind,
  },
  {
    slug: "polyklin",
    name: "POLYKLIN",
    badgeTitle: "POLYKLIN®",
    badgeTag: "HVAC Coil Cleaning Compound",
    category: "HVAC & refrigeration care",
    subtitle: "Restores Coil Airflow Volume & Thermal Heat Transfer",
    image: "/images/specialty/polyklin-product.webp",
    alt: "POLYKLIN commercial coil cleaning chemical canister for AHU and FCU",
    description:
      "Professional-grade coil cleaner specially formulated for contaminated AHU, FCU, evaporator, and condenser fin packs. Swiftly breaks down greasy particulate, atmospheric grime, and oxidation through a rapid spray-and-rinse routine, immediately restoring airflow volume and thermal efficiency.",
    highlights: [
      "Rapid spray-and-rinse penetration",
      "Loosens heavy grease, dirt & atmospheric oxidation",
      "Non-corrosive to aluminium fins & copper tubing",
      "Restores CFM airflow and lowers chiller kWh draw",
    ],
    tags: [
      "Coil cleaner",
      "Spray & rinse",
      "AHU & FCU",
      "Evaporators",
      "Contractor grade",
    ],
    linkText: "Explore POLYKLIN Range",
    href: "/specialty/polyklin",
    icon: Snowflake,
  },
];

const catalogueRows = [
  {
    title: "General-purpose deodorants",
    description:
      "Deodorising formulations engineered for everyday facility, hospitality, and institutional hygienic use.",
    badges: ["Facility hygiene", "Odour control", "Everyday use"],
    href: "/contact#contact-form",
    icon: Sparkles,
  },
  {
    title: "Swimming-pool biocides",
    description:
      "Specialised microbicides and sanitising formulations for commercial swimming pool water quality and algae control.",
    badges: ["Algae control", "Microbial control", "Water clarity"],
    href: "/contact#contact-form",
    icon: Droplets,
  },
  {
    title: "Drinking-water treatment products",
    description:
      "Formulations for potable water treatment and disinfection, confirmed according to application criteria.",
    badges: ["Potable water", "Clarification", "Disinfection"],
    href: "/contact#contact-form",
    icon: FlaskConical,
  },
  {
    title: "Waterless hand cleaners",
    description:
      "Heavy-duty industrial gel cleaner for workshop and field hand hygiene where running water is unavailable.",
    badges: ["Workshop hygiene", "Grease removal", "Field use"],
    href: "/contact#contact-form",
    icon: ShieldCheck,
  },
];

export default function SpecialtyPage() {
  return (
    <main className="industrial-water-page specialty-overview-page">
      {/* 1. DYNAMIC SPECIALTY HERO SECTION (Rotating headlines, HD Carousel & Quick Selector) */}
      <SpecialtyHeroSection />

      {/* 2. PROBLEM & OPERATIONAL CHALLENGES */}
      <section
        className="industrial-problems-section"
        id="specialty-challenges"
        aria-labelledby="specialty-problems-title"
      >
        <div className="container">
          <div className="industrial-problems-layout">
            <div className="industrial-problems-image-col">
              <div className="industrial-problems-image-frame">
                <img
                  src="/images/specialty/corosil-rust-treatment.jpg"
                  alt="Treating rusty structural steel surface with chemical rust converter primer"
                  className="industrial-problems-img"
                />
              </div>
            </div>

            <div className="industrial-problems-content-col">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Targeted problem solving</span>
              </div>
              <h2 id="specialty-problems-title" className="industrial-problems-title">
                Every problem demands a formulation built specifically for it.
              </h2>

              <div className="industrial-problems-checklist">
                <ul className="industrial-checklist-col">
                  {problemChecklistCol1.map((item) => (
                    <li key={item}>
                      <span className="industrial-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="industrial-checklist-col">
                  {problemChecklistCol2.map((item) => (
                    <li key={item}>
                      <span className="industrial-check-icon" aria-hidden="true">
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

      {/* 3. FLAGSHIP SPECIALTY PRODUCTS - THREE PRODUCTS, ONE TARGETED SOLUTION */}
      <section
        className="specialty-showcase-section"
        id="specialty-categories"
        aria-labelledby="specialty-approach-title"
      >
        <div className="container">
          <div className="industrial-section-header">
            <div className="industrial-section-header-left">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Flagship specialty formulations</span>
              </div>
              <h2 id="specialty-approach-title" className="industrial-section-title">
                Three products. One targeted solution.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                Each formulation is engineered from the ground up to solve a defined
                industrial operational challenge—steel rust conversion, molecular odour
                neutralisation, or HVAC coil efficiency restoration.
              </p>
            </div>
          </div>

          {/* Alternating 1-2-1 Zigzag Showcase */}
          <div className="specialty-showcase-list">
            {flagshipCards.map((card, index) => {
              const Icon = card.icon;
              // Row 0 = Left Image, Right Content
              // Row 1 = Left Content, Right Image (isReversed)
              // Row 2 = Left Image, Right Content
              const isReversed = index === 1;
              return (
                <article
                  className={`specialty-showcase-card ${isReversed ? "is-reversed" : ""}`}
                  key={card.slug}
                  id={card.slug}
                >
                  {/* Visual Column (Image + Frame + Specialty Brand Tag) */}
                  <div className="specialty-showcase-visual-col">
                    <div className="specialty-showcase-figure-wrap">
                      <div className="specialty-showcase-image-badge">
                        <span className="specialty-brand-pill">
                          <span className="specialty-pill-dot" aria-hidden="true" />
                          <strong>{card.badgeTitle}</strong>
                          <span className="specialty-pill-sep">·</span>
                          <span>{card.badgeTag}</span>
                        </span>
                      </div>
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="specialty-showcase-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="specialty-showcase-content-col">
                    <div className="specialty-showcase-eyebrow">
                      <div className="specialty-showcase-icon-box" aria-hidden="true">
                        <Icon size={16} />
                      </div>
                      <span className="specialty-showcase-category">{card.category}</span>
                    </div>

                    <h3 className="specialty-showcase-card-title">{card.name}</h3>
                    <div className="specialty-showcase-subtitle">{card.subtitle}</div>

                    <p className="specialty-showcase-desc">{card.description}</p>

                    {/* Key Formulation Highlights */}
                    <div className="specialty-showcase-highlights">
                      {card.highlights.map((item) => (
                        <div key={item} className="specialty-showcase-highlight-item">
                          <Check size={14} className="specialty-showcase-check" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Characteristic Tags */}
                    <div className="specialty-showcase-tags">
                      {card.tags.map((tag) => (
                        <span key={tag} className="specialty-showcase-tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="specialty-showcase-actions">
                      <Link href={card.href} className="btn btn-industrial-primary">
                        <span>{card.linkText}</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                      <Link href="/contact#contact-form" className="btn btn-industrial-secondary">
                        <span>Discuss Application</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3B. SPECIALTY FORMULATIONS IN ACTION (ALL-IN-ONE VIDEO SHOWCASE) */}
      <section
        className="specialty-video-section"
        id="specialty-video-showcase"
        aria-labelledby="specialty-video-title"
      >
        <div className="container">
          <div className="specialty-video-card">
            <div className="specialty-video-grid">
              {/* Left Col: High-Definition Video Player */}
              <div className="specialty-video-player-wrap">
                <div className="specialty-video-bar">
                  <div className="specialty-video-live-tag">
                    <span className="specialty-video-live-dot" aria-hidden="true" />
                    <Play size={13} fill="currentColor" />
                    <span>Specialty Formulations in Action</span>
                  </div>
                  <span className="specialty-video-badge">3 Formulations · HD 1080p</span>
                </div>
                <div className="specialty-video-viewport">
                  <video
                    className="specialty-main-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/specialty/corosil-hero.webp"
                  >
                    <source src="/videos/specialty/specialty-products-overview.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="specialty-video-footer">
                  <Sparkles size={15} className="specialty-video-footer-icon" />
                  <span>Real field applications of COROSIL, POLYDOR-WS, and POLYKLIN</span>
                </div>
              </div>

              {/* Right Col: 3 Product Breakdown Cards */}
              <div className="specialty-video-breakdown">
                <div className="industrial-section-eyebrow">
                  <span className="industrial-eyebrow-bar" aria-hidden="true" />
                  <span>Field Demonstration</span>
                </div>
                <h3 id="specialty-video-title" className="specialty-video-heading">
                  Watch PolyTreat specialty formulations solve real maintenance challenges.
                </h3>
                <p className="specialty-video-lead">
                  From chemical rust chelation on structural steel to molecular odour neutralization
                  and HVAC cooling coil spray-and-rinse decontamination.
                </p>

                <div className="specialty-video-products-list">
                  <Link href="/specialty/corosil" className="specialty-video-prod-item">
                    <div className="specialty-video-icon-box">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="specialty-video-prod-content">
                      <div className="specialty-video-prod-top">
                        <strong className="specialty-video-prod-name">COROSIL®</strong>
                        <span className="specialty-video-prod-tag">Rust Converter</span>
                      </div>
                      <p className="specialty-video-prod-desc">
                        Direct conversion of iron oxides into an adherent, paintable barrier base without blasting.
                      </p>
                    </div>
                    <ChevronRight size={18} className="specialty-video-arrow" />
                  </Link>

                  <Link href="/specialty/polydor-ws" className="specialty-video-prod-item">
                    <div className="specialty-video-icon-box">
                      <Wind size={20} />
                    </div>
                    <div className="specialty-video-prod-content">
                      <div className="specialty-video-prod-top">
                        <strong className="specialty-video-prod-name">POLYDOR-WS®</strong>
                        <span className="specialty-video-prod-tag">Odour Neutraliser</span>
                      </div>
                      <p className="specialty-video-prod-desc">
                        Permanent molecular chemical adduct formation targeting mercaptans, amines &amp; H₂S.
                      </p>
                    </div>
                    <ChevronRight size={18} className="specialty-video-arrow" />
                  </Link>

                  <Link href="/specialty/polyklin" className="specialty-video-prod-item">
                    <div className="specialty-video-icon-box">
                      <Snowflake size={20} />
                    </div>
                    <div className="specialty-video-prod-content">
                      <div className="specialty-video-prod-top">
                        <strong className="specialty-video-prod-name">POLYKLIN®</strong>
                        <span className="specialty-video-prod-tag">HVAC Coil Cleaner</span>
                      </div>
                      <p className="specialty-video-prod-desc">
                        Fast-acting spray-and-rinse decontamination restoring airflow and heat exchange.
                      </p>
                    </div>
                    <ChevronRight size={18} className="specialty-video-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SELECTION & OVERVIEW / FURTHER LINES */}
      <section
        className="industrial-catalogue-section"
        id="other-lines"
        aria-labelledby="catalogue-overview-title"
      >
        <div className="container">
          <div className="industrial-section-header">
            <div className="industrial-section-header-left">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Product selection &amp; overview</span>
              </div>
              <h2 id="catalogue-overview-title" className="industrial-section-title">
                Further specialty formulations.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                Beyond our three flagship problem-solvers, PolyTreat manufactures
                targeted specialty formulations for facility hygiene, commercial pool
                care, potable water treatment, and industrial maintenance.
              </p>
            </div>
          </div>

          <div className="industrial-catalogue-table" role="list">
            {catalogueRows.map((row) => {
              const Icon = row.icon;
              return (
                <Link
                  href={row.href}
                  key={row.title}
                  className="industrial-catalogue-row"
                  role="listitem"
                >
                  <div className="industrial-catalogue-title-col">
                    <span className="industrial-catalogue-icon" aria-hidden="true">
                      <Icon size={20} />
                    </span>
                    <span className="industrial-catalogue-title">{row.title}</span>
                  </div>
                  <p className="industrial-catalogue-desc">{row.description}</p>
                  <div
                    className="industrial-catalogue-badges"
                    aria-label={`${row.title} products`}
                  >
                    {row.badges.map((badge) => (
                      <span key={badge} className="industrial-catalogue-badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="industrial-catalogue-arrow" aria-hidden="true">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BAND */}
      <section
        className="industries-contact-band"
        id="specialty-cta"
        aria-labelledby="specialty-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">
                Custom Formulation &amp; Consultation
              </span>
              <h2 id="specialty-cta-title">
                Have an unaddressed <span className="industries-highlight">chemical maintenance challenge?</span>
              </h2>
              <p>
                Whether it is stubborn corrosion, complex odour streams, or HVAC
                rehabilitation, our technical chemists can review your site requirements
                and recommend or formulate a fit-for-purpose solution.
              </p>
            </div>
            <div className="industries-contact-action">
              <Link className="btn btn-industries-primary" href="/contact#contact-form">
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
