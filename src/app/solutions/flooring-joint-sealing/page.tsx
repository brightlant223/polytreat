import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  Link2,
  ShieldCheck,
} from "lucide-react";
import ConstructionRange from "@/components/ConstructionRange";

export const metadata: Metadata = {
  title: "Flooring & Joint Sealing | PolyTreat Chemicals",
  description:
    "Explore PolyTreat construction categories for protective flooring systems and joint or crack sealants.",
};

const productAreas = [
  {
    number: "01",
    icon: Layers3,
    title: "Flooring & surface protection",
    description:
      "The supplied profile lists epoxy and polyurethane coating categories, repair mortars, and decorative flooring systems for built surfaces.",
    contexts: ["Factory floors", "Floor toppings", "Decorative flooring"],
  },
  {
    number: "02",
    icon: Link2,
    title: "Joint & crack sealants",
    description:
      "Sealant categories for cracks and joints in concrete, windows, and other listed building-surface applications.",
    contexts: ["Concrete cracks", "Expansion joints", "Window frames"],
  },
];

export default function FlooringJointSealingPage() {
  return (
    <main className="flooring-joint-page">
      <section className="construction-chemistry-hero" aria-labelledby="flooring-joint-title">
        <div className="container">
          <nav className="construction-chemistry-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Solutions</span>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/construction-chemistry">Construction chemistry</Link>
            <span aria-hidden="true">/</span>
            <span>Flooring &amp; joint sealing</span>
          </nav>

          <div className="construction-chemistry-hero-layout">
            <div className="construction-chemistry-hero-copy">
              <span className="eyebrow"><ShieldCheck size={15} aria-hidden="true" /> Construction &amp; surface protection</span>
              <h1 id="flooring-joint-title">Flooring systems and joint sealing.</h1>
              <p>
                Explore protective flooring and coating categories alongside sealants
                for cracks and joints in built surfaces.
              </p>
              <div className="construction-chemistry-hero-actions">
                <Link className="btn btn-accent" href="#product-areas">
                  Explore product areas <ArrowRight size={17} aria-hidden="true" />
                </Link>
                <Link className="construction-chemistry-text-link" href="/contact#contact-form">
                  Discuss a requirement
                </Link>
              </div>
            </div>

            <div className="construction-hero-figures is-single">
              <figure className="industrial-water-figure">
                <Image
                  src="/images/home/pcs-joint-filling.webp"
                  alt="Worker filling expansion joint in a concrete industrial floor with sealant"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 420px"
                />
                <figcaption className="industrial-water-figure-label">PCS joint filling</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="construction-detail-section" id="product-areas" aria-labelledby="product-areas-title">
        <div className="container">
          <div className="construction-areas-heading">
            <div>
              <span className="eyebrow">Explore by surface need</span>
              <h2 id="product-areas-title">Two distinct surface applications.</h2>
            </div>
            <p>
              Flooring systems protect or finish larger surface areas; sealants address
              gaps and cracks. The right category depends on the surface and project.
            </p>
          </div>

          <div className="flooring-joint-grid">
            {productAreas.map(({ number, icon: Icon, title, description, contexts }) => (
              <article className="construction-detail-card" key={title}>
                <div className="construction-card-topline">
                  <span>{number}</span>
                  <span className="construction-card-icon"><Icon size={20} aria-hidden="true" /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="construction-context-list" aria-label={`${title} applications`}>
                  {contexts.map((context) => <li key={context}>{context}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <p className="construction-detail-note">
            The product categories behind each area are listed below. System
            build-up, specifications, and application instructions should follow current product information.
          </p>
          <Link className="construction-detail-back" href="/solutions/construction-chemistry">
            Back to construction chemistry <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ConstructionRange
        familyIds={["epoxy-polyurethane-floor", "sealants-and-joints"]}
        title="Flooring, coating and sealant products."
        intro="The products PolyTreat's construction profile lists for industrial floors, protective finishes, and joint and crack sealing."
      />

      <section className="construction-contact-band" aria-labelledby="flooring-joint-contact-title">
        <div className="container construction-contact-inner">
          <div>
            <span className="eyebrow">Planning a floor or joint application?</span>
            <h2 id="flooring-joint-contact-title">Share the surface and project context.</h2>
            <p>That helps the team direct your flooring or sealant enquiry.</p>
          </div>
          <Link className="btn btn-accent" href="/contact#contact-form">
            Discuss your requirement <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
