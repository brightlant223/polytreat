import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import InteractiveRangesSection from "@/components/InteractiveRangesSection";
import ScrollReveal from "@/components/ScrollReveal";
import VKlinVideoPlayer from "@/components/VKlinVideoPlayer";
import { homeStockImages } from "@/data/homeImages";
import {
  vklinProductCount,
  vklinProductGroups,
} from "@/data/vklinProducts";
import { locationSites } from "@/data/locations";
import {
  environmentIcons,
  operatingEnvironments,
  productMapGroups,
} from "@/data/industries";
import {
  specialtyOtherLines,
  specialtyProducts,
} from "@/data/specialtyProducts";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  Droplets,
  Factory,
  Fan,
  FileCheck2,
  Gauge,
  Headset,
  Info,
  Layers,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  ScrollText,
  ShieldCheck,
  Wind,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals Pvt. Ltd. | Water Treatment, Construction Chemistry & V-Klin Care",
  description:
    "Mumbai manufacturer since 1987 of industrial water-treatment, construction and surface-protection, specialty, and V-Klin home and facility-care chemistry. Explore 28 product areas across four ranges.",
};

/* ------------------------------------------------------------------ */
/* What we make: one card per range, mirroring the /industries map.   */
/* ------------------------------------------------------------------ */

const specialtyAreas = ["Odour control", "HVAC coil cleaning", "Rust conversion", "Pool & drinking water"];


const rangeProductAreaCount = productMapGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

/* ------------------------------------------------------------------ */
/* Flagship specialty products: the three documented specialty items. */
/* Copy comes from `specialtyProducts` (the claim-reviewed source of   */
/* truth behind /specialty/*); icons, short chip labels and the safety */
/* notes below stay faithful to that module.                            */
/* ------------------------------------------------------------------ */

const flagshipChips: Record<string, string[]> = {
  corosil: ["Structural steel", "Railings & grills", "Pipelines & sheet metal", "Rolling shutters"],
  "polydor-ws": ["Waste & wastewater", "Food & animal processing", "Exhaust scrubbers", "Facilities"],
  polyklin: ["Evaporator coils", "Condenser coils", "Window & split units", "AHU & FCU"],
};

const flagshipMedia: Record<
  string,
  { src: string; alt: string; categoryBadge: string }
> = {
  corosil: {
    src: "/images/specialty/corosil-rust-treatment.jpg",
    alt: "Applying COROSIL rust inhibitor and converter primer on steel beam with brush",
    categoryBadge: "CORROSION CONTROL",
  },
  "polydor-ws": {
    src: "/images/specialty/polydor-odour-control.jpg",
    alt: "Industrial wastewater aeration clarifier basin for POLYDOR-WS odour control",
    categoryBadge: "ODOUR CONTROL",
  },
  polyklin: {
    src: "/images/specialty/polyklin-hvac-coils.jpg",
    alt: "Commercial outdoor HVAC condenser chiller coils for POLYKLIN cleaning",
    categoryBadge: "HVAC COIL CARE",
  },
};

const flagshipIcons: Record<string, typeof Paintbrush> = {
  corosil: Paintbrush,
  "polydor-ws": Wind,
  polyklin: Fan,
};

const flagshipNotes: Record<string, string> = {
  corosil:
    "A treatment and primer step; a compatible paint system is still required over it.",
  "polydor-ws":
    "Odour control only, not a disinfectant, sanitiser or insecticide.",
  polyklin:
    "Directions are as published in our product literature; ask for the current sheet.",
};

const flagshipProducts = specialtyProducts.filter(
  (product) => product.slug in flagshipIcons,
);


const markets = operatingEnvironments.map(({ id, eyebrow, description }) => ({
  icon: environmentIcons[id],
  eyebrow,
  title: eyebrow,
  description,
  href: `/industries#${id}`,
}));

const pqrsTiles = [
  {
    letter: "P",
    icon: Gauge,
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
  },
  {
    letter: "Q",
    icon: BadgeCheck,
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
  },
  {
    letter: "R",
    icon: ShieldCheck,
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
  },
  {
    letter: "S",
    icon: Headset,
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
  },
];

const WhatsAppCta = ({ className = "" }: { className?: string }) => (
  <a
    className={`hp-whatsapp-link ${className}`.trim()}
    href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
    target="_blank"
    rel="noreferrer"
  >
    <MessageCircle size={16} aria-hidden="true" />
    Chat on WhatsApp <ArrowUpRight size={14} aria-hidden="true" className="hp-whatsapp-arrow" />
  </a>
);

