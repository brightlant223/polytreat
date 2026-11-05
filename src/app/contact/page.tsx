import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building2, FileText, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { locationSites } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact PolyTreat | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Contact PolyTreat about industrial water treatment, construction solutions, and V-Klin cleaning and facility-care products.",
};

const locations = locationSites.map((site) => ({
  id: site.id,
  title: site.role,
  area: site.area,
  address: site.address,
}));

export default function ContactPage() {
  return (
    <main className="contact-page contact-reference-layout">
      <section className="contact-reference-hero" aria-labelledby="contact-title">
        {/* Background ambient light & foliage on left */}
        <div className="contact-hero-left-decor" aria-hidden="true" />
        <div className="contact-hero-bg-glow" aria-hidden="true" />

        <div className="container contact-reference-hero-inner">
          <div className="contact-hero-content">
            <span className="contact-reference-eyebrow">Contact PolyTreat</span>
            <h1 id="contact-title">
              Let’s talk about{" "}
              <span className="contact-hero-highlight">your requirement.</span>
            </h1>
            <p>
              Get in touch about industrial water treatment, construction solutions, or V-Klin
              cleaning and facility care.
            </p>
            <a href="#contact-form" className="contact-reference-hero-link">
              <span>Send an enquiry</span>
              <MessageCircle size={17} aria-hidden="true" />
              <span className="contact-hero-btn-arrow" aria-hidden="true">
                <ArrowRight size={13} />
              </span>
            </a>
          </div>
        </div>

        {/* Industrial water treatment facility photo inside circular glass portal */}
        <div className="contact-hero-visual">
          <Image
            src="/images/contact/hero-portal.webp"
            alt="Industrial water treatment plant with storage tanks, piping and water clarifier pool"
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 530px"
            className="contact-hero-portal-img"
          />
        </div>
      </section>

      <section className="contact-reference-main" aria-label="Contact details and enquiry form">
        <div className="container contact-reference-columns">
          <div className="contact-reference-details">
            <span className="contact-reference-eyebrow">Contact details</span>
            <h2>Our information</h2>

            <article className="contact-reference-card contact-reference-office">
              <span className="contact-reference-icon"><MapPin size={19} aria-hidden="true" /></span>
              <div>
                <h3>Head office</h3>
                <address>{locations[0].address}</address>
              </div>
            </article>

            <div className="contact-reference-channels">
              <a className="contact-reference-card" href="mailto:polyind2@gmail.com">
                <span className="contact-reference-icon"><Mail size={18} aria-hidden="true" /></span>
                <span>
                  <strong>Email address</strong>
                  <span>polyind2@gmail.com</span>
                </span>
              </a>
              <a className="contact-reference-card" href="tel:+919820235995">
                <span className="contact-reference-icon"><Phone size={18} aria-hidden="true" /></span>
                <span>
                  <strong>Technical &amp; sales</strong>
                  <span>+91 98202 35995</span>
                </span>
              </a>
            </div>

            <div className="contact-reference-branches">
              <div className="contact-reference-branches-heading">
                <Building2 size={17} aria-hidden="true" />
                <h3>Other locations</h3>
              </div>
              <div className="contact-reference-branches-grid">
                {locations.slice(1).map((location) => (
                  <article className="contact-reference-branch" key={location.id}>
                    <span className="contact-reference-branch-icon">
                      <MapPin size={15} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{location.area}</strong>
                      <address>{location.address}</address>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-reference-form-wrap" id="contact-form">
            <div className="contact-reference-form-heading">
              <div className="contact-reference-form-heading-text">
                <span className="contact-reference-eyebrow">Send an enquiry</span>
                <h2>Leave a message</h2>
                <p>Include the product area, system, or documents you’re enquiring about.</p>
              </div>
              <span className="contact-reference-form-badge" aria-hidden="true">
                <FileText size={20} />
              </span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="contact-reference-map-section" id="locations" aria-labelledby="locations-title">
        <div className="container">
          <div className="contact-reference-map-heading">
            <div>
              <span className="contact-reference-eyebrow">Visit us</span>
              <h2 id="locations-title">PolyTreat locations</h2>
            </div>
            <p>Choose a location to view it on the map.</p>
          </div>
          <LocationMap
            locations={locations.map(({ id, area, address }) => ({
              id,
              title: area.split(",")[0].trim(),
              address,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
