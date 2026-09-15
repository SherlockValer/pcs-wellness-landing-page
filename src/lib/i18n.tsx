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
// Region-default cookie set by the server (see src/start.ts).
const REGION_COOKIE = "pcwc-default-lang";

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

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";
  // 1. The user's own saved choice always wins.
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "hi" || stored === "mr") return stored;
  // 2. Region-based default (set by the server from the visitor's country).
  const region = readCookie(REGION_COOKIE);
  if (region === "en" || region === "hi" || region === "mr") return region;
  // 3. Fall back to the browser/device language.
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
