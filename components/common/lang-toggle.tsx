"use client";

import { languages } from "@/config/languages";
import { cn } from "@/lib/utils";
import { useLang } from "@/providers/lang-provider";

interface LangToggleProps {
  className?: string;
}

export function LangToggle({ className }: LangToggleProps) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "inline-flex h-8 items-center rounded-full border border-border bg-background/60 p-0.5 text-xs backdrop-blur",
        className
      )}
    >
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => setLang(language.code)}
          aria-pressed={lang === language.code}
          className={cn(
            "rounded-full px-2.5 py-1 font-medium transition-colors",
            lang === language.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}
