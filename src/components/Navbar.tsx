"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

type MenuKey = "products" | "vklin" | "quality" | "company";
type MenuLink = { label: string; href: string; detail?: string };
type MenuGroup = { title: string; links: MenuLink[] };
type MenuPromo = { eyebrow: string; text: string; cta: string; href: string };

const DESKTOP_BREAKPOINT = 1024;

const productGroups: MenuGroup[] = [
  {
    title: "Industrial water",
    links: [
      { label: "Industrial water overview", href: "/solutions/industrial-water" },
      { label: "Boiler & cooling water", href: "/solutions/boiler-cooling-water" },
      { label: "RO & effluent", href: "/solutions/ro-effluent" },
    ],
  },
  {
    title: "Construction & surface protection",
    links: [
      { label: "Construction overview", href: "/solutions/construction-chemistry" },
      { label: "Waterproofing, repair & coatings", href: "/solutions/waterproofing-repair-coatings" },
      { label: "Flooring & joint sealing", href: "/solutions/flooring-joint-sealing" },
    ],
  },
  {
    title: "Specialty products",
    links: [
      { label: "Specialty products overview", href: "/specialty" },
      { label: "COROSIL", href: "/specialty/corosil" },
      { label: "POLYDOR-WS", href: "/specialty/polydor-ws" },
      { label: "POLYKLIN", href: "/specialty/polyklin" },
    ],
  },
  {
    title: "Other catalogue families",
    links: [
      { label: "Paint preservatives", href: "/solutions/paint-preservatives" },
      { label: "Sugar-process chemicals", href: "/solutions/sugar-process-chemicals" },
      { label: "Fireside treatment", href: "/solutions/fireside-treatment" },
      { label: "Automotive chemicals", href: "/solutions/automotive-chemicals" },
    ],
  },
];

const vklinGroups: MenuGroup[] = [
  {
    title: "V-Klin range",
    links: [
      { label: "V-Klin overview", href: "/vklin" },
      { label: "Cleaning product range", href: "/vklin/products" },
    ],
  },
  {
    title: "Cleaning categories",
    links: [
      { label: "Floor & surface care", href: "/vklin/products#floor-surface" },
      { label: "Hand care & hygiene", href: "/vklin/products#hand-hygiene" },
      { label: "Dishwashing", href: "/vklin/products#dishwashing" },
      { label: "Glass & window care", href: "/vklin/products#glass-care" },
    ],
  },
  {
    title: "More care categories",
    links: [
      { label: "Bathroom & toilet care", href: "/vklin/products#toilet-care" },
      { label: "Odour & air care", href: "/vklin/products#odour-care" },
      { label: "Natural wellness", href: "/vklin/products#natural-wellness" },
    ],
  },
];

const qualityGroups: MenuGroup[] = [
  {
    title: "Quality & product information",
    links: [
      { label: "Quality overview", href: "/quality", detail: "How PolyTreat approaches quality and product information" },
      { label: "PQRS framework", href: "/quality#pqrs", detail: "Performance · Quality · Reliability · Service" },
      { label: "Certifications", href: "/certifications", detail: "Review each certificate's stated scope" },
    ],
  },
];

const companyGroups: MenuGroup[] = [
  {
    title: "About PolyTreat",
    links: [
      { label: "Company overview", href: "/about", detail: "Company · product ranges · locations" },
      { label: "Locations & facilities", href: "/about#infrastructure", detail: "Goregaon West · Goregaon East · Tarapur" },
    ],
  },
];

const menuGroups: Record<MenuKey, MenuGroup[]> = {
  products: productGroups,
  vklin: vklinGroups,
  quality: qualityGroups,
  company: companyGroups,
};

const menuLabels: Record<MenuKey, string> = {
  products: "Solutions",
  vklin: "V-Klin",
  quality: "Quality",
  company: "About Us",
};

