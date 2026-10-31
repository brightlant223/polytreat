import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import { homeStockImages } from "@/data/homeImages";
import {
  findVKlinProducts,
  vklinProductCount,
  vklinProductGroups,
} from "@/data/vklinProducts";
import {
  environmentIcons,
  operatingEnvironments,
  productMapGroups,
} from "@/data/industries";
import {
  specialtyOtherLines,
  specialtyProducts,
} from "@/data/specialtyProducts";
import { locationSites } from "@/data/locations";
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
  polyklin: ["Evaporator coils", "Condenser coils", "AHU & FCU", "Window & split units"],
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

const vklinPreviewProducts = findVKlinProducts([
  "Surface Cleaner",
  "Floor Cleaner",
  "Dishwash Gel",
]);

/* ---------------------------------------------------------------- */
/* What we make: one card per range, mirroring the /industries map  */
/* ---------------------------------------------------------------- */

const specialtyAreas = ["Odour control", "HVAC coil cleaning", "Rust conversion", "Pool & drinking water"];

type RangeTag = { label: string; tone: string };

const ranges: {
  id: string;
  number: string;
  icon: typeof Droplets;
  imageSrc: string | null;
  imageAlt: string;
  eyebrow: string;
  topBadge: string;
  bottomPill: string;
  title: string;
  description: string;
  tags: RangeTag[];
  link: string;
  linkText: string;
  tone: string;
}[] = [
  {
    id: "ranges-water",
    number: "01",
    icon: Droplets,
    imageSrc: homeStockImages.rangeWater.activeUrl,
    imageAlt: homeStockImages.rangeWater.alt,
    eyebrow: "Industrial water & process",
    topBadge: "Water treatment",
    bottomPill: "Boiler, cooling, RO, ETP",
    title: "Industrial water & process",
    description:
      "Boiler, cooling, RO and effluent chemistry for plant systems.",
    tags: [
      { label: "Boiler water", tone: "cyan" },
      { label: "Cooling water", tone: "cyan" },
      { label: "RO & desalination", tone: "cyan" },
      { label: "Effluent & sewage", tone: "cyan" },
    ],
    link: "/solutions/industrial-water",
    linkText: "Explore water solutions",
    tone: "blue",
  },
  {
    id: "ranges-construction",
    number: "02",
    icon: Factory,
    imageSrc: homeStockImages.rangeConstruction.activeUrl,
    imageAlt: homeStockImages.rangeConstruction.alt,
    eyebrow: "Construction & protection",
    topBadge: "Surface protection",
    bottomPill: "Waterproof, repair, seal",
    title: "Construction & protection",
    description:
      "Waterproofing, repair mortars, coatings and joint sealants for buildings and plant.",
    tags: [
      { label: "Waterproofing", tone: "amber" },
      { label: "Repair & bonding", tone: "amber" },
      { label: "Floor & joint", tone: "amber" },
      { label: "External coatings", tone: "amber" },
    ],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction solutions",
    tone: "amber",
  },
  {
    id: "ranges-specialty",
    number: "03",
    icon: Layers3,
    imageSrc: null,
    imageAlt: "Specialty products",
    eyebrow: "Specialty products",
    topBadge: "Problem-specific",
    bottomPill: "Odour, rust, HVAC",
    title: "Specialty products",
    description:
      "POLYDOR-WS for odour, COROSIL for rust, POLYKLIN for HVAC coils.",
    tags: [
      { label: "Odour control", tone: "purple" },
      { label: "Rust conversion", tone: "purple" },
      { label: "HVAC coil cleaning", tone: "purple" },
      { label: "Pool & drinking water", tone: "purple" },
    ],
    link: "/specialty",
    linkText: "Explore specialty range",
    tone: "purple",
  },
  {
    id: "ranges-vklin",
    number: "04",
    icon: Leaf,
    imageSrc: homeStockImages.rangeVklin.activeUrl,
    imageAlt: homeStockImages.rangeVklin.alt,
    eyebrow: "V-Klin care",
    topBadge: "Home & facility",
    bottomPill: "Clean, protect, freshen",
    title: "V-Klin care",
    description:
      "Cleaning and facility-care products for homes and workplaces, organised by task.",
    tags: [
      { label: "Floor & surface", tone: "green" },
      { label: "Hand hygiene", tone: "green" },
      { label: "Dishwashing", tone: "green" },
      { label: "Glass & toilet", tone: "green" },
    ],
    link: "/vklin/products",
    linkText: "Explore V-Klin products",
    tone: "green",
  },
];

