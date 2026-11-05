import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Droplets,
  FileText,
  FlaskConical,
  Home,
  Info,
  Layers,
  Leaf,
  Play,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";
import {
  findSpecialtyProduct,
  specialtyApplicationGroups,
} from "@/data/specialtyProducts";
import PolydorHeroVisual from "./PolydorHeroVisual";
import "./polydor.css";

export const metadata: Metadata = {
  title: "POLYDOR-WS | Odour Neutraliser | PolyTreat Chemicals",
  description:
    "POLYDOR-WS: Broad-spectrum molecular odour neutraliser that permanently alters malodorous compounds into non-odorous adducts across waste, wastewater, scrubbers, and industrial facilities.",
};

const polydorHallmarkFeatures = [
  {
    icon: Sparkles,
    title: "Molecular Adduct Reaction",
    desc: "Chemically binds with malodorous compounds to permanently transform them into non-odoriferous adducts rather than masking with perfumes.",
  },
  {
    icon: FlaskConical,
    title: "Multi-Compound Reactivity",
    desc: "Active against volatile amines, sulphides, mercaptans, aldehydes, ketones, ammonia, and toxic hydrogen sulphide (H₂S) gas.",
  },
  {
    icon: Droplets,
    title: "High Dilution Efficiency",
    desc: "Highly concentrated formulation engineered for extreme operational economy at dilutions ranging from 1:20 up to 1:1000 with water.",
  },
  {
    icon: ShieldCheck,
    title: "Environmentally Safe & Non-Toxic",
    desc: "Formulated with specialty organic compounds and natural plant extracts, complying fully with EPA environmental safety standards.",
  },
];

const problemChecklistCol1 = [
  "Conventional masking perfumes evaporate quickly, allowing foul odours to resurface.",
  "Decomposing organic waste continuously generates volatile mercaptans, amines, and H₂S gas.",
  "POLYDOR-WS chemically bonds with malodour molecules, altering them into inert adducts.",
];

const problemChecklistCol2 = [
  "High dilution ratio (1:20 to 1:1000) delivers exceptional operational cost-efficiency.",
  "Safe for operational personnel and equipment; aligned with EPA environmental standards.",
  "Rapid neutralization action eliminates foul odors within 2 to 3 hours in ponds and tanks.",
];

const polydorProcessSteps = [
  {
    title: "Direct Tank & Pond Dosing",
    subtitle: "Effluent, wastewater & sludge treatment",
    text: "Dosed directly into effluent treatment plants (ETP), sewage sludge basins, and sugar-processing holding ponds. Eliminates foul odor within 2 to 3 hours.",
    icon: Droplets,
  },
  {
    title: "Atomised Spray & Misting",
    subtitle: "Landfills, dump yards & open facilities",
    text: "Applied via boundary misting lines or mobile fogging cannons at garbage dump sites (standard dosage: 3 tons per 1.5–2 acres) to intercept rising odour plumes.",
    icon: Wind,
  },
  {
    title: "Scrubber & Air Stream Dosing",
    subtitle: "Industrial exhausts & commercial kitchens",
    text: "Added to recirculating water reservoirs in wet scrubbers and fast-food exhaust systems to wash grease and chemical vapours from airstreams before release.",
    icon: Layers,
  },
];

const polydorSpecifications = [
  { label: "Product type", value: "Broad-spectrum chemical odour neutraliser" },
  { label: "Physical form", value: "Water-soluble liquid concentrate" },
  { label: "Action mechanism", value: "Chemical adduct formation (molecular neutralization)" },
  { label: "Active components", value: "Specialty organic compounds & natural fragrant plant extracts" },
  { label: "Target compounds", value: "Amines, sulphides, mercaptans, ammonia, H₂S gas" },
  { label: "Recommended dilution", value: "1:20 to 1:1000 with water based on application" },
  { label: "Environmental status", value: "Environmentally safe, biodegradable, EPA criteria aligned" },
  { label: "Special variant", value: "POLYDOR-D MOS (100% biodegradable botanical mosquito repellent)" },
  { label: "Application scope", value: "Serves over 26 municipal, industrial, commercial & facility applications" },
  { label: "Storage & stability", value: "Stable at ambient temperatures; store in closed containers" },
];

