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
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[13px] font-semibold text-[#333333] leading-[19px]">
        {label}
        {required && <span className="ml-0.5 text-[#FA4553]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        readOnly={readOnly}
        className={[
          "h-12 px-4 rounded-[8px] border text-[15px] outline-none transition-colors",
          error ? "border-[#FA4553] bg-[#FDF5F5] text-[#333333]"
            : disabled ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#B4B4B4] cursor-not-allowed"
            : readOnly ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#333333] pointer-events-none"
            : "border-[#D3D3D3] bg-white text-[#333333] focus:border-[#4A4A4A]",
        ].join(" ")}
      />
      {error && <p className="text-[12px] text-[#FA4553] leading-[18px]">{error}</p>}
    </div>
  );
}
