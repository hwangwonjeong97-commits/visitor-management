import { useLocation } from "wouter";
import { Pencil } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { InfoCard } from "@/components/visitor/InfoCard";
import { PrimaryButton } from "@/components/visitor/PrimaryButton";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";

export default function MVWaitingPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-white">
      <ScreenHeader
        title="신청 완료"
        leftIcon="close"
        onBack={() => navigate("/visitor")}
        rightElement={
          <span className="border border-[#949DAF] flex items-center justify-center h-6 px-2 rounded-full text-[12px] font-medium text-[#949DAF] tracking-[-0.24px] whitespace-nowrap leading-[1.4]">
            승인 대기
          </span>
        }
      />

      {/* 상태 영역 */}
      <div className="bg-white px-5 pt-10 pb-0 flex flex-col items-center text-center">
        <img src="/idcard_time.png" alt="신청 대기" className="w-[72px] h-[72px] object-contain mb-4" />
        <h2 className="text-[22px] font-normal text-[#222222] leading-[1.4] mb-2">
          <span className="font-bold">방문 신청이 접수</span>되었습니다.
        </h2>
        <p className="text-[14px] text-[#777777] leading-[1.4]">
          승인이 완료되면 카카오 알림톡으로 QR 패스가 발송됩니다.
        </p>
      </div>


      {/* 신청 요약 */}
      <div className="bg-white px-5 pt-9 pb-6">
        <div className="flex items-center h-9 mb-0.5">
          <p className="flex-1 text-[15px] font-normal text-[#333333]">신청 정보</p>
          <button onClick={() => navigate("/visitor/apply?mode=edit")} className="active:opacity-60">
            <Pencil className="w-5 h-5 text-[#989898]" strokeWidth={1.5} />
          </button>
        </div>
        <InfoCard
          rows={[
            { label: "방문 일시", value: "2026년 5월 20일 10:00 ~ 18:00" },
            { label: "담당자",   value: "박지훈 (010-1234-5678)" },
            { label: "방문 장소", value: "더존비즈온 본사 15층 회의실 A" },
            { label: "방문 목적", value: "업무 미팅" },
          ]}
        />
      </div>

      <div className="no-stagger flex-1" />

      {/* 하단 버튼 바 */}
      <div className="no-stagger sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <div className="flex gap-2.5">
          <SecondaryButton size="md" fullWidth variant="tertiary" onClick={() => navigate("/visitor")}>신청취소</SecondaryButton>
          <PrimaryButton size="md" fullWidth onClick={() => navigate("/visitor/inquiry")}>신청조회</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
