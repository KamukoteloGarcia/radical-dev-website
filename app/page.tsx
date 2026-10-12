import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
    </>
  );
}
