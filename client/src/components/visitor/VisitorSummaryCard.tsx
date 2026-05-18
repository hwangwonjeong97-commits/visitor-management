import { Calendar, User, MapPin, FileText } from "lucide-react";

interface VisitorSummaryCardProps {
  visitDate: string;
  visitEndDate?: string;
  host: string;
  hostContact?: string;
  location: string;
  purpose: string;
  className?: string;
}

export function VisitorSummaryCard({
  visitDate,
  visitEndDate,
  host,
  hostContact,
  location,
  purpose,
  className = "",
}: VisitorSummaryCardProps) {
  const rows = [
    { icon: <Calendar className="w-4 h-4" />, label: "방문 일시", value: visitEndDate ? `${visitDate} ~ ${visitEndDate}` : visitDate },
    { icon: <User className="w-4 h-4" />, label: "담당자", value: hostContact ? `${host} (${hostContact})` : host },
    { icon: <MapPin className="w-4 h-4" />, label: "방문 장소", value: location },
    { icon: <FileText className="w-4 h-4" />, label: "방문 목적", value: purpose },
  ];

  return (
    <div
      className={`bg-white rounded-2xl px-5 py-4 flex flex-col gap-4 ${className}`}
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      {rows.map((row, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-[#989898] mt-0.5">{row.icon}</span>
          <div className="flex flex-col gap-0.5">
            <span className="text-[12px] text-[#989898] leading-[18px]">{row.label}</span>
            <span className="text-[14px] font-medium text-[#333333] leading-[21px]">{row.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
