import { CONTACT_EMAIL, SITE_URL, WHATSAPP_PHONE_E164 } from "./src/core/site-contact";
import { translations } from "./src/core/data/translations";

export type SeoLocale = "es" | "en";

export type SeoConfig = {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogType: string;
  ogImage: string;
  ogUrl: string;
  ogLocale: string;
  ogLocaleAlternate: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  twitterImage: string;
  canonicalUrl: string;
  robots: string;
  locale: SeoLocale;
  htmlLang: string;
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  icbm: string;
};

const OG_IMAGE = `${SITE_URL}/ktalweb.webp`;

const keywordsEs = [
  "Ktalweb",
  "estudio digital Lima",
  "agencia digital Lima",
  "diseño UX UI Lima",
  "desarrollo web Lima",
  "desarrollo de software Lima",
  "inteligencia artificial Lima",
  "diseño web Perú",
  "software a medida Lima",
  "consultoría UX Lima",
];

const keywordsEn = [
  "Ktalweb",
  "digital studio Lima",
  "UX UI agency Lima",
  "web development Lima Peru",
  "custom software Lima",
  "artificial intelligence Lima",
  "digital product studio Peru",
];

export function buildSEO(locale: SeoLocale = "es"): SeoConfig {
  const t = translations[locale];
  const isEn = locale === "en";
  return {
    title: t.seo.title,
    description: t.seo.description,
    keywords: isEn ? keywordsEn : keywordsEs,
    author: "Ktalweb",
    ogType: "website",
    ogImage: OG_IMAGE,
    ogUrl: isEn ? `${SITE_URL}/en/` : `${SITE_URL}/`,
    ogLocale: isEn ? "en_US" : "es_PE",
    ogLocaleAlternate: isEn ? "es_PE" : "en_US",
    twitterCard: "summary_large_image",
    twitterSite: "@ktalweb",
    twitterCreator: "@ktalweb",
    twitterImage: OG_IMAGE,
    canonicalUrl: isEn ? `${SITE_URL}/en/` : `${SITE_URL}/`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    locale,
    htmlLang: isEn ? "en" : "es-PE",
    geoRegion: "PE-LIM",
    geoPlacename: "Lima, Perú",
    geoPosition: "-12.0464;-77.0428",
    icbm: "-12.0464, -77.0428",
  };
}

export const defaultSEO = buildSEO("es");
export const englishSEO = buildSEO("en");

export function buildJsonLd(locale: SeoLocale = "es") {
  const seo = buildSEO(locale);
  const isEn = locale === "en";

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Ktalweb",
    alternateName: ["Ktalweb Perú", "Ktalweb Lima"],
    url: SITE_URL,
    logo: OG_IMAGE,
    email: CONTACT_EMAIL,
    telephone: `+${WHATSAPP_PHONE_E164}`,
    sameAs: [
      "https://www.instagram.com/ktalweb.pe",
      "https://www.tiktok.com/@ktalweb.pe",
      "https://www.facebook.com/profile.php?id=61574115239227",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
  };

  const localBusiness = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Ktalweb",
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: `+${WHATSAPP_PHONE_E164}`,
    email: CONTACT_EMAIL,
    priceRange: "$$",
    description: seo.description,
    areaServed: [
      { "@type": "City", name: "Lima" },
      { "@type": "Country", name: "Perú" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.0464,
      longitude: -77.0428,
    },
    knowsLanguage: ["es", "en"],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEn ? "Digital services" : "Servicios digitales",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isEn ? "UX/UI consulting" : "Consultoría UX/UI" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isEn ? "Custom software" : "Desarrollo de software" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isEn ? "Web design + AI" : "Diseño web + IA" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: isEn ? "AI solutions" : "Soluciones con IA" } },
      ],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ktalweb",
    inLanguage: ["es-PE", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${seo.canonicalUrl}#webpage`,
    url: seo.canonicalUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: seo.htmlLang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, webpage],
  };
}
