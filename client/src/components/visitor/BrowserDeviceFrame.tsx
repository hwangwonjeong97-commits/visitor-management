import { ReactNode } from "react";

interface BrowserDeviceFrameProps {
  children: ReactNode;
  label?: string;
  screenId?: string;
}

export function BrowserDeviceFrame({ children, label, screenId }: BrowserDeviceFrameProps) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      {(screenId || label) && (
        <div className="flex items-center gap-2">
          {screenId && (
            <span className="text-[15px] font-medium text-[#105AFF] bg-[#EFF4FF] px-2 py-0.5 rounded-full">
              {screenId}
            </span>
          )}
          {label && (
            <span className="text-[16px] font-medium text-[#333333]">{label}</span>
          )}
        </div>
      )}
      <div
        className="relative bg-[#2A2A2A] rounded-[20px] p-[10px]"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08)" }}
      >
        <div
          className="relative overflow-hidden rounded-[12px] bg-[#F5F6FA]"
          style={{ width: 1440, height: 1080 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
