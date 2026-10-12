import type { BannerId } from "@/config/banners";

type Slide = { id: BannerId; title: string; text: string };

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
    highlight: "Revolucionando",
    lines: [" o", "desenvolvimento", "com propósito."],
    description:
      "Soluções digitais disruptivas para empresas, governos e startups, impulsionando o progresso nacional e global através de tecnologia de ponta.",
    primary: { label: "Explore nossas soluções", href: "#solucoes" },
    secondary: { label: "Entre em contato", href: "#contactos" },
  },

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
    scene: "Aplicação Radical dev num telemóvel em 3D",
    slides: "Destaques",
    slide: "Slide",
    of: "de",
  },
};

export type Content = typeof pt;
