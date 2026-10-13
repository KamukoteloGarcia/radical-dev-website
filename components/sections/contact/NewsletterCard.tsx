"use client";

import { useActionState } from "react";
import { MailIcon } from "@/components/icons";
import type { ContactPageContent } from "@/config/content/contact/pt";
import { subscribeNewsletter, type NewsletterState } from "@/lib/contact";

const initialState: NewsletterState = { status: "idle" };

// Dark "Newsletter" card: mail icon, title, text, round email field and white subscribe button.
export function NewsletterCard({ t }: { t: ContactPageContent["newsletter"] }) {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, initialState);
  const message = state.status === "success" ? t.success : state.status === "error" ? t.error : "";

  return (
    <div className="rounded-[10px] bg-[#141416] px-8 py-14 text-white sm:px-16">
      <MailIcon className="size-8" strokeWidth={1.6} />
      <h2 className="mt-6 font-display text-[24px] font-semibold">{t.title}</h2>
      <p className="mt-5 max-w-[260px] text-[16px] leading-[1.55] text-white/85">{t.text}</p>

      <form action={formAction} className="mt-8 max-w-[272px]">
        <label htmlFor="newsletter-email" className="sr-only">
          {t.label}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          defaultValue={state.status === "error" ? state.email : undefined}
          placeholder={t.placeholder}
          aria-describedby="newsletter-status"
          className="h-[72px] w-full rounded-full border border-white/15 bg-white/10 px-5 text-[16px] text-white transition placeholder:text-white/50 focus-visible:border-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red/25"
        />
        <button
          type="submit"
          disabled={isPending}
          className="mt-4 h-[72px] w-full rounded-full bg-white text-[16px] font-semibold text-[#141416] transition hover:bg-red hover:text-white disabled:cursor-wait disabled:opacity-70"
        >
          {isPending ? t.sending : t.submit}
        </button>
        <p id="newsletter-status" role="status" className="mt-3 min-h-5 text-[14px] text-white/85">
          {message}
        </p>
      </form>
    </div>
  );
}
