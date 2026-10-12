import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
  type IconProps,
} from "@/components/icons";
import type { ReactNode } from "react";
import { socials, type SocialId } from "@/config/contact";

const icons: Record<SocialId, (props: IconProps) => ReactNode> = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
};

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {socials.map(({ id, label, href }) => {
        const Icon = icons[id];
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-red hover:bg-red hover:text-white"
            >
              <Icon className="size-[17px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
