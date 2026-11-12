import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Building2,
  Check,
  Cog,
  Droplets,
  Factory,
  FlaskConical,
  Layers,
  Layers3,
  Leaf,
  MapPin,
  ShieldCheck,
  Ship,
  Users,
} from "lucide-react";
import { locationSites } from "@/data/locations";
import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
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


const glanceCards = [
  {
    id: "since-1987",
    icon: CalendarDays,
    statPrefix: "Since",
    statValue: "1987",
    statSuffix: null,
    title: "Manufacturing since 1987",
    description: "Specialty chemicals formulated and produced at our own plants.",
    image: "/images/about/glance/card1-feathered.png",
    imageAlt: "Industrial chemical storage tanks and manufacturing silos",
  },
  {
    id: "iso-quality",
    icon: Award,
    statPrefix: "ISO",
    statValue: "9001:2015",
    statSuffix: null,
    title: "Certified quality system",
    description:
      "QMS certified by ISO 9001:2015, ensuring consistent and reliable product quality.",
    image: "/images/about/glance/card2-feathered.png",
    imageAlt: "ISO 9001:2015 certified quality system assurance",
  },
  {
    id: "manufacturing-units",
    icon: Factory,
    statPrefix: null,
    statValue: "2",
    statSuffix: " Units",
    title: "Tarapur MIDC & Goregaon",
    description:
      "Two manufacturing units for industrial water and process chemical solutions.",
    image: "/images/about/glance/card3-feathered.png",
    imageAlt: "Industrial equipment and manufacturing units at Tarapur MIDC & Goregaon",
  },
  {
    id: "exports",
    icon: Ship,
    statPrefix: null,
    statValue: "Exports",
    statSuffix: null,
    title: "Middle East & South Africa",
    description:
      "Specialty formulations supplied to international industrial markets.",
    image: "/images/about/glance/card4-feathered.png",
    imageAlt: "Global export visual covering Middle East & South Africa",
  },
];

const milestones = [
  {
    tag: "1987",
    title: "Founded in Mumbai",
    description:
      "PolyTreat Chemical Industries was established in Mumbai with a focus on industrial chemical solutions.",
    tone: "green",
    icon: Building2,
    image: "/images/about/story/m1-mumbai-hq.jpg",
    imageAlt: "Historic Gateway of India landmark in Mumbai",
  },
  {
    tag: "MANUFACTURING",
    title: "Tarapur MIDC Unit",
    description:
      "Heavy chemical manufacturing unit established at Tarapur MIDC, Palghar district, adding capacity for industrial water and process chemical ranges.",
    tone: "blue",
    icon: Factory,
    image: "/images/about/story/m2-tarapur-plant.jpg",
    imageAlt: "Tarapur MIDC heavy chemical manufacturing facility and reaction silos",
  },
  {
    tag: "QUALITY",
    title: "ISO 9001:2015 Certification",
    description:
      "The quality management system is certified to ISO 9001:2015 by SMCS, ensuring consistent quality, reliable supply, and continuous improvement.",
    tone: "purple",
    icon: Award,
    image: "/images/about/story/m3-iso-hq.png",
    imageAlt: "ISO 9001:2015 certified quality system seal and emblem",
  },
  {
    tag: "CARE PRODUCTS",
    title: "V-Klin Range",
    description:
      "The institutional and home-care cleaning range is developed at the Goregaon facility, offering effective and safe cleaning solutions.",
    tone: "cyan",
    icon: FlaskConical,
    image: "/images/about/story/m4-vklin-products.jpg",
    imageAlt: "V-Klin complete institutional and household cleaning products lineup",
  },
  {
    tag: "EXPORTS",
    title: "Middle East & South Africa",
    description:
      "Specialty formulations begin shipping to international industrial markets across the Middle East and South Africa.",
    tone: "orange",
    icon: Ship,
    image: "/images/about/story/m5-exports-hq.jpg",
    imageAlt: "International cargo container ship shipping specialty chemical formulations",
  },
];

