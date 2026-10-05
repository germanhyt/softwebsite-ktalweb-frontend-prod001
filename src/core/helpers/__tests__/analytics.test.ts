import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  trackClick,
  trackEvent,
  trackFileDownload,
  trackFormSubmit,
  trackOutboundLink,
  trackScrollDepth,
  trackSectionView,
  trackWhatsApp,
} from "../analytics";

describe("analytics helpers", () => {
  beforeEach(() => {
    window.dataLayer = [];
    window.gtag = vi.fn();
  });

  it("pushes a named event to dataLayer and gtag", () => {
    trackEvent("language_switch", { language_selected: "en" });

    expect(window.dataLayer).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          event: "language_switch",
          domain: "ktalweb.com.pe",
          language_selected: "en",
        }),
      ])
    );
    expect(window.gtag).toHaveBeenCalledWith("event", "language_switch", {
      language_selected: "en",
    });
  });

  it("tracks click interactions", () => {
    trackClick("nav_link", { link_url: "#proyectos" });
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "click",
      expect.objectContaining({ element_name: "nav_link", link_url: "#proyectos" })
    );
  });

  it("tracks outbound links as click events", () => {
    trackOutboundLink("https://example.com", "case_zukarzen", { location: "casos" });
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "click",
      expect.objectContaining({
        link_url: "https://example.com",
        link_label: "case_zukarzen",
        outbound: true,
      })
    );
  });

  it("tracks form submit as generate_lead and form_submission", () => {
    trackFormSubmit("contacto_home", { location: "contacto" });
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "generate_lead",
      expect.objectContaining({ form_name: "contacto_home", method: "form" })
    );
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "form_submission",
      expect.objectContaining({ form_name: "contacto_home" })
    );
  });

  it("tracks WhatsApp contact leads", () => {
    trackWhatsApp("hero");
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "generate_lead",
      expect.objectContaining({ method: "whatsapp", location: "hero" })
    );
    expect(window.gtag).toHaveBeenCalledWith("event", "contact_whatsapp", { location: "hero" });
  });

  it("tracks section views and scroll depth", () => {
    trackSectionView("proyectos");
    trackScrollDepth(50);
    expect(window.gtag).toHaveBeenCalledWith("event", "section_view", { section_id: "proyectos" });
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "scroll_depth_reached",
      expect.objectContaining({ percent_scrolled: 50 })
    );
  });

  it("tracks brochure downloads", () => {
    trackFileDownload("brochure_ktalweb.pdf", "footer");
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "file_download",
      expect.objectContaining({
        file_name: "brochure_ktalweb.pdf",
        file_extension: "pdf",
        location: "footer",
      })
    );
  });
});
