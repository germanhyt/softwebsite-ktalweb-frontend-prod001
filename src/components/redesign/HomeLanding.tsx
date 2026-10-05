import SiteNav from "@/components/redesign/SiteNav";
import ServicesPanel from "@/components/redesign/ServicesPanel";
import ContactForm from "@/components/redesign/ContactForm";
import PageMotion from "@/components/redesign/PageMotion";
import ReviewsCarousel from "@/components/redesign/ReviewsCarousel";
import AnalyticsObserver from "@/components/redesign/AnalyticsObserver";
import { LanguageProvider, useLanguage, type Language } from "@/core/hooks/context/LanguageContext";
import { CONTACT_EMAIL, whatsappHref } from "@/core/site-contact";
import { caseMedia } from "@/data/redesign-cases";
import { trackClick, trackFileDownload, trackOutboundLink, trackWhatsApp } from "@/core/helpers/analytics";

import ayniflowShot from "@/assets/images/portfolio_ayniflow.webp?url";
import logoEnergy from "@/assets/images/logo_lvenergy.webp?url";
import logoBcp from "@/assets/images/logo_bcp.webp?url";
import logoMckinsey from "@/assets/images/logo_mckinsey.webp?url";
import logoLaboratoria from "@/assets/images/logo_laboratoria.webp?url";
import logoZukarzen from "@/assets/images/logo_zukarzen.webp?url";
import logoOffroad from "@/assets/images/logo_offroadperu.webp?url";
import logoBiotraining from "@/assets/images/logo_biotraining.webp?url";
import logoHazLaTarea from "@/assets/images/logo_haz_la_tarea.png?url";
import logoDiverty from "@/assets/images/logo_diverty.png?url";
import brochure from "@/assets/brochure_ktalweb.pdf?url";

const AYNI_URL = "https://ayniflow.germ4nhyt.site";

const logos = [
  { src: logoZukarzen, alt: "Zukar Zen" },
  { src: logoLaboratoria, alt: "Laboratoria" },
  { src: logoBcp, alt: "BCP" },
  { src: logoOffroad, alt: "Off Road Perú" },
  { src: logoEnergy, alt: "L&V Energy" },
  { src: logoMckinsey, alt: "McKinsey & Company" },
  { src: logoBiotraining, alt: "Biotraining" },
  { src: logoHazLaTarea, alt: "Haz La Tarea" },
  { src: logoDiverty, alt: "Diverty" },
];

