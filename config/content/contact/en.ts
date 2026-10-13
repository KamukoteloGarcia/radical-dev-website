import type { ContactPageContent } from "./pt";

export const contactPageEn: ContactPageContent = {
  meta: {
    title: "Contact",
    description:
      "Talk to Radical dev: send us a message, give us a call or visit our head office in Kimbango, Capolo 2, Luanda.",
  },

  hero: {
    eyebrow: "Contact",
    title: "Let's talk about",
    highlight: "your project.",
    text: "Have an idea, a challenge or just want to know more? Our team is ready to listen and find the best solution with you.",
    cta: { label: "Send a message", href: "#mensagem" },
  },

  form: {
    title: "Send us a message",
    required: "required",
    fields: {
      name: { label: "Name", placeholder: "Your full name" },
      email: { label: "Email", placeholder: "email@company.com" },
      phone: { label: "Phone", placeholder: "+244" },
      subject: { label: "Subject", placeholder: "What is your message about?" },
      message: { label: "Message", placeholder: "How can we help?" },
    },
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      phone: "Please enter a valid phone number.",
      subject: "Please enter a subject.",
      message: "Please write your message (at least 10 characters).",
    },
    submit: "Send message",
    sending: "Sending…",
    success: "Message sent! We will reply within 24 hours.",
  },

  newsletter: {
    title: "Our Newsletter",
    text: "Get the latest updates on technology and innovation straight to your inbox.",
    label: "Email for the newsletter",
    placeholder: "Your best email",
    submit: "Subscribe now",
    sending: "Subscribing…",
    success: "You're subscribed! Thank you.",
    error: "Please enter a valid email.",
  },

  channels: {
    label: "Contact channels",
    phone: { title: "Phone", detail: "Mon - Fri, 08:00 - 17:00" },
    email: { title: "Email", main: "Reply within 24 hours" },
    office: { title: "Head office", main: "Kimbango, Capolo 2 — Luanda", detail: "Kilamba Kiaxi, Sapu" },
  },

  map: { title: "Map showing the Radical dev head office in Kimbango, Capolo 2, Luanda" },
};
