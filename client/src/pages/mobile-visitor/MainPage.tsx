import { useLocation } from "wouter";
import { PenLine, CheckCircle2, QrCode, MapPin, ChevronRight, UserRound, ClipboardList } from "lucide-react";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

const STEPS = [
  { icon: <PenLine className="w-5 h-5" />,      label: "방문신청" },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: "담당자 승인" },
  { icon: <QrCode className="w-5 h-5" />,       label: "QR 패스" },
  { icon: <MapPin className="w-5 h-5" />,       label: "현장 방문" },
];

export default function MVMainPage() {
  const [, navigate] = useLocation();
  const { resetForm } = useVisitorForm();

  return (
    <div className="min-h-full flex flex-col bg-white">

      {/* ── 그라디언트 히어로 헤더 ── */}
      <div
        className="px-5 pt-24 pb-10 flex items-start justify-between"
        style={{ background: "linear-gradient(160deg, #D3E7FE 0%, #EFF4FF 45%, #FFFFFF 100%)" }}
      >
        {/* 타이틀 */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-medium text-[#105AFF]">더존비즈온</p>
          <h1 className="text-[26px] font-bold text-[#222222] leading-[36px]">
            방문 등록을<br />시작해 주세요.
          </h1>
          <p className="text-[13px] text-[#777777] mt-1">방문객 출입관리 시스템</p>
        </div>

        {/* 일러스트 */}
        <img
          src="/illust-badge.png"
          alt=""
          className="w-[120px] h-[120px] object-contain flex-shrink-0 -mt-2"
        />
      </div>

      {/* ── CTA 영역 ── */}
      <div className="px-5 -mt-4 flex flex-col gap-3">

        {/* Primary 대형 버튼 */}
        <button
          onClick={() => { resetForm(); navigate("/visitor/apply"); }}
          className="w-full bg-[#105AFF] rounded-2xl px-5 py-[18px] flex items-center gap-4 active:bg-[#0943C6] transition-colors"
          style={{ boxShadow: "0 4px 16px rgba(16, 90, 255, 0.3)" }}
        >
          <PenLine className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" strokeWidth={0} />
          <span className="flex-1 text-[17px] font-bold text-white text-left">방문신청하기</span>
          <ChevronRight className="w-5 h-5 text-white/60 flex-shrink-0" />
        </button>

        {/* Secondary 카드 2개 */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/visitor/inquiry")}
            className="flex-1 bg-[#F5F6FA] rounded-2xl px-4 py-5 flex items-center gap-3 active:bg-[#EDEDED] transition-colors"
          >
            <UserRound className="w-6 h-6 text-[#4A4A4A] flex-shrink-0" fill="currentColor" strokeWidth={0} />
            <span className="text-[14px] font-semibold text-[#333333]">신청 조회</span>
          </button>
          <button
            className="flex-1 bg-[#F5F6FA] rounded-2xl px-4 py-5 flex items-center gap-3 active:bg-[#EDEDED] transition-colors"
          >
            <ClipboardList className="w-6 h-6 text-[#4A4A4A] flex-shrink-0" fill="currentColor" strokeWidth={0} />
            <span className="text-[14px] font-semibold text-[#333333]">신청 내역</span>
          </button>
        </div>
      </div>

      {/* ── 신청 절차 ── */}
      <div className="px-5 mt-10">
        <p className="text-[13px] font-semibold text-[#989898] mb-5">신청 절차</p>
        <div className="flex items-start">
          {STEPS.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-11 h-11 rounded-full bg-[#F5F6FA] flex items-center justify-center text-[#777777]">
                  {step.icon}
                </div>
                <span className="text-[12px] text-[#777777] text-center whitespace-nowrap">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="h-[1px] bg-[#D3D3D3] mb-6" style={{ width: 16, flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── 하단 주소 정보 ── */}
      <div className="mt-auto bg-white px-5 pt-3 pb-10 flex flex-col items-center gap-1 border-t border-[#F5F6FA]">
        <p className="text-[11px] text-[#B4B4B4] text-center leading-[18px]">
          주소 : 강원특별자치도 춘천시 동내면 동내로 130
        </p>
        <p className="text-[11px] text-[#B4B4B4] text-center leading-[18px]">
          연락처 : 033-123-4567&nbsp;&nbsp;관리 책임자 : 홍길동
        </p>
        <p className="text-[11px] text-[#B4B4B4] text-center leading-[18px]">
          대표번호 : 1566-0000
        </p>
      </div>

    </div>
  );
}
