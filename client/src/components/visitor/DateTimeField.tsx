import { useRef } from "react";

interface DateTimeFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: "date" | "time" | "datetime-local";
  className?: string;
}

function formatDateTimeDisplay(value: string) {
  // "2026-05-20T10:00" → "2026.05.20 10:00"
  return value.replace("T", " ").replace(/-/g, ".");
}

export function DateTimeField({
  label,
  value,
  onChange,
  required = false,
  error,
  disabled = false,
  readOnly = false,
  type = "datetime-local",
  className = "",
}: DateTimeFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    inputRef.current?.showPicker?.();
    inputRef.current?.click();
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[13px] font-normal text-[#333333] leading-[1.4] tracking-[-0.26px]">
        {label}
        {required && <span className="ml-0.5 text-[#FA4553]">*</span>}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type={readOnly ? "text" : type}
          value={readOnly ? formatDateTimeDisplay(value) : value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          readOnly={readOnly}
          className={[
            "w-full h-12 pl-4 pr-10 rounded-[8px] border text-[15px] outline-none transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:w-8 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
            error ? "border-[#FA4553] bg-[#FDF5F5] text-[#333333]"
              : disabled ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#B4B4B4] cursor-not-allowed"
              : readOnly ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#777777] pointer-events-none"
              : "border-[#D3D3D3] bg-white text-[#333333] focus:border-[#4A4A4A]",
          ].join(" ")}
        />
        <button
          type="button"
          onClick={handleIconClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
        >
          <img src="/ic_calender.svg" alt="" className="w-5 h-5" />
        </button>
      </div>
      {error && <p className="text-[12px] text-[#FA4553] leading-[18px]">{error}</p>}
    </div>
  );
}
