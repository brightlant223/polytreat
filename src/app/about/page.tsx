import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Layers3,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { locationSites } from "@/data/locations";
import AboutObserver from "./AboutObserver";
import "./about.css";

/* Self-hosted via next/font — variable font, weights 200-800, no external requests */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Us | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "PolyTreat Chemicals has formulated and manufactured specialty industrial water, construction, and institutional care chemicals since 1987, from manufacturing facilities in Tarapur MIDC and Goregaon, Mumbai.",
  keywords:
    "about PolyTreat Chemicals, ISO 9001:2015 chemical manufacturer, Tarapur MIDC plant, Goregaon chemical unit, water treatment chemicals since 1987",
};

const glance = [
  { label: "Established", value: "1987, Mumbai" },
  { label: "Certifications", value: "ISO 9001:2015 · WHO-GMP reference · Private FDA reference · UKcert Eco-Friendly" },
  { label: "Manufacturing", value: "Tarapur MIDC · Goregaon (East), Mumbai" },
  { label: "Corporate office", value: "Goregaon (West), Mumbai" },
  { label: "Divisions", value: "Industrial water · Construction · V-Klin care" },
  { label: "Markets", value: "Across India, plus Middle East & South Africa exports" },
];

const credentials = [
  {
    value: "Since 1987",
    title: "Manufacturing since 1987",
    description: "Specialty chemicals formulated and produced in our own plants.",
  },
  {
    value: "ISO 9001:2015",
    title: "Certified quality system",
    description:
      "SMCS certified, AIAO-BAR USA accredited, for water treatment and home-care chemicals.",
  },
  {
    value: "2 units",
    title: "Tarapur MIDC & Goregaon",
    description: "Heavy chemical and green-products manufacturing in Maharashtra.",
  },
  {
    value: "Exports",
    title: "Middle East & South Africa",
    description: "Specialty formulations supplied to international industrial markets.",
  },
];

const milestones = [
  {
    era: "1987",
    title: "Founded in Mumbai",
    description:
      "PolyTreat Chemicals begins as a manufacturer of industrial water-treatment solutions.",
    tone: "green",
  },
  {
    era: "Manufacturing",
    title: "Tarapur MIDC unit",
    description:
      "Heavy chemical manufacturing is established at Tarapur MIDC, Palghar district, adding capacity for the industrial water and process chemical ranges.",
    tone: "blue",
  },
  {
    era: "Quality",
    title: "ISO 9001:2015 certification",
    description:
      "The quality management system is certified to ISO 9001:2015 by SMCS, accredited by AIAO-BAR USA, covering the manufacture of water-treatment and hygiene chemicals.",
    tone: "purple",
  },
  {
    era: "Care products",
    title: "V-Klin range",
    description:
      "The institutional and home-care cleaning range is developed at the Goregaon (East) green-products division.",
    tone: "teal",
  },
  {
    era: "Exports",
    title: "Middle East & South Africa",
    description:
      "Specialty formulations begin shipping to industrial buyers in the Middle East and South Africa.",
    tone: "coral",
  },
];

const brands = [
  {
    icon: Droplets,
    number: "01",
    eyebrow: "Industrial water & process",
    title: "Polytreat & Polycide",
    description:
      "Water-treatment and biocide ranges for boilers, cooling towers, RO systems, effluent, and process applications.",
    categories: ["Boiler water", "Cooling water", "RO & effluent", "Biocides"],
    tone: "blue",
  },
  {
    icon: Layers3,
    number: "02",
    eyebrow: "Construction chemicals",
    title: "Polyproof, Polybond, Polyroof & Polygard",
    description:
      "Waterproofing membranes, protective coatings, concrete-repair systems, flooring, and sealants for built structures.",
    categories: ["Waterproofing", "Coatings", "Flooring", "Sealants"],
    tone: "orange",
  },
  {
    icon: Leaf,
    number: "03",
    eyebrow: "Institutional & home care",
    title: "V-Klin",
    description:
      "Cleaning products for hotels, hospitals, facilities, and homes — floor, surface, hand, dish, glass, and washroom care.",
    categories: ["Floor & surface", "Hand & dish", "Glass & toilet"],
    tone: "green",
  },
  {
    icon: FlaskConical,
    number: "04",
    eyebrow: "Flagship specialty",
    title: "Polydor-WS\u00A0\u00B7 Corosil\u00A0\u00B7 Polyklin",
    description:
      "Single-problem formulations: odor neutralization, rust conversion, and HVAC coil cleaning.",
    categories: ["Odor control", "Rust converter", "Coil cleaner"],
    tone: "purple",
  },
];

