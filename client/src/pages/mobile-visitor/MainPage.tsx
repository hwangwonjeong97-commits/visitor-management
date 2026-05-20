import { useLocation } from "wouter";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

const STEPS = [
  { iconSrc: "/ic_edit_flat.svg",        label: "방문신청" },
  { iconSrc: "/ic_check_circle.svg",     label: "내부승인" },
  { iconSrc: "/ic_doc_result_flat.svg",  label: "방문수속" },
  { iconSrc: "/ic_location_fill.svg",    label: "방문완료" },
];

export default function MVMainPage({ isInvited = true }: { isInvited?: boolean }) {
  const [, navigate] = useLocation();
  const { resetForm } = useVisitorForm();

  return (
    <div
      className="min-h-full flex flex-col bg-white relative overflow-hidden"
      style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      {/* 컨텐츠 */}
      <div className="relative flex flex-col flex-1 px-5" style={{ animation: 'none' }}>

        {/* 타이틀 영역 */}
        <div className="flex flex-col items-center gap-10 pt-[209px] pb-0 animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <div className="flex flex-col items-center text-center">
            <p className="text-[26px] font-normal text-[#333333] tracking-[-0.52px] leading-[1.4]">더존을지타워</p>
            <p className="text-[26px] font-bold text-[#333333] tracking-[-0.52px] leading-[1.4]">방문객 예약 시스템</p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex gap-2 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={() => { resetForm(); navigate(`/visitor/apply?invited=${isInvited}`); }}
              className="flex-1 h-[120px] rounded-[16px] p-[18px] flex flex-col items-start justify-between active:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(123deg, #6E92FF 1.86%, #4F7BFF 100%)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
            >
              <span className="text-[18px] font-bold text-white tracking-[-0.36px] leading-[1.4]">방문 신청</span>
              <div className="self-end p-2 rounded-[14px]" style={{ backgroundColor: "rgba(19,46,141,0.16)" }}>
                <img src="/ic_edit_fill.svg" alt="" className="w-6 h-6" />
              </div>
            </button>

            <button
              onClick={() => navigate(isInvited ? "/visitor/inquiry" : "/visitor/arrival")}
              className="flex-1 h-[120px] rounded-[16px] p-[18px] flex flex-col items-start justify-between active:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(122deg, #4BCAEB 2%, #22B2D6 100%)", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
            >
              <span className="text-[18px] font-bold text-white tracking-[-0.36px] leading-[1.4]">신청 조회</span>
              <div className="self-end p-2 rounded-[14px]" style={{ backgroundColor: "rgba(19,46,141,0.16)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.8887 13C17.816 13 21 16.184 21 20.1113C20.9999 20.6021 20.6021 20.9999 20.1113 21H3.88867C3.39792 20.9999 3.00012 20.6021 3 20.1113C3 16.184 6.18397 13 10.1113 13H13.8887Z" fill="white"/>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 신청 절차 + 푸터 */}
        <div className="mt-auto flex flex-col gap-[40px] animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          {/* 방문 신청 절차 */}
          <div className="flex flex-col gap-[14px]">
            <p className="text-[14px] font-medium text-[#333333] tracking-[-0.28px] leading-[1.4]">방문 신청 절차</p>
            <div className="flex items-start">
              {STEPS.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-11 h-11 rounded-[16px] flex items-center justify-center p-[10px]"
                      style={{ backgroundColor: "rgba(45,100,209,0.05)" }}>
                      <img src={step.iconSrc} alt={step.label} className="w-6 h-6" />
                    </div>
                    <span className="text-[13px] font-medium text-[#777777] text-center tracking-[-0.26px] leading-[1.4] whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-5 h-px bg-[#E1E1E1] mb-6 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 푸터 */}
          <div className="border-t border-[#EDEDED] pt-6 pb-4 flex items-center justify-center gap-2">
            <img src="/images/douzone-logo.png" alt="DOUZONE" className="h-[10px] w-auto object-contain" />
            <div className="flex items-center" style={{ gap: 4 }}>
              <p className="text-[12px] text-[#989898] tracking-[-0.24px] leading-[1.4] whitespace-nowrap">
                서울특별시 중구 을지로 29 더존을지타워
              </p>
              <div className="w-px h-[10px] bg-[#E1E1E1]" />
              <p className="text-[12px] text-[#989898] tracking-[-0.24px] leading-[1.4] whitespace-nowrap">
                1688-6000
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
