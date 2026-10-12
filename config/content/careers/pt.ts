import type { CareerClipId, OpeningId } from "@/config/careers";

type Opening = { id: OpeningId; title: string; count: number; href: string };

// "Carreiras" page.
export const careersPt = {
  meta: {
    title: "Carreiras",
    description:
      "Trabalhe na Radical dev: vagas em tecnologia, marketing e recursos humanos numa equipa que transforma Angola com tecnologia.",
  },

  eyebrow: "Carreiras na Radical dev",
  title: "Construa a sua carreira",
  highlight: "connosco.",
  text: "Procuramos pessoas curiosas e apaixonadas por tecnologia. Aqui aprende, cresce e vê o seu trabalho transformar Angola.",
  cta: { label: "Ver vagas", href: "#vagas" },
  chapters: {
    interview: "Candidatura & Entrevista",
    team: "Cultura de equipa",
    growth: "Crescimento",
  } satisfies Record<CareerClipId, string>,
  controls: { chapters: "Cenas do vídeo", goTo: "Ver cena", pause: "Pausar vídeo", play: "Reproduzir vídeo" },

  featured: {
    badge: "Vaga em destaque",
    title: "Programador Front-end",
    text: "Procuramos um talento apaixonado por criar interfaces excepcionais. Vai trabalhar com React, Next.js e Tailwind CSS, focado em experiências UI/UX de alta performance para utilizadores em Angola e no mundo.",
    tags: ["React", "Next.js", "UI/UX"],
    cta: { label: "Candidatar-me", href: "#contactos" },
    imageAlt: "Mãos de um programador a escrever código num portátil",
  },

  openings: {
    title: "Vagas disponíveis",
    all: { label: "Ver todas", href: "#vagas" },
    details: "Ver detalhes",
    count: { one: "{n} vaga disponível", other: "{n} vagas disponíveis" },
    items: [
      { id: "hr", title: "Recursos Humanos", count: 1, href: "#contactos" },
      { id: "tech", title: "Tecnologia de Informação", count: 4, href: "#contactos" },
      { id: "marketing", title: "Marketing e Publicidade", count: 1, href: "#contactos" },
    ] as Opening[],
  },
};

export type CareersContent = typeof careersPt;
