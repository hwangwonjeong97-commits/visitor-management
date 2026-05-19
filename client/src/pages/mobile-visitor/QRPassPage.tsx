import { useLocation } from "wouter";
import { X } from "lucide-react";
import { QRDisplayCard } from "@/components/visitor/QRDisplayCard";

export default function MVQRPassPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col relative bg-[#14171F]">

      {/* 닫기 버튼 */}
      <button
        onClick={() => navigate("/visitor")}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* 상단 dim 여백 */}
      <div className="flex-1" style={{ minHeight: 80 }} />

      {/* 흰 카드 (하단 팝업 스타일) */}
      <div className="bg-white rounded-t-[32px] px-6 pt-8 pb-10 flex flex-col items-center gap-5">

        {/* 핸들 바 */}
        <div className="w-10 h-1 rounded-full bg-[#E0E0E0] -mt-1 mb-1" />

        {/* 타이틀 */}
        <div className="text-center">
          <h2 className="text-[22px] font-normal text-[#222222] leading-[1.4]">
            <span className="font-bold">방문 QR 패스</span>가 발급되었습니다.
          </h2>
          <p className="text-[13px] text-[#999999] mt-1 leading-[1.4]">
            현장 패드에서 아래 QR 코드를 인식해 주세요.
          </p>
        </div>

        {/* 승인 완료 뱃지 */}
        <span className="border border-[#27C36F] flex items-center justify-center h-6 px-3 rounded-full text-[12px] font-medium text-[#27C36F] tracking-[-0.24px]">
          승인 완료
        </span>

        {/* QR 코드 */}
        <QRDisplayCard
          name="홍길동"
          company="(주)방문회사"
          validUntil="2026년 5월 20일 18:00까지"
          size="md"
        />
      </div>
    </div>
  );
}
