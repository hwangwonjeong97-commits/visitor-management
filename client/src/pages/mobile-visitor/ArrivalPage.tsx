import { useLocation } from "wouter";
import { CheckCircle2, Bell, MapPin } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { SectionTitle } from "@/components/visitor/SectionTitle";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";

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
        <div className="flex flex-col items-center gap-[4px]">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM33.3926 17.5645C32.5997 16.7956 31.3334 16.8147 30.5645 17.6074L21.332 27.127L17.4355 23.1074C16.6666 22.3147 15.4003 22.2956 14.6074 23.0645C13.8147 23.8334 13.7956 25.0997 14.5645 25.8926L19.8984 31.3926C20.2751 31.7806 20.7932 32 21.334 32C21.8748 31.9998 22.393 31.7808 22.7695 31.3926L33.4355 20.3926C34.2044 19.5997 34.1852 18.3334 33.3926 17.5645Z" fill="#27C36F"/>
          </svg>
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

      {/* 구분선 */}
      <div className="h-px bg-[#EDEDED]" />

      {/* 처리 현황 */}
      <div className="bg-white px-5 py-6">
        <SectionTitle className="mb-3">처리 현황</SectionTitle>

        <div className="flex items-center gap-3 py-3.5 border-b border-[#EDEDED]">
          <div className="w-9 h-9 rounded-full bg-[#F2FFFA] flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 h-4 text-[#27C36F]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-[#333333]">담당자에게 알림 전송됨</p>
            <p className="text-[12px] text-[#989898]">박지훈 · 방금 전</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
        </div>

        <div className="flex items-center gap-3 py-3.5">
          <div className="w-9 h-9 rounded-full bg-[#F2FFFA] flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-[#27C36F]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-[#333333]">방문 신청 승인 완료</p>
            <p className="text-[12px] text-[#989898]">오늘 09:45</p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-[#27C36F] flex-shrink-0" />
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-px bg-[#EDEDED]" />

      {/* 대기 안내 */}
      <div className="bg-white px-5 py-6 flex flex-col gap-3">
        <SectionTitle>대기 안내</SectionTitle>
        <div className="w-full h-[46px] bg-[#EFF4FF] rounded-[8px] px-3 flex items-center gap-1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 7.5C8.46167 7.50008 8.02527 7.94763 8.02515 8.49976V12.5002C8.02528 13.0524 8.46167 13.4999 9 13.5C9.5384 13.5 9.97472 13.0524 9.97485 12.5002V8.49976C9.97472 7.94758 9.5384 7.5 9 7.5ZM9 4.5C8.46159 4.50008 8.02515 4.93642 8.02515 5.47485C8.02523 6.01322 8.46164 6.44963 9 6.44971C9.53843 6.44971 9.97477 6.01326 9.97485 5.47485C9.97485 4.93638 9.53848 4.5 9 4.5Z" fill="#105AFF"/>
          </svg>
          <span className="text-[14px] text-[#105AFF] leading-[1.4] tracking-[-0.3px] flex-1">
            로비 1층 안내 데스크에서 방문증을 수령해 주세요.
          </span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-3 bg-[#F5F6FA] rounded-xl">
          <MapPin className="w-4 h-4 text-[#777777] flex-shrink-0" />
          <p className="text-[13px] text-[#777777]">더존비즈온 본사 · 1층 안내 데스크</p>
        </div>
      </div>

      <div className="flex-1" />

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <SecondaryButton fullWidth size="md" variant="tertiary" onClick={() => navigate("/visitor")}>
          신청취소
        </SecondaryButton>
      </div>
    </div>
  );
}
