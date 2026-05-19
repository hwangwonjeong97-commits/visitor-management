import { ReactNode } from "react";

interface TabletDeviceFrameProps {
  children: ReactNode;
  label?: string;
  screenId?: string;
  routePath?: string;
  landscape?: boolean;
}

export function TabletDeviceFrame({ children, label, screenId, routePath, landscape = false }: TabletDeviceFrameProps) {
  const screenW = landscape ? 1024 : 768;
  const screenH = landscape ? 768 : 1024;

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
        {/* 홈 버튼 — landscape: 하단 중앙, portrait: 우측 중앙 */}
        {landscape ? (
          <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 h-[4px] w-[48px] bg-[#3A3A3A] rounded-full" />
        ) : (
          <div className="absolute right-[4px] top-1/2 -translate-y-1/2 w-[4px] h-[48px] bg-[#3A3A3A] rounded-full" />
        )}
        {/* 스크린 영역 */}
        <div
          className="relative overflow-hidden rounded-[16px] bg-[#F5F6FA]"
          style={{ width: screenW, height: screenH }}
        >
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
