import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VKlinHeroSection from "@/components/VKlinHeroSection";
import VKlinCommercialDemos from "@/components/VKlinCommercialDemos";
import ScrollReveal from "@/components/ScrollReveal";
import VKlinVideoPlayer from "@/components/VKlinVideoPlayer";
import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
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
  BarChart3,
  Bird,
  Building2,
  Check,
  Factory,
  FileCheck2,
  FileText,
  FlaskConical,
  Info,
  Layers,
  Leaf,
  MapPin,
  ScrollText,
  ShieldCheck,
  Ship,
  Sparkles,
  Store,
  Trash2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PolyTreat Chemicals | Water Treatment, Surface Protection, Polydor & V-Klin Care",
  description:
    "Mumbai manufacturer since 1987 of industrial water-treatment, construction & surface protection, Polydor odour neutraliser, and V-Klin home & facility hygiene products. Explore 28 product areas across four ranges.",
};

/* ------------------------------------------------------------------ */
/* What we make: one card per range, mirroring the /industries map.   */
/* ------------------------------------------------------------------ */

const rangeProductAreaCount = productMapGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

/* ------------------------------------------------------------------ */
/* Flagship specialty products: the three documented specialty items. */
/* Copy comes from `specialtyProducts` (the claim-reviewed source of   */
/* truth behind /specialty/*); the safety notes below stay faithful    */
/* to that module.                                                     */
/* ------------------------------------------------------------------ */

const flagshipChips: Record<string, string[]> = {
  corosil: ["Structural steel", "Railings & grills", "Pipelines & sheet metal", "Rolling shutters"],
  "polydor-ws": ["Landfills & ETP Sludge", "Sugar & Breweries", "Poultry & Slaughterhouses", "Commercial Scrubbers"],
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

const flagshipSlugs = new Set(["corosil", "polydor-ws", "polyklin"]);

const flagshipNotes: Record<string, string> = {
  corosil:
    "A treatment and primer step; a compatible paint system is still required over it.",
  "polydor-ws":
    "Chemically transforms odour molecules (amines, sulphides, H₂S). Also formulated as POLYDOR-D MOS botanical repellent.",
  polyklin:
    "Directions are as published in our product literature; ask for the current sheet.",
};

type FlagshipDetailCard = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  categoryBadge: string;
  src: string;
  alt: string;
  chips: string[];
  note: string;
  href: string;
  ctaLabel: string;
};

const flagshipDetailCards: FlagshipDetailCard[] = [
  ...specialtyProducts
    .filter((product) => flagshipSlugs.has(product.slug))
    .map((product) => {
      const media = flagshipMedia[product.slug];
      return {
        slug: product.slug,
        name: product.name,
        headline: product.headline,
        summary: product.summary,
        categoryBadge: media?.categoryBadge || product.category.toUpperCase(),
        src: media.src,
        alt: media.alt,
        chips: flagshipChips[product.slug] ?? [],
        note: flagshipNotes[product.slug] ?? "",
        href: `/specialty/${product.slug}`,
        ctaLabel: `Explore ${product.name}`,
      };
    }),
  {
    slug: "industrial-water",
    name: "Industrial Water Treatment",
    headline: "Scale, corrosion & fouling control across plant circuits.",
    summary:
      "Formulated chemical programmes for cooling water, steam boilers, reverse osmosis membranes and industrial effluent plants.",
    categoryBadge: "WATER TREATMENT",
    src: "/images/solutions/industrial-water-ro-facility.jpg",
    alt: "Industrial reverse osmosis and water treatment facility with multi-tiered membrane pressure vessels",
    chips: ["Cooling water", "Boiler water", "Reverse osmosis", "Effluent treatment"],
    note: "Covers inhibitors, oxygen scavengers, antiscalants, biocides, coagulants & membrane care.",
    href: "/solutions/industrial-water",
    ctaLabel: "Explore Water Treatment",
  },
];

