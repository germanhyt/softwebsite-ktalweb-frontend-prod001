import { c as createComponent, b as createAstro, e as addAttribute, r as renderHead, f as renderSlot, g as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BPzZAder.mjs';
import 'kleur/colors';
import { H as Header, l as logoOffroad, a as logoLVEnergy, b as logoZukarZen, D as DescargarBrochureSection, F as Footer } from '../chunks/logo_zukarzen_S1AoyHhw.mjs';
import 'clsx';
/* empty css                                     */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$LayoutPortfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutPortfolio;
  return renderTemplate`<html lang="en" data-astro-cid-id6yccsw> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Portafolio</title><meta name="description" content="Portafolio de proyectos Ktalweb"><meta name="keywords" content="ktalweb, portafolio, proyectos, desarrollo web"><meta name="author" content="Ktalweb"><meta property="og:type" content="website"><meta property="og:title" content="Portafolio Ktalweb"><meta property="og:description" content="Portafolio de proyectos Ktalweb"><meta property="og:image" content="/logo.webp"><meta property="og:url" content="https://ktalweb.com/portfolio"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@ktalweb"><meta name="twitter:creator" content="@ktalweb"><meta name="twitter:title" content="Portafolio Ktalweb"><meta name="twitter:description" content="Portafolio de proyectos Ktalweb"><meta name="twitter:image" content="/logo.webp"><meta name="robots" content="index, follow"><link rel="canonical" href="https://ktalweb.com/portfolio"><link rel="apple-touch-icon" href="/favicon.png">${renderHead()}</head> <body data-astro-cid-id6yccsw> ${renderSlot($$result, $$slots["default"])}  <!-- 
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="icon" type="image/svg+xml" href="/favicon.png" />
    <meta name="generator" content={Astro.generator} />

    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(", ")} />
    <meta name="author" content={author} />

    <meta property="og:type" content={ogType} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:url" content={ogUrl} />
    <meta name="twitter:card" content={twitterCard} />
    <meta name="twitter:site" content={twitterSite} />
    <meta name="twitter:creator" content={twitterCreator} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    <meta name="robots" content={robots} />

    <link rel="canonical" href={canonicalUrl} />
    <link rel="apple-touch-icon" href="/favicon.png" /> --></body></html>`;
}, "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/layouts/LayoutPortfolio.astro", void 0);

const PortfolioCarousel = ({ cases }) => {
  const [active, setActive] = useState(0);
  const total = cases.length;
  const current = cases[active];
  const goPrev = () => setActive((prev) => prev === 0 ? total - 1 : prev - 1);
  const goNext = () => setActive((prev) => prev === total - 1 ? 0 : prev + 1);
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col items-center pt-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center mb-6 gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-primary-purple-100 shadow hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl",
          "aria-label": "Anterior",
          onClick: goPrev,
          children: /* @__PURE__ */ jsx(IoIosArrowBack, {})
        }
      ),
      current.logo && /* @__PURE__ */ jsx("img", { src: current.logo, alt: current.logoAlt || current.title, className: "h-10 w-auto" }),
      current.extraLogos && current.extraLogos.map((l, i) => /* @__PURE__ */ jsx("img", { src: l.src, alt: l.alt, className: "h-10 w-auto ml-2" }, i)),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-primary-purple-100 shadow hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl",
          "aria-label": "Siguiente",
          onClick: goNext,
          children: /* @__PURE__ */ jsx(IoIosArrowForward, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow p-6 md:p-10 w-full max-w-5xl 2xl:max-w-6xl flex flex-col md:flex-row gap-8 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: current.description }),
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg text-black mb-2", children: "¿Cómo lo logramos?" }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 space-y-2 text-gray-700", children: current.how.map((item, idx) => /* @__PURE__ */ jsx("li", { children: item }, idx)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative flex-1 flex flex-col items-center gap-4 mb-32 sm:mb-10 md:mb-0", children: current.images.map((img, idx) => /* @__PURE__ */ jsx(
        "img",
        {
          src: img,
          alt: current.title + " mockup " + (idx + 1),
          className: idx === 0 ? "rounded-lg shadow w-full max-w-sm mb-16  pr-12 lg:pr-auto " : "absolute top-16 sm:top-28 right-0 3xl:right-10 z-10 rounded-lg shadow w-24 sm:w-32 md:w-36"
        },
        idx
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-6xl flex justify-end mt-4", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: current.web,
        className: "flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          "Ver página web",
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
        ]
      }
    ) })
  ] });
};

const logoLaboratoriaBCP = "/_astro/logo_laboratoria_bcp.vlMfaJbj.webp";

const logoLaboratoriaMackinsey = "/_astro/logo_laboratoria_mackinsey.Bc4f_xPX.webp";

const portfolioOffroadperu1 = "/_astro/portfolio_offroad_1.jWDi59kd.webp";

const portfolioOffroadperu2 = "/_astro/portfolio_offroad_2.B2NdB6Jl.webp";

