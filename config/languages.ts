// The first entry is the default language and the language the site content is
// written in. To swap the second language, change its code/label here and the
// matching key in config/dictionary.ts.
export const languages = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
] as const;

export type Lang = (typeof languages)[number]["code"];

export const defaultLang: Lang = languages[0].code;
