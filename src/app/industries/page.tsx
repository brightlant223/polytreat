import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";
import type { Metadata } from "next";
import Image from "next/image";
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

function ProcessManufacturingWaveDecor() {
  return (
    <svg
      className="industries-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="proc-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.28" />
          <stop offset="0.65" stopColor="#0879E8" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="proc-wave-fg" x1="0" y1="60" x2="360" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#0879E8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="proc-splash-grad" x1="250" y1="10" x2="360" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#0879E8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="proc-drop-grad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#0879E8" />
        </linearGradient>
      </defs>

      {/* Background ambient wave */}
      <path
        d="M0 62 C55 50 120 72 185 56 C240 42 280 52 360 38 V100 H0 Z"
        fill="url(#proc-wave-bg)"
      />

      {/* Main flowing wave connecting into the splash on the right */}
      <path
        d="M0 72 C55 60 120 76 180 66 C220 59 242 64 265 52 C275 46 284 38 294 40 C306 43 315 54 335 48 C346 44 354 46 360 48 V100 H0 Z"
        fill="url(#proc-wave-fg)"
      />

      {/* Rising sculpted water splash crown connected directly to the flow */}
      <path
        d="M252 66 C262 50 270 32 279 24 C283 20 287 24 286 31 C284 40 293 26 303 15 C306 11 310 14 309 22 C306 34 318 26 326 20 C330 17 334 20 332 26 C328 38 340 34 350 31 C355 29 360 33 360 40 C360 64 342 74 310 74 C282 74 265 71 252 66 Z"
        fill="url(#proc-splash-grad)"
        opacity="0.82"
      />

      {/* Splash inner light highlight */}
      <path
        d="M270 56 C278 44 287 33 293 27 C296 35 301 26 309 31 C315 35 324 33 334 38 C339 41 336 49 328 54 C314 62 290 62 270 56 Z"
        fill="#E0F2FE"
        opacity="0.45"
      />

      {/* Fluid droplets bursting from the splash crest */}
      <circle cx="278" cy="14" r="3.2" fill="url(#proc-drop-grad)" opacity="0.9" />
      <circle cx="295" cy="8" r="4" fill="url(#proc-drop-grad)" opacity="0.95" />
      <circle cx="308" cy="6" r="2.5" fill="#38BDF8" opacity="0.9" />
      <circle cx="325" cy="11" r="3.5" fill="url(#proc-drop-grad)" opacity="0.9" />
      <circle cx="342" cy="18" r="3" fill="url(#proc-drop-grad)" opacity="0.85" />
      <circle cx="355" cy="17" r="2.2" fill="#7DD3FC" opacity="0.8" />
      <circle cx="264" cy="32" r="2.2" fill="#38BDF8" opacity="0.75" />

      {/* Crisp flow accent curves */}
      <path
        d="M175 72 C210 65 240 54 268 40"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M205 80 C240 73 270 58 305 45"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function UtilitiesInfrastructureWaveDecor() {
  return (
    <svg
      className="industries-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="util-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#0879E8" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="util-wave-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#0879E8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="util-bldg-grad" x1="310" y1="15" x2="350" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0879E8" />
          <stop offset="0.6" stopColor="#0284C7" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="util-silo-grad" x1="285" y1="30" x2="315" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ambient wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#util-wave-bg)"
      />

      {/* Infrastructure Skyline Rising directly out of the flow */}

      {/* Silo / Industrial facility tower */}
      <rect x="286" y="38" width="22" height="38" rx="4" fill="url(#util-silo-grad)" opacity="0.8" />
      <line x1="286" y1="48" x2="308" y2="48" stroke="#BAE6FD" strokeWidth="1" opacity="0.6" />
      <line x1="286" y1="58" x2="308" y2="58" stroke="#BAE6FD" strokeWidth="1" opacity="0.6" />

      {/* Modern High-rise Utility & Engineering Tower */}
      <path
        d="M312 24 L328 16 L344 24 V75 H312 Z"
        fill="url(#util-bldg-grad)"
        opacity="0.88"
      />
      {/* Tower communications spire */}
      <line x1="328" y1="8" x2="328" y2="16" stroke="#0879E8" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="328" cy="8" r="1.8" fill="#38BDF8" />

      {/* Window grid matrix on main tower */}
      <rect x="317" y="27" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="326" y="27" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="334" y="27" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />

      <rect x="317" y="37" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="326" y="37" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="334" y="37" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />

      <rect x="317" y="47" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="326" y="47" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="334" y="47" width="5" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />

      {/* Construction Tower Crane anchored in the flow */}
      {/* Crane Mast (Vertical Truss) */}
      <line x1="246" y1="18" x2="246" y2="72" stroke="#0879E8" strokeWidth="1.6" />
      <line x1="252" y1="18" x2="252" y2="72" stroke="#0879E8" strokeWidth="1.6" />
      {/* Mast Diagonal X-Braces */}
      <line x1="246" y1="26" x2="252" y2="34" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
      <line x1="252" y1="26" x2="246" y2="34" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
      <line x1="246" y1="38" x2="252" y2="46" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
      <line x1="252" y1="38" x2="246" y2="46" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
      <line x1="246" y1="50" x2="252" y2="58" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />
      <line x1="252" y1="50" x2="246" y2="58" stroke="#38BDF8" strokeWidth="1" opacity="0.7" />

      {/* Crane Jib & Counter-Jib */}
      <line x1="230" y1="18" x2="294" y2="18" stroke="#0879E8" strokeWidth="2" strokeLinecap="round" />
      {/* Counterweight Block */}
      <rect x="228" y="15" width="7" height="7" rx="1.5" fill="#0369A1" />
      {/* Crane Apex Tower Peak */}
      <path d="M245 18 L249 7 L253 18" stroke="#0879E8" strokeWidth="1.5" fill="none" />
      {/* Crane Tension Cables */}
      <line x1="249" y1="7" x2="276" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
      <line x1="249" y1="7" x2="231" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.8" />
      {/* Hoist Trolley & Cable */}
      <rect x="272" y="17" width="5" height="3" fill="#0284C7" />
      <line x1="274.5" y1="20" x2="274.5" y2="36" stroke="#0879E8" strokeWidth="1" strokeDasharray="2 1.5" />
      <circle cx="274.5" cy="37" r="1.5" fill="#0879E8" />

      {/* Main Flowing Wave merging directly across the infrastructure base */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#util-wave-fg)"
      />

      {/* Water Treatment Sub-surface Flow Lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function FacilitiesInstitutionsWaveDecor() {
  return (
    <svg
      className="industries-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="fac-wave-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#0879E8" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="fac-wave-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#0879E8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="fac-campus-grad" x1="280" y1="18" x2="350" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0879E8" />
          <stop offset="0.6" stopColor="#0284C7" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="fac-pavilion-grad" x1="230" y1="35" x2="275" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Background ambient wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#fac-wave-bg)"
      />

      {/* Modern Institutional Campus Complex rising out of flow */}

      {/* Secondary research pavilion wing */}
      <path
        d="M234 44 H272 V74 H234 Z"
        fill="url(#fac-pavilion-grad)"
        opacity="0.85"
      />
      {/* Louver / Ribbon window slats on research pavilion */}
      <line x1="238" y1="51" x2="268" y2="51" stroke="#E0F2FE" strokeWidth="1.5" opacity="0.8" />
      <line x1="238" y1="58" x2="268" y2="58" stroke="#E0F2FE" strokeWidth="1.5" opacity="0.8" />
      <line x1="238" y1="65" x2="268" y2="65" stroke="#E0F2FE" strokeWidth="1.5" opacity="0.8" />

      {/* Main Institutional Complex / Medical & Academic Facility */}
      <path
        d="M276 34 H346 V76 H276 Z"
        fill="url(#fac-campus-grad)"
        opacity="0.9"
      />
      {/* Center elevated tower tier */}
      <path
        d="M294 22 H328 V34 H294 Z"
        fill="#0369A1"
        opacity="0.95"
      />
      {/* Modern curved architectural roof canopy */}
      <path
        d="M272 22 C295 16 327 16 350 22"
        stroke="#38BDF8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Campus facade window matrix (clean architectural rhythm) */}
      <rect x="282" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="293" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="304" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="315" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="326" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="336" y="39" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />

      <rect x="282" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="293" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="304" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="315" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="326" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />
      <rect x="336" y="49" width="6" height="7" rx="1" fill="#BAE6FD" opacity="0.8" />

      {/* Main Entrance Colonnade / Portico Arch */}
      <rect x="306" y="60" width="10" height="15" rx="2" fill="#E0F2FE" opacity="0.85" />

      {/* Main flowing wave connecting along the campus foundation */}
      <path
        d="M0 72 C60 62 130 80 195 70 C240 63 275 66 360 58 V100 H0 Z"
        fill="url(#fac-wave-fg)"
      />

      {/* Promenade waterfront flow lines */}
      <path
        d="M180 78 C225 72 265 76 308 70 C332 67 350 70 360 67"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M205 86 C245 80 285 83 330 78"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <main className="industries-page industries-reference-layout">
      {/* Hero Section */}
      <section className="industries-page-hero" aria-labelledby="industries-page-title">
        {/* Ambient wave graphics and left water splash */}
        <div className="industries-hero-wave-bottom" aria-hidden="true" />

        {/* Full-width Right Industrial Plant Portal with Circular Rings */}
        <div className="industries-hero-bg-visual" aria-hidden="true">
          <div className="industries-hero-ring industries-hero-ring-outer" />
          <div className="industries-hero-ring industries-hero-ring-mid" />
          <div className="industries-hero-plant-portal">
            <Image
              src="/images/industries/industrial-water-facility.webp"
              alt=""
              fill
              priority
              sizes="100vw"
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
                <Factory size={14} strokeWidth={2.5} aria-hidden="true" />
                <span>Industries &amp; applications</span>
              </span>

              <h1 id="industries-page-title">
                Chemistry for plants,{" "}<br className="industries-hero-br-desktop" />
                infrastructure, and{" "}<br className="industries-hero-br-desktop" />
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
                <Image
                  src="/images/industries/industrial-water-facility.webp"
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="industries-hero-mobile-plant-img"
                />
              </div>

              <div className="industries-hero-floating-cards">
                {/* Floating Image Card 1: Industrial water systems */}
                <div className="industries-hero-card industries-hero-card-1">
                  <div className="industries-hero-card-media">
                    <Image
                      src="/images/industries/water-systems-pipes.webp"
                      alt="Industrial water pipelines, manifolds, and valves"
                      fill
                      sizes="(max-width: 900px) 46vw, 255px"
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
                    <Image
                      src="/images/industries/facility-institutional-care.webp"
                      alt="Professional facility and institutional sanitation care"
                      fill
                      sizes="(max-width: 900px) 46vw, 255px"
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

                  {/* Bottom wave & connected illustration decoration */}
                  <div className="industries-card-decor-wrap" aria-hidden="true">
                    {id === "process-manufacturing" && <ProcessManufacturingWaveDecor />}
                    {id === "utilities-infrastructure" && <UtilitiesInfrastructureWaveDecor />}
                    {id === "facilities-institutions" && <FacilitiesInstitutionsWaveDecor />}
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