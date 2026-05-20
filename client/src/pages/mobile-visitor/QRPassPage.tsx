import { useShowcaseMode } from "@/contexts/ShowcaseModeContext";
import { useLocation } from "wouter";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { QRDisplayCard } from "@/components/visitor/QRDisplayCard";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

export default function MVQRPassPage() {
  const [, navigate] = useLocation();
  const { form } = useVisitorForm();
  const isShowcase = useShowcaseMode();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader title="신청 조회" onBack={() => { if (!isShowcase) navigate("/visitor/inquiry"); }} />

      <div className="flex-1 px-5 pt-8 pb-5">
        <div
          className="bg-white rounded-2xl flex flex-col items-center px-6 pt-6 pb-6"
          style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)", minHeight: 520 }}
        >
          {/* 제목 / 서브문구 */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-[22px] font-bold text-[#222222] leading-[1.4]">방문 QR 패스</p>
            <p className="text-[14px] text-[#999999] leading-[1.4]">현장 패드에서 아래 QR 코드를 인식해 주세요.</p>
          </div>

          {/* QR 카드 */}
          <QRDisplayCard
            name={form.visitorName || "홍길동"}
            company={form.company || "(주)방문회사"}
            validUntil="2026년 5월 20일 18:00까지"
            size="sm"
            className="mt-6"
          />

          {/* 신청 정보 보기 */}
          <div className="mt-auto w-full">
            <button
              onClick={() => { if (!isShowcase) navigate("/visitor/inquiry"); }}
              className="w-full h-12 rounded-[8px] bg-white border border-[#e1e1e1] flex items-center justify-center gap-[4px] active:opacity-70 transition-opacity"
            >
              <span className="text-[15px] font-normal text-[#333333] tracking-[-0.3px] leading-[1.4]">신청 정보 보기</span>
            </button>
          </div>
        </div>
      </div>
      {/* 하단 텍스트 버튼 */}
      <div className="sticky bottom-0 z-10 px-5 py-4 flex items-center justify-center">
        <button
          onClick={() => { if (!isShowcase) navigate("/visitor"); }}
          className="text-[13px] font-normal text-[#777777] underline leading-[1.4] tracking-[-0.26px] active:opacity-60 transition-opacity"
        >
          신청취소
        </button>
      </div>
    </div>
  );
}
