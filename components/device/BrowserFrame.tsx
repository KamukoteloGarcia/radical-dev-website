import type { ReactNode } from "react";

// Minimal browser chrome (dots + address bar) around a web page.
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="flex size-full flex-col bg-[#f4f4f5]">
      <div className="flex h-[22px] shrink-0 items-center gap-1.5 px-2.5">
        <span className="size-[7px] rounded-full bg-red" />
        <span className="size-[7px] rounded-full bg-[#f5b544]" />
        <span className="size-[7px] rounded-full bg-[#45c46b]" />
        <span className="ml-2 h-[12px] flex-1 rounded-full bg-white px-2 text-[7px] leading-[12px] text-[#71717a]">{url}</span>
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}
