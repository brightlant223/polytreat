import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Droplets,
  FlaskConical,
  Home,
  MessageCircle,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Specialty Products Overview | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's specialty product range: COROSIL rust converter primer, POLYDOR-WS molecular odour neutraliser, and POLYKLIN AHU and FCU coil cleaning compound, plus further industrial specialty lines.",
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
        <linearGradient id="spec-card-splash-drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="spec-card-splash-ring" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="spec-card-splash-pool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Soft corner water pool */}
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#spec-card-splash-pool)" />

      {/* Concentric ripple arcs emanating from corner */}
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#spec-card-splash-ring)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#spec-card-splash-ring)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#spec-card-splash-ring)"
        strokeWidth="2"
      />

      {/* Dynamic water splash droplets */}
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#spec-card-splash-drop)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#spec-card-splash-drop)" />
      <circle cx="52" cy="36" r="2.5" fill="#BAE6FD" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#0284C7" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#spec-card-splash-drop)" />
      <circle cx="94" cy="44" r="1.8" fill="#BAE6FD" fillOpacity="0.8" />
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
    category: "Corrosion control · Rust converter primer",
    description:
      "A water-based rust inhibitor and converter primer that chemically transforms iron oxides into stable metallo-organic complexes, creating an adherent foundation for compatible paint systems.",
    tags: [
      "Rust converter",
      "Single-coat",
      "Structural steel",
      "Ferrous metal",
      "Primer base",
    ],
    linkText: "See the COROSIL range",
    href: "/specialty/corosil",
    icon: ShieldCheck,
  },
  {
    slug: "polydor-ws",
    name: "POLYDOR-WS",
    category: "Molecular odour neutralisation",
    description:
      "Broad-spectrum chemical odour neutraliser that permanently alters foul molecules (amines, mercaptans, H₂S gas) into non-odorous adducts without masking perfumes. Non-toxic & EPA aligned.",
    tags: [
      "Chemical neutralisation",
      "H₂S & amines",
      "ETP & landfills",
      "EPA criteria aligned",
      "High dilution",
    ],
    linkText: "See the POLYDOR-WS range",
    href: "/specialty/polydor-ws",
    icon: Wind,
  },
  {
    slug: "polyklin",
    name: "POLYKLIN",
    category: "HVAC & refrigeration care",
    description:
      "Professional coil cleaning compound for contaminated AHU, FCU, evaporator, and condenser coils that loosens stubborn grime, oxidation, and dirt via spray-and-rinse application.",
    tags: [
      "Coil cleaner",
      "Spray & rinse",
      "AHU & FCU",
      "Evaporators",
      "Contractor grade",
    ],
    linkText: "See the POLYKLIN range",
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
      "Specialised microbicides and sanitising chemistry for commercial swimming pool water quality and algae control.",
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
      {/* 1. HERO SECTION */}
      <section
        className="industrial-water-hero industrial-water-reference-hero"
        aria-labelledby="specialty-hero-title"
      >
        <div className="container industrial-water-hero-container">
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
            <span aria-current="page">Specialty Products Overview</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <span className="eyebrow">
                <FlaskConical size={14} aria-hidden="true" /> Specialty Chemistries &amp; Formulations
              </span>

              <h1 id="specialty-hero-title">
                Targeted formulations for{" "}
                <br className="industrial-hero-br-desktop" />
                the problems that{" "}
                <br className="industrial-hero-br-desktop" />
                <span className="industrial-hero-highlight">standard ranges don&apos;t solve.</span>
              </h1>

              <div className="industrial-hero-accent-line" aria-hidden="true" />

              <p>
                Alongside our industrial water treatment and construction ranges,
                PolyTreat formulates dedicated specialty chemical solutions engineered
                for singular, demanding maintenance and operational challenges.
              </p>

              <div className="industrial-water-hero-actions">
                <Link className="btn btn-industrial-primary" href="#specialty-categories">
                  <span>Explore the range</span>
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

            <div className="industrial-water-hero-visual-col">
              {/* Technical architectural backdrop & ambient glow */}
              <div className="industrial-hero-backdrop-shape" aria-hidden="true">
                <div className="industrial-hero-backdrop-glow" />
                <div className="industrial-hero-backdrop-frame" />
                <div className="industrial-hero-backdrop-dots" />
              </div>

              {/* High-resolution specialty application photograph */}
              <div className="industrial-water-figure-wrap">
                <img
                  src="/images/specialty/polydor-odour-control.jpg"
                  alt="Industrial environmental odour control facility with aeration lagoons and treatment equipment"
                  className="industrial-water-hero-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rich flowing water wave divider */}
        <div className="industrial-hero-wave-bottom" aria-hidden="true">
          <svg
            className="industrial-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="spec-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>

              <linearGradient id="spec-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#0369A1" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#0284C7" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0369A1" stopOpacity="0.5" />
              </linearGradient>

              <linearGradient id="spec-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#0369A1" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4F8FD" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="spec-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#E0F2FE" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#spec-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#spec-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#spec-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#spec-wave-shine)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

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
                Every problem demands a chemistry built specifically for it.
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

      {/* 3. FLAGSHIP SPECIALTY PRODUCTS */}
      <section
        className="industrial-approach-section"
        id="specialty-categories"
        aria-labelledby="specialty-approach-title"
      >
        <div className="container">
          <div className="industrial-section-header">
            <div className="industrial-section-header-left">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Flagship specialty chemistries</span>
              </div>
              <h2 id="specialty-approach-title" className="industrial-section-title">
                Three dedicated problem-solvers.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                Each product is engineered from the ground up to solve a defined
                challenge—surface corrosion conversion, molecular odour neutralisation,
                or HVAC coil decontamination.
              </p>
            </div>
          </div>

          <div className="specialty-approach-grid">
            {flagshipCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="industrial-approach-card" key={card.slug}>
                  <div className="industrial-approach-card-inner">
                    <div className="industrial-approach-icon-box">
                      <Icon size={26} className="industrial-approach-svg" />
                    </div>
                    <div className="industrial-approach-content">
                      <span className="specialty-card-category">{card.category}</span>
                      <h3 className="industrial-approach-card-title">{card.name}</h3>
                      <p className="industrial-approach-card-desc">
                        {card.description}
                      </p>
                      <div
                        className="industrial-approach-tags"
                        aria-label={`${card.name} characteristics`}
                      >
                        {card.tags.map((tag, idx) => (
                          <span key={tag} className="industrial-approach-tag-item">
                            {tag}
                            {idx < card.tags.length - 1 && (
                              <span
                                className="industrial-approach-tag-pipe"
                                aria-hidden="true"
                              >
                                |
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                      <Link href={card.href} className="industrial-approach-card-link">
                        <span>{card.linkText}</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <CardWaterSplash className="industrial-card-water-splash" />
                </article>
              );
            })}
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
                Also in the specialty catalogue.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                These specialty lines sit within the same industrial product profile.
                Share your application parameters and our technical team will confirm
                available grades and technical documentation.
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
                Have a specific application or maintenance challenge in mind?
              </span>
              <h2 id="specialty-cta-title">
                Tell us what <span className="industries-highlight">you need to solve.</span>
              </h2>
              <p>
                The substrate, equipment, or environmental conditions tell us more than a
                product name. Share your parameters and our technical team will
                recommend the right formulation and dosage protocol.
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