const polydorApplications = [
  {
    id: "garbage-dump",
    tag: "MUNICIPAL & WASTE",
    title: "City Garbage Dump Yards",
    description: "Neutralises large-scale decomposition odours over landfill sites. Proven dosage: 3 tons per 1.5–2 acres.",
    image: "/images/polydor-apps/dump-landfill.webp",
    alt: "Bulldozer operating on city garbage landfill dump site",
    icon: Trash2,
    isHighlight: false,
  },
  {
    id: "sugar-brewery",
    tag: "AGRO & BREWERIES",
    title: "Sugar Mills & Breweries",
    description: "Dosed directly into effluent wastewater ponds and sludge basins; eliminates foul odors within 2–3 hours.",
    image: "/images/polydor-apps/sugar-brewery.webp",
    alt: "Sugar mills and brewery industrial fermentation effluent tanks",
    icon: FlaskConical,
    isHighlight: false,
  },
  {
    id: "slaughterhouse-poultry",
    tag: "FOOD & LIVESTOCK",
    title: "Slaughterhouses & Poultry",
    description: "Breaks down stubborn animal fatty acid gases, meat processing scraps, and grease pits (1:30 dilution).",
    image: "/images/polydor-apps/slaughterhouse-poultry.webp",
    alt: "Poultry and livestock processing facility odour control",
    icon: Bird,
    isHighlight: false,
  },
  {
    id: "kitchen-scrubbers",
    tag: "COMMERCIAL RESTAURANTS",
    title: "Kitchen Air Scrubbers",
    description: "Installed in exhaust scrubbers of commercial kitchens and restaurants to deodorise discharge fumes.",
    image: "/images/polydor-apps/kitchen-scrubber.webp",
    alt: "Commercial restaurant kitchen exhaust scrubber ventilation",
    icon: Store,
    isHighlight: false,
  },
  {
    id: "seafood-containers",
    tag: "FISHERIES & LOGISTICS",
    title: "Seafood Containers & Nets",
    description: "Eliminates deep-set fish, barnacle, and seaweed smells from crates, holding tanks, and fishing nets.",
    image: "/images/polydor-apps/seafood-containers.webp",
    alt: "Fishing vessel, seafood storage crates and nets deodorising",
    icon: Ship,
    isHighlight: false,
  },
  {
    id: "botanical-repellent",
    tag: "BOTANICAL REPELLENT",
    title: "POLYDOR-D MOS (Herbal)",
    description: "Pure plant extracts with Neem & Citronella oil. 100% biodegradable, DEET-free, and safe for children & pets.",
    image: "/images/polydor-apps/botanical-repellent.webp",
    alt: "Botanical mosquito repellent herbal leaf with pure dew drops",
    icon: Leaf,
    isHighlight: true,
  },
];


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
    title: "Performance",
    description: "Formulations considered in the context of the task and operating system.",
    icon: BarChart3,
  },
  {
    letter: "Q",
    title: "Quality",
    description: "A focus on product quality and clear technical documentation.",
    icon: BadgeCheck,
  },
  {
    letter: "R",
    title: "Reliability",
    description: "A dependable working relationship from product enquiry through supply.",
    icon: Layers,
  },
  {
    letter: "S",
    title: "Service",
    description: "A direct conversation with the team about the product and its intended use.",
    icon: Users,
  },
];

