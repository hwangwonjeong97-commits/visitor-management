import { ReactNode } from "react";

interface TabletDeviceFrameProps {
  children: ReactNode;
  label?: string;
  screenId?: string;
  routePath?: string;
}

export function TabletDeviceFrame({ children, label, screenId, routePath }: TabletDeviceFrameProps) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      {(screenId || label) && (
        <div className="flex items-center gap-2">
          {screenId && (
            <span className="text-[11px] font-medium text-[#105AFF] bg-[#EFF4FF] px-2 py-0.5 rounded-full">
              {screenId}
            </span>
          )}
          {label && (
            <span className="text-[13px] font-medium text-[#333333]">{label}</span>
          )}
          {routePath && (
            <a
              href={routePath}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-[#989898] hover:text-[#105AFF] underline underline-offset-2"
            >
              열기 ↗
            </a>
          )}
        </div>
      )}
      <div
        className="relative bg-[#2A2A2A] rounded-[24px] p-[12px]"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08)" }}
      >
        {/* 홈 버튼 (우측 중앙) */}
        <div className="absolute right-[4px] top-1/2 -translate-y-1/2 w-[4px] h-[48px] bg-[#3A3A3A] rounded-full" />
        {/* 스크린 영역 */}
        <div
          className="relative overflow-hidden rounded-[16px] bg-[#F5F6FA]"
          style={{ width: 768, height: 1024 }}
        >
          <div className="w-full h-full overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
