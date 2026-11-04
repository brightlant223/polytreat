import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import { IndustrialCatalogueCarousel } from "./IndustrialCatalogueCarousel";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Fan,
  Home,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial Water Treatment | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water treatment categories for boiler, cooling-water, reverse-osmosis, and effluent systems, plus the wider industrial range.",
};

function BoilerIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="3" width="14" height="18" rx="4" />
      <line x1="9" y1="8" x2="9" y2="16" />
      <line x1="15" y1="8" x2="15" y2="16" />
      <line x1="5" y1="9" x2="19" y2="9" />
      <line x1="5" y1="15" x2="19" y2="15" />
      <line x1="2" y1="8" x2="5" y2="8" />
      <line x1="2" y1="16" x2="5" y2="16" />
    </svg>
  );
}

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
        <linearGradient id="card-splash-drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="card-splash-ring" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="card-splash-pool" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Soft corner water pool */}
      <path d="M45 70 C70 50 95 48 120 54 L120 70 Z" fill="url(#card-splash-pool)" />

      {/* Concentric ripple arcs emanating from corner */}
      <path
        d="M20 70 C20 42 62 18 120 22"
        stroke="url(#card-splash-ring)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <path
        d="M50 70 C50 50 80 34 120 38"
        stroke="url(#card-splash-ring)"
        strokeWidth="1.8"
      />
      <path
        d="M78 70 C78 58 96 48 120 50"
        stroke="url(#card-splash-ring)"
        strokeWidth="2"
      />

      {/* Dynamic water splash droplets */}
      <path
        d="M84 34 C80 28 78 20 83 14 C87 8 94 11 96 18 C98 26 90 32 84 34 Z"
        fill="url(#card-splash-drop)"
      />
      <circle cx="66" cy="22" r="3.5" fill="url(#card-splash-drop)" />
      <circle cx="52" cy="36" r="2.5" fill="#BAE6FD" fillOpacity="0.75" />
      <circle cx="75" cy="10" r="2" fill="#0284C7" fillOpacity="0.5" />
      <circle cx="100" cy="26" r="4" fill="url(#card-splash-drop)" />
      <circle cx="94" cy="44" r="1.8" fill="#BAE6FD" fillOpacity="0.8" />
    </svg>
  );
}


function ReverseOsmosisIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="4.5" height="14" rx="2" />
      <rect x="9.75" y="3" width="4.5" height="18" rx="2" />
      <rect x="16.5" y="5" width="4.5" height="14" rx="2" />
      <line x1="5.25" y1="2" x2="5.25" y2="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="18.75" y1="2" x2="18.75" y2="5" />
      <line x1="5.25" y1="19" x2="5.25" y2="22" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="18.75" y1="19" x2="18.75" y2="22" />
    </svg>
  );
}

function EffluentIcon({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4v6a4 4 0 0 0 4 4h8" />
      <path d="M15 11l3 3-3 3" />
      <path d="M3 19c2.5 0 3.5-1.5 5.5-1.5s3 1.5 5.5 1.5 3.5-1.5 5.5-1.5" />
      <path d="M3 22c2.5 0 3.5-1.5 5.5-1.5s3 1.5 5.5 1.5 3.5-1.5 5.5-1.5" />
    </svg>
  );
}

const problemChecklistCol1 = [
  "Scale and deposition reduce heat transfer.",
  "Corrosion can damage equipment.",
  "Membrane fouling affects RO performance.",
];

const problemChecklistCol2 = [
  "Biological growth impacts water quality.",
  "Water loss and higher operating costs.",
  "Varying effluent characteristics and compliance needs.",
];

