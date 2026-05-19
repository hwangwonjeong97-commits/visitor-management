import { useLocation } from "wouter";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

const STEPS = [
  { icon: <img src="/ic_edit.svg"          alt="방문신청" className="w-5 h-5" />, label: "방문신청" },
  { icon: <img src="/ic_check_circle.svg"  alt="내부승인" className="w-5 h-5" />, label: "내부승인" },
  { icon: <img src="/ic_document_check.svg" alt="방문수속" className="w-5 h-5" />, label: "방문수속" },
  { icon: <img src="/ic_location.svg"      alt="방문완료" className="w-5 h-5" />, label: "방문완료" },
];

export default function MVMainPage() {
  const [, navigate] = useLocation();
  const { resetForm } = useVisitorForm();

  return (
    <div className="min-h-full flex flex-col bg-white">

      {/* ── 히어로 헤더 (가운데 정렬) ── */}
      <div className="px-5 pt-[200px] pb-10 flex flex-col items-center gap-5">
        {/* 더존을지타워 로고 */}
        <img src="/douzone-logo.svg" alt="더존을지타워" className="h-[20px] w-auto" />

        {/* 타이틀 */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[24px] font-bold text-[#222222] text-center">더존을지타워 방문자 예약 시스템</h1>
        </div>
      </div>

      {/* ── CTA 영역 ── */}
      <div className="px-5 flex gap-3">

        {/* 방문 신청하기 */}
        <button
          onClick={() => { resetForm(); navigate("/visitor/apply"); }}
          className="flex-1 h-[84px] bg-[#105AFF] rounded-2xl px-4 flex flex-col items-center justify-center gap-2 active:bg-[#0943C6] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3682 11.8596L9.35938 20.8527C9.24791 20.9642 9.09646 21.0098 8.95117 20.9933L3.49707 21.0002C3.2227 21.0001 3.00027 20.7771 3 20.5021V15.0226C3.00005 15.0147 3.00156 15.0068 3.00488 15.0002C2.99449 14.8606 3.04118 14.7173 3.14746 14.6105L12.1006 5.63592L18.3682 11.8596Z" fill="white"/>
            <path d="M13.6406 4.09393C15.0573 2.67439 17.5961 2.6167 19.0127 4.03631L19.9971 5.02362C21.3315 6.36148 21.3558 8.87258 19.9395 10.2922L19.0732 11.1555L12.8037 4.93182L13.6406 4.09393Z" fill="white"/>
          </svg>
          <span className="text-[16px] font-bold text-white">방문 신청하기</span>
        </button>

        {/* 신청 조회 */}
        <button
          onClick={() => navigate("/visitor/inquiry")}
          className="flex-1 h-[84px] bg-[#F5F6FA] rounded-2xl px-4 flex flex-col items-center justify-center gap-2 active:bg-[#EDEDED] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2Z" fill="#949DAF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13.8887 13C17.816 13 21 16.184 21 20.1113C20.9999 20.6021 20.6021 20.9999 20.1113 21H3.88867C3.39792 20.9999 3.00012 20.6021 3 20.1113C3 16.184 6.18397 13 10.1113 13H13.8887Z" fill="#949DAF"/>
          </svg>
          <span className="text-[16px] font-semibold text-[#333333]">신청 조회</span>
        </button>
      </div>

      {/* ── 신청 절차 ── */}
      <div className="px-5 mt-14">
        <p className="text-[13px] font-semibold text-[#989898] mb-5">신청 절차</p>
        <div className="flex items-start">
          {STEPS.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 flex-1">
                <div className="w-11 h-11 rounded-[16px] bg-[#F5F6FA] flex items-center justify-center text-[#777777]">
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
      <div className="mt-auto bg-white px-5 pt-3 pb-8 flex flex-col items-center gap-0.5">
        <p className="text-[11px] text-[#B4B4B4] text-center leading-[1.3]">
          주소 : 서울특별시 중구 을지로 29 더존을지타워
        </p>
        <p className="text-[11px] text-[#B4B4B4] text-center leading-[1.3]">
          대표번호 : 1688-6000
        </p>
      </div>

    </div>
  );
}
