import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { Quotes } from "@/components/sections/quotes/Quotes";
import { Solutions } from "@/components/sections/solutions/Solutions";
import { WhyUs } from "@/components/sections/why-us/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Solutions />
        <WhyUs />
        <Quotes />
      </main>
      <Footer />
    </>
  );
}
