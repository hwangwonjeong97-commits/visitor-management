import { useLocation } from "wouter";
import { CheckCircle2, Bell, MapPin } from "lucide-react";
import { StatusBadge } from "@/components/visitor/StatusBadge";
import { PrimaryButton } from "@/components/visitor/PrimaryButton";
import { AlertBanner } from "@/components/visitor/AlertBanner";

export default function MVArrivalPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      {/* 메인 상태 영역 */}
      <div className="bg-white px-5 pt-16 pb-10 flex flex-col items-center text-center">
        <StatusBadge status="approved" className="mb-6" />

        <div className="w-20 h-20 rounded-full bg-[#F2FFFA] flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#27C36F]" />
        </div>

        <h1 className="text-[22px] font-bold text-[#222222] leading-[32px] mb-2">
          안녕하세요, 김OO님.
        </h1>
        <h2 className="text-[18px] font-bold text-[#222222] leading-[27px] mb-3">
          안내데스크에서<br />방문증을 수령해 주세요.
        </h2>
        <p className="text-[14px] text-[#777777] leading-[22px]">
          곧 담당자가 도착할 예정입니다.<br />로비에서 대기해 주세요.
        </p>
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
        <PrimaryButton fullWidth onClick={() => navigate("/visitor")}>
          홈으로
        </PrimaryButton>
      </div>
    </div>
  );
}
