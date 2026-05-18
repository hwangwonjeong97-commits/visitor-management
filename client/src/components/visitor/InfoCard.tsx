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
    <div
      className={`bg-white rounded-2xl px-5 py-4 flex flex-col gap-3 ${className}`}
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      {rows.map((row, i) => (
        <div key={i} className="flex justify-between items-start gap-4">
          <span className="text-[13px] text-[#777777] leading-[19px] flex-shrink-0">{row.label}</span>
          <span className="text-[13px] font-medium text-[#333333] leading-[19px] text-right">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
