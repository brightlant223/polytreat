import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Compass,
  Droplets,
  FileText,
  FlaskConical,
  HelpCircle,
  Home,
  Info,
  Layers,
  Paintbrush,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Thermometer,
  Wrench,
} from "lucide-react";
import {
  corosilFinishingSystems,
  corosilProcessSteps,
  corosilSpecifications,
  findSpecialtyProduct,
} from "@/data/specialtyProducts";

export const metadata: Metadata = {
  title: "COROSIL | Rust Converter Primer | PolyTreat Chemicals",
  description:
    "COROSIL: Water-based rust inhibitor and chemical converter primer for ferrous metal. Surface preparation, 3-step sequence, physical data, and finishing-system compatibility.",
};

const problemChecklistCol1 = [
  "Inadequate surface blast cleaning leads to catastrophic premature paint peeling.",
  "Residual rust beneath conventional coatings causes subsurface blistering and pitting.",
  "COROSIL chemically chelates iron oxides into an adherent organo-metallic complex.",
];

const problemChecklistCol2 = [
  "Single-coat brush or spray application requires only manual wire-brushing.",
  "Eliminates the heavy equipment cost of sandblasting in inaccessible industrial sites.",
  "Forms an active passivated foundation ready for compatible topcoat paint systems.",
];

const finishingDescriptions: Record<string, string> = {
  "Alkyd": "Standard industrial enamels, primers and synthetic alkyd topcoats.",
  "Chlorinated and acrylated rubber": "High-durability moisture and chemical barrier systems.",
  "Epoxies": "Heavy-duty two-pack industrial, structural and marine epoxy primers.",
  "Vinyls and urethanes": "UV-resistant aliphatic polyurethane and vinyl finish coats.",
  "Nitrocellulose and acrylics": "Fast-drying industrial machinery and equipment coatings.",
  "Water-based systems": "Eco-friendly low-VOC architectural and protective coatings.",
  "Vinyl acrylics and styrene acrylics": "Weather-resistant masonry and architectural steel systems.",
};

