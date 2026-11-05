import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Droplets,
  FileText,
  Home,
  Info,
  Layers,
  Paintbrush,
  Play,
  ShieldAlert,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  findSpecialtyProduct,
  polyklinEquipment,
  polyklinMethod,
} from "@/data/specialtyProducts";
import PolyklinHeroVisual from "./PolyklinHeroVisual";
import "./polyklin.css";

/** Single constant for application video source - swap here when custom video is available */
const APPLICATION_VIDEO_SRC = "/images/specialty/polydore-application.mp4";

export const metadata: Metadata = {
  title: "POLYKLIN | AHU & FCU Coil Cleaner | PolyTreat Chemicals",
  description:
    "POLYKLIN, PolyTreat's AHU and FCU coil cleaning compound: the equipment it serves, the method of application, pack sizes and published product data.",
};

const polyklinHallmarkFeatures = [
  {
    icon: Snowflake,
    title: "Specialised HVAC Coil Cleaning",
    desc: "A cleaning compound engineered specifically for contaminated evaporator, condenser, and air-conditioning coil surfaces.",
  },
  {
    icon: Sparkles,
    title: "Deposit & Tarnish Removal",
    desc: "Formulated for removing stubborn dirt, grime, grease, and tarnish that collect across delicate heat-exchange fins.",
  },
  {
    icon: Droplets,
    title: "Spray-and-Rinse Method",
    desc: "Straightforward 1:1 water dilution with a 5 to 10 minute rinse, plus a dip-soak option for small window units.",
  },
  {
    icon: Layers,
    title: "Contractor Pack Sizing",
    desc: "Supplied in heavy-duty 35 kg, 50 kg, and 200 kg polycarboys for professional HVAC maintenance contractors.",
  },
];

const problemChecklistCol1 = [
  "Dirt and atmospheric deposits reduce airflow across evaporator and condenser coils.",
  "Fouled coil surfaces impair thermal conductivity, increasing compressor load and energy draw.",
  "POLYKLIN penetrates and loosens stubborn grime, oxidation, and tarnish from coil fins.",
];

const problemChecklistCol2 = [
  "Simple 1:1 dilution ratio with water for mechanical pump or chemical sprayer application.",
  "Fast-acting dwell time: cleans thoroughly in 5 to 10 minutes before clean water rinse.",
  "Safe for AHUs, FCUs, split systems, package units, and window air-conditioning coils.",
];

const polyklinProcessSteps = [
  {
    title: "Mix Solution",
    subtitle: "1:1 with clean water",
    text: "Mix one part POLYKLIN with one part water.",
    icon: Droplets,
  },
  {
    title: "Spray Coils",
    subtitle: "Mechanical or chemical sprayer",
    text: "Spray on the dirty surface with a mechanical pump or a chemical sprayer.",
    icon: Paintbrush,
  },
  {
    title: "Rinse Thoroughly",
    subtitle: "5 to 10 minute dwell",
    text: "Rinse thoroughly with water after five to ten minutes.",
    icon: Check,
  },
  {
    title: "Dip Soak Option",
    subtitle: "Small window units",
    text: "Window units can be cleaned by dipping into a 1:1 solution for ten to fifteen minutes.",
    icon: Layers,
  },
];

const polyklinSpecifications = [
  { label: "Product type", value: "AHU / FCU coil cleaning compound" },
  { label: "Appearance", value: "Light blue liquid" },
  { label: "pH", value: "2 to 4" },
  { label: "Odour", value: "Mild pungent" },
  { label: "Specific gravity", value: "1.1 to 1.15" },
  { label: "Packing", value: "35 kg, 50 kg and 200 kg polycarboys" },
  { label: "Application method", value: "Spray-and-rinse (1:1 with water) or dip soak" },
  { label: "Dwell time", value: "5 to 10 minutes rinse; 10 to 15 minutes window dip" },
  { label: "Primary equipment", value: "Evaporator & condenser coils, AHU & FCU units" },
  { label: "Target users", value: "HVAC maintenance contractors & facility teams" },
];

