import { getContent } from "@/lib/preferences";
import { FooterBottom } from "./FooterBottom";
import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterCta } from "./FooterCta";
import { FooterLinks } from "./FooterLinks";
import { FooterWordmark } from "./FooterWordmark";

const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10";

export async function Footer() {
  const { footer, a11y } = await getContent();

  return (
    <footer id="contactos" className="relative">
      {/* Light band (page background) that gives the quotes room; the CTA card sits across both colours. */}
      <div data-theme="light" className="bg-bg pt-24 lg:pt-32">
        <div className={`${container} relative z-10 -mb-32 lg:-mb-36`}>
          <FooterCta cta={footer.cta} />
        </div>
      </div>

      <div className="relative overflow-hidden bg-topbar pt-44 lg:pt-52">
        <div className={container}>
          <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12 lg:pb-16">
            <FooterBrand about={footer.about} followUs={footer.followUs} logoLabel={a11y.home} />
            {footer.columns.map((column) => (
              <FooterLinks key={column.title} column={column} />
            ))}
            <FooterContact title={footer.contactTitle} hours={footer.hours} />
          </div>

          <FooterBottom rights={footer.rights} legal={footer.legal} backToTop={footer.backToTop} />
        </div>

        <FooterWordmark />
      </div>
    </footer>
  );
}
