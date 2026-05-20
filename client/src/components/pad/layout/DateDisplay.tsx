import { useClock } from "../hooks/useClock";

export function DateDisplay({ className = "" }: { className?: string }) {
  const { date } = useClock();
  return (
    <p className={`text-[16px] font-medium leading-[24px] tracking-[-0.5px] text-gray-600 ${className}`}>
      {date}
    </p>
  );
}