const approachCards = [
  {
    id: "cooling-approach",
    title: "Cooling water",
    description:
      "Corrosion and scale control, dispersants and microbial control for stable and efficient cooling operations.",
    tags: ["Corrosion inhibitors", "Scale control", "Dispersants", "Biocides"],
    linkText: "See the cooling water range",
    href: "/solutions/boiler-cooling-water#cooling-water",
    icon: Fan,
  },
  {
    id: "boiler-approach",
    title: "Boiler water",
    description:
      "Scale and corrosion control for reliable steam generation and long equipment life.",
    tags: [
      "Scale inhibitors",
      "Oxygen scavengers",
      "Alkalinity control",
      "Condensate treatment",
    ],
    linkText: "See the boiler water range",
    href: "/solutions/boiler-cooling-water#boiler-water",
    icon: BoilerIcon,
  },
  {
    id: "ro-approach",
    title: "Reverse osmosis",
    description:
      "Membrane protection, scaling control and cleaning support for consistent RO performance.",
    tags: ["Antiscalants", "Dispersants", "Membrane cleaners", "Pre-treatment"],
    linkText: "See the RO range",
    href: "/solutions/ro-effluent#reverse-osmosis",
    icon: ReverseOsmosisIcon,
  },
  {
    id: "effluent-approach",
    title: "Effluent treatment",
    description:
      "Process and effluent treatment solutions to support compliance and water reuse.",
    tags: ["Coagulants", "Flocculants", "Metal precipitants", "Nutrient control"],
    linkText: "See the effluent treatment range",
    href: "/solutions/ro-effluent#effluent-treatment",
    icon: EffluentIcon,
  },
];

const catalogueRows = [
  {
    title: "Scale & deposition control",
    description: "Helps prevent scale formation in boilers, cooling systems and RO.",
    badges: ["Scale inhibitors", "Antiscalants", "Dispersants"],
    href: "/solutions/boiler-cooling-water#boiler-water",
  },
  {
    title: "Corrosion control",
    description: "Protects metal surfaces in water and steam systems.",
    badges: ["Corrosion inhibitors", "pH control", "Film-forming agents"],
    href: "/solutions/boiler-cooling-water#cooling-water",
  },
  {
    title: "Membrane cleaning & care",
    description: "Cleaning solutions to remove foulants and maintain performance.",
    badges: ["Membrane cleaners", "Descalers", "Cleaning programmes"],
    href: "/solutions/ro-effluent#reverse-osmosis",
  },
  {
    title: "Water quality conditioning",
    description: "Helps maintain key water parameters for different systems.",
    badges: ["pH control", "Alkalinity control", "Oxygen scavengers"],
    href: "/solutions/boiler-cooling-water#boiler-water",
  },
  {
    title: "Effluent treatment aids",
    description: "Chemical solutions to support industrial effluent treatment and compliance.",
    badges: ["Coagulants", "Flocculants", "Metal precipitants"],
    href: "/solutions/ro-effluent#effluent-treatment",
  },
];

