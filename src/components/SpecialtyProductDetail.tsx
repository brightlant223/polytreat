import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Info,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import type { SpecialtyProduct } from "@/data/specialtyProducts";

/**
 * Shared shell for the specialty product pages.
 *
 * The three flagship products do not have the same content shape, so each page
 * composes its own sections and passes them as children. The hero, the
 * overview, the applications and handling notes are shared so the range reads
 * as one system.
 */
export default function SpecialtyProductDetail({
  product,
  icon: Icon,
  children,
}: {
  product: SpecialtyProduct;
  icon: LucideIcon;
  children?: ReactNode;
}) {
  const themeClass =
    product.slug === "corosil"
      ? "specialty-theme-corosil"
      : product.slug === "polydor-ws"
      ? "specialty-theme-polydor"
      : "specialty-theme-polyklin";

  return (
    <main className={`specialty-product-page ${themeClass}`}>
      <section className="specialty-product-hero" aria-labelledby="specialty-product-title">
        <div className="container">
          <nav className="specialty-product-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/specialty">Specialty products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <div className="specialty-product-hero-layout">
            <div className="specialty-product-copy">
              <span className="eyebrow">
                <Icon size={15} aria-hidden="true" /> Specialty products · {product.category}
              </span>
              <h1 id="specialty-product-title">{product.name}</h1>
              <p>{product.summary}</p>
              <div className="specialty-product-actions">
                <Link className="btn btn-accent" href="/contact#contact-form">
                  Enquire about this product <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link className="specialty-product-back" href="/specialty">
                  <ArrowLeft size={14} aria-hidden="true" /> All specialty products
                </Link>
              </div>
            </div>

            <div className="specialty-product-figure" aria-hidden="true">
              <span className="specialty-product-figure-grid" />
              <span className="specialty-product-figure-icon">
                <Icon size={40} strokeWidth={1.4} />
              </span>
              <span className="specialty-product-figure-label">{product.category}</span>
            </div>
          </div>

          <dl className="specialty-product-facts" aria-label="Product summary">
            {product.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="specialty-product-overview" aria-labelledby="specialty-overview-title">
        <div className="container">
          <div className="specialty-product-overview-layout">
            <div>
              <span className="specialty-product-kicker">Product overview</span>
              <h2 id="specialty-overview-title">{product.headline}</h2>
              <p>{product.description}</p>
            </div>
            <div className="specialty-product-features">
              <h3>
                <Sparkles size={16} aria-hidden="true" /> What it is used for
              </h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className="specialty-product-applications" aria-labelledby="specialty-applications-title">
        <div className="container">
          <div className="specialty-product-applications-layout">
            <div>
              <span className="specialty-product-kicker">Where it is used</span>
              <h2 id="specialty-applications-title">Applications and surfaces.</h2>
            </div>
            <ul>
              {product.applications.map((application) => (
                <li key={application}>{application}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="specialty-product-handling" aria-labelledby="specialty-handling-title">
        <div className="container">
          <div className="specialty-product-handling-layout">
            <div className="specialty-product-handling-card">
              <h3 id="specialty-handling-title">
                <ShieldAlert size={16} aria-hidden="true" /> Handling guidance
              </h3>
              <ul>
                {product.cautions.map((caution) => (
                  <li key={caution}>{caution}</li>
                ))}
              </ul>
            </div>
            <div className="specialty-product-handling-card is-note">
              <h3>
                <Info size={16} aria-hidden="true" /> About these details
              </h3>
              <p>{product.sourceNote}</p>
              <p>
                Safety information is provided in the current Safety Data Sheet.
                Request it from our team, along with the current technical data
                sheet for your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="specialty-product-information" aria-labelledby="specialty-information-title">
        <div className="container specialty-product-info-layout">
          <div>
            <span className="specialty-product-kicker">Product information</span>
            <h2 id="specialty-information-title">Need details for your application?</h2>
            <p>
              Tell us the system, the surface or the process, and the PolyTreat team
              can help with the right product and its current documentation.
            </p>
          </div>
          <Link href="/contact#contact-form">
            Contact PolyTreat <FileText size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
