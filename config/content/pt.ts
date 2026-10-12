import type { BannerId } from "@/config/banners";
import type { HeroSlideId } from "@/config/hero";
import type { ScreenId } from "@/config/photos";

type Slide = { id: BannerId; title: string; text: string };

type Link = { label: string; href: string };

export type HeroText = {
  highlight: string;
  lines: string[];
  description: string;
  primary: Link;
  secondary: Link;
};

export const pt = {
  segments: ["Institucional", "Privadas", "Particulares", "ONGs"],

  links: [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Inovação", href: "#inovacao" },
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Carreiras", href: "#carreiras" },
    { label: "Contactos", href: "#contactos" },
    { label: "Sobre Nós", href: "#sobre" },
  ],

  hero: {
    mobile: {
      highlight: "Revolucionando",
      lines: [" o", "desenvolvimento", "com propósito."],
      description:
        "Soluções digitais disruptivas para empresas, governos e startups, impulsionando o progresso nacional e global através de tecnologia de ponta.",
      primary: { label: "Explore nossas soluções", href: "#solucoes" },
      secondary: { label: "Entre em contato", href: "#contactos" },
    },
    web: {
      highlight: "Plataformas web",
      lines: ["", "rápidas, seguras", "e escaláveis."],
      description:
        "Portais, lojas online e sistemas de gestão à medida, com desempenho de nível mundial e foco no seu negócio.",
      primary: { label: "Ver soluções web", href: "#solucoes" },
      secondary: { label: "Fale com um especialista", href: "#contactos" },
    },
    data: {
      highlight: "Dados",
      lines: [" que viram", "decisões", "inteligentes."],
      description:
        "Dashboards, Business Intelligence e inteligência artificial para transformar informação em resultados reais.",
      primary: { label: "Conhecer dados & IA", href: "#inovacao" },
      secondary: { label: "Pedir uma demonstração", href: "#contactos" },
    },
    design: {
      highlight: "Experiências",
      lines: ["", "digitais que", "as pessoas amam."],
      description:
        "Design UX/UI centrado nas pessoas, da pesquisa com utilizadores ao produto final pronto a crescer.",
      primary: { label: "Ver o nosso design", href: "#solucoes" },
      secondary: { label: "Começar um projeto", href: "#contactos" },
    },
    team: {
      highlight: "Talento",
      lines: [" angolano,", "impacto", "global."],
      description:
        "Engenheiros, designers e consultores dedicados a fazer o seu projeto acontecer, com rigor e paixão.",
      primary: { label: "Conhecer a equipa", href: "#sobre" },
      secondary: { label: "Trabalhe connosco", href: "#carreiras" },
    },
  } satisfies Record<HeroSlideId, HeroText>,

  heroControls: { previous: "Banner anterior", next: "Banner seguinte", goTo: "Ir para o banner" },

  screens: {
    web: ["Portais corporativos", "Lojas online", "Sistemas de gestão", "Plataformas de ensino", "Apps web à medida"],
    data: ["Análise de dados", "Business Intelligence", "Equipas orientadas a dados", "Relatórios em tempo real", "Decisões inteligentes"],
    design: ["Pesquisa com utilizadores", "Interfaces intuitivas", "Experiência mobile", "Testes de usabilidade", "Design centrado no cliente"],
    team: ["Engenharia", "Design", "Dados & IA", "Cloud", "Gestão de projetos"],
  } satisfies Record<ScreenId, string[]>,

  slides: [
    { id: "solutions", title: "Soluções digitais", text: "Software à medida para empresas e governos." },
    { id: "ai", title: "Inovação & IA", text: "Dados e IA ao serviço do seu negócio." },
    { id: "careers", title: "Carreiras", text: "Junta-te à equipa que constrói o futuro." },
    { id: "ecosystem", title: "Ecossistema", text: "Startups e parceiros a crescer juntos." },
    { id: "academy", title: "Academia Radical", text: "Formação e mentoria para novos talentos." },
  ] as Slide[],

  app: {
    welcome: "Bem-vindo à",
    team: "A nossa equipa",
    seeAll: "Ver tudo",
    learnMore: "Saber mais",
    projects: "Projeto ativo",
    project: { name: "Portal do Cidadão", progress: 82 },
  },

  stats: { title: "Desempenho", deliveries: "Entregas", clients: "Clientes" },

  a11y: {
    home: "Radical dev — página inicial",
    main: "Principal",
    segments: "Segmentos",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    lightTheme: "Mudar para tema claro",
    darkTheme: "Mudar para tema escuro",
    hero: "Banners em destaque",
    scenes: {
      mobile: "Aplicação Radical dev num telemóvel em 3D",
      web: "Profissional com portátil 3D a mostrar plataformas web",
      data: "Monitor 3D com projetos de dados",
      design: "Tablet 3D com projetos de design",
      team: "Carrossel 3D com a equipa Radical dev",
    } satisfies Record<HeroSlideId, string>,
    slides: "Destaques",
    slide: "Slide",
    of: "de",
  },
};

export type Content = typeof pt;
