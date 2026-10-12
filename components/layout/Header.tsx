import { Navbar } from "./navbar/Navbar";
import { TopBar } from "./top-bar/TopBar";

export function Header() {
  return (
    <header className="relative z-30">
      <TopBar />
      <Navbar />
    </header>
  );
}
