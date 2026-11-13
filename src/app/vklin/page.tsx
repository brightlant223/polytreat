import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  Award,
  Droplet,
  Hand,
  Home,
  Layers,
  Leaf,
  Search,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "V-Klin Home & Facility Care | PolyTreat Chemicals",
  description:
    "Explore V-Klin, PolyTreat's home and facility-care cleaning range across floor and surface care, handwash, dishwashing, glass and washroom care.",
};

const careCategories = [
  {
    id: "floor-surface",
    number: "01",
    icon: Layers,
    title: "Floor & surface care",
    description: "Cleaning products for floors and commonly used surfaces.",
    image: "/images/home/categories/cat-floor-surface-clean.jpg",
    alt: "Floor cleaning and surface care",
  },
  {
    id: "hand-hygiene",
    number: "02",
    icon: Hand,
    title: "Hand care & hygiene",
    description: "Liquid hand cleaning products for everyday use.",
    image: "/images/home/categories/cat-hand-hygiene-clean.jpg",
    alt: "Hand hygiene and liquid hand soap",
  },
  {
    id: "dishwashing",
    number: "03",
    icon: Droplet,
    title: "Dishwashing",
    description: "Products for efficient dish and kitchenware cleaning.",
    image: "/images/home/categories/cat-dishwashing-clean.jpg",
    alt: "Dishwashing liquid gel and clean tableware",
  },
  {
    id: "glass-care",
    number: "04",
    icon: AppWindow,
    title: "Glass & window care",
    description: "Products for glass, mirrors and reflective surfaces.",
    image: "/images/home/categories/cat-glass-window-clean.jpg",
    alt: "Streak-free glass and window cleaning",
  },
  {
    id: "toilet-care",
    number: "05",
    icon: ShowerHead,
    title: "Bathroom & toilet care",
    description: "Cleaners for bathrooms and toilet cleaning tasks.",
    image: "/images/home/categories/cat-bathroom-toilet-clean.jpg",
    alt: "Bathroom and toilet hygiene cleaning",
  },
  {
    id: "odour-care",
    number: "06",
    icon: Wind,
    title: "Odour & air care",
    description: "Odour control products for rooms and high-traffic areas.",
    image: "/images/home/categories/cat-odour-air-clean.jpg",
    alt: "Air freshener and duct odour elimination",
  },
  {
    id: "natural-wellness",
    number: "07",
    icon: Leaf,
    title: "Natural wellness",
    description: "Plant-based formulations for everyday household spaces.",
    image: "/images/home/categories/cat-natural-wellness-clean.jpg",
    alt: "Herbal and natural wellness formulations",
  },
];

const bottomBenefits = [
  {
    icon: Award,
    title: "Everyday Cleaning Solutions",
    description: "A complete range for home and facility care.",
  },
  {
    icon: Leaf,
    title: "Task-based Categories",
    description: "Choose products by your cleaning need.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description: "Manufactured by PolyTreat with consistent standards.",
  },
  {
    icon: Sparkles,
    title: "Clean, Fresh Spaces",
    description: "Support for hygienic, pleasant and well-maintained environments.",
  },
];

