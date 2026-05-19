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
        <div className="w-14 h-14 rounded-[20px] bg-[#E4EEFA] flex items-center justify-center mb-5">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0007 3.33337C29.2054 3.33337 36.6673 10.7953 36.6673 20C36.6673 29.2048 29.2054 36.6667 20.0007 36.6667C10.7959 36.6667 3.33398 29.2048 3.33398 20C3.33398 10.7953 10.7959 3.33337 20.0007 3.33337ZM20.0007 12.1159C19.3103 12.1159 18.7507 12.6756 18.7507 13.3659V20.0017C18.7509 20.3329 18.8826 20.6512 19.1169 20.8855L24.9502 26.7188C25.4383 27.2064 26.2297 27.2064 26.7178 26.7188C27.2059 26.2306 27.2059 25.4377 26.7178 24.9496L21.2507 19.4825V13.3659C21.2507 12.6756 20.691 12.1159 20.0007 12.1159Z" fill="#105AFF"/>
          </svg>
        </div>
        <h2 className="text-[22px] font-bold text-[#222222] leading-[1.4] mb-2">
          방문 신청이 접수되었습니다.
        </h2>
        <p className="text-[14px] text-[#777777] leading-[1.4]">
          승인이 완료되면 카카오 알림톡으로 QR 패스가 발송됩니다.
        </p>
        <div className="mt-5 flex items-center gap-2 px-4 py-2.5 bg-[#F5F6FA] rounded-full">
          <img src="/kakaotalk-icon.png" alt="카카오톡" className="w-4 h-4 flex-shrink-0" />
          <span className="text-[12px] text-[#777777]">카카오 알림톡으로 QR패스가 발송됩니다.</span>
        </div>
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

      <div className="flex-1" />

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