export default function PolyklinPage() {
  const product = findSpecialtyProduct("polyklin");

  if (!product) return null;

  return (
    <main className="polyklin-detail-page">
      {/* 1. HERO SECTION */}
      <section className="polyklin-hero" aria-labelledby="polyklin-hero-title">
        {/* Soft Ambient Hero Glow */}
        <div className="polyklin-hero-bg-glow" aria-hidden="true" />

        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="polyklin-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="polyklin-breadcrumb-item">
              <Home size={13} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="polyklin-breadcrumb-separator" aria-hidden="true" />
            <Link href="/specialty" className="polyklin-breadcrumb-item">
              Specialty products
            </Link>
            <ChevronRight size={12} className="polyklin-breadcrumb-separator" aria-hidden="true" />
            <span className="polyklin-breadcrumb-current" aria-current="page">
              POLYKLIN
            </span>
          </nav>

          <div className="polyklin-hero-layout">
            <div className="polyklin-hero-copy">
              <div className="polyklin-eyebrow">
                <Snowflake size={16} aria-hidden="true" />
                <span>Specialty Products · HVAC Coil Care</span>
              </div>

              <h1 id="polyklin-hero-title" className="polyklin-title">
                POLYKLIN
              </h1>
              <p className="polyklin-subtitle">
                Coil cleaning for air-conditioning equipment.
              </p>

              <p className="polyklin-desc">
                POLYKLIN is a cleaning compound for contaminated evaporator, condenser and air-conditioning coils.
                The product literature describes it as a cleaning agent for removing the dirt, grime and tarnish that
                collect on coil surfaces, and it is aimed at HVAC maintenance contractors and facility teams.
              </p>

              <div className="polyklin-hero-actions">
                <Link href="/contact#contact-form" className="btn btn-polyklin-primary">
                  <span>Enquire about POLYKLIN</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href="#polyklin-video-demo" className="btn btn-polyklin-video">
                  <Play size={14} fill="currentColor" />
                  <span>Watch Application</span>
                </a>
                <Link href="/specialty" className="btn btn-polyklin-secondary">
                  <span>All specialty products</span>
                </Link>
              </div>
            </div>

            {/* Specialty-Style Hero Visual Showcase with Floating Stats Card */}
            <PolyklinHeroVisual />
          </div>

          {/* Dedicated Hallmark Features Section with Lean Hover Animations */}
          <div className="polyklin-features-section" aria-label="POLYKLIN Key Features">
            <div className="polyklin-features-grid">
              {polyklinHallmarkFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="polyklin-feature-card">
                    <div className="polyklin-feat-icon-box" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div className="polyklin-feat-content">
                      <h3 className="polyklin-feat-title">{feat.title}</h3>
                      <p className="polyklin-feat-desc">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Facts Pill Strip */}
          <div className="polyklin-facts-strip">
            {product.facts.map((fact) => (
              <div className="polyklin-fact-item" key={fact.label}>
                <span className="polyklin-fact-label">{fact.label}</span>
                <span className="polyklin-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hero Wave */}
        <div className="polyklin-hero-wave-wrap" aria-hidden="true">
          <svg
            className="polyklin-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="polyklin-hero-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#D5E8F3" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="polyklin-hero-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0369A1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="polyklin-hero-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
                <stop offset="35%" stopColor="#0369A1" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F8FBFE" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="polyklin-hero-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#polyklin-hero-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#polyklin-hero-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#polyklin-hero-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#polyklin-hero-wave-shine)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. PROBLEMS & RESTORATION MECHANISM */}
      <section
        className="polyklin-problems-section"
        id="coil-challenges"
        aria-labelledby="coil-challenges-title"
      >
        <div className="container">
          <div className="polyklin-problems-layout">
            <div className="polyklin-problems-visual-col">
              <div className="polyklin-chemistry-card">
                <span className="polyklin-card-kicker">Coil Maintenance Mechanism</span>
                <h3 className="polyklin-chemistry-title">Restoring Thermal Heat Transfer &amp; Airflow</h3>
                <div className="polyklin-reaction-flow">
                  <div className="polyklin-reaction-step">
                    <span className="polyklin-step-tag is-unstable">Restricted Airflow</span>
                    <span className="polyklin-formula">Dirt · Grime · Tarnish</span>
                    <span className="polyklin-formula-desc">Surface deposits on delicate cooling fins choke airflow and reduce heat transfer</span>
                  </div>
                  <div className="polyklin-reaction-arrow" aria-hidden="true">
                    <span>+ POLYKLIN (1:1)</span>
                    <ArrowRight size={18} />
                  </div>
                  <div className="polyklin-reaction-step is-passivated">
                    <span className="polyklin-step-tag is-stable">Restored Surface</span>
                    <span className="polyklin-formula">Clean Heat Exchange</span>
                    <span className="polyklin-formula-desc">Rinsed clean after 5–10 minutes to maintain optimal heat absorption and release</span>
                  </div>
                </div>
                <div className="polyklin-chemistry-note">
                  <Info size={14} aria-hidden="true" />
                  <span>An air conditioner moves heat using coils. Routine coil cleaning is part of routine HVAC maintenance.</span>
                </div>
              </div>
            </div>

            <div className="polyklin-problems-content-col">
              <div className="polyklin-section-eyebrow">
                <span className="polyklin-eyebrow-bar" aria-hidden="true" />
                <span>Problem &amp; Solution</span>
              </div>
              <h2 id="coil-challenges-title" className="polyklin-section-title">
                Dirt and deposits on coil surfaces choke HVAC performance.
              </h2>
              <p className="polyklin-section-sub">
                An air conditioner moves heat using coils. Over operating cycles, atmospheric dirt, grease and tarnish
                accumulate on evaporator and condenser surfaces, restricting air passage and diminishing cooling capacity.
                POLYKLIN is engineered to remove these deposits through a simple spray-and-rinse process.
              </p>

              <div className="polyklin-checklist-grid">
                <ul className="polyklin-checklist-col">
                  {problemChecklistCol1.map((item) => (
                    <li key={item}>
                      <span className="polyklin-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="polyklin-checklist-col">
                  {problemChecklistCol2.map((item) => (
                    <li key={item}>
                      <span className="polyklin-check-icon" aria-hidden="true">
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

      {/* 3. APPLICATION METHOD & PROTOCOL */}
      <section className="polyklin-steps-section" id="application-method" aria-labelledby="polyklin-steps-title">
        <div className="container">
          <div className="polyklin-section-header">
            <span className="polyklin-kicker">Method of application</span>
            <h2 id="polyklin-steps-title">Spray, let it work, rinse it off.</h2>
            <p>
              Directions as published in our POLYKLIN literature. Confirm the current product sheet and the
              equipment maker&apos;s guidance before treating a coil.
            </p>
          </div>

          <div className="polyklin-steps-grid">
            {polyklinProcessSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div className="polyklin-step-card" key={step.title}>
                  <div className="polyklin-step-card-header">
                    <span className="polyklin-step-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="polyklin-step-icon-wrap">
                      <StepIcon size={20} />
                    </span>
                  </div>
                  <h3 className="polyklin-step-title">{step.title}</h3>
                  <span className="polyklin-step-subtitle">{step.subtitle}</span>
                  <p className="polyklin-step-desc">{step.text}</p>
                </div>
              );
            })}
          </div>

          {/* Dedicated "Application in Action" Video Showcase */}
          <div className="polyklin-video-showcase-wrap" id="polyklin-video-demo">
            <div className="polyklin-video-grid">
              {/* Left Col: High-Definition Video Player Card */}
              <div className="polyklin-video-player-card">
                <div className="polyklin-video-header">
                  <div className="polyklin-video-pill">
                    <span className="polyklin-video-dot" aria-hidden="true" />
                    <Play size={13} fill="currentColor" />
                    <span>Live Application Footage</span>
                  </div>
                  <span className="polyklin-video-res-badge">HD · 1080p</span>
                </div>
                <div className="polyklin-video-frame">
                  <video
                    className="polyklin-application-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/specialty/polyklin-hvac-coils.jpg"
                  >
                    <source src={APPLICATION_VIDEO_SRC} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="polyklin-video-caption">
                  <Snowflake size={16} className="polyklin-video-caption-icon" />
                  <span>Field demonstration of chemical coil cleaning and spray application across HVAC equipment.</span>
                </div>
              </div>

              {/* Right Col: Field Application Guidelines */}
              <div className="polyklin-video-insights">
                <span className="polyklin-kicker">Field Guidelines</span>
                <h3 className="polyklin-video-insights-title">Best practices for HVAC coil maintenance</h3>
                <p className="polyklin-video-insights-desc">
                  Directions as published in our POLYKLIN literature. Confirm the current product sheet and the
                  equipment maker&apos;s guidance before treating a coil.
                </p>

                <div className="polyklin-video-tips-list">
                  <div className="polyklin-video-tip-item">
                    <div className="polyklin-tip-icon-box">
                      <Droplets size={18} />
                    </div>
                    <div>
                      <h4 className="polyklin-tip-title">1:1 Working Dilution</h4>
                      <p className="polyklin-tip-desc">
                        Mix one part POLYKLIN with one part water before application with a mechanical pump or chemical sprayer.
                      </p>
                    </div>
                  </div>

                  <div className="polyklin-video-tip-item">
                    <div className="polyklin-tip-icon-box">
                      <Clock size={18} />
                    </div>
                    <div>
                      <h4 className="polyklin-tip-title">5–10 Minute Dwell &amp; Rinse</h4>
                      <p className="polyklin-tip-desc">
                        Spray on the dirty surface and allow the solution to loosen grime, then rinse thoroughly with water after five to ten minutes.
                      </p>
                    </div>
                  </div>

                  <div className="polyklin-video-tip-item">
                    <div className="polyklin-tip-icon-box">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h4 className="polyklin-tip-title">Window Unit Immersion</h4>
                      <p className="polyklin-tip-desc">
                        Small window air-conditioning units can be cleaned by dipping into a 1:1 solution for ten to fifteen minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE EQUIPMENT SERVED */}
      <section className="polyklin-equipment-section" id="equipment-served" aria-labelledby="polyklin-equipment-title">
        <div className="container">
          <div className="polyklin-section-header">
            <span className="polyklin-kicker">The equipment</span>
            <h2 id="polyklin-equipment-title">What a coil is, and why it needs care.</h2>
            <p>
              An air conditioner moves heat using coils. Dirt and deposits on a coil surface reduce airflow and heat
              transfer, which is why coil cleaning is part of routine HVAC maintenance.
            </p>
          </div>

          <div className="polyklin-equipment-grid">
            {polyklinEquipment.map((item) => (
              <div className="polyklin-equipment-card" key={item.title}>
                <div className="polyklin-equipment-header">
                  <span className="polyklin-equipment-dot" aria-hidden="true" />
                  <h3 className="polyklin-equipment-title">{item.title}</h3>
                </div>
                <p className="polyklin-equipment-desc">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHYSICAL DATA & PUBLISHED SPECIFICATIONS */}
      <section className="polyklin-specs-section" id="technical-data" aria-labelledby="polyklin-specs-title">
        <div className="container">
          <div className="polyklin-specs-layout">
            <div className="polyklin-specs-intro">
              <span className="polyklin-kicker">Physical Data</span>
              <h2 id="polyklin-specs-title">Published product specifications.</h2>
              <p>
                These figures are as published in PolyTreat&apos;s official POLYKLIN coil-cleaner literature. Directions
                and physical parameters are as published there. For specific engineering consultations, contact our technical team.
              </p>

              <div className="polyklin-specs-highlights">
                <div className="polyklin-highlight-box">
                  <Clock size={20} className="polyklin-highlight-icon" />
                  <div>
                    <span className="polyklin-hl-title">Dwell Time</span>
                    <span className="polyklin-hl-desc">5 to 10 minutes dwell before thorough water rinse</span>
                  </div>
                </div>
                <div className="polyklin-highlight-box">
                  <Droplets size={20} className="polyklin-highlight-icon" />
                  <div>
                    <span className="polyklin-hl-title">Dilution Ratio</span>
                    <span className="polyklin-hl-desc">Mix 1 part POLYKLIN with 1 part clean water</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="polyklin-specs-table-wrap">
              <table className="polyklin-specs-table">
                <thead>
                  <tr>
                    <th>Property / Parameter</th>
                    <th>Specification Value</th>
                  </tr>
                </thead>
                <tbody>
                  {polyklinSpecifications.map((spec) => (
                    <tr key={spec.label}>
                      <td className="polyklin-spec-label">{spec.label}</td>
                      <td className="polyklin-spec-val">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS & SURFACES */}
      <section className="polyklin-apps-section" id="applications" aria-labelledby="polyklin-apps-title">
        <div className="container">
          <div className="polyklin-apps-layout">
            <div className="polyklin-apps-intro">
              <span className="polyklin-kicker">Target Substrates</span>
              <h2 id="polyklin-apps-title">Applications and surfaces.</h2>
              <p>
                POLYKLIN is engineered for professional HVAC maintenance contractors and facility engineering teams
                across commercial, industrial, and institutional climate control installations.
              </p>
            </div>

            <div className="polyklin-apps-grid">
              {product.applications.map((app) => (
                <div className="polyklin-app-card" key={app}>
                  <Check size={18} className="polyklin-app-check" aria-hidden="true" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HANDLING & PRECAUTIONS */}
      <section className="polyklin-handling-section" id="handling" aria-labelledby="polyklin-handling-title">
        <div className="container">
          <div className="polyklin-handling-grid">
            <div className="polyklin-handling-card">
              <h3 id="polyklin-handling-title">
                <ShieldAlert size={18} className="polyklin-caution-icon" aria-hidden="true" />
                <span>Handling Guidance &amp; Safety</span>
              </h3>
              <ul className="polyklin-caution-list">
                {product.cautions.map((caution) => (
                  <li key={caution}>{caution}</li>
                ))}
              </ul>
            </div>

            <div className="polyklin-handling-card is-note">
              <h3>
                <FileText size={18} className="polyklin-info-icon" aria-hidden="true" />
                <span>About These Details &amp; Safety Review</span>
              </h3>
              <p>{product.sourceNote}</p>
              <p>
                Safety information is provided in the current Safety Data Sheet.
                Request it from our team, along with the current technical data
                sheet for your application.
              </p>
              <Link href="/contact#contact-form" className="polyklin-sds-link">
                <span>Request Safety Data Sheet &amp; TDS</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA ENQUIRY BAND */}
      <section
        className="industries-contact-band"
        id="polyklin-cta"
        aria-labelledby="polyklin-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">
                Technical Consultation &amp; Support
              </span>
              <h2 id="polyklin-cta-title">
                Need technical advice for your <span className="industries-highlight">HVAC coil cleaning?</span>
              </h2>
              <p>
                Tell us the system, the surface or the process, and the PolyTreat team
                can help with the right product, dilution guidance, and its current documentation.
              </p>
            </div>
            <div className="industries-contact-action">
              <Link className="btn btn-industries-primary" href="/contact#contact-form">
                <span>Contact technical team</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
