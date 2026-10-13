"use client";

import { useId, useState } from "react";

type MessageTextProps = {
  excerpt: string;
  rest: string;
  signature: string;
  labels: { more: string; less: string };
};

// Leadership message: shows the excerpt first, "Ler mais" reveals the rest and the signature.
export function MessageText({ excerpt, rest, signature, labels }: MessageTextProps) {
  const [isOpen, setIsOpen] = useState(false);
  const restId = useId();

  return (
    <>
      <p className="text-[17px] leading-[1.65] text-muted sm:text-[20px]">
        {excerpt}
        {isOpen ? " " : "…"}
        <span id={restId} hidden={!isOpen}>
          {rest}
        </span>
      </p>
      {isOpen && <p className="mt-6 text-[15px] font-semibold text-fg">{signature}</p>}

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={restId}
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-full border border-fg px-12 py-3 text-[16px] font-semibold text-fg transition hover:border-red hover:bg-red hover:text-white"
        >
          {isOpen ? labels.less : labels.more}
        </button>
      </div>
    </>
  );
}
