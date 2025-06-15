import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaArrowUp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Logo = "/_astro/logo.C7sPZubz.webp";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState("/");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      setSelected(currentPath);
    }
  }, []);
  const navigate = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "min-h-[4rem] container mx-auto flex items-center justify-between py-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "text-2xl font-bold text-blue-600",
          "aria-label": "Ktalweb Home",
          onClick: (e) => {
            e.preventDefault();
            navigate("/");
          },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[9.5rem] sm:w-[11.5rem] lg:w-[12rem] cursor-pointer",
              src: Logo,
              alt: "Logo de Ktalweb"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxs(
        "nav",
        {
          className: "hidden md:flex items-center space-x-4 bg-tertiary-white-200 px-6 py-2 rounded-3xl",
          "aria-label": "Main Navigation",
          children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/",
                className: `text-gray-700 font-semibold ${selected === "/" ? "bg-white py-1 px-4 rounded-2xl" : ""}`,
                onClick: (e) => {
                  e.preventDefault();
                  navigate("/");
                },
                children: "Inicio"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/portfolio",
                className: `text-gray-700 font-semibold ${selected === "/portfolio" ? "bg-white py-1 px-4 rounded-2xl" : ""}`,
                onClick: (e) => {
                  e.preventDefault();
                  navigate("/portfolio");
                },
                children: "Casos de éxito"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "\r\n              flex md:hidden justify-between gap-2 items-center", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { rotate: 0, opacity: 1 },
          animate: { rotate: showMenu ? 90 : 0, opacity: 1 },
          children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "block md:hidden",
              onClick: () => setShowMenu(!showMenu),
              "aria-label": "Menu Button",
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "h-7 w-7",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: showMenu ? /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: "text-black",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  ) : /* @__PURE__ */ jsx(
                    "path",
                    {
                      className: "text-black",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16"
                    }
                  )
                }
              )
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://api.whatsapp.com/send?phone=51923416407&text=Hola%20Ktalweb,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios.",
          target: "_blank",
          className: "hidden md:flex  px-6 py-2 text-primary-purple-100 font-semibold rounded-full hover:bg-primary-purple-100 hover:text-white border border-primary-purple-100",
          "aria-label": "Contact Us",
          children: "Contáctanos"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { children: showMenu && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { clipPath: "circle(0% at 50% 0%)" },
        animate: { clipPath: "circle(150% at 50% 0%)" },
        exit: { clipPath: "circle(0% at 50% 0%)" },
        transition: { duration: 0.5 },
        className: "absolute top-16 h-screen left-0 w-full bg-white shadow-lg z-50",
        children: [
          /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-center py-4 mt-10", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/",
                className: `text-xl text-primary-purple-100 font-semibold mt-2 ${selected === "/" ? "bg-white py-1 px-4 rounded-2xl" : ""}`,
                onClick: (e) => {
                  e.preventDefault();
                  navigate("/");
                },
                children: "Inicio"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/portfolio",
                className: `text-xl text-primary-purple-100 font-semibold mt-2 ${selected === "/portfolio" ? "bg-white py-1 px-4 rounded-2xl" : ""}`,
                onClick: (e) => {
                  e.preventDefault();
                  navigate("/portfolio");
                },
                children: "Casos de éxito"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://api.whatsapp.com/send?phone=51923416407&text=Hola%20👋.%20Vi%20tu%20página%20web%20y%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios.%20¿Me%20podrían%20ayudar,%C2%A0por%C2%A0favor?",
              target: "_blank",
              className: "px-6 py-2 text-primary-purple-100 font-semibold rounded-full hover:bg-primary-purple-100 hover:text-white border border-primary-purple-100",
              "aria-label": "Contact Us",
              children: "Contáctanos"
            }
          ) })
        ]
      }
    ) })
  ] });
};

const DescargarBrochureSection = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "pt-12 lg:pt-16 pb-24 container mx-auto bg-white", children: [
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: "text-center font-nunito text-3xl md:text-4xl font-bold text-black mb-8",
        children: [
          "Descarga nuestro brochure y",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary-purple-100", children: "conoce más sobre" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-primary-purple-100", children: "nuestros servicios" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/Brochure_Ktalweb.pe.pdf",
        download: true,
        className: "flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white",
        children: [
          "Descargar brochure",
          /* @__PURE__ */ jsx(MdOutlineFileDownload, { className: "text-2xl" })
        ]
      }
    ) })
  ] }) });
};

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-white border-t border-primary-purple-100 pt-8 pb-4 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute right-1/12 -top-6 transform -translate-x-1/3 z-10", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "\r\n                    bg-primary-purple-100 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white \r\n                    hover:bg-primary-purple-200 transition\r\n                    hover:cursor-pointer\r\n                    ",
        "aria-label": "Volver arriba",
        children: /* @__PURE__ */ jsx(FaArrowUp, { className: "text-[1.5rem]" })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto grid grid-cols-2 sm:grid-cols-4 justify-between items-start gap-8 pb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: Logo,
            alt: "Logo Ktalweb",
            className: "w-32 h-auto mb-2"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-gray-600 mt-2 text-sm font-nunito", children: "Lima, Perú" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-black mb-1 font-nunito", children: "Explora" }),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1 text-sm", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "hover:underline text-black font-nunito", children: "Inicio" }),
          /* @__PURE__ */ jsx("a", { href: "/portfolio", className: "hover:underline text-black font-nunito", children: "Casos de éxito" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-black mb-1 font-nunito", children: "Contacto" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-black font-nunito break-all", children: /* @__PURE__ */ jsx("a", { href: "mailto:ktalweb.peru@gmail.com", className: "hover:underline", children: "ktalweb.peru@gmail.com" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex md:justify-center", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("div", { className: "font-bold text-black mb-1 font-nunito", children: "Síguenos" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-1", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/ktalweb.pe", "aria-label": "Instagram", className: "text-black hover:text-primary-purple-100 text-2xl", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/profile.php?id=61574115239227&sk=reels_tab", "aria-label": "Facebook", className: "text-black hover:text-primary-purple-100 text-2xl", children: /* @__PURE__ */ jsx(FaFacebookF, {}) }),
          /* @__PURE__ */ jsx("a", { href: "https://www.tiktok.com/@ktalweb.pe", "aria-label": "TikTok", className: "text-black hover:text-primary-purple-100 text-2xl", children: /* @__PURE__ */ jsx(FaTiktok, {}) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center text-black text-sm mt-2", children: [
      "Copyright © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Ktalweb Peru."
    ] })
  ] });
};

const logoOffroad = "/_astro/logo_offroadperu.BmGW2LB8.webp";

const logoLVEnergy = "/_astro/logo_lvenergy.O90wizNr.webp";

const logoZukarZen = "/_astro/logo_zukarzen.D-HTLJAc.webp";

export { DescargarBrochureSection as D, Footer as F, Header as H, logoLVEnergy as a, logoZukarZen as b, logoOffroad as l };
