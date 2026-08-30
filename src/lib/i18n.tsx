import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationKey } from "@/lib/translations";

type Translate = (key: TranslationKey | string) => string;

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translate;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "pcwc-lang";

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "mr", label: "मरा" },
];

function getNested(obj: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "hi" || stored === "mr") return stored;
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("hi")) return "hi";
  if (nav.startsWith("mr")) return "mr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (private mode etc.)
    }
  }, [lang]);

  const t: Translate = (key) => {
    const value = getNested(translations[lang], key);
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export { LANGUAGE_OPTIONS };
export type { Language };
