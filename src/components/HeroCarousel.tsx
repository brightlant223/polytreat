"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  Fan,
  Factory,
  FlaskConical,
  MessageCircle,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";

/* 5 hero slides - each with poster for no empty frame */
const slides = [
  {
    id: "water",
    label: "Industrial Water & Plants",
    selectorLabel: "WATER & PLANTS",
    video: "https://assets.mixkit.co/videos/14631/14631-720.mp4",
    poster: "/images/home/industrial-steam-boilers-water-treatment.jpg",
    lead: "Water treatment chemistry for critical plant systems: boilers, cooling towers, reverse osmosis, and effluent.",
    captionTitle: "Boiler, cooling, RO, effluent",
    chipBadge: "Water Treatment Systems",
    icon: Droplets,
  },
  {
    id: "cooling",
    label: "Industrial Cooling Towers & Loops",
    selectorLabel: "COOLING LOOPS",
    video: "https://assets.mixkit.co/videos/47783/47783-720.mp4",
    poster: "/images/home/industrial-cooling-towers-loops.jpg",
    lead: "Microbiological fouling prevention, scale inhibition, and biocide programs for industrial cooling towers.",
    captionTitle: "Recirculating loops, Legionella control",
    chipBadge: "Cooling Water Systems",
    icon: Fan,
  },
  {
    id: "laboratory",
    label: "70,000+ Sq.ft Laboratory & QC",
    selectorLabel: "LABORATORY",
    video: "https://assets.mixkit.co/videos/4380/4380-720.mp4",
    poster: "/images/home/hero-chemical-laboratory.jpg",
    lead: "Advanced chemical synthesis, quality control, titration, and certified formulation testing.",
    captionTitle: "In-house R&D, ISO-certified QC",
    chipBadge: "Certified Testing & Formulation",
    icon: FlaskConical,
  },
  {
    id: "effluent",
    label: "Effluent Treatment Plants & Clarifiers",
    selectorLabel: "EFFLUENT ETP",
    video: "https://assets.mixkit.co/videos/14631/14631-720.mp4",
    poster: "/images/home/hero-effluent-etp.jpg",
    lead: "Coagulant, flocculant, and heavy metal precipitation solutions engineered to meet zero-discharge standards.",
    captionTitle: "Aeration, coagulation, zero discharge",
    chipBadge: "Effluent Treatment Plant",
    icon: Factory,
  },
  {
    id: "supply",
    label: "Chemical Supply & Infrastructure Care",
    selectorLabel: "SUPPLY & CARE",
    video: "https://assets.mixkit.co/videos/47783/47783-720.mp4",
    poster: "/images/home/hero-supply-facility.jpg",
    lead: "Industrial piping protection, heavy-duty facility care, and multi-site distribution across Maharashtra.",
    captionTitle: "Industrial supply, facility protection",
    chipBadge: "Industrial Chemical Infrastructure",
    icon: Factory,
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const motionPref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setPrefersReducedMotion(motionPref.matches);
    updateMotion();
    motionPref.addEventListener("change", updateMotion);
    return () => motionPref.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((vid, idx) => {
      if (!vid) return;
      if (idx === activeIndex) {
        if (isPlaying) {
          vid.currentTime = 0;
          const playPromise = vid.play();
          if (playPromise !== undefined) playPromise.catch(() => {});
        } else {
          vid.pause();
        }
      } else {
        vid.pause();
      }
    });
  }, [activeIndex, isPlaying]);

  useEffect(() => {
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = isMuted;
    });
  }, [isMuted]);

  useEffect(() => {
    if (isHovered || isFocused || prefersReducedMotion || !isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isHovered, isFocused, prefersReducedMotion, isPlaying]);

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
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
      {/* Single hero video, no decorative splashes */}
      <div className="hp-hero-video-wrapper" aria-hidden="true">
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
                poster={slide.poster}
                className="hp-hero-video-element"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
              />
            </div>
          );
        })}
      </div>

      {/* Video Controls */}
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

      /* Floating badge removed to reduce text blocks */

      {/* Content overlay */}
      <div className="hp-hero-container hp-hero-grid">
        <div className="hp-hero-copy">
          <h1 id="hero-title" className="hp-hero-title">
            Applied chemistry for water, structures, and everyday care.
          </h1>

          <p className="hp-hero-lead" aria-live="polite" key={activeSlide.id}>
            {activeSlide.lead}
          </p>

          <div className="hp-hero-actions">
            <Link className="hp-btn-primary" href="#ranges">
              <span>Explore solutions</span>
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Visual column - interactive tabs */}
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
            {/* Interactive Navigation Tabs */}
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
                    <TabIcon size={16} strokeWidth={2.2} className="hp-hero-tab-icon" aria-hidden="true" />
                    <span className="hp-hero-tab-label sr-only">{slide.selectorLabel}</span>
                    {isActive && <span className="hp-hero-tab-dot" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
