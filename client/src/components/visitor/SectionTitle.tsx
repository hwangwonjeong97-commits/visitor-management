import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`text-[14px] font-bold text-[#333333] leading-[21px] ${className}`}>
      {children}
    </h2>
  );
}
