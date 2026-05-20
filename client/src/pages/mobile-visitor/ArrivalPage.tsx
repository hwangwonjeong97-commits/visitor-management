import { useShowcaseMode } from "@/contexts/ShowcaseModeContext";
import Lottie from "lottie-react";
import { useLocation } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { SectionTitle } from "@/components/visitor/SectionTitle";
import successAnimation from "@/assets/success-animation.json";

export default function MVArrivalPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-white">
      <ScreenHeader
        title="신청 조회"
        onBack={() => window.history.back()}
        rightElement={
          <span className="border border-[#27C36F] flex items-center justify-center h-6 px-2 rounded-full text-[12px] font-medium text-[#27C36F] tracking-[-0.24px] whitespace-nowrap leading-[1.4]">
            승인 완료
          </span>
        }
      />

      {/* 메인 상태 영역 */}
      <div className="bg-white px-5 pt-8 pb-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-[8px]">
          <Lottie animationData={successAnimation} loop className="w-[64px] h-[64px]" />
          <div className="flex flex-col gap-[8px] items-center">
            <p className="text-[22px] text-[#333333] leading-[1.4] tracking-[-0.44px]">
              <span className="font-bold">안내데스크</span>에서<br />
              <span className="font-bold">방문증을 수령</span>해 주세요.
            </p>
            <p className="text-[14px] text-[#777777] leading-[1.4] tracking-[-0.28px]">
              곧 담당자가 도착할 예정입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 처리 현황 */}
      <div className="bg-white px-5 pt-0 pb-5">
        <SectionTitle className="mb-3">처리 현황</SectionTitle>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 h-12">
            <div className="w-8 h-8 rounded-[12px] bg-[#F0F2F7] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.5C15 20.8807 13.6569 22 12 22C10.3431 22 9 20.8807 9 19.5C9 18.1193 10.3431 17 12 17C13.6569 17 15 18.1193 15 19.5Z" fill="#EC811C"/>
                <path d="M12.0029 2C12.5552 2 13.0059 2.44772 13.0059 3V3.32031C16.4988 3.80814 19.1765 6.81707 19.1875 10.4307V14.2783L20.3945 16.0898L20.3955 16.0918C21.0313 17.0542 20.7962 18.3748 19.8018 19.0273L19.8027 19.0283C19.4634 19.2546 19.0528 19.3896 18.6289 19.3896L5.37402 19.3682C4.21079 19.3674 3.25024 18.4311 3.25 17.2529C3.25 16.8134 3.3871 16.4193 3.60156 16.082L3.61035 16.0684L4.82812 14.2402V10.4336C4.82812 6.80713 7.51413 3.82131 11 3.32422V3C11 2.44772 11.4506 2 12.0029 2Z" fill="#FFBC4F"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-0">
              <p className="text-[15px] font-semibold text-[#333333] leading-[1.4]">담당자에게 알림 전송됨</p>
              <p className="text-[13px] text-[#989898] leading-[1.4]">박지훈 · 방금 전</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
          </div>
          <div className="flex items-center gap-3 h-12">
            <div className="w-8 h-8 rounded-[12px] bg-[#F0F2F7] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8887 13C17.1304 13 19.8635 15.1697 20.7197 18.1357C20.4962 18.0494 20.254 18 20 18C18.8954 18 18 18.8954 18 20C18 20.3646 18.0991 20.7056 18.2695 21H3.88867C3.39792 20.9999 3.00012 20.6021 3 20.1113C3 16.184 6.18397 13 10.1113 13H13.8887Z" fill="#8891FF"/>
                <path d="M12 2C14.4853 2 16.5 4.01472 16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2Z" fill="#8891FF"/>
                <path d="M17.25 22C19.8734 22 22 19.8734 22 17.25C22 14.6266 19.8734 12.5 17.25 12.5C14.6266 12.5 12.5 14.6266 12.5 17.25C12.5 19.8734 14.6266 22 17.25 22Z" fill="#4450DF"/>
                <path d="M19.2442 15.2196C19.5371 14.9268 20.0119 14.9268 20.3048 15.2196C20.5976 15.5125 20.5976 15.9873 20.3048 16.2802L17.1651 19.4198C16.8723 19.7126 16.3975 19.7126 16.1046 19.4198C15.8117 19.127 15.8118 18.6522 16.1046 18.3593L19.2442 15.2196Z" fill="white"/>
                <path d="M14.5197 16.7744C14.8126 16.4815 15.2873 16.4815 15.5802 16.7744L17.1661 18.3593C17.459 18.6522 17.459 19.1279 17.1661 19.4208C16.8732 19.7137 16.3975 19.7137 16.1046 19.4208L14.5197 17.8349C14.2268 17.542 14.2268 17.0673 14.5197 16.7744Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-0">
              <p className="text-[15px] font-semibold text-[#333333] leading-[1.4]">방문 신청 승인 완료</p>
              <p className="text-[13px] text-[#989898] leading-[1.4]">오늘 09:45</p>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="h-px bg-[#EDEDED] mx-5" />

      {/* 대기 안내 */}
      <div className="bg-white px-5 pt-5 pb-5 flex flex-col gap-4">
        <SectionTitle>대기 안내</SectionTitle>
<div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <p className="text-[14px] text-[#777777] tracking-[-0.28px] leading-[1.4] w-16 flex-shrink-0">수령위치</p>
            <p className="text-[15px] text-[#333333] tracking-[-0.3px] leading-[1.4]">더존을지타워 · 1층 안내 데스크</p>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#EDEDED] mx-5" />

      {/* 차량 이용 안내 */}
      <div className="bg-white px-5 pt-5 pb-6 flex flex-col gap-4" style={{ animationDelay: '0.6s' }}>
        <div>
          <SectionTitle>차량 이용 안내</SectionTitle>
          <p className="text-[14px] text-[#777777] leading-[1.4] tracking-[-0.28px] mt-1">
            차량 이용 시 주차권을 발급해 주세요.
          </p>
        </div>
        <button
          type="button"
          className="w-full inline-flex items-center justify-center rounded-[10px] border border-[#E1E1E1] text-[#333333] bg-white active:bg-[#F7F8FA] font-normal text-[14px] transition-colors"
          style={{ height: 44 }}
        >
          주차권 등록
        </button>
      </div>

      <div className="flex-1" />
    </div>
  );
}
