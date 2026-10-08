import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <header className="relative z-30 border-b border-line/10 bg-nav">
      <div className="flex h-[86px] items-center justify-between px-4 sm:px-[56px] xl:pr-[38px]">
        <Logo />
        <nav aria-label="Principal" className="hidden xl:block">
          <NavLinks />
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
