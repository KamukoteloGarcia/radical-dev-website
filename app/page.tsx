import { LoadingDots } from "@/components/ui/LoadingDots";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
      <h1 className="text-4xl font-bold">Radical Dev Website</h1>
      <p className="text-lg opacity-70">
        Under development
        <LoadingDots />
      </p>
    </main>
  );
}
