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
    mobile: {
      highlight: "Revolutionizing",
      lines: ["", "development", "with purpose."],
      description:
        "Disruptive digital solutions for companies, governments and startups, driving national and global progress through cutting-edge technology.",
      primary: { label: "Explore our solutions", href: "#solucoes" },
      secondary: { label: "Get in touch", href: "#contactos" },
    },
    web: {
      highlight: "Web platforms",
      lines: ["", "fast, secure", "and scalable."],
      description:
        "Tailor-made portals, online stores and management systems with world-class performance and a focus on your business.",
      primary: { label: "See web solutions", href: "#solucoes" },
      secondary: { label: "Talk to an expert", href: "#contactos" },
    },
    data: {
      highlight: "Data",
      lines: [" that becomes", "smart", "decisions."],
      description:
        "Dashboards, Business Intelligence and artificial intelligence that turn information into real results.",
      primary: { label: "Discover data & AI", href: "#inovacao" },
      secondary: { label: "Request a demo", href: "#contactos" },
    },
    design: {
      highlight: "Digital",
      lines: [" experiences", "people", "love."],
      description:
        "People-centred UX/UI design, from user research to a final product ready to grow.",
      primary: { label: "See our design", href: "#solucoes" },
      secondary: { label: "Start a project", href: "#contactos" },
    },
    team: {
      highlight: "Angolan",
      lines: [" talent,", "global", "impact."],
      description:
        "Engineers, designers and consultants dedicated to making your project happen, with rigour and passion.",
      primary: { label: "Meet the team", href: "#sobre" },
      secondary: { label: "Work with us", href: "#carreiras" },
    },
  },

  heroControls: { previous: "Previous banner", next: "Next banner", goTo: "Go to banner" },

  screens: {
    web: ["Corporate portals", "Online stores", "Management systems", "Learning platforms", "Custom web apps"],
    data: ["Data analytics", "Business Intelligence", "Data-driven teams", "Real-time reports", "Smart decisions"],
    design: ["User research", "Intuitive interfaces", "Mobile experience", "Usability testing", "Customer-centred design"],
    team: ["Engineering", "Design", "Data & AI", "Cloud", "Project management"],
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
    hero: "Featured banners",
    scenes: {
      mobile: "Radical dev app on a 3D phone",
      web: "Professional with a 3D laptop showing web platforms",
      data: "3D monitor with data projects",
      design: "3D tablet with design projects",
      team: "3D carousel with the Radical dev team",
    },
    slides: "Highlights",
    slide: "Slide",
    of: "of",
  },
};
