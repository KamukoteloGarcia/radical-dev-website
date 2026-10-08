export type NavLink = {
  label: string;
  href: string;
};

export const segments = ["Institucional", "Privadas", "Particulares", "ONGs"];

export const languages = ["PT", "EN"] as const;
export type Language = (typeof languages)[number];

export const mainLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "#servicos" },
  { label: "Inovação", href: "#inovacao" },
  { label: "Sustentabilidade", href: "#sustentabilidade" },
  { label: "Carreiras", href: "#carreiras" },
  { label: "Contactos", href: "#contactos" },
  { label: "Sobre Nós", href: "#sobre" },
];
