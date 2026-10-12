// Visitor preferences stored in cookies (read on the server).
export const languages = ["pt", "en"] as const;
export type Language = (typeof languages)[number];

// Transition type tagged on language switches, so only they animate the page.
export const languageTransition = "language";

export const themes =["dark", "light"] as const;
export type Theme = (typeof themes)[number];

export const cookieNames = {
  language: "lang",
  theme: "theme",
} as const;

export const defaults: { language: Language; theme: Theme } = {
  language: "pt",
  theme: "dark",
};