const vklinFeaturedProducts = [
  {
    name: "Multipurpose Cleaner",
    tagline: "3-in-1 action for tiles, kitchen counters, sinks & grease removal.",
    image: "/vklin-products/vklin-multipurpose-surface-cleaner.webp",
    alt: "V-Klin Multipurpose Surface Cleaner",
    href: "/vklin/products/multipurpose-surface-cleaner",
  },
  {
    name: "Golden Floor Deodoriser",
    tagline: "Sparkling clean floors with long-lasting residual fragrance for homes & offices.",
    image: "/vklin-products/vklin-golden-floor-cleaner.webp",
    alt: "V-Klin Golden Floor Cleaner",
    href: "/vklin/products/golden-floor-cleaner",
  },
  {
    name: "Dishwash Liquid Gel",
    tagline: "Lemon grease-cutting enzymes for spotless utensils, gentle on hands.",
    image: "/vklin-products/vklin-dishwash-liquid-gel-lemon.webp",
    alt: "V-Klin Dishwash Liquid Gel Lemon",
    href: "/vklin/products/dishwash-liquid-gel-lemon",
  },
  {
    name: "Streak-Free Glass Cleaner",
    tagline: "Crystal clear shine on windows, mirrors, display counters & windshields.",
    image: "/vklin-products/vklin-streak-free-glass-cleaner.webp",
    alt: "V-Klin Streak-Free Glass Cleaner",
    href: "/vklin/products/glass-cleaner",
  },
  {
    name: "Herbal Mosquito Repellent",
    tagline: "Natural Neem & Citronella oil formula without toxic fumes or irritation.",
    image: "/vklin-products/vklin-herbal-mosquito-repellent.webp",
    alt: "V-Klin Herbal Mosquito Repellent",
    href: "/vklin/products/herbal-mosquito-repellent",
    badge: "100% Herbal",
  },
];

