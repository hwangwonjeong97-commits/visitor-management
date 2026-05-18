import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center h-5 px-1 rounded-[4px] text-[12px] font-bold tracking-[-0.24px] flex-shrink-0 ${className}`}>
      {children}
    </span>
  );
}
