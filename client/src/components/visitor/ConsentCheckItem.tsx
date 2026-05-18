import { Check } from "lucide-react";

interface ConsentCheckItemProps {
  label: string;
  description?: string;
  required?: boolean;
  checked: boolean;
  onChange: (v: boolean) => void;
  onViewDetail?: () => void;
}

export function ConsentCheckItem({
  label,
  description,
  required = false,
  checked,
  onChange,
  onViewDetail,
}: ConsentCheckItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(!checked)}
          className={[
            "w-5 h-5 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 transition-colors",
            checked ? "bg-[#105AFF] border-[#105AFF]" : "bg-white border-[#D3D3D3]",
          ].join(" ")}
        >
          {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </button>
        <div className="flex items-center gap-1.5 flex-1">
          {required && (
            <span className="text-[11px] font-semibold text-[#105AFF] bg-[#EFF4FF] px-1.5 py-0.5 rounded">필수</span>
          )}
          <span className="text-[14px] text-[#333333] leading-[21px]">{label}</span>
          {onViewDetail && (
            <button
              type="button"
              onClick={onViewDetail}
              className="ml-auto text-[12px] text-[#989898] underline underline-offset-2 flex-shrink-0"
            >
              내용 보기
            </button>
          )}
        </div>
      </div>
      {description && (
        <p className="ml-8 text-[12px] text-[#989898] leading-[18px]">{description}</p>
      )}
    </div>
  );
}
