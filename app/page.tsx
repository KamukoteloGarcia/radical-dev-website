import { ViewTransition } from "react";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { Quotes } from "@/components/sections/quotes/Quotes";
import { Sectors } from "@/components/sections/sectors/Sectors";
import { Solutions } from "@/components/sections/solutions/Solutions";
import { WhyUs } from "@/components/sections/why-us/WhyUs";
import { languageTransition } from "@/config/preferences";

export default function Home() {
  return (
    // Cross-fades the page only when the language changes (see `.language-swap` in globals.css).
    <ViewTransition update={{ [languageTransition]: "language-swap", default: "none" }} default="none">
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex flex-1 flex-col">
          <Hero />
          <Solutions />
          <Sectors />
          <WhyUs />
          <Quotes />
        </main>
        <Footer />
      </div>
    </ViewTransition>
  );
}
