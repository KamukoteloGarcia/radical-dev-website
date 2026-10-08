import { AppHeader } from "./AppHeader";
import { BottomNav } from "./BottomNav";
import { NewsHighlight } from "./NewsHighlight";
import { PartnerStrip } from "./PartnerStrip";
import { PromoBanner } from "./PromoBanner";
import { QuickAccessGrid } from "./QuickAccessGrid";
import { StatusBar } from "./StatusBar";
import { Ticker } from "./Ticker";

// Placeholder app screen. Replace with a real screenshot when available.
export function AppScreen() {
  return (
    <div className="flex size-full select-none flex-col font-sans text-brand-ink">
      <StatusBar />
      <AppHeader />
      <Ticker />
      <NewsHighlight />
      <PartnerStrip />
      <PromoBanner />
      <QuickAccessGrid />
      <BottomNav />
    </div>
  );
}
