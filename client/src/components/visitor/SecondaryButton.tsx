import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost" | "tertiary";
  type?: "button" | "submit";
}

const sizeClasses = {
  sm: "h-10 px-4 text-[14px]",
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-[16px]",
};

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  variant = "outline",
  type = "button",
}: SecondaryButtonProps) {
  const variantClasses =
    variant === "outline"
      ? "border border-[#105AFF] text-[#105AFF] bg-white active:bg-[#EFF4FF] font-semibold"
      : variant === "tertiary"
      ? "border border-[#E1E1E1] text-[#333333] bg-white active:bg-[#F7F8FA] font-normal"
      : "text-[#105AFF] bg-transparent active:bg-[#EFF4FF] font-semibold";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-[10px] transition-colors",
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        disabled ? "border-[#D3D3D3] text-[#B4B4B4] cursor-not-allowed" : variantClasses,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
