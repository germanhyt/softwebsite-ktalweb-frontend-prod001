import { c as createComponent, e as createAstro, f as addAttribute, r as renderHead, g as renderSlot, h as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CL16h7-1.mjs';
import 'kleur/colors';
import { b as logoZukarZen, l as logoOffroad, a as logoLVEnergy, H as Header, D as DescargarBrochureSection, F as Footer } from '../chunks/logo_zukarzen_S1AoyHhw.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { VscArrowCircleRight } from 'react-icons/vsc';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
export { renderers } from '../renderers.mjs';

const defaultSEO = {
  title: "Ktalweb - Comienza a digitalizar tu negocio",
  description: "Ktalweb es la solución para contruir tu página web profesional, rápida y optimizada para SEO. Ofrecemos diseño web personalizado, tiendas virtuales y landing pages que convierten. ¡Digitaliza tu negocio hoy mismo!",
  keywords: [
    // Diseño y desarrollo general
    "Diseño de landing page profesional",
    "Diseño web responsive para negocios",
    "Crear página web profesional en Perú",
    "Diseñador web freelance experto",
    "Desarrollo de páginas web a medida",
    "Diseño UX/UI para conversiones",
    "Páginas web optimizadas para móviles",
    "Diseño web personalizado para empresas",
    "Webs rápidas con buen SEO",
    "Diseño de ecommerce atractivo",
    // Tiendas virtuales y ecommerce
    "Crear tienda online profesional",
    "Desarrollo de ecommerce completo",
    "Tienda virtual con pasarelas de pago",
    "Integrar MercadoPago en tienda online",
    "Solución ecommerce para pymes Perú",
    "Tienda virtual escalable y segura",
    "Web con carrito de compras integrado",
    "Vender productos por internet Perú",
    "Tienda online responsive 2024",
    "Ecommerce con administrador fácil",
    // Landing pages y conversión
    "Landing page que convierte visitantes",
    "Diseñar página de captación leads",
    "Landing page para campañas Ads",
    "Página de aterrizaje alta conversión",
    "Crear squeeze page profesional",
    "Landing page para generación de leads",
    "Diseño de funnel de ventas efectivo",
    "Página de ventas persuasiva",
    "Landing page con formulario óptimo",
    "One page site para servicios",
    // SEO y rendimiento
    "Páginas web con SEO básico incluido",
    "Optimización velocidad carga web",
    "Web con certificado SSL gratis",
    "Diseño web SEO-friendly Perú",
    "Integración Google Analytics 4",
    "Web optimizada para buscadores",
    "Meta tags y SEO técnico profesional",
    "Estructura web para buen posicionamiento",
    "Contenido optimizado para SEO",
    "Migración web sin perder SEO",
    // Soluciones comerciales
    "Páginas web económicas para emprendedores",
    "Web corporativa moderna y funcional",
    "Presencia online profesional económica",
    "Paquete completo web + hosting Perú",
    "Mantenimiento web incluido mensual",
    "Cómo crear mi página web profesional",
    "Necesito web para mi negocio urgente",
    "Cuánto cuesta página web en Perú",
    "Contratar diseñador web confiable"
  ],
  author: "Ktalweb",
  // ...otras configuraciones SEO...
  ogType: "website",
  ogImage: "https://ktalweb.pe/logo.webp",
  ogUrl: "https://innovabcp2025.pe",
  twitterCard: "summary_large_image",
  twitterSite: "@ktalweb",
  twitterCreator: "@ktalweb",
  canonicalUrl: "https://ktalweb.pe",
  robots: "index, follow"
};

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    keywords,
    author,
    ogType,
    ogImage,
    ogUrl,
    twitterCard,
    twitterSite,
    twitterCreator,
    canonicalUrl,
    robots
  } = Astro2.props.seo || defaultSEO;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords.join(", "), "content")}><meta name="author"${addAttribute(author, "content")}><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:url"${addAttribute(ogUrl, "content")}><meta name="twitter:card"${addAttribute(twitterCard, "content")}><meta name="twitter:site"${addAttribute(twitterSite, "content")}><meta name="twitter:creator"${addAttribute(twitterCreator, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><meta name="robots"${addAttribute(robots, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><link rel="apple-touch-icon" href="/favicon.png">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/layouts/Layout.astro", void 0);

