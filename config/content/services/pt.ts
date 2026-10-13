import type { SegmentId, ServiceClipId } from "@/config/services";

export type ServiceIcon = "web" | "mobile" | "data" | "design" | "cloud" | "security";

type Service = { icon: ServiceIcon; title: string; text: string };
type Step = { title: string; text: string; duration: string };
type Segment = { id: SegmentId; tab: string; title: string; text: string; services: string[]; imageAlt: string };

// "Serviços" page.
export const servicesPt = {
  meta: {
    title: "Serviços",
    description:
      "Desenvolvimento web e mobile, dados e IA, design UX/UI, cloud e cibersegurança para instituições, empresas, particulares e ONGs.",
  },

  eyebrow: "Os nossos serviços",
  title: "Tecnologia à medida para fazer o seu negócio",
  highlight: "crescer.",
  text: "Do primeiro esboço ao sistema em produção, cuidamos de tudo: estratégia, design, desenvolvimento, infraestrutura e suporte contínuo.",
  cta: { label: "Ver serviços", href: "#o-que-fazemos" },
  chapters: {
    web: "Desenvolvimento",
    mobile: "Apps móveis",
    cloud: "Infraestrutura & Cloud",
  } satisfies Record<ServiceClipId, string>,
  controls: { chapters: "Cenas do vídeo", goTo: "Ver cena" },

  offer: {
    title: "O que fazemos",
    subtitle: "Seis especialidades, uma só equipa. Escolha o que precisa ou deixe-nos desenhar a solução completa.",
    more: "Pedir orçamento",
    items: [
      { icon: "web", title: "Desenvolvimento Web", text: "Portais, plataformas e sistemas de gestão rápidos, seguros e fáceis de usar." },
      { icon: "mobile", title: "Apps Móveis", text: "Aplicações Android e iOS que os seus clientes vão querer usar todos os dias." },
      { icon: "data", title: "Dados & IA", text: "Dashboards, Business Intelligence e inteligência artificial para decidir melhor." },
      { icon: "design", title: "Design UX/UI", text: "Interfaces bonitas e intuitivas, desenhadas a partir das necessidades reais das pessoas." },
      { icon: "cloud", title: "Cloud & DevOps", text: "Infraestrutura escalável, deploys automáticos e sistemas sempre disponíveis." },
      { icon: "security", title: "Cibersegurança", text: "Auditorias, protecção de dados e boas práticas para manter o seu negócio seguro." },
    ] as Service[],
  },

  process: {
    title: "Como trabalhamos",
    subtitle: "Um processo claro, com entregas frequentes e o cliente envolvido em cada passo.",
    steps: [
      { title: "Descoberta", text: "Ouvimos o seu desafio, analisamos o negócio e definimos objectivos e prioridades.", duration: "1 a 2 semanas" },
      { title: "Design & protótipo", text: "Desenhamos a experiência e validamos um protótipo interactivo consigo.", duration: "2 a 3 semanas" },
      { title: "Desenvolvimento", text: "Construímos por fases, com versões a funcionar a cada duas semanas.", duration: "Por sprints" },
      { title: "Lançamento & suporte", text: "Publicamos, formamos a sua equipa e acompanhamos a evolução da solução.", duration: "Contínuo" },
    ] as Step[],
  },

  segments: {
    title: "Soluções para cada segmento",
    subtitle: "Escolha o seu perfil e veja como podemos ajudar.",
    tabsLabel: "Segmentos de clientes",
    cta: "Pedir orçamento",
    items: [
      {
        id: "institutional",
        tab: "Institucional",
        title: "Modernização do Estado e das instituições públicas",
        text: "Sistemas de alta criticidade que aproximam o Estado do cidadão, com segurança, transparência e soberania digital.",
        services: ["Portais e balcões únicos digitais", "Sistemas e-Gov e gestão documental", "Integração entre instituições", "Cibersegurança e protecção de dados"],
        imageAlt: "Profissional de fato a trabalhar num portátil",
      },
      {
        id: "private",
        tab: "Privadas",
        title: "Tecnologia que faz as empresas vender mais",
        text: "Da loja online ao ERP, criamos ferramentas que automatizam processos e dão aos gestores dados para decidir.",
        services: ["Lojas online e pagamentos", "Sistemas de gestão (ERP/CRM)", "Apps para clientes e equipas", "Dashboards e Business Intelligence"],
        imageAlt: "Dois empresários a ver um telemóvel na rua",
      },
      {
        id: "individuals",
        tab: "Particulares",
        title: "A sua presença digital, do zero ao ar",
        text: "Para profissionais, criativos e pequenos negócios que querem crescer online com uma imagem profissional.",
        services: ["Site pessoal ou portfólio", "Pequena loja online", "Identidade visual e redes sociais", "Domínio, email e alojamento"],
        imageAlt: "Mulher sorridente a trabalhar em casa",
      },
      {
        id: "ngos",
        tab: "ONGs",
        title: "Tecnologia ao serviço do impacto social",
        text: "Ferramentas que ajudam as organizações a gerir projectos, prestar contas aos doadores e chegar a mais pessoas.",
        services: ["Gestão de projectos e beneficiários", "Plataformas de doações", "Relatórios de impacto", "Formação digital para equipas"],
        imageAlt: "Grupo de crianças sorridentes numa comunidade",
      },
    ] as Segment[],
  },

  partners: {
    title: "Parceiros que confiam nos nossos serviços",
    subtitle: "Instituições, empresas e organizações que já transformaram o seu negócio connosco.",
    stats: [
      { value: "+120", label: "Projectos entregues" },
      { value: "98%", label: "Clientes satisfeitos" },
      { value: "24/7", label: "Suporte e monitorização" },
      { value: "+40", label: "Instituições parceiras" },
    ],
  },
};

export type ServicesContent = typeof servicesPt;
