import { ReactNode } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";

interface MobileDeviceFrameProps {
  children: ReactNode;
  label?: string;
  screenId?: string;
  routePath?: string;
  transparentStatusBar?: boolean;
}

export function MobileDeviceFrame({ children, label, screenId, routePath, transparentStatusBar = false }: MobileDeviceFrameProps) {
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
        className="relative bg-[#1A1A1A] rounded-[40px] p-[10px]"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08)" }}
      >
        {/* 상단 노치 */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#1A1A1A] rounded-full z-10" />
        {/* 스크린 영역 */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-white flex flex-col"
          style={{ width: 390, height: 844 }}
        >
          <div className="absolute top-0 left-0 right-0 z-20">
            <StatusBar transparent={transparentStatusBar} />
          </div>
          <div className={`flex-1 overflow-y-auto overflow-x-hidden ${transparentStatusBar ? "" : "pt-[44px]"}`}>
            {children}
          </div>
          <HomeIndicator />
        </div>
      </div>
    </div>
  );
}
