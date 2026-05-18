type Status = "pending" | "approved" | "rejected" | "arrived" | "confirmed";

const STATUS_MAP: Record<Status, { label: string; bg: string; text: string }> = {
  pending:   { label: "승인 대기", bg: "#E4EEFA", text: "#105AFF" },
  approved:  { label: "승인 완료", bg: "#F2FFFA", text: "#27C36F" },
  rejected:  { label: "거절",     bg: "#FDF5F5", text: "#FA4553" },
  arrived:   { label: "도착",     bg: "#E4EEFA", text: "#105AFF" },
  confirmed: { label: "입장 확인", bg: "#F2FFFA", text: "#27C36F" },
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const { label, bg, text } = STATUS_MAP[status];
  return (
    <span
      className={`inline-flex items-center px-3 py-[5px] rounded-full text-[12px] font-semibold leading-[18px] ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  );
}