export default function Home() {
  return (
    <main className="hp-home">
      <HeroCarousel />
      <ScrollReveal />

      {/* Quality & Compliance Strip */}
      <section className="certifications-strip" aria-label="Quality and compliance documents">
        <div className="container certifications-strip-layout">
          <div className="cert-strip-heading">
            <span className="cert-strip-icon-box"><ShieldCheck size={20} strokeWidth={2} aria-hidden="true" /></span>
            <div>
              <span className="cert-strip-eyebrow">Quality &amp; compliance</span>
              <strong>Certificates and their scope</strong>
            </div>
          </div>
          <div className="cert-badges-grid">
            <div className="cert-badge-item">
              <BadgeCheck size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>ISO 9001:2015 quality system</span>
            </div>
            <div className="cert-badge-item">
              <FileCheck2 size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>UKcert WHO-GMP reference</span>
            </div>
            <div className="cert-badge-item">
              <ScrollText size={16} className="cert-badge-icon" aria-hidden="true" />
              <span>Private FDA reference</span>
            </div>
            <div className="cert-badge-item">
              <Leaf size={16} className="cert-badge-icon cert-badge-leaf" aria-hidden="true" />
              <span>UKcert Eco-Friendly certificate</span>
            </div>
          </div>
          <Link href="/certifications" className="cert-strip-link">
            <span>View Certifications</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <InteractiveRangesSection />

      {/* Complete business map */}
      <section className="hp-section" id="range-map" aria-labelledby="range-map-title">
        <div className="container">
          <div className="hp-section-heading">
            <div>
              <h2 id="range-map-title">Every product area, at a glance.</h2>
            </div>
            <p>
              {rangeProductAreaCount} product areas across the four ranges, each one
              documented on its own page, so nothing here is a dead end.
            </p>
          </div>

          <div className="hp-map-grid hp-stagger">
            {productMapGroups.map((group) => (
              <div className={`hp-map-group hp-map-${group.id}`} key={group.id}>
                <div className="hp-map-group-head">
                  <h3>{group.title}</h3>
                  <span className="hp-map-group-summary">{group.summary}</span>
                </div>
                <ul className="hp-map-pills">
                  {group.items.map((item) => (
                    <li key={`${group.id}-${item.label}`}>
                      <Link href={item.href}>
                        <span>{item.label}</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="hp-section-foot hp-section-foot-center">
            <span>The industries page shows the full map with sector contexts.</span>
            <Link className="text-link" href="/industries">
              Open the product map <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="hp-section hp-section-tint" id="applications" aria-labelledby="applications-title">
        <div className="container hp-applications-layout">
          <div className="hp-applications-image">
            <div className="hp-applications-figure hp-reveal-scale">
              <Image
                src={homeStockImages.applicationsImage.activeUrl}
                alt={homeStockImages.applicationsImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="hp-applications-img"
              />
              <div className="hp-applications-shade" aria-hidden="true" />
              <div className="hp-applications-caption">
                <span className="hp-applications-tag">
                  <Factory size={15} strokeWidth={2} aria-hidden="true" />
                  Chemistry in working environments
                </span>
                <p>
                  Representative effluent-treatment basins: process-water responsibility,
                  building surfaces, and shared spaces are all part of the same business.
                </p>
              </div>
            </div>
          </div>

          <div className="hp-applications-list">
            <div className="hp-section-heading hp-heading-tight hp-reveal">
<div>
                <h2 id="applications-title">Where the chemistry goes to work.</h2>
              </div>
              <p>
                The same ranges serve plants, infrastructure projects, and everyday
                facilities. Start with the environment you operate in.
              </p>
            </div>

            <div className="hp-application-rows hp-stagger">
              {markets.map(({ icon: Icon, description, href }, index) => (
                <Link className="hp-application-row" href={href} key={markets[index].href}>
                  <span className="hp-application-index">{`0${index + 1}`}</span>
                  <span className="hp-application-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="hp-application-copy">
                    <strong>{markets[index].title}</strong>
                    <span>{description}</span>
                  </span>
                  <ArrowUpRight className="hp-application-arrow" size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship specialty products */}
      <section className="hp-section hp-section-flagship" id="flagship" aria-labelledby="flagship-title">
        <div className="container">
          {/* Reference Image 2 Modern Section Header */}
          <div className="hp-specialty-header">
            <div className="hp-specialty-header-left">
              <h2 id="flagship-title" className="hp-specialty-title">
                Specialty products,{" "}
                <span className="hp-specialty-title-accent">
                  in detail.
                  <svg
                    className="hp-specialty-brush-curve"
                    viewBox="0 0 170 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10C45 4 118 3 167 7C125 12 52 13 3 10Z"
                      fill="#0284C7"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="hp-specialty-header-right">
              <div className="hp-specialty-header-divider" aria-hidden="true" />
              <div className="hp-specialty-icon-box" aria-hidden="true">
                <Layers size={24} strokeWidth={1.8} className="hp-specialty-icon" />
              </div>
              <p className="hp-specialty-lead">
                POLYDOR-WS, COROSIL and POLYKLIN each solve one specific problem.
                Their full pages carry the product literature, application lists,
                and document requests.
              </p>
            </div>
          </div>

          <div className="hp-specialty-grid">
            {flagshipProducts.map((product) => {
              const media = flagshipMedia[product.slug];
              return (
                <article className="hp-spec-card" key={product.slug}>
                  {/* Top media banner with category pill (1:1 square ratio) */}
                  <div className="hp-spec-media-wrap">
                    {media && (
                      <Image
                        src={media.src}
                        alt={media.alt}
                        width={600}
                        height={600}
                        className="hp-spec-media-img"
                        priority={product.slug === "corosil"}
                      />
                    )}
                    <span className="hp-spec-category-pill">
                      {media?.categoryBadge || product.category.toUpperCase()}
                    </span>
                    <svg
                      className="hp-spec-wave-svg"
                      viewBox="0 0 500 32"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 16C120 32 360 4 500 20V32H0V16Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>

                  {/* Card Content */}
                  <div className="hp-spec-body">
                    <h3 className="hp-spec-name">{product.name}</h3>
                    <p className="hp-spec-tagline">{product.headline}</p>
                    <p className="hp-spec-summary">{product.summary}</p>

                    {/* Checkmark Tag Chips */}
                    <div className="hp-spec-tags-wrap" aria-label={`${product.name} application areas`}>
                      {flagshipChips[product.slug]?.map((chip) => (
                        <span className="hp-spec-tag-item" key={chip}>
                          <span className="hp-spec-tag-check-circle" aria-hidden="true">
                            <Check size={9} strokeWidth={3.5} />
                          </span>
                          <span>{chip}</span>
                        </span>
                      ))}
                    </div>

                    {/* Information Note Box */}
                    <div className="hp-spec-note-box">
                      <span className="hp-spec-note-icon" aria-hidden="true">
                        <Info size={14} strokeWidth={2.2} />
                      </span>
                      <p className="hp-spec-note-text">{flagshipNotes[product.slug]}</p>
                    </div>

                    {/* Full-width Explore Capsule Button */}
                    <Link className="hp-spec-explore-btn" href={`/specialty/${product.slug}`}>
                      <span>Explore {product.name}</span>
                      <ArrowRight size={15} strokeWidth={2.4} className="hp-spec-btn-arrow" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="hp-section-foot">
            <span className="hp-flag-more">
              Also in the specialty range:{" "}
              {specialtyOtherLines.map((line, index) => (
                <span key={line.title}>
                  {index > 0 && <span aria-hidden="true">, </span>}
                  <Link href="/specialty">{line.title}</Link>
                </span>
              ))}
            </span>
            <Link className="text-link" href="/specialty">
              Open the specialty hub <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* V-Klin brand spotlight */}
      <section className="hp-section hp-section-vklin hp-reveal-section" id="vklin" aria-labelledby="vklin-title">
        {/* Decorative soft mint wave backdrop */}
        <div className="hp-vklin-decor" aria-hidden="true" />

        <div className="container hp-vklin-layout">
          <div className="hp-vklin-copy hp-reveal">
            <div className="hp-vklin-identity">
              <span className="hp-vklin-logo-pill">
                <Image
                  src="/vklin-logo.webp"
                  alt="V-Klin brand logo"
                  width={110}
                  height={38}
                  className="hp-vklin-logo"
                />
              </span>
              <span className="eyebrow eyebrow-green hp-vklin-eyebrow">
                <Leaf size={15} strokeWidth={2.4} aria-hidden="true" />
                <span>A PolyTreat brand</span>
              </span>
            </div>

            <h2 id="vklin-title" className="hp-vklin-title">
              Meet V-Klin. Care<br />
              for everyday spaces.
            </h2>

            <p className="hp-vklin-lead">
              V-Klin brings PolyTreat&apos;s formulated cleaning range to homes, workplaces,
              and shared facilities, organized by the task each product handles.
            </p>

            <ul className="hp-vklin-cats-grid" aria-label="V-Klin categories">
              {vklinProductGroups.map(({ id, title }) => (
                <li key={id} className="hp-vklin-cat-item">
                  <span className="hp-cat-check" aria-hidden="true">
                    <Check size={13} strokeWidth={2.8} />
                  </span>
                  <Link href={`/vklin/products#${id}`} className="hp-cat-link">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hp-vklin-actions">
              <Link className="hp-btn-vklin-primary" href="/vklin">
                <span>Explore V-Klin</span>
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link className="hp-vklin-link-secondary" href="/vklin/products">
                <span>See all {vklinProductCount} products</span>
                <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <VKlinVideoPlayer />
        </div>
      </section>

      {/* Since 1987 — company story + PQRS */}
      <section className="hp-section hp-section-story" id="story" aria-labelledby="story-title">
        <div className="container">
          <div className="hp-story-layout">
            <div className="hp-story-copy hp-reveal">
              <h2 id="story-title">A manufacturer first, since 1987.</h2>
              <p>
                PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own
                plants, with an in-house laboratory monitoring quality daily, and a direct
                technical conversation behind every enquiry.
              </p>

              <ul className="hp-story-facts" aria-label="Company facts">
                <li>
                  <BadgeCheck size={16} aria-hidden="true" />
                  <span><strong>In-house QC laboratory</strong> with daily product monitoring</span>
                </li>
                <li>
                  <Building2 size={16} aria-hidden="true" />
                  <span><strong>Three sites</strong>: Mumbai offices and green products facility, plus Tarapur MIDC manufacturing</span>
                </li>
                <li>
                  <Factory size={16} aria-hidden="true" />
                  <span><strong>Formulated in our own plants</strong>, in continuous operation since 1987</span>
                </li>
              </ul>

              <div className="hp-story-locations" aria-label="PolyTreat locations">
                {locationSites.map((site) => (
                  <span className="hp-story-location" key={site.id}>
                    <MapPin size={14} aria-hidden="true" />
                    <span className="hp-story-location-text">
                      {site.title} <em>{site.role}</em>
                    </span>
                  </span>
                ))}
              </div>

              <div className="hp-story-actions">
                <Link className="text-link" href="/about">
                  More about PolyTreat <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link className="text-link" href="/certifications">
                  Certificates and their scope <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hp-story-side">
              <div className="hp-pqrs hp-reveal-scale">
                <h3 className="hp-pqrs-label">The PQRS framework</h3>
                <div className="hp-pqrs-list">
                  {pqrsTiles.map(({ letter, icon: Icon, title, description }) => (
                    <article className={`hp-pqrs-tile hp-pqrs-${letter.toLowerCase()}`} key={letter}>
                      <span className="hp-pqrs-letter" aria-hidden="true">{letter}</span>
                      <div className="hp-pqrs-copy">
                        <h4>{title}</h4>
                        <p>{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <p className="hp-pqrs-note">
                  Request product TDS and safety documents for application and handling details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="hp-section hp-section-contact" id="contact" aria-labelledby="contact-title">
        <div className="container hp-contact-panel">
          <div className="hp-contact-copy hp-reveal">
            <h2 id="contact-title">Let&apos;s talk about your application.</h2>
            <p>
              Tell us the system, surface, or facility behind the requirement, and we&apos;ll
              direct it to the right team, including current product documents.
            </p>
            <Link className="text-link hp-contact-form-link" href="/contact#contact-form">
              Or send a detailed enquiry form <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="hp-contact-cards hp-stagger">
            <a className="hp-contact-card" href="mailto:polyind2@gmail.com">
              <span className="hp-contact-icon"><Mail size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Email enquiries</span>
                <strong>polyind2@gmail.com</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="hp-contact-card" href="tel:+919820235995">
              <span className="hp-contact-icon"><Phone size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Technical &amp; sales</span>
                <strong>+91 98202 35995</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="hp-contact-card"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              <span className="hp-contact-icon"><MessageCircle size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>WhatsApp</span>
                <strong>Chat with the team</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="hp-contact-card hp-contact-address">
              <span className="hp-contact-icon"><MapPin size={18} aria-hidden="true" /></span>
              <span className="hp-contact-card-copy">
                <span>Corporate office</span>
                <strong>7-A Topiwala Building, Goregaon (West), Mumbai 400104</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