export default function Home() {
  return (
    <main className="hp-home">
      {/* 1. Clean Spaces, Healthy Living (Hero Section) */}
      <VKlinHeroSection />
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

      {/* 2. Meet V-Klin. Care for everyday spaces. & 3. Popular V-Klin Formulations in Daily Use */}
      <section className="hp-section hp-section-vklin hp-reveal-section" id="vklin" aria-labelledby="vklin-title">
        {/* Decorative soft mint wave backdrop */}
        <div className="hp-vklin-decor" aria-hidden="true" />

        {/* 2. Meet V-Klin. Care for everyday spaces */}
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

        {/* 3. Popular V-Klin Formulations in Daily Use */}
        <div className="container hp-vklin-shelf-container">
          <div className="hp-vklin-products-showcase hp-reveal">
            <div className="hp-vklin-showcase-head">
              <span className="hp-vklin-showcase-eyebrow">
                <Sparkles size={13} strokeWidth={2.4} aria-hidden="true" />
                The V-Klin shelf
              </span>
              <h3>Popular V-Klin Formulations in Daily Use</h3>
              <p>Everyday cleaning solutions formulated for homes, institutions, and facilities.</p>
            </div>

            <ul className="hp-vklin-cards-grid">
              {vklinFeaturedProducts.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`hp-vklin-item-card${item.badge ? " hp-vklin-item-highlight" : ""}`}
                    aria-label={`View ${item.name} product details`}
                  >
                    {item.badge && (
                      <span className="hp-vklin-botanical-pill">{item.badge}</span>
                    )}
                    <span className="hp-vklin-thumb-box">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={180}
                        height={180}
                        className="hp-vklin-thumb"
                      />
                    </span>
                    <span className="hp-vklin-item-name">{item.name}</span>
                    <span className="hp-vklin-item-desc">{item.tagline}</span>
                    <span className="hp-vklin-card-link">
                      View product
                      <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Every product area, at a glance. */}
      <section className="hp-section hp-section-range-map" id="range-map" aria-labelledby="range-map-title">
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

      {/* 5. See How V-Klin Solves Everyday Cleaning Problems */}
      <VKlinCommercialDemos />

      {/* 6. Where our products go to work. */}
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
                  Proven solutions in working environments
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
                <h2 id="applications-title">Where our products go to work.</h2>
              </div>
              <p>
                The same ranges serve plants, infrastructure projects, and everyday
                facilities. Start with the environment you operate in.
              </p>
            </div>

            <div className="hp-application-rows hp-stagger">
              {markets.map(({ icon: Icon, title, description, href }, index) => (
                <Link className="hp-application-row" href={href} key={href}>
                  <span className="hp-application-index">{`0${index + 1}`}</span>
                  <span className="hp-application-icon"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="hp-application-copy">
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                  <ArrowUpRight className="hp-application-arrow" size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Specialty products, in detail. & 8. Real-world applications. */}
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
                POLYDOR-WS, COROSIL, POLYKLIN and our Industrial Water Treatment range
                each solve specific plant challenges. Explore full product literature,
                application lists, and solution overviews.
              </p>
            </div>
          </div>

          <div className="hp-specialty-grid">
            {flagshipDetailCards.map((card) => (
              <article className="hp-spec-card" key={card.slug}>
                {/* Top media banner with category pill */}
                <div className="hp-spec-media-wrap">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={600}
                    height={600}
                    className="hp-spec-media-img"
                    priority={card.slug === "corosil"}
                  />
                  <span className="hp-spec-category-pill">
                    {card.categoryBadge}
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
                  <h3 className="hp-spec-name">{card.name}</h3>
                  <p className="hp-spec-tagline">{card.headline}</p>
                  <p className="hp-spec-summary">{card.summary}</p>

                  {/* Checkmark Tag Chips */}
                  <div className="hp-spec-tags-wrap" aria-label={`${card.name} application areas`}>
                    {card.chips.map((chip) => (
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
                    <p className="hp-spec-note-text">{card.note}</p>
                  </div>

                  {/* Full-width Explore Capsule Button */}
                  <Link className="hp-spec-explore-btn" href={card.href}>
                    <span>{card.ctaLabel}</span>
                    <ArrowRight size={15} strokeWidth={2.4} className="hp-spec-btn-arrow" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* 8. Real-world applications */}
          <div className="hp-polydor-work-box hp-reveal">
            <div className="hp-polydor-work-head">
              <div className="hp-polydor-eyebrow-wrap">
                <span className="hp-polydor-eyebrow">
                  <Layers size={13} className="hp-polydor-eyebrow-icon" aria-hidden="true" />
                  <span>Real-world Applications</span>
                </span>
                <span className="hp-polydor-eyebrow-line" aria-hidden="true" />
              </div>
              <h3 className="hp-polydor-work-title">
                Where <span className="hp-polydor-brand-word">POLYDOR</span>{" "}solves tough odour &amp; pest problems.
              </h3>
              <p className="hp-polydor-work-desc">
                From municipal solid waste landfills and sugar mills to poultry farms and commercial kitchens, POLYDOR-WS permanently alters odoriferous molecules into non-odorous compounds.
              </p>
            </div>

            <div className="hp-polydor-work-grid">
              {polydorApplications.map((app) => {
                const AppIcon = app.icon;
                return (
                  <article
                    key={app.id}
                    className={`hp-polydor-work-card ${app.isHighlight ? "hp-polydor-card-highlight" : ""}`}
                  >
                    <div className="hp-polydor-card-content">
                      <div className="hp-polydor-card-meta">
                        <span className="hp-polydor-icon-box" aria-hidden="true">
                          <AppIcon size={15} strokeWidth={2.2} />
                        </span>
                        <span className={`hp-polydor-tag ${app.isHighlight ? "hp-polydor-tag-green" : ""}`}>
                          {app.tag}
                        </span>
                      </div>
                      <h4>{app.title}</h4>
                      <p>{app.description}</p>
                    </div>
                    <div className="hp-polydor-card-image-wrap">
                      <Image
                        src={app.image}
                        alt={app.alt}
                        width={224}
                        height={262}
                        className="hp-polydor-card-img"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
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

      {/* 9. A manufacturer first, since 1987. */}
      <section className="hp-section hp-section-story" id="story" aria-labelledby="story-title">
        {/* Decorative Skyline & Corner Cyan Wave Graphics matching Reference Image 2 */}
        <div className="hp-story-decor-skyline" aria-hidden="true" />
        <div className="hp-story-decor-wave-left" aria-hidden="true" />
        <div className="hp-story-decor-wave-right" aria-hidden="true" />

        <div className="container hp-story-container">
          <div className="hp-story-layout">
            <div className="hp-story-copy hp-reveal">
              <div className="hp-story-eyebrow">
                <span>ABOUT POLYTREAT</span>
                <span className="hp-story-eyebrow-line" aria-hidden="true" />
              </div>

              <h2 id="story-title" className="hp-story-title">
                A manufacturer first,
                <br />
                <span className="hp-story-title-highlight">
                  since 1987.
                  <svg
                    className="hp-story-title-swoosh"
                    viewBox="0 0 160 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 9C45 13 110 14 158 3"
                      stroke="#0D9488"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="hp-story-lead">
                PolyTreat Chemicals Pvt. Ltd. formulates and produces its ranges at its own
                plants, with rigorous quality control monitoring every batch daily, and a direct
                technical conversation behind every enquiry.
              </p>

              <ul className="hp-story-facts-list" aria-label="Company facts">
                <li className="hp-story-fact-card">
                  <span className="hp-story-fact-icon-wrap" aria-hidden="true">
                    <ShieldCheck size={18} strokeWidth={2.4} />
                  </span>
                  <span className="hp-story-fact-text">
                    <strong>Consistent batch quality</strong> with daily production standards &amp; ISO compliance.
                  </span>
                </li>
                <li className="hp-story-fact-card">
                  <span className="hp-story-fact-icon-wrap" aria-hidden="true">
                    <Building2 size={18} strokeWidth={2.4} />
                  </span>
                  <span className="hp-story-fact-text">
                    <strong>Three sites</strong>: Mumbai offices and green products facility, plus Tarapur MIDC manufacturing.
                  </span>
                </li>
                <li className="hp-story-fact-card">
                  <span className="hp-story-fact-icon-wrap" aria-hidden="true">
                    <Factory size={18} strokeWidth={2.4} />
                  </span>
                  <span className="hp-story-fact-text">
                    <strong>Formulated in our own plants</strong>, in continuous operation since 1987.
                  </span>
                </li>
              </ul>

              <div className="hp-story-locations-row" aria-label="PolyTreat locations">
                {locationSites.map((site) => (
                  <span className="hp-story-loc-pill" key={site.id}>
                    <MapPin size={13} className="hp-story-loc-pin" aria-hidden="true" />
                    <span className="hp-story-loc-txt">
                      {site.title} <em>{site.role || site.area}</em>
                    </span>
                  </span>
                ))}
              </div>

              <div className="hp-story-btn-row">
                <Link className="hp-story-btn-primary" href="/about">
                  <span>More about PolyTreat</span>
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <Link className="hp-story-btn-secondary" href="/certifications">
                  <span>Certificates and their scope</span>
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="hp-story-side">
              <div className="hp-pqrs-card hp-reveal-scale">
                <div className="hp-pqrs-header">
                  <span className="hp-pqrs-header-title">THE PQRS FRAMEWORK</span>
                  <span className="hp-pqrs-header-line" aria-hidden="true" />
                </div>

                <div className="hp-pqrs-grid">
                  {pqrsTiles.map(({ letter, title, description, icon: TileIcon }) => (
                    <article className="hp-pqrs-white-tile" key={letter}>
                      <div className="hp-pqrs-tile-head">
                        <span className="hp-pqrs-tile-icon-box" aria-hidden="true">
                          <TileIcon size={20} strokeWidth={2.2} />
                        </span>
                        <h4>{title}</h4>
                      </div>
                      <p>{description}</p>
                    </article>
                  ))}
                </div>

                <div className="hp-pqrs-bottom-bar">
                  <FileText size={18} strokeWidth={2.2} className="hp-pqrs-file-icon" aria-hidden="true" />
                  <p className="hp-pqrs-note">
                    Request product TDS and safety documents for application and handling details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Have a specific site or system in mind? (Contact Section) */}
      <section
        className="industries-contact-band hp-industries-cta-band"
        id="application-cta"
        aria-labelledby="home-application-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">Have a specific site or system in mind?</span>
              <h2 id="home-application-cta-title">
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
