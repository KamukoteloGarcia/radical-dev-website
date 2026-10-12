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
  name: "Radical dev",
  title: "Radical dev | Revolucionando o desenvolvimento com propósito",
  tagline: "Revolucionando o desenvolvimento com propósito.",
  description:
    "Soluções digitais disruptivas para empresas, governos e startups, impulsionando o progresso nacional e global através de tecnologia de ponta.",
  url: siteUrl(),
  locale: "pt_AO",
};
