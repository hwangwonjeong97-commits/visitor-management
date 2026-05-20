import type { AppScreen } from "../types";
import { HomeButton } from "../ui/HomeButton";
import { HeaderStatusBar } from "./HeaderStatusBar";

const DOUZONE_LOGO = "/images/douzone-logo.png";

type AppHeaderProps = {
  screen: AppScreen;
  onGoHome: () => void;
};

export function AppHeader({ screen, onGoHome }: AppHeaderProps) {
  const isHome = screen === "HOME";

  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-gray-100 bg-transparent px-[80px] transition-all duration-300">
      <div className="relative z-10 flex min-h-12 min-w-[120px] items-center">
        <div
          aria-hidden={!isHome}
          className={[
            "absolute flex items-center transition-all duration-300 ease-out",
            isHome ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none -translate-x-2 opacity-0",
          ].join(" ")}
        >
          <img src={DOUZONE_LOGO} alt="Douzone" className="h-8 w-auto object-contain" draggable={false} />
        </div>
        <div
          aria-hidden={isHome}
          className={[
            "absolute flex items-center transition-all duration-300 ease-out",
            isHome ? "pointer-events-none translate-x-2 opacity-0" : "pointer-events-auto translate-x-0 opacity-100",
          ].join(" ")}
        >
          <HomeButton onClick={onGoHome} />
        </div>
      </div>
      <div className="relative z-10 shrink-0">
        <HeaderStatusBar />
      </div>
    </header>
  );
}
