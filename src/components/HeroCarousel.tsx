"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Droplets,
  Factory,
  FlaskConical,
  MapPin,
  MessageCircle,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

const slides = [
  {
    id: "water",
    label: "Industrial Water & Plants",
    selectorLabel: "WATER & PLANTS",
    video: "https://assets.mixkit.co/videos/14631/14631-720.mp4",
    lead: "Water treatment chemistry for critical plant systems — boilers, cooling towers, reverse osmosis, and effluent.",
    captionTitle: "Boiler · Cooling · RO · Effluent",
    chipBadge: "Water Treatment Systems",
    icon: Droplets,
  },
  {
    id: "laboratory",
    label: "70,000+ Sq.ft Laboratory & R&D",
    selectorLabel: "LABORATORY",
    video: "https://assets.mixkit.co/videos/47783/47783-720.mp4",
    lead: "Advanced chemical synthesis, quality control, titration, and certified formulation testing.",
    captionTitle: "In-House R&D · ISO Certified QC",
    chipBadge: "Certified Testing & Formulation",
    icon: FlaskConical,
  },
  {
    id: "supply",
    label: "Supply & Plant Infrastructure",
    selectorLabel: "SUPPLY & CARE",
    video: "https://assets.mixkit.co/videos/4380/4380-720.mp4",
    lead: "Industrial piping protection, heavy-duty facility care, and multi-site distribution across Maharashtra.",
    captionTitle: "Supply · Surface Care · Infrastructure",
    chipBadge: "Manufacturing & Distribution",
    icon: Factory,
  },
];

const headlinePhrases = [
  "for water, structures, and everyday care.",
  "for industrial boilers, cooling & RO plants.",
  "for certified chemical testing & QC labs.",
  "for concrete protection & waterproofing.",
  "for everyday hygiene & facility care.",
];

