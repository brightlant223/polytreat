import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bed,
  Building2,
  Cog,
  Droplet,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  GraduationCap,
  Home,
  Layers3,
  LayoutGrid,
  LucideIcon,
  Menu,
  PlusSquare,
  RefreshCw,
  Shield,
  Shirt,
  Snowflake,
  Sparkles,
  Sprout,
  Train,
  Users,
  UtensilsCrossed,
  Wine,
  Wrench,
  Zap,
} from "lucide-react";
import {
  environmentIcons,
  industrySectors,
  operatingEnvironments,
  productMapGroups,
} from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries & Applications | PolyTreat Chemicals",
  description:
    "Explore PolyTreat's industrial water, construction, specialty and V-Klin ranges, and the industries and settings each one is documented for.",
};

const productMapIcons: Record<string, LucideIcon> = {
  "industrial-water": Cog,
  construction: Layers3,
  specialty: FlaskConical,
  vklin: Sparkles,
};

const sectorIcons: Record<string, LucideIcon> = {
  pharmaceuticals: FlaskConical,
  chemicals: Layers3,
  beverage: Wine,
  food: UtensilsCrossed,
  hospitality: Bed,
  healthcare: PlusSquare,
  textiles: Shirt,
  agro: Sprout,
  utilities: Zap,
  transport: Train,
  engineering: Cog,
  "shared-spaces": Building2,
};

function WaterStorageTankIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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
    >
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v14c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5" />
      <path d="M4 12c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5" />
      <path
        d="M14 9.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-.8 1.2-2.2 2-2.2s2 1.4 2 2.2z"
        fill="#0879E8"
        stroke="#0879E8"
        strokeWidth="1"
      />
    </svg>
  );
}

const contextTagIcons: Record<string, LucideIcon> = {
  "Boiler system": Flame,
  "Cooling water": Snowflake,
  "RO system": Droplet,
  "Effluent treatment": RefreshCw,
  "Building water services": Droplet,
  "Waterproofing": Shield,
  "Protective surface": Layers3,
  "Concrete repair": Wrench,
  "Workplaces": Users,
  "Institutions": GraduationCap,
  "Shared facilities": Building2,
  "Floors": LayoutGrid,
  "F&S": Sparkles,
};

