import { useLocation } from "wouter";
import { Check, CheckCircle2, Bell, MapPin } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";
import { AlertBanner } from "@/components/visitor/AlertBanner";

export default function MVArrivalPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader
        title="신청 조회"
        onBack={() => window.history.back()}
        rightElement={
          <span className="border border-[#27C36F] flex items-center justify-center h-6 px-2 rounded-full text-[12px] font-medium text-[#27C36F] tracking-[-0.24px] whitespace-nowrap leading-[1.4]">
            승인 완료
          </span>
        }
      />

      {/* 메인 상태 영역 */}
      <div className="bg-white px-5 pt-8 pb-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-[4px]">
          <div className="w-12 h-12 rounded-full bg-[#27C36F] flex items-center justify-center">
            <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[22px] font-bold text-[#333333] leading-[1.4] tracking-[-0.44px]">
              안내데스크에서<br />방문증을 수령해 주세요.
            </p>
            <p className="text-[14px] text-[#777777] leading-[1.4] tracking-[-0.28px]">
              곧 담당자가 도착할 예정입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* 처리 현황 */}
      <div className="bg-white px-5 py-6">
        <p className="text-[14px] font-bold text-[#333333] mb-3">처리 현황</p>

        <div className="flex items-center gap-3 py-3.5 border-b border-[#EDEDED]">
          <div className="w-9 h-9 rounded-full bg-[#F2FFFA] flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 h-4 text-[#27C36F]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-[#333333]">담당자에게 알림 전송됨</p>
            <p className="text-[12px] text-[#989898]">박지훈 · 방금 전</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
        </div>

        <div className="flex items-center gap-3 py-3.5">
          <div className="w-9 h-9 rounded-full bg-[#F2FFFA] flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#27C36F]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-[#333333]">방문 신청 승인 완료</p>
            <p className="text-[12px] text-[#989898]">오늘 09:45</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* 대기 안내 */}
      <div className="bg-white px-5 py-6 flex flex-col gap-3">
        <p className="text-[14px] font-bold text-[#333333]">대기 안내</p>
        <AlertBanner
          type="info"
          message="로비 1층 안내 데스크에서 방문증을 수령해 주세요."
        />
        <div className="flex items-center gap-2.5 px-4 py-3 bg-[#F5F6FA] rounded-xl">
          <MapPin className="w-4 h-4 text-[#777777] flex-shrink-0" />
          <p className="text-[13px] text-[#777777]">더존비즈온 본사 · 1층 안내 데스크</p>
        </div>
      </div>

      <div className="flex-1" />

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <SecondaryButton fullWidth size="md" variant="tertiary" onClick={() => navigate("/visitor")}>
          방문신청 취소
        </SecondaryButton>
      </div>
    </div>
  );
}
