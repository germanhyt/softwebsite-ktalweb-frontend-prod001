import { useState } from "react";
import { useLanguage } from "@/core/hooks/context/LanguageContext";
import { trackClick } from "@/core/helpers/analytics";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const links = [
    { href: "#servicios", label: t.nav.services, id: "servicios" },
    { href: "#productos", label: t.nav.products, id: "productos" },
    { href: "#proyectos", label: t.nav.projects, id: "proyectos" },
    { href: "#nosotros", label: t.nav.about, id: "nosotros" },
  ];

  const go = (href: string, label: string) => {
    setOpen(false);
    trackClick("nav_link", { link_text: label, link_url: href });
    scrollToId(href.slice(1));
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          className="wordmark"
          href="#inicio"
          data-enter
          onClick={(event) => {
            event.preventDefault();
            trackClick("nav_logo", { location: "nav" });
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          ktalweb<span className="bang">!</span>
        </a>

        <nav className="nav-links" aria-label={t.nav.primary} data-enter>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                go(link.href, link.label);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-tools" data-enter>
          <div className="lang-switch" role="group" aria-label={t.nav.langLabel}>
            <button
              type="button"
              className={lang === "es" ? "is-active" : undefined}
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              {t.nav.langEs}
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={lang === "en" ? "is-active" : undefined}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              {t.nav.langEn}
            </button>
          </div>

          <a
            className="btn btn-solid btn-sm nav-cta"
            href="#contacto"
            onClick={(event) => {
              event.preventDefault();
              go("#contacto", t.nav.cta);
            }}
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            className="nav-menu"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="nav-drawer">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                go(link.href, link.label);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(event) => {
              event.preventDefault();
              go("#contacto", t.nav.cta);
            }}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
