"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Volume2,
  VolumeX,
  XCircle,
} from "lucide-react";

interface DemoItem {
  id: string;
  tabLabel: string;
  tabSubtitle: string;
  comparisonBrand: string;
  productName: string;
  bottleImage: string;
  productHref: string;
  problemSummary: string;
  solutionSummary: string;
  demoVideoSrc: string;
  actionPoints: string[];
  metricValue: string;
  metricLabel: string;
  badgeText: string;
}

const cleaningDemos: DemoItem[] = [
  {
    id: "floor-care",
    tabLabel: "Floor Care",
    tabSubtitle: "Lizol-Style Shine",
    comparisonBrand: "Lizol-Style Floor Mopping Action",
    productName: "V-Klin Golden Floor Cleaner",
    bottleImage: "/vklin-products/vklin-golden-floor-cleaner.webp",
    productHref: "/vklin/products/golden-floor-cleaner",
    problemSummary: "Sticky grease spills, dusty footmarks & unseen bacteria on tiles",
    solutionSummary: "1-mop stroke cuts grime, leaves brilliant mirror shine & 24hr floral aroma",
    demoVideoSrc: "/images/home/demo-floor-care.mp4",
    actionPoints: [
      "Kills 99.9% illness-causing germs & bacteria on all floor types",
      "Restores brilliant mirror shine on marble, vitrified tiles & granite",
      "Quick-drying non-sticky formulation, safe for babies & pets",
    ],
    metricValue: "99.9%",
    metricLabel: "Germ Kill Shield",
    badgeText: "DEEP TILE SHINE",
  },
  {
    id: "toilet-care",
    tabLabel: "Toilet Hygiene",
    tabSubtitle: "Harpic-Style Gel",
    comparisonBrand: "Harpic-Style Porcelain Hygiene Action",
    productName: "V-Klin POWER PLUS Toilet Cleaner",
    bottleImage: "/vklin-products/vklin-power-plus-toilet-cleaner.webp",
    productHref: "/vklin/products/power-plus-toilet-cleaner",
    problemSummary: "Hard-water limescale, stubborn yellow rust rings & commode foul odour",
    solutionSummary: "10x thick clinging gel clings under rim, dissolving rust without noxious fumes",
    demoVideoSrc: "/images/home/demo-toilet-care.mp4",
    actionPoints: [
      "10x thicker blue liquid clings to vertical porcelain for deep penetration",
      "Effortlessly removes stubborn yellow limescale & mineral rust rings",
      "Eliminates uric acid deposits and commode foul odours instantly",
    ],
    metricValue: "10x",
    metricLabel: "Thicker Clinging Gel",
    badgeText: "EXTRA-THICK GEL",
  },
  {
    id: "dishwash",
    tabLabel: "Grease Dishwash",
    tabSubtitle: "Vim-Style Enzyme",
    comparisonBrand: "Vim-Style Enzyme Degreasing Action",
    productName: "V-Klin Lemon Dishwash Liquid Gel",
    bottleImage: "/vklin-products/vklin-dishwash-liquid-gel-lemon.webp",
    productHref: "/vklin/products/dishwash-liquid-gel-lemon",
    problemSummary: "Burnt oil, sticky tadka ghee grease & white chalky residue on plates",
    solutionSummary: "1 drop rich active citrus foam dissolves heavy grease and rinses squeaky-clean",
    demoVideoSrc: "/images/home/demo-dishwash.mp4",
    actionPoints: [
      "Active lemon enzymes dissolve burnt oil and masala grease in seconds",
      "Leaves zero chalky white residue on stainless steel & glassware",
      "Gentle skin-safe neutral pH protects hands from dryness and peeling",
    ],
    metricValue: "1 Drop",
    metricLabel: "Cuts Heavy Oil",
    badgeText: "LEMON POWER",
  },
  {
    id: "glass-cleaner",
    tabLabel: "Streak-Free Glass",
    tabSubtitle: "Colin-Style Mist",
    comparisonBrand: "Colin-Style Streak-Free Shine",
    productName: "V-Klin Streak-Free Glass Cleaner",
    bottleImage: "/vklin-products/vklin-streak-free-glass-cleaner.webp",
    productHref: "/vklin/products/glass-cleaner",
    problemSummary: "Oily fingerprints, haze & cloudy wipe streaks on mirrors & windows",
    solutionSummary: "Flash-evaporating mist lifts fingerprints and creates an invisible anti-dust shield",
    demoVideoSrc: "/images/home/demo-glass-care.mp4",
    actionPoints: [
      "Flash-evaporation leaves zero streaks, smudges, or cloudy haze marks",
      "Creates an anti-dust static barrier on mirrors, glass tables & windows",
      "Ammonia-free formula with refreshing breezy scent, safe for tints",
    ],
    metricValue: "100%",
    metricLabel: "Streak-Free Clarity",
    badgeText: "CRYSTAL SHINE",
  },
  {
    id: "odour-pest",
    tabLabel: "Odour & Pest",
    tabSubtitle: "POLYDOR Molecular",
    comparisonBrand: "POLYDOR Molecular Odour Destruction",
    productName: "POLYDOR-WS & POLYDOR-D MOS",
    bottleImage: "/images/home/categories/cat-natural-wellness.jpg",
    productHref: "/specialty/polydor-ws",
    problemSummary: "Rotten garbage stink, drain foul gas & toxic pesticide fumes",
    solutionSummary: "Permanently alters foul odour molecules into non-odorous adducts + herbal neem shield",
    demoVideoSrc: "/images/home/demo-odour-pest.mp4",
    actionPoints: [
      "Permanently neutralises garbage dump, ETP & drain stink in 2–3 hours",
      "Non-toxic molecular action — safe for factories, hotels & households",
      "POLYDOR-D MOS: 100% herbal Neem & Citronella natural mosquito repellent",
    ],
    metricValue: "Zero",
    metricLabel: "Lingering Odour",
    badgeText: "100% MOLECULAR",
  },
];

