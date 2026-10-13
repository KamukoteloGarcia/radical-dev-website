import type { ServicesContent } from "./pt";

export const servicesEn: ServicesContent = {
  meta: {
    title: "Services",
    description:
      "Web and mobile development, data and AI, UX/UI design, cloud and cybersecurity for institutions, companies, individuals and NGOs.",
  },

  eyebrow: "Our services",
  title: "Tailor-made technology to help your business",
  highlight: "grow.",
  text: "From the first sketch to the system in production, we take care of everything: strategy, design, development, infrastructure and ongoing support.",
  cta: { label: "See services", href: "#o-que-fazemos" },
  chapters: {
    web: "Development",
    mobile: "Mobile apps",
    cloud: "Infrastructure & Cloud",
  },
  controls: { chapters: "Video scenes", goTo: "Show scene" },

  offer: {
    title: "What we do",
    subtitle: "Six specialities, one team. Pick what you need or let us design the complete solution.",
    more: "Request a quote",
    items: [
      { icon: "web", title: "Web Development", text: "Fast, secure and easy-to-use portals, platforms and management systems." },
      { icon: "mobile", title: "Mobile Apps", text: "Android and iOS apps your customers will want to use every day." },
      { icon: "data", title: "Data & AI", text: "Dashboards, Business Intelligence and artificial intelligence for better decisions." },
      { icon: "design", title: "UX/UI Design", text: "Beautiful, intuitive interfaces designed around people's real needs." },
      { icon: "cloud", title: "Cloud & DevOps", text: "Scalable infrastructure, automated deploys and always-available systems." },
      { icon: "security", title: "Cybersecurity", text: "Audits, data protection and best practices to keep your business safe." },
    ],
  },

  process: {
    title: "How we work",
    subtitle: "A clear process, with frequent deliveries and the client involved at every step.",
    steps: [
      { title: "Discovery", text: "We listen to your challenge, analyse the business and set goals and priorities.", duration: "1 to 2 weeks" },
      { title: "Design & prototype", text: "We design the experience and validate an interactive prototype with you.", duration: "2 to 3 weeks" },
      { title: "Development", text: "We build in phases, with working versions every two weeks.", duration: "In sprints" },
      { title: "Launch & support", text: "We go live, train your team and keep improving the solution.", duration: "Ongoing" },
    ],
  },

  segments: {
    title: "Solutions for every segment",
    subtitle: "Choose your profile and see how we can help.",
    tabsLabel: "Client segments",
    cta: "Request a quote",
    items: [
      {
        id: "institutional",
        tab: "Institutional",
        title: "Modernising the State and public institutions",
        text: "Mission-critical systems that bring the State closer to citizens, with security, transparency and digital sovereignty.",
        services: ["Digital portals and one-stop shops", "e-Gov and document management systems", "Integration across institutions", "Cybersecurity and data protection"],
        imageAlt: "Professional in a suit working on a laptop",
      },
      {
        id: "private",
        tab: "Private",
        title: "Technology that helps companies sell more",
        text: "From online stores to ERP, we build tools that automate processes and give managers data to decide.",
        services: ["Online stores and payments", "Management systems (ERP/CRM)", "Apps for customers and teams", "Dashboards and Business Intelligence"],
        imageAlt: "Two businessmen looking at a phone in the street",
      },
      {
        id: "individuals",
        tab: "Individuals",
        title: "Your digital presence, from zero to live",
        text: "For professionals, creatives and small businesses who want to grow online with a professional image.",
        services: ["Personal website or portfolio", "Small online store", "Visual identity and social media", "Domain, email and hosting"],
        imageAlt: "Smiling woman working from home",
      },
      {
        id: "ngos",
        tab: "NGOs",
        title: "Technology for social impact",
        text: "Tools that help organisations manage projects, report to donors and reach more people.",
        services: ["Project and beneficiary management", "Donation platforms", "Impact reports", "Digital training for teams"],
        imageAlt: "Group of smiling children in a community",
      },
    ],
  },

  partners: {
    title: "Partners who trust our services",
    subtitle: "Institutions, companies and organisations that have already transformed their business with us.",
    stats: [
      { value: "+120", label: "Projects delivered" },
      { value: "98%", label: "Satisfied clients" },
      { value: "24/7", label: "Support and monitoring" },
      { value: "+40", label: "Partner institutions" },
    ],
  },
};
