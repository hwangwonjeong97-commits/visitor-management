import { WeatherWidget } from "./WeatherWidget";
import { WifiInfoButton } from "./WifiInfoButton";

type HeaderStatusBarProps = {
  onWifiClick?: () => void;
};

export function HeaderStatusBar({ onWifiClick }: HeaderStatusBarProps) {
  return (
    <div className="flex items-center gap-4">
      <WeatherWidget />
      <div className="h-4 w-px shrink-0 self-center bg-gray-200" aria-hidden />
      <WifiInfoButton onClick={onWifiClick} />
    </div>
  );
}