/* Industry application rows (merged into ranges section) */
const markets = operatingEnvironments.map(({ id, eyebrow, description }) => ({
  icon: environmentIcons[id],
  eyebrow,
  title: eyebrow,
  description,
  href: `/industries#${id}`,
}));

/* PQRS tiles */
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
            <div>
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

      {/* What we make — one card per range, with inline application links */}
      <section className="hp-section hp-section-tint hp-ranges-section" id="ranges" aria-labelledby="ranges-title">
        <div className="hp-hero-container">
          <div className="hp-ranges-header hp-reveal">
            <div className="hp-ranges-title-box">
              <h2 id="ranges-title" className="hp-ranges-title">
                Four ranges, one manufacturer.
                <svg className="hp-ranges-brush" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 11C70 4 160 3 256 9C205 14 115 15 38 12" stroke="#0EA5E9" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
                </svg>
              </h2>
            </div>
            <p className="hp-ranges-lead" style={{fontSize: '0.85rem', lineHeight: '1.4', maxWidth: '380px', color: '#4C6579'}}>
              PolyTreat formulates four product ranges at its own sites for the systems, surfaces, and spaces they serve.
            </p>
          </div>

          <div className="hp-range-grid hp-stagger">
            {ranges.map(({ id, number, icon: Icon, imageSrc, imageAlt, eyebrow, topBadge, bottomPill, title, description, tags, link, linkText, tone }) => (
              <article className={`hp-range-card hp-tone-${tone}`} id={id} key={id}>
                <div className="hp-range-media">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 28vw"
                      className="hp-range-media-img"
                    />
                  ) : (
                    <div className="hp-range-media-panel hp-specialty-3d-panel" aria-hidden="true">
                      <div className="hp-specialty-3d-glow" />
                      <div className="hp-specialty-3d-graphic">
                        <svg viewBox="0 0 160 160" fill="none" className="hp-3d-gear-svg" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="80" cy="80" r="70" stroke="url(#cyanGlowRing)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.35" />
                          <circle cx="80" cy="80" r="54" stroke="url(#cyanGlowRing2)" strokeWidth="2" opacity="0.5" />
                          <g filter="url(#gearShadow)">
                            <path d="M80 32C76 32 73 34 72 38L69 46C65 48 61 50 58 53L50 50C46 48 42 50 40 53L32 67C30 71 31 75 35 77L42 82C42 84 42 86 42 88L35 93C31 95 30 99 32 103L40 117C42 120 46 122 50 120L58 117C61 120 65 122 69 124L72 132C73 136 76 138 80 138H96C100 138 103 136 104 132L107 124C111 122 115 120 118 117L126 120C130 122 134 120 136 117L144 103C146 99 145 95 141 93L134 88C134 86 134 84 134 82L141 77C145 75 146 71 144 67L136 53C134 50 130 48 126 50L118 53C115 50 111 48 107 46L104 38C103 34 100 32 96 32H80ZM88 64C99 64 108 73 108 84C108 95 99 104 88 104C77 104 68 95 68 84C68 73 77 64 88 64Z" fill="url(#gearGrad)" />
                          </g>
                          <g filter="url(#wrenchShadow)" transform="rotate(-30 80 80)">
                            <path d="M68 40C68 48 72 54 78 57L54 116C52 121 55 126 60 128C65 130 70 127 72 122L96 63C102 61 106 55 106 48C106 42 102 36 96 34L88 42L82 36L90 28C84 26 78 28 74 32C70 34 68 37 68 40Z" fill="url(#wrenchGrad)" />
                          </g>
                          <defs>
                            <filter id="gearShadow" x="16" y="24" width="144" height="136" filterUnits="userSpaceOnUse">
                              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0284C7" floodOpacity="0.35" />
                            </filter>
                            <filter id="wrenchShadow" x="30" y="10" width="100" height="135" filterUnits="userSpaceOnUse">
                              <feDropShadow dx="2" dy="6" stdDeviation="6" floodColor="#0B192C" floodOpacity="0.4" />
                            </filter>
                            <linearGradient id="gearGrad" x1="30" y1="30" x2="140" y2="140" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#818CF8" />
                              <stop offset="0.5" stopColor="#6366F1" />
                              <stop offset="1" stopColor="#4338CA" />
                            </linearGradient>
                            <linearGradient id="wrenchGrad" x1="50" y1="20" x2="110" y2="130" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#38BDF8" />
                              <stop offset="0.6" stopColor="#0284C7" />
                              <stop offset="1" stopColor="#0369A1" />
                            </linearGradient>
                            <linearGradient id="cyanGlowRing" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#0EA5E9" />
                              <stop offset="1" stopColor="#06B6D4" />
                            </linearGradient>
                            <linearGradient id="cyanGlowRing2" x1="160" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#38BDF8" stopOpacity="0.8" />
                              <stop offset="1" stopColor="#818CF8" stopOpacity="0.3" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <span className="hp-specialty-center-pill">Problem-specific formulations</span>
                    </div>
                  )}

                  <span className={`hp-range-top-badge hp-badge-${tone}`}>
                    {topBadge}
                  </span>

                  <span className="hp-range-number" aria-hidden="true">{number}</span>

                  <span className="hp-range-bottom-pill">
                    <Icon size={13} strokeWidth={2.2} aria-hidden="true" />
                    <span>{bottomPill}</span>
                  </span>
                </div>

                <div className="hp-range-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul className="hp-tags" aria-label={`${eyebrow} areas`}>
                    {tags.map((tag) => (
                      <li key={tag.label} className={`hp-tag-${tag.tone}`}>
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                  <Link className="text-link hp-range-link" href={link}>
                    <span>{linkText}</span>
                    <ArrowRight size={15} aria-hidden="true" className="hp-link-arrow" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Inline application links (merged from separate Applications section) */}
          <div className="hp-applications-inline hp-reveal">
            <h3>Where the chemistry goes to work</h3>
            <p>The same ranges serve plants, infrastructure, and everyday facilities.</p>
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

          <div className="hp-section-foot hp-ranges-foot">
            <span className="hp-foot-question">Not sure which range fits your requirement?</span>
            <WhatsAppCta />
          </div>
        </div>
      </section>

      {/* Flagship specialty products */}
      <section className="hp-section hp-section-flagship" id="flagship" aria-labelledby="flagship-title">
        <div className="container">
          <div className="hp-section-heading">
            <div>
              <h2 id="flagship-title">Specialty products, in detail.</h2>
            </div>
            <p>
              POLYDOR-WS, COROSIL and POLYKLIN each solve one specific problem.
              Their full pages carry the product literature, application lists,
              and document requests.
            </p>
          </div>

          <div className="hp-flag-grid hp-stagger">
            {flagshipProducts.map((product) => {
              const Icon = flagshipIcons[product.slug];
              return (
                <article className="hp-flag-card" key={product.slug}>
                  <div className="hp-flag-head">
                    <span className="hp-flag-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="hp-flag-cat">{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="hp-flag-tagline">{product.headline}</p>
                  <p className="hp-flag-summary">{product.summary}</p>
                  <ul className="hp-tags" aria-label={`${product.name} application areas`}>
                    {flagshipChips[product.slug]?.map((chip) => <li key={chip}>{chip}</li>)}
                  </ul>
                  <p className="hp-flag-note">
                    <Info size={13} aria-hidden="true" />
                    <span>{flagshipNotes[product.slug]}</span>
                  </p>
                  <Link className="text-link hp-flag-link" href={`/specialty/${product.slug}`}>
                    Explore {product.name} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
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
      <section className="hp-section hp-section-vklin" id="vklin" aria-labelledby="vklin-title">
        <div className="hp-hero-container hp-vklin-layout">
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

          <div className="hp-vklin-panel hp-reveal-scale">
            <div className="hp-vklin-panel-head">
              <span className="hp-vklin-panel-mark" aria-hidden="true">
                <Leaf size={20} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div className="hp-vklin-head-titles">
                <span className="hp-vklin-head-kicker">Institutional & home care</span>
                <strong className="hp-vklin-head-main">Product range</strong>
              </div>
            </div>

            <div className="hp-vklin-products">
              {vklinPreviewProducts.map((product) => (
                <Link href={product.href} className="hp-vklin-product-card" key={product.href}>
                  <div className="hp-vklin-product-imgbox">
                    <Image
                      src={`/vklin-products/${product.image}`}
                      alt={`V-Klin ${product.name}`}
                      fill
                      sizes="(max-width: 760px) 45vw, 240px"
                      className="hp-vklin-product-img"
                    />
                  </div>
                  <span className="hp-vklin-product-name">{product.shortName}</span>
                </Link>
              ))}
            </div>
          </div>
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
                <span>Technical & sales</span>
                <strong>{'+'}91 98202 35995</strong>
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