export default function VKlinCommercialDemos() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeDemo = cleaningDemos[activeTab];

  // Continuous non-stop auto-advance every 5.5s
  useEffect(() => {
    const autoTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % cleaningDemos.length);
    }, 5500);

    return () => clearInterval(autoTimer);
  }, []);

  // Continuous uninterrupted video autoplay on active tab switch
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [activeTab, isMuted]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const pauseFromFocus = () => setIsPaused(true);
  const resumeFromBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false);
    }
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    let next = activeTab;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (activeTab - 1 + cleaningDemos.length) % cleaningDemos.length;
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (activeTab + 1) % cleaningDemos.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = cleaningDemos.length - 1;
    }

    setActiveTab(next);
    document.getElementById(`demo-tab-${cleaningDemos[next].id}`)?.focus();
  };

  return (
    <section
      className="hp-section hp-section-tint vklin-mini-section"
      id="cleaning-demos"
      aria-labelledby="action-demos-title"
    >
      <div className="hp-hero-container">
        {/* Compact, Refined Section Heading (80% Scale) */}
        <div className="vklin-mini-header hp-reveal">
          <div className="vklin-mini-eyebrow">
            <span className="vklin-mini-dot" aria-hidden="true" />
            <span>REAL PROBLEMS, PROVEN ACTION</span>
          </div>

          <h2 id="action-demos-title" className="vklin-mini-title">
            See How V-Klin Solves Everyday Cleaning Problems
          </h2>

          <p className="vklin-mini-lead">
            Continuous commercial demonstrations showing instant visible results across floors, kitchens, bathrooms, and molecular air care.
          </p>
        </div>

        {/* Unified, Sleek Segmented Tab Bar (Fits All 5 In 1 Clean Row) */}
        <div
          className="vklin-mini-tab-bar"
          role="tablist"
          aria-label="Cleaning demonstrations"

          onKeyDown={handleTabKeyDown}
        >
          {cleaningDemos.map((demo, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={demo.id}
                id={`demo-tab-${demo.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="cleaning-demos-panel"
                className={`vklin-mini-tab-item ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="vklin-mini-tab-num">{`0${idx + 1}`}</span>
                <span className="vklin-mini-tab-text">
                  <strong>{demo.tabLabel}</strong>
                  <small>{demo.tabSubtitle}</small>
                </span>
                {isActive && <span className="vklin-mini-tab-progress" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        {/* Compact, Luxury Demonstration Stage Box */}
        <div
          className="vklin-mini-stage hp-reveal-scale"
          role="tabpanel"
          id="cleaning-demos-panel"
          aria-labelledby={`demo-tab-${activeDemo.id}`}

        >
          {/* Slim Top Bar */}
          <div className="vklin-mini-topbar">
            <div className="vklin-mini-stage-badge">
              <Sparkles size={13} className="vklin-mini-spark" aria-hidden="true" />
              <span>{activeDemo.comparisonBrand}</span>
            </div>
            <span className="vklin-mini-highlight-pill">{activeDemo.badgeText}</span>
          </div>

          {/* 2-Column Balanced Grid */}
          <div className="vklin-mini-grid">
            {/* Left Column: 16:9 Video Theatre + Sleek Product Bar */}
            <div className="vklin-mini-video-col">
              <div className="vklin-mini-player-box">
                <video
                  key={activeDemo.demoVideoSrc}
                  ref={videoRef}
                  src={activeDemo.demoVideoSrc}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  className="vklin-mini-video-el"
                />

                {/* Micro Live Badge */}
                <div className="vklin-mini-live-pill">
                  <span className="vklin-mini-live-dot" aria-hidden="true" />
                  <span>DEMO PLAYING</span>
                </div>

                {/* Sound Toggle */}
                <button
                  type="button"
                  className="vklin-mini-sound-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute commercial audio" : "Mute commercial audio"}
                  title={isMuted ? "Click to unmute" : "Click to mute"}
                >
                  {isMuted ? (
                    <VolumeX size={15} aria-hidden="true" />
                  ) : (
                    <Volume2 size={15} aria-hidden="true" />
                  )}
                  <span>{isMuted ? "Muted" : "Sound On"}</span>
                </button>

                {/* Metric Chip */}
                <div className="vklin-mini-metric-chip">
                  <span className="vklin-mini-metric-num">{activeDemo.metricValue}</span>
                  <span className="vklin-mini-metric-txt">{activeDemo.metricLabel}</span>
                </div>
              </div>

              {/* Compact Featured Product Highlight Bar */}
              <div className="vklin-mini-product-bar">
                <div className="vklin-mini-prod-thumb">
                  <Image
                    src={activeDemo.bottleImage}
                    alt={activeDemo.productName}
                    width={52}
                    height={52}
                    className="vklin-mini-prod-img"
                  />
                </div>
                <div className="vklin-mini-prod-meta">
                  <span className="vklin-mini-prod-eyebrow">FEATURED FORMULA</span>
                  <h4 className="vklin-mini-prod-name">{activeDemo.productName}</h4>
                  <p className="vklin-mini-prod-sub">{activeDemo.tabSubtitle}</p>
                </div>
                <div className="vklin-mini-prod-cta">
                  <Link href={activeDemo.productHref} className="vklin-mini-prod-link">
                    <span>Details</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Modern Problem vs Solution Showcase Card */}
            <div className="vklin-mini-content-col">
              {/* Dual Before / After Comparison Strip */}
              <div className="vklin-mini-compare-box">
                {/* Problem Row */}
                <div className="vklin-mini-row-problem">
                  <div className="vklin-mini-row-badge is-problem">
                    <XCircle size={13} aria-hidden="true" />
                    <span>THE PROBLEM</span>
                  </div>
                  <p className="vklin-mini-row-text">{activeDemo.problemSummary}</p>
                </div>

                {/* Solution Row */}
                <div className="vklin-mini-row-solution">
                  <div className="vklin-mini-row-badge is-solution">
                    <CheckCircle2 size={13} aria-hidden="true" />
                    <span>V-KLIN ACTION</span>
                  </div>
                  <p className="vklin-mini-row-text is-bold">{activeDemo.solutionSummary}</p>
                </div>
              </div>

              {/* 3 Compact Action Checklist Highlights */}
              <div className="vklin-mini-action-box">
                <span className="vklin-mini-action-title">KEY PROVEN RESULTS</span>
                <ul className="vklin-mini-action-list" aria-label="Action benefits">
                  {activeDemo.actionPoints.map((point) => (
                    <li key={point} className="vklin-mini-action-item">
                      <span className="vklin-mini-check-icon" aria-hidden="true">
                        <CheckCircle2 size={13} strokeWidth={2.6} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sleek Action Buttons Footer */}
              <div className="vklin-mini-stage-foot">
                <Link href={activeDemo.productHref} className="vklin-mini-btn-primary">
                  <span>Explore Formula</span>
                  <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                    activeDemo.productName
                  )}%20and%20would%20like%20to%20order%20or%20get%20pricing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="vklin-mini-btn-whatsapp"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>Enquire / Bulk Order</span>
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
