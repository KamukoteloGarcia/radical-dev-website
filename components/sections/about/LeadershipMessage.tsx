import { QuoteIcon } from "@/components/icons";
import { getContent } from "@/lib/preferences";
import { MessageText } from "./MessageText";

// Quote card with a thick dark left border, big red quote marks, "Ler mais" and two decorative
// circles on its bottom-right corner.
export async function LeadershipMessage() {
  const { about } = await getContent();
  const { message } = about;

  return (
    <section id="mensagem" data-theme="light" aria-labelledby="mensagem-titulo" className="overflow-x-clip bg-bg pt-16 text-fg">
      <div className="container-site">
        <article className="relative rounded-[18px] border border-fg/15 border-l-[6px] border-l-fg bg-card px-6 pb-14 pt-8 shadow-[0_18px_40px_-34px_rgba(0,0,0,0.5)] sm:px-16">
          <h2 id="mensagem-titulo" className="sr-only">
            {message.title}
          </h2>
          <QuoteIcon className="size-14 -translate-x-2 rotate-180 text-red sm:-translate-x-8" />

          <div className="mt-16 sm:mt-20">
            <MessageText
              excerpt={message.excerpt}
              rest={message.rest}
              signature={message.signature}
              labels={{ more: message.more, less: message.less }}
            />
          </div>

          <span aria-hidden="true" className="absolute -bottom-6 -right-4 size-24 rounded-full bg-[#141416] sm:-right-10" />
          <span aria-hidden="true" className="absolute -right-8 bottom-8 size-16 rounded-full bg-red sm:-right-14" />
        </article>
      </div>
    </section>
  );
}