const HeroBanner = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = ["Vende 24/7", "Atrae clientes", "Conecta y crece"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full  h-[40rem] md:h-[47rem] lg:h-[40rem] xl:h-[40rem] 3xl:h-[48rem] overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        className: "absolute top-0 left-0 w-full h-full object-cover",
        src: "https://res.cloudinary.com/dz0ajaf3i/video/upload/v1746928699/KTALWEB/hero_banner_ff0ijr.mp4",
        autoPlay: true,
        loop: true,
        muted: true
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-md px-5 sm:max-w-xl md:max-w-[40rem] relative z-10 flex flex-col items-start justify-center h-full  text-white ", children: [
      /* @__PURE__ */ jsxs("h1", { className: "font-nunito text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight", children: [
        "¡Comienza hoy a ",
        /* @__PURE__ */ jsx("br", {}),
        " digitalizar tu negocio!",
        /* @__PURE__ */ jsx("br", { className: "flex" }),
        /* @__PURE__ */ jsxs("div", { className: "relative inline-block mt-3", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "z-0 absolute inset-0 bg-gradient-to-r from-[#5919C1] to-[#3B206E] rounded-xl",
              style: { filter: "blur(16px)" }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "relative z-10 px-2 rounded-xl text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold sm:ml-0", children: messages[currentMessage] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "font-nunito text-lg sm:text-2xl mt-6 max-w-xl", children: "Creamos páginas webs que potencian tu presencia digital y reflejan lo que te hace único." }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#contact",
          className: "flex items-center gap-2  mt-8 px-6 py-2 bg-primary-purple-100  rounded-full transition duration-300",
          children: [
            /* @__PURE__ */ jsx("span", { className: "font-nunito text-white text-lg font-medium", children: "Cotizar ahora" }),
            /* @__PURE__ */ jsx(VscArrowCircleRight, { className: "text-4xl" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] backdrop-blur-sm" })
  ] });
};

const k = "/_astro/k.CBjRfM1B.webp";

const Button = ({ text, Icon, styles, textSizes, typeButton, isLoading }) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: typeButton === "submit" ? "submit" : "button",
      disabled: isLoading,
      className: `${styles ? styles : "flex gap-2 items-center justify-center bg-black text-white rounded-3xl py-1 px-4"}
      sm:hover:bg-[#A2A2A2] border sm:hover:border-black    
      `,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `
          font-worksans font-light
          ${textSizes ? textSizes : "text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] 3xl:text-[1.5rem]"}`,
            children: text
          }
        ),
        Icon && /* @__PURE__ */ jsx(Icon, {})
      ]
    }
  );
};

const optionsAlert = {
  title: "OFFROAD PERU SAC",
  html: "Offroad Perú SAC",
  customClass: {
    confirmButton: "btn btn-primary mx-1",
    cancelButton: "btn btn-danger mx-1",
    denyButton: "btn btn-warning mx-1"
  },
  buttonsStyling: false,
  confirmButtonText: "confirmar",
  cancelButtonText: "cancelar",
  denyButtonText: "denegar"
};
const extend = (...args) => args.reduce((a, b) => Object.assign(a, b), {});
const swalAlertFire = async (selectOptions) => {
  const currentOptions = extend(optionsAlert, selectOptions);
  return await Swal.fire(currentOptions);
};

