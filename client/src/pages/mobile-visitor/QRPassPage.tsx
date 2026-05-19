import { useLocation } from "wouter";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { Badge } from "@/components/visitor/Badge";
import { QRDisplayCard } from "@/components/visitor/QRDisplayCard";
import { InfoCard } from "@/components/visitor/InfoCard";
import { SectionTitle } from "@/components/visitor/SectionTitle";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";

export default function MVQRPassPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader
        title="QR 패스"
        leftIcon="close"
        onBack={() => navigate("/visitor")}
        rightElement={
          <span className="border border-[#27C36F] flex items-center justify-center h-6 px-2 rounded-full text-[12px] font-medium text-[#27C36F] tracking-[-0.24px] whitespace-nowrap leading-[1.4]">
            승인 완료
          </span>
        }
      />

      {/* QR 메인 */}
      <div className="bg-white px-5 py-8 flex flex-col items-center">
        <Badge className="bg-[#F2FFFA] text-[#27C36F] mb-4">승인 완료</Badge>

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
        <div className="mt-5 w-full h-[46px] bg-[#EFF4FF] rounded-[8px] px-3 flex items-center gap-1">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 7.5C8.46167 7.50008 8.02527 7.94763 8.02515 8.49976V12.5002C8.02528 13.0524 8.46167 13.4999 9 13.5C9.5384 13.5 9.97472 13.0524 9.97485 12.5002V8.49976C9.97472 7.94758 9.5384 7.5 9 7.5ZM9 4.5C8.46159 4.50008 8.02515 4.93642 8.02515 5.47485C8.02523 6.01322 8.46164 6.44963 9 6.44971C9.53843 6.44971 9.97477 6.01326 9.97485 5.47485C9.97485 4.93638 9.53848 4.5 9 4.5Z" fill="#105AFF"/>
          </svg>
          <span className="text-[14px] text-[#105AFF] leading-[1.4] tracking-[-0.3px] flex-1">
            현장 패드에서 이 QR 코드를 인식해 주세요.
          </span>
        </div>
      </div>


      {/* 구분선 */}
      <div className="h-2 bg-[#F7F8FA]" />

      {/* 방문 정보 */}
      <div className="bg-white px-5 py-6">
        <p className="text-[15px] font-normal text-[#333333] mb-1">방문 정보</p>
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

      <div className="flex-1" />

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <SecondaryButton fullWidth variant="tertiary" onClick={() => navigate("/visitor")}>
          방문신청 취소
        </SecondaryButton>
      </div>
    </div>
  );
}
