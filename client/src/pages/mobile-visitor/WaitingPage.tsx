import { useLocation } from "wouter";
import { Clock, MessageCircle } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { StatusBadge } from "@/components/visitor/StatusBadge";
import { VisitorSummaryCard } from "@/components/visitor/VisitorSummaryCard";
import { PrimaryButton } from "@/components/visitor/PrimaryButton";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";
import { SectionTitle } from "@/components/visitor/SectionTitle";

export default function MVWaitingPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader
        title="신청 완료"
        leftIcon="close"
        onBack={() => navigate("/visitor")}
        rightElement={
          <button
            onClick={() => navigate("/visitor/apply?mode=edit")}
            className="text-[14px] font-medium text-[#105AFF] px-2 py-1 rounded-lg active:bg-[#EFF4FF]"
          >
            수정
          </button>
        }
      />

      {/* 상태 영역 */}
      <div className="bg-white px-5 py-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#E4EEFA] flex items-center justify-center mb-5">
          <Clock className="w-8 h-8 text-[#105AFF]" />
        </div>
        <StatusBadge status="pending" className="mb-4" />
        <h2 className="text-[20px] font-bold text-[#222222] leading-[30px] mb-2">
          잠시만 기다려 주세요.
        </h2>
        <p className="text-[14px] text-[#777777] leading-[22px]">
          승인이 완료되면 알림톡으로 알려드립니다.
        </p>
        <div className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-[#F5F6FA] rounded-full">
          <MessageCircle className="w-4 h-4 text-[#FFA000] flex-shrink-0" />
          <span className="text-[12px] text-[#777777]">카카오 알림톡으로 발송됩니다</span>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* 신청 요약 */}
      <div className="bg-white px-5 py-6">
        <SectionTitle className="mb-4">신청 정보</SectionTitle>
        <VisitorSummaryCard
          visitDate="2026년 5월 20일 10:00"
          visitEndDate="18:00"
          host="박지훈"
          hostContact="010-1234-5678"
          location="더존비즈온 본사 15층 회의실 A"
          purpose="업무 미팅"
        />
      </div>

      {/* 하단 여백 */}
      <div className="h-20" />

      {/* 하단 버튼 바 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <div className="flex gap-2.5">
          <SecondaryButton size="md" fullWidth variant="tertiary" onClick={() => navigate("/visitor")}>신청취소</SecondaryButton>
          <PrimaryButton size="md" fullWidth onClick={() => navigate("/visitor/inquiry")}>신청조회</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