const ModalForm = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const schema = Yup.object().shape({
    enterprise: Yup.string().required("El nombre de la empresa es obligatorio"),
    link: Yup.string().required("El enlace es obligatorio"),
    cellphone: Yup.string().matches(/^\d+$/, "El número de celular debe contener solo números").required("El número de celular es obligatorio"),
    email: Yup.string().email("Debe ser un correo válido").required("El correo es obligatorio"),
    message: Yup.string().optional()
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
    // Uso 'as any' para evitar problemas de tipado
  });
  const onSubmit = async (data) => {
    console.log("Form data:", data);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        setIsLoading(false);
        onClose();
        reset();
        return;
      }
      swalAlertFire({
        title: "¡Gracias por contactarnos!",
        html: "Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonText: "Cerrar",
        buttonsStyling: false
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      onClose();
      reset();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-[70] ", children: /* @__PURE__ */ jsxs("div", { className: "relative bg-white p-6 rounded-lg w-[28rem] h-fit lg:h-[39rem] mx-4 sm:mx-0 ", children: [
    /* @__PURE__ */ jsx("div", { className: " absolute top-3 right-4 cursor-pointer", onClick: () => {
      onClose();
      reset();
    }, children: /* @__PURE__ */ jsx(IoClose, { className: "text-[1.5rem]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 lg:mt-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-[1.5rem] leading-tight font-worksans font-semibold px-10", children: "Rediseña tu web con nosotros" }),
      /* @__PURE__ */ jsx("p", { className: "text-center  text-[1rem] font-worksans pb-4 mt-4", children: "Completa estos datos y nos comunicaremos contigo." }),
      /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "grid grid-cols-1 lg:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 ", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ...register("enterprise"),
              className: "w-full border rounded-md p-2 placeholder:text-[0.8rem] ",
              placeholder: "Empresa"
            }
          ),
          errors.enterprise && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-[0.7rem]", children: errors.enterprise.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 ", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ...register("link"),
              className: "w-full border rounded-md p-2 placeholder:text-[0.8rem]",
              placeholder: "Link de tu web"
            }
          ),
          errors.link && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-[0.7rem]", children: errors.link.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 ", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ...register("cellphone"),
              className: "w-full border rounded-md p-2 placeholder:text-[0.8rem]",
              placeholder: "Celular"
            }
          ),
          errors.cellphone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-[0.7rem]", children: errors.cellphone.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 ", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              ...register("email"),
              className: "w-full border rounded-md p-2 placeholder:text-[0.8rem]",
              placeholder: "Correo electrónico"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-[0.7rem]", children: errors.email.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx(
            "textarea",
            {
              ...register("message"),
              className: "w-full border rounded-md p-2 py-2 placeholder:text-[0.8rem]",
              placeholder: "Cuéntanos brevemente que te gustaría mejorar de tu página web",
              rows: 4
            }
          ),
          errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-[0.7rem]", children: errors.message.message })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-2 flex justify-center", children: /* @__PURE__ */ jsx(
          Button,
          {
            typeButton: "submit",
            text: "Enviar",
            styles: "bg-primary-purple-100 text-white rounded-3xl py-2 px-6 w-fit",
            textSizes: "text-[1rem] font-worksans font-medium",
            isLoading
          }
        ) })
      ] }) })
    ] })
  ] }) }) });
};

const SolicitarCTABannerSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "",
        style: {
          background: "linear-gradient(90deg, #18003E 40%, #5919C1 90%)",
          color: "#FFFFFF"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "py-12 lg:py-16 container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-lg 3xl:max-w-2xl text-start flex-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-nunito text-3xl md:text-4xl font-bold mb-4", children: "¿No estás satisfecho con los resultados de tu web actual?" }),
            /* @__PURE__ */ jsx("p", { className: "font-nunito text-base mb-6", children: "Pide una auditoría gratuita hoy y te ayudaremos a potenciarla." }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "flex items-center gap-2 bg-primary-purple-200 text-white font-nunito font-semibold px-5 py-2 rounded-full transition bg-primary-purple-100 hover:cursor-pointer",
                onClick: () => {
                  if (isModalOpen) {
                    setModalOpen(false);
                  } else {
                    setModalOpen(true);
                  }
                },
                children: [
                  "Solicitar auditoría gratuita",
                  /* @__PURE__ */ jsx(VscArrowCircleRight, { className: "text-2xl" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-center relative", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: k,
              alt: "Logo K",
              className: "rounded-lg object-cover w-full max-w-md h-64 md:h-72"
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(ModalForm, { isOpen: isModalOpen, onClose: () => setModalOpen(false) })
  ] });
};

const Soluciones1 = "data:image/webp;base64,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";

