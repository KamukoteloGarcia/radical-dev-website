import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "./SocialLinks";

type FooterBrandProps = { about: string; followUs: string; logoLabel: string };

export function FooterBrand({ about, followUs, logoLabel }: FooterBrandProps) {
  return (
    <div className="sm:col-span-2 lg:col-span-1">
      <Logo label={logoLabel} />
      <p className="mt-5 max-w-[360px] text-[15px] leading-relaxed text-muted">{about}</p>
      <p className="mt-7 text-[13px] font-medium uppercase tracking-[0.18em] text-subtle">{followUs}</p>
      <div className="mt-3">
        <SocialLinks />
      </div>
    </div>
  );
}
