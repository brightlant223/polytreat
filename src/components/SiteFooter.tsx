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
  Heart,
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

      {/* Dual overlapping top waves */}
      <div className={styles.topWaves} aria-hidden="true">
        <svg className={styles.waveBack} viewBox="0 0 1440 84" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,24 C280,68 560,0 840,42 C1120,84 1300,32 1440,24 L1440,84 L0,84 Z"
            fill="url(#pt-wave-grad-1)"
          />
          <defs>
            <linearGradient id="pt-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#99f6e4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        <svg className={styles.waveFront} viewBox="0 0 1440 76" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,38 C360,6 720,64 1080,28 C1260,10 1380,24 1440,32 L1440,76 L0,76 Z"
            fill="url(#pt-wave-grad-2)"
          />
          <defs>
            <linearGradient id="pt-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#bae6fd" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.55" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating lifted panel */}
      <div className={styles.panel}>
        {/* Ambient bubbles */}
        <div className={styles.bubbles} aria-hidden="true">
          <span className={`${styles.bubble} ${styles.bubble1}`} />
          <span className={`${styles.bubble} ${styles.bubble2}`} />
          <span className={`${styles.bubble} ${styles.bubble3}`} />
          <span className={`${styles.bubble} ${styles.bubble4}`} />
        </div>

        {/* Watermark */}
        <div className={styles.watermark} aria-hidden="true">
          <svg className={styles.watermarkSvg} viewBox="0 0 1400 160" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pt-wm-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.32" />
              </linearGradient>
              <linearGradient id="pt-wm-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.06" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#pt-wm-fill)"
              stroke="url(#pt-wm-stroke)"
              strokeWidth="1.4"
              letterSpacing="0.14em"
              className={styles.watermarkText}
            >
              POLYTREAT
            </text>
          </svg>
        </div>

        <div className={`container ${styles.panelInner}`}>
          <div className={styles.main}>
            {/* Brand column */}
            <div className={styles.brandColumn}>
              <div className={styles.brandContent}>
                <Link href="/" className={styles.logoLink} aria-label="PolyTreat home">
                  <Image
                    className={styles.logo}
                    src="/polytreat-logo-footer.webp"
                    width={780}
                    height={262}
                    sizes="(max-width: 680px) 185px, 230px"
                    alt="PolyTreat Chemicals"
                    loading="eager"
                  />
                </Link>
                <p className={styles.tagline}>
                  Applied formulations for industrial water, construction, and everyday facility care.
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
              </div>

              {/* Decorative water drop */}
              <div className={styles.waterDrop} aria-hidden="true">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 12 C100 12 32 88 32 135 C32 171.4 62.4 200 100 200 C137.6 200 168 171.4 168 135 C168 88 100 12 100 12 Z"
                    fill="url(#pt-brand-drop-grad)"
                  />
                  <circle cx="72" cy="132" r="10" fill="#38bdf8" fillOpacity="0.25" />
                  <circle cx="86" cy="112" r="5" fill="#38bdf8" fillOpacity="0.2" />
                  <defs>
                    <linearGradient id="pt-brand-drop-grad" x1="100" y1="12" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0284c7" stopOpacity="0.16" />
                      <stop offset="1" stopColor="#0d9488" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Explore */}
            <nav className={`${styles.column} ${styles.exploreCard}`} aria-label="Explore PolyTreat">
              <h3 className={styles.heading}>
                Explore
                <span className={styles.headingLine} aria-hidden="true" />
              </h3>
              <div className={styles.exploreWrap}>
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
              </div>
            </nav>

            {/* Our work */}
            <nav className={`${styles.column} ${styles.workCard}`} aria-label="PolyTreat product and service areas">
              <h3 className={styles.heading}>
                Our work
                <span className={styles.headingLine} aria-hidden="true" />
              </h3>
              <ul className={styles.workGrid}>
                {solutionLinks.map(({ label, href, icon: Icon }, index) => (
                  <li key={href}>
                    <Link href={href} className={`${styles.workTile} ${index === 10 ? styles.span2 : ""}`}>
                      <Icon size={17} strokeWidth={1.8} className={styles.workIcon} aria-hidden="true" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <section className={`${styles.column} ${styles.contactCard}`} aria-label="Contact PolyTreat">
              <div className={styles.contactTopStrip} aria-hidden="true" />
              <h3 className={styles.heading}>
                Contact
                <span className={styles.headingLine} aria-hidden="true" />
              </h3>

              <ul className={styles.contactList}>
                <li>
                  <a href="mailto:polyind2@gmail.com" className={styles.contactRow}>
                    <span className={styles.contactIcon}>
                      <Mail size={17} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>Email</span>
                      <span className={styles.contactValue}>polyind2@gmail.com</span>
                    </span>
                    <ArrowUpRight size={15} className={styles.contactArrow} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="tel:+919820235995" className={styles.contactRow}>
                    <span className={styles.contactIcon}>
                      <Phone size={17} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className={styles.contactText}>
                      <span className={styles.contactLabel}>Technical &amp; sales</span>
                      <span className={styles.contactValue}>+91 98202 35995</span>
                    </span>
                    <ArrowUpRight size={15} className={styles.contactArrow} aria-hidden="true" />
                  </a>
                </li>
                <li className={styles.locationRow}>
                  <span className={styles.contactIcon}>
                    <MapPin size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className={styles.contactText}>
                    <span className={styles.contactLabel}>Corporate office</span>
                    <span className={styles.contactValue}>Goregaon (West), Mumbai</span>
                  </span>
                </li>
              </ul>

              <Link href="/contact#contact-form" className={styles.quoteButton}>
                Request a quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </section>
          </div>

          {/* Bottom frosted strip */}
          <div className={styles.bottomSection}>
            <div className={styles.bottom}>
              <span className={styles.bottomText}>© 2026 PolyTreat Chemicals Pvt. Ltd.</span>
              <span className={`${styles.bottomText} ${styles.principle}`}>
                Performance, quality, reliability, service
              </span>
              <div className={styles.bottomRight}>
                <span className={`${styles.bottomText} ${styles.credit}`}>
                  Designed with{" "}
                  <Heart className={styles.heart} size={13} fill="currentColor" aria-hidden="true" />{" "}
                  by{" "}
                  <a href="https://brightlant.com" target="_blank" rel="noopener noreferrer">
                    Brightlant
                  </a>
                </span>
                <a href="#top" className={styles.backToTop} aria-label="Back to top" title="Back to top">
                  <ArrowUp size={15} strokeWidth={2.4} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
