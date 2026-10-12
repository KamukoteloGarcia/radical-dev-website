import type { Content } from "./pt";

export const en: Content = {
  segments: ["Institutional", "Private", "Individuals", "NGOs"],

  links: [
    { label: "Home", href: "#inicio" },
    { label: "Solutions", href: "#solucoes" },
    { label: "Innovation", href: "#inovacao" },
    { label: "Ecosystem", href: "#ecossistema" },
    { label: "Careers", href: "#carreiras" },
    { label: "Contact", href: "#contactos" },
    { label: "About Us", href: "#sobre" },
  ],

  hero: {
    highlight: "Revolutionizing",
    lines: ["", "development", "with purpose."],
    description:
      "Disruptive digital solutions for companies, governments and startups, driving national and global progress through cutting-edge technology.",
    primary: { label: "Explore our solutions", href: "#solucoes" },
    secondary: { label: "Get in touch", href: "#contactos" },
  },

  slides: [
    { id: "solutions", title: "Digital solutions", text: "Tailor-made software for companies and governments." },
    { id: "ai", title: "Innovation & AI", text: "Data and AI working for your business." },
    { id: "careers", title: "Careers", text: "Join the team building the future." },
    { id: "ecosystem", title: "Ecosystem", text: "Startups and partners growing together." },
    { id: "academy", title: "Radical Academy", text: "Training and mentoring for new talent." },
  ],

  app: {
    welcome: "Welcome to",
    team: "Our team",
    seeAll: "See all",
    learnMore: "Learn more",
    projects: "Active project",
    project: { name: "Citizen Portal", progress: 82 },
  },

  stats: { title: "Performance", deliveries: "Deliveries", clients: "Clients" },

  a11y: {
    home: "Radical dev — home page",
    main: "Main",
    segments: "Segments",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    scene: "Radical dev app on a 3D phone",
    slides: "Highlights",
    slide: "Slide",
    of: "of",
  },
};
