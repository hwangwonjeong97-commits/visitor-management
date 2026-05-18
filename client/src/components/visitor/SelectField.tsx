import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder = "선택해 주세요",
  required = false,
  error,
  disabled = false,
  className = "",
}: SelectFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[13px] font-normal text-[#333333] leading-[1.4] tracking-[-0.26px]">
        {label}
        {required && <span className="ml-0.5 text-[#FA4553]">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={[
            "w-full h-12 pl-4 pr-10 rounded-[8px] border text-[15px] outline-none transition-colors appearance-none",
            "focus:border-[#4A4A4A]",
            error ? "border-[#FA4553] bg-[#FDF5F5]" : "border-[#D3D3D3]",
            disabled ? `bg-[#FAFAFA] cursor-not-allowed ${value ? "text-[#777777]" : "text-[#B4B4B4]"}` : value ? "bg-white text-[#333333]" : "bg-white text-[#B4B4B4]",
          ].join(" ")}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#989898] pointer-events-none" />
      </div>
      {error && <p className="text-[12px] text-[#FA4553] leading-[18px]">{error}</p>}
    </div>
  );
}
