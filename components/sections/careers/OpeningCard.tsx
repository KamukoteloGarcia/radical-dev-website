import Image from "next/image";
import Link from "next/link";
import { scrollItem } from "@/components/ui/scroll-row";
import { cn } from "@/lib/cn";

type OpeningCardProps = {
  title: string;
  countLabel: string;
  href: string;
  image: string;
  detailsLabel: string;
};

// Department card: photo, name, number of openings and an outlined "Ver detalhes" button.
export function OpeningCard({ title, countLabel, href, image, detailsLabel }: OpeningCardProps) {
  return (
    <li className={cn(scrollItem, "group relative flex flex-col rounded-[22px] border border-line bg-card p-3 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.35)] transition duration-500 ease-out hover:shadow-[0_26px_50px_-30px_rgba(163,17,28,0.4)] motion-safe:hover:-translate-y-1.5")}>
      <div className="relative aspect-[1.9] overflow-hidden rounded-[16px]">
        <Image src={image} alt="" fill unoptimized className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </div>

      <h3 className="mt-5 px-1 font-display text-[19px] font-semibold text-fg">{title}</h3>
      <p className="mt-1 px-1 text-[12px] text-muted">{countLabel}</p>

      <Link
        href={href}
        className="mt-8 flex h-11 items-center justify-center rounded-full border border-fg/20 text-[14px] text-fg transition hover:border-red hover:bg-red hover:text-white"
      >
        {detailsLabel}
        <span className="sr-only">: {title}</span>
      </Link>
    </li>
  );
}