const brands = [
  {
    icon: Droplets,
    number: "01",
    eyebrow: "INDUSTRIAL WATER & PROCESS",
    title: "PolyTreat & Polycide",
    description:
      "Water-treatment and biocide ranges for boilers, cooling towers, RO systems, effluent, and process applications.",
    categories: ["Boiler water", "Cooling water", "RO & effluent", "Biocides"],
    tone: "blue",
    image: "/images/about/brands/b1-water-process.jpg",
    imageAlt: "Clean industrial water droplet and ripple visual",
  },
  {
    icon: Layers3,
    number: "02",
    eyebrow: "CONSTRUCTION CHEMICALS",
    title: "Polyproof, Polybond, Polyroof & Polygard",
    description:
      "Waterproofing membranes, protective coatings, concrete-repair systems, flooring, and sealants for built structures.",
    categories: ["Waterproofing", "Coatings", "Flooring", "Sealants"],
    tone: "orange",
    image: "/images/about/brands/b2-construction-coatings.jpg",
    imageAlt: "Protective coating and waterproofing application visual",
  },
  {
    icon: Leaf,
    number: "03",
    eyebrow: "INSTITUTIONAL & HOME CARE",
    title: "V-Klin",
    description:
      "Cleaning products for hotels, hospitals, facilities, and homes — floor, surface, hand, dish, glass, and washroom care.",
    categories: ["Floor & surface", "Hand & dish", "Glass & toilet"],
    tone: "green",
    image: "/images/about/brands/b3-floor-hygiene.jpg",
    imageAlt: "Professional floor cleaning and institutional hygiene care visual",
  },
  {
    icon: FlaskConical,
    number: "04",
    eyebrow: "FLAGSHIP SPECIALTY",
    title: "Polydor-WS · Corosil · Polyklin",
    description:
      "Single-problem formulations for odor neutralization, rust conversion, and HVAC coil cleaning.",
    categories: ["Odor control", "Rust converter", "Coil cleaner"],
    tone: "purple",
    image: "/images/about/brands/b4-specialty-lab.jpg",
    imageAlt: "Scientific laboratory glassware and specialty chemical visual",
  },
];

