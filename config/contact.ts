// Contact details and social profiles (footer and contact page).
// Placeholders: replace with the real Radical dev details before going live.
export const contact = {
  email: "geral@radical.dev",
  phone: "+244 923 000 000",
  phoneHref: "tel:+244923000000",
  address: "Kimbango, Capolo 2 — Luanda, Angola",
};

// Office on the map. Google Maps embed needs no API key; `t=k` shows the satellite view.
// If the pin is off, adjust `mapQuery` (e.g. "Sapu, Kilamba Kiaxi, Luanda").
const mapQuery = "Capolo 2, Kilamba Kiaxi, Luanda, Angola";

export const location = {
  embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=k&z=16&output=embed`,
};

// Banner video on the contact page (Mixkit free license, see /public/videos/CREDITS.md).
export const contactVideo = {
  video: "/videos/contact/support.mp4",
  poster: "/videos/contact/support.webp",
};

export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "x", label: "X", href: "https://x.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
] as const;

export type SocialId = (typeof socials)[number]["id"];
