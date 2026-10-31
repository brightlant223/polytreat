"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Layers3,
  Leaf,
  MessageCircle,
  Wrench,
} from "lucide-react";

type RangeTag = { label: string; tone: string };

interface RangeItem {
  id: string;
  number: string;
  icon: typeof Droplets;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  topBadge: string;
  bottomPill: string;
  title: string;
  description: string;
  tags: RangeTag[];
  link: string;
  linkText: string;
  tone: string;
}

const rangesData: RangeItem[] = [
  {
    id: "ranges-water",
    number: "01",
    icon: Droplets,
    imageSrc: "/images/home/solution-water-cooling-tower.jpg",
    imageAlt: "Industrial cooling tower water treatment and recirculating pipe manifold",
    eyebrow: "Industrial water & process",
    topBadge: "Industrial water & process",
    bottomPill: "Industrial water & process",
    title: "Treatment for the systems that keep your plant running.",
    description:
      "Water-treatment chemistry for boiler, cooling-water, reverse-osmosis, and effluent systems.",
    tags: [
      { label: "Boilers", tone: "blue" },
      { label: "Cooling towers", tone: "blue" },
      { label: "RO", tone: "blue" },
      { label: "Effluent", tone: "blue" },
    ],
    link: "/solutions/industrial-water",
    linkText: "Explore water treatment",
    tone: "blue",
  },
  {
    id: "ranges-construction",
    number: "02",
    icon: Layers3,
    imageSrc: "/images/home/portfolio-waterproofing.jpg",
    imageAlt: "Application of elastomeric liquid roof waterproofing coating over terrace concrete",
    eyebrow: "Construction & protection",
    topBadge: "Construction & protection",
    bottomPill: "Construction & protection",
    title: "Surface protection built around the material and the problem.",
    description:
      "Waterproofing, coatings, concrete repair, flooring, and specialty surface-treatment products.",
    tags: [
      { label: "Waterproofing", tone: "slate" },
      { label: "Coatings", tone: "slate" },
      { label: "Flooring", tone: "slate" },
      { label: "Rust treatment", tone: "slate" },
    ],
    link: "/solutions/construction-chemistry",
    linkText: "Explore construction chemistry",
    tone: "slate",
  },
  {
    id: "ranges-specialty",
    number: "03",
    icon: Wrench,
    imageSrc: "/images/home/Modern Chemical Plant Operations.png",
    imageAlt: "Specialty problem-specific chemical synthesis and formulations",
    eyebrow: "Specialty products",
    topBadge: "Problem-specific",
    bottomPill: "Specialty products",
    title: "Single-purpose products, each aimed at one problem.",
    description:
      "A dedicated line for jobs the main ranges do not cover, from odour control to HVAC coil care.",
    tags: [
      { label: "Odour control", tone: "teal" },
      { label: "HVAC coil cleaning", tone: "teal" },
      { label: "Rust conversion", tone: "teal" },
      { label: "Pool & drinking water", tone: "teal" },
    ],
    link: "/specialty",
    linkText: "Explore specialty products",
    tone: "teal",
  },
  {
    id: "ranges-vklin",
    number: "04",
    icon: Leaf,
    imageSrc: "/images/home/vklin-og-lineup.webp",
    imageAlt: "V-Klin product lineup of floor-cleaning and facility-care bottles",
    eyebrow: "V-Klin care",
    topBadge: "♡ V-Klin care",
    bottomPill: "V-Klin care",
    title: "Everyday cleaning for homes, institutions, and facilities.",
    description:
      "Cleaning and facility-care products grouped under PolyTreat's V-Klin brand.",
    tags: [
      { label: "Floor & surface", tone: "rose" },
      { label: "Handwash", tone: "cyan" },
      { label: "Dishwash", tone: "amber" },
      { label: "Glass & toilet", tone: "purple" },
    ],
    link: "/vklin/products",
    linkText: "Explore the V-Klin range",
    tone: "green",
  },
];

