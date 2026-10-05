import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations } from "@/core/data/translations";
import { trackEvent } from "@/core/helpers/analytics";

export type Language = "es" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (typeof translations)["es"];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "ktalweb_lang";

function htmlLang(lang: Language) {
  return lang === "en" ? "en" : "es-PE";
}

function pathFor(lang: Language) {
  return lang === "en" ? "/en/" : "/";
}

export function LanguageProvider({
  children,
  initialLang = "es",
}: {
  children: ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window === "undefined") return;

    localStorage.setItem(STORAGE_KEY, newLang);
    document.documentElement.lang = htmlLang(newLang);
    document.title = translations[newLang].seo.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", translations[newLang].seo.description);

    const target = pathFor(newLang);
    if (window.location.pathname !== target) {
      window.history.replaceState({}, "", target);
    }

    trackEvent("language_switch", { language_selected: newLang });
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
    document.title = translations[lang].seo.title;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
