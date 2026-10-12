import { quotePhotos } from "@/config/photos";
import { getContent } from "@/lib/preferences";
import { QuoteCarousel } from "./QuoteCarousel";

export async function Quotes() {
  const { quotes } = await getContent();

  return (
    <section
      id="testemunhos"
      aria-labelledby="testemunhos-titulo"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-bg py-16 text-fg lg:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_0%,var(--glow),transparent_70%)] opacity-60" />
      <h2 id="testemunhos-titulo" className="sr-only">
        {quotes.label}
      </h2>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <QuoteCarousel
          items={quotes.items}
          photos={quotePhotos}
          labels={{ goTo: quotes.goTo, previous: quotes.previous, next: quotes.next }}
        />
      </div>
    </section>
  );
}
