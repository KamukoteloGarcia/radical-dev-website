// "Contactos" page.
export const contactPagePt = {
  meta: {
    title: "Contactos",
    description:
      "Fale com a Radical dev: envie uma mensagem, ligue-nos ou visite a nossa sede em Kimbango, Capolo 2, Luanda.",
  },

  hero: {
    eyebrow: "Contactos",
    title: "Vamos conversar sobre o",
    highlight: "seu projecto.",
    text: "Tem uma ideia, um desafio ou quer apenas saber mais? A nossa equipa está pronta para ouvir e encontrar consigo a melhor solução.",
    cta: { label: "Enviar mensagem", href: "#mensagem" },
  },

  form: {
    title: "Envie uma mensagem",
    required: "obrigatório",
    fields: {
      name: { label: "Nome", placeholder: "O seu nome completo" },
      email: { label: "Email", placeholder: "email@empresa.com" },
      phone: { label: "Telefone", placeholder: "+244" },
      subject: { label: "Assunto", placeholder: "Qual é o assunto da sua mensagem?" },
      message: { label: "Mensagem", placeholder: "Como podemos ajudar?" },
    },
    errors: {
      name: "Indique o seu nome.",
      email: "Indique um email válido.",
      phone: "Indique um telefone válido.",
      subject: "Indique o assunto.",
      message: "Escreva a sua mensagem (mínimo 10 caracteres).",
    },
    submit: "Enviar mensagem",
    sending: "A enviar…",
    success: "Mensagem enviada! Vamos responder em até 24 horas.",
  },

  newsletter: {
    title: "A nossa Newsletter",
    text: "Receba as últimas actualizações sobre inovação tecnológica directamente no seu email.",
    label: "Email para a newsletter",
    placeholder: "O seu melhor email",
    submit: "Subscrever agora",
    sending: "A subscrever…",
    success: "Subscrição feita! Obrigado.",
    error: "Indique um email válido.",
  },

  channels: {
    label: "Canais de contacto",
    phone: { title: "Telefone", detail: "Seg - Sex, 08:00 - 17:00" },
    email: { title: "Email", main: "Resposta em 24 horas" },
    office: { title: "Sede", main: "Kimbango, Capolo 2 — Luanda", detail: "Kilamba Kiaxi, Sapu" },
  },

  map: { title: "Mapa com a localização da sede da Radical dev em Kimbango, Capolo 2, Luanda" },
};

export type ContactPageContent = typeof contactPagePt;
