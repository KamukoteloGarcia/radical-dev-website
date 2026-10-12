import { Logo } from "@/components/brand/Logo";
import { getContent } from "@/lib/preferences";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export async function Navbar() {
  const { links, a11y } = await getContent();

  return (
    <div className="relative border-b border-line bg-nav">
      <div className="container-site flex h-[76px] items-center justify-between">
        <Logo label={a11y.home} />
        <nav aria-label={a11y.main} className="hidden lg:block">
          <NavLinks links={links} />
        </nav>
        <MobileNav links={links} labels={{ open: a11y.openMenu, close: a11y.closeMenu, menu: a11y.main }} />
      </div>
    </div>
  );
}
