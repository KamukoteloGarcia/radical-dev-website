import { Navbar } from "@/components/layout/navbar/Navbar";
import { TopBar } from "@/components/layout/top-bar/TopBar";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
    </>
  );
}