export default function IndustrialWaterPage() {
  return (
    <main className="industrial-water-page">
      {/* 1. HERO SECTION */}
      <section
        className="industrial-water-hero industrial-water-reference-hero"
        aria-labelledby="industrial-water-title"
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
            <span aria-current="page">Industrial Water</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <h1 id="industrial-water-title">
                Water treatment for{" "}
                <br className="industrial-hero-br-desktop" />
                the systems that{" "}
                <br className="industrial-hero-br-desktop" />
                <span className="industrial-hero-highlight">keep plants running.</span>
              </h1>

              <div className="industrial-hero-accent-line" aria-hidden="true" />

              <p>
                Industrial water treatment solutions for thermal systems, cooling
                systems, membrane systems and wastewater treatment that ensure water
                quality, improve efficiency and help maintain the reliability of your
                plant.
              </p>

              <div className="industrial-water-hero-actions">
                <Link className="btn btn-industrial-primary" href="#treatment-categories">
                  <span>Explore by category</span>
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
              {/* Modern technical architectural backdrop & ambient glow */}
              <div className="industrial-hero-backdrop-shape" aria-hidden="true">
                <div className="industrial-hero-backdrop-glow" />
                <div className="industrial-hero-backdrop-frame" />
                <div className="industrial-hero-backdrop-dots" />
              </div>

              {/* Large high-resolution RO facility photograph container */}
              <div className="industrial-water-figure-wrap">
                <img
                  src="/images/solutions/industrial-water-ro-facility.jpg"
                  alt="Industrial reverse osmosis water treatment facility with multi-tiered membrane pressure vessels, high-pressure pumps and stainless steel piping"
                  className="industrial-water-hero-img"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Rich flowing water wave divider - transparent background, vibrant layered aquatic gradient */}
        <div className="industrial-hero-wave-bottom" aria-hidden="true">
          <svg
            className="industrial-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Back soft navy/water-light wave */}
              <linearGradient id="ind-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.7" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>

              {/* Mid flowing brand-blue wave */}
              <linearGradient id="ind-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
                <stop offset="30%" stopColor="#0369A1" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#0284C7" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0369A1" stopOpacity="0.5" />
              </linearGradient>

              {/* Front subtle water gradient wave melting smoothly into section below */}
              <linearGradient id="ind-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#0369A1" stopOpacity="0.7" />
                <stop offset="65%" stopColor="#BAE6FD" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4F8FD" stopOpacity="1" />
              </linearGradient>

              {/* Luminous wave crest reflection */}
              <linearGradient id="ind-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#E0F2FE" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* 1. Back translucent wave */}
            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#ind-wave-back)"
            />

            {/* 2. Mid cyan/sky ribbon wave */}
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#ind-wave-mid)"
            />

            {/* 3. Front vibrant gradient wave */}
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#ind-wave-front)"
            />

            {/* 4. Luminous wave crest shine stroke */}
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#ind-wave-shine)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. PROBLEM & SOLUTION */}
      <section
        className="industrial-problems-section"
        id="system-challenges"
        aria-labelledby="system-problems-title"
      >
        <div className="container">
          <div className="industrial-problems-layout">
            <div className="industrial-problems-image-col">
              <div className="industrial-problems-image-frame">
                <img
                  src="/images/solutions/industrial-water-systems-facility.jpg"
                  alt="Industrial water treatment filtration facility with large blue pressure filter tanks, yellow catwalks and stainless steel piping"
                  className="industrial-problems-img"
                />
              </div>
            </div>

            <div className="industrial-problems-content-col">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Problem &amp; solution</span>
              </div>
              <h2 id="system-problems-title" className="industrial-problems-title">
                Every system has its own set of problems.
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

      {/* 3. TREATMENT APPROACH / CATEGORIES IN THE INDUSTRIAL RANGE */}
      <section
        className="industrial-approach-section"
        id="treatment-categories"
        aria-labelledby="treatment-approach-title"
      >
        <div className="container">
          <div className="industrial-section-header">
            <div className="industrial-section-header-left">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Treatment approach</span>
              </div>
              <h2 id="treatment-approach-title" className="industrial-section-title">
                Categories in the industrial range.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                An application-focused range, with products and programmes for the key
                water systems in industrial operations.
              </p>
            </div>
          </div>

          <div className="industrial-approach-grid">
            {approachCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="industrial-approach-card" key={card.id}>
                  <div className="industrial-approach-card-inner">
                    <div className="industrial-approach-icon-box">
                      <Icon size={26} className="industrial-approach-svg" />
                    </div>
                    <div className="industrial-approach-content">
                      <h3 className="industrial-approach-card-title">{card.title}</h3>
                      <p className="industrial-approach-card-desc">
                        {card.description}
                      </p>
                      <div
                        className="industrial-approach-tags"
                        aria-label={`${card.title} categories`}
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

      {/* 4. PRODUCT SELECTION & OVERVIEW / ALSO IN THE INDUSTRIAL CATALOGUE */}
      <section
        className="industrial-catalogue-section"
        id="other-categories"
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
                Also in the industrial catalogue.
              </h2>
            </div>
          </div>

          <IndustrialCatalogueCarousel items={catalogueRows} />
        </div>
      </section>

      {/* 5. BOTTOM CTA BAND - Matches Industries page design */}
      <section
        className="industries-contact-band"
        id="industrial-cta"
        aria-labelledby="industrial-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">Have a specific site or system in mind?</span>
              <h2 id="industrial-cta-title">
                Tell us what <span className="industries-highlight">you work with.</span>
              </h2>
              <p>
                Share the application area, the system and the operating conditions, and
                the team can direct your enquiry to the right category.
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
