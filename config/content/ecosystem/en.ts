import type { EcosystemContent } from "./pt";

export const ecosystemEn: EcosystemContent = {
  meta: {
    title: "Ecosystem",
    description: "Startups, partners, Radical Academy and a community growing Angolan technology.",
  },

  eyebrow: "Radical Ecosystem",
  title: "An ecosystem that helps Angola",
  highlight: "grow.",
  text: "We bring together startups, partners, young talent and communities to turn good ideas into real businesses and opportunities.",
  cta: { label: "Join us", href: "#impacto" },
  chapters: {
    startups: "Startups & creatives",
    partners: "Partners & sustainability",
    community: "Community",
  },
  controls: { chapters: "Video scenes", goTo: "Show scene" },

  pillars: {
    title: "Our ecosystem",
    subtitle: "Four pillars connecting technology, people and business to create impact in Angola.",
    items: [
      { icon: "startups", title: "Startups", text: "We back Angolan entrepreneurs with technology, mentoring and market access." },
      { icon: "partners", title: "Partners", text: "Companies, institutions and investors growing with us on high-impact projects." },
      { icon: "academy", title: "Radical Academy", text: "Hands-on training in coding, design and data for the next generation of talent." },
      { icon: "community", title: "Community", text: "Events, hackathons and meetups connecting tech makers across the country." },
    ],
  },

  academy: {
    title: "Radical Academy",
    text: "We train young Angolans with hands-on classes, real projects and mentoring from our team. The best trainees get the chance to join our startup ecosystem and Radical dev itself.",
    features: [
      { icon: "code", label: "Web and mobile development" },
      { icon: "design", label: "UX/UI design" },
      { icon: "data", label: "Data & Artificial Intelligence" },
      { icon: "mentoring", label: "Mentoring by professionals" },
    ],
    cta: { label: "Enrol now", href: "/contactos" },
    stat: "+300",
    statLabel: "Young people trained",
    imageAlt: "Angolan students focused on their studies in a classroom",
  },

  startups: {
    title: "Ecosystem startups",
    subtitle: "Angolan businesses growing with our technology.",
    more: { label: "Pitch my startup", href: "/contactos" },
    view: "View startup",
    items: [
      { id: "agro", name: "AgroKwanza", tag: "Agritech", href: "/contactos" },
      { id: "health", name: "Saúde+ Angola", tag: "Healthtech", href: "/contactos" },
      { id: "market", name: "Kitanda Online", tag: "E-commerce", href: "/contactos" },
    ],
  },

  impact: {
    eyebrow: "Impact",
    title: "Results you can measure",
    text: "Every partnership, startup and trainee makes the ecosystem stronger. Come and be part of this story.",
    stats: [
      { value: "+25", label: "Startups supported" },
      { value: "+40", label: "Active partners" },
      { value: "+300", label: "Young people trained" },
      { value: "12", label: "Provinces reached" },
    ],
    cta: { label: "Join the ecosystem", href: "/contactos" },
  },
};
