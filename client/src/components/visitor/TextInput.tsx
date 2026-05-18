interface TextInputProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  className?: string;
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
  disabled = false,
  readOnly = false,
  type = "text",
  className = "",
}: TextInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[13px] font-normal text-[#333333] leading-[1.4] tracking-[-0.26px]">
        {label}
        {required && <span className="ml-0.5 text-[#FA4553]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        className={[
          "h-12 px-4 rounded-[8px] border text-[15px] placeholder:text-[#B4B4B4] outline-none transition-colors",
          "focus:border-[#4A4A4A]",
          error ? "border-[#FA4553] bg-[#FDF5F5] text-[#333333]"
            : disabled ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#B4B4B4] cursor-not-allowed"
            : readOnly ? "border-[#D3D3D3] bg-[#FAFAFA] text-[#777777] pointer-events-none"
            : "border-[#D3D3D3] bg-white text-[#333333]",
        ].join(" ")}
      />
      {error && <p className="text-[12px] text-[#FA4553] leading-[18px]">{error}</p>}
    </div>
  );
}
