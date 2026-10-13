"use server";

import { getContent } from "./preferences";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d\s()-]{9,20}$/;

export type MessageField = "name" | "email" | "phone" | "subject" | "message";

export type MessageState =
  | { status: "idle" }
  | { status: "error"; errors: Partial<Record<MessageField, string>>; values: Record<MessageField, string> }
  | { status: "success"; sentAt: number };

export type NewsletterState = { status: "idle" } | { status: "error"; email: string } | { status: "success" };

function read(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

// Contact form. Browser checks are only for UX; this is the real validation.
export async function sendMessage(_previous: MessageState, formData: FormData): Promise<MessageState> {
  const { contactPage } = await getContent();
  const t = contactPage.form.errors;
  const values = {
    name: read(formData, "name", 100),
    email: read(formData, "email", 254),
    phone: read(formData, "phone", 20),
    subject: read(formData, "subject", 200),
    message: read(formData, "message", 2000),
  };

  const errors: Partial<Record<MessageField, string>> = {};
  if (values.name.length < 2) errors.name = t.name;
  if (!emailPattern.test(values.email)) errors.email = t.email;
  if (!phonePattern.test(values.phone)) errors.phone = t.phone;
  if (values.subject.length < 3) errors.subject = t.subject;
  if (values.message.length < 10) errors.message = t.message;
  if (Object.keys(errors).length > 0) return { status: "error", errors, values };

  // Delivery: plug an email service (e.g. Resend) or a CRM here. For now it is only logged on the server.
  console.info(`[contact] new message (${values.message.length} chars)`);
  return { status: "success", sentAt: Date.now() };
}

// Newsletter sign-up.
export async function subscribeNewsletter(_previous: NewsletterState, formData: FormData): Promise<NewsletterState> {
  const email = read(formData, "email", 254);
  if (!emailPattern.test(email)) return { status: "error", email };

  // Delivery: plug a mailing list service here. For now it is only logged on the server.
  console.info("[newsletter] new subscription");
  return { status: "success" };
}
