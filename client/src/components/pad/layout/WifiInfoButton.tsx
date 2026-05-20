const WIFI_ICON = "/images/ic-wifi.svg";

type WifiInfoButtonProps = {
  onClick?: () => void;
};

export function WifiInfoButton({ onClick }: WifiInfoButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-gray-100 bg-gray-0 px-4 py-2.5 text-[15px] font-medium leading-[22.5px] tracking-[-0.5px] text-gray-800 transition-all duration-300 hover:border-gray-200 active:scale-[0.98] active:bg-neutral-30"
    >
      <img src={WIFI_ICON} alt="" className="size-5" draggable={false} aria-hidden />
      Wi-Fi 정보
    </button>
  );
}