const portfolioLaboratoriaBCP1 = "/_astro/portfolio_labbcp_1.1pgAxDDq.webp";

const portfolioLaboratoriaBCP2 = "/_astro/portfolio_labbcp_2.CI8wGRTm.webp";

const portfolioLVEnergy1 = "/_astro/portfolio_lyvenergy_1.EQezXBli.webp";

const portfolioLVEnergy2 = "/_astro/portfolio_lyvenergy_2.C1e1fm_s.webp";

const portfolioZukarzen1 = "/_astro/portfolio_zukarzen_1.DUEhegLK.webp";

const portfolioZukarzen2 = "/_astro/portfolio_zukarzen_2.C7Cg2WLk.webp";

const portfolioLaboratoriaMackinsey1 = "/_astro/portfolio_labmack_1.D1vZoiv7.webp";

const portfolioLaboratoriaMackinsey2 = "/_astro/portfolio_labmack_2.B36Dc4F8.webp";

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const cases = [
    {
      logo: logoOffroad,
      logoAlt: "Off Road Peru",
      title: "Offroad Per\xFA",
      description: `Offroad Per\xFA ofrece equipos y accesorios para veh\xEDculos todoterreno, overland y racing. Es el punto de encuentro para quienes buscan rendimiento y resistencia en cada aventura. El cliente necesitaba una p\xE1gina web para mostrar el detalle de sus accesorios OFF ROAD de manera clara y accesible.`,
      how: [
        "Redujimos la carga de contenido t\xE9cnico para evitar saturar al usuario con informaci\xF3n innecesaria.",
        "Optimizamos la presentaci\xF3n del contenido mediante una estructura visual sencilla y f\xE1cil de navegar.",
        "Simplificamos la comprensi\xF3n de la informaci\xF3n destacando los beneficios clave de los productos.",
        "Seleccionamos y editamos cuidadosamente las im\xE1genes para reforzar la identidad de marca y facilitar la lectura visual.",
        "Se prioriz\xF3 un dise\xF1o limpio y ordenado, enfocado en mejorar la experiencia del usuario final."
      ],
      images: [portfolioOffroadperu1, portfolioOffroadperu2],
      web: "https://offroadperu.com.pe"
    },
    {
      logo: logoLaboratoriaBCP,
      logoAlt: "Laboratoria / BCP",
      title: "Laboratoria / BCP",
      description: `Innova BCP 2025 es una iniciativa que promueve ideas innovadoras enfocadas en resolver desaf\xEDos reales del sector financiero. A trav\xE9s de esta plataforma, el BCP invita a estudiantes, startups y profesionales a plantear soluciones que generen impacto en el futuro de la banca. El cliente necesitaba una p\xE1gina web para captar nuevas talentos femeninos para su Hackathon 2025.`,
      how: [
        "Redujimos la carga de contenido t\xE9cnico para evitar saturar al usuario y agregamos animaciones para que sea m\xE1s din\xE1mica la navegaci\xF3n.",
        "Optimizamos la presentaci\xF3n del contenido mediante una estructura visual sencilla y f\xE1cil de navegar con los colores de las dos empresas participantes.",
        "Mostramos los beneficios del concurso junto con los desaf\xEDos para que el usuario visualice el reto y se motive a participar.",
        "Seleccionamos y editamos cuidadosamente las im\xE1genes para reforzar la identidad de marca y facilitar la lectura visual.",
        "Se prioriz\xF3 un dise\xF1o limpio y ordenado, enfocado en que el usuario pueda recorrer cualquier duda de la web desde el inicio al final de la plataforma."
      ],
      images: [portfolioLaboratoriaBCP1, portfolioLaboratoriaBCP2],
      web: "https://innovabcp2025.com"
    },
    {
      logo: logoLVEnergy,
      logoAlt: "L&V Energy",
      title: "L&V Energy",
      description: `L&V Energy es una empresa especializada en soluciones energ\xE9ticas sostenibles, orientada a generar eficiencia en el consumo el\xE9ctrico de hogares, empresas e industrias. Su objetivo es impulsar un uso m\xE1s inteligente de la energ\xEDa a trav\xE9s de asesor\xEDa, monitoreo y productos tecnol\xF3gicos. El cliente necesitaba una web que pueda mostrar los cursos que ofrece para capacitaci\xF3n de l\xEDderes.`,
      how: [
        "Creamos una estructura de navegaci\xF3n sencilla que permite a las empresas encontrar f\xE1cilmente los programas seg\xFAn sus necesidades (por nivel, modalidad o solicitud).",
        "Agregamos secciones espec\xEDficas para mostrar los beneficios y fortalezas de cada curso: metodolog\xEDa pr\xE1ctica, instructores certificados y casos de \xE9xito.",
        "A\xF1adimos un \xE1rea de \u201CCertificados validados\u201D con los logotipos de las instituciones para dar confianza en la capacitaci\xF3n, retroalimentar e incentivar la inscripci\xF3n.",
        "Implementamos formularios de inscripci\xF3n y solicitud de informaci\xF3n optimizados para facilitar el contacto y la conversi\xF3n.",
        "Se prioriz\xF3 un dise\xF1o limpio y ordenado, enfocado en mejorar la experiencia del usuario final."
      ],
      images: [portfolioLVEnergy1, portfolioLVEnergy2],
      web: "https://www.lyvenergy.com"
    },
    {
      logo: logoZukarZen,
      logoAlt: "Zukarzen",
      title: "ZukarzenL",
      description: `Zukarzen es una pasteler\xEDa saludable con sede en Lima, Per\xFA, especializada en la elaboraci\xF3n de postres artesanales sin az\xFAcar, sin gluten y sin lactosa. Su objetivo es ofrecer alternativas deliciosas y saludables para quienes buscan cuidar su alimentaci\xF3n sin renunciar al placer de un buen postre. El cliente necesitaba una p\xE1gina web que reflejara la identidad de Zukarzen como una pasteler\xEDa saludable y profesional, y que comunicara sus productos de forma clara y atractiva.`,
      how: [
        "Se prioriz\xF3 una navegaci\xF3n intuitiva que permitiera a los usuarios explorar f\xE1cilmente las categor\xEDas de productos, como tortas, cheesecakes, pies y opciones keto-friendly.",
        "Se estructur\xF3 el contenido para resaltar los beneficios de cada producto, incluyendo detalles sobre sus ingredientes y valores nutricionales, facilitando la toma de decisiones informadas por parte de los clientes.",
        "Se dise\xF1aron secciones que muestran la variedad de postres disponibles, con im\xE1genes atractivas y descripciones detalladas, para transmitir la calidad y el sabor de los productos.",
        "Se integr\xF3 un sistema de contacto eficiente, incluyendo enlaces directos a WhatsApp, para facilitar la comunicaci\xF3n y los pedidos por parte de los clientes.",
        "El dise\xF1o final refleja la esencia de Zukarzen: una combinaci\xF3n de salud, sabor y arte en la pasteler\xEDa, alineado con su compromiso de ofrecer postres deliciosos sin comprometer el bienestar de sus clientes."
      ],
      images: [portfolioZukarzen1, portfolioZukarzen2],
      web: "https://zukarzen.com"
    },
    {
      logo: logoLaboratoriaMackinsey,
      logoAlt: "Laboratoria",
      title: "Laboratoria",
      description: `Laboratoria impulsa el talento femenino en tecnolog\xEDa, brindando formaci\xF3n y oportunidades para cerrar la brecha de g\xE9nero en la industria digital. El cliente necesitaba una web que le permita mostrar ciertos puntos clave sobre su estudio y agregando tambi\xE9n las im\xE1genes descargables y animaciones que sumaban mucho valor para la comprensi\xF3n del mensaje.`,
      how: [
        "Se priorizo utilizar animaciones puntuales en algunas secciones de la web para no saturar al usuario.",
        "Se trabajo la informaci\xF3n de cada texto para que sea simple de comprender y se resalten las palabras claves referentes al estudio.",
        "Sobre las im\xE1genes, se optimizaron para que no demore la carga en su visualizaci\xF3n y descarga.",
        "Se agrego un switch para cambiar el idioma a portugu\xE9s a requerimiento del cliente. Este se coloco en el header para su r\xE1pido uso y f\xE1cil ubicaci\xF3n.",
        "Cada secci\xF3n se trabajo para que en la mitad de la p\xE1gina se agreguen estrategicamente los botones de 'Descarga el reporte'.",
        "Para llevar un control de las descargas se propuso un excel con ciertos campos detallados para que puedan hacer seguimiento de las empresas que descargan e invitarlos a conocer m\xE1s del estudio u otro objetivo."
      ],
      images: [portfolioLaboratoriaMackinsey1, portfolioLaboratoriaMackinsey2],
      web: "http://laboratoria-brechadegenero.la"
    }
  ];
  return renderTemplate`${renderComponent($$result, "LayoutPortfolio", $$LayoutPortfolio, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<section class="relative w-full h-[8rem] md:h-[10rem] overflow-hidden
    flex items-center justify-center"> <video class="absolute top-0 left-0 w-full h-full object-cover"${addAttribute("https://res.cloudinary.com/dz0ajaf3i/video/upload/v1746928699/KTALWEB/hero_banner_ff0ijr.mp4", "src")} autoplay loop muted></video> <h1 class="z-10 relative w-full text-center text-white
      font-nunito text-4xl md:text-5xl font-bold">
Explora nuestros casos de éxito
</h1> <div class="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] backdrop-blur-sm"></div> </section> ${renderComponent($$result2, "PortfolioCarousel", PortfolioCarousel, { "client:load": true, "cases": cases, "client:component-hydration": "load", "client:component-path": "@/components/PortfolioCarousel.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "DescargarBrochureSection", DescargarBrochureSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DescargarBrochureSection", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