export default function IndustriesPage() {
  return (
    <main className="industries-page industries-reference-layout">
      {/* Hero Section */}
      <section className="industries-page-hero" aria-labelledby="industries-page-title">
        {/* Ambient wave graphics and left water splash */}
        <div className="industries-hero-splash-left" aria-hidden="true" />
        <div className="industries-hero-wave-bottom" aria-hidden="true" />

        {/* Full-width Right Industrial Plant Portal with Circular Rings */}
        <div className="industries-hero-bg-visual" aria-hidden="true">
          <div className="industries-hero-ring industries-hero-ring-outer" />
          <div className="industries-hero-ring industries-hero-ring-mid" />
          <div className="industries-hero-plant-portal">
            <img
              src="/images/industries/industrial-water-facility.jpg"
              alt="Industrial water treatment plant facility"
              className="industries-hero-plant-img"
            />
          </div>
        </div>

        <div className="container industries-hero-container">
          <div className="industries-hero-layout">
            {/* Left Section: Breadcrumb, Eyebrow, Heading, Description, Actions */}
            <div className="industries-hero-copy">
              <nav className="industries-breadcrumbs" aria-label="Breadcrumb">
                <Link href="/" className="industries-breadcrumb-home">
                  <Home size={13} aria-hidden="true" />
                  <span>Home</span>
                </Link>
                <span className="industries-breadcrumb-separator" aria-hidden="true">
                  &gt;
                </span>
                <span aria-current="page" className="industries-breadcrumb-current">
                  Industries
                </span>
              </nav>

              <span className="industries-eyebrow">
                <Menu size={14} strokeWidth={2.5} aria-hidden="true" />
                <span>Industries &amp; applications</span>
              </span>

              <h1 id="industries-page-title">
                Chemistry for plants,<br className="industries-hero-br-desktop" />
                infrastructure, and<br className="industries-hero-br-desktop" />
                <span className="industries-highlight">shared facilities.</span>
              </h1>

              <p>
                PolyTreat makes water treatment, construction and protection, specialty
                and cleaning chemistry. Start with the setting you work in, then follow
                the range that serves it.
              </p>

              <div className="industries-hero-actions">
                <Link className="btn btn-industries-primary" href="#industry-areas">
                  <span>Explore application areas</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="btn btn-industries-secondary" href="#product-map">
                  See the full range
                </Link>
              </div>
            </div>

            {/* Right Section on Desktop / Bottom Section on Mobile */}
            <div className="industries-hero-cards-col">
              {/* Mobile Industrial Hero Image (rendered below CTA buttons on mobile/tablet) */}
              <div className="industries-hero-mobile-image-wrap">
                <img
                  src="/images/industries/industrial-water-facility.jpg"
                  alt="Industrial water treatment plant facility"
                  className="industries-hero-mobile-plant-img"
                />
              </div>

              <div className="industries-hero-floating-cards">
                {/* Floating Image Card 1: Industrial water systems */}
                <div className="industries-hero-card industries-hero-card-1">
                  <div className="industries-hero-card-media">
                    <img
                      src="/images/industries/water-systems-pipes.jpg"
                      alt="Industrial water pipelines, manifolds, and valves"
                      className="industries-hero-card-img"
                    />
                  </div>
                  <div className="industries-hero-card-badge">
                    <span className="industries-hero-card-title">Industrial water systems</span>
                    <Droplets size={13} className="industries-card-icon" aria-hidden="true" />
                  </div>
                </div>

                {/* Floating Image Card 2: Facility & institutional care */}
                <div className="industries-hero-card industries-hero-card-2">
                  <div className="industries-hero-card-media">
                    <img
                      src="/images/industries/facility-institutional-care.jpg"
                      alt="Professional facility and institutional sanitation care"
                      className="industries-hero-card-img"
                    />
                  </div>
                  <div className="industries-hero-card-badge">
                    <span className="industries-hero-card-title">Facility &amp; institutional care</span>
                    <Building2 size={13} className="industries-card-icon" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Environment Section */}
      <section className="industries-area-section" id="industry-areas" aria-labelledby="industry-areas-title">
        <div className="container">
          <div className="industries-section-heading industries-env-heading">
            <div className="industries-heading-left">
              <div className="industries-eyebrow-wrapper">
                <span className="industries-eyebrow-line">
                  <Droplet size={14} className="industries-eyebrow-drop" aria-hidden="true" />
                  <span>Where our ranges fit</span>
                  <span className="industries-eyebrow-dash" aria-hidden="true" />
                </span>
              </div>
              <h2 id="industry-areas-title">
                Start with the{" "}
                <span className="industries-highlight industries-heading-highlight-wrapper">
                  operating environment.
                  <svg
                    className="industries-heading-swoosh"
                    viewBox="0 0 280 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10C75 2.5 205 2.5 277 10"
                      stroke="#0879E8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>
            <div className="industries-heading-right">
              <p>
                Different sites have different needs. Browse the broad application areas
                and follow the link to the related product range.
              </p>
            </div>
          </div>

          <div className="industries-area-grid">
            {operatingEnvironments.map(({ id, number, eyebrow, title, description, contexts, link, linkLabel }) => {
              const Icon = id === "utilities-infrastructure" ? WaterStorageTankIcon : (environmentIcons[id] || Factory);
              return (
                <article className="industries-area-card" id={id} key={id}>
                  {/* Top-left number badge */}
                  <div className="industries-area-card-badge">{number}</div>

                  {/* Top-right icon container */}
                  <div className="industries-area-card-icon-wrap">
                    <Icon size={24} className="industries-area-icon" aria-hidden="true" />
                  </div>

                  {/* Card Content */}
                  <div className="industries-area-card-content">
                    <span className="industries-area-card-eyebrow">{eyebrow}</span>
                    <h3 className="industries-area-card-title">{title}</h3>
                    <p className="industries-area-card-desc">{description}</p>

                    <ul className="industries-area-tags" aria-label={`${eyebrow} application categories`}>
                      {contexts.map((context) => {
                        const TagIcon = contextTagIcons[context] || Droplet;
                        return (
                          <li key={context} className="industries-area-tag">
                            <TagIcon size={12} className="industries-tag-icon" aria-hidden="true" />
                            <span>{context}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Bottom link with circular arrow button */}
                  <div className="industries-area-card-bottom">
                    <Link className="industries-area-card-btn" href={link}>
                      <span>{linkLabel}</span>
                      <span className="industries-area-arrow-circle" aria-hidden="true">
                        <ArrowRight size={13} strokeWidth={2.8} />
                      </span>
                    </Link>
                  </div>

                  {/* Bottom wave & corner illustration decorations */}
                  <div className="industries-card-decor-wrap" aria-hidden="true">
                    <svg
                      className="industries-card-wave-svg"
                      viewBox="0 0 320 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 32C60 20 120 42 180 26C240 10 280 28 320 20V50H0V32Z"
                        fill="url(#card-wave-grad-1)"
                        opacity="0.3"
                      />
                      <path
                        d="M0 38C70 28 140 46 210 34C260 25 290 36 320 30V50H0V38Z"
                        fill="url(#card-wave-grad-2)"
                        opacity="0.55"
                      />
                      <defs>
                        <linearGradient id="card-wave-grad-1" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#38BDF8" />
                          <stop offset="1" stopColor="#0879E8" />
                        </linearGradient>
                        <linearGradient id="card-wave-grad-2" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#7DD3FC" />
                          <stop offset="1" stopColor="#0284C7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {id === "process-manufacturing" && (
                      <img
                        src="/images/industries/card1-water-splash.png"
                        alt=""
                        className="industries-corner-decor industries-corner-splash"
                      />
                    )}
                    {id === "utilities-infrastructure" && (
                      <img
                        src="/images/industries/card2-construction-skyline.png"
                        alt=""
                        className="industries-corner-decor industries-corner-skyline"
                      />
                    )}
                    {id === "facilities-institutions" && (
                      <img
                        src="/images/industries/card3-institution-building.png"
                        alt=""
                        className="industries-corner-decor industries-corner-building"
                      />
                    )}
                  </div>

                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Product Range Section */}
      <section className="industries-map-section" id="product-map" aria-labelledby="product-map-title">
        <div className="container">
          <div className="industries-section-heading">
            <div>
              <span className="industries-eyebrow-line">The full range</span>
              <h2 id="product-map-title">
                Everything PolyTreat makes, <span className="industries-highlight">in one place.</span>
              </h2>
            </div>
            <p>
              Four groups cover the whole range. Follow any category to the page that
              sets out what it is for and where it is used.
            </p>
          </div>

          <div className="industries-map-grid">
            {productMapGroups.map((group) => {
              const Icon = productMapIcons[group.id] || Cog;
              return (
                <article className="industries-map-card" key={group.id}>
                  <div className="industries-map-card-head">
                    <span className="industries-map-card-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="industries-map-items">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href}>
                          <span>{item.label}</span>
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="industries-sector-section" id="industry-sectors" aria-labelledby="industry-sectors-title">
        <div className="container">
          <div className="industries-section-heading">
            <div>
              <span className="industries-eyebrow-line">Industries we work in</span>
              <h2 id="industry-sectors-title">
                The settings our ranges <span className="industries-highlight">are documented for.</span>
              </h2>
            </div>
            <p>
              These are the environments our product ranges are written for. Tell us
              your sector and we will confirm what we can supply today.
            </p>
          </div>

          <div className="industries-sector-grid">
            {industrySectors.map((sector) => {
              const Icon = sectorIcons[sector.id] || Cog;
              return (
                <article className="industries-sector-card" key={sector.id}>
                  <div className="industries-sector-card-head">
                    <span className="industries-sector-card-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div className="industries-sector-card-info">
                      <h3>{sector.title}</h3>
                      <p>{sector.description}</p>
                    </div>
                  </div>
                  <ul className="industries-sector-list">
                    {sector.areas.map((area) => (
                      <li key={area.label}>
                        <Link href={area.href}>
                          <span className="industries-bullet">•</span>
                          <span className="industries-area-label">{area.label}</span>
                          <ArrowRight size={12} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="industries-contact-band" aria-labelledby="industries-contact-title">
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">Have a specific site or system in mind?</span>
              <h2 id="industries-contact-title">
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