import Link from "next/link";
import Image from "next/image";
import { Building2, FlaskConical, Mail, MapPin, Phone, Sparkles } from "lucide-react";

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
  { label: "Industrial water treatment", href: "/solutions/industrial-water" },
  { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
  { label: "RO & effluent", href: "/solutions/ro-effluent" },
  { label: "Construction chemistry", href: "/solutions/construction-chemistry" },
  { label: "Waterproofing, repair & coatings", href: "/solutions/waterproofing-repair-coatings" },
  { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing" },
  { label: "Paint preservatives", href: "/solutions/paint-preservatives" },
  { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals" },
  { label: "Fireside treatment", href: "/solutions/fireside-treatment" },
  { label: "Automotive chemicals", href: "/solutions/automotive-chemicals" },
  { label: "Specialty products", href: "/specialty" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-waves" aria-hidden="true" />
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link" aria-label="PolyTreat home">
              <Image
                className="footer-logo"
                src="/logo.png"
                width={2167}
                height={726}
                alt="PolyTreat Chemicals"
              />
            </Link>
            <p>Applied chemistry for industrial water, construction, and everyday facility care.</p>
            
            {/* Visual pillars shown on Contact page design reference */}
            <div className="footer-pillars" aria-hidden="true">
              <div className="footer-pillar">
                <span className="footer-pillar-hex"><FlaskConical size={18} /></span>
                <span className="footer-pillar-title">Industrial<br />Water Treatment</span>
              </div>
              <div className="footer-pillar footer-pillar-offset">
                <span className="footer-pillar-hex"><Building2 size={18} /></span>
                <span className="footer-pillar-title">Construction<br />Chemistry</span>
              </div>
              <div className="footer-pillar">
                <span className="footer-pillar-hex"><Sparkles size={18} /></span>
                <span className="footer-pillar-title">V-Klin<br /><small>Cleaning &amp; Facility Care</small></span>
              </div>
            </div>
          </div>
          <nav className="footer-column" aria-label="Explore">
            <h2>Explore</h2>
            {exploreLinks.map(({ label, href }) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
          <nav className="footer-column" aria-label="Our work">
            <h2>Our work</h2>
            {solutionLinks.map(({ label, href }) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
          <div className="footer-column footer-contact-column">
            <h2>Contact</h2>
            <a href="mailto:polyind2@gmail.com"><Mail size={15} aria-hidden="true" /> polyind2@gmail.com</a>
            <a href="tel:+919820235995"><Phone size={15} aria-hidden="true" /> +91 98202 35995</a>
            <span><MapPin size={15} aria-hidden="true" /> Goregaon (West), Mumbai</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copyright">© 2026 PolyTreat Chemicals Pvt. Ltd.</span>
          <span className="footer-principles">Performance, quality, reliability, service</span>
          <span className="footer-credit">
            Designed with <span className="footer-credit-heart" aria-hidden="true">♥</span> by{" "}
            <a href="https://brightlant.com" target="_blank" rel="noreferrer">Brightlant</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
