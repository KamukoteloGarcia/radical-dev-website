import { ViewTransition, type ReactNode } from "react";
import { languageTransition } from "@/config/preferences";
import { Footer } from "./footer/Footer";
import { Header } from "./Header";

// Header + page content + footer shared by every page.
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    // Cross-fades the page only when the language changes (see `.language-swap` in globals.css).
    <ViewTransition update={{ [languageTransition]: "language-swap", default: "none" }} default="none">
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </div>
    </ViewTransition>
  );
}
