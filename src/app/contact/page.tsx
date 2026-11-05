import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  ClipboardPenLine,
  FlaskConical,
  Headset,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { locationSites } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact PolyTreat | PolyTreat Chemicals Pvt. Ltd.",
  description:
    "Contact PolyTreat about industrial water treatment, construction chemistry, and V-Klin cleaning and facility care.",
};

export default function ContactPage() {
  return (
    <main className="contact-page contact-redesign-page">
      {/* ====================================================================
          1. HERO SECTION (Replicating uploaded reference image exactly)
          ==================================================================== */}
      <section className="contact-hero-redesign" aria-labelledby="contact-title">
        {/* Soft atmospheric gradient & lower-left organic wave */}
        <div className="contact-hero-left-wave" aria-hidden="true">
          <svg viewBox="0 0 500 350" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hero-wave-left-1" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="hero-wave-left-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0099FF" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#7DD3FC" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path
              d="M-40,350 C60,250 160,200 280,240 C380,270 440,210 500,140 L500,350 Z"
              fill="url(#hero-wave-left-1)"
            />
            <path
              d="M-40,350 C90,280 190,230 300,265 C400,295 450,260 500,210 L500,350 Z"
              fill="url(#hero-wave-left-2)"
            />
          </svg>
        </div>

        <div className="container contact-hero-container">
          <div className="contact-hero-grid">
            {/* LEFT COLUMN: Badge, Heading, Description, CTA, Feature Highlights */}
            <div className="contact-hero-left">
              {/* Outlined Pill Badge with Phone Icon */}
              <div className="contact-hero-badge">
                <Phone size={13} className="contact-hero-badge-icon" aria-hidden="true" />
                <span>CONTACT US</span>
              </div>

              {/* Main Heading */}
              <h1 id="contact-title" className="contact-hero-h1">
                Let&apos;s talk about <br />
                <span className="contact-hero-h1-blue">your requirement.</span>
              </h1>

              {/* Description */}
              <p className="contact-hero-desc">
                Get in touch about industrial water treatment, construction chemistry,
                or V-Klin cleaning and facility care.
              </p>

              {/* CTA Button */}
              <div className="contact-hero-actions">
                <a href="#contact-form" className="btn-contact-hero">
                  <span>Send an enquiry</span>
                  <span className="btn-contact-hero-arrow" aria-hidden="true">
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </span>
                </a>
              </div>

              {/* Bottom Feature Highlights Strip */}
              <div className="contact-hero-features-strip">
                <div className="contact-hero-feature-item">
                  <div className="contact-hero-feature-icon-box" aria-hidden="true">
                    <Headset size={20} strokeWidth={2.2} />
                  </div>
                  <div className="contact-hero-feature-text">
                    <h3 className="contact-hero-feature-title">Expert Support</h3>
                    <p className="contact-hero-feature-sub">Quick &amp; reliable response</p>
                  </div>
                </div>

                <div className="contact-hero-feature-sep" aria-hidden="true" />

                <div className="contact-hero-feature-item">
                  <div className="contact-hero-feature-icon-box" aria-hidden="true">
                    <FlaskConical size={20} strokeWidth={2.2} />
                  </div>
                  <div className="contact-hero-feature-text">
                    <h3 className="contact-hero-feature-title">Technical Guidance</h3>
                    <p className="contact-hero-feature-sub">From our industry experts</p>
                  </div>
                </div>

                <div className="contact-hero-feature-sep" aria-hidden="true" />

                <div className="contact-hero-feature-item">
                  <div className="contact-hero-feature-icon-box" aria-hidden="true">
                    <ClipboardPenLine size={20} strokeWidth={2.2} />
                  </div>
                  <div className="contact-hero-feature-text">
                    <h3 className="contact-hero-feature-title">Project Enquiries</h3>
                    <p className="contact-hero-feature-sub">Tailored solutions for your needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Asymmetrical Organic Curved Water Ripple Portal */}
            <div className="contact-hero-right">
              <div className="contact-hero-portal-wrap">
                {/* Decorative outer cyan/blue flowing halo border */}
                <div className="contact-hero-portal-halo" aria-hidden="true" />
                {/* Main image frame with 7px crisp white border and curved arch */}
                <div className="contact-hero-portal-frame">
                  <Image
                    src="/images/contact/hero-water-ripple.jpg"
                    alt="Pristine blue water ripple with concentric circular waves and water droplet"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 52vw, 650px"
                    className="contact-hero-portal-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Elegant Layered Cyan & Blue Flowing Wave Divider along bottom edge */}
        <div className="contact-hero-wave-bottom" aria-hidden="true">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="contact-hero-wave-svg"
          >
            <defs>
              <linearGradient id="contact-wave-back" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.5" />
                <stop offset="40%" stopColor="#D8EEFD" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#EBF6FD" stopOpacity="0.45" />
              </linearGradient>
              <linearGradient id="contact-wave-mid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.3" />
                <stop offset="35%" stopColor="#0055B3" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#0070EB" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0055B3" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="contact-wave-front" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0070EB" stopOpacity="0.6" />
                <stop offset="35%" stopColor="#0055B3" stopOpacity="0.45" />
                <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,32 C240,65 480,12 720,44 C960,76 1200,22 1440,48 L1440,96 L0,96 Z"
              fill="url(#contact-wave-back)"
            />
            <path
              d="M0,48 C280,18 520,72 800,38 C1080,4 1260,56 1440,32 L1440,96 L0,96 Z"
              fill="url(#contact-wave-mid)"
            />
            <path
              d="M0,58 C320,86 640,38 960,68 C1200,90 1360,52 1440,60 L1440,96 L0,96 Z"
              fill="url(#contact-wave-front)"
            />
          </svg>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN CONTACT SECTION (Two Columns: Info + Enquiry Form)
          ==================================================================== */}
      <section
        className="contact-main-section"
        aria-label="Contact information and enquiry form"
      >
        <div className="container contact-main-container">
          <div className="contact-main-grid">
            {/* Left Column: Contact Information Cards */}
            <div className="contact-info-col">
              <div className="contact-info-header">
                <span className="contact-info-eyebrow">OUR INFORMATION</span>
                <h2 className="contact-info-title">Contact Information</h2>
                <p className="contact-info-desc">
                  Reach out to our team for enquiries, technical support or project requirements.
                </p>
              </div>

              {/* Card 1: Head Office with subtle building illustration */}
              <article className="contact-card contact-card-headoffice">
                <div className="contact-card-icon-gradient" aria-hidden="true">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-text">
                  <h3 className="contact-card-title">Head Office</h3>
                  <address className="contact-card-address">
                    7-A, Topiwala Building, &apos;C&apos; Wing, Opp.
                    <br />
                    Pramila Cinema, Goregaon (West),
                    <br />
                    Mumbai – 400104, Maharashtra, India.
                  </address>
                </div>

                {/* Subtle faint blue architectural building illustration */}
                <div className="contact-card-building-art" aria-hidden="true">
                  <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.32">
                      <rect x="22" y="32" width="24" height="52" rx="2" fill="#BAE6FD" />
                      <rect x="26" y="38" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="34" y="38" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="26" y="48" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="34" y="48" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="26" y="58" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="34" y="58" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="26" y="68" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="34" y="68" width="4" height="6" rx="1" fill="#FFFFFF" />

                      <rect x="50" y="14" width="30" height="70" rx="3" fill="#7DD3FC" />
                      <polygon points="62,4 68,4 65,14" fill="#0284C7" />
                      <rect x="56" y="22" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="65" y="22" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="56" y="34" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="65" y="34" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="56" y="46" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="65" y="46" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="56" y="58" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="65" y="58" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="56" y="70" width="5" height="8" rx="1" fill="#FFFFFF" />
                      <rect x="65" y="70" width="5" height="8" rx="1" fill="#FFFFFF" />

                      <rect x="84" y="40" width="22" height="44" rx="2" fill="#BAE6FD" />
                      <rect x="88" y="46" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="96" y="46" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="88" y="56" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="96" y="56" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="88" y="66" width="4" height="6" rx="1" fill="#FFFFFF" />
                      <rect x="96" y="66" width="4" height="6" rx="1" fill="#FFFFFF" />

                      <path
                        d="M6,84 C36,78 84,78 114,84"
                        stroke="#0284C7"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
              </article>

              {/* Row: Email Address & Technical & Sales */}
              <div className="contact-cards-pair">
                <a className="contact-card contact-card-channel" href="mailto:polyind2@gmail.com">
                  <div className="contact-card-icon-gradient" aria-hidden="true">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title">Email Address</h3>
                    <span className="contact-card-val">polyind2@gmail.com</span>
                  </div>
                </a>

                <a className="contact-card contact-card-channel" href="tel:+919820325905">
                  <div className="contact-card-icon-light" aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div className="contact-card-text">
                    <h3 className="contact-card-title">Technical &amp; Sales</h3>
                    <span className="contact-card-val">+91 98203 25905</span>
                  </div>
                </a>
              </div>

              {/* Other Locations Section */}
              <div className="contact-other-locations-wrap">
                <div className="contact-other-locations-head">
                  <Building2 size={17} className="contact-other-locations-icon" aria-hidden="true" />
                  <h3 className="contact-other-locations-title">Other Locations</h3>
                </div>

                <div className="contact-cards-pair">
                  <article className="contact-card contact-card-branch">
                    <div className="contact-card-icon-light" aria-hidden="true">
                      <Building2 size={18} />
                    </div>
                    <div className="contact-card-text">
                      <h4 className="contact-branch-title">Goregaon East, Mumbai</h4>
                      <address className="contact-branch-address">
                        506, Shantilal Industrial Premises Co-op Society Ltd, Veer Gunjwala,
                        Goregaon(E), Mumbai – 400063.
                      </address>
                    </div>
                  </article>

                  <article className="contact-card contact-card-branch">
                    <div className="contact-card-icon-light" aria-hidden="true">
                      <Building2 size={18} />
                    </div>
                    <div className="contact-card-text">
                      <h4 className="contact-branch-title">Tarapur MIDC, Palghar</h4>
                      <address className="contact-branch-address">
                        Tarapur Industrial Area (MIDC), Palghar district, Maharashtra,
                        India.
                      </address>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Right Column: Recreated Enquiry Form */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. LOCATIONS SECTION (Strict Vertical Spacing Applied)
          ==================================================================== */}
      <section
        className="contact-locations-section"
        id="locations"
        aria-labelledby="locations-title"
      >
        <div className="container contact-locations-container">
          <div className="contact-locations-heading">
            <div className="contact-locations-heading-title">
              <div className="contact-locations-pin-badge" aria-hidden="true">
                <MapPin size={22} />
              </div>
              <h2 id="locations-title">Find Us Across Locations</h2>
            </div>
          </div>

          <LocationMap
            locations={locationSites.map((site) => ({
              id: site.id,
              title: site.title,
              address: site.address,
            }))}
          />
        </div>
      </section>
    </main>
  );
}
