import { useEffect, useRef, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { nav } from "@/lib/site-data";
import { LANGUAGE_OPTIONS, useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const scrollLockRef = useRef(false);
  const clickTargetRef = useRef<string | null>(null);
  const clickTimeoutRef = useRef<number | null>(null);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    clickTargetRef.current = href;
    scrollLockRef.current = true;
    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      scrollLockRef.current = false;
      clickTargetRef.current = null;
      clickTimeoutRef.current = null;
    }, 1200);
  };

  useEffect(() => {
    const updateHash = () => setActiveSection(window.location.hash || "#home");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href);
    const elements = sectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    let ticking = false;

    const updateActiveSection = () => {
      const headerEl = document.querySelector("header");
      const headerOffset = headerEl ? headerEl.getBoundingClientRect().height + 16 : 120;
      const visibleSection = elements
        .map((element) => ({ href: `#${element.id}`, top: element.getBoundingClientRect().top }))
        .filter((section) => section.top <= headerOffset)
        .sort((a, b) => b.top - a.top)[0];

      if (clickTargetRef.current) {
        // if target not yet reached, keep the clicked link active
        if (visibleSection && visibleSection.href === clickTargetRef.current) {
          clickTargetRef.current = null;
          scrollLockRef.current = false;
        } else {
          return;
        }
      }

      if (visibleSection) {
        setActiveSection(visibleSection.href);
      } else {
        setActiveSection(elements[0] ? `#${elements[0].id}` : "#home");
      }
    };

    const onScroll = () => {
      if (scrollLockRef.current || ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-3">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="PC's Wellness Club" className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-base md:text-lg font-extrabold text-primary-dark whitespace-nowrap">
              PC's Wellness Club
            </div>
            <div className="hidden sm:block text-[10px] text-muted-foreground">
              {t("footer.tagline")}
            </div>
          </div>
        </a>

        <nav className="hidden xl:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => handleNavClick(n.href)}
              className={`text-sm font-medium border-b-2 pb-1 transition-colors ${
                activeSection === n.href
                  ? "text-primary border-primary"
                  : "text-foreground/80 border-transparent hover:text-primary"
              }`}
            >
              {t(n.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div
            className="flex items-center gap-0.5 rounded-full border border-border p-0.5"
            role="group"
            aria-label="Language"
          >
            {LANGUAGE_OPTIONS.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => setLang(opt.code)}
                className={`rounded-full px-2 py-1 text-[11px] sm:text-xs font-semibold transition-colors ${
                  lang === opt.code
                    ? "bg-primary text-white"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <a
            href="#book"
            className="hidden xl:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <Calendar className="h-4 w-4" /> {t("nav.book")}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="xl:hidden border-t border-border bg-white px-4 py-3 space-y-2">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => {
                handleNavClick(n.href);
                setMenuOpen(false);
              }}
              className={`block py-2 text-sm font-medium ${
                activeSection === n.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {t(n.labelKey)}
            </a>
          ))}
          <a
            href="#book"
            className="block bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold text-center mt-2"
          >
            {t("nav.book")}
          </a>
        </div>
      )}
    </header>
  );
}