const menuPromos: Record<MenuKey, MenuPromo> = {
  products: {
    eyebrow: "Not sure where to start",
    text: "Tell us about the plant and the system you need to protect. We will point you to the right solution.",
    cta: "Request a quote",
    href: "/contact#contact-form",
  },
  vklin: {
    eyebrow: "V-Klin range",
    text: "Cleaning products for institutional, commercial and everyday cleaning, under one brand.",
    cta: "Browse the product range",
    href: "/vklin/products",
  },
  quality: {
    eyebrow: "How we work",
    text: "Performance, Quality, Reliability, Service. The framework behind our product information.",
    cta: "Talk to our team",
    href: "/contact#contact-form",
  },
  company: {
    eyebrow: "Talk to us",
    text: "Want to see the facilities or set up a supply discussion? Our team can walk you through it.",
    cta: "Get in touch",
    href: "/contact",
  },
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function stripHash(href: string) {
  return href.split("#")[0];
}

function MenuGroupLinks({
  groups,
  pathname,
  onNavigate,
}: {
  groups: MenuGroup[];
  pathname: string | null;
  onNavigate: () => void;
}) {
  return (
    <div className="nav-menu-groups">
      {groups.map((group) => (
        <section className="nav-menu-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.links.map((link) => {
              const external = link.href.startsWith("https://");
              const className = `nav-menu-group-link${link.detail ? " nav-menu-group-link--detail" : ""}`;
              const current = pathname !== null && !link.href.includes("#") && stripHash(link.href) === pathname;
              const content = (
                <>
                  <span className="nav-menu-link-head">
                    <span className="nav-menu-link-label">{link.label}</span>
                    <ArrowRight className="nav-menu-link-arrow" size={15} aria-hidden="true" />
                  </span>
                  {link.detail && <small>{link.detail}</small>}
                </>
              );

              return (
                <li key={`${group.title}-${link.label}`}>
                  {external ? (
                    <a
                      className={className}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-current={current ? "page" : undefined}
                      onClick={onNavigate}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      className={className}
                      href={link.href}
                      aria-current={current ? "page" : undefined}
                      onClick={onNavigate}
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<MenuKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wasDesktop = useRef(true);

  const clearHoverCloseTimer = useCallback(() => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    hoverCloseTimer.current = null;
  }, []);

  /** Keep the open panel fully on screen when it is wider than the space under its trigger. */
  const clampPanel = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return;

    panel.style.marginLeft = "0px";
    const rect = panel.getBoundingClientRect();
    const gutter = 12;
    let shift = 0;

    if (rect.left < gutter) {
      shift = gutter - rect.left;
    } else if (rect.right > window.innerWidth - gutter) {
      shift = window.innerWidth - gutter - rect.right;
    }

    if (shift !== 0) panel.style.marginLeft = `${shift}px`;
  }, []);

  const activeMenus = useMemo(() => {
    const active = new Set<MenuKey>();
    if (!pathname) return active;

    (Object.keys(menuGroups) as MenuKey[]).forEach((key) => {
      const matches = menuGroups[key].some((group) =>
        group.links.some((link) => {
          const base = stripHash(link.href);
          if (base === "" || base === "/") return false;
          return pathname === base || pathname.startsWith(`${base}/`);
        }),
      );
      if (matches) active.add(key);
    });

    return active;
  }, [pathname]);

  function openMenuFromHover(menu: MenuKey) {
    clearHoverCloseTimer();
    setOpenMenu(menu);
  }

  function toggleMenu(menu: MenuKey) {
    clearHoverCloseTimer();
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  function scheduleMenuClose(menu: MenuKey) {
    clearHoverCloseTimer();
    hoverCloseTimer.current = setTimeout(() => {
      setOpenMenu((current) => (current === menu ? null : current));
      hoverCloseTimer.current = null;
    }, 180);
  }

  useIsomorphicLayoutEffect(() => {
    if (!openMenu) return;
    clampPanel();
  }, [openMenu, clampPanel]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        clearHoverCloseTimer();
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      const mobileToggle = headerRef.current?.querySelector<HTMLButtonElement>(
        '.mobile-menu-btn[aria-expanded="true"]',
      );
      const menuTrigger = headerRef.current?.querySelector<HTMLButtonElement>(
        ".nav-item.is-open .nav-trigger",
      );
      clearHoverCloseTimer();
      setOpenMenu(null);
      setOpenMobileGroup(null);
      setIsMobileMenuOpen(false);
      (mobileToggle ?? menuTrigger)?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      clearHoverCloseTimer();
    };
  }, [clearHoverCloseTimer]);

  useEffect(() => {
    function handleResize() {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      if (desktop !== wasDesktop.current) {
        wasDesktop.current = desktop;
        setOpenMenu(null);
        setOpenMobileGroup(null);
        setIsMobileMenuOpen(false);
      }
      if (openMenu) clampPanel();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openMenu, clampPanel]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  function closeMenus() {
    clearHoverCloseTimer();
    setOpenMenu(null);
    setOpenMobileGroup(null);
    setIsMobileMenuOpen(false);
  }

  function renderMobileMenuGroup(menu: MenuKey) {
    const expanded = openMobileGroup === menu;

    return (
      <section className={`mobile-nav-group mobile-nav-group-${menu}`} key={menu}>
        <button
          type="button"
          aria-expanded={expanded}
          aria-current={activeMenus.has(menu) ? "true" : undefined}
          aria-controls={`mobile-panel-${menu}`}
          onClick={() => setOpenMobileGroup((current) => (current === menu ? null : menu))}
        >
          {menuLabels[menu]} <ChevronDown size={17} aria-hidden="true" />
        </button>
        {expanded && (
          <div id={`mobile-panel-${menu}`} className="mobile-nav-panel">
            <MenuGroupLinks groups={menuGroups[menu]} pathname={pathname} onNavigate={closeMenus} />
          </div>
        )}
      </section>
    );
  }

  function renderDropdown(menu: MenuKey) {
    const promo = menuPromos[menu];

    return (
      <div
        className={`nav-dropdown-panel nav-${menu}-panel`}
        id={`nav-panel-${menu}`}
        ref={panelRef}
        role="group"
        aria-label={`${menuLabels[menu]} links`}
      >
        <MenuGroupLinks groups={menuGroups[menu]} pathname={pathname} onNavigate={closeMenus} />
        <aside className="nav-promo-card">
          <span className="nav-promo-eyebrow">{promo.eyebrow}</span>
          <p className="nav-promo-text">{promo.text}</p>
          <Link className="nav-promo-link" href={promo.href} onClick={closeMenus}>
            {promo.cta}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    );
  }

  function renderMenuTrigger(menu: MenuKey) {
    const isOpen = openMenu === menu;
    const isActive = activeMenus.has(menu);

    return (
      <div
        className={`nav-item nav-item-${menu}${isOpen ? " is-open" : ""}`}
        key={menu}
        data-active={isActive ? "true" : undefined}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") openMenuFromHover(menu);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") scheduleMenuClose(menu);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setOpenMenu((current) => (current === menu ? null : current));
          }
        }}
      >
        <button
          className="nav-trigger"
          type="button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={`nav-panel-${menu}`}
          onClick={() => toggleMenu(menu)}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) openMenuFromHover(menu);
          }}
        >
          {menuLabels[menu]} <ChevronDown size={14} strokeWidth={1.8} aria-hidden="true" />
        </button>
        {isOpen && renderDropdown(menu)}
      </div>
    );
  }

  useEffect(() => {
    let ticking = false;

    function update() {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    const bar = progressBarRef.current;
    if (bar) {
      bar.style.transition = "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)";
      bar.style.transform = "scaleX(1)";
      const timer = setTimeout(() => {
        if (bar) {
          bar.style.transition = "";
          update();
        }
      }, 850);

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div
        ref={progressBarRef}
        className="nav-scroll-progress"
        aria-hidden="true"
      />
      <div className="navbar-inner">
        <Link className="navbar-brand" href="/" aria-label="PolyTreat Chemicals home" onClick={closeMenus}>
          <span className="navbar-logo"><Image src="/logo.png" alt="" fill priority sizes="(max-width: 430px) 132px, (max-width: 1023px) 126px, 118px" /></span>
          <span className="navbar-brand-copy">
            <strong>PolyTreat Chemicals</strong>
            <small>Water Treatment &amp; Specialty Formulations</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className="nav-direct-link" href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenus}>Home</Link>
          {renderMenuTrigger("products")}
          <Link className="nav-direct-link" href="/industries" aria-current={pathname === "/industries" ? "page" : undefined} onClick={closeMenus}>Industries</Link>
          {renderMenuTrigger("vklin")}
          {renderMenuTrigger("quality")}
          {renderMenuTrigger("company")}
          <Link className="nav-direct-link" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenus}>Contact</Link>
        </nav>

        <div className="navbar-actions">
          <Link className="btn btn-accent navbar-cta" href="/contact#contact-form" onClick={closeMenus}>
            <span>Request a Quote</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          <button
            className="mobile-menu-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          <nav className="mobile-menu-list" aria-label="Mobile navigation">
            <Link className="mobile-direct-link" href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={closeMenus}>Home</Link>
            {renderMobileMenuGroup("products")}
            <Link className="mobile-direct-link" href="/industries" aria-current={pathname === "/industries" ? "page" : undefined} onClick={closeMenus}>Industries</Link>
            {renderMobileMenuGroup("vklin")}
            {renderMobileMenuGroup("quality")}
            {renderMobileMenuGroup("company")}
            <Link className="mobile-direct-link" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onClick={closeMenus}>Contact</Link>
            <Link className="btn btn-accent mobile-cta" href="/contact#contact-form" onClick={closeMenus}>
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
