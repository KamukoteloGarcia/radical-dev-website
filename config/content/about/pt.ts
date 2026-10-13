import type { AboutClipId } from "@/config/about";

export type PillarIcon = "target" | "eye" | "gem";
type Pillar = { icon: PillarIcon; title: string; text: string };

// "Sobre nós" page.
export const aboutPt = {
  meta: {
    title: "Sobre nós",
    description:
      "Conheça a Radical dev: uma equipa angolana de engenheiros, designers e criativos que constrói tecnologia com propósito.",
  },

  eyebrow: "Sobre a Radical dev",
  title: "Tecnologia angolana com",
  highlight: "propósito.",
  text: "Somos engenheiros, designers e criativos de Luanda a construir soluções digitais para empresas, governos e comunidades, com orgulho nas nossas raízes.",
  cta: { label: "Fale connosco", href: "/contactos" },
  chapters: {
    vision: "A nossa visão",
    talent: "Talento angolano",
    roots: "Raízes & cultura",
  } satisfies Record<AboutClipId, string>,
  controls: { chapters: "Cenas do vídeo", goTo: "Ver cena" },

  intro: {
    title: "Conheça a Radical dev",
    subtitle: "Mensagem conjunta do Presidente do Conselho de Administração e do Presidente da Comissão Executiva",
    name: "Radical dev — Code & Create",
    text: "Fundada em 2016, em Luanda, a Radical dev nasceu com o propósito de impulsionar a transformação digital de empresas e organizações através da tecnologia, da inovação e da criatividade. Desde o início, assumimos o compromisso de desenvolver soluções tecnológicas modernas, capazes de responder aos desafios de um mercado em constante evolução. Ao longo dos anos, consolidámos a nossa experiência em desenvolvimento de software, criação de websites, aplicações móveis, infraestrutura tecnológica, cibersegurança e transformação digital.",
    cta: { label: "Saber mais", href: "#mensagem" },
    stat: "+40",
    statLabel: "Instituições confiaram em nós",
    imageAlt: "Corredor do escritório da Radical dev com portas de vidro",
  },

  pillars: [
    {
      icon: "target",
      title: "Missão",
      text: "Apoiar os nossos parceiros e clientes na sua jornada de transformação digital, promovendo a adopção de tecnologias inovadoras alinhadas com os seus desafios estratégicos.",
    },
    {
      icon: "eye",
      title: "Visão",
      text: "Ser uma referência no desenvolvimento de soluções tecnológicas que respondam de forma efectiva às necessidades dos nossos parceiros, com foco em inovação, eficiência e impacto.",
    },
    {
      icon: "gem",
      title: "Valores",
      text: "Inovação, Integridade, Excelência, Colaboração, Sustentabilidade e Foco no Cliente são os pilares que guiam as nossas decisões diárias.",
    },
  ] as Pillar[],

  message: {
    title: "Mensagem da liderança",
    excerpt:
      "Com uma visão estratégica e um compromisso inabalável com a inovação, nós, Presidente do Conselho de Administração e Presidente da Comissão Executiva, lideramos uma missão para posicionar a empresa como referência na transformação digital em Angola, com impacto reconhecido no panorama global. Num momento em que Angola consolida a sua trajectória de diversificação económica e se afirma como hub tecnológico em África, propomo-nos ser o motor de progresso, oferecendo soluções que capacitam empresas e comunidades",
    rest: "a crescer com confiança. Acreditamos no talento angolano, na formação contínua das nossas equipas e em parcerias duradouras, construídas com rigor, transparência e foco no cliente. O futuro digital de Angola constrói-se hoje, e queremos construí-lo consigo.",
    signature: "Presidente do Conselho de Administração & Presidente da Comissão Executiva",
    more: "Ler mais",
    less: "Ler menos",
  },

  team: {
    title: "A nossa equipa",
    text: "Na Radical dev, reunimos talentos apaixonados por inovação, tecnologia e excelência. A nossa equipa trabalha de forma colaborativa para desenvolver soluções inteligentes que impulsionam o crescimento dos nossos clientes e criam impacto real nos seus negócios.",
    cta: { label: "Ver detalhes", href: "/carreiras" },
    imageAlt: "Equipa da Radical dev reunida numa sala de reuniões",
  },
};

export type AboutContent = typeof aboutPt;
