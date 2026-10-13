"use client";

import { useActionState, useId } from "react";
import type { ContactPageContent } from "@/config/content/contact/pt";
import { sendMessage, type MessageField, type MessageState } from "@/lib/contact";
import { FormField, fieldClass } from "./FormField";

const initialState: MessageState = { status: "idle" };

// "Envie uma mensagem" card. Works without JavaScript too (normal form POST to the Server Action).
export function ContactForm({ t }: { t: ContactPageContent["form"] }) {
  const [state, formAction, isPending] = useActionState(sendMessage, initialState);
  const prefix = useId();

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : undefined;
  const id = (name: MessageField) => `${prefix}-${name}`;
  // Shared props of every control: name, saved value after a server error, error wiring.
  const control = (name: MessageField) => ({
    id: id(name),
    name,
    required: true,
    defaultValue: values?.[name],
    placeholder: t.fields[name].placeholder,
    "aria-errormessage": `${id(name)}-error`,
    "aria-invalid": errors[name] ? true : undefined,
  });
  const field = (name: MessageField) => ({
    id: id(name),
    label: t.fields[name].label,
    requiredLabel: t.required,
    error: t.errors[name],
    serverError: errors[name],
  });

  return (
    <div className="rounded-[16px] border border-fg/5 bg-card px-6 py-9 shadow-[0_16px_40px_-22px_rgba(0,0,0,0.35)] sm:px-10">
      <h2 className="font-display text-[24px] font-semibold text-fg">{t.title}</h2>

      <form action={formAction} className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <FormField {...field("name")}>
          <input {...control("name")} type="text" autoComplete="name" minLength={2} maxLength={100} className={`${fieldClass} h-[46px]`} />
        </FormField>

        <FormField {...field("email")}>
          <input
            {...control("email")}
            type="email"
            autoComplete="email"
            maxLength={254}
            autoCapitalize="off"
            spellCheck={false}
            className={`${fieldClass} h-[46px]`}
          />
        </FormField>

        <FormField {...field("phone")} className="sm:col-span-2">
          <input {...control("phone")} type="tel" autoComplete="tel" maxLength={20} className={`${fieldClass} h-[46px]`} />
        </FormField>

        <FormField {...field("subject")} className="sm:col-span-2">
          <textarea {...control("subject")} rows={2} minLength={3} maxLength={200} className={`${fieldClass} h-[86px] resize-none py-3`} />
        </FormField>

        <FormField {...field("message")} className="sm:col-span-2">
          <textarea {...control("message")} rows={4} minLength={10} maxLength={2000} className={`${fieldClass} min-h-[126px] resize-y py-3`} />
        </FormField>

        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-fg px-8 py-3 text-[14px] font-semibold text-bg transition hover:bg-red hover:text-white disabled:cursor-wait disabled:opacity-70"
          >
            {isPending ? t.sending : t.submit}
          </button>
          <p role="status" className="text-[14px] font-medium text-fg">
            {state.status === "success" ? t.success : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
