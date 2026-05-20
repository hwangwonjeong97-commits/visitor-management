import { ReactNode } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import { ShowcaseModeProvider } from "@/contexts/ShowcaseModeContext";

interface MobileDeviceFrameProps {
  children: ReactNode;
  label?: string;
  screenId?: string;
  routePath?: string;
  transparentStatusBar?: boolean;
  hideChrome?: boolean;
  showcaseMode?: boolean;
}

export function MobileDeviceFrame({ children, label, screenId, routePath, transparentStatusBar = false, hideChrome = false, showcaseMode = false }: MobileDeviceFrameProps) {
  const content = showcaseMode ? <ShowcaseModeProvider>{children}</ShowcaseModeProvider> : children;
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
        className="relative bg-[#1A1A1A] rounded-[40px] p-[10px]"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08)" }}
      >
        {/* 스크린 영역 */}
        <div
          className="relative overflow-hidden rounded-[32px] bg-[#F5F6FA] flex flex-col"
          style={{ width: 375, height: 812 }}
        >
          {!hideChrome && (
            <div className="absolute top-0 left-0 right-0 z-20">
              <StatusBar transparent={transparentStatusBar} />
            </div>
          )}
          <div className={`flex-1 overflow-y-auto overflow-x-hidden ${!hideChrome && !transparentStatusBar ? "pt-[44px]" : ""}`}>
            {hideChrome ? content : (
              <div className="page-stagger" style={{ height: transparentStatusBar ? '778px' : '734px' }}>
                {content}
              </div>
            )}
          </div>
          {!hideChrome && <HomeIndicator />}
        </div>
      </div>
    </div>
  );
}