const facilities = [
  { icon: Building2, site: locationSites[0], tone: "blue" },
  { icon: Leaf, site: locationSites[1], tone: "green" },
  { icon: Factory, site: locationSites[2], tone: "purple" },
];

const rdPoints = [
  "In-house laboratory with daily quality monitoring",
  "Raw-material and finished-product inspection",
  "Statistical analysis of control data",
  "Customised treatment programmes for specific system requirements",
  "Technical consultation on system and application requirements",
];

export default function AboutPage() {
  return (
    <main className={`about-page-redesign ${plusJakarta.variable}`}>
      <AboutObserver />

      {/* 1. HERO SECTION */}
      <section className="ab-hero-section" aria-labelledby="about-title">
        {/* Decorative water splash background graphics & rotating circle motion (Matching Home Hero) */}
        <div className="hp-hero-water-bg" aria-hidden="true">
          <div className="hp-water-splash hp-water-splash-top-right">
            <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M120 0C170 50 160 110 220 140C290 175 360 110 420 160C470 200 480 300 500 360V0H120Z"
                fill="url(#abWaterGlow1)"
                opacity="0.65"
              />
              <path
                d="M260 0C300 45 350 70 410 75C460 79 490 120 500 150V0H260Z"
                fill="url(#abWaterGlow2)"
                opacity="0.8"
              />
              <circle cx="190" cy="180" r="14" fill="#38BDF8" opacity="0.35" />
              <circle cx="193" cy="177" r="4" fill="#FFFFFF" opacity="0.8" />
              <circle cx="140" cy="220" r="8" fill="#0EA5E9" opacity="0.3" />
              <circle cx="142" cy="218" r="2.5" fill="#FFFFFF" opacity="0.75" />
              <circle cx="280" cy="250" r="20" fill="#0284C7" opacity="0.18" />
              <circle cx="284" cy="246" r="6" fill="#FFFFFF" opacity="0.7" />
              <defs>
                <linearGradient id="abWaterGlow1" x1="500" y1="0" x2="160" y2="300" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38BDF8" stopOpacity="0.5" />
                  <stop offset="0.6" stopColor="#0EA5E9" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#BAE6FD" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="abWaterGlow2" x1="500" y1="0" x2="300" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7DD3FC" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#38BDF8" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hp-water-splash hp-water-splash-bottom-left">
            <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 400C50 330 30 260 90 220C160 170 230 230 300 180C360 135 370 40 420 0H0V400Z"
                fill="url(#abWaterGlow3)"
                opacity="0.45"
              />
              <circle cx="180" cy="140" r="12" fill="#0284C7" opacity="0.22" />
              <circle cx="183" cy="138" r="3.5" fill="#FFFFFF" opacity="0.75" />
              <circle cx="320" cy="100" r="16" fill="#38BDF8" opacity="0.25" />
              <circle cx="324" cy="97" r="5" fill="#FFFFFF" opacity="0.7" />
              <circle cx="90" cy="160" r="7" fill="#0EA5E9" opacity="0.3" />
              <defs>
                <linearGradient id="abWaterGlow3" x1="0" y1="400" x2="350" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#38BDF8" stopOpacity="0.4" />
                  <stop offset="0.7" stopColor="#0284C7" stopOpacity="0.15" />
                  <stop offset="1" stopColor="#E0F2FE" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="hp-hero-watermark ab-hero-watermark" aria-hidden="true">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="170" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.14" />
              <circle cx="200" cy="200" r="130" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.1" />
              <circle cx="200" cy="200" r="90" stroke="#38BDF8" strokeWidth="2" strokeDasharray="16 12" opacity="0.18" />
              <circle cx="200" cy="200" r="40" stroke="#0284C7" strokeWidth="1.5" opacity="0.12" />
            </svg>
          </div>
        </div>

        <div className="ab-container ab-hero-inner">
          <div className="ab-hero-content">
            <nav className="ab-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="ab-breadcrumb-separator" aria-hidden="true">
                  /
                </li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>

            <span className="ab-label">About PolyTreat</span>

            <h1 id="about-title" className="ab-hero-title">
              <span className="ab-hero-title-line-mask">
                <span className="ab-hero-title-line ab-hero-title-line-1">
                  Chemical solutions,
                </span>
              </span>
              <span className="ab-hero-title-line-mask">
                <span className="ab-hero-title-line ab-hero-title-line-2">
                  manufactured in-house
                </span>
              </span>
              <span className="ab-hero-title-line-mask">
                <span className="ab-hero-title-line ab-hero-title-line-3">
                  <span className="ab-text-blue">since 1987.</span>
                </span>
              </span>
            </h1>

            <p className="ab-hero-lead">
              PolyTreat Chemicals Pvt. Ltd. formulates and produces specialty chemicals for
              industrial water systems, construction projects, and everyday facility care — from
              two manufacturing units in Maharashtra and a corporate office in Mumbai.
            </p>

            <ul className="ab-hero-chips" aria-label="Key highlights">
              <li className="ab-chip">
                <span className="ab-chip-icon-wrap">
                  <BadgeCheck size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>ISO 9001:2015 certified</span>
              </li>
              <li className="ab-chip">
                <span className="ab-chip-icon-wrap">
                  <Factory size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>2 production units</span>
              </li>
              <li className="ab-chip">
                <span className="ab-chip-icon-wrap">
                  <CalendarClock size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>Manufacturing since 1987</span>
              </li>
              <li className="ab-chip">
                <span className="ab-chip-icon-wrap">
                  <Leaf size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>V-Klin care range</span>
              </li>
            </ul>
          </div>

          <aside className="ab-card ab-glance-card" aria-label="PolyTreat at a glance">
            <div className="ab-glance-header">
              <div className="ab-glance-icon-badge">
                <Building2 size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <span>Company profile</span>
                <h2>PolyTreat at a glance</h2>
              </div>
            </div>

            <ul className="ab-glance-grid">
              {glance.map(({ label, value }) => (
                <li className="ab-glance-item" key={label}>
                  <span className="ab-glance-label">{label}</span>
                  <span className="ab-glance-value">{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="ab-stats-section" aria-label="Key credentials and stats">
        <div className="ab-container">
          <div className="ab-stats-grid ab-stagger">
            {credentials.map(({ value, title, description }) => (
              <div className="ab-stats-item" key={value}>
                <span className="ab-stats-figure">{value}</span>
                <h3 className="ab-stats-title">{title}</h3>
                <p className="ab-stats-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY + TIMELINE */}
      <section className="ab-section ab-story-section" id="story" aria-labelledby="story-title">
        <div className="ab-container ab-story-grid">
          <div className="ab-story-sticky ab-reveal">
            <span className="ab-label">Our story</span>
            <h2 id="story-title">A manufacturer first, since the beginning.</h2>
            <p>
              PolyTreat Chemicals Pvt. Ltd. — also known as Polytreat Chemical Industries — has
              manufactured specialty formulations from Mumbai since 1987. Two divisions run under a
              single quality system: heavy industrial water and process chemicals, and the V-Klin
              range of institutional and home-care products.
            </p>
            <p>
              Everything PolyTreat supplies is formulated and produced in its own plants. The
              range is built around performance and value, backed by clear technical
              documentation and a direct conversation with the people who make the products.
            </p>
            <Link className="ab-story-cta" href="/#solutions">
              Explore our solution areas <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="ab-timeline-wrap">
            <div className="ab-timeline-line-base" aria-hidden="true" />
            <div className="ab-timeline-line-fill" aria-hidden="true">
              <span className="ab-timeline-line-head" aria-hidden="true" />
            </div>

            <ol className="ab-timeline-list">
              {milestones.map(({ era, title, description, tone }) => (
                <li className="ab-timeline-item" key={title}>
                  <div
                    className={`ab-timeline-dot ab-timeline-dot-${tone}`}
                    aria-hidden="true"
                  />
                  <div className={`ab-card ab-timeline-card ab-timeline-card-${tone}`}>
                    <span className={`ab-timeline-era ab-era-${tone}`}>{era}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. BRAND ARCHITECTURE */}
      <section className="ab-section ab-brands-section" id="brands" aria-labelledby="brands-title">
        <div className="ab-container">
          <div className="ab-brands-header ab-reveal">
            <div className="ab-brands-header-left">
              <span className="ab-label">Brand architecture</span>
              <h2 id="brands-title">Four ranges, one manufacturer.</h2>
            </div>
            <p>
              PolyTreat&apos;s product names map to the work they do — industrial water treatment,
              construction protection, everyday care, and single-problem specialty formats.
            </p>
          </div>

          <div className="ab-brands-grid ab-stagger">
            {brands.map(({ icon: Icon, number, eyebrow, title, description, categories, tone }) => (
              <article className={`ab-brand-card ab-brand-${tone}`} key={title}>
                <div className="ab-brand-top">
                  <div className="ab-brand-icon-box">
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="ab-brand-number">{number}</span>
                </div>
                <span className="ab-brand-eyebrow">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="ab-brand-chips" aria-label={`${title} categories`}>
                  {categories.map((category) => (
                    <li className="ab-brand-chip" key={category}>
                      {category}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INFRASTRUCTURE */}
      <section
        className="ab-section ab-infra-section"
        id="infrastructure"
        aria-labelledby="infra-title"
      >
        <div className="ab-container">
          <div className="ab-infra-heading ab-reveal">
            <span className="ab-label">Infrastructure</span>
            <h2 id="infra-title">Where PolyTreat makes its products.</h2>
            <p>Two manufacturing units and a corporate office, all within Maharashtra.</p>
          </div>

          <div className="ab-infra-grid ab-stagger">
            {facilities.map(({ icon: Icon, site, tone }) => (
              <article
                className={`ab-card ab-infra-card ab-infra-card-${tone}`}
                key={site.id}
              >
                <div className="ab-infra-top">
                  <div className="ab-infra-icon-badge">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="ab-infra-kind">{site.kind}</span>
                </div>
                <h3>{site.title}</h3>
                <address>{site.addressLines.join("\n")}</address>
                <hr className="ab-infra-divider" />
                <div className="ab-infra-footnote">
                  <MapPin size={15} aria-hidden="true" />
                  <span>{site.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. QUALITY */}
      <section className="ab-section ab-quality-section" id="quality" aria-labelledby="rd-title">
        <div className="ab-container ab-quality-inner">
          <div className="ab-quality-copy ab-reveal">
            <span className="ab-label">Quality &amp; technical support</span>
            <h2 id="rd-title">Quality control and technical support, in one place.</h2>
            <p>
              Formulations are assessed in the laboratory, and raw materials and finished batches
              are inspected as part of a daily quality routine. A quality committee sets the
              standard for labelling, delivery, and the response to the customer.
            </p>
            <p>
              The same discipline carries the ISO 9001:2015 certification, whose scope covers the
              manufacture of water treatment chemicals and homecare, hygienic and industrial
              cleaning chemicals. The framework behind it is the PQRS approach of Performance,
              Quality, Reliability, and Service.
            </p>
            <div className="ab-quality-actions">
              <Link className="ab-btn-outline" href="/quality#pqrs">
                Read about the PQRS framework <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="ab-card ab-quality-panel ab-reveal">
            <div className="ab-quality-panel-header">
              <div className="ab-quality-panel-icon">
                <FlaskConical size={24} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <span>Quality approach</span>
                <h3>How quality is maintained</h3>
              </div>
            </div>

            <ul className="ab-quality-list">
              {rdPoints.map((point, index) => {
                const tones = ["green", "blue", "purple", "teal", "amber"];
                const tone = tones[index % tones.length];
                return (
                  <li className={`ab-quality-item ab-quality-item-${tone}`} key={point}>
                    <span className={`ab-check-icon-circle ab-check-circle-${tone}`}>
                      <Check size={14} strokeWidth={2.8} aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. CERTIFICATION */}
      <section
        className="ab-section ab-cert-section"
        id="certification"
        aria-labelledby="cert-title"
      >
        <div className="ab-container ab-cert-inner">
          <div className="ab-cert-card-wrap ab-reveal">
            <a
              className="ab-cert-card"
              href="/iso-9001-2015-quality-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ISO 9001:2015 Certificate in full resolution (opens in new tab)"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/iso-9001-2015-quality-certificate.jpeg"
                alt="PolyTreat Chemicals ISO 9001:2015 quality management certificate"
                className="ab-cert-img"
              />
            </a>
          </div>

          <div className="ab-cert-copy ab-reveal">
            <span className="ab-label">Certification</span>
            <h2 id="cert-title">ISO 9001:2015, for water treatment and home-care manufacturing.</h2>
            <p>
              Scope: manufacturing of water treatment chemicals and homecare, hygienic &amp;
              industrial cleaning chemicals.
            </p>
            <p>
              The certificate is issued by SMCS and accredited by AIAO-BAR USA, for the Goregaon
              (East) site. Select the certificate to view it in full resolution.
            </p>
            <div className="ab-cert-actions">
              <Link className="ab-btn-primary" href="/certifications">
                View all certifications <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="ab-btn-outline" href="/contact">
                Request documents <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="ab-contact-section" aria-labelledby="about-contact-title">
        <div className="ab-container ab-contact-inner">
          <div className="ab-contact-copy ab-reveal">
            <span className="ab-label ab-label-light">Start a conversation</span>
            <h2 id="about-contact-title">Let&apos;s talk about your application.</h2>
            <p>
              Tell us about your system or facility, and we&apos;ll direct your enquiry to the
              right team.
            </p>
            <div className="ab-contact-buttons">
              <Link className="ab-btn-blue" href="/contact">
                Send an enquiry <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                className="ab-btn-outline-white"
                href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="ab-contact-grid ab-stagger">
            <a className="ab-contact-tile" href="mailto:polyind2@gmail.com">
              <div className="ab-contact-tile-icon">
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="ab-contact-tile-copy">
                <span>Email enquiries</span>
                <strong>polyind2@gmail.com</strong>
              </div>
              <ArrowUpRight size={16} aria-hidden="true" className="ab-contact-tile-arrow" />
            </a>

            <a className="ab-contact-tile" href="tel:+919820235995">
              <div className="ab-contact-tile-icon">
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="ab-contact-tile-copy">
                <span>Technical &amp; sales</span>
                <strong>+91 98202 35995</strong>
              </div>
              <ArrowUpRight size={16} aria-hidden="true" className="ab-contact-tile-arrow" />
            </a>

            <a
              className="ab-contact-tile"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20product%20or%20site%20requirement."
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ab-contact-tile-icon">
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="ab-contact-tile-copy">
                <span>WhatsApp</span>
                <strong>Chat with the team</strong>
              </div>
              <ArrowUpRight size={16} aria-hidden="true" className="ab-contact-tile-arrow" />
            </a>

            <div className="ab-contact-tile ab-contact-tile-address">
              <div className="ab-contact-tile-icon">
                <MapPin size={18} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="ab-contact-tile-copy">
                <span>Corporate office</span>
                <strong>7-A Topiwala Building, Goregaon (West), Mumbai 400104</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
