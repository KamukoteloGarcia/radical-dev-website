import type { CareersContent } from "./pt";

export const careersEn: CareersContent = {
  meta: {
    title: "Careers",
    description:
      "Work at Radical dev: openings in technology, marketing and human resources in a team transforming Angola with technology.",
  },

  eyebrow: "Careers at Radical dev",
  title: "Build your career",
  highlight: "with us.",
  text: "We are looking for curious people who love technology. Here you learn, grow and see your work transform Angola.",
  cta: { label: "See openings", href: "#vagas" },
  chapters: {
    interview: "Application & Interview",
    team: "Team culture",
    growth: "Growth",
  },
  controls: { chapters: "Video scenes", goTo: "Show scene" },

  featured: {
    badge: "Featured job",
    title: "Front-end Developer",
    text: "We are looking for a talent passionate about building exceptional interfaces. You will work with React, Next.js and Tailwind CSS, focused on high-performance UI/UX for users in Angola and around the world.",
    tags: ["React", "Next.js", "UI/UX"],
    cta: { label: "Apply now", href: "/contactos" },
    imageAlt: "A developer's hands writing code on a laptop",
  },

  openings: {
    title: "Open positions",
    all: { label: "See all", href: "#vagas" },
    details: "View details",
    count: { one: "{n} opening available", other: "{n} openings available" },
    items: [
      { id: "hr", title: "Human Resources", count: 1, href: "/contactos" },
      { id: "tech", title: "Information Technology", count: 4, href: "/contactos" },
      { id: "marketing", title: "Marketing & Advertising", count: 1, href: "/contactos" },
    ],
  },
};