const facilities = [
  {
    id: "goregaon-west",
    tone: "blue",
    icon: Building2,
    kindPart1: "CORPORATE &",
    kindPart2: "ADMINISTRATIVE OFFICE",
    title: "Goregaon West",
    address:
      "7-A, Topiwala Building, 'C' Wing, Opp. Pramila Cinema, Goregaon (West), Mumbai – 400104, Maharashtra, India.",
    roleIcon: Users,
    note: "Sales, administration, and technical coordination.",
    image: "/images/about/infra/office-goregaon-west.jpg",
    imageAlt: "PolyTreat corporate office building in Goregaon West",
  },
  {
    id: "goregaon-east",
    tone: "green",
    icon: Leaf,
    kindPart1: "MANUFACTURING –",
    kindPart2: "GREEN PRODUCTS",
    title: "Goregaon East",
    address:
      "506, Shantilal Industrial Premises Co-op Society Ltd, Veer Gunjwala, Goregaon(E), Mumbai – 400063.",
    roleIcon: ShieldCheck,
    note: "The V-Klin cleaning and institutional care range, and the site named on our certificates.",
    image: "/images/about/infra/green-plant-goregaon-east.jpg",
    imageAlt: "PolyTreat green products manufacturing facility in Goregaon East",
  },
  {
    id: "tarapur",
    tone: "purple",
    icon: Factory,
    kindPart1: "MANUFACTURING –",
    kindPart2: "HEAVY CHEMICALS",
    title: "Tarapur MIDC",
    address:
      "Tarapur Industrial Area (MIDC), Palghar district, Maharashtra, India.",
    roleIcon: Cog,
    note: "Heavy manufacturing for the industrial water and process chemical ranges.",
    image: "/images/about/infra/heavy-plant-tarapur-midc.jpg",
    imageAlt: "PolyTreat heavy chemical manufacturing plant in Tarapur MIDC",
  },
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

      {/* 1. HERO SECTION (Redesigned to replicate reference image exactly) */}
      <section className="ab-hero-section about-hero-redesign" aria-labelledby="about-title">
        {/* Soft atmospheric gradient & lower-left organic wave */}
        <div className="about-hero-left-wave" aria-hidden="true">
          <svg viewBox="0 0 500 350" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ab-hero-wave-left-1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="ab-hero-wave-left-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0099FF" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#7DD3FC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path
              d="M-40,350 C60,250 160,200 280,240 C380,270 440,210 500,140 L500,350 Z"
              fill="url(#ab-hero-wave-left-1)"
            />
            <path
              d="M-40,350 C90,280 190,230 300,265 C400,295 450,260 500,210 L500,350 Z"
              fill="url(#ab-hero-wave-left-2)"
            />
          </svg>
        </div>

        <div className="ab-container about-hero-container">
          <div className="about-hero-grid">
            {/* LEFT COLUMN: Label, Heading, Description, 3 Badges, CTA */}
            <div className="about-hero-left">
              {/* Eyebrow Label with blue dash */}
              <div className="about-hero-eyebrow">
                <span className="about-hero-eyebrow-dash" aria-hidden="true" />
                <span className="about-hero-eyebrow-text">ABOUT POLYTREAT</span>
              </div>

              {/* Main Heading */}
              <h1 id="about-title" className="about-hero-h1">
                Chemical solutions,<br />
                manufactured<br />
                in-house <span className="about-hero-h1-blue">since 1987.</span>
              </h1>

              {/* Lead Description */}
              <p className="about-hero-desc">
                PolyTreat Chemicals Pvt. Ltd. formulates and produces specialty chemicals for
                industrial water systems, construction projects, and everyday facility care — from
                two manufacturing units in Maharashtra and a corporate office in Mumbai.
              </p>

              {/* Three Horizontally Aligned Badges */}
              <div className="about-hero-badges-row">
                {/* Badge 1: ISO 9001:2015 */}
                <div className="about-hero-badge-card">
                  <div className="about-badge-icon-box" aria-hidden="true">
                    <Award size={20} strokeWidth={2.2} />
                  </div>
                  <div className="about-badge-text">
                    <strong className="about-badge-title">ISO 9001:2015</strong>
                    <span className="about-badge-sub">Certified</span>
                  </div>
                </div>

                {/* Badge 2: 2 Production Units */}
                <div className="about-hero-badge-card">
                  <div className="about-badge-icon-box" aria-hidden="true">
                    <Factory size={20} strokeWidth={2.2} />
                  </div>
                  <div className="about-badge-text">
                    <strong className="about-badge-title">2 Production</strong>
                    <span className="about-badge-sub">Units</span>
                  </div>
                </div>

                {/* Badge 3: V-Klin Care Range */}
                <div className="about-hero-badge-card">
                  <div className="about-badge-icon-box" aria-hidden="true">
                    <FlaskConical size={20} strokeWidth={2.2} />
                  </div>
                  <div className="about-badge-text">
                    <strong className="about-badge-title">V-Klin</strong>
                    <span className="about-badge-sub">Care Range</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="about-hero-actions">
                <a href="#story" className="btn-about-hero">
                  <span>Explore Our Company</span>
                  <span className="btn-about-hero-arrow" aria-hidden="true">
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Asymmetrical Curved Portal with Industrial Water Treatment Image & Floating Badge */}
            <div className="about-hero-right">
              <div className="about-hero-portal-wrap">
                {/* Decorative outer cyan/blue flowing halo border */}
                <div className="about-hero-portal-halo" aria-hidden="true" />

                {/* Main image frame with 8px crisp white border and curved arch */}
                <div className="about-hero-portal-frame">
                  <Image
                    src="/images/about/hero-water-treatment.jpg"
                    alt="PolyTreat advanced industrial reverse osmosis water treatment and filtration facility"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 52vw, 680px"
                    className="about-hero-portal-img"
                  />

                  {/* Dynamic Water Splash (Seamlessly integrated inside the pool foreground) */}
                  <div className="about-hero-portal-splash" aria-hidden="true">
                    <Image
                      src="/images/about/hero-water-splash.png"
                      alt=""
                      fill
                      sizes="(max-width: 768px) 55vw, 420px"
                      className="about-hero-portal-splash-img"
                    />
                  </div>
                </div>

                {/* Floating 'Since 1987' Badge (Upper-Right) */}
                <div className="about-hero-since-badge">
                  <div className="about-since-icon-box" aria-hidden="true">
                    <CalendarDays size={24} strokeWidth={2.2} />
                  </div>
                  <div className="about-since-text">
                    <span className="about-since-label">Since</span>
                    <span className="about-since-year">1987</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Layered Cyan & Blue Flowing Wave Divider along bottom edge */}
        <div className="about-hero-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="about-hero-wave-svg"
          >
            <defs>
              <linearGradient id="ab-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#D8EEFD" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#EBF6FD" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="ab-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.25" />
                <stop offset="35%" stopColor="#0055B3" stopOpacity="0.38" />
                <stop offset="70%" stopColor="#0070EB" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0055B3" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="ab-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.55" />
                <stop offset="35%" stopColor="#0055B3" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,32 C240,65 480,12 720,44 C960,76 1200,22 1440,48 L1440,96 L0,96 Z"
              fill="url(#ab-wave-back)"
            />
            <path
              d="M0,48 C280,18 520,72 800,38 C1080,4 1260,56 1440,32 L1440,96 L0,96 Z"
              fill="url(#ab-wave-mid)"
            />
            <path
              d="M0,58 C320,86 640,38 960,68 C1200,90 1360,52 1440,60 L1440,96 L0,96 Z"
              fill="url(#ab-wave-front)"
            />
          </svg>
        </div>
      </section>

      {/* 2. AT A GLANCE / COMPANY STATISTICS SECTION */}
      <section className="ab-glance-section" aria-labelledby="ab-glance-title">
        {/* Soft flowing background wave ribbons on the left and right margins */}
        <div className="ab-glance-ambient-left" aria-hidden="true">
          <svg viewBox="0 0 320 400" fill="none" preserveAspectRatio="none">
            <path
              d="M-40,0 C60,110 30,250 -50,400 L-50,0 Z"
              fill="url(#ab-glance-amb-left)"
            />
            <defs>
              <linearGradient id="ab-glance-amb-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="ab-glance-ambient-right" aria-hidden="true">
          <svg viewBox="0 0 320 400" fill="none" preserveAspectRatio="none">
            <path
              d="M360,0 C260,110 290,250 370,400 L370,0 Z"
              fill="url(#ab-glance-amb-right)"
            />
            <defs>
              <linearGradient id="ab-glance-amb-right" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="ab-container ab-glance-container">
          {/* Section Heading with subtle curved blue underline */}
          <div className="ab-glance-header">
            <div className="ab-glance-eyebrow">
              <span className="ab-glance-dash" aria-hidden="true" />
              <span className="ab-glance-eyebrow-text">OUR AT A GLANCE</span>
              <span className="ab-glance-dash" aria-hidden="true" />
            </div>

            <h2 id="ab-glance-title" className="ab-glance-h2">
              PolyTreat at a <span className="ab-glance-h2-blue">Glance</span>
            </h2>

            {/* Subtle curved blue underline below the heading */}
            <div className="ab-glance-swoosh" aria-hidden="true">
              <svg viewBox="0 0 260 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 5 C80 18, 180 18, 254 5 C180 14, 80 14, 6 5 Z"
                  fill="url(#ab-glance-swoosh-grad)"
                />
                <defs>
                  <linearGradient id="ab-glance-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0070EB" stopOpacity="0" />
                    <stop offset="25%" stopColor="#0070EB" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#00A3FF" stopOpacity="1" />
                    <stop offset="75%" stopColor="#0070EB" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#0070EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Four Statistics Cards */}
          <div className="ab-glance-grid">
            {glanceCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div className="ab-glance-card" key={card.id}>
                  {/* Subtle decorative image in upper-right */}
                  <div className="ab-glance-card-art" aria-hidden="true">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 280px"
                      className="ab-glance-art-img"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="ab-glance-card-content">
                    {/* Top Row: Icon badge + Main stat highlight */}
                    <div className="ab-glance-card-top">
                      <div className="ab-glance-icon-badge" aria-hidden="true">
                        <IconComp size={22} strokeWidth={2.2} />
                      </div>
                      <div className="ab-glance-stat">
                        {card.statPrefix && (
                          <span className="ab-glance-stat-prefix">{card.statPrefix}</span>
                        )}
                        <span className="ab-glance-stat-value">
                          {card.statValue}
                          {card.statSuffix && (
                            <span className="ab-glance-stat-suffix">{card.statSuffix}</span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Short blue horizontal accent line */}
                    <div className="ab-glance-divider" aria-hidden="true" />

                    {/* Card Heading */}
                    <h3 className="ab-glance-card-title">{card.title}</h3>

                    {/* Supporting Description */}
                    <p className="ab-glance-card-desc">{card.description}</p>
                  </div>

                  {/* Corner Accent: Blue curved water droplet detail */}
                  <div className="ab-glance-corner-accent" aria-hidden="true">
                    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={"ab-corner-" + card.id} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00C0FF" />
                          <stop offset="45%" stopColor="#0070EB" />
                          <stop offset="100%" stopColor="#004DA8" />
                        </linearGradient>
                        <linearGradient id={"ab-corner-stroke-" + card.id} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.9" />
                          <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#0070EB" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M60 16 C60 40, 40 60, 16 60 L60 60 Z"
                        fill={"url(#ab-corner-" + card.id + ")"}
                      />
                      <path
                        d="M60 16 C60 40, 40 60, 16 60"
                        stroke={"url(#ab-corner-stroke-" + card.id + ")"}
                        strokeWidth="2.5"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Water Splash Ribbon along Bottom Edge */}
        <div className="ab-glance-bottom-water" aria-hidden="true">
          <Image
            src="/images/about/glance-bottom-splash.png"
            alt=""
            fill
            sizes="100vw"
            className="ab-glance-splash-img"
          />
        </div>
      </section>

      {/* 3. OUR STORY + VERTICAL TIMELINE SECTION */}
      <section className="ab-section ab-story-section" id="story" aria-labelledby="story-title">
        {/* Subtle decorative background wave shapes */}
        <div className="ab-story-ambient-top" aria-hidden="true">
          <svg viewBox="0 0 500 250" fill="none" preserveAspectRatio="none">
            <path
              d="M-50,0 C120,60 250,20 400,90 C470,120 520,180 550,250 L-50,250 Z"
              fill="url(#ab-story-amb-top)"
            />
            <defs>
              <linearGradient id="ab-story-amb-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="ab-container ab-story-grid">
          {/* LEFT COLUMN: Eyebrow, Heading, Description, Pill CTA, Bottom-left Tanks */}
          <div className="ab-story-left-col">
            <div className="ab-story-sticky">
              {/* Eyebrow Label with blue dash */}
              <div className="ab-story-eyebrow">
                <span className="ab-story-eyebrow-dash" aria-hidden="true" />
                <span className="ab-story-eyebrow-text">OUR STORY</span>
              </div>

              {/* Main Heading with "the beginning." in blue & curved underline */}
              <h2 id="story-title" className="ab-story-h2">
                A manufacturer first,<br />
                since <span className="ab-story-h2-blue">the beginning.</span>
              </h2>

              {/* Subtle curved blue underline below the heading */}
              <div className="ab-story-swoosh" aria-hidden="true">
                <svg viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4 C70 16, 170 16, 236 4 C170 13, 70 13, 4 4 Z"
                    fill="url(#ab-story-swoosh-grad)"
                  />
                  <defs>
                    <linearGradient id="ab-story-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0070EB" stopOpacity="0" />
                      <stop offset="25%" stopColor="#0070EB" stopOpacity="0.75" />
                      <stop offset="50%" stopColor="#00A3FF" stopOpacity="1" />
                      <stop offset="75%" stopColor="#0070EB" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#0070EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Body Paragraphs */}
              <div className="ab-story-paragraphs">
                <p>
                  PolyTreat Chemicals Pvt. Ltd. — also known as PolyTreat Chemical Industries — has
                  manufactured specialty formulations from Mumbai since 1987. Two divisions run
                  under a single quality system: heavy industrial water and process chemicals, and
                  the V-Klin range of institutional and home-care products.
                </p>
                <p>
                  Everything PolyTreat makes is formulated and produced in its own plants. The range
                  is built around performance and value, backed by clear technical documentation and
                  a direct conversation with the people who make the products.
                </p>
              </div>

              {/* Pill CTA Button */}
              <div className="ab-story-cta-wrap">
                <Link className="btn-story-pill" href="/solutions">
                  <span>Explore Our Solutions</span>
                  <span className="btn-story-pill-arrow" aria-hidden="true">
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>

              {/* Bottom-left Industrial Tanks Visual */}
              <div className="ab-story-tanks-wrap" aria-hidden="true">
                <Image
                  src="/images/about/story/story-tanks-feathered.png"
                  alt="PolyTreat chemical reaction silos and storage tanks"
                  width={420}
                  height={218}
                  className="ab-story-tanks-img"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Company Timeline with 5 Milestone Cards */}
          <div className="ab-timeline-container">
            {/* Continuous Vertical Timeline Connector Line */}
            <div className="ab-timeline-track-line" aria-hidden="true" />

            <div className="ab-timeline-cards-list">
              {milestones.map((milestone) => {
                const IconComponent = milestone.icon;
                return (
                  <div className="ab-timeline-row" key={milestone.title}>
                    {/* Circular Timeline Node Marker */}
                    <div className={"ab-timeline-node ab-node-" + milestone.tone} aria-hidden="true">
                      <span className="ab-node-core" />
                    </div>

                    {/* Milestone Card */}
                    <article className={"ab-milestone-card ab-mcard-" + milestone.tone}>
                      {/* Left: Colored Icon Box */}
                      <div className={"ab-mcard-icon-box ab-ibox-" + milestone.tone} aria-hidden="true">
                        <IconComponent size={22} strokeWidth={2.2} />
                      </div>

                      {/* Middle: Content */}
                      <div className="ab-mcard-content">
                        <span className={"ab-mcard-tag ab-mtag-" + milestone.tone}>
                          {milestone.tag}
                        </span>
                        <h3 className="ab-mcard-title">{milestone.title}</h3>
                        <p className="ab-mcard-desc">{milestone.description}</p>
                      </div>

                      {/* Right: Graphic / Visual with Curved Transition */}
                      <div className="ab-mcard-visual" aria-hidden="true">
                        <Image
                          src={milestone.image}
                          alt={milestone.imageAlt}
                          fill
                          sizes="(max-width: 640px) 40vw, 240px"
                          className="ab-mcard-img"
                        />
                        <div className="ab-mcard-visual-fade" aria-hidden="true" />
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Flowing Blue Waves along bottom of section */}
        <div className="ab-story-bottom-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 85" fill="none" preserveAspectRatio="none">
            <path
              d="M0,45 C280,15 520,70 820,35 C1120,0 1320,55 1440,30 L1440,85 L0,85 Z"
              fill="rgba(186, 230, 253, 0.45)"
            />
            <path
              d="M0,58 C320,80 640,32 960,65 C1200,85 1360,48 1440,55 L1440,85 L0,85 Z"
              fill="rgba(0, 112, 235, 0.22)"
            />
          </svg>
        </div>
      </section>

      {/* 4. BRAND ARCHITECTURE */}
      <section className="ab-section ab-brands-section" id="brands" aria-labelledby="brands-title">
        <div className="ab-container">
          <div className="ab-brands-header ab-reveal">
            <div className="ab-brands-header-left">
              <span className="ab-brands-eyebrow-label">BRAND ARCHITECTURE</span>
              <h2 id="brands-title" className="ab-brands-heading">Four ranges. One manufacturer.</h2>
            </div>
            <p className="ab-brands-subtitle">
              PolyTreat&apos;s product names map to the work they do — industrial water treatment,
              construction protection, everyday care, and single-problem specialty formats.
            </p>
          </div>

          {/* Architectural Brand Connection Tree Element */}
          <div className="ab-brands-connection" aria-hidden="true">
            {/* Branch 1 -> Card 01 */}
            <div className="ab-conn-branch ab-conn-col-1">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ab-conn-svg">
                <path d="M 100 16 L 58 16 Q 50 16 50 24 L 50 48" stroke="#0070EB" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="50" cy="48" r="3.5" fill="#0070EB" />
              </svg>
            </div>
            {/* Branch 2 -> Card 02 */}
            <div className="ab-conn-branch ab-conn-col-2">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ab-conn-svg">
                <path d="M 0 16 L 100 16 M 50 16 L 50 48" stroke="#0070EB" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="50" cy="48" r="3.5" fill="#0070EB" />
              </svg>
            </div>
            {/* Central Oval PolyTreat Badge */}
            <div className="ab-conn-central-badge">
              <span className="ab-conn-badge-p">P</span>
            </div>
            {/* Branch 3 -> Card 03 */}
            <div className="ab-conn-branch ab-conn-col-3">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ab-conn-svg">
                <path d="M 0 16 L 100 16 M 50 16 L 50 48" stroke="#0070EB" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="50" cy="48" r="3.5" fill="#0070EB" />
              </svg>
            </div>
            {/* Branch 4 -> Card 04 */}
            <div className="ab-conn-branch ab-conn-col-4">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="ab-conn-svg">
                <path d="M 0 16 L 42 16 Q 50 16 50 24 L 50 48" stroke="#0070EB" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                <circle cx="50" cy="48" r="3.5" fill="#0070EB" />
              </svg>
            </div>
          </div>

          {/* Four Product Category Cards Grid */}
          <div className="ab-brands-grid ab-stagger">
            {brands.map(({ icon: Icon, number, eyebrow, title, description, categories, tone, image, imageAlt }) => (
              <article className={`ab-brand-card ab-brand-${tone}`} key={title}>
                {/* Large Rectangular Image at Top */}
                <div className="ab-brand-media">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1120px) 50vw, 25vw"
                    className="ab-brand-img"
                  />
                  {/* Floating Circular Icon Badge */}
                  <div className={`ab-brand-icon-float ab-bicon-${tone}`} aria-hidden="true">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  {/* Prominent Numbered Badge */}
                  <div className={`ab-brand-number-badge ab-bnum-${tone}`}>
                    {number}
                  </div>
                </div>

                {/* Card Body */}
                <div className="ab-brand-body">
                  <span className={`ab-brand-eyebrow ab-beyebrow-${tone}`}>
                    {eyebrow}
                  </span>
                  <div className={`ab-brand-eyebrow-line ab-bline-${tone}`} aria-hidden="true" />
                  <h3 className="ab-brand-title">{title}</h3>
                  <p className="ab-brand-desc">{description}</p>
                  <ul className="ab-brand-chips" aria-label={`${title} categories`}>
                    {categories.map((category) => (
                      <li className={`ab-brand-chip ab-bchip-${tone}`} key={category}>
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
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
        {/* Ambient Dot Matrix in top-left */}
        <div className="ab-infra-dots-grid" aria-hidden="true">
          {[...Array(18)].map((_, i) => (
            <span key={i} className="ab-infra-dot-cell" />
          ))}
        </div>

        {/* Ambient Wave Ribbons along left and right edges */}
        <div className="ab-infra-ambient-left" aria-hidden="true">
          <svg viewBox="0 0 280 400" fill="none" preserveAspectRatio="none">
            <path d="M-40,0 C80,120 40,260 -50,400 L-50,0 Z" fill="url(#ab-infra-amb-l)" />
            <defs>
              <linearGradient id="ab-infra-amb-l" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ab-infra-ambient-right" aria-hidden="true">
          <svg viewBox="0 0 280 400" fill="none" preserveAspectRatio="none">
            <path d="M320,0 C200,120 240,260 330,400 L330,0 Z" fill="url(#ab-infra-amb-r)" />
            <defs>
              <linearGradient id="ab-infra-amb-r" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.04" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="ab-container">
          {/* Section Heading with Building icon, Eyebrow, Main Heading, Subtitle & Divider */}
          <div className="ab-infra-heading ab-reveal">
            <div className="ab-infra-eyebrow">
              <Building2 size={20} strokeWidth={2.2} className="ab-infra-head-icon" aria-hidden="true" />
              <span>INFRASTRUCTURE</span>
            </div>
            <h2 id="infra-title">
              Where PolyTreat makes its products<span className="ab-infra-dot">.</span>
            </h2>
            <p>Two manufacturing units and a corporate office, all within Maharashtra.</p>

            {/* Decorative Divider with Central Water Droplet */}
            <div className="ab-infra-divider-decor" aria-hidden="true">
              <span className="ab-infra-div-line" />
              <span className="ab-infra-div-drop">
                <svg viewBox="0 0 16 20" fill="currentColor" width="13" height="16">
                  <path d="M8 0 C8 0 0 9.5 0 14 C0 17.5 3.5 20 8 20 C12.5 20 16 17.5 16 14 C16 9.5 8 0 8 0 Z" />
                </svg>
              </span>
              <span className="ab-infra-div-line" />
            </div>
          </div>

          {/* Three Infrastructure Cards */}
          <div className="ab-infra-grid ab-stagger">
            {facilities.map((fac) => {
              const Icon = fac.icon;
              const RoleIcon = fac.roleIcon;
              return (
                <article
                  className={`ab-infra-card ab-infra-${fac.tone}`}
                  key={fac.id}
                >
                  {/* Top Header Media Banner */}
                  <div className={`ab-infra-card-header ab-iheader-${fac.tone}`}>
                    {/* Left side: Circular icon badge & 2-line category label */}
                    <div className="ab-infra-header-meta">
                      <div className={`ab-infra-icon-float ab-iicon-${fac.tone}`} aria-hidden="true">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <div className={`ab-infra-kind-box ab-ikind-${fac.tone}`}>
                        <span className="ab-infra-kind-p1">{fac.kindPart1}</span>
                        <span className="ab-infra-kind-p2">{fac.kindPart2}</span>
                      </div>
                    </div>

                    {/* Right side: High-quality facility photograph */}
                    <div className="ab-infra-media-wrap" aria-hidden="true">
                      <Image
                        src={fac.image}
                        alt={fac.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="ab-infra-img"
                      />
                      <div className={`ab-infra-media-fade ab-mfade-${fac.tone}`} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="ab-infra-card-body">
                    {/* Bold Location Heading */}
                    <h3 className="ab-infra-title">{fac.title}</h3>

                    {/* Address with Location Pin */}
                    <div className="ab-infra-address-wrap">
                      <div className={`ab-infra-pin-box ab-ipin-${fac.tone}`} aria-hidden="true">
                        <MapPin size={15} strokeWidth={2.2} />
                      </div>
                      <address className="ab-infra-address">{fac.address}</address>
                    </div>

                    {/* Subtle Divider */}
                    <div className="ab-infra-divider" aria-hidden="true" />

                    {/* Bottom Footnote Area */}
                    <div className="ab-infra-footnote">
                      <div className={`ab-infra-ficon-box ab-ificon-${fac.tone}`} aria-hidden="true">
                        <RoleIcon size={17} strokeWidth={2.2} />
                      </div>
                      <p className="ab-infra-note">{fac.note}</p>
                    </div>
                  </div>
                </article>
              );
            })}
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
        {/* Top-Left Ambient Curved Swoosh */}
        <div className="ab-cert-decor-swoosh" aria-hidden="true">
          <svg viewBox="0 0 320 320" fill="none" preserveAspectRatio="none">
            <path
              d="M-40,-40 C140,40 180,180 80,320 L-40,320 Z"
              fill="url(#ab-cert-swoosh-grad)"
            />
            <path
              d="M-40,-40 C100,20 130,130 50,260"
              stroke="#0070EB"
              strokeWidth="4"
              strokeOpacity="0.35"
              fill="none"
            />
            <defs>
              <linearGradient id="ab-cert-swoosh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.22" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Top-Right Ambient Dot Grid (4x4) */}
        <div className="ab-cert-dots-tr" aria-hidden="true">
          {[...Array(16)].map((_, i) => (
            <span key={i} className="ab-cert-dot-cell" />
          ))}
        </div>

        {/* Bottom-Left Ambient Dot Grid (3x5) */}
        <div className="ab-cert-dots-bl" aria-hidden="true">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="ab-cert-dot-cell" />
          ))}
        </div>

        {/* Far-Right Industrial Manufacturing Silhouette */}
        <div className="ab-cert-decor-silhouette" aria-hidden="true">
          <Image
            src="/images/about/cert-plant-silhouette.svg"
            alt=""
            width={380}
            height={460}
            className="ab-cert-sil-img"
          />
        </div>

        <div className="ab-container ab-cert-inner">
          {/* Left Column: Layered Certificate Display */}
          <div className="ab-cert-visual-wrap ab-reveal">
            {/* Slightly offset deep-blue decorative background panel */}
            <div className="ab-cert-blue-backdrop" aria-hidden="true" />

            {/* Large White Rounded Container with Thick Frame */}
            <a
              className="ab-cert-card"
              href="/iso-9001-2015-quality-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ISO 9001:2015 Certificate in full resolution (opens in new tab)"
            >
              <div className="ab-cert-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/iso-9001-2015-quality-certificate.jpeg"
                  alt="PolyTreat Chemicals ISO 9001:2015 quality management certificate"
                  className="ab-cert-img"
                  loading="lazy"
                />
              </div>
            </a>
          </div>

          {/* Right Column: Certification Content */}
          <div className="ab-cert-copy ab-reveal">
            {/* Eyebrow Label with subtle side lines: — ABOUT US — */}
            <div className="ab-cert-eyebrow">
              <span className="ab-cert-eyebrow-line" aria-hidden="true" />
              <span className="ab-cert-eyebrow-text">ABOUT US</span>
              <span className="ab-cert-eyebrow-line" aria-hidden="true" />
            </div>

            {/* Main Heading with Laurel Shield Check Icon */}
            <div className="ab-cert-heading-row">
              <svg
                width="44"
                height="44"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ab-cert-heading-icon"
                aria-hidden="true"
              >
                {/* Laurel Branch Left */}
                <path d="M24 41 C15 39 8 32 7 19" stroke="#0070EB" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M8 32 C5 31 4 28 6 26 C8 26 10 28 9 32 Z" fill="#0070EB" />
                <path d="M7 25 C4 23 3 20 5 18 C7 18 9 21 8 25 Z" fill="#0070EB" />
                <path d="M7 18 C5 15 5 12 7 11 C9 12 10 15 8 18 Z" fill="#0070EB" />
                <path d="M10 13 C8 10 9 7 11 6 C13 8 13 11 11 13 Z" fill="#0070EB" />
                <path d="M14 9 C13 6 15 4 17 4 C18 6 17 9 15 9 Z" fill="#0070EB" />

                {/* Laurel Branch Right */}
                <path d="M24 41 C33 39 40 32 41 19" stroke="#0070EB" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M40 32 C43 31 44 28 42 26 C40 26 38 28 39 32 Z" fill="#0070EB" />
                <path d="M41 25 C44 23 45 20 43 18 C41 18 39 21 40 25 Z" fill="#0070EB" />
                <path d="M41 18 C43 15 43 12 41 11 C39 12 38 15 40 18 Z" fill="#0070EB" />
                <path d="M38 13 C40 10 39 7 37 6 C35 8 35 11 37 13 Z" fill="#0070EB" />
                <path d="M34 9 C35 6 33 4 31 4 C30 6 31 9 33 9 Z" fill="#0070EB" />

                {/* Shield in Center */}
                <path
                  d="M24 10 L33 13.5 C33 24 28 32.5 24 35 C20 32.5 15 24 15 13.5 L24 10 Z"
                  fill="url(#ab-cert-shield-grad)"
                />
                {/* Checkmark */}
                <path
                  d="M19.5 22.5 L22.5 25.5 L28.5 18.5"
                  stroke="#FFFFFF"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <defs>
                  <linearGradient id="ab-cert-shield-grad" x1="15" y1="10" x2="33" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0084FF" />
                    <stop offset="1" stopColor="#0052CC" />
                  </linearGradient>
                </defs>
              </svg>
              <h2 id="cert-title" className="ab-cert-heading">Certification</h2>
            </div>

            {/* Main Title with ISO 9001:2015 Highlight */}
            <h3 className="ab-cert-lead">
              <span className="ab-cert-lead-blue">ISO 9001:2015</span>, for water treatment and home-care manufacturing.
            </h3>

            {/* Short Blue Decorative Underline */}
            <div className="ab-cert-underline" aria-hidden="true" />

            {/* Descriptions */}
            <p className="ab-cert-desc">
              Scope: manufacturing of water treatment chemicals and homecare, hygienic &amp;
              industrial cleaning chemicals.
            </p>
            <p className="ab-cert-desc">
              The certificate is issued by SMCS and accredited by AIAO-BAR USA, for the Goregaon
              (East) site. Select the certificate to view it in full resolution.
            </p>

            {/* Three Certification Trust Badges in a Row */}
            <div className="ab-cert-badges">
              <div className="ab-cert-badge">
                <div className="ab-cert-badge-icon" aria-hidden="true">
                  <Award size={22} strokeWidth={2.2} />
                </div>
                <div className="ab-cert-badge-text">
                  <strong>ISO 9001:2015</strong>
                  <span>Certified</span>
                </div>
              </div>

              <div className="ab-cert-badge">
                <div className="ab-cert-badge-icon" aria-hidden="true">
                  <Factory size={22} strokeWidth={2.2} />
                </div>
                <div className="ab-cert-badge-text">
                  <strong>Manufacturing</strong>
                  <span>Assurance</span>
                </div>
              </div>

              <div className="ab-cert-badge">
                <div className="ab-cert-badge-icon" aria-hidden="true">
                  <Layers size={22} strokeWidth={2.2} />
                </div>
                <div className="ab-cert-badge-text">
                  <strong>International</strong>
                  <span>Accreditation</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="ab-cert-actions">
              <Link className="ab-cert-btn-primary" href="/certifications">
                <span>View all certifications</span>
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
              <Link className="ab-cert-btn-secondary" href="/contact">
                <span>Request documents</span>
                <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Water Wave and Splash Ribbon along Bottom Edge */}
        <div className="ab-cert-bottom-decor" aria-hidden="true">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
            className="ab-cert-bottom-svg"
          >
            <path
              d="M0,50 C320,15 620,80 920,40 C1220,5 1360,55 1440,35 L1440,90 L0,90 Z"
              fill="rgba(186, 230, 253, 0.45)"
            />
            <path
              d="M0,62 C360,82 680,36 1000,68 C1240,88 1360,50 1440,58 L1440,90 L0,90 Z"
              fill="rgba(0, 112, 235, 0.18)"
            />
          </svg>
          <div className="ab-cert-splash-wrap">
            <Image
              src="/images/about/glance-bottom-splash.png"
              alt=""
              fill
              sizes="100vw"
              className="ab-cert-splash-img"
            />
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BAND (Exact design replication from Industries page) */}
      <section className="industries-contact-band ab-contact-band" aria-labelledby="about-contact-title">
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">Have a specific site or system in mind?</span>
              <h2 id="about-contact-title">
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