export default function InteractiveRangesSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  return (
    <section
      className="hp-section hp-section-tint hp-ranges-section"
      id="ranges"
      aria-labelledby="ranges-title"
    >
      {/* Aquatic Background Pattern */}
      <div className="hp-ranges-bg-decor" aria-hidden="true">
        <div className="hp-ranges-wave-lines" />
      </div>

      <div className="hp-hero-container">
        {/* Section Header */}
        <div className="hp-ranges-header hp-reveal">
          <div className="hp-ranges-title-box">
            <div className="hp-ranges-eyebrow">
              <span className="hp-ranges-eyebrow-dot" aria-hidden="true" />
              <span>WHAT WE MAKE</span>
            </div>
            <h2 id="ranges-title" className="hp-ranges-title">
              Four ranges, one manufacturer.
              <svg
                className="hp-ranges-brush"
                viewBox="0 0 260 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 11C70 4 160 3 256 9C205 14 115 15 38 12"
                  stroke="#0EA5E9"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </h2>
          </div>
          <p className="hp-ranges-lead">
            PolyTreat formulates and produces all four of its product ranges at its own
            sites, organized around the systems, surfaces, and spaces they serve.
          </p>
        </div>

        {/* Interactive Expanding Horizontal Cards */}
        <div
          className="hp-interactive-accordion-track"
          role="region"
          aria-label="Interactive product ranges carousel"
        >
          {rangesData.map((range, index) => {
            const isExpanded = activeCardIndex === index;
            const RangeIcon = range.icon;

            return (
              <div
                key={range.id}
                className={`hp-accordion-card${isExpanded ? " is-expanded" : " is-compact"}`}
                onMouseEnter={() => setActiveCardIndex(index)}
                onClick={() => setActiveCardIndex(index)}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={`${range.eyebrow} category card`}
              >
                {/* Background watermark ripple graphics */}
                <div className="hp-card-watermark" aria-hidden="true">
                  <span className="hp-watermark-circle hp-watermark-circle-1" />
                  <span className="hp-watermark-circle hp-watermark-circle-2" />
                </div>

                {/* ==================================================== */}
                {/* EXPANDED STATE VIEW                                  */}
                {/* ==================================================== */}
                {isExpanded ? (
                  <div className="hp-expanded-content">
                    {/* Left Column: Details & CTA */}
                    <div className="hp-expanded-left">
                      <div className="hp-expanded-top">
                        <div className="hp-expanded-eyebrow-row">
                          <span className="hp-expanded-num-badge">{range.number}</span>
                          <span className="hp-expanded-category-badge">
                            <RangeIcon size={13} strokeWidth={2.4} aria-hidden="true" />
                            <span>{range.topBadge}</span>
                          </span>
                        </div>

                        <h3 className="hp-expanded-title">{range.title}</h3>

                        <p className="hp-expanded-description">{range.description}</p>

                        <div className="hp-expanded-tags" aria-label="Product areas">
                          {range.tags.map((tag) => (
                            <span key={tag.label} className={`hp-tag-${tag.tone}`}>
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hp-expanded-bottom">
                        <Link href={range.link} className="hp-expanded-cta-link">
                          <span className="hp-cta-label">{range.linkText}</span>
                          <span className="hp-cta-arrow-circle">
                            <ArrowUpRight size={18} strokeWidth={2.4} aria-hidden="true" />
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Industrial Photograph with Zoom */}
                    <div className="hp-expanded-right">
                      <div className="hp-expanded-media-box">
                        <Image
                          src={range.imageSrc}
                          alt={range.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                          className="hp-expanded-image"
                        />
                        <div className="hp-expanded-image-shade" aria-hidden="true" />

                        <div className="hp-expanded-image-pill">
                          <RangeIcon size={14} strokeWidth={2.2} aria-hidden="true" />
                          <span>{range.bottomPill}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ==================================================== */
                  /* COMPACT / COLLAPSED STATE VIEW                       */
                  /* ==================================================== */
                  <div className="hp-compact-content">
                    <div className="hp-compact-top">
                      <div className="hp-compact-header-row">
                        <span className="hp-compact-num">{range.number}</span>
                        <span className="hp-compact-icon-box">
                          <RangeIcon size={15} strokeWidth={2.2} aria-hidden="true" />
                        </span>
                      </div>

                      <h3 className="hp-compact-title">{range.eyebrow}</h3>
                      <p className="hp-compact-preview-title">{range.title}</p>
                    </div>

                    {/* Compact Image Thumbnail Preview */}
                    <div className="hp-compact-image-preview">
                      <Image
                        src={range.imageSrc}
                        alt=""
                        fill
                        sizes="180px"
                        className="hp-compact-thumb-img"
                      />
                    </div>

                    <div className="hp-compact-bottom">
                      <span className="hp-compact-read-label">Explore</span>
                      <span className="hp-compact-arrow-btn" aria-hidden="true">
                        <ArrowUpRight size={15} strokeWidth={2.4} />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Consultation Footer */}
        <div className="hp-section-foot hp-ranges-foot">
          <span className="hp-foot-question">Not sure which range fits your requirement?</span>
          <a
            className="hp-btn-whatsapp"
            href="https://wa.me/919820235995?text=Hi%20PolyTreat%2C%20I%27d%20like%20to%20discuss%20which%20product%20range%20fits%20my%20application."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight size={14} aria-hidden="true" className="hp-whatsapp-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
