import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}

const sizeClasses = {
  sm: "h-10 px-4 text-[14px]",
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-[16px]",
};

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  size = "md",
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center font-semibold rounded-[10px] transition-colors",
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        disabled
          ? "bg-[#F4F4F4] text-[#B4B4B4] cursor-not-allowed"
          : "bg-[#105AFF] text-white active:bg-[#0943C6]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
