import { Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { ReactNode } from "react";

type AlertType = "info" | "success" | "warning" | "error";

const TYPE_MAP: Record<AlertType, { bg: string; border: string; text: string; icon: ReactNode }> = {
  info:    { bg: "#EFF4FF", border: "#105AFF", text: "#105AFF", icon: <Info className="w-4 h-4 flex-shrink-0" /> },
  success: { bg: "#F2FFFA", border: "#27C36F", text: "#27C36F", icon: <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> },
  warning: { bg: "#FFF2DC", border: "#FFA000", text: "#FFA000", icon: <AlertTriangle className="w-4 h-4 flex-shrink-0" /> },
  error:   { bg: "#FDF5F5", border: "#FA4553", text: "#FA4553", icon: <XCircle className="w-4 h-4 flex-shrink-0" /> },
};

interface AlertBannerProps {
  type?: AlertType;
  message: string;
  className?: string;
}

export function AlertBanner({ type = "info", message, className = "" }: AlertBannerProps) {
  const { bg, border, text, icon } = TYPE_MAP[type];
  return (
    <div
      className={`flex items-start gap-2 px-4 py-3 rounded-xl border-l-4 text-[13px] leading-[19px] ${className}`}
      style={{ backgroundColor: bg, borderLeftColor: border, color: text }}
    >
      {icon}
      <span className="font-medium">{message}</span>
    </div>
  );
}
