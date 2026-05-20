import { ScanLine } from "lucide-react";

type CameraScannerProps = {
  title?: string;
};

export function CameraScanner({ title }: CameraScannerProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900/40" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/4 h-px w-full bg-white/10" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
        <div className="absolute left-0 top-3/4 h-px w-full bg-white/10" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-white/10" />
      </div>

      <div className="absolute inset-x-0 top-14 z-20 flex flex-col items-center px-[80px]">
        {title ? (
          <p className="shrink-0 text-center text-[22px] font-normal leading-[33px] tracking-[-0.5px] text-gray-0">
            {title}
          </p>
        ) : null}

        <div
          className={[
            "relative size-[min(72vw,72vh,420px)] shrink-0 animate-pulse-ring",
            title ? "mt-12" : "",
          ].join(" ")}
        >
          <span className="absolute left-0 top-0 h-12 w-12 rounded-tl-lg border-l-4 border-t-4 border-blue-400" />
          <span className="absolute right-0 top-0 h-12 w-12 rounded-tr-lg border-r-4 border-t-4 border-blue-400" />
          <span className="absolute bottom-0 left-0 h-12 w-12 rounded-bl-lg border-b-4 border-l-4 border-blue-400" />
          <span className="absolute bottom-0 right-0 h-12 w-12 rounded-br-lg border-b-4 border-r-4 border-blue-400" />
          <div className="absolute inset-x-4 top-0 h-0.5 bg-blue-400/80 shadow-[0_0_12px_rgba(16,90,255,0.8)] animate-scan-line" />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-[15px] leading-[22px] text-gray-0 backdrop-blur-sm">
        <ScanLine className="size-4" aria-hidden />
        카메라 인식 영역
      </div>
    </div>
  );
}