const proofChips = [
  { icon: CalendarClock, text: "Manufacturing since 1987" },
  { icon: MapPin, text: "Active clients in Maharashtra" },
  { icon: FlaskConical, text: "70,000+ Sq.ft Laboratory" },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeSlide = slides[activeIndex];

  // Motion preference detection
  useEffect(() => {
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionPref.matches);
    updateMotion();
    motionPref.addEventListener("change", updateMotion);
    return () => motionPref.removeEventListener("change", updateMotion);
  }, []);

  // Synchronize play/pause for active video
  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIndex) {
        if (isPlaying) {
          vid.currentTime = 0;
          const playPromise = vid.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          vid.pause();
        }
      } else {
        vid.pause();
      }
    });
  }, [activeIndex, isPlaying]);

  // Handle mute/unmute
  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = isMuted;
    });
  }, [isMuted]);

  // Auto-advance both video slide and rotating headline every 5 seconds (5000ms)
  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion || !isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
      setHeadlineIndex((current) => (current + 1) % headlinePhrases.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, headlineIndex, isHovered, isFocused, prefersReducedMotion, isPlaying]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
    setHeadlineIndex(index % headlinePhrases.length);
  }

  function togglePlayPause() {
    setIsPlaying((prev) => {
      const next = !prev;
      const currentVid = videoRefs.current[activeIndex];
      if (currentVid) {
        if (next) currentVid.play().catch(() => {});
        else currentVid.pause();
      }
      return next;
    });
  }

  function toggleMute() {
    setIsMuted((prev) => !prev);
  }

  const ActiveIcon = activeSlide.icon;

  return (
    <section
      className="hp-hero"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
    >
      {/* Organic water splash & droplet decorative background */}
      <div className="hp-hero-water-bg" aria-hidden="true">
        {/* Top-Right Water Splash Graphic */}
        <div className="hp-water-splash hp-water-splash-top-right">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M120 0C170 50 160 110 220 140C290 175 360 110 420 160C470 200 480 300 500 360V0H120Z"
              fill="url(#waterGlow1)"
              opacity="0.65"
            />
            <path
              d="M260 0C300 45 350 70 410 75C460 79 490 120 500 150V0H260Z"
              fill="url(#waterGlow2)"
              opacity="0.8"
            />
            {/* Liquid Droplets */}
            <circle cx="190" cy="180" r="14" fill="#38BDF8" opacity="0.35" />
            <circle cx="193" cy="177" r="4" fill="#FFFFFF" opacity="0.8" />
            <circle cx="140" cy="220" r="8" fill="#0EA5E9" opacity="0.3" />
            <circle cx="142" cy="218" r="2.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="280" cy="250" r="20" fill="#0284C7" opacity="0.18" />
            <circle cx="284" cy="246" r="6" fill="#FFFFFF" opacity="0.7" />
            <defs>
              <linearGradient id="waterGlow1" x1="500" y1="0" x2="160" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="0.6" stopColor="#0EA5E9" stopOpacity="0.2" />
                <stop offset="1" stopColor="#BAE6FD" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="waterGlow2" x1="500" y1="0" x2="300" y2="150" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7DD3FC" stopOpacity="0.6" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Bottom-Left Water Splash Graphic */}
        <div className="hp-water-splash hp-water-splash-bottom-left">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 400C50 330 30 260 90 220C160 170 230 230 300 180C360 135 370 40 420 0H0V400Z"
              fill="url(#waterGlow3)"
              opacity="0.45"
            />
            <circle cx="180" cy="140" r="12" fill="#0284C7" opacity="0.22" />
            <circle cx="183" cy="138" r="3.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="320" cy="100" r="16" fill="#38BDF8" opacity="0.25" />
            <circle cx="324" cy="97" r="5" fill="#FFFFFF" opacity="0.7" />
            <circle cx="90" cy="160" r="7" fill="#0EA5E9" opacity="0.3" />
            <defs>
              <linearGradient id="waterGlow3" x1="0" y1="400" x2="350" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="0.7" stopColor="#0284C7" stopOpacity="0.15" />
                <stop offset="1" stopColor="#E0F2FE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Watermark Engineering Gear / Chemical Ring */}
        <div className="hp-hero-watermark" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="170" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.14" />
            <circle cx="200" cy="200" r="130" stroke="#0EA5E9" strokeWidth="1.5" opacity="0.1" />
            <circle cx="200" cy="200" r="90" stroke="#38BDF8" strokeWidth="2" strokeDasharray="16 12" opacity="0.18" />
            <circle cx="200" cy="200" r="40" stroke="#0284C7" strokeWidth="1.5" opacity="0.12" />
          </svg>
        </div>
      </div>

      {/* Expanded Wide Container */}
      <div className="hp-hero-container hp-hero-grid">
        {/* Left Column: Headline, Proof, Actions */}
        <div className="hp-hero-copy">
          <div className="hp-hero-eyebrow-wrapper">
            <span className="hp-eyebrow-dash" aria-hidden="true" />
            <span className="hp-eyebrow-text">POLYTREAT CHEMICALS PVT. LTD.</span>
          </div>

          <h1 id="hero-title" className="hp-hero-title">
            Applied chemistry{" "}
            <span
              className="hp-hero-highlight hp-hero-rotating-phrase"
              key={headlineIndex}
            >
              {headlinePhrases[headlineIndex]}
            </span>
          </h1>

          <p className="hp-hero-lead" aria-live="polite" key={activeSlide.id}>
            {activeSlide.lead}
          </p>

          <ul className="hp-hero-proof" aria-label="Company credentials">
            {proofChips.map(({ icon: Icon, text }) => (
              <li key={text} className="hp-hero-proof-item">
                <span className="hp-proof-icon-wrap">
                  <Icon size={15} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="hp-hero-actions">
            <Link className="hp-btn-primary" href="#ranges">
              <span>Explore solutions</span>
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            <a
              className="hp-btn-secondary"
              href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20a%20water%20treatment%20or%20industrial%20chemical%20requirement."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} strokeWidth={2} aria-hidden="true" />
              <span>Talk to our team</span>
            </a>
          </div>
        </div>

        {/* Right Column: Industrial Video Display & Control Frame */}
        <div className="hp-hero-visual">
          <div
            className="hp-hero-stage"
            role="region"
            aria-label={`${activeSlide.label} video presentation`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocusCapture={() => setIsFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
            }}
          >
            {/* Video Slides with Smooth Fade */}
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  className={`hp-hero-video-slide${isActive ? " is-active" : ""}`}
                  key={slide.id}
                  aria-hidden={!isActive}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.video}
                    className="hp-hero-video-element"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="auto"
                  />
                  <div className="hp-hero-video-vignette" aria-hidden="true" />
                </div>
              );
            })}

            {/* Video Playback Controls (Play/Pause & Sound) */}
            <div className="hp-hero-video-controls" aria-label="Video playback controls">
              <button
                type="button"
                className="hp-video-ctrl-btn"
                onClick={togglePlayPause}
                title={isPlaying ? "Pause video" : "Play video"}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={15} strokeWidth={2.4} /> : <Play size={15} strokeWidth={2.4} />}
              </button>
              <button
                type="button"
                className="hp-video-ctrl-btn"
                onClick={toggleMute}
                title={isMuted ? "Unmute video" : "Mute video"}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={15} strokeWidth={2.4} /> : <Volume2 size={15} strokeWidth={2.4} />}
              </button>
            </div>

            {/* Floating Glassmorphism Badge (matches user reference image) */}
            <div className="hp-hero-glass-badge">
              <div className="hp-badge-icon-box">
                <ActiveIcon size={20} strokeWidth={2.2} className="hp-badge-icon" />
              </div>
              <div className="hp-badge-text-box">
                <span className="hp-badge-title">{activeSlide.label}</span>
                <span className="hp-badge-subtitle">{activeSlide.captionTitle}</span>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs below Video (Matching the reference screenshot) */}
          <div className="hp-hero-tabs" role="tablist" aria-label="Hero video topics">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const TabIcon = slide.icon;
              return (
                <button
                  className={`hp-hero-tab${isActive ? " is-active" : ""}`}
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View ${slide.selectorLabel}`}
                  onClick={() => showSlide(index)}
                >
                  <TabIcon size={14} strokeWidth={2.2} className="hp-hero-tab-icon" aria-hidden="true" />
                  <span className="hp-hero-tab-label">{slide.selectorLabel}</span>
                  {isActive && <span className="hp-hero-tab-dot" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
