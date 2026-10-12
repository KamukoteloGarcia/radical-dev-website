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

export type SectorId = "banking" | "energy" | "public" | "mining" | "other";
export type ReasonIcon = "shield" | "chart" | "globe";

type Sector = {
  id: SectorId;
  tab: string;
  title: string;
  text: string;
  points: string[];
  stat: string;
  statLabel: string;
};
type Reason = { icon: ReasonIcon; title: string; text: string };
type Quote = { text: string; author: string; role: string };

export const pt = {
  meta: {
    title: "Radical dev | Revolucionando o desenvolvimento com propósito",
    description:
      "Soluções digitais disruptivas para empresas, governos e startups, impulsionando o progresso nacional e global através de tecnologia de ponta.",
    locale: "pt_AO",
  },

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

  solutions: {
    title: "Soluções Corporativas Institucionais",
    subtitle:
      "Arquitectura de software desenhada para a complexidade e rigor das instituições públicas e organizações do terceiro sector.",
    featured: {
      title: "Institucional",
      text: "Parceiro estratégico para a Administração Pública, garantindo a modernização administrativa e a eficiência governativa através de sistemas de alta criticidade.",
      features: ["Websites Institucionais", "Apps Governamentais", "Sistemas e-Gov", "Cibersegurança"],
      cta: { label: "Pedir Orçamento", href: "#contactos" },
    },
    cards: [
      {
        title: "Instituições Governamentais",
        text: "Foco na modernização governamental e soberania digital, com plataformas seguras e interoperáveis.",
      },
      {
        title: "Instituições Não Governamentais",
        text: "Tecnologia para impacto social e ferramentas avançadas de gestão de projectos e doadores.",
      },
    ],
    more: "Saber mais",
  },

  sectors: {
    title: "Especialização Sectorial",
    explore: "Explorar",
    items: [
      {
        id: "banking",
        tab: "Banca e Finanças",
        title: "O seu site ou loja online, do zero ao ar",
        text: "Desenhamos e desenvolvemos o seu site pessoal, portfólio ou loja online, com uma apresentação profissional e fácil de gerir — sem que precise de escrever uma linha de código.",
        points: ["Conversa inicial para entender a sua ideia", "Design e desenvolvimento à sua medida", "Site publicado e pronto a partilhar"],
        stat: "+40",
        statLabel: "Instituições confiaram em nós",
      },
      {
        id: "energy",
        tab: "Energia e Petróleo",
        title: "Operações industriais ligadas e seguras",
        text: "Sistemas de monitorização, manutenção e segurança para operações onshore e offshore, com dados em tempo real para decidir mais depressa.",
        points: ["Monitorização de activos em tempo real", "Gestão de manutenção preventiva", "Relatórios de segurança e conformidade"],
        stat: "+15",
        statLabel: "Operações digitalizadas",
      },
      {
        id: "public",
        tab: "Administração Pública",
        title: "Serviços públicos digitais para o cidadão",
        text: "Portais, balcões únicos e sistemas de gestão documental que aproximam o Estado do cidadão, com transparência e segurança.",
        points: ["Balcão único digital", "Gestão documental e processos", "Integração entre ministérios"],
        stat: "+25",
        statLabel: "Entidades públicas servidas",
      },
      {
        id: "mining",
        tab: "Recursos Minerais",
        title: "Gestão mineira com dados de campo",
        text: "Aplicações para equipas no terreno, rastreabilidade da produção e relatórios ambientais, mesmo em zonas com pouca rede.",
        points: ["Recolha de dados no terreno, offline", "Rastreabilidade da produção", "Relatórios ambientais e de licenciamento"],
        stat: "+10",
        statLabel: "Projectos mineiros apoiados",
      },
      {
        id: "other",
        tab: "Outros",
        title: "Soluções à medida para o seu sector",
        text: "Saúde, educação, logística, comércio e muito mais: analisamos o seu desafio e construímos a solução certa com a nossa equipa.",
        points: ["Diagnóstico gratuito do projecto", "Equipa dedicada do início ao fim", "Suporte e evolução contínua"],
        stat: "+120",
        statLabel: "Projectos entregues",
      },
    ] as Sector[],
  },

  whyUs: {
    title: "Por que as instituições escolhem a Radical dev?",
    subtitle: "Mais do que tecnologia — somos um parceiro estratégico que entende Angola, os seus desafios e as suas ambições.",
    reasons: [
      { icon: "shield", title: "Soberania Digital", text: "Protecção robusta de dados críticos com infraestrutura nacional soberana." },
      { icon: "chart", title: "Eficiência Total", text: "Digitalização de processos complexos para acelerar serviços ao cidadão." },
      { icon: "globe", title: "Modernização e-Gov", text: "Transformação digital completa para máxima transparência institucional." },
    ] as Reason[],
    partners: "Instituições que confiam em nós",
    pausePartners: "Pausar carrossel de instituições",
    playPartners: "Retomar carrossel de instituições",
  },

  quotes: {
    label: "O que dizem sobre nós",
    items: [
      {
        text: "Na Radical dev, não encaramos a conformidade regulamentar como um mero dever burocrático, mas como o verdadeiro motor de solidez que credibiliza as soluções digitais que desenvolvemos para impulsionar o futuro de Angola.",
        author: "Conselho de Administração",
        role: "Radical dev • Direcção de Governança & Risco",
      },
      {
        text: "A plataforma desenvolvida pela Radical dev reduziu para metade o tempo de resposta aos nossos clientes. Uma parceria que transformou a nossa operação.",
        author: "Director de Sistemas de Informação",
        role: "Kwanza Bank • Transformação Digital",
      },
      {
        text: "Encontrámos uma equipa que entende Angola, os nossos desafios e as nossas ambições. O resultado superou todas as expectativas.",
        author: "Directora Executiva",
        role: "Lumen Saúde • Direcção Geral",
      },
      {
        text: "Com os dashboards da Radical dev passámos a decidir com dados em tempo real. Hoje a nossa logística é mais rápida e previsível.",
        author: "Director de Operações",
        role: "Atlas Logística • Operações",
      },
      {
        text: "A Academia Radical formou a nossa equipa com rigor e proximidade. Ganhámos autonomia e uma verdadeira cultura digital.",
        author: "Gestora de Recursos Humanos",
        role: "Mukanda Educação • Talento & Cultura",
      },
    ] as Quote[],
    goTo: "Ver citação",
    previous: "Citação anterior",
    next: "Citação seguinte",
  },

  footer: {
    cta: {
      eyebrow: "Pronto para começar?",
      title: "Vamos construir o futuro juntos.",
      text: "Conte-nos a sua ideia e transformamo-la numa solução digital de impacto.",
      button: { label: "Iniciar um projeto", href: "#contactos" },
    },
    about:
      "Tecnologia com propósito para empresas, governos e startups. Desenvolvemos soluções digitais que impulsionam Angola e o mundo.",
    columns: [
      {
        title: "Soluções",
        links: [
          { label: "Desenvolvimento web", href: "#solucoes" },
          { label: "Apps móveis", href: "#solucoes" },
          { label: "Dados & IA", href: "#inovacao" },
          { label: "Design UX/UI", href: "#solucoes" },
          { label: "Cloud & DevOps", href: "#solucoes" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre nós", href: "#sobre" },
          { label: "Inovação", href: "#inovacao" },
          { label: "Ecossistema", href: "#ecossistema" },
          { label: "Carreiras", href: "#carreiras" },
          { label: "Academia Radical", href: "#carreiras" },
        ],
      },
    ],
    contactTitle: "Contactos",
    hours: "Seg – Sex, 8h às 17h",
    followUs: "Siga-nos",
    rights: "Todos os direitos reservados.",
    legal: [
      { label: "Privacidade", href: "#privacidade" },
      { label: "Termos de uso", href: "#termos" },
      { label: "Cookies", href: "#cookies" },
    ],
    backToTop: "Voltar ao topo",
  },

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
