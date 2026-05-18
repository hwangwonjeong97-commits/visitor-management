import { useLocation } from "wouter";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { StatusBadge } from "@/components/visitor/StatusBadge";
import { QRDisplayCard } from "@/components/visitor/QRDisplayCard";
import { InfoCard } from "@/components/visitor/InfoCard";
import { SectionTitle } from "@/components/visitor/SectionTitle";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";

export default function MVQRPassPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader title="QR 패스" leftIcon="close" onBack={() => navigate("/visitor")} />

      {/* QR 메인 */}
      <div className="bg-white px-5 py-8 flex flex-col items-center">
        <StatusBadge status="approved" className="mb-4" />

        <h2 className="text-[18px] font-bold text-[#222222] leading-[27px] mb-6 text-center">
          방문 QR 패스가 발급되었습니다.
        </h2>

        <QRDisplayCard
          name="홍길동"
          company="(주)방문회사"
          validUntil="2026년 5월 20일 18:00까지"
          size="md"
        />

        {/* 사용 안내 */}
        <div className="mt-5 w-full flex items-center gap-3 px-4 py-3.5 bg-[#EFF4FF] rounded-xl">
          <span className="text-[20px]">📱</span>
          <p className="text-[13px] text-[#105AFF] leading-[19px] font-medium">
            현장 패드에서 이 QR 코드를 인식해 주세요.
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* 방문 정보 */}
      <div className="bg-white px-5 py-6">
        <SectionTitle className="mb-4">방문 정보</SectionTitle>
        <InfoCard
          rows={[
            { label: "방문자명", value: "홍길동" },
            { label: "소속", value: "(주)방문회사" },
            { label: "방문 일시", value: "2026.05.20  10:00 ~ 18:00" },
            { label: "담당자", value: "박지훈 (010-1234-5678)" },
            { label: "방문 장소", value: "본사 15층 회의실 A" },
            { label: "방문 목적", value: "업무 미팅" },
          ]}
        />
      </div>

      {/* 하단 여백 */}
      <div className="h-20" />

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <SecondaryButton fullWidth variant="tertiary" onClick={() => navigate("/visitor")}>
          방문신청 취소
        </SecondaryButton>
      </div>
    </div>
  );
}
