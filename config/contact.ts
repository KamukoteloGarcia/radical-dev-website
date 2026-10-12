// Contact details and social profiles shown in the footer.
// Placeholders: replace with the real Radical dev details before going live.
export const contact = {
  email: "geral@radical.dev",
  phone: "+244 923 000 000",
  phoneHref: "tel:+244923000000",
  address: "Luanda, Angola",
};

export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
  { id: "x", label: "X", href: "https://x.com/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
] as const;

export type SocialId = (typeof socials)[number]["id"];
