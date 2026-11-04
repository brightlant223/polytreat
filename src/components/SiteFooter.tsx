import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  ArrowUpRight,
  Boxes,
  Car,
  ChevronRight,
  Droplets,
  Flame,
  FlaskConical,
  Gauge,
  Layers,
  Mail,
  MapPin,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";
import styles from "./SiteFooter.module.css";

const exploreLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries & applications", href: "/industries" },
  { label: "V-Klin", href: "/vklin" },
  { label: "V-Klin products", href: "/vklin/products" },
  { label: "Quality", href: "/quality" },
  { label: "Certifications", href: "/certifications" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks = [
  { label: "Industrial water", href: "/solutions/industrial-water", icon: Droplets },
  { label: "Boiler & cooling", href: "/solutions/boiler-cooling-water", icon: Gauge },
  { label: "RO & effluent", href: "/solutions/ro-effluent", icon: Waves },
  { label: "Construction", href: "/solutions/construction-chemistry", icon: ShieldCheck },
  { label: "Waterproofing", href: "/solutions/waterproofing-repair-coatings", icon: Paintbrush },
  { label: "Flooring & sealing", href: "/solutions/flooring-joint-sealing", icon: Layers },
  { label: "Paint preservatives", href: "/solutions/paint-preservatives", icon: FlaskConical },
  { label: "Sugar process", href: "/solutions/sugar-process-chemicals", icon: Sparkles },
  { label: "Fireside treatment", href: "/solutions/fireside-treatment", icon: Flame },
  { label: "Automotive", href: "/solutions/automotive-chemicals", icon: Car },
  { label: "Specialty products", href: "/specialty", icon: Boxes },
];

type SocialIconProps = { size?: number; strokeWidth?: number };

function LinkedInIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.971H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, strokeWidth = 1.8 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "YouTube", icon: YouTubeIcon },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-title">
      <h2 id="footer-title" className={styles.srOnly}>
        Site footer
      </h2>

      <div className={styles.accentLine} aria-hidden="true" />

      <div className={`container ${styles.shell}`}>
        <div className={styles.main}>
          {/* Brand + social placeholders */}
          <section className={styles.brand} aria-label="PolyTreat brand">
            <Link href="/" className={styles.logoTile} aria-label="PolyTreat home">
              <Image
                src="/polytreat-logo-footer.webp"
                alt="PolyTreat Chemicals"
                width={780}
                height={262}
                sizes="(max-width: 680px) 190px, 240px"
              />
            </Link>

            <p className={styles.tagline}>
              Applied chemistry for industrial water, construction, and everyday facility care.
            </p>

            <div className={styles.socialBlock}>
              <span className={styles.socialLabel}>Social profiles</span>
              <div className={styles.socialRow}>
                {socialLinks.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    className={styles.socialButton}
                    disabled
                    aria-label={`${label} — profile coming soon`}
                    title={`${label} — profile coming soon`}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
              <span className={styles.socialNote}>Coming soon</span>
            </div>
          </section>

          {/* Explore */}
          <nav className={styles.column} aria-label="Explore PolyTreat">
            <h3 className={styles.heading}>Explore</h3>
            <ul className={styles.exploreList}>
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={styles.exploreLink}>
                    <ChevronRight size={14} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our work */}
          <nav className={styles.column} aria-label="PolyTreat product and service areas">
            <h3 className={styles.heading}>Our work</h3>
            <ul className={styles.workGrid}>
              {solutionLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link href={href} className={styles.workLink}>
                    <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <section className={styles.column} aria-label="Contact PolyTreat">
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:polyind2@gmail.com" className={styles.contactLink}>
                  <span className={styles.contactIcon}>
                    <Mail size={17} aria-hidden="true" />
                  </span>
                  <span>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>polyind2@gmail.com</span>
                  </span>
                  <ArrowUpRight size={15} className={styles.contactArrow} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="tel:+919820235995" className={styles.contactLink}>
                  <span className={styles.contactIcon}>
                    <Phone size={17} aria-hidden="true" />
                  </span>
                  <span>
                    <span className={styles.contactLabel}>Technical &amp; sales</span>
                    <span className={styles.contactValue}>+91 98202 35995</span>
                  </span>
                  <ArrowUpRight size={15} className={styles.contactArrow} aria-hidden="true" />
                </a>
              </li>
              <li className={styles.locationRow}>
                <span className={styles.contactIcon}>
                  <MapPin size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className={styles.contactLabel}>Corporate office</span>
                  <span className={styles.contactValue}>Goregaon (West), Mumbai</span>
                </span>
              </li>
            </ul>
            <Link href="/contact#contact-form" className={styles.quoteLink}>
              Request a quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </section>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>© 2026 PolyTreat Chemicals Pvt. Ltd.</span>
          <span className={styles.principle}>Performance, quality, reliability, service</span>
          <div className={styles.bottomRight}>
            <span className={styles.credit}>
              Designed by{" "}
              <a href="https://brightlant.com" target="_blank" rel="noopener noreferrer">
                Brightlant
              </a>
            </span>
            <a href="#top" className={styles.backToTop} aria-label="Back to top" title="Back to top">
              <ArrowUp size={17} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
