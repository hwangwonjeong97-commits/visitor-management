interface TextAreaProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export function TextArea({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
  disabled = false,
  rows = 4,
  className = "",
}: TextAreaProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[13px] font-semibold text-[#333333] leading-[19px]">
        {label}
        {required && <span className="ml-0.5 text-[#FA4553]">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={[
          "px-4 py-3 rounded-[8px] border text-[15px] text-[#333333] placeholder:text-[#B4B4B4] outline-none transition-colors resize-none",
          "focus:border-[#4A4A4A]",
          error ? "border-[#FA4553] bg-[#FDF5F5]" : "border-[#D3D3D3] bg-white",
          disabled ? "bg-[#FAFAFA] text-[#B4B4B4] cursor-not-allowed" : "",
        ].join(" ")}
      />
      {error && <p className="text-[12px] text-[#FA4553] leading-[18px]">{error}</p>}
    </div>
  );
}