export default function VKlinPage() {
  return (
    <main className="vklin-overview-page">
      {/* 1. HERO SECTION */}
      <section className="vklin-overview-hero" aria-labelledby="vklin-hero-heading">
        {/* Clean Vector Bottom Wave Decoration */}
        <div className="vklin-hero-bottom-wave-layer" aria-hidden="true">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
            className="vklin-hero-wave-svg"
          >
            <path
              d="M0,42 C260,72 500,82 740,50 C980,18 1220,62 1440,36 L1440,90 L0,90 Z"
              fill="rgba(0, 143, 69, 0.07)"
            />
            <path
              d="M0,56 C280,86 540,90 780,65 C1020,40 1250,72 1440,52 L1440,90 L0,90 Z"
              fill="rgba(32, 185, 106, 0.15)"
            />
          </svg>
        </div>

        <div className="container vklin-hero-inner">
          <div className="vklin-hero-grid">
            {/* Left Content Column (~45% width) */}
            <div className="vklin-hero-content">
              {/* Kicker Label with Leaf */}
              <div className="vklin-hero-kicker-wrap">
                <Leaf size={16} className="vklin-hero-kicker-leaf" aria-hidden="true" />
                <span className="vklin-hero-kicker-text">V-KLIN HOME &amp; FACILITY CARE</span>
                <span className="vklin-hero-kicker-bar" aria-hidden="true" />
              </div>

              {/* Main Heading */}
              <h1 id="vklin-hero-heading" className="vklin-hero-main-title">
                Everyday cleaning,<br />
                under <span className="vklin-hero-green-brand">V-Klin.</span>
              </h1>

              {/* Supporting Text */}
              <p className="vklin-hero-description">
                V-Klin brings together PolyTreat&apos;s cleaning products for homes and shared
                spaces, with categories organised around familiar cleaning tasks.
              </p>

              {/* Action Buttons */}
              <div className="vklin-hero-cta-group">
                <a href="#care-categories" className="btn-vklin-hero-primary">
                  <span>Explore care categories</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link href="/vklin/products" className="btn-vklin-hero-secondary">
                  <span>View the product range</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              {/* Three Feature Highlights with Vertical Separators */}
              <div className="vklin-hero-feature-highlights">
                <div className="vklin-hero-feature-item">
                  <Sparkles size={18} className="vklin-hero-feature-icon" aria-hidden="true" />
                  <div className="vklin-hero-feature-label">
                    <span>Effective</span>
                    <span>Cleaning</span>
                  </div>
                </div>

                <div className="vklin-hero-feature-divider" aria-hidden="true" />

                <div className="vklin-hero-feature-item">
                  <Leaf size={18} className="vklin-hero-feature-icon" aria-hidden="true" />
                  <div className="vklin-hero-feature-label">
                    <span>Pleasant</span>
                    <span>Fragrances</span>
                  </div>
                </div>

                <div className="vklin-hero-feature-divider" aria-hidden="true" />

                <div className="vklin-hero-feature-item">
                  <Home size={18} className="vklin-hero-feature-icon" aria-hidden="true" />
                  <div className="vklin-hero-feature-label">
                    <span>For Home &amp;</span>
                    <span>Shared Spaces</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Showcase Column (~55% width) */}
            <div className="vklin-hero-showcase-column">
              <div className="vklin-hero-showcase-wrapper">
                <Image
                  src="/images/vklin/hero-showcase-clean@2x.jpg"
                  alt="V-Klin household and facility care cleaning products arrangement"
                  width={1198}
                  height={1048}
                  priority
                  className="vklin-hero-showcase-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 680px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CARE CATEGORIES SECTION */}
      <section className="vklin-care-categories-section" id="care-categories" aria-labelledby="care-categories-title">
        <div className="container">
          {/* Section Header */}
          <div className="vklin-categories-header-row">
            <div className="vklin-categories-title-block">
              <div className="vklin-care-kicker-row">
                <span className="vklin-care-kicker">THE CARE RANGE</span>
                <span className="vklin-care-kicker-line" aria-hidden="true" />
              </div>
              <h2 id="care-categories-title" className="vklin-care-heading">
                Find your cleaning category.
              </h2>
            </div>

            <div className="vklin-categories-support-block">
              <span className="vklin-care-support-accent" aria-hidden="true" />
              <p className="vklin-care-support-text">
                A clear starting point for everyday cleaning across homes, workplaces and shared facilities.
              </p>
            </div>
          </div>

          {/* Seven Category Cards in 1 Horizontal Row on Desktop */}
          <div className="vklin-categories-7-grid" role="list">
            {careCategories.map(({ id, number, icon: IconComponent, title, description, image, alt }) => (
              <Link
                key={id}
                href={`/vklin/products#${id}`}
                className="vklin-care-card-7"
                role="listitem"
                title={`Explore ${title} products`}
              >
                {/* Card Top: Icon & Number */}
                <div className="vklin-care-card-top">
                  <div className="vklin-care-card-icon-box">
                    <IconComponent size={18} className="vklin-care-icon" aria-hidden="true" />
                  </div>
                  <span className="vklin-care-card-num">{number}</span>
                </div>

                {/* Card Body: Title & Description */}
                <div className="vklin-care-card-body">
                  <h3 className="vklin-care-card-title">{title}</h3>
                  <p className="vklin-care-card-desc">{description}</p>
                </div>

                {/* Card Bottom: Subtle Category Visual */}
                <div className="vklin-care-card-visual">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="vklin-care-thumb-img"
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 25vw, 160px"
                  />
                  <div className="vklin-care-visual-fade" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          {/* 3. PRODUCT DISCOVERY CTA BAR */}
          <div className="vklin-discovery-cta-bar">
            <div className="vklin-discovery-left">
              <div className="vklin-discovery-search-icon">
                <Search size={20} className="vklin-search-icon" aria-hidden="true" />
              </div>
              <span className="vklin-discovery-text">
                Looking for a product or the right category for your site?
              </span>
            </div>
            <Link href="/vklin/products" className="btn-vklin-discovery-action">
              <span>Browse products</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* 4. BOTTOM BENEFITS SECTION (4 Horizontally Aligned Items) */}
          <div className="vklin-bottom-benefits-row">
            {bottomBenefits.map(({ icon: BenefitIcon, title, description }, index) => (
              <div key={title} className={`vklin-benefit-col ${index > 0 ? "has-divider" : ""}`}>
                <div className="vklin-benefit-icon-wrap">
                  <BenefitIcon size={22} className="vklin-benefit-feature-icon" aria-hidden="true" />
                </div>
                <div className="vklin-benefit-col-body">
                  <h4 className="vklin-benefit-col-title">{title}</h4>
                  <p className="vklin-benefit-col-desc">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative bottom corner wave accents */}
        <div className="vklin-bottom-corner-wave-left" aria-hidden="true" />
        <div className="vklin-bottom-corner-wave-right" aria-hidden="true" />
      </section>
    </main>
  );
}
