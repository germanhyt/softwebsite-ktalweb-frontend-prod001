import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const go = (href: string) => {
    setOpen(false);
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
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          ktalweb<span className="bang">!</span>
        </a>

        <nav className="nav-links" aria-label="Principal" data-enter>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); go(link.href); }}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-solid btn-sm nav-cta" href="#contacto" data-enter onClick={(event) => { event.preventDefault(); go("#contacto"); }}>
          Hablemos
        </a>

        <button
          type="button"
          className="nav-menu"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="nav-drawer">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => { event.preventDefault(); go(link.href); }}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={(event) => { event.preventDefault(); go("#contacto"); }}>
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}
