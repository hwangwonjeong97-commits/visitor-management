import { useClock } from "../hooks/useClock";

export function ClockDisplay() {
  const { date } = useClock();
  return (
    <p className="shrink-0 text-[17px] leading-[25.5px] tracking-[-0.5px] text-gray-600 transition-all duration-300">
      {date}
    </p>
  );
}
