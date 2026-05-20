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
      <div className="relative flex flex-col flex-1 px-5">

        {/* 타이틀 영역 */}
        <div className="flex flex-col items-center gap-3 pt-[230px] pb-10">
          <img src="/images/douzone-logo.png" alt="DOUZONE" className="h-[14px] w-auto object-contain" />
          <h1 className="text-[24px] text-[#333333] text-center tracking-[-0.48px] leading-[1.4] font-normal">
            <span className="font-bold">더존을지타워</span>{" "}방문객 예약 시스템
          </h1>
        </div>

        {/* CTA 버튼 */}
        <div className="flex gap-2">
          <button
            onClick={() => { resetForm(); navigate(`/visitor/apply?invited=${isInvited}`); }}
            className="flex-1 h-[112px] rounded-[16px] p-4 flex flex-col items-start justify-between active:opacity-90 transition-opacity"
            style={{ backgroundColor: "#5C85FF", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
          >
            <span className="text-[16px] font-bold text-white tracking-[-0.32px] leading-[1.4]">방문 신청하기</span>
            <div className="self-end p-2 rounded-[14px]" style={{ backgroundColor: "rgba(19,46,141,0.16)" }}>
              <img src="/ic_edit_fill.svg" alt="" className="w-6 h-6" />
            </div>
          </button>

          <button
            onClick={() => navigate(isInvited ? "/visitor/inquiry" : "/visitor/arrival")}
            className="flex-1 h-[112px] rounded-[16px] p-4 flex flex-col items-start justify-between active:opacity-90 transition-opacity"
            style={{ backgroundColor: "#3BBEDF", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
          >
            <span className="text-[16px] font-bold text-white tracking-[-0.32px] leading-[1.4]">신청 조회</span>
            <div className="self-end p-2 rounded-[14px]" style={{ backgroundColor: "rgba(19,46,141,0.16)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.8887 13C17.816 13 21 16.184 21 20.1113C20.9999 20.6021 20.6021 20.9999 20.1113 21H3.88867C3.39792 20.9999 3.00012 20.6021 3 20.1113C3 16.184 6.18397 13 10.1113 13H13.8887Z" fill="white"/>
              </svg>
            </div>
          </button>
        </div>

        {/* 신청 절차 + 푸터 */}
        <div className="mt-auto flex flex-col gap-[50px]">
          {/* 신청 절차 */}
          <div className="flex flex-col gap-3">
            <p className="text-[14px] font-medium text-[#333333] tracking-[-0.28px] leading-[1.4]">신청 절차</p>
            <div className="flex items-start px-4 gap-3">
              {STEPS.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-11 h-11 rounded-[16px] bg-[#F7F8FA] flex items-center justify-center p-[10px]">
                      <img src={step.iconSrc} alt={step.label} className="w-6 h-6" />
                    </div>
                    <span className="text-[12px] font-medium text-[#777777] text-center tracking-[-0.24px] leading-[1.4] whitespace-nowrap">
                      {step.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-px bg-[#E1E1E1] mb-6 mx-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 푸터 */}
          <div className="border-t border-[#EDEDED] pt-4 pb-8 flex flex-col items-center">
            <p className="text-[13px] text-[#989898] text-center tracking-[-0.26px] leading-[1.4]">
              주소 : 서울특별시 중구 을지로 29 더존을지타워
            </p>
            <p className="text-[13px] text-[#989898] text-center tracking-[-0.26px] leading-[1.4]">
              대표번호 : 1688-6000
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
