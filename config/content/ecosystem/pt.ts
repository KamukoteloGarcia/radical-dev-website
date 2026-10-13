import type { EcosystemClipId, StartupId } from "@/config/ecosystem";

export type EcosystemPillarIcon = "startups" | "partners" | "academy" | "community";
export type AcademyFeatureIcon = "code" | "design" | "data" | "mentoring";

type Pillar = { icon: EcosystemPillarIcon; title: string; text: string };
type AcademyFeature = { icon: AcademyFeatureIcon; label: string };
type Startup = { id: StartupId; name: string; tag: string; href: string };

// "Ecossistema" page.
export const ecosystemPt = {
  meta: {
    title: "Ecossistema",
    description: "Startups, parceiros, a Academia Radical e uma comunidade que faz crescer a tecnologia angolana.",
  },

  eyebrow: "Ecossistema Radical",
  title: "Um ecossistema que faz Angola",
  highlight: "crescer.",
  text: "Juntamos startups, parceiros, jovens talentos e comunidades para transformar boas ideias em negócios e oportunidades reais.",
  cta: { label: "Junte-se a nós", href: "#impacto" },
  chapters: {
    startups: "Startups & criativos",
    partners: "Parceiros & sustentabilidade",
    community: "Comunidade",
  } satisfies Record<EcosystemClipId, string>,
  controls: { chapters: "Cenas do vídeo", goTo: "Ver cena" },

  pillars: {
    title: "O nosso ecossistema",
    subtitle: "Quatro pilares que ligam tecnologia, pessoas e negócios para criar impacto em Angola.",
    items: [
      {
        icon: "startups",
        title: "Startups",
        text: "Apoiamos empreendedores angolanos com tecnologia, mentoria e acesso ao mercado.",
      },
      {
        icon: "partners",
        title: "Parceiros",
        text: "Empresas, instituições e investidores que crescem connosco em projectos de impacto.",
      },
      {
        icon: "academy",
        title: "Academia Radical",
        text: "Formação prática em programação, design e dados para a próxima geração de talentos.",
      },
      {
        icon: "community",
        title: "Comunidade",
        text: "Eventos, hackathons e encontros que ligam quem faz tecnologia em todo o país.",
      },
    ] as Pillar[],
  },

  academy: {
    title: "Academia Radical",
    text: "Formamos jovens angolanos com aulas práticas, projectos reais e mentoria da nossa equipa. Os melhores formandos têm a oportunidade de entrar no nosso ecossistema de startups e na própria Radical dev.",
    features: [
      { icon: "code", label: "Programação web e mobile" },
      { icon: "design", label: "Design UX/UI" },
      { icon: "data", label: "Dados & Inteligência Artificial" },
      { icon: "mentoring", label: "Mentoria com profissionais" },
    ] as AcademyFeature[],
    cta: { label: "Inscrever-me", href: "/contactos" },
    stat: "+300",
    statLabel: "Jovens formados",
    imageAlt: "Estudantes angolanos concentrados a estudar numa sala de aula",
  },

  startups: {
    title: "Startups do ecossistema",
    subtitle: "Negócios angolanos que crescem com a nossa tecnologia.",
    more: { label: "Apresentar a minha startup", href: "/contactos" },
    view: "Ver startup",
    items: [
      { id: "agro", name: "AgroKwanza", tag: "Agritech", href: "/contactos" },
      { id: "health", name: "Saúde+ Angola", tag: "Healthtech", href: "/contactos" },
      { id: "market", name: "Kitanda Online", tag: "E-commerce", href: "/contactos" },
    ] as Startup[],
  },

  impact: {
    eyebrow: "Impacto",
    title: "Resultados que se medem",
    text: "Cada parceria, startup e formando torna o ecossistema mais forte. Venha fazer parte desta história.",
    stats: [
      { value: "+25", label: "Startups apoiadas" },
      { value: "+40", label: "Parceiros activos" },
      { value: "+300", label: "Jovens formados" },
      { value: "12", label: "Províncias alcançadas" },
    ],
    cta: { label: "Junte-se ao ecossistema", href: "/contactos" },
  },
};

export type EcosystemContent = typeof ecosystemPt;
