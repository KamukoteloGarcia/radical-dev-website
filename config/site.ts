// Site-wide metadata used for SEO and link previews.
export const site = {
  name: "Radical Dev",
  title: "Radical Dev | Tecnologia que transforma Angola",
  tagline: "Tecnologia que transforma Angola",
  description:
    "Soluções digitais personalizadas para empresas, governo e ONGs, impulsionando o progresso nacional através da inovação sustentável.",
  // Set NEXT_PUBLIC_SITE_URL to the production domain so shared links get absolute image URLs.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_AO",
};
