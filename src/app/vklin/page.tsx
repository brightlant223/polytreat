import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VKlinHeroCarousel from "@/components/VKlinHeroCarousel";
import {
  AppWindow,
  ArrowDown,
  ArrowRight,
  Droplets,
  Hand,
  House,
  Leaf,
  ShowerHead,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "V-Klin Home & Facility Care | PolyTreat Chemicals",
  description:
    "Explore V-Klin, PolyTreat's home and facility-care cleaning range across floor and surface care, handwash, dishwashing, glass and washroom care.",
};

const categories = [
  {
    id: "floor-surface",
    number: "01",
    icon: House,
    title: "Floor & surface care",
    description: "Cleaning products for floors and commonly used surfaces.",
  },
  {
    id: "hand-hygiene",
    number: "02",
    icon: Hand,
    title: "Hand care & hygiene",
    description: "Liquid hand-cleaning products for everyday use.",
  },
  {
    id: "dishwashing",
    number: "03",
    icon: Droplets,
    title: "Dishwashing",
    description: "Products for routine dish and kitchenware cleaning.",
  },
  {
    id: "glass-care",
    number: "04",
    icon: AppWindow,
    title: "Glass & window care",
    description: "Products for glass, mirrors and appliance surfaces.",
  },
  {
    id: "toilet-care",
    number: "05",
    icon: ShowerHead,
    title: "Bathroom & toilet care",
    description: "Products for bathroom and toilet cleaning tasks.",
  },
  {
    id: "odour-care",
    number: "06",
    icon: Wind,
    title: "Odour & air care",
    description: "Odour control for ducts, coils and hard-to-reach areas.",
  },
  {
    id: "natural-wellness",
    number: "07",
    icon: Leaf,
    title: "Natural wellness",
    description: "Plant-based products for everyday household spaces.",
  },
];

export default function VKlinPage() {
  return (
    <main className="vklin-page">
      {/* Spacious Hero Section with Modern Typography & 3D Podium Showcase */}
      <section className="vklin-page-hero" aria-labelledby="vklin-page-title">
        <div className="vklin-container vklin-page-hero-layout">
          <div className="vklin-page-copy">
            <div className="vklin-eyebrow-wrap">
              <span className="eyebrow eyebrow-green">
                <Leaf size={14} className="vklin-eyebrow-leaf" aria-hidden="true" />
                <span>PolyTreat home &amp; facility care</span>
              </span>
              <span className="vklin-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 id="vklin-page-title">
              Everyday cleaning,<br />
              <span>under V-Klin.</span>
            </h1>

            <p>
              V-Klin brings together PolyTreat&apos;s cleaning products for homes and shared
              spaces, with categories organised around familiar cleaning tasks.
            </p>

            <div className="vklin-page-actions">
              <Link className="btn btn-vklin-primary" href="#vklin-categories">
                <span>Explore care categories</span>
                <ArrowDown size={15} aria-hidden="true" />
              </Link>
              <Link className="btn btn-vklin-secondary" href="/vklin/products">
                <span>View the product range</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium V-Klin Product Lineup Carousel Showcase */}
          <div className="vklin-hero-showcase-wrap" aria-label="V-Klin brand showcase">
            <VKlinHeroCarousel />
          </div>
        </div>
      </section>

      {/* Seven Cleaning Categories Section (All 7 in 1 Clean Horizontal Row on Desktop) */}
      <section
        className="section vklin-page-categories"
        id="vklin-categories"
        aria-labelledby="vklin-categories-title"
      >
        <div className="vklin-container">
          <div className="vklin-categories-header">
            <div className="vklin-categories-head-left">
              <div className="vklin-eyebrow-wrap">
                <span className="eyebrow eyebrow-green">THE CARE RANGE</span>
                <span className="vklin-eyebrow-line" aria-hidden="true" />
              </div>
              <h2 id="vklin-categories-title">Find your cleaning category.</h2>
            </div>

            <div className="vklin-categories-head-right">
              <span className="vklin-head-divider" aria-hidden="true" />
              <p>
                A clear starting point for everyday cleaning across homes, workplaces and
                shared facilities.
              </p>
            </div>
          </div>

          {/* 7 Category Cards in ONE Horizontal Row on Desktop */}
          <div className="vklin-category-row-7" role="list">
            {categories.map(({ id, number, icon: Icon, title, description }) => (
              <Link
                className="vklin-cat-7-card"
                href={`/vklin/products#${id}`}
                key={id}
                role="listitem"
                title={`Explore ${title}`}
              >
                <div className="vklin-cat-7-topline">
                  <span className="vklin-cat-7-icon">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="vklin-cat-7-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            ))}
          </div>

          {/* Bottom Range Note Bar */}
          <div className="vklin-page-range-note">
            <span className="vklin-page-range-mark">
              <Droplets size={17} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <p>Looking for a product or the right category for your site?</p>
            <Link href="/vklin/products" className="vklin-range-browse-btn">
              <span>Browse products</span>
              <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