export default function CorosilPage() {
  const product = findSpecialtyProduct("corosil");

  if (!product) return null;

  return (
    <main className="corosil-detail-page">
      {/* 1. HERO SECTION */}
      <section className="corosil-hero" aria-labelledby="corosil-hero-title">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="corosil-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="corosil-breadcrumb-item">
              <Home size={13} aria-hidden="true" />
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="corosil-breadcrumb-separator" aria-hidden="true" />
            <Link href="/specialty" className="corosil-breadcrumb-item">
              Specialty products
            </Link>
            <ChevronRight size={12} className="corosil-breadcrumb-separator" aria-hidden="true" />
            <span className="corosil-breadcrumb-current" aria-current="page">
              COROSIL
            </span>
          </nav>

          <div className="corosil-hero-layout">
            <div className="corosil-hero-copy">
              <div className="corosil-eyebrow">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>Specialty Products · Corrosion Control</span>
              </div>

              <h1 id="corosil-hero-title" className="corosil-title">
                COROSIL
              </h1>
              <p className="corosil-subtitle">
                Treat the rust, then paint over it.
              </p>

              <p className="corosil-desc">
                A single-coat water-based rust inhibitor and chemical converter primer
                formulated for application on poorly prepared, rusty metal surfaces. It transforms
                corrosive iron oxides into stable, insoluble metallo-organic complexes,
                creating an adherent foundation for compatible paint systems.
              </p>

              <div className="corosil-hero-actions">
                <Link href="/contact#contact-form" className="btn btn-corosil-primary">
                  <span>Enquire about COROSIL</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/specialty" className="btn btn-corosil-secondary">
                  <span>All specialty products</span>
                </Link>
              </div>
            </div>

            {/* Visual Technical Badge Graphic */}
            <div className="corosil-hero-visual" aria-hidden="true">
              <div className="corosil-visual-frame">
                <div className="corosil-visual-grid" />
                <div className="corosil-visual-badge">
                  <ShieldCheck size={48} strokeWidth={1.5} className="corosil-badge-icon" />
                  <span className="corosil-badge-title">Rust Converter Primer</span>
                  <span className="corosil-badge-meta">Water-Based Formulation</span>
                </div>
                <div className="corosil-visual-stats">
                  <div className="corosil-vstat">
                    <span className="corosil-vstat-val">1 Coat</span>
                    <span className="corosil-vstat-lbl">Application</span>
                  </div>
                  <div className="corosil-vstat-divider" />
                  <div className="corosil-vstat">
                    <span className="corosil-vstat-val">4 Hours</span>
                    <span className="corosil-vstat-lbl">Hard Dry</span>
                  </div>
                  <div className="corosil-vstat-divider" />
                  <div className="corosil-vstat">
                    <span className="corosil-vstat-val">&lt; 2 pH</span>
                    <span className="corosil-vstat-lbl">Active Acidic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Facts Pill Strip */}
          <div className="corosil-facts-strip">
            {product.facts.map((fact) => (
              <div className="corosil-fact-item" key={fact.label}>
                <span className="corosil-fact-label">{fact.label}</span>
                <span className="corosil-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Hero Wave */}
        <div className="corosil-hero-wave-wrap" aria-hidden="true">
          <svg
            className="corosil-hero-wave-svg"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="corosil-hero-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FFFBEB" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="corosil-hero-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.30" />
                <stop offset="50%" stopColor="#B45309" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.30" />
              </linearGradient>
              <linearGradient id="corosil-hero-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D97706" stopOpacity="0.65" />
                <stop offset="35%" stopColor="#B45309" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#FEF3C7" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#FFFDF9" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="corosil-hero-wave-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="35%" stopColor="#FDE68A" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <path
              d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
              fill="url(#corosil-hero-wave-back)"
            />
            <path
              d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
              fill="url(#corosil-hero-wave-mid)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
              fill="url(#corosil-hero-wave-front)"
            />
            <path
              d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
              stroke="url(#corosil-hero-wave-shine)"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* 2. PROBLEMS & METALLURGY CHALLENGE */}
      <section
        className="corosil-problems-section"
        id="corrosion-challenges"
        aria-labelledby="corrosion-challenges-title"
      >
        <div className="container">
          <div className="corosil-problems-layout">
            <div className="corosil-problems-visual-col">
              <div className="corosil-chemistry-card">
                <span className="corosil-card-kicker">Chemical Conversion Mechanism</span>
                <h3 className="corosil-chemistry-title">From Active Rust to Stable Passivated Complex</h3>
                <div className="corosil-reaction-flow">
                  <div className="corosil-reaction-step">
                    <span className="corosil-step-tag is-unstable">Corrosive State</span>
                    <span className="corosil-formula">Fe₂O₃ · xH₂O</span>
                    <span className="corosil-formula-desc">Unstable loose iron oxides causing coating lift</span>
                  </div>
                  <div className="corosil-reaction-arrow" aria-hidden="true">
                    <span>+ COROSIL</span>
                    <ArrowRight size={18} />
                  </div>
                  <div className="corosil-reaction-step is-passivated">
                    <span className="corosil-step-tag is-stable">Passivated Base</span>
                    <span className="corosil-formula">Fe-Organo Complex</span>
                    <span className="corosil-formula-desc">Dense, insoluble blue-black barrier primer</span>
                  </div>
                </div>
                <div className="corosil-chemistry-note">
                  <Info size={14} aria-hidden="true" />
                  <span>Eliminates microscopic moisture paths that trigger ongoing subsurface oxidation.</span>
                </div>
              </div>
            </div>

            <div className="corosil-problems-content-col">
              <div className="corosil-section-eyebrow">
                <span className="corosil-eyebrow-bar" aria-hidden="true" />
                <span>Problem &amp; Solution</span>
              </div>
              <h2 id="corrosion-challenges-title" className="corosil-section-title">
                Poor surface prep is the #1 cause of coating failure.
              </h2>
              <p className="corosil-section-sub">
                In many industrial maintenance projects, abrasive blast cleaning is impossible due to
                spark hazards, environmental rules, or structural constraints. COROSIL solves this
                by chemically converting remaining rust into an inert, paintable foundation.
              </p>

              <div className="corosil-checklist-grid">
                <ul className="corosil-checklist-col">
                  {problemChecklistCol1.map((item) => (
                    <li key={item}>
                      <span className="corosil-check-icon" aria-hidden="true">
                        <Check size={16} strokeWidth={2.8} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="corosil-checklist-col">
                  {problemChecklistCol2.map((item) => (
                    <li key={item}>
                      <span className="corosil-check-icon" aria-hidden="true">
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

      {/* 3. THREE STEPS IN ORDER */}
      <section className="corosil-steps-section" id="application-steps" aria-labelledby="corosil-steps-title">
        <div className="container">
          <div className="corosil-section-header">
            <span className="corosil-kicker">Application Protocol</span>
            <h2 id="corosil-steps-title">Three steps, in this order.</h2>
            <p>
              The product literature presents COROSIL as a step inside a coating
              system rather than a standalone finish.
            </p>
          </div>

          <div className="corosil-steps-grid">
            {corosilProcessSteps.map((step, index) => {
              const stepIcons = [Wrench, Paintbrush, Layers];
              const StepIcon = stepIcons[index] || Check;
              const stepSubtitles = [
                "Remove loose scale & grease",
                "Apply single ready-to-use coat",
                "Apply within 10 days of hard dry",
              ];

              return (
                <div className="corosil-step-card" key={step.title}>
                  <div className="corosil-step-card-header">
                    <span className="corosil-step-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="corosil-step-icon-wrap">
                      <StepIcon size={20} />
                    </span>
                  </div>
                  <h3 className="corosil-step-title">{step.title}</h3>
                  <span className="corosil-step-subtitle">{stepSubtitles[index]}</span>
                  <p className="corosil-step-desc">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PHYSICAL DATA & PUBLISHED SPECIFICATIONS */}
      <section className="corosil-specs-section" id="technical-data" aria-labelledby="corosil-specs-title">
        <div className="container">
          <div className="corosil-specs-layout">
            <div className="corosil-specs-intro">
              <span className="corosil-kicker">Physical Data</span>
              <h2 id="corosil-specs-title">Published product specifications.</h2>
              <p>
                These figures are as published in PolyTreat's official COROSIL product literature.
                For critical structural engineering works, consult our technical team for the latest
                material safety and product compliance datasheets.
              </p>

              <div className="corosil-specs-highlights">
                <div className="corosil-highlight-box">
                  <Clock size={20} className="corosil-highlight-icon" />
                  <div>
                    <span className="corosil-hl-title">Dry Times</span>
                    <span className="corosil-hl-desc">Touch dry ≤ 30 min · Hard dry ≤ 4 hours</span>
                  </div>
                </div>
                <div className="corosil-highlight-box">
                  <Thermometer size={20} className="corosil-highlight-icon" />
                  <div>
                    <span className="corosil-hl-title">Application Range</span>
                    <span className="corosil-hl-desc">5 °C to 40 °C ambient surface temp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="corosil-specs-table-wrap">
              <table className="corosil-specs-table">
                <thead>
                  <tr>
                    <th>Property / Parameter</th>
                    <th>Specification Value</th>
                  </tr>
                </thead>
                <tbody>
                  {corosilSpecifications.map((spec) => (
                    <tr key={spec.label}>
                      <td className="corosil-spec-label">{spec.label}</td>
                      <td className="corosil-spec-val">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINISHING SYSTEM COMPATIBILITY */}
      <section className="corosil-systems-section" id="finishing-systems" aria-labelledby="corosil-systems-title">
        <div className="container">
          <div className="corosil-section-header">
            <span className="corosil-kicker">Paint System Compatibility</span>
            <h2 id="corosil-systems-title">Compatible with most industrial finishing systems.</h2>
            <p>
              The literature confirms COROSIL is chemically compatible with standard and high-performance
              industrial paint systems. Confirm compatibility against the specific formulation you plan to apply.
            </p>
          </div>

          <div className="corosil-systems-grid">
            {corosilFinishingSystems.map((system) => (
              <div className="corosil-system-card" key={system}>
                <div className="corosil-system-header">
                  <span className="corosil-system-dot" aria-hidden="true" />
                  <h3 className="corosil-system-title">{system}</h3>
                </div>
                <p className="corosil-system-desc">
                  {finishingDescriptions[system] || "Compatible topcoat or intermediate barrier system."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. APPLICATIONS & SURFACES */}
      <section className="corosil-apps-section" id="applications" aria-labelledby="corosil-apps-title">
        <div className="container">
          <div className="corosil-apps-layout">
            <div className="corosil-apps-intro">
              <span className="corosil-kicker">Target Substrates</span>
              <h2 id="corosil-apps-title">Where COROSIL is applied.</h2>
              <p>
                From heavy civil infrastructure to industrial machinery and automotive restorations,
                COROSIL provides reliable corrosion mitigation across diverse ferrous steel substrates.
              </p>
            </div>

            <div className="corosil-apps-grid">
              {product.applications.map((app) => (
                <div className="corosil-app-card" key={app}>
                  <Check size={18} className="corosil-app-check" aria-hidden="true" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HANDLING & PRECAUTIONS */}
      <section className="corosil-handling-section" id="handling" aria-labelledby="corosil-handling-title">
        <div className="container">
          <div className="corosil-handling-grid">
            <div className="corosil-handling-card">
              <h3 id="corosil-handling-title">
                <ShieldAlert size={18} className="corosil-caution-icon" aria-hidden="true" />
                <span>Handling Guidance &amp; Safety</span>
              </h3>
              <ul className="corosil-caution-list">
                {product.cautions.map((caution) => (
                  <li key={caution}>{caution}</li>
                ))}
              </ul>
            </div>

            <div className="corosil-handling-card is-note">
              <h3>
                <FileText size={18} className="corosil-info-icon" aria-hidden="true" />
                <span>Datasheet &amp; Safety Review</span>
              </h3>
              <p>{product.sourceNote}</p>
              <p>
                Safety and regulatory specifications are detailed in the official Safety Data Sheet (SDS).
                Contact our technical sales team for the complete documentation tailored to your job requirements.
              </p>
              <Link href="/contact#contact-form" className="corosil-sds-link">
                <span>Request Safety Data Sheet</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA ENQUIRY BAND */}
      <section className="corosil-cta-section" aria-labelledby="corosil-cta-title">
        <div className="container">
          <div className="corosil-cta-card">
            <div className="corosil-cta-content">
              <span className="corosil-cta-kicker">Technical Consultation</span>
              <h2 id="corosil-cta-title">Need technical advice for your steel coating project?</h2>
              <p>
                Discuss surface preparation parameters, topcoat selection, and bulk container
                requirements with PolyTreat's technical team.
              </p>
            </div>
            <div className="corosil-cta-actions">
              <Link href="/contact#contact-form" className="btn btn-corosil-primary">
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
