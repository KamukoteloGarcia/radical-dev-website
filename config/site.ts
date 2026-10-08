// Absolute base URL so shared links get absolute image URLs.
// NEXT_PUBLIC_SITE_URL wins (custom domain); on Vercel it falls back to the production domain.
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

// Site-wide metadata used for SEO and link previews.
export const site = {
  name: "Radical Dev",
  title: "Radical Dev | Tecnologia que transforma Angola",
  tagline: "Tecnologia que transforma Angola",
  description:
    "Soluções digitais personalizadas para empresas, governo e ONGs, impulsionando o progresso nacional através da inovação sustentável.",
  url: siteUrl(),
  locale: "pt_AO",
};
