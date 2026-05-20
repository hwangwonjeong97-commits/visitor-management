import { ChevronLeft, X } from "lucide-react";
import { ReactNode } from "react";
import { useShowcaseMode } from "@/contexts/ShowcaseModeContext";

interface ScreenHeaderProps {
  title: string;
  onBack?: () => void;
  leftIcon?: "back" | "close";
  rightElement?: ReactNode;
}

export function ScreenHeader({ title, onBack, leftIcon = "back", rightElement }: ScreenHeaderProps) {
  const LeftIcon = leftIcon === "close" ? X : ChevronLeft;
  const isShowcase = useShowcaseMode();

  return (
    <div className="sticky top-0 z-10 flex items-center h-12 px-4 bg-white">
      {onBack && (
        <button
          onClick={isShowcase ? undefined : onBack}
          className="flex items-center justify-center w-9 h-9 -ml-1 mr-1 rounded-full active:bg-[#F4F4F4]"
        >
          <LeftIcon className="w-6 h-6 text-[#333333]" />
        </button>
      )}
      <h1 className="flex-1 text-[18px] font-bold text-[#222222] leading-[27px]">{title}</h1>
      {rightElement}
    </div>
  );
}
