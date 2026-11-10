import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IndustrialFamily } from "@/data/industrialFamilies";
import { CtaWaterSplashDesign } from "@/components/CtaWaterSplashDesign";

/**
 * Shared renderer for the industrial product families that do not have a
 * system page of their own: paint preservatives, sugar-process chemicals,
 * fireside treatment and automotive chemicals.
 *
 * The hero figure is a labelled panel rather than a photograph. There is no
 * client photograph of a paint store, a sugar mill, a fired boiler or a
 * vehicle cooling system, and a stock image of someone else's facility would
 * misrepresent the product range.
 */
export default function IndustrialFamilyPage({
  family,
  icon: Icon,
  categoryIcons = {},
  mainClassName,
  figureImage,
}: {
  family: IndustrialFamily;
  icon: LucideIcon;
  categoryIcons?: Record<string, LucideIcon>;
  mainClassName?: string;
  figureImage?: { src: string; alt: string; caption: string };
}) {
  const isSingle = family.categories.length === 1;
  const hasModernSolutionTheme =
    family.id === "paint-preservatives" ||
    family.id === "sugar-process-chemicals" ||
    family.id === "fireside-treatment" ||
    family.id === "automotive-chemicals";
  const waveIds = {
    back: `family-wave-back-${family.id}`,
    mid: `family-wave-mid-${family.id}`,
    front: `family-wave-front-${family.id}`,
    shine: `family-wave-shine-${family.id}`,
  };
  const heroClasses = ["industrial-family-page", mainClassName].filter(Boolean).join(" ");

  return (
    <main className={heroClasses}>
      <section className="industrial-family-hero" aria-labelledby="family-title">
        <div className="container">
          <nav className="industrial-family-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className={hasModernSolutionTheme ? "industrial-family-breadcrumb-home" : undefined}>
              {hasModernSolutionTheme && <Home size={13} aria-hidden="true" />}
              <span>Home</span>
            </Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/industrial-water">Industrial water</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{family.name}</span>
          </nav>

          <div className="industrial-family-hero-layout">
            <div className="industrial-family-hero-copy">
              <span className="eyebrow">
                <Icon size={15} aria-hidden="true" /> {family.eyebrow}
              </span>
              <h1 id="family-title">{family.title}</h1>
              {hasModernSolutionTheme && (
                <div className="family-hero-accent-line" aria-hidden="true" />
              )}
              <p>{family.summary}</p>
              <div className="industrial-family-actions">
                <Link className="btn btn-accent" href="#family-categories">
                  <span>Explore the categories</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="industrial-family-text-link" href="/contact#contact-form">
                  <span>Discuss an application</span>
                  {hasModernSolutionTheme && <MessageCircle size={16} aria-hidden="true" />}
                </Link>
              </div>
            </div>

            <div className={figureImage ? "industrial-family-figure-image" : "industrial-family-figure"} aria-hidden={!figureImage}>
              {hasModernSolutionTheme && (
                <div className="family-hero-backdrop-shape" aria-hidden="true">
                  <div className="family-hero-backdrop-glow" />
                  <div className="family-hero-backdrop-frame" />
                  <div className="family-hero-backdrop-dots" />
                </div>
              )}
              {figureImage ? (
                <figure className="industrial-water-figure">
                  <Image
                    src={figureImage.src}
                    alt={figureImage.alt}
                    fill
                    priority
                    sizes="(max-width: 760px) 100vw, 40vw"
                  />
                  <figcaption className="industrial-water-figure-label">{figureImage.caption}</figcaption>
                </figure>
              ) : (
                <>
                  <span className="industrial-family-figure-grid" />
                  <span className="industrial-family-figure-icon">
                    <Icon size={40} strokeWidth={1.4} />
                  </span>
                  <span className="industrial-family-figure-label">{family.name}</span>
                </>
              )}
            </div>
          </div>

          <dl className="industrial-family-facts" aria-label="Family summary">
            <div>
              <dt>Product form</dt>
              <dd>{family.productForm}</dd>
            </div>
            <div>
              <dt>Applies to</dt>
              <dd>{family.appliesTo}</dd>
            </div>
            <div>
              <dt>Documentation</dt>
              <dd>{family.documentation}</dd>
            </div>
          </dl>
        </div>

        {hasModernSolutionTheme && (
          <div className="family-hero-wave-bottom" aria-hidden="true">
            <svg
              className="family-hero-wave-svg"
              viewBox="0 0 1440 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id={waveIds.back} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
                  <stop offset="40%" stopColor="#D5E8F3" stopOpacity="0.65" />
                  <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient id={waveIds.mid} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.35" />
                  <stop offset="30%" stopColor="#0369A1" stopOpacity="0.48" />
                  <stop offset="70%" stopColor="#0284C7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0369A1" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient id={waveIds.front} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
                  <stop offset="30%" stopColor="#0369A1" stopOpacity="0.65" />
                  <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                </linearGradient>
                <linearGradient id={waveIds.shine} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path
                d="M0,22 C240,54 480,6 720,36 C960,66 1200,12 1440,30 L1440,96 L0,96 Z"
                fill={`url(#${waveIds.back})`}
              />
              <path
                d="M0,42 C280,12 560,58 840,28 C1120,4 1300,44 1440,36 L1440,96 L0,96 Z"
                fill={`url(#${waveIds.mid})`}
              />
              <path
                d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44 L1440,96 L0,96 Z"
                fill={`url(#${waveIds.front})`}
              />
              <path
                d="M0,58 C220,36 460,68 700,46 C940,24 1180,56 1440,44"
                stroke={`url(#${waveIds.shine})`}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </section>

      <section
        className="industrial-family-categories"
        id="family-categories"
        aria-labelledby="family-categories-title"
      >
        <div className="container">
          <div className="industrial-family-heading">
            <div>
              <span className="eyebrow">Explore by category</span>
              <h2 id="family-categories-title">{family.sectionTitle}</h2>
            </div>
            <p>{family.sectionIntro}</p>
          </div>

          <div className={`industrial-family-grid${isSingle ? " is-single" : ""}`}>
            {family.categories.map((category, index) => {
              const CategoryIcon = categoryIcons[category.id] ?? Icon;
              const isLast = index === family.categories.length - 1;
              const isWide = isLast && !isSingle && family.categories.length % 2 === 1;
              return (
                <article
                  className={`industrial-family-card${isWide ? " is-wide" : ""}`}
                  key={category.id}
                >
                  <div className="industrial-family-card-topline">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="industrial-family-card-icon">
                      <CategoryIcon size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <ul aria-label={`${category.title} applications`}>
                    {category.contexts.map((context) => (
                      <li key={context}>{context}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <p className="industrial-family-note">{family.note}</p>
          <Link className="industrial-family-back" href="/solutions/industrial-water#other-categories">
            Back to the industrial range <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="industrial-family-contact" aria-labelledby="family-contact-title">
        <div className="container">
          <div className="industrial-family-contact-inner">
            <div className={hasModernSolutionTheme ? "family-cta-content" : undefined}>
              <span className="eyebrow">Working on a {family.name.toLowerCase()} requirement?</span>
              <h2 id="family-contact-title">Share the process and the conditions.</h2>
              <p>
                The application, the operating conditions and the material involved
                help the team point you to the right category.
              </p>
            </div>
            <Link className="btn btn-accent" href="/contact#contact-form">
              <span>Discuss your application</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            {hasModernSolutionTheme && <CtaWaterSplashDesign />}
          </div>
        </div>
      </section>
    </main>
  );
}
