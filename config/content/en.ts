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

  solutions: {
    title: "Solutions that move your business",
    subtitle: "From the first sketch to operating at scale, we cover the whole digital cycle with a specialised team.",
    more: "Learn more",
    items: [
      { icon: "web", title: "Web development", text: "Fast, secure and scalable portals, online stores and management systems." },
      { icon: "mobile", title: "Mobile apps", text: "iOS and Android apps designed for Angolan users, online and offline." },
      { icon: "data", title: "Data & AI", text: "Business Intelligence, automation and artificial intelligence for better decisions." },
      { icon: "design", title: "UX/UI design", text: "Intuitive, accessible interfaces, from user research to the final prototype." },
      { icon: "cloud", title: "Cloud & DevOps", text: "Cloud infrastructure, continuous delivery and 24/7 high availability." },
      { icon: "security", title: "Cybersecurity", text: "Data protection, audits and compliance with national regulations." },
    ],
  },

  whyUs: {
    title: "Why do institutions choose Radical dev?",
    subtitle: "More than technology — we are a strategic partner that understands Angola, its challenges and its ambitions.",
    reasons: [
      { icon: "shield", title: "Digital Sovereignty", text: "Robust protection of critical data on sovereign national infrastructure." },
      { icon: "chart", title: "Total Efficiency", text: "Digitising complex processes to speed up services for citizens." },
      { icon: "globe", title: "e-Gov Modernisation", text: "End-to-end digital transformation for maximum institutional transparency." },
    ],
    partners: "Institutions that trust us",
    pausePartners: "Pause institutions carousel",
    playPartners: "Resume institutions carousel",
  },

  quotes: {
    label: "What people say about us",
    items: [
      {
        text: "At Radical dev, we don't see regulatory compliance as mere red tape, but as the real driver of soundness that gives credibility to the digital solutions we build to power Angola's future.",
        author: "Board of Directors",
        role: "Radical dev • Governance & Risk",
      },
      {
        text: "The platform built by Radical dev cut our customer response time in half. A partnership that transformed our operation.",
        author: "Head of Information Systems",
        role: "Kwanza Bank • Digital Transformation",
      },
      {
        text: "We found a team that understands Angola, our challenges and our ambitions. The result exceeded every expectation.",
        author: "Chief Executive",
        role: "Lumen Saúde • General Management",
      },
      {
        text: "With Radical dev's dashboards we now decide with real-time data. Our logistics are faster and more predictable.",
        author: "Head of Operations",
        role: "Atlas Logística • Operations",
      },
      {
        text: "Radical Academy trained our team with rigour and care. We gained autonomy and a true digital culture.",
        author: "HR Manager",
        role: "Mukanda Educação • Talent & Culture",
      },
    ],
    goTo: "Show quote",
    previous: "Previous quote",
    next: "Next quote",
  },

  footer: {
    cta: {
      eyebrow: "Ready to start?",
      title: "Let's build the future together.",
      text: "Tell us your idea and we'll turn it into a high-impact digital solution.",
      button: { label: "Start a project", href: "#contactos" },
    },
    about:
      "Technology with purpose for companies, governments and startups. We build digital solutions that move Angola and the world forward.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Web development", href: "#solucoes" },
          { label: "Mobile apps", href: "#solucoes" },
          { label: "Data & AI", href: "#inovacao" },
          { label: "UX/UI design", href: "#solucoes" },
          { label: "Cloud & DevOps", href: "#solucoes" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About us", href: "#sobre" },
          { label: "Innovation", href: "#inovacao" },
          { label: "Ecosystem", href: "#ecossistema" },
          { label: "Careers", href: "#carreiras" },
          { label: "Radical Academy", href: "#carreiras" },
        ],
      },
    ],
    contactTitle: "Contact",
    hours: "Mon – Fri, 8am to 5pm",
    followUs: "Follow us",
    rights: "All rights reserved.",
    legal: [
      { label: "Privacy", href: "#privacidade" },
      { label: "Terms of use", href: "#termos" },
      { label: "Cookies", href: "#cookies" },
    ],
    backToTop: "Back to top",
  },

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
