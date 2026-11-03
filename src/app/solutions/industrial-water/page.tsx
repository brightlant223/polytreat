import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Droplets,
  Fan,
  FlaskConical,
  Home,
  MessageCircle,
  Pipette,
  Recycle,
  ShieldCheck,
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

const functionCards = [
  {
    id: "boiler",
    title: "Boiler water",
    description:
      "Treatment programmes for boiler systems to control scale, corrosion and maintain efficiency.",
    linkText: "Read more about boiler water",
    href: "/solutions/boiler-cooling-water#boiler-water",
    icon: BoilerIcon,
  },
  {
    id: "cooling",
    title: "Cooling water",
    description:
      "Solutions for cooling water systems to control scale, corrosion and biological growth.",
    linkText: "Configure cooling water",
    href: "/solutions/boiler-cooling-water#cooling-water",
    icon: Fan,
  },
  {
    id: "ro",
    title: "Reverse osmosis",
    description:
      "Pre-treatment and membrane support solutions for reliable RO operation and water recovery.",
    linkText: "RO solutions",
    href: "/solutions/ro-effluent#reverse-osmosis",
    icon: ReverseOsmosisIcon,
  },
  {
    id: "effluent",
    title: "Effluent treatment",
    description:
      "Chemical solutions for industrial effluent to support treatment, reuse and discharge compliance.",
    linkText: "Effluent treatment",
    href: "/solutions/ro-effluent#effluent-treatment",
    icon: EffluentIcon,
  },
];

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
    icon: FlaskConical,
  },
  {
    title: "Corrosion control",
    description: "Protects metal surfaces in water and steam systems.",
    badges: ["Corrosion inhibitors", "pH control", "Film-forming agents"],
    href: "/solutions/boiler-cooling-water#cooling-water",
    icon: ShieldCheck,
  },
  {
    title: "Membrane cleaning & care",
    description: "Cleaning solutions to remove foulants and maintain performance.",
    badges: ["Membrane cleaners", "Descalers", "Cleaning programmes"],
    href: "/solutions/ro-effluent#reverse-osmosis",
    icon: Pipette,
  },
  {
    title: "Water quality conditioning",
    description: "Helps maintain key water parameters for different systems.",
    badges: ["pH control", "Alkalinity control", "Oxygen scavengers"],
    href: "/solutions/boiler-cooling-water#boiler-water",
    icon: Droplets,
  },
  {
    title: "Effluent treatment aids",
    description: "Chemical solutions to support industrial effluent treatment and compliance.",
    badges: ["Coagulants", "Flocculants", "Metal precipitants"],
    href: "/solutions/ro-effluent#effluent-treatment",
    icon: Recycle,
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
            <Link href="/solutions">Solutions</Link>
            <span aria-hidden="true" className="industrial-water-breadcrumb-sep">
              &gt;
            </span>
            <span aria-current="page">Industrial Water</span>
          </nav>

          <div className="industrial-water-hero-layout">
            <div className="industrial-water-hero-copy">
              <h1 id="industrial-water-title">
                Water treatment for
                <br className="industrial-hero-br-desktop" />
                the systems that
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
                <Link className="btn btn-industrial-primary" href="#water-systems">
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
              {/* Decorative blue geometric shape behind image */}
              <div className="industrial-hero-backdrop-shape" aria-hidden="true">
                <div className="industrial-hero-tab-topright" />
                <div className="industrial-hero-tab-bottomleft" />
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


        {/* Smooth layered water waves along the bottom */}
        <div className="industrial-hero-wave-bottom" aria-hidden="true">
          <img
            src="/images/solutions/hero-wave-bottom.png"
            alt=""
            className="industrial-wave-img"
          />
        </div>
      </section>

      {/* 2. EXPLORE BY FUNCTION / INDUSTRIAL WATER CATEGORIES */}
      <section
        className="industrial-function-section"
        id="water-systems"
        aria-labelledby="water-systems-title"
      >
        <div className="container">
          <div className="industrial-section-header">
            <div className="industrial-section-header-left">
              <div className="industrial-section-eyebrow">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Explore by function</span>
              </div>
              <h2 id="water-systems-title" className="industrial-section-title">
                Industrial water categories.
              </h2>
            </div>
            <div className="industrial-section-header-right">
              <span className="industrial-header-divider" aria-hidden="true" />
              <p>
                Tailor off-the-shelf or customised water treatment solutions for thermal
                systems, cooling systems, membrane operations and effluent treatment.
              </p>
            </div>
          </div>

          <div className="industrial-function-grid">
            {functionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="industrial-function-card" key={card.id}>
                  <div className="industrial-function-icon-box">
                    <Icon size={24} className="industrial-function-svg" />
                  </div>
                  <h3 className="industrial-function-card-title">{card.title}</h3>
                  <p className="industrial-function-card-desc">{card.description}</p>
                  <Link href={card.href} className="industrial-function-card-link">
                    <span>{card.linkText}</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <img
                    src="/images/solutions/card-water-splash.png"
                    alt=""
                    className="industrial-card-water-splash"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM & SOLUTION */}
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

      {/* 4. TREATMENT APPROACH / CATEGORIES IN THE INDUSTRIAL RANGE */}
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
                  <img
                    src="/images/solutions/card-water-splash.png"
                    alt=""
                    className="industrial-card-water-splash"
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SELECTION & OVERVIEW / ALSO IN THE INDUSTRIAL CATALOGUE */}
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

      {/* 6. WORK TOGETHER / BOTTOM CTA BANNER */}
      <section
        className="industrial-cta-section"
        id="industrial-cta"
        aria-labelledby="industrial-cta-title"
      >
        <div className="container">
          <div className="industrial-cta-banner">
            <div className="industrial-cta-content">
              <div className="industrial-section-eyebrow industrial-section-eyebrow-cta">
                <span className="industrial-eyebrow-bar" aria-hidden="true" />
                <span>Work together on your application</span>
              </div>
              <h2 id="industrial-cta-title" className="industrial-cta-title">
                Share the application with our team.
              </h2>
              <p className="industrial-cta-desc">
                Tell us about your water system, operating conditions and any specific
                needs, and we&apos;ll help you identify a suitable treatment approach.
              </p>
            </div>

            <div className="industrial-cta-action">
              <Link
                href="/contact#contact-form"
                className="btn btn-industrial-cta-action"
              >
                <span>Discuss your application</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            {/* Floating bubbles decoration in banner */}
            <div className="industrial-cta-bubbles" aria-hidden="true">
              <img
                src="/images/solutions/hero-bubbles.png"
                alt=""
                className="industrial-cta-bubbles-img"
              />
            </div>

            {/* Layered wave bottom decoration in banner */}
            <div className="industrial-cta-waves" aria-hidden="true">
              <img
                src="/images/solutions/hero-wave-bottom.png"
                alt=""
                className="industrial-cta-waves-img"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
