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

function CoolingApproachDecor() {
  return (
    <svg
      className="industrial-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="cool-appr-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.32" />
          <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="cool-appr-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#075985" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="cool-bldg-grad" x1="290" y1="20" x2="350" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="0.6" stopColor="#0369A1" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="cool-fin-grad" x1="250" y1="35" x2="285" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Ambient background cooling wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#cool-appr-bg)"
      />

      {/* Industrial Induced Draft Cooling Tower & Heat Exchange Pack */}
      <rect x="254" y="38" width="28" height="36" rx="3" fill="url(#cool-fin-grad)" opacity="0.88" />
      <line x1="259" y1="42" x2="259" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="264" y1="42" x2="264" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="269" y1="42" x2="269" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />
      <line x1="274" y1="42" x2="274" y2="70" stroke="#BAE6FD" strokeWidth="1" opacity="0.7" />

      {/* Main Rooftop Cooling Tower Body */}
      <rect x="290" y="26" width="56" height="48" rx="4" fill="url(#cool-bldg-grad)" opacity="0.9" />
      {/* Air intake louver grilles */}
      <line x1="296" y1="34" x2="340" y2="34" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="40" x2="340" y2="40" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="46" x2="340" y2="46" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="52" x2="340" y2="52" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      <line x1="296" y1="58" x2="340" y2="58" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />

      {/* Axial Fan Shroud Cowl on Tower Top */}
      <path d="M308 26 C308 17 328 17 328 26 Z" fill="#0369A1" />
      <ellipse cx="318" cy="22" rx="7" ry="2.5" fill="#BAE6FD" opacity="0.8" />
      <line x1="318" y1="16" x2="318" y2="8" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />



      {/* Main Flowing Cooling Wave */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#cool-appr-fg)"
      />

      {/* Sub-surface cooling flow lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function BoilerApproachDecor() {
  return (
    <svg
      className="industrial-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="boiler-appr-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.25" />
          <stop offset="0.6" stopColor="#0369A1" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0C4A6E" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="boiler-appr-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.60" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#082F49" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="boiler-house-grad" x1="280" y1="25" x2="340" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="0.6" stopColor="#0369A1" />
          <stop offset="1" stopColor="#082F49" />
        </linearGradient>
        <linearGradient id="boiler-drum-grad" x1="250" y1="30" x2="285" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Ambient background thermal wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#boiler-appr-bg)"
      />

      {/* Industrial Steam Boiler Drum & Plant House */}
      <circle cx="264" cy="46" r="14" fill="url(#boiler-drum-grad)" opacity="0.9" />
      <line x1="256" y1="46" x2="272" y2="46" stroke="#BAE6FD" strokeWidth="1.2" opacity="0.75" />
      {/* Saddle support legs */}
      <line x1="255" y1="58" x2="252" y2="72" stroke="#0369A1" strokeWidth="1.8" />
      <line x1="273" y1="58" x2="276" y2="72" stroke="#0369A1" strokeWidth="1.8" />

      {/* Steam Header Pipe bridging drum to boiler house */}
      <line x1="264" y1="32" x2="284" y2="32" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      <line x1="284" y1="32" x2="284" y2="40" stroke="#38BDF8" strokeWidth="2" />

      {/* Main Boiler Plant Building */}
      <rect x="284" y="32" width="46" height="42" rx="4" fill="url(#boiler-house-grad)" opacity="0.9" />
      {/* Pressure inspection windows */}
      <rect x="290" y="38" width="8" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="302" y="38" width="8" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />
      <rect x="314" y="38" width="8" height="6" rx="1" fill="#BAE6FD" opacity="0.75" />

      {/* High Industrial Refractory Stack */}
      <rect x="334" y="14" width="14" height="60" rx="2" fill="url(#boiler-house-grad)" opacity="0.92" />
      <line x1="333" y1="18" x2="349" y2="18" stroke="#38BDF8" strokeWidth="1.5" />
      {/* Clean steam vapor dispersal */}
      <path
        d="M341 12 C345 6 352 7 356 12"
        stroke="#BAE6FD"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        opacity="0.8"
      />



      {/* Main Flowing Wave */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#boiler-appr-fg)"
      />

      {/* Steam & condensate flow lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function RoApproachDecor() {
  return (
    <svg
      className="industrial-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="ro-appr-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.30" />
          <stop offset="0.6" stopColor="#0284C7" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="ro-appr-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0F2FE" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="#0284C7" stopOpacity="0.78" />
          <stop offset="1" stopColor="#075985" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="ro-tube-grad" x1="270" y1="30" x2="350" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0284C7" />
          <stop offset="0.6" stopColor="#0369A1" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
        <linearGradient id="ro-pump-grad" x1="240" y1="40" x2="265" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Ambient background high-purity wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#ro-appr-bg)"
      />

      {/* High-Pressure Booster Pump Assembly */}
      <rect x="246" y="44" width="18" height="26" rx="3" fill="url(#ro-pump-grad)" opacity="0.88" />
      <circle cx="255" cy="52" r="4" fill="#BAE6FD" opacity="0.8" />
      {/* High-pressure feed manifold */}
      <line x1="264" y1="48" x2="272" y2="35" stroke="#38BDF8" strokeWidth="1.8" />
      <line x1="264" y1="52" x2="272" y2="48" stroke="#38BDF8" strokeWidth="1.8" />
      <line x1="264" y1="58" x2="272" y2="61" stroke="#38BDF8" strokeWidth="1.8" />

      {/* Horizontal RO Membrane Pressure Vessels (3-Tier Rack) */}
      {/* Tier 1 */}
      <rect x="272" y="30" width="76" height="9" rx="4.5" fill="url(#ro-tube-grad)" opacity="0.9" />
      <line x1="284" y1="30" x2="284" y2="39" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="336" y1="30" x2="336" y2="39" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />

      {/* Tier 2 */}
      <rect x="272" y="43" width="76" height="9" rx="4.5" fill="url(#ro-tube-grad)" opacity="0.9" />
      <line x1="284" y1="43" x2="284" y2="52" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="336" y1="43" x2="336" y2="52" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />

      {/* Tier 3 */}
      <rect x="272" y="56" width="76" height="9" rx="4.5" fill="url(#ro-tube-grad)" opacity="0.9" />
      <line x1="284" y1="56" x2="284" y2="65" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="336" y1="56" x2="336" y2="65" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />

      {/* Vertical rack upright frame */}
      <line x1="282" y1="26" x2="282" y2="72" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />
      <line x1="338" y1="26" x2="338" y2="72" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />

      {/* Permeate collector header pipe */}
      <line x1="348" y1="34" x2="348" y2="61" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />



      {/* Main Flowing Wave */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#ro-appr-fg)"
      />

      {/* High-recovery sub-surface flow lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function EffluentApproachDecor() {
  return (
    <svg
      className="industrial-card-decor-svg"
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="eff-appr-bg" x1="0" y1="50" x2="360" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" stopOpacity="0.28" />
          <stop offset="0.6" stopColor="#0879E8" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="eff-appr-fg" x1="0" y1="65" x2="360" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BAE6FD" stopOpacity="0.6" />
          <stop offset="0.5" stopColor="#0879E8" stopOpacity="0.76" />
          <stop offset="1" stopColor="#0369A1" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="eff-clar-grad" x1="250" y1="40" x2="320" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="eff-tower-grad" x1="320" y1="20" x2="350" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0879E8" />
          <stop offset="0.6" stopColor="#0284C7" />
          <stop offset="1" stopColor="#0C4A6E" />
        </linearGradient>
      </defs>

      {/* Ambient background effluent clarification wave */}
      <path
        d="M0 64 C65 52 135 74 205 60 C250 48 285 56 360 44 V100 H0 Z"
        fill="url(#eff-appr-bg)"
      />

      {/* Industrial Circular Clarifier & Sedimentation Basin */}
      <path d="M256 68 C256 46 316 46 316 68 Z" fill="url(#eff-clar-grad)" opacity="0.88" />
      {/* Central feed well & scraper drive */}
      <rect x="283" y="40" width="6" height="15" rx="1.5" fill="#0C4A6E" />
      {/* Clarifier Rotating Bridge Truss */}
      <line x1="254" y1="48" x2="318" y2="48" stroke="#0879E8" strokeWidth="1.8" />
      <line x1="264" y1="48" x2="268" y2="56" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="308" y1="48" x2="304" y2="56" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />

      {/* Aeration Diffuser Bubbles */}
      <circle cx="272" cy="58" r="1.8" fill="#BAE6FD" opacity="0.85" />
      <circle cx="282" cy="54" r="2.2" fill="#E0F2FE" opacity="0.9" />
      <circle cx="295" cy="56" r="1.8" fill="#BAE6FD" opacity="0.85" />

      {/* Tertiary Bio-Filtration & Polishing Tower */}
      <rect x="322" y="24" width="22" height="52" rx="4" fill="url(#eff-tower-grad)" opacity="0.9" />
      <line x1="326" y1="32" x2="340" y2="32" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="326" y1="38" x2="340" y2="38" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="326" y1="44" x2="340" y2="44" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="326" y1="50" x2="340" y2="50" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />
      <line x1="326" y1="56" x2="340" y2="56" stroke="#BAE6FD" strokeWidth="1" opacity="0.75" />



      {/* Main Flowing Wave */}
      <path
        d="M0 72 C60 62 130 80 195 70 C235 64 265 67 360 60 V100 H0 Z"
        fill="url(#eff-appr-fg)"
      />

      {/* Clean compliance sub-surface flow lines */}
      <path
        d="M170 78 C215 72 250 76 295 68"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M195 86 C235 80 275 82 325 76"
        stroke="#BAE6FD"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
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
                  <div className="industrial-card-decor-wrap" aria-hidden="true">
                    {card.id === "cooling-approach" && <CoolingApproachDecor />}
                    {card.id === "boiler-approach" && <BoilerApproachDecor />}
                    {card.id === "ro-approach" && <RoApproachDecor />}
                    {card.id === "effluent-approach" && <EffluentApproachDecor />}
                  </div>
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
