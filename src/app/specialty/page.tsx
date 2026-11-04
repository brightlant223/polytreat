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

function CorosilIndustrialDecor() {
  return (
    <svg
      className="specialty-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="corosil-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" stopOpacity="0.32" />
          <stop offset="0.6" stopColor="#D97706" stopOpacity="0.30" />
          <stop offset="1" stopColor="#B45309" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="corosil-wave-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEF3C7" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#D97706" stopOpacity="0.78" />
          <stop offset="1" stopColor="#92400E" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="corosil-bldg-grad" x1="310" y1="15" x2="350" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97706" />
          <stop offset="0.6" stopColor="#B45309" />
          <stop offset="1" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id="corosil-tank-grad" x1="275" y1="30" x2="305" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" stopOpacity="0.95" />
          <stop offset="1" stopColor="#B45309" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ambient amber wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#corosil-wave-bg)"
      />

      {/* Industrial Chemical Metallurgy & Structural Steel Facility */}

      {/* Chemical Processing Silo / Pressure Vessel */}
      <rect x="282" y="38" width="24" height="38" rx="5" fill="url(#corosil-tank-grad)" opacity="0.85" />
      <line x1="282" y1="48" x2="306" y2="48" stroke="#FDE68A" strokeWidth="1" opacity="0.6" />
      <line x1="282" y1="58" x2="306" y2="58" stroke="#FDE68A" strokeWidth="1" opacity="0.6" />
      {/* Tank dome cap */}
      <path d="M282 38 C282 32 306 32 306 38 Z" fill="#D97706" opacity="0.9" />

      {/* Industrial Distillation / Refractory Tower */}
      <path
        d="M312 22 L328 14 L344 22 V75 H312 Z"
        fill="url(#corosil-bldg-grad)"
        opacity="0.88"
      />
      {/* Tower industrial spire */}
      <line x1="328" y1="6" x2="328" y2="14" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="328" cy="6" r="1.8" fill="#FDE68A" />

      {/* Matrix windows on tower */}
      <rect x="317" y="26" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="326" y="26" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="334" y="26" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />

      <rect x="317" y="36" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="326" y="36" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="334" y="36" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />

      <rect x="317" y="46" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="326" y="46" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />
      <rect x="334" y="46" width="5" height="6" rx="1" fill="#FDE68A" opacity="0.75" />

      {/* Structural Steel Girder / Industrial Truss Framework */}
      <line x1="242" y1="20" x2="242" y2="72" stroke="#B45309" strokeWidth="1.6" />
      <line x1="248" y1="20" x2="248" y2="72" stroke="#B45309" strokeWidth="1.6" />
      {/* Truss diagonal X-braces */}
      <line x1="242" y1="28" x2="248" y2="36" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="248" y1="28" x2="242" y2="36" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="242" y1="40" x2="248" y2="48" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="248" y1="40" x2="242" y2="48" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="242" y1="52" x2="248" y2="60" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />
      <line x1="248" y1="52" x2="242" y2="60" stroke="#FDE68A" strokeWidth="1" opacity="0.7" />

      {/* Overhead horizontal girder arm */}
      <line x1="228" y1="20" x2="280" y2="20" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
      <path d="M241 20 L245 10 L249 20" stroke="#B45309" strokeWidth="1.5" fill="none" />
      <line x1="245" y1="10" x2="272" y2="20" stroke="#FDE68A" strokeWidth="1" opacity="0.8" />
      <line x1="245" y1="10" x2="229" y2="20" stroke="#FDE68A" strokeWidth="1" opacity="0.8" />

      {/* Main Flowing Wave merging directly across the structural base */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#corosil-wave-fg)"
      />

      {/* Protective Chemical Conversion Sub-surface Flow Lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#FDE68A"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.7"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#FEF3C7"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.5"
      />
    </svg>
  );
}

function PolydorWsEnvironmentalDecor() {
  return (
    <svg
      className="specialty-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="polydor-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A7F3D0" stopOpacity="0.30" />
          <stop offset="0.6" stopColor="#059669" stopOpacity="0.30" />
          <stop offset="1" stopColor="#047857" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="polydor-wave-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1FAE5" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#059669" stopOpacity="0.78" />
          <stop offset="1" stopColor="#065F46" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="polydor-bldg-grad" x1="310" y1="18" x2="350" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="0.6" stopColor="#047857" />
          <stop offset="1" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id="polydor-dome-grad" x1="270" y1="35" x2="310" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" stopOpacity="0.95" />
          <stop offset="1" stopColor="#047857" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ambient emerald wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#polydor-wave-bg)"
      />

      {/* Environmental Odour Abatement & Bio-Processing Plant */}

      {/* Bio-Digester Geodesic Dome */}
      <path
        d="M268 70 C268 48 304 48 304 70 Z"
        fill="url(#polydor-dome-grad)"
        opacity="0.85"
      />
      {/* Geodesic Dome rib lines */}
      <path d="M286 48 V70" stroke="#A7F3D0" strokeWidth="1" opacity="0.65" />
      <path d="M276 54 C281 60 286 64 286 70" stroke="#A7F3D0" strokeWidth="1" opacity="0.5" />
      <path d="M296 54 C291 60 286 64 286 70" stroke="#A7F3D0" strokeWidth="1" opacity="0.5" />

      {/* Eco-Scrubber Tower / Filtration Column */}
      <rect x="312" y="24" width="22" height="52" rx="4" fill="url(#polydor-bldg-grad)" opacity="0.9" />
      {/* Scrubber fine aeration louvres */}
      <line x1="316" y1="32" x2="330" y2="32" stroke="#A7F3D0" strokeWidth="1" opacity="0.75" />
      <line x1="316" y1="38" x2="330" y2="38" stroke="#A7F3D0" strokeWidth="1" opacity="0.75" />
      <line x1="316" y1="44" x2="330" y2="44" stroke="#A7F3D0" strokeWidth="1" opacity="0.75" />
      <line x1="316" y1="50" x2="330" y2="50" stroke="#A7F3D0" strokeWidth="1" opacity="0.75" />
      <line x1="316" y1="56" x2="330" y2="56" stroke="#A7F3D0" strokeWidth="1" opacity="0.75" />

      {/* Aeration Cowl on scrubber top */}
      <path d="M316 24 L323 16 L330 24 Z" fill="#047857" />
      <line x1="323" y1="16" x2="323" y2="10" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />

      {/* Clean molecular dispersion wavefronts */}
      <path
        d="M327 12 C335 8 346 9 354 15"
        stroke="#A7F3D0"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        opacity="0.85"
      />
      <circle cx="340" cy="8" r="2.2" fill="#34D399" opacity="0.8" />
      <circle cx="355" cy="12" r="1.8" fill="#A7F3D0" opacity="0.7" />

      {/* Organic Botanical / Environmental silhouette accent */}
      <path
        d="M246 64 C244 52 254 44 262 48 C266 58 256 66 246 64 Z"
        fill="#059669"
        opacity="0.75"
      />
      <line x1="247" y1="63" x2="258" y2="50" stroke="#A7F3D0" strokeWidth="1" opacity="0.7" />

      {/* Main Flowing Bio-Wave merging across the base */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#polydor-wave-fg)"
      />

      {/* Eco-Purification Sub-surface Flow Lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#A7F3D0"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.7"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#D1FAE5"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.5"
      />
    </svg>
  );
}

function PolyklinHvacDecor() {
  return (
    <svg
      className="specialty-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="polyklin-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.32" />
          <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="polyklin-wave-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#075985" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="polyklin-bldg-grad" x1="290" y1="20" x2="350" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="0.6" stopColor="#0369A1" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="polyklin-coil-grad" x1="250" y1="35" x2="285" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ambient cyan wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#polyklin-wave-bg)"
      />

      {/* Commercial HVAC Rooftop Plant & Heat Exchanger System */}

      {/* Heat Exchanger Coil Unit / Condenser Bank */}
      <rect x="254" y="38" width="28" height="36" rx="3" fill="url(#polyklin-coil-grad)" opacity="0.88" />
      {/* Precision Micro-Fin Slits */}
      <line x1="259" y1="42" x2="259" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="264" y1="42" x2="264" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="269" y1="42" x2="269" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="274" y1="42" x2="274" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />

      {/* Main Rooftop Air Handling Unit (AHU) Cabinet */}
      <rect x="290" y="26" width="56" height="48" rx="4" fill="url(#polyklin-bldg-grad)" opacity="0.9" />

      {/* AHU Intake Louvers / Air Grille */}
      <line x1="296" y1="34" x2="340" y2="34" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="40" x2="340" y2="40" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="46" x2="340" y2="46" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="52" x2="340" y2="52" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="58" x2="340" y2="58" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />

      {/* Rooftop Axial Fan Cowl & Exhaust Duct */}
      <path d="M308 26 C308 17 328 17 328 26 Z" fill="#0369A1" />
      <ellipse cx="318" cy="22" rx="7" ry="2.5" fill="#BAE6FD" opacity="0.8" />
      <line x1="318" y1="16" x2="318" y2="8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />

      {/* Laminar Aerodynamic Airflow Streamlines flowing across the card */}
      <path
        d="M228 44 C255 38 275 48 304 42"
        stroke="#BAE6FD"
        strokeWidth="1.6"
        strokeDasharray="4 2.5"
        opacity="0.8"
      />
      <path
        d="M215 54 C245 50 268 58 296 52"
        stroke="#38BDF8"
        strokeWidth="1.4"
        strokeDasharray="3 2"
        opacity="0.7"
      />

      {/* Main Flowing Cooling Wave merging across the base */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#polyklin-wave-fg)"
      />

      {/* Cool Refrigeration Sub-surface Flow Lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.7"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="decor-flow-line"
        opacity="0.5"
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

const flagshipCards: Array<{
  slug: string;
  name: string;
  category: string;
  theme: "amber" | "emerald" | "cyan";
  description: string;
  tags: string[];
  linkText: string;
  href: string;
  icon: typeof ShieldCheck;
}> = [
  {
    slug: "corosil",
    name: "COROSIL",
    category: "Corrosion control · Rust converter",
    theme: "amber",
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
    theme: "emerald",
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
    theme: "cyan",
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

      {/* 3. FLAGSHIP SPECIALTY PRODUCTS - DISTINCT COLOR IDENTITIES */}
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
                <article
                  className={`industrial-approach-card specialty-card-${card.theme}`}
                  key={card.slug}
                >
                  <div className="industrial-approach-card-inner">
                    <div className={`industrial-approach-icon-box specialty-icon-${card.theme}`}>
                      <Icon size={26} className="industrial-approach-svg" />
                    </div>
                    <div className="industrial-approach-content">
                      <span className={`specialty-card-category specialty-category-${card.theme}`}>
                        {card.category}
                      </span>
                      <h3 className="industrial-approach-card-title">{card.name}</h3>
                      <p className="industrial-approach-card-desc">
                        {card.description}
                      </p>
                      <div
                        className={`industrial-approach-tags specialty-tags-${card.theme}`}
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
                      <Link
                        href={card.href}
                        className={`industrial-approach-card-link specialty-link-${card.theme}`}
                      >
                        <span>{card.linkText}</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="specialty-card-decor-wrap" aria-hidden="true">
                    {card.slug === "corosil" && <CorosilIndustrialDecor />}
                    {card.slug === "polydor-ws" && <PolydorWsEnvironmentalDecor />}
                    {card.slug === "polyklin" && <PolyklinHvacDecor />}
                  </div>
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
