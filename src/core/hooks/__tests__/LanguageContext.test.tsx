import React from "react";
import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import { translations } from "@/core/data/translations";

vi.mock("@/core/helpers/analytics", () => ({
  trackEvent: vi.fn(),
}));

import { trackEvent } from "@/core/helpers/analytics";

describe("LanguageContext", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "es";
    document.title = "initial";
    window.history.replaceState({}, "", "/");
    vi.clearAllMocks();
  });

  const wrapper =
    (initialLang: "es" | "en" = "es") =>
    ({ children }: { children: React.ReactNode }) => (
      <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
    );

  it("starts with the provided initial language and matching copy", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: wrapper("es") });
    expect(result.current.lang).toBe("es");
    expect(result.current.t.cases.title).toBe(translations.es.cases.title);
  });

  it("toggles language, persists it, updates document and fires analytics", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: wrapper("es") });

    act(() => {
      result.current.toggleLang();
    });

    expect(result.current.lang).toBe("en");
    expect(localStorage.getItem("ktalweb_lang")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
    expect(document.title).toBe(translations.en.seo.title);
    expect(window.location.pathname).toBe("/en/");
    expect(result.current.t.nav.cta).toBe(translations.en.nav.cta);
    expect(trackEvent).toHaveBeenCalledWith("language_switch", { language_selected: "en" });

    act(() => {
      result.current.setLang("es");
    });

    expect(result.current.lang).toBe("es");
    expect(localStorage.getItem("ktalweb_lang")).toBe("es");
    expect(document.documentElement.lang).toBe("es-PE");
    expect(window.location.pathname).toBe("/");
  });

  it("throws when useLanguage is used outside the provider", () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      "useLanguage must be used within a LanguageProvider"
    );
  });
});
