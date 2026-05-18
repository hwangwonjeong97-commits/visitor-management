interface InfoRow {
  label: string;
  value: string;
}

interface InfoCardProps {
  rows: InfoRow[];
  className?: string;
}

export function InfoCard({ rows, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-[#F7F8FA] rounded-[12px] p-4 flex flex-col gap-[10px] ${className}`}>
      {rows.map((row, i) => (
        <div key={i} className="flex gap-3 items-center">
          <span className="text-[14px] text-[#949DAF] w-[64px] flex-shrink-0 leading-[1.4]">{row.label}</span>
          <span className="text-[14px] text-[#333333] flex-1 leading-[1.4]">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
