"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  Maximize,
  MessageCircle,
  Pause,
  Play,
  ShoppingCart,
  Sparkles,
  Trophy,
  Volume2,
  VolumeX,
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

/* Custom SVG Icons Matching Reference Image 2 */
function TabIcon({ id, isActive }: { id: string; isActive: boolean }) {
  const stroke = isActive ? "#FFFFFF" : "#0284C7";
  const fill = isActive ? "#FFFFFF" : "#0284C7";

  switch (id) {
    case "floor-care":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 21 7-7" />
          <path d="m14 10 7-7" />
          <path d="M14 6l4 4" />
          <path d="M7 13l4 4" />
          <path d="M3 21l3-1 2 2-1 3-4-4Z" fill={fill} fillOpacity="0.15" />
        </svg>
      );
    case "toilet-care":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2h10v5H7z" />
          <path d="M6 7h12a3 3 0 0 1 3 3v2a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6v-2a3 3 0 0 1 3-3z" fill={fill} fillOpacity="0.12" />
          <path d="M9 18v4" />
          <path d="M15 18v4" />
          <path d="M7 22h10" />
        </svg>
      );
    case "dishwash":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="14" rx="9" ry="5" fill={fill} fillOpacity="0.12" />
          <ellipse cx="12" cy="14" rx="6" ry="3" />
          <circle cx="16" cy="6" r="2.5" fill={fill} />
          <circle cx="11" cy="5" r="1.5" />
          <circle cx="19" cy="8" r="1" />
        </svg>
      );
    case "glass-cleaner":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 12h18" />
          <path d="M12 3v18" />
          <circle cx="7.5" cy="7.5" r="1" fill={fill} />
          <circle cx="16.5" cy="16.5" r="1" fill={fill} />
        </svg>
      );
    case "odour-pest":
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2" />
          <path d="M12.59 19.41A2 2 0 1 0 14 16H2" />
          <path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2" />
        </svg>
      );
  }
}