export default function PolydorWsPage() {
  const product = findSpecialtyProduct("polydor-ws");

  if (!product) return null;

  return (
    <main className="polydor-detail-page">
      {/* 1. HERO SECTION */}
      <section className="polydor-hero" aria-labelledby="polydor-hero-title">
        {/* Soft Ambient Hero Glow */}
        <div className="polydor-hero-bg-glow" aria-hidden="true" />

        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="polydor-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="polydor-breadcrumb-item">
              <Home size={13} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="polydor-breadcrumb-separator" aria-hidden="true" />
            <Link href="/specialty" className="polydor-breadcrumb-item">
              Specialty products
            </Link>
            <ChevronRight size={12} className="polydor-breadcrumb-separator" aria-hidden="true" />
            <span className="polydor-breadcrumb-current" aria-current="page">
              POLYDOR-WS
            </span>
          </nav>

          <div className="polydor-hero-layout">
            <div className="polydor-hero-copy">
              <div className="polydor-eyebrow">
                <Wind size={16} aria-hidden="true" />
                <span>Specialty Products · Molecular Odour Neutraliser</span>
              </div>

              <h1 id="polydor-hero-title" className="polydor-title">
                POLYDOR-WS
              </h1>
              <p className="polydor-subtitle">
                Alters the chemical structure — does not merely mask.
              </p>

              <p className="polydor-desc">
                A scientifically formulated blend of specialty organic compounds, natural fragrant plant extracts,
                and designer chemical complexes developed by PolyTreat&apos;s Green Products Division. Rather than merely
                masking bad smells with perfumes, it chemically binds with odour-causing compounds—including amines,
                sulphides, mercaptans, aldehydes, ketones, ammonia, and hydrogen sulphide gas—transforming them into
                non-odoriferous molecular adducts.
              </p>

              <div className="polydor-hero-actions">
                <Link href="/contact#contact-form" className="btn btn-polydor-primary">
                  <span>Enquire about POLYDOR-WS</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href="#polydor-video-demo" className="btn btn-polydor-video">
                  <Play size={14} fill="currentColor" />
                  <span>Watch Application</span>
                </a>
                <Link href="/specialty" className="btn btn-polydor-secondary">
                  <span>All specialty products</span>
                </Link>
              </div>
            </div>

            {/* Specialty-Style Hero Visual Showcase with Floating Stats Card */}
            <PolydorHeroVisual />
          </div>

          {/* Dedicated Hallmark Features Section with Lean Hover Animations */}
          <div className="polydor-features-section" aria-label="POLYDOR-WS Key Features">
            <div className="polydor-features-grid">
              {polydorHallmarkFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="polydor-feature-card">
                    <div className="polydor-feat-icon-box" aria-hidden="true">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div className="polydor-feat-content">
                      <h3 className="polydor-feat-title">{feat.title}</h3>
                      <p className="polydor-feat-desc">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Facts Pill Strip */}
          <div className="polydor-facts-strip">
            {product.facts.map((fact) => (
              <div className="polydor-fact-item" key={fact.label}>
                <span className="polydor-fact-label">{fact.label}</span>
                <span className="polydor-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hero Wave */}
        <div className="polydor-hero-wave-wrap" aria-hidden="true">
          <svg
            className="polydor-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="polydor-hero-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#D5E8F3" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="polydor-hero-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#0369A1" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="polydor-hero-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
                <stop offset="35%" stopColor="#0369A1" stopOpacity="0.65" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F8FBFE" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="polydor-hero-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#polydor-hero-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#polydor-hero-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#polydor-hero-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#polydor-hero-wave-shine)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. PROBLEMS & NEUTRALISATION MECHANISM */}
      <section
        className="polydor-problems-section"
        id="odour-challenges"
        aria-labelledby="odour-challenges-title"
      >
        <div className="container">
          <div className="polydor-problems-layout">
            <div className="polydor-problems-visual-col">
              <div className="polydor-neutralisation-card">
                <span className="polydor-card-kicker">Chemical Adduct Mechanism</span>
                <h3 className="polydor-neutralisation-title">From Volatile Odour to Stable Non-Odorous Adduct</h3>
                <div className="polydor-reaction-flow">
                  <div className="polydor-reaction-step">
                    <span className="polydor-step-tag is-unstable">Malodorous State</span>
                    <span className="polydor-formula">R-SH · R-NH₂ · H₂S</span>
                    <span className="polydor-formula-desc">Volatile mercaptans, amines &amp; sulphides causing severe odour nuisance</span>
                  </div>
                  <div className="polydor-reaction-arrow" aria-hidden="true">
                    <span>+ POLYDOR-WS</span>
                    <ArrowRight size={18} />
                  </div>
                  <div className="polydor-reaction-step is-passivated">
                    <span className="polydor-step-tag is-stable">Neutralised Adduct</span>
                    <span className="polydor-formula">Non-Odorous Adduct</span>
                    <span className="polydor-formula-desc">Stable, non-volatile molecular complexes permanently stripped of malodour</span>
                  </div>
                </div>
                <div className="polydor-neutralisation-note">
                  <Info size={14} aria-hidden="true" />
                  <span>Permanently alters molecular dipole bonds rather than temporarily fatiguing olfactory receptors.</span>
                </div>
              </div>
            </div>

            <div className="polydor-problems-content-col">
              <div className="polydor-section-eyebrow">
                <span className="polydor-eyebrow-bar" aria-hidden="true" />
                <span>Problem &amp; Solution</span>
              </div>
              <h2 id="odour-challenges-title" className="polydor-section-title">
                Masking perfumes fail when odour compounds continue to volatilize.
              </h2>
              <p className="polydor-section-sub">
                Conventional perfumes and air fresheners merely cover malodours temporarily without breaking down the
                reactive airborne compounds. As the scent evaporates, the offensive smell returns. POLYDOR-WS permanently
                transforms odour molecules into non-odorous adducts at the chemical level.
              </p>

              <div className="polydor-checklist-grid">
                <ul className="polydor-checklist-col">
                  {problemChecklistCol1.map((item) => (
                    <li key={item}>
                      <span className="polydor-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="polydor-checklist-col">
                  {problemChecklistCol2.map((item) => (
                    <li key={item}>
                      <span className="polydor-check-icon" aria-hidden="true">
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

      {/* 3. APPLICATION PROTOCOL STEPS */}
      <section className="polydor-steps-section" id="application-protocol" aria-labelledby="polydor-steps-title">
        <div className="container">
          <div className="polydor-section-header">
            <span className="polydor-kicker">Application Protocol</span>
            <h2 id="polydor-steps-title">Three methods, tailored to the source.</h2>
            <p>
              POLYDOR-WS is a versatile liquid concentrate that can be dosed into liquid streams, atomised over
              open acreage, or injected into industrial air scrubbing systems.
            </p>
          </div>

          <div className="polydor-steps-grid">
            {polydorProcessSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div className="polydor-step-card" key={step.title}>
                  <div className="polydor-step-card-header">
                    <span className="polydor-step-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="polydor-step-icon-wrap">
                      <StepIcon size={20} />
                    </span>
                  </div>
                  <h3 className="polydor-step-title">{step.title}</h3>
                  <span className="polydor-step-subtitle">{step.subtitle}</span>
                  <p className="polydor-step-desc">{step.text}</p>
                </div>
              );
            })}
          </div>

          {/* Dedicated "Application in Action" Video Showcase */}
          <div className="polydor-video-showcase-wrap" id="polydor-video-demo">
            <div className="polydor-video-grid">
              {/* Left Col: High-Definition Video Player Card */}
              <div className="polydor-video-player-card">
                <div className="polydor-video-header">
                  <div className="polydor-video-pill">
                    <span className="polydor-video-dot" aria-hidden="true" />
                    <Play size={13} fill="currentColor" />
                    <span>Live Application Footage</span>
                  </div>
                  <span className="polydor-video-res-badge">HD · 1080p</span>
                </div>
                <div className="polydor-video-frame">
                  <video
                    className="polydor-application-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/specialty/polydor-odour-control.jpg"
                  >
                    <source src="/images/specialty/polydore-application.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="polydor-video-caption">
                  <Wind size={16} className="polydor-video-caption-icon" />
                  <span>Real-time chemical neutralisation and fogging application of POLYDOR-WS liquid concentrate.</span>
                </div>
              </div>

              {/* Right Col: Field Application Guidelines */}
              <div className="polydor-video-insights">
                <span className="polydor-kicker">Field Guidelines</span>
                <h3 className="polydor-video-insights-title">Best practices for effective neutralisation</h3>
                <p className="polydor-video-insights-desc">
                  POLYDOR-WS is a versatile liquid concentrate that can be dosed into liquid streams,
                  atomised over open acreage, or injected into industrial air scrubbing systems.
                </p>

                <div className="polydor-video-tips-list">
                  <div className="polydor-video-tip-item">
                    <div className="polydor-tip-icon-box">
                      <Droplets size={18} />
                    </div>
                    <div>
                      <h4 className="polydor-tip-title">Direct Tank &amp; Pond Dosing</h4>
                      <p className="polydor-tip-desc">
                        Dosed directly into effluent treatment plants (ETP), sewage sludge basins, and sugar-processing holding ponds. Eliminates foul odor within 2 to 3 hours.
                      </p>
                    </div>
                  </div>

                  <div className="polydor-video-tip-item">
                    <div className="polydor-tip-icon-box">
                      <Wind size={18} />
                    </div>
                    <div>
                      <h4 className="polydor-tip-title">Atomised Spray &amp; Misting</h4>
                      <p className="polydor-tip-desc">
                        Applied via boundary misting lines or mobile fogging cannons at garbage dump sites (standard dosage: 3 tons per 1.5–2 acres) to intercept rising odour plumes.
                      </p>
                    </div>
                  </div>

                  <div className="polydor-video-tip-item">
                    <div className="polydor-tip-icon-box">
                      <Layers size={18} />
                    </div>
                    <div>
                      <h4 className="polydor-tip-title">Scrubber &amp; Air Stream Dosing</h4>
                      <p className="polydor-tip-desc">
                        Added to recirculating water reservoirs in wet scrubbers and fast-food exhaust systems to wash grease and chemical vapours from airstreams before release.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL DATA & PUBLISHED SPECIFICATIONS */}
      <section className="polydor-specs-section" id="technical-data" aria-labelledby="polydor-specs-title">
        <div className="container">
          <div className="polydor-specs-layout">
            <div className="polydor-specs-intro">
              <span className="polydor-kicker">Physical Data</span>
              <h2 id="polydor-specs-title">Published product specifications.</h2>
              <p>
                These figures are as published in PolyTreat Green Products Division&apos;s official POLYDOR-WS technical documentation
                and dosage charts. Consult our technical team for custom substrate dilution and scrubber dosing calculations.
              </p>

              <div className="polydor-specs-highlights">
                <div className="polydor-highlight-box">
                  <Clock size={20} className="polydor-highlight-icon" />
                  <div>
                    <span className="polydor-hl-title">Reaction Window</span>
                    <span className="polydor-hl-desc">Eliminates foul odor within 2–3 hours in wastewater</span>
                  </div>
                </div>
                <div className="polydor-highlight-box">
                  <Droplets size={20} className="polydor-highlight-icon" />
                  <div>
                    <span className="polydor-hl-title">Working Dilution</span>
                    <span className="polydor-hl-desc">1:20 to 1:1000 with water based on application</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="polydor-specs-table-wrap">
              <table className="polydor-specs-table">
                <thead>
                  <tr>
                    <th>Property / Parameter</th>
                    <th>Specification Value</th>
                  </tr>
                </thead>
                <tbody>
                  {polydorSpecifications.map((spec) => (
                    <tr key={spec.label}>
                      <td className="polydor-spec-label">{spec.label}</td>
                      <td className="polydor-spec-val">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION SETTINGS & GROUPS */}
      <section className="polydor-systems-section" id="application-areas" aria-labelledby="polydor-areas-title">
        <div className="container">
          <div className="polydor-section-header">
            <span className="polydor-kicker">Application Settings</span>
            <h2 id="polydor-areas-title">Where the odour comes from.</h2>
            <p>
              Our application material lists a wide spread of settings. These are the main areas we work with;
              share your specific situation and we will confirm the fit.
            </p>
          </div>

          <div className="polydor-systems-grid">
            {specialtyApplicationGroups.map((group) => (
              <div className="polydor-system-card" key={group.id}>
                <div className="polydor-system-header">
                  <span className="polydor-system-dot" aria-hidden="true" />
                  <h3 className="polydor-system-title">{group.title}</h3>
                </div>
                <ul className="polydor-system-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS & SURFACES */}
      <section className="polydor-apps-section" id="applications" aria-labelledby="polydor-apps-title">
        <div className="container">
          <div className="polydor-apps-layout">
            <div className="polydor-apps-intro">
              <span className="polydor-kicker">Target Substrates</span>
              <h2 id="polydor-apps-title">Where POLYDOR-WS is applied.</h2>
              <p>
                From municipal solid waste landfills and sugar mills to poultry farms, commercial kitchens, and healthcare
                facilities, POLYDOR-WS provides rapid molecular odour control across diverse industrial operations.
              </p>
            </div>

            <div className="polydor-apps-grid">
              {product.applications.map((app) => (
                <div className="polydor-app-card" key={app}>
                  <Check size={18} className="polydor-app-check" aria-hidden="true" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HANDLING & PRECAUTIONS + REGULATORY DISTINCTION */}
      <section className="polydor-handling-section" id="handling" aria-labelledby="polydor-handling-title">
        <div className="container">
          <div className="polydor-handling-grid">
            <div className="polydor-handling-card">
              <h3 id="polydor-handling-title">
                <ShieldAlert size={18} className="polydor-caution-icon" aria-hidden="true" />
                <span>Handling Guidance &amp; Safety</span>
              </h3>
              <ul className="polydor-caution-list">
                {product.cautions.map((caution) => (
                  <li key={caution}>{caution}</li>
                ))}
              </ul>
            </div>

            <div className="polydor-handling-card is-note">
              <h3>
                <FileText size={18} className="polydor-info-icon" aria-hidden="true" />
                <span>Odour Control Is Not Disinfection</span>
              </h3>
              <p>
                POLYDOR-WS is an odour-control product. It is not a disinfectant, a
                sanitiser, an insecticide or a food-contact-safe treatment, and this
                page makes no claim that it kills microorganisms.
              </p>
              <p>
                Neutralising an unpleasant smell and inactivating a microorganism are
                different jobs, and the second one needs its own evidence and approved
                directions. If your site needs a disinfection claim, ask us for the
                current documentation for that specific application.
              </p>
              <p>
                {product.sourceNote}
              </p>
              <Link href="/contact#contact-form" className="polydor-sds-link">
                <span>Request Technical Data Sheet &amp; SDS</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA ENQUIRY BAND */}
      <section
        className="industries-contact-band"
        id="polydor-cta"
        aria-labelledby="polydor-cta-title"
      >
        <div className="container">
          <div className="industries-contact-inner">
            <div className="industries-contact-copy">
              <span className="industries-contact-eyebrow">
                Technical Consultation &amp; Support
              </span>
              <h2 id="polydor-cta-title">
                Need technical advice for your <span className="industries-highlight">odour control project?</span>
              </h2>
              <p>
                Discuss surface preparation parameters, scrubber dosing systems, and bulk container
                requirements with PolyTreat&apos;s technical chemists.
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
