"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Check,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Factory,
  Leaf,
  Layers3,
  Sparkles,
  BarChart3,
  Award,
  ShieldCheck,
  Droplets,
  Building2,
  Wind,
  Users,
  Compass,
  Gauge,
  Headset,
} from "lucide-react";
import {
  qualityHeroData,
  qualityMetrics,
  pqrsPrinciples,
  batchJourneySteps,
  qualityPillars,
  companyQualityProfile,
  productCoverageDomains,
  qualityCertificationsOverview,
  qualityDocRequestData,
} from "./qualityData";

// Counter Hook for Stat Cards (1.2s ease-out, IntersectionObserver)
function CountUpNumber({
  target,
  start = 0,
  duration = 1200,
  prefix = "",
  suffix = "",
  formatCommas = true,
}: {
  target: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatCommas?: boolean;
}) {
  const [val, setVal] = useState(start);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVal(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * easeOut);
            setVal(current);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setVal(target);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, start, duration]);

  const formattedValue =
    !formatCommas || (target >= 1900 && target <= 2099)
      ? String(val)
      : val.toLocaleString();

  return (
    <span ref={spanRef}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}

export default function QualityPageClient() {
  // PQRS Accordion state & auto-cycling
  const [activePqrs, setActivePqrs] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoCycleTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoCycle = useCallback(() => {
    if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);
    autoCycleTimerRef.current = setInterval(() => {
      setActivePqrs((prev) => (prev + 1) % 4);
    }, 4500);
  }, []);

  const stopAutoCycle = useCallback(() => {
    if (autoCycleTimerRef.current) {
      clearInterval(autoCycleTimerRef.current);
      autoCycleTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      startAutoCycle();
    } else {
      stopAutoCycle();
    }
    return () => stopAutoCycle();
  }, [isPaused, startAutoCycle, stopAutoCycle]);

  // Pillar "Read more" toggle states
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({});

  // Batch Journey in-view state for line draw and sequential dot pulse
  const journeyRef = useRef<HTMLElement>(null);
  const [journeyInView, setJourneyInView] = useState(false);

  useEffect(() => {
    const el = journeyRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setJourneyInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const togglePillar = (id: string) => {
    setExpandedPillars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const pillarIconMap = [BarChart3, FlaskConical, Leaf];
  const domainIconMap = [Droplets, Building2, Wind, Sparkles, Layers3];
  const profileIconMap = [Factory, Award, Users, Leaf];
  const pqrsIconMap = [Gauge, BadgeCheck, ShieldCheck, Headset];

  return (
    <main className="quality-page-redesign">
      {/* ===================================================================
          1. HERO SECTION (TWO COLUMNS)
          =================================================================== */}
      <section className="qp-hero-section" aria-labelledby="quality-title">
        <div className="qp-hero-bg" aria-hidden="true">
          <div className="qp-hero-grid-matrix" />
        </div>

        <div className="qp-container qp-hero-inner">
          {/* Left Column: Eyebrow, H1, Lead, Chips, Buttons */}
          <div className="qp-hero-content">
            <nav className="qp-breadcrumb qp-hero-fade qp-hero-fade-1" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="qp-breadcrumb-separator" aria-hidden="true">
                  /
                </li>
                <li aria-current="page">Quality</li>
              </ol>
            </nav>

            <span className="qp-label qp-hero-fade qp-hero-fade-1">
              {qualityHeroData.eyebrow}
            </span>

            <h1 id="quality-title" className="qp-hero-title qp-hero-fade qp-hero-fade-2">
              <span className="qp-hero-title-line">{qualityHeroData.titleLines[0]}</span>
              <span className="qp-hero-title-line">{qualityHeroData.titleLines[1]}</span>
              <span className="qp-hero-title-line qp-text-blue">
                {qualityHeroData.titleLines[2]}
              </span>
            </h1>

            <p className="qp-hero-lead qp-hero-fade qp-hero-fade-3">{qualityHeroData.lead}</p>

            {/* Row of Hero Proof Chips */}
            <ul
              className="qp-hero-chips-row qp-hero-fade qp-hero-fade-4"
              aria-label="Quality assurance highlights"
            >
              {qualityHeroData.chips.map((chip) => (
                <li className="qp-chip" key={chip}>
                  <span className="qp-chip-icon-wrap">
                    <BadgeCheck size={14} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span>{chip}</span>
                </li>
              ))}
            </ul>

            <div className="qp-hero-actions qp-hero-fade qp-hero-fade-5">
              <Link className="qp-btn-primary" href="#pqrs">
                Explore the P.Q.R.S framework <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link className="qp-btn-outline" href="#documentation">
                Request TDS / SDS documents <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Orbiting SVG Ring Graphic (P=Green, Q=Blue, R=Purple, S=Orange) */}
          <div className="qp-hero-graphic-wrap qp-hero-fade qp-hero-fade-3" aria-hidden="true">
            <svg
              className="qp-orbit-svg"
              viewBox="0 0 440 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="100% batch inspection with orbiting Performance, Quality, Reliability, and Service indicators"
              role="img"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="85%" stopColor="#F0F9FF" />
                  <stop offset="100%" stopColor="#E0F2FE" />
                </radialGradient>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
                  <stop offset="33%" stopColor="#0284C7" stopOpacity="0.45" />
                  <stop offset="66%" stopColor="#8B5CF6" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.45" />
                </linearGradient>
              </defs>

              {/* Outer guide ring */}
              <circle
                cx="220"
                cy="220"
                r="185"
                stroke="#0284C7"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.12"
              />

              {/* Main Orbit Ring (r: 135) */}
              <circle
                cx="220"
                cy="220"
                r="135"
                stroke="url(#ringGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />

              {/* Inner accent ring */}
              <circle cx="220" cy="220" r="105" stroke="#0284C7" strokeWidth="1" opacity="0.16" />

              {/* Center 100% Hub */}
              <circle
                cx="220"
                cy="220"
                r="76"
                fill="url(#hubGlow)"
                stroke="#BAE6FD"
                strokeWidth="2.2"
                filter="drop-shadow(0 10px 24px rgba(2, 132, 199, 0.14))"
              />
              <text
                x="220"
                y="215"
                textAnchor="middle"
                fill="#0B192C"
                fontSize="38"
                fontWeight="850"
                fontFamily="var(--qp-font)"
                letterSpacing="-1.5px"
              >
                100%
              </text>
              <text
                x="220"
                y="238"
                textAnchor="middle"
                fill="#0284C7"
                fontSize="9.5"
                fontWeight="800"
                fontFamily="var(--qp-font)"
                letterSpacing="1.8px"
              >
                BATCH INSPECTION
              </text>

              {/* Orbiting Badges: P (Green), Q (Blue), R (Purple), S (Orange) */}
              <g className="qp-orbit-system">
                {/* P - Top (220, 85) */}
                <g className="qp-orbit-badge-group qp-orbit-badge-p">
                  <circle
                    cx="220"
                    cy="85"
                    r="26"
                    fill="#10B981"
                    filter="drop-shadow(0 4px 12px rgba(16, 185, 129, 0.45))"
                  />
                  <circle cx="220" cy="85" r="21.5" fill="#ECFDF5" />
                  <text
                    x="220"
                    y="93"
                    textAnchor="middle"
                    fill="#065F46"
                    fontSize="21"
                    fontWeight="850"
                    fontFamily="var(--qp-font)"
                  >
                    P
                  </text>
                </g>

                {/* Q - Right (355, 220) */}
                <g className="qp-orbit-badge-group qp-orbit-badge-q">
                  <circle
                    cx="355"
                    cy="220"
                    r="26"
                    fill="#0284C7"
                    filter="drop-shadow(0 4px 12px rgba(2, 132, 199, 0.45))"
                  />
                  <circle cx="355" cy="220" r="21.5" fill="#E0F2FE" />
                  <text
                    x="355"
                    y="228"
                    textAnchor="middle"
                    fill="#075985"
                    fontSize="21"
                    fontWeight="850"
                    fontFamily="var(--qp-font)"
                  >
                    Q
                  </text>
                </g>

                {/* R - Bottom (220, 355) */}
                <g className="qp-orbit-badge-group qp-orbit-badge-r">
                  <circle
                    cx="220"
                    cy="355"
                    r="26"
                    fill="#8B5CF6"
                    filter="drop-shadow(0 4px 12px rgba(139, 92, 246, 0.45))"
                  />
                  <circle cx="220" cy="355" r="21.5" fill="#F3E8FF" />
                  <text
                    x="220"
                    y="363"
                    textAnchor="middle"
                    fill="#5B21B6"
                    fontSize="21"
                    fontWeight="850"
                    fontFamily="var(--qp-font)"
                  >
                    R
                  </text>
                </g>

                {/* S - Left (85, 220) — ORANGE */}
                <g className="qp-orbit-badge-group qp-orbit-badge-s">
                  <circle
                    cx="85"
                    cy="220"
                    r="26"
                    fill="#F97316"
                    filter="drop-shadow(0 4px 12px rgba(249, 115, 22, 0.45))"
                  />
                  <circle cx="85" cy="220" r="21.5" fill="#FFF7ED" />
                  <text
                    x="85"
                    y="228"
                    textAnchor="middle"
                    fill="#C2410C"
                    fontSize="21"
                    fontWeight="850"
                    fontFamily="var(--qp-font)"
                  >
                    S
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. STATS ROW (4 CARDS WITH COUNT-UP & HOVER LIFT)
          =================================================================== */}
      <section className="qp-stats-section" aria-label="Quality key figures">
        <div className="qp-container">
          <div className="qp-stats-grid">
            {qualityMetrics.map((metric) => (
              <article className="qp-stat-card" key={metric.label}>
                <div className="qp-stat-val">
                  {metric.numericTarget !== undefined ? (
                    <CountUpNumber
                      target={metric.numericTarget}
                      start={metric.numericStart || 0}
                      prefix={metric.prefix || ""}
                      suffix={metric.suffix || ""}
                      formatCommas={metric.formatCommas}
                    />
                  ) : (
                    metric.value
                  )}
                </div>
                <div className="qp-stat-label">{metric.label}</div>
                <p className="qp-stat-detail">{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. THE P.Q.R.S SECTION (AUTO-SWITCHING & HOVER-EXPANDABLE)
          =================================================================== */}
      <section className="qp-section qp-pqrs-section" id="pqrs" aria-labelledby="pqrs-title">
        <div className="qp-container">
          <header className="qp-section-header">
            <span className="qp-label">Mission & Guiding Principles</span>
            <h2 id="pqrs-title">The Four Principles of PolyTreat: P.Q.R.S</h2>
            <p>
              Every formulation synthesized across our plants operates on four foundational
              pillars — delivering peak operating efficiency, certified quality, repeatable reliability,
              and direct technical service at an economical price with environmental safety.
            </p>
          </header>

          {/* Interactive auto-cycle status bar */}
          <div className="qp-pqrs-controls-bar">
            <div className="qp-pqrs-auto-indicator">
              <span className={`qp-pqrs-auto-dot ${isPaused ? "is-paused" : ""}`} aria-hidden="true" />
              <span>{isPaused ? "Auto-rotation paused on hover" : "Auto-cycling principles (Hover to pause)"}</span>
            </div>
          </div>

          <div
            className="qp-pqrs-accordion"
            role="tablist"
            aria-label="P.Q.R.S Principles Accordion"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {pqrsPrinciples.map((principle, index) => {
              const isExpanded = activePqrs === index;
              const PqrsIcon = pqrsIconMap[index] || Compass;

              return (
                <button
                  type="button"
                  key={principle.letter}
                  id={`pqrs-tab-${index}`}
                  role="tab"
                  aria-selected={isExpanded}
                  aria-expanded={isExpanded}
                  aria-controls={`pqrs-panel-${index}`}
                  className={`qp-pqrs-panel qp-pqrs-panel-${principle.letter.toLowerCase()} ${
                    isExpanded ? "is-expanded" : ""
                  }`}
                  onClick={() => setActivePqrs(index)}
                  onFocus={() => setActivePqrs(index)}
                  onMouseEnter={() => setActivePqrs(index)}
                >
                  {/* Active Panel Timer Progress Line */}
                  {isExpanded && <div className="qp-pqrs-panel-timer" style={{ color: principle.accentColor }} />}

                  <div className="qp-pqrs-panel-header">
                    <span className="qp-pqrs-big-letter" aria-hidden="true">
                      {principle.letter}
                    </span>
                    <div className="qp-pqrs-header-meta">
                      <h3 className="qp-pqrs-panel-name">{principle.title}</h3>
                      <span className="qp-pqrs-panel-subtitle">{principle.subtitle}</span>
                    </div>
                  </div>

                  {!isExpanded && (
                    <div className="qp-pqrs-collapsed-hint" aria-hidden="true">
                      {principle.title}
                    </div>
                  )}

                  <div
                    id={`pqrs-panel-${index}`}
                    role="tabpanel"
                    aria-labelledby={`pqrs-tab-${index}`}
                    className="qp-pqrs-expanded-body"
                  >
                    <div className="qp-pqrs-tagline">{principle.tagline}</div>
                    <p className="qp-pqrs-desc">{principle.description}</p>

                    <ul className="qp-pqrs-bullets" aria-label={`${principle.title} technical commitments`}>
                      {principle.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check size={14} strokeWidth={2.6} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Standardized Bottom Text Card for All 4 Principles */}
                    <div className="qp-pqrs-text-card">
                      <div
                        className="qp-pqrs-text-card-icon"
                        style={{ backgroundColor: principle.accentBg, color: principle.accentColor }}
                        aria-hidden="true"
                      >
                        <PqrsIcon size={18} strokeWidth={2.2} />
                      </div>
                      <div className="qp-pqrs-text-card-content">
                        <span className="qp-pqrs-text-card-label" style={{ color: principle.textColor }}>
                          {principle.focusLabel}
                        </span>
                        <span className="qp-pqrs-text-card-value">
                          {principle.operationalFocus}
                        </span>
                      </div>
                      <span
                        className="qp-pqrs-text-card-badge"
                        style={{
                          backgroundColor: principle.accentBg,
                          color: principle.textColor,
                          borderColor: principle.accentBorder,
                        }}
                      >
                        {principle.accentBadge}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. BATCH JOURNEY SECTION (DARK NAVY SECTION)
          =================================================================== */}
      <section
        ref={journeyRef}
        className={`qp-journey-section ${journeyInView ? "is-in-view" : ""}`}
        aria-labelledby="journey-title"
      >
        <div className="qp-journey-bg" aria-hidden="true" />

        <div className="qp-container">
          <header className="qp-journey-header">
            <span className="qp-label">BATCH JOURNEY</span>
            <h2 id="journey-title">From raw material to retained sample</h2>
            <p>
              A documented 4-step quality progression guaranteeing purity, consistency, and
              traceability across every manufacturing lot.
            </p>
          </header>

          <div className="qp-journey-track">
            {/* Connecting line that draws across on scroll */}
            <div className="qp-journey-line" aria-hidden="true" />

            {batchJourneySteps.map((step, idx) => (
              <article
                className={`qp-journey-step qp-journey-step-${idx}`}
                key={step.title}
              >
                <div className="qp-journey-dot-wrap" aria-hidden="true">
                  <span className="qp-journey-number">{step.step}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="qp-journey-checkpoint-pill">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  {step.checkpoint}
                </span>
              </article>
            ))}
          </div>

          <div className="qp-journey-footer-badges">
            <span className="qp-journey-pill">
              <Award size={15} aria-hidden="true" /> ISO 9001:2015 Audited
            </span>
            <span className="qp-journey-pill">
              <BadgeCheck size={15} aria-hidden="true" /> SMCS Accredited (AIAO-BAR USA)
            </span>
            <span className="qp-journey-pill">
              <ShieldCheck size={15} aria-hidden="true" /> 100% Lot Retention Archived
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. THREE PILLARS (CONNECTED SPLIT ROWS ARCHITECTURE)
          =================================================================== */}
      <section className="qp-section qp-pillars-section" id="pillars" aria-labelledby="pillars-title">
        <div className="qp-container">
          <header className="qp-section-header">
            <span className="qp-label">Operational Infrastructure</span>
            <h2 id="pillars-title">Three Pillars of Formulation Assurance</h2>
            <p>
              How our laboratory facilities, statistical methods, and green formulation protocols
              guarantee consistent performance from test-tube validation to bulk industrial delivery.
            </p>
          </header>

          {/* Connected Split Rows */}
          <div className="qp-pillars-timeline">
            {qualityPillars.map((pillar, idx) => {
              const Icon = pillarIconMap[idx] || FlaskConical;
              const isExpanded = !!expandedPillars[pillar.id];
              const isEven = idx % 2 === 1;

              return (
                <article
                  key={pillar.id}
                  className="qp-pillars-row"
                >
                  {/* Decorative Connector Line (Starts at Node 1, ends at Node 3) */}
                  <div
                    className={`qp-pillars-connector-line ${
                      idx === 0
                        ? "qp-pillars-line-first"
                        : idx === 1
                        ? "qp-pillars-line-mid"
                        : "qp-pillars-line-last"
                    }`}
                    aria-hidden="true"
                  />

                  {/* Circular Numbered Node (34px mobile, 44px tablet/desktop) */}
                  <div
                    className="qp-pillars-node"
                    aria-hidden="true"
                  >
                    <span className="qp-pillars-node-number">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Split Content: left-edge indented on mobile/tablet, 2-col grid on desktop */}
                  <div className="qp-pillars-split-grid">
                    {/* Text Side */}
                    <div
                      className={`qp-pillars-text-col ${
                        isEven ? "qp-pillars-text-col-even" : ""
                      }`}
                    >
                      {/* Big Decorative Number */}
                      <div
                        className="qp-pillars-deco-num"
                        aria-hidden="true"
                      >
                        {pillar.number}
                      </div>

                      {/* Tag & Icon Label Row */}
                      <div className="qp-pillars-meta-row">
                        <span className="qp-pillars-tag">
                          PILLAR {pillar.number}
                        </span>
                        <div className="qp-pillars-icon-badge">
                          <Icon size={15} aria-hidden="true" />
                          <span>{pillar.placeholderLabel}</span>
                        </div>
                      </div>

                      {/* Title (h3) */}
                      <h3 className="qp-pillars-title">
                        {pillar.title}
                      </h3>

                      {/* Blue Subtitle */}
                      <div className="qp-pillars-subtitle">
                        {pillar.subtitle}
                      </div>

                      {/* Description Paragraph */}
                      <p className="qp-pillars-desc">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Panel Side */}
                    <div
                      className={`qp-pillars-panel-col ${
                        isEven ? "qp-pillars-panel-col-even" : ""
                      }`}
                    >
                      <div className="qp-pillars-panel">
                        {/* Checklist */}
                        <ul className="qp-pillars-checklist" role="list">
                          {pillar.corePoints.map((pt) => (
                            <li key={pt}>
                              <CheckCircle2
                                size={18}
                                aria-hidden="true"
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Expandable in-depth validation points */}
                        {isExpanded && (
                          <div className="qp-pillars-expanded-points">
                            {pillar.deepPoints.map((pt) => (
                              <div
                                key={pt}
                                className="qp-pillars-deep-item"
                              >
                                <Check
                                  size={16}
                                  strokeWidth={2.5}
                                  aria-hidden="true"
                                />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Expander Button */}
                        <button
                          type="button"
                          className="qp-pillars-toggle-btn"
                          onClick={() => togglePillar(pillar.id)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? (
                            <>
                              Hide details <ChevronUp size={15} aria-hidden="true" />
                            </>
                          ) : (
                            <>
                              View in-depth validation ({pillar.deepPoints.length} more){" "}
                              <ChevronDown size={15} aria-hidden="true" />
                            </>
                          )}
                        </button>

                        {/* Divider */}
                        <div className="qp-pillars-divider" aria-hidden="true" />

                        {/* Bottom Badge Metric */}
                        <div className="qp-pillars-footer-strip">
                          <BadgeCheck size={18} aria-hidden="true" />
                          <span>{pillar.badgeMetric}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. COMPANY MANUFACTURING PROFILE & INFRASTRUCTURE (BENTO GRID REDESIGN)
          =================================================================== */}
      <section className="cp-profile-section" id="profile" aria-labelledby="profile-title">
        <div className="cp-profile-glow" aria-hidden="true" />
        <div className="cp-profile-container">
          <header className="cp-profile-header">
            <span className="cp-profile-eyebrow">{companyQualityProfile.eyebrow}</span>
            <h2 id="profile-title" className="cp-profile-title">{companyQualityProfile.title}</h2>
            <p className="cp-profile-intro">{companyQualityProfile.lead}</p>
          </header>

          <div className="cp-profile-grid">
            {/* Card 1: Featured Card (Manufacturing in Tarapur & Goregaon) */}
            <article className="cp-profile-card cp-profile-card-featured cp-profile-card-1">
              <div className="cp-profile-watermark" aria-hidden="true">
                <Factory size={160} strokeWidth={1.2} />
              </div>
              <div className="cp-profile-card-inner">
                <div className="cp-profile-icon-tile cp-profile-icon-tile-lg" aria-hidden="true">
                  <Factory size={32} strokeWidth={2} />
                </div>
                <h3 className="cp-profile-card-title cp-profile-card-title-lg">
                  {companyQualityProfile.highlights[0].title}
                </h3>
                <div className="cp-profile-accent-line" aria-hidden="true" />
                <p className="cp-profile-card-desc cp-profile-card-desc-lg">
                  {companyQualityProfile.highlights[0].description}
                </p>
              </div>
            </article>

            {/* Right Column (Cards 2, 3, 4) */}
            <div className="cp-profile-col-right">
              {/* Card 2: Active Quality Committee (Wide Card) */}
              <article className="cp-profile-card cp-profile-card-wide cp-profile-card-2">
                <div className="cp-profile-icon-tile" aria-hidden="true">
                  <Award size={24} strokeWidth={2} />
                </div>
                <div className="cp-profile-card-content">
                  <h3 className="cp-profile-card-title">
                    {companyQualityProfile.highlights[1].title}
                  </h3>
                  <div className="cp-profile-accent-line" aria-hidden="true" />
                  <p className="cp-profile-card-desc">
                    {companyQualityProfile.highlights[1].description}
                  </p>
                </div>
              </article>

              {/* Bottom Row: Cards 3 & 4 Side by Side */}
              <div className="cp-profile-bottom-row">
                {/* Card 3: Technical Consulting Network */}
                <article className="cp-profile-card cp-profile-card-compact cp-profile-card-3">
                  <div className="cp-profile-icon-tile" aria-hidden="true">
                    <Users size={24} strokeWidth={2} />
                  </div>
                  <div className="cp-profile-card-content">
                    <h3 className="cp-profile-card-title">
                      {companyQualityProfile.highlights[2].title}
                    </h3>
                    <div className="cp-profile-accent-line" aria-hidden="true" />
                    <p className="cp-profile-card-desc">
                      {companyQualityProfile.highlights[2].description}
                    </p>
                  </div>
                </article>

                {/* Card 4: Eco-Friendly & Biodegradable Dedication */}
                <article className="cp-profile-card cp-profile-card-compact cp-profile-card-4">
                  <div className="cp-profile-icon-tile" aria-hidden="true">
                    <Leaf size={24} strokeWidth={2} />
                  </div>
                  <div className="cp-profile-card-content">
                    <h3 className="cp-profile-card-title">
                      {companyQualityProfile.highlights[3].title}
                    </h3>
                    <div className="cp-profile-accent-line" aria-hidden="true" />
                    <p className="cp-profile-card-desc">
                      {companyQualityProfile.highlights[3].description}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. COMPREHENSIVE PRODUCT DOMAINS MATRIX (5 CATEGORIES)
          =================================================================== */}
      <section className="qp-section qp-domains-section" id="domains" aria-labelledby="domains-title">
        <div className="qp-container">
          <header className="qp-section-header">
            <span className="qp-label">Manufacturing Scope & Divisions</span>
            <h2 id="domains-title">Comprehensive Chemical Manufacturing Range</h2>
            <p>
              PolyTreat manufactures and supplies commercial & domestic cleaning, odor control programs,
              anti-corrosive coatings, water treatment, and structural waterproofing chemicals across 5 core verticals.
            </p>
          </header>

          <div className="qp-domains-grid">
            {productCoverageDomains.map((domain, idx) => {
              const Icon = domainIconMap[idx] || Droplets;
              return (
                <article className="qp-domain-card" key={domain.id}>
                  <div className="qp-domain-header">
                    <div className="qp-domain-icon">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <span className="qp-domain-eyebrow">{domain.eyebrow}</span>
                      <h3>{domain.category}</h3>
                    </div>
                  </div>

                  <p className="qp-domain-desc">{domain.description}</p>

                  <div className="qp-domain-app-chips">
                    {domain.applications.map((app) => (
                      <span className="qp-domain-app-chip" key={app}>
                        {app}
                      </span>
                    ))}
                  </div>

                  <ul className="qp-domain-list" aria-label={`${domain.category} product lineup`}>
                    {domain.products.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. CERTIFICATIONS STRIP (WITH TILTED CERTIFICATE IMAGE CARD)
          =================================================================== */}
      <section className="qp-section qp-certs-section" id="certifications" aria-labelledby="certs-title">
        <div className="qp-container qp-certs-grid">
          <div className="qp-certs-left">
            <span className="qp-label">Accreditations & Scope</span>
            <h2 id="certs-title">{qualityCertificationsOverview.title}</h2>
            <p>{qualityCertificationsOverview.description}</p>

            <div className="qp-certs-items-list">
              {qualityCertificationsOverview.items.map((item) => (
                <div className="qp-cert-item-card" key={item.title}>
                  <BadgeCheck size={20} strokeWidth={2} aria-hidden="true" />
                  <div>
                    <h4>
                      {item.title} — <span>{item.subtitle}</span>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tilted ISO 9001 Certificate Card */}
          <div className="qp-cert-tilt-wrap">
            <div className="qp-cert-tilt-card">
              <Image
                src="/iso-9001-2015-quality-certificate.jpeg"
                alt="ISO 9001:2015 Quality Management System Certificate for PolyTreat Chemicals"
                width={380}
                height={530}
                className="qp-cert-tilt-img"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div className="qp-cert-tilt-caption">
                <BadgeCheck size={16} strokeWidth={2} color="#0284C7" aria-hidden="true" />
                <span>ISO 9001:2015 Certified by SMCS (AIAO-BAR USA)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. DOCUMENTATION CTA BAND (GRADIENT BLUE TO TEAL)
          =================================================================== */}
      <section
        className="qp-doc-band-section"
        id="documentation"
        aria-labelledby="doc-band-title"
      >
        <div className="qp-container qp-doc-band-grid">
          <div className="qp-doc-band-content">
            <span className="qp-label" style={{ color: "#A7F3D0" }}>
              Technical Support
            </span>
            <h2 id="doc-band-title">{qualityDocRequestData.title}</h2>
            <p>{qualityDocRequestData.description}</p>

            <ul className="qp-doc-band-bullets">
              {qualityDocRequestData.bullets.map((b) => (
                <li key={b}>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="qp-doc-band-cta-box">
            <Link className="qp-btn-band-white" href={qualityDocRequestData.buttonHref}>
              <span>{qualityDocRequestData.buttonText}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