export default function VKlinCommercialDemos() {
  const [activeTab, setActiveTab] = useState(1); // Default to Toilet Hygiene matching Reference Image 2
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeDemo = cleaningDemos[activeTab];

  // Smoothly center active tab in horizontal scroll track on mobile
  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeTab]);

  // Advance to next tab when video ends
  const handleVideoEnded = () => {
    setActiveTab((prev) => (prev + 1) % cleaningDemos.length);
  };

  // Full 10.5-second timer fallback
  useEffect(() => {
    const autoTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % cleaningDemos.length);
    }, 10500);

    return () => clearInterval(autoTimer);
  }, [activeTab]);

  // Video autoplay on active tab switch
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    video.currentTime = 0;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [activeTab, isMuted]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
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
      className="vklin-demo-ref-section"
      id="cleaning-demos"
      aria-labelledby="action-demos-title"
    >
      <div className="hp-hero-container vklin-ref-container">
        {/* Header: Exact Matching Eyebrow Pill, Underline Accent & Bold Typography */}
        <div className="vklin-ref-header">
          <div className="vklin-ref-eyebrow">
            <Sparkles size={14} className="vklin-ref-eyebrow-spark" aria-hidden="true" />
            <span>REAL PROBLEMS, PROVEN ACTION</span>
          </div>

          <h2 id="action-demos-title" className="vklin-ref-title">
            See How{" "}
            <span className="vklin-ref-title-word">
              V-Klin
              <svg className="vklin-ref-swoosh" viewBox="0 0 95 14" fill="none" aria-hidden="true">
                <path d="M2 9C25 13 65 14 93 3" stroke="#22C55E" strokeWidth="4.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Solves Everyday Cleaning Problems
          </h2>

          <p className="vklin-ref-lead">
            Continuous commercial demonstrations showing instant visible results across floors, kitchens, bathrooms, and molecular air care.
          </p>
        </div>

        {/* 5-Category Floating White Pill Nav Bar Matching Reference Image 2 */}
        <div
          className="vklin-ref-nav-pill-bar"
          role="tablist"
          aria-label="Cleaning demonstrations"
          onKeyDown={handleTabKeyDown}
        >
          {cleaningDemos.map((demo, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={demo.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                id={`demo-tab-${demo.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="cleaning-demos-panel"
                className={`vklin-ref-nav-item ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <span className="vklin-ref-tab-icon-wrap" aria-hidden="true">
                  <TabIcon id={demo.id} isActive={isActive} />
                </span>

                <span className="vklin-ref-tab-meta">
                  <span className="vklin-ref-tab-topline">
                    <span className="vklin-ref-tab-num">{`0${idx + 1}`}</span>
                    <strong className="vklin-ref-tab-label">{demo.tabLabel}</strong>
                  </span>
                  <small className="vklin-ref-tab-sub">{demo.tabSubtitle}</small>
                </span>

                {/* Downward Pointer Triangle Arrow on Active Tab */}
                {isActive && <span className="vklin-ref-active-arrow" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        {/* Grand Demonstration Stage Showcase Card */}
        <div
          className="vklin-ref-stage-card"
          role="tabpanel"
          id="cleaning-demos-panel"
          aria-labelledby={`demo-tab-${activeDemo.id}`}
        >
          {/* Solid Blue Topbar Header with Category Action & Green Leaf Badge */}
          <div className="vklin-ref-stage-topbar">
            <div className="vklin-ref-topbar-left">
              <span className="vklin-ref-topbar-icon" aria-hidden="true">
                <TabIcon id={activeDemo.id} isActive={true} />
              </span>
              <span className="vklin-ref-topbar-title">{activeDemo.comparisonBrand}</span>
            </div>

            <div className="vklin-ref-topbar-right">
              <span className="vklin-ref-topbar-pill">
                <Leaf size={14} className="vklin-ref-leaf-icon" aria-hidden="true" />
                <span>{activeDemo.badgeText}</span>
              </span>
            </div>
          </div>

          {/* 2-Column Split Layout: Large Video on Left, Neat Organized Columns on Right */}
          <div className="vklin-ref-card-body">
            {/* Left Column: Prominent Video Player + Featured Formula Bar */}
            <div className="vklin-ref-video-col">
              <div className="vklin-ref-video-wrapper">
                <video
                  key={activeDemo.demoVideoSrc}
                  ref={videoRef}
                  src={activeDemo.demoVideoSrc}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  className="vklin-ref-video-element"
                />

                {/* Top-Left: DEMO PLAYING Badge with Red Live Indicator */}
                <div className="vklin-ref-live-badge">
                  <span className="vklin-ref-live-red-dot" aria-hidden="true" />
                  <span>DEMO PLAYING</span>
                </div>

                {/* Top-Right: Metric Badge */}
                <div className="vklin-ref-metric-badge">
                  <span className="vklin-ref-metric-val">{activeDemo.metricValue}</span>
                  <span className="vklin-ref-metric-lbl">{activeDemo.metricLabel}</span>
                </div>

                {/* Center: Large Play/Pause Toggle Overlay Button */}
                <button
                  type="button"
                  className="vklin-ref-center-play-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video demo" : "Play video demo"}
                >
                  {isPlaying ? (
                    <Pause size={24} fill="#FFFFFF" color="#FFFFFF" />
                  ) : (
                    <Play size={24} fill="#FFFFFF" color="#FFFFFF" className="vklin-ref-play-triangle" />
                  )}
                </button>

                {/* Bottom Video Controls Scrub Bar */}
                <div className="vklin-ref-controls-bar">
                  <button
                    type="button"
                    className="vklin-ref-ctrl-icon-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={14} fill="#FFFFFF" /> : <Play size={14} fill="#FFFFFF" />}
                  </button>

                  <span className="vklin-ref-time-txt">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <input
                    type="range"
                    min="0"
                    max={duration || 10}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="vklin-ref-scrubber"
                    aria-label="Video seek scrubber"
                  />

                  <button
                    type="button"
                    className="vklin-ref-ctrl-icon-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>

                  <button
                    type="button"
                    className="vklin-ref-ctrl-icon-btn"
                    onClick={toggleFullscreen}
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize size={14} />
                  </button>
                </div>
              </div>

              {/* Featured Formula Highlight Card Directly Below Video */}
              <div className="vklin-ref-featured-card">
                <div className="vklin-ref-featured-thumb">
                  <Image
                    src={activeDemo.bottleImage}
                    alt={activeDemo.productName}
                    width={56}
                    height={56}
                    className="vklin-ref-featured-img"
                  />
                </div>

                <div className="vklin-ref-featured-meta">
                  <span className="vklin-ref-featured-eyebrow">FEATURED FORMULA</span>
                  <h4 className="vklin-ref-featured-name">{activeDemo.productName}</h4>
                  <p className="vklin-ref-featured-sub">{activeDemo.tabSubtitle}</p>
                </div>

                <div className="vklin-ref-featured-action">
                  <Link href={activeDemo.productHref} className="vklin-ref-details-pill">
                    <span>Details</span>
                    <ArrowRight size={13} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Problem, V-Klin Action, Key Proven Results & CTA Buttons */}
            <div className="vklin-ref-content-col">
              {/* 1. THE PROBLEM Box (Red/Pink Theme) */}
              <div className="vklin-ref-problem-card">
                <div className="vklin-ref-problem-pill">
                  <AlertTriangle size={14} strokeWidth={2.4} aria-hidden="true" />
                  <span>THE PROBLEM</span>
                </div>
                <p className="vklin-ref-problem-desc">{activeDemo.problemSummary}</p>
              </div>

              {/* 2. V-KLIN ACTION Box (Mint Green Theme) */}
              <div className="vklin-ref-action-card">
                <div className="vklin-ref-action-pill">
                  <CheckCircle2 size={14} strokeWidth={2.4} aria-hidden="true" />
                  <span>V-KLIN ACTION</span>
                </div>
                <p className="vklin-ref-action-desc">{activeDemo.solutionSummary}</p>
              </div>

              {/* 3. KEY PROVEN RESULTS Box (White/Ice-Blue Elevated Box) */}
              <div className="vklin-ref-results-card">
                <div className="vklin-ref-results-header">
                  <Trophy size={16} className="vklin-ref-trophy-icon" aria-hidden="true" />
                  <span>KEY PROVEN RESULTS</span>
                </div>

                <ul className="vklin-ref-results-list" aria-label="Key proven results">
                  {activeDemo.actionPoints.map((point) => (
                    <li key={point} className="vklin-ref-results-item">
                      <span className="vklin-ref-check-wrap" aria-hidden="true">
                        <CheckCircle2 size={16} strokeWidth={2.6} className="vklin-ref-check-green" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Dual CTA Action Buttons (Bottom Right) */}
              <div className="vklin-ref-btn-row">
                <Link href={activeDemo.productHref} className="vklin-ref-btn-primary">
                  <ShoppingCart size={17} strokeWidth={2.2} aria-hidden="true" />
                  <span>Explore Formula</span>
                  <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                    activeDemo.productName
                  )}%20and%20would%20like%20to%20order%20or%20get%20pricing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="vklin-ref-btn-whatsapp"
                >
                  <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
                  <span>Enquire / Bulk Order</span>
                  <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