const Soluciones2 = "/_astro/soluciones_2.BZZpzBVp.webp";

const Soluciones3 = "/_astro/soluciones_3.JEtGKZD1.webp";

const proceso1 = "data:image/webp;base64,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";

const proceso2 = "data:image/webp;base64,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";

const proceso3 = "data:image/webp;base64,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";

const proceso4 = "data:image/webp;base64,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";

const logoLaboratoria = "/_astro/logo_laboratoria.woBEIoUx.webp";

const logoBCP = "/_astro/logo_bcp.CmEpf_e3.webp";

const logoMcKinsey = "/_astro/logo_mckinsey.CDJZKgvh.webp";

const diseno = "/_astro/dise%C3%B1o_captar_convertir_crecer.0v-MSNOd.webp";

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const logos = [
    { src: logoZukarZen, alt: "Zukar Zen" },
    { src: logoLaboratoria, alt: "Laboratoria" },
    { src: logoBCP, alt: "BCP" },
    { src: logoOffroad, alt: "Off Road Peru" },
    { src: logoLVEnergy, alt: "L&V Energy" },
    { src: logoMcKinsey, alt: "McKinsey & Company" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default" })} ${renderComponent($$result2, "HeroBanner", HeroBanner, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/HeroBanner", "client:component-export": "default" })}  ${maybeRenderHead()}<section class="py-12 lg:py-16 bg-white" aria-label="Empresas que confían en nosotros"> <div class="container mx-auto"> <h2 class="text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-8 lg:mb-12">
