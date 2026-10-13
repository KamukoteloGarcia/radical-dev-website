import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Grey filled control; turns red only after the visitor leaves it invalid (:user-invalid) or the server rejects it.
export const fieldClass = cn(
  "peer block w-full rounded-[12px] border border-fg/10 bg-fg/[0.04] px-4 text-[15px] text-fg transition",
  "placeholder:text-subtle/80 hover:border-fg/25",
  "focus-visible:border-red focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red/15",
  "user-invalid:border-red aria-[invalid=true]:border-red",
);

type FormFieldProps = {
  id: string;
  label: string;
  /** Screen-reader text for the red asterisk. */
  requiredLabel: string;
  error: string;
  /** Error returned by the server; shown right away. */
  serverError?: string;
  className?: string;
  /** The input/textarea (must use `fieldClass`, which includes `peer`). */
  children: ReactNode;
};

export function FormField({ id, label, requiredLabel, error, serverError, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="inline-block text-[14px] text-fg">
        {label}
        <span aria-hidden="true" className="ml-1 text-red">
          *
        </span>
        <span className="sr-only"> ({requiredLabel})</span>
      </label>
      <div className="mt-2">
        {children}
        <p id={`${id}-error`} className={cn("mt-1.5 text-[13px] text-red-deep peer-user-invalid:block", serverError ? "block" : "hidden")}>
          {serverError ?? error}
        </p>
      </div>
    </div>
  );
}
