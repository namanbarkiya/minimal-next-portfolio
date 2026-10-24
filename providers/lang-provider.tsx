"use client";

import * as React from "react";

import { defaultLang, Lang, languages } from "@/config/languages";

const STORAGE_KEY = "lang";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = React.createContext<LangContextType>({
  lang: defaultLang,
  setLang: () => {},
});

const isLang = (value: string | null): value is Lang =>
  languages.some((language) => language.code === value);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>(defaultLang);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) {
        setLang(stored);
      }
    } catch {}
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang, mounted]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => React.useContext(LangContext);
