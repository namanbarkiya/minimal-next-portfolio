"use client";

import { TranslationValues, useTranslation } from "@/hooks/use-translation";

interface DictTextProps {
  text: string;
  values?: TranslationValues;
}

// Lets server components render translated text.
export default function DictText({ text, values }: DictTextProps) {
  const t = useTranslation();

  return <>{t(text, values)}</>;
}