Estos clientes estan invirtiendo en <span class="text-primary-purple-100">potenciar</span> <br> <span class="text-primary-purple-100">
su presencia digital con nosotros</span> </h2> </div> <div class="3xl:container mx-auto overflow-hidden relative w-full"> <div class="carousel-track flex items-center gap-12 animate-carousel min-w-max"> ${logos.map((logo, i) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-14 inline-block" loading="lazy" width="auto" aria-hidden="true">`)}  ${logos.map((logo, i) => renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.alt, "alt")} class="h-14 inline-block" loading="lazy" width="auto" aria-hidden="true">`)} </div> </div> </section>   <section class="py-12 lg:py-16 container mx-auto flex flex-col md:flex-row items-center justify-between gap-8"> <div class="md:w-2/5 max-w-lg 3xl:max-w-2xl text-start"> <h2 class="font-nunito text-3xl md:text-4xl font-bold text-black mb-4 pr-8">
Creamos la web <span class="text-primary-purple-100">que </span> <br> <span class="text-primary-purple-100">merece tu negocio</span> </h2> <p class="font-nunito font-medium text-lg text-gray-600 pr-4">
Hoy en día es necesario contar con una herramienta digital adicional a
        las redes sociales, que sea una pista de aterrizaje para todos esos
        usuarios que desean explorar y conocer más sobre tu negocio.
</p> </div> <div class="flex-1 flex justify-center relative"> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[120%] z-0 pointer-events-none"> <div class="w-full h-full rounded-2xl" style="background:radial-gradient(ellipse at center, rgba(226, 208, 255, 0.75) 70%, rgba(139,139,217,0.0) 75%); filter: blur(32px);"></div> </div> <video class="z-10 rounded-lg shadow-md w-full md:w-[80%]"${addAttribute("https://res.cloudinary.com/dz0ajaf3i/video/upload/v1749927871/KTALWEB/video_ktalweb_bci6b8.mov", "src")} autoplay loop muted playsinline></video> </div> </section>  <section class="py-12 lg:py-16 bg-white"> <div class="container mx-auto text-center mb-8"> <h2 class="font-nunito text-3xl md:text-4xl font-bold text-black mb-6">
Diseñadas para <span class="text-primary-purple-100">captar, convertir y crecer</span> </h2> </div> <div class="container mx-auto flex flex-col-reverse md:flex-row lg:items-center gap-8"> <!-- Imagen --> <div class="md:w-2/3 lg:w-2/5"> <img${addAttribute(diseno, "src")} alt="Diseñadas para captar, convertir y crecer" class="rounded-lg shadow-md w-full"> </div> <!-- Textos --> <div class="md:w-1/3 lg:w-3/5"> <ul class="space-y-8"> <li> <button class="font-nunito text-xl font-bold text-primary-purple-100 mb-2 w-full text-left flex md:hidden" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg.plus').classList.toggle('hidden'); this.querySelector('svg.minus').classList.toggle('hidden')"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M12 4v16m8-8H4"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 hidden minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M20 12H4"></path> </svg>
Optimización
</button> <div class="hidden md:block"> <h3 class="hidden md:block font-nunito text-xl font-bold text-primary-purple-100 mb-2">
Optimización
</h3> <p class="font-nunito text-gray-600">
Carga veloz y rendimiento optimizado para una experiencia sin
                fricciones.
</p> <div class="h-[.1px] mt-2 lg:mt-3 w-full bg-primary-purple-100"></div> </div> </li> <li> <button class="font-nunito text-xl font-bold text-primary-purple-100 mb-2 w-full text-left flex items-center md:hidden" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg.plus').classList.toggle('hidden'); this.querySelector('svg.minus').classList.toggle('hidden')"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M12 4v16m8-8H4"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 hidden minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M20 12H4"></path> </svg>
Estructura efectiva
</button> <div class="hidden md:block"> <h3 class="hidden md:block font-nunito text-xl font-bold text-primary-purple-100 mb-2">
Estructura efectiva
</h3> <p class="font-nunito text-gray-600">
Enfocadas en convertir visitantes en clientes, con una
                navegación fluida y altamente interactiva.
</p> <div class="h-[.1px] mt-2 lg:mt-3 w-full bg-primary-purple-100"></div> </div> </li> <li> <button class="font-nunito text-xl font-bold text-primary-purple-100 mb-2 w-full text-left flex items-center md:hidden" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg.plus').classList.toggle('hidden'); this.querySelector('svg.minus').classList.toggle('hidden')"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M12 4v16m8-8H4"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 hidden minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M20 12H4"></path> </svg>
Escalables
</button> <div class="hidden md:block"> <h3 class="hidden md:block font-nunito text-xl font-bold text-primary-purple-100 mb-2">
Escalables
</h3> <p class="font-nunito text-gray-600">
Diseñadas para crecer contigo en el tiempo, permitiéndote
                integrar fácilmente una tienda, blog, sistema de reservas u
                otras secciones sin complicaciones.
</p> <div class="h-[.1px] mt-2 lg:mt-3 w-full bg-primary-purple-100"></div> </div> </li> <li> <button class="font-nunito text-xl font-bold text-primary-purple-100 mb-2 w-full text-left flex items-center md:hidden" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg.plus').classList.toggle('hidden'); this.querySelector('svg.minus').classList.toggle('hidden')"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M12 4v16m8-8H4"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 hidden minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M20 12H4"></path> </svg>
Navegación intuitiva
</button> <div class="hidden md:block"> <h3 class="hidden md:block font-nunito text-xl font-bold text-primary-purple-100 mb-2">
Navegación intuitiva
</h3> <p class="font-nunito text-gray-600">
Experiencia intuitiva con estructura clara, navegación fluida y
                contenido fácil de entender.
</p> <div class="h-[.1px] mt-2 lg:mt-3 w-full bg-primary-purple-100"></div> </div> </li> <li> <button class="font-nunito text-xl font-bold text-primary-purple-100 mb-2 w-full text-left flex items-center md:hidden" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg.plus').classList.toggle('hidden'); this.querySelector('svg.minus').classList.toggle('hidden')"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M12 4v16m8-8H4"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 hidden minus" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M20 12H4"></path> </svg>
Diseño adaptable
</button> <div class="hidden md:block"> <h3 class="hidden md:block font-nunito text-xl font-bold text-primary-purple-100 mb-2">
Diseño adaptable
</h3> <p class="font-nunito text-gray-600">
Diseños que se adaptan a cualquier dispositivo para una
                experiencia óptima en computadora, tablet o celular.
</p> <div class="h-[.1px] mt-2 lg:mt-3 w-full bg-primary-purple-100"></div> </div> </li> </ul> </div> </div> </section>  <section class="py-12 lg:py-16 container mx-auto"> <h2 class="text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-14">
Estamos para asesorarte <span class="text-primary-purple-100">en todo el</span> <br> <span class="text-primary-purple-100">proceso</span> </h2> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="flex flex-col items-center text-center relative"> <div class="flex items-center w-full mb-4 px-4"> <img${addAttribute(proceso1, "src")} alt="Solicitar" class="h-10 w-10 mx-auto mb-2"> <span class="hidden md:block flex-1 h-[2px] bg-gray-200 ml-2"></span> </div> <h3 class="font-nunito font-bold text-lg 3xl:text-xl text-black mb-2">
Punto de partida
</h3> <p class="font-nunito text-gray-700 text-base">
Estamos listos para ayudarte a crear y gestionar todo lo que necesites
          para crear tu web
</p> </div> <div class="flex flex-col items-center text-center relative"> <div class="flex items-center w-full mb-4 px-4"> <img${addAttribute(proceso2, "src")} alt="Solicitar" class="h-10 w-10 mx-auto mb-2"> <span class="hidden md:block flex-1 h-[2px] bg-gray-200 ml-2"></span> </div> <h3 class="font-nunito font-bold text-lg 3xl:text-xl text-black mb-2">
Feedback y modificaciones
</h3> <p class="font-nunito text-gray-700 text-base">
Constantemente te mostramos el avance para que puedas corroborar que
          el proyecto va según lo planeado y tus requerimientos.
</p> </div> <div class="flex flex-col items-center text-center relative"> <div class="flex items-center w-full mb-4 px-4"> <img${addAttribute(proceso3, "src")} alt="Solicitar" class="h-10 w-10 mx-auto mb-2"> <span class="hidden md:block flex-1 h-[2px] bg-gray-200 ml-2"></span> </div> <h3 class="font-nunito font-bold text-lg 3xl:text-xl text-black mb-2">
Pasos finales
</h3> <p class="font-nunito text-gray-700 text-base">
Una vez lista la web, te pasamos un link en línea para que puedas
          testear tu web antes de ser lanzada al público y así todo quede 100%
          listo.
</p> </div> <div class="flex flex-col items-center text-center relative"> <div class="flex items-center w-full mb-4 px-4"> <img${addAttribute(proceso4, "src")} alt="Solicitar" class="h-10 w-10 mx-auto mb-2"> <span class="hidden md:block flex-1 h-[2px] bg-gray-200 ml-2"></span> </div> <h3 class="font-nunito font-bold text-lg 3xl:text-xl text-black mb-2">
Lanzamiento y publicación
</h3> <p class="font-nunito text-gray-700 text-base">
¡Tu web ya esta en línea!. Ya finalizado el trabajo nosotros nos
          encargamos de monitorear tu web y verificar que este todo 100%
          operativo siempre para tus usuarios.
</p> </div> </div> </section>  <section class="py-12 lg:pb-20 lg:pt-16 container mx-auto"> <h2 class="text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-12 lg:mb-16">
¿Cuál de nuestras soluciones va mejor con <span class="text-primary-purple-100">tu negocio?</span> </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Card 1 --> <div class="relative"> <div class="absolute inset-0 z-0 rounded-lg bg-gradient-to-br from-primary-purple-100/40 to-primary-purple-100/10 backdrop-blur-md blur-sm"></div> <div class="h-full border border-primary-purple-100
          relative z-10 bg-white shadow-md rounded-lg p-6 text-center"> <div class="md:min-h-[380px] lg:min-h-[310px] xl:min-h-[270px]"> <img${addAttribute(Soluciones1, "src")} alt="Landing Page" class="h-[6rem] mx-auto mb-4"> <h3 class="font-nunito text-xl font-bold text-black mb-2">
Landing Page
</h3> <p class="font-nunito text-gray-600 mb-4">
Página enfocada a la promoción de un objetivo, ya sea desde
              completar un formulario, descargar contenido o lo que necesites
              para tu proyecto o negocio.
</p> </div> <!-- // ahora con el mensaje a 51923416407 "Hola! Estoy interesado en cotizar una landing page para mi negocio 🚀. Podrían brindarme más información por favor" --> <a href="https://api.whatsapp.com/send?phone=51923416407&text=Hola!%20Estoy%20interesado%20en%20cotizar%20una%20landing%20page%20para%20mi%20negocio%20🚀.%20Podrían%20brindarme%20más%20información por favor." target="_blank"> <button class="bg-primary-purple-100 text-white font-bold py-2 px-4 rounded-2xl hover:cursor-pointer">Cotizar
</button> </a> </div> </div> <!-- Card 2 --> <div class="relative"> <div class="absolute inset-0 z-0 rounded-lg bg-gradient-to-br from-primary-purple-100/40 to-primary-purple-100/10 backdrop-blur-md blur-sm"></div> <div class="h-full border border-primary-purple-100
          relative z-10 bg-white shadow-md rounded-lg p-6 text-center"> <div class="md:min-h-[380px] lg:min-h-[310px] xl:min-h-[270px]"> <img${addAttribute(Soluciones2, "src")} alt="Tienda Virtual" class="h-[6rem] mx-auto mb-4"> <h3 class="font-nunito text-xl font-bold text-black mb-2">
Tienda virtual
</h3> <p class="font-nunito text-gray-600 mb-4">
Ponte en contacto con tus clientes potenciales y genera más ventas
              con una web que te permita ofrecer tus productos en todo momento.
</p> </div> <!-- // ahora con el mensaje a 51923416407 "¡Hola! Quiero una tienda virtual 🛒 para vender mis productos. Podrían brindarme más información por favor." --> <a href="https://api.whatsapp.com/send?phone=51923416407&text=¡Hola!%20Quiero%20una%20tienda%20virtual%20🛒%20para%20vender%20mis%20productos.%20Podrían%20brindarme%20más%20información por favor." target="_blank"> <button class="bg-primary-purple-100 text-white font-bold py-2 px-4 rounded-2xl hover:cursor-pointer">Cotizar
</button> </a> </div> </div> <!-- Card 3 --> <div class="relative"> <div class="absolute inset-0 z-0 rounded-lg bg-gradient-to-br from-primary-purple-100/40 to-primary-purple-100/10 backdrop-blur-md blur-sm"></div> <div class="h-full border border-primary-purple-100
           relative z-10 bg-white shadow-md rounded-lg p-6 text-center"> <div class="md:min-h-[380px] lg:min-h-[310px] xl:min-h-[270px]"> <img${addAttribute(Soluciones3, "src")} alt="Catálogo Digital" class="h-[6rem] mx-auto mb-4"> <h3 class="font-nunito text-xl font-bold text-black mb-2">
Catálogo digital
</h3> <p class="font-nunito text-gray-600 mb-4">
Si eres de los que prefiere más las ventas por redes y estás
              buscando promocionar una cantidad mínima de productos en pocos
              pasos. ¡Te ofrecemos una solución práctica y muy eficiente!
</p> </div> <!-- // ahora con el mensaje a 51923416407 "¡Hola!, me interesa un catálogo digital 📘 para mostrar mis productos o servicios. Podrían brindarme más información por favor." --> <a href="https://api.whatsapp.com/send?phone=51923416407&text=¡Hola!,%20me%20interesa%20un%20catálogo%20digital%20📘%20para%20mostrar%20mis%20productos%20o%20servicios.%20Podrían%20brindarme%20más%20información por favor." target="_blank"> <button class="bg-primary-purple-100 text-white font-bold py-2 px-4 rounded-2xl hover:cursor-pointer">Cotizar</button> </a> </div> </div> </div> </section> ${renderComponent($$result2, "SolicitarCTABannerSection", SolicitarCTABannerSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/SolicitarCTABannerSection", "client:component-export": "default" })} ${renderComponent($$result2, "DescargarBrochureSection", DescargarBrochureSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/DescargarBrochureSection", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/pages/index.astro", void 0);

const $$file = "C:/Users/ivanh/Downloads/9_Trabajo_Empresas/KTALWEB/softwebsite-ktalweb-frontend-prod001/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
