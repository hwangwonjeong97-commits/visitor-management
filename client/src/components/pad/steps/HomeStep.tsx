import { QrCode } from "lucide-react";
import { DateDisplay } from "../layout/DateDisplay";
import { HomeApplicationStepper } from "./HomeApplicationStepper";

const USERGROUP_ICON = "/images/ic-usergroup.svg";

export type HomeEntryHighlight = "pre-registered" | "unregistered";

type HomeStepProps = {
  onSelectPreRegistered: () => void;
  onSelectUnregistered: () => void;
  highlightEntry?: HomeEntryHighlight;
};

export function HomeStep({ onSelectPreRegistered, onSelectUnregistered, highlightEntry }: HomeStepProps) {
  return (
    <section className="flex min-h-0 flex-1 flex-col">
      <div className="flex min-h-0 flex-1 w-full flex-col items-center justify-center px-[80px]">
        <div className="flex w-full max-w-[1000px] flex-row items-center justify-between gap-12">
          <div className="flex min-w-0 flex-[1_1_50%] flex-col justify-center">
          <div className="animate-fade-in-up">
            <DateDisplay className="mb-[12px]" />
            <h1 className="text-[36px] font-bold leading-[50px] tracking-[-0.5px] text-gray-900">
              안녕하세요,<br />
              <span className="text-blue-500" style={{ fontWeight: 700 }}>더존을지타워</span> 방문을<br />
              진심으로 환영합니다.
            </h1>
          </div>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            <HomeApplicationStepper />
          </div>
          </div>

          <div className="ml-auto flex w-full max-w-[560px] flex-[1_1_50%] flex-col justify-center gap-4">
            <button
              type="button"
              onClick={onSelectPreRegistered}
              className={[
                "flex h-[180px] w-full flex-row items-center justify-between rounded-[20px] px-[40px] shadow-level-3 transition-all duration-200 active:scale-[0.98]",
                "bg-blue-500 text-left hover:bg-blue-600 active:bg-blue-700",
                highlightEntry === "pre-registered" ? "ring-4 ring-blue-500/40 ring-offset-2 ring-offset-neutral-50" : "",
                highlightEntry === "unregistered" ? "opacity-60" : "",
                "animate-fade-in-up",
              ].join(" ")}
              style={{ animationDelay: "120ms" }}
            >
              <div>
                <p className="text-[24px] font-bold leading-[36px] tracking-[-0.5px] text-gray-0">사전등록 방문객</p>
                <p className="mt-1 text-[18px] leading-[27px] tracking-[-0.5px] text-gray-0/80">사전 예약 정보로 빠르게 입장</p>
              </div>
              <QrCode size={84} className="shrink-0 text-gray-0/90 transition-all duration-300" strokeWidth={1.5} aria-hidden />
            </button>

            <button
              type="button"
              onClick={onSelectUnregistered}
              className={[
                "flex h-[180px] w-full flex-row items-center justify-between rounded-[20px] border border-gray-200 bg-gray-0 px-[40px] text-left shadow-level-3 transition-all duration-200 active:scale-[0.98]",
                "hover:border-gray-100 hover:bg-neutral-30 active:border-gray-100 active:bg-neutral-30",
                highlightEntry === "unregistered" ? "ring-4 ring-gray-200 ring-offset-2 ring-offset-neutral-50" : "",
                highlightEntry === "pre-registered" ? "opacity-60" : "",
                "animate-fade-in-up",
              ].join(" ")}
              style={{ animationDelay: "180ms" }}
            >
              <div>
                <p className="text-[24px] font-bold leading-[36px] tracking-[-0.5px] text-gray-900">미등록 방문객</p>
                <p className="mt-1 text-[18px] leading-[27px] tracking-[-0.5px] text-gray-600">QR 스캔 후 방문 신청</p>
              </div>
              <img src={USERGROUP_ICON} alt="" width={84} height={84} className="shrink-0 transition-all duration-300" draggable={false} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
