/**
 * Analítica de referencia para GA4 (G-44PWZC0X4P) y GTM (GTM-PF87C8RQ).
 * Domain: ktalweb.com.pe
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}): void {
  try {
    if (typeof window === "undefined") return;

    const payload = {
      event: eventName,
      domain: "ktalweb.com.pe",
      timestamp: new Date().toISOString(),
      ...eventParams,
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
  } catch (error) {
    console.warn("[Analytics] Error enviando evento:", error);
  }
}

export function trackClick(elementName: string, extraParams: Record<string, unknown> = {}): void {
  trackEvent("click", {
    element_name: elementName,
    ...extraParams,
  });
}

export function trackOutboundLink(url: string, label: string, extraParams: Record<string, unknown> = {}): void {
  trackEvent("click", {
    link_url: url,
    link_label: label,
    outbound: true,
    ...extraParams,
  });
}

export function trackFormSubmit(formName: string, details: Record<string, unknown> = {}): void {
  trackEvent("generate_lead", {
    form_name: formName,
    method: "form",
    ...details,
  });
  trackEvent("form_submission", {
    form_name: formName,
    ...details,
  });
}

export function trackWhatsApp(location: string): void {
  trackEvent("generate_lead", {
    method: "whatsapp",
    location,
  });
  trackEvent("contact_whatsapp", { location });
}

export function trackSectionView(sectionId: string): void {
  trackEvent("section_view", { section_id: sectionId });
}

export function trackScrollDepth(depthPercent: number): void {
  trackEvent("scroll_depth_reached", {
    percent_scrolled: depthPercent,
    scroll_depth_percent: depthPercent,
  });
}

export function trackFileDownload(fileName: string, location: string): void {
  trackEvent("file_download", {
    file_name: fileName,
    file_extension: "pdf",
    location,
  });
}