function HomeLandingView() {
  const { t } = useLanguage();
  const whatsappHero = whatsappHref(t.whatsappMessages.hero);
  const whatsappContact = whatsappHref(t.whatsappMessages.contact);

  return (
    <div className="site" id="inicio">
      <a className="skip" href="#contenido">
        {t.skip}
      </a>
      <SiteNav />

      <main id="contenido">
        <section className="band-ink hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-floats" aria-hidden="true">
            <img className="float-art float-data" src="/redesign/float-data.svg" alt="" width="76" height="56" />
            <img className="float-art float-ux" src="/redesign/float-ux.svg" alt="" width="130" height="86" />
            <img className="float-art float-ai" src="/redesign/float-ai.svg" alt="" width="100" height="70" />
          </div>
          <div className="band-inner">
            <h1 id="hero-title" className="hero-lines">
              <span className="display hero-outline" data-enter>
                {t.hero.line1}
              </span>
              <span className="display hero-paper" data-enter>
                {t.hero.line2}
              </span>
              <span className="display hero-violet" data-enter>
                {t.hero.line3}
              </span>
            </h1>
            <div className="hero-bottom">
              <p className="body-l" data-enter>
                {t.hero.body}
              </p>
              <div className="hero-actions" data-enter>
                <a
                  className="btn btn-solid"
                  href="#proyectos"
                  onClick={() => trackClick("hero_ver_proyectos", { location: "hero" })}
                >
                  {t.hero.projects}
                </a>
                <a
                  className="btn btn-ghost"
                  href={whatsappHero}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsApp("hero");
                    trackOutboundLink(whatsappHero, "whatsapp_hero");
                  }}
                >
                  {t.hero.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="band-paper manifesto" aria-labelledby="manifiesto-title">
          <div className="band-inner" data-reveal>
            <p className="label" id="manifiesto-title">
              {t.manifesto.label}
            </p>
            <p className="lead">
              {t.manifesto.leadBefore}
              <em>{t.manifesto.leadEm}</em>
              {t.manifesto.leadAfter}
            </p>
          </div>
        </section>

        <section className="band-paper" id="servicios" aria-labelledby="servicios-title">
          <div className="band-inner">
            <div className="section-head" data-reveal>
              <p className="label">{t.services.label}</p>
              <h2 className="h2" id="servicios-title">
                {t.services.title}
              </h2>
            </div>
            <div data-reveal>
              <ServicesPanel />
            </div>
          </div>
        </section>

        <section className="band-ink" id="productos" aria-labelledby="productos-title">
          <div className="band-inner">
            <div className="split-head" data-reveal>
              <div>
                <p className="label label-lilac">{t.products.label}</p>
                <h2 className="h2" id="productos-title">
                  {t.products.titleLine1}
                  <br />
                  {t.products.titleLine2}
                </h2>
              </div>
              <p className="body-l">{t.products.body}</p>
            </div>

            <div className="products">
              <article className="product" data-reveal>
                <div>
                  <p className="badge">{t.products.badge}</p>
                  <p className="product-kicker">{t.products.kicker}</p>
                  <h3 className="h3">{t.products.name}</h3>
                  <p className="product-copy">{t.products.copy}</p>
                  <div className="product-actions">
                    <a
                      className="btn btn-solid"
                      href={AYNI_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOutboundLink(AYNI_URL, "ayniflow_cta", { location: "productos" })}
                    >
                      {t.products.cta}
                    </a>
                  </div>
                </div>
                <div className="product-shot">
                  <img src={ayniflowShot} alt={t.products.shotAlt} width="1440" height="900" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="band-mist" id="proyectos" aria-labelledby="proyectos-title">
          <div className="band-inner">
            <div className="section-head" data-reveal>
              <p className="label">{t.cases.label}</p>
              <h2 className="h2" id="proyectos-title">
                {t.cases.title}
              </h2>
            </div>
            <div className="cases-sticky">
              {caseMedia.map((item, index) => {
                const copy = t.cases.items[item.id];
                return (
                  <article
                    className="case"
                    key={item.id}
                    style={{ zIndex: index + 1 }}
                  >
                    <div className="case-shot">
                      <img src={item.image} alt={copy.alt} width="1200" height="720" data-case-media />
                    </div>
                    <div className="case-body">
                      <div className="case-brand">
                        <img className="case-logo" src={item.logo} alt={copy.logoAlt} width="160" height="48" />
                      </div>
                      <h3 className="display">{copy.title}</h3>
                      <p className="case-copy">{copy.description}</p>
                      <a
                        className="case-link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackOutboundLink(item.href, `case_${item.id}`, {
                            location: "casos",
                            content_type: "case_study",
                            item_id: item.id,
                          })
                        }
                      >
                        {t.cases.viewSite}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="band-ink" id="capacidades" aria-labelledby="capacidades-title">
          <div className="band-inner">
            <div className="section-head" data-reveal>
              <p className="label label-lilac">{t.caps.label}</p>
              <h2 className="h2" id="capacidades-title">
                {t.caps.titleLine1}
                <br />
                {t.caps.titleLine2}
              </h2>
            </div>
            <div className="caps">
              <article className="cap" data-reveal>
                <h3 className="title">{t.caps.softwareTitle}</h3>
                <p className="cap-copy">{t.caps.softwareCopy}</p>
                <div className="chips">
                  {t.caps.softwareChips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
              <article className="cap" data-reveal>
                <h3 className="title">{t.caps.aiTitle}</h3>
                <p className="cap-copy">{t.caps.aiCopy}</p>
                <div className="chips">
                  {t.caps.aiChips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
              <article className="cap" data-reveal>
                <h3 className="title">{t.caps.systemTitle}</h3>
                <p className="cap-copy">{t.caps.systemCopy}</p>
                <div className="system" aria-hidden="true">
                  <div className="module module-main">{t.caps.moduleMain}</div>
                  <div className="module">{t.caps.module}</div>
                  <div className="module">{t.caps.module}</div>
                  <div className="module">{t.caps.module}</div>
                  <div className="module">{t.caps.module}</div>
                </div>
                <p className="system-note">{t.caps.systemNote}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="band-paper" id="proceso" aria-labelledby="proceso-title">
          <div className="band-inner">
            <div className="section-head" data-reveal>
              <p className="label">{t.process.label}</p>
              <h2 className="h2" id="proceso-title">
                {t.process.title}
              </h2>
            </div>
            <div className="steps">
              {t.process.steps.map((step) => (
                <article className="step" data-reveal key={step.index}>
                  <span className="step-index">{step.index}</span>
                  <h3 className="title">{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="band-paper logo-band" aria-labelledby="clientes-title">
          <div className="band-inner logo-label" data-reveal>
            <p className="logo-title" id="clientes-title">
              {t.clients.titleBefore}
              <em>{t.clients.titleEm}</em>
              {t.clients.titleAfter}
            </p>
          </div>
          <div className="logo-rail">
            <div className="logo-track">
              {logos.map((logo) => (
                <img src={logo.src} alt={logo.alt} width="140" height="48" key={logo.alt} />
              ))}
              {logos.map((logo) => (
                <img src={logo.src} alt="" width="140" height="48" aria-hidden="true" key={`${logo.alt}-dup`} />
              ))}
            </div>
          </div>
        </section>

        <section className="band-ink" aria-labelledby="testimonio-title">
          <div className="band-inner">
            <ReviewsCarousel />
          </div>
        </section>

        <section className="band-paper" id="nosotros" aria-labelledby="nosotros-title">
          <div className="band-inner">
            <p className="label" data-reveal>
              {t.about.label}
            </p>
            <div className="about-grid">
              <h2 className="h2" id="nosotros-title" data-reveal>
                {t.about.title}
                <span className="bang">!</span>
              </h2>
              <div data-reveal>
                <p className="title">{t.about.lead}</p>
                <div style={{ marginTop: "2rem" }}>
                  {t.about.items.map((item) => (
                    <div className="about-block" key={item.question}>
                      <h3 className="about-q">{item.question}</h3>
                      <p className="about-answer">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-ink" id="contacto" aria-labelledby="contacto-title">
          <div className="band-inner" data-reveal>
            <p className="label label-lilac">{t.contact.label}</p>
            <h2 className="display" id="contacto-title">
              {t.contact.title}
            </h2>
            <div className="contact-actions">
              <a
                className="btn btn-solid"
                href={whatsappContact}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsApp("contacto");
                  trackOutboundLink(whatsappContact, "whatsapp_contacto");
                }}
              >
                {t.contact.whatsapp}
              </a>
              <a
                className="btn btn-ghost"
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => trackClick("contact_email", { location: "contacto" })}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="band-ink site-footer">
        <div className="footer-inner">
          <a className="wordmark" href="#inicio">
            ktalweb<span className="bang">!</span>
          </a>
          <p className="footer-meta">{t.footer.city}</p>
          <nav className="footer-links" aria-label={t.footer.social}>
            <a
              href="https://www.instagram.com/ktalweb.pe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink("https://www.instagram.com/ktalweb.pe", "instagram")}
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@ktalweb.pe"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink("https://www.tiktok.com/@ktalweb.pe", "tiktok")}
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574115239227"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackOutboundLink("https://www.facebook.com/profile.php?id=61574115239227", "facebook")
              }
            >
              Facebook
            </a>
            <a
              href={brochure}
              download="brochure_ktalweb.pdf"
              onClick={() => trackFileDownload("brochure_ktalweb.pdf", "footer")}
            >
              {t.footer.brochure}
            </a>
          </nav>
          <p className="footer-meta">
            © {new Date().getFullYear()} {t.footer.legal}
          </p>
        </div>
      </footer>

      <PageMotion />
      <AnalyticsObserver />
    </div>
  );
}

export default function HomeLanding({ initialLang = "es" }: { initialLang?: Language }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <HomeLandingView />
    </LanguageProvider>
  );
}
