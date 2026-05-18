import { Check } from "lucide-react";
import { Badge } from "./Badge";

interface ConsentCheckItemProps {
  label: string;
  required?: boolean;
  checked: boolean;
  onChange: (v: boolean) => void;
  onViewDetail?: () => void;
}

export function ConsentCheckItem({
  label,
  required = false,
  checked,
  onChange,
  onViewDetail,
}: ConsentCheckItemProps) {
  return (
    <div className="flex items-center gap-2 py-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={[
          "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors",
          checked ? "bg-[#719BFC] border-[#719BFC]" : "bg-white border-[#D3D3D3]",
        ].join(" ")}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </button>
      <div className="flex items-center gap-1.5 flex-1 min-w-0">
        {required && (
          <Badge className="bg-[#EFF4FF] text-[#105AFF]">필수</Badge>
        )}
        <span className="text-[15px] text-[#333333] leading-[1.4] tracking-[-0.3px]">{label}</span>
      </div>
      {onViewDetail && (
        <button
          type="button"
          onClick={onViewDetail}
          className="text-[13px] text-[#777777] underline underline-offset-2 flex-shrink-0 tracking-[-0.26px]"
        >
          내용보기
        </button>
      )}
    </div>
  );
}
