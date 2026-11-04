import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  Leaf,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Certifications | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Explore PolyTreat's quality management certificate and supplied compliance documents.",
  keywords:
    "PolyTreat quality, ISO 9001:2015 certificate, WHO-GMP referenced certificate, FDA-referenced certificate, UKcert Eco-Friendly certificate",
};

const certificates = [
  {
    name: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "SM Certification Services (SMCS)",
    image: "/certifications/iso-9001-2015-quality-certificate.jpeg",
    alt: "PolyTreat Chemicals ISO 9001:2015 quality management certificate",
    scope:
      "The listed manufacturing scope covers water-treatment chemicals and home-care, hygienic, and industrial cleaning chemicals. It is issued to the Goregaon (East) site, and it is a quality-management-system certificate, not an individual product approval.",
    tone: "blue",
  },
  {
    name: "WHO-GMP referenced",
    title: "Certificate of Compliance — WHO-GMP requirements",
    issuer: "UK Certification & Inspection Ltd. (UKcert)",
    image: "/certifications/who-gmp-compliance-certificate.jpeg",
    alt: "UKcert-issued certificate of compliance referencing WHO-GMP requirements",
    scope:
      "The certificate names a defined non-medicated, non-therapeutic home-care and household-utility product scope, and is issued to the Goregaon (East) site. It is issued by UKcert, not by WHO, and excludes medical, disinfectant, pesticidal, and drug claims.",
    tone: "slate",
  },
  {
    name: "FDA-referenced certificate",
    title: "Private Certificate of Compliance referencing FDA requirements",
    issuer: "UK Certification and Assessment Ltd",
    image: "/certifications/fda-compliance-certificate.jpeg",
    alt: "Certificate of compliance referencing FDA requirements, issued by UK Certification and Assessment Ltd",
    scope:
      "The document records a private assessment against requirements it calls FDA for a listed non-medicated home-care scope, and is issued to the Goregaon (East) site. It is issued by a private certification body, not by the U.S. Food and Drug Administration, and is not FDA approval.",
    tone: "slate",
  },
  {
    name: "Eco-Friendly",
    title: "UKcert Eco-Friendly Certificate",
    issuer: "UK Certification & Inspection Ltd. (UKcert)",
    image: "/certifications/eco-friendly-compliance-certificate.jpeg",
    alt: "PolyTreat Chemicals UKcert eco-friendly quality compliance certificate",
    scope:
      "The certificate applies its 'Eco Friendly' wording to a listed non-medicated home-care and household-product scope, and is issued to the Goregaon (East) site. The document does not state environmental test criteria or establish that each product is environmentally safe.",
    tone: "green",
  },
];

const facts = [
  { icon: BadgeCheck, label: "ISO 9001:2015 QMS" },
  { icon: ShieldCheck, label: "WHO-GMP reference" },
  { icon: FileCheck2, label: "Private FDA reference" },
  { icon: Leaf, label: "Eco-Friendly certificate" },
];

export default function CertificationsPage() {
  return (
    <main className="certs-page">
      <section className="certs-hero" aria-labelledby="certs-title">
        <div className="container certs-hero-inner">
          <div>
            <span className="eyebrow eyebrow-dark">Quality &amp; compliance</span>
            <h1 id="certs-title">Quality systems and certifications.</h1>
            <p className="certs-hero-lead">
              Explore the quality-management certificate and other supplied compliance documents.
              Each document identifies its issuer and the activities or product categories it covers.
            </p>
            <ul className="about-facts">
              {facts.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={15} aria-hidden="true" /> {label}</li>
              ))}
            </ul>
          </div>

          <aside className="certs-request-card" aria-label="Document requests">
            <span className="certs-request-mark"><FileCheck2 size={19} aria-hidden="true" /></span>
            <h2>Need a certificate copy or product document?</h2>
            <p>
              Contact the team to request a certificate copy or ask about a product TDS or SDS.
            </p>
            <Link className="btn btn-primary" href="/contact#contact-form">
              Request documents <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section" id="certificate-library" aria-labelledby="library-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow eyebrow-dark">Certificate library</span>
              <h2 id="library-title">Four documents, different scopes.</h2>
            </div>
            <p>
              The scope shown on each certificate applies to that document. These are not blanket
              approvals for every product or application.
            </p>
          </div>

          <div className="certs-grid">
            {certificates.map(({ name, title, issuer, image, alt, scope, tone }) => (
              <article className={`cert-card cert-card-${tone}`} key={name}>
                <a className="cert-card-figure" href={image} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 2rem), 560px"
                  />
                  <span className="cert-card-view">View full <ArrowUpRight size={15} aria-hidden="true" /></span>
                </a>
                <div className="cert-card-body">
                  <span className="cert-card-eyebrow">{issuer}</span>
                  <h3>{title}</h3>
                  <p>{scope}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-band" aria-labelledby="certs-standard-title">
        <div className="container about-rd-layout">
          <div className="company-copy">
            <span className="eyebrow eyebrow-dark">Standards in practice</span>
            <h2 id="certs-standard-title">How to read these documents.</h2>
            <p>
              ISO 9001:2015 refers to a quality-management system for the activities listed in its
              scope. The other documents are issued by private certification bodies and cover their
              own stated categories. A reference to WHO-GMP or FDA on a private certificate does
              not mean WHO or the U.S. FDA issued or approved it.
            </p>
            <p>
              Each document applies to its named issuer, stated scope, and listed activities or
              categories. These documents do not certify every product&apos;s performance, safety,
              or suitability for a particular use.
            </p>
            <Link className="text-link" href="/quality#pqrs">
              Explore the PQRS framework <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="about-rd-panel">
            <div className="vklin-panel-heading">
              <span className="about-rd-mark"><ShieldCheck size={19} aria-hidden="true" /></span>
              <div>
                <span>Covered scope</span>
                <h3>Scope at a glance</h3>
              </div>
            </div>
            <ul className="about-rd-list">
              <li><BadgeCheck size={16} aria-hidden="true" /> ISO 9001:2015 — listed water-treatment and cleaning manufacture</li>
              <li><ShieldCheck size={16} aria-hidden="true" /> UKcert WHO-GMP reference — listed non-medicated home-care scope</li>
              <li><FileCheck2 size={16} aria-hidden="true" /> Private FDA-referenced certificate — listed home-care scope</li>
              <li><Leaf size={16} aria-hidden="true" /> UKcert Eco-Friendly — listed household-product scope</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
