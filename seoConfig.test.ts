import { describe, expect, it } from "vitest";
import { buildJsonLd, buildSEO, defaultSEO, englishSEO } from "./seoConfig";
import { SITE_URL } from "./src/core/site-contact";

describe("seoConfig", () => {
  it("builds Spanish SEO with Lima GEO signals", () => {
    const seo = buildSEO("es");
    expect(seo).toMatchObject({
      locale: "es",
      htmlLang: "es-PE",
      ogLocale: "es_PE",
      geoRegion: "PE-LIM",
      geoPlacename: "Lima, Perú",
      canonicalUrl: `${SITE_URL}/`,
      robots: expect.stringContaining("index, follow"),
    });
    expect(seo.title.toLowerCase()).toContain("lima");
    expect(seo.description.toLowerCase()).toContain("lima");
    expect(seo.keywords.some((item) => item.toLowerCase().includes("lima"))).toBe(true);
    expect(seo.keywords.length).toBeLessThanOrEqual(12);
  });

  it("builds English SEO with alternate locale and /en/ canonical", () => {
    const seo = buildSEO("en");
    expect(seo.canonicalUrl).toBe(`${SITE_URL}/en/`);
    expect(seo.ogUrl).toBe(`${SITE_URL}/en/`);
    expect(seo.htmlLang).toBe("en");
    expect(seo.ogLocale).toBe("en_US");
    expect(seo.ogLocaleAlternate).toBe("es_PE");
    expect(englishSEO.title).toContain("Lima");
  });

  it("exposes default Spanish SEO for the homepage", () => {
    expect(defaultSEO.locale).toBe("es");
    expect(defaultSEO.canonicalUrl).toBe(`${SITE_URL}/`);
  });

  it("builds LocalBusiness JSON-LD for Lima indexing", () => {
    const jsonLd = buildJsonLd("es");
    const types = jsonLd["@graph"].map((node) => node["@type"]);
    expect(types).toEqual(
      expect.arrayContaining(["Organization", ["ProfessionalService", "LocalBusiness"], "WebSite", "WebPage"])
    );

    const localBusiness = jsonLd["@graph"].find(
      (node) => Array.isArray(node["@type"]) && node["@type"].includes("LocalBusiness")
    ) as Record<string, unknown>;

    expect(localBusiness).toMatchObject({
      address: {
        addressLocality: "Lima",
        addressCountry: "PE",
      },
      geo: {
        latitude: -12.0464,
        longitude: -77.0428,
      },
    });
  });
});
