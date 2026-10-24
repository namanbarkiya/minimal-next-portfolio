import { dictionary } from "@/config/dictionary";
import { useLang } from "@/providers/lang-provider";

export type TranslationValues = Record<string, string | number>;

// Keys are the original English texts, so a missing translation falls back to
// the English text. `{name}` placeholders are filled from `values`.
export function useTranslation() {
  const { lang } = useLang();

  return (text: string, values?: TranslationValues) => {
    let result = dictionary[text]?.[lang] ?? text;
    if (values) {
      Object.keys(values).forEach((name) => {
        result = result.split(`{${name}}`).join(String(values[name]));
      });
    }
    return result;
  };
}
