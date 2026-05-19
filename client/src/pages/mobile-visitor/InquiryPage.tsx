import { useLocation } from "wouter";

import { QrCode } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

function formatDateTime(dt: string) {
  if (!dt) return "";
  const d = new Date(dt);
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours().toString().padStart(2, "0");
  const min = d.getMinutes().toString().padStart(2, "0");
  return `${month}월 ${date}일  ${hour}:${min}`;
}

const STATUS_MAP = {
  pending:   { label: "승인 대기", color: "#105AFF" },
  approved:  { label: "승인 완료", color: "#27C36F" },
  rejected:  { label: "거절",     color: "#FA4553" },
} as const;

export default function MVInquiryPage() {
  const [, navigate] = useLocation();
  const { form } = useVisitorForm();

  const currentStatus = "approved" as keyof typeof STATUS_MAP;
  const { label: statusLabel, color: statusColor } = STATUS_MAP[currentStatus];

  const rows = [
    { label: "신청자",   value: form.visitorName || "홍길동" },
    { label: "소속",     value: form.company     || "(주)방문회사" },
    { label: "방문 일시", value: `${formatDateTime(form.visitStart)} ~ ${formatDateTime(form.visitEnd)}` },
    { label: "담당자",   value: form.hostName && form.hostPhone ? `${form.hostName} (${form.hostPhone})` : form.hostName || "박지훈" },
    { label: "방문 장소", value: form.location  || "더존비즈온 본사 15층 회의실 A" },
    { label: "방문 목적", value: form.purpose   || "업무 미팅" },
  ];

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader title="신청 조회" onBack={() => window.history.back()} />

      <div className="flex-1 px-5 py-5 flex flex-col gap-4">
        {/* 메인 카드 */}
        <div className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>

          {/* 기관 헤더 */}
          <div className="px-5 py-4 flex items-center gap-3 ">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M0 12C0 5.37258 5.37258 0 12 0H20C26.6274 0 32 5.37258 32 12V20C32 26.6274 26.6274 32 20 32H12C5.37258 32 0 26.6274 0 20V12Z" fill="#74B4F3"/>
              <path d="M12 0.5H20C26.3513 0.5 31.5 5.64873 31.5 12V20C31.5 26.3513 26.3513 31.5 20 31.5H12C5.64873 31.5 0.5 26.3513 0.5 20V12C0.5 5.64873 5.64873 0.5 12 0.5Z" stroke="black" strokeOpacity="0.06"/>
              <path d="M11.4253 13.9375C11.736 13.9375 11.9878 14.1893 11.9878 14.5V15.625C11.9878 15.9357 11.736 16.1875 11.4253 16.1875C11.1146 16.1875 10.8628 15.9357 10.8628 15.625V14.5C10.8628 14.1893 11.1146 13.9375 11.4253 13.9375Z" fill="white"/>
              <path d="M11.4253 10.9375C11.736 10.9375 11.9878 11.1893 11.9878 11.5V12.625C11.9878 12.9357 11.736 13.1875 11.4253 13.1875C11.1146 13.1875 10.8628 12.9357 10.8628 12.625V11.5C10.8628 11.1893 11.1146 10.9375 11.4253 10.9375Z" fill="white"/>
              <path d="M18.8506 18.4375C19.1612 18.4375 19.4131 18.6893 19.4131 19V20.125C19.4131 20.4357 19.1612 20.6875 18.8506 20.6875C18.5399 20.6875 18.2881 20.4357 18.2881 20.125V19C18.2881 18.6893 18.5399 18.4375 18.8506 18.4375Z" fill="white"/>
              <path d="M18.8506 15.4375C19.1612 15.4375 19.4131 15.6893 19.4131 16V17.125C19.4131 17.4357 19.1612 17.6875 18.8506 17.6875C18.5399 17.6875 18.2881 17.4357 18.2881 17.125V16C18.2881 15.6893 18.5399 15.4375 18.8506 15.4375Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.2141 8.50293C16.383 8.56232 17.3125 9.52899 17.3125 10.7126V13.1875H21.2874C22.5093 13.1875 23.5 14.1782 23.5 15.4001V21.2874C23.5 22.5093 22.5093 23.5 21.2874 23.5H10.7126C9.49072 23.5 8.5 22.5093 8.5 21.2874V10.7126C8.5 9.49072 9.49072 8.5 10.7126 8.5H15.0999L15.2141 8.50293ZM10.7126 9.625C10.112 9.625 9.625 10.112 9.625 10.7126V21.2874C9.625 21.888 10.112 22.375 10.7126 22.375H10.8628V18.625C10.8628 18.1072 11.2825 17.6875 11.8003 17.6875H14.0503C14.5681 17.6875 14.9878 18.1072 14.9878 18.625V22.375H16.1875V10.7126C16.1875 10.1496 15.7596 9.68656 15.2112 9.63086L15.0999 9.625H10.7126ZM17.3125 22.375H21.2874C21.888 22.375 22.375 21.888 22.375 21.2874V15.4001C22.375 14.7995 21.888 14.3125 21.2874 14.3125H17.3125V22.375ZM11.9878 22.1875H13.8628V18.8125H11.9878V22.1875Z" fill="white"/>
            </svg>
            <span className="text-[16px] font-bold text-[#222222]">더존비즈온</span>
          </div>

          {/* 정보 rows */}
          {rows.map((row, i) => (
            <div key={i} className="px-5 py-[10px] flex gap-4">
              <span className="text-[14px] text-[#777777] w-[60px] flex-shrink-0 leading-[1.4]">
                {row.label}
              </span>
              <span className="text-[15px] text-[#333333] flex-1 leading-[1.4]">
                {row.value}
              </span>
            </div>
          ))}

          {/* 신청 상태 */}
          <div className="px-5 py-[10px] flex gap-4">
            <span className="text-[14px] text-[#777777] w-[60px] flex-shrink-0 leading-[1.4]">
              신청상태
            </span>
            <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4C0 1.79086 1.79086 0 4 0H25C27.2091 0 29 1.79086 29 4V16C29 18.2091 27.2091 20 25 20H4C1.79086 20 0 18.2091 0 16V4Z" fill="#F2FFFA"/>
                <path d="M14.2919 9.75391V10.9609H10.1669V11.7461C12.0243 11.8867 13.12 12.5547 13.1317 13.6562C13.12 14.8867 11.7255 15.5781 9.41687 15.5781C7.07312 15.5781 5.67859 14.8867 5.67859 13.6562C5.67859 12.5488 6.78602 11.8809 8.67859 11.7461V10.9609H4.56531V9.75391H14.2919ZM9.41687 12.8477C7.94031 12.8594 7.19031 13.1172 7.20203 13.6562C7.19031 14.1719 7.94031 14.4531 9.41687 14.4531C10.8583 14.4531 11.62 14.1719 11.6317 13.6562C11.62 13.1172 10.8583 12.8594 9.41687 12.8477ZM13.413 5.37109V6.54297H10.5184C10.7704 7.29297 11.8544 8.01367 13.8817 8.18359L13.3544 9.35547C11.3446 9.16211 9.98523 8.40039 9.41687 7.36328C8.85437 8.40039 7.51844 9.16211 5.49109 9.35547L4.99891 8.18359C6.97352 8.01367 8.06336 7.28711 8.33875 6.54297H5.45594V5.37109H13.413ZM24.4581 13.1055V14.3359H14.6964V13.1055H16.8761V10.4922C16.0499 10 15.5519 9.24414 15.5519 8.30078C15.5519 6.57812 17.2394 5.42969 19.5597 5.42969C21.8683 5.42969 23.5675 6.57812 23.5792 8.30078C23.5734 9.2207 23.087 9.9707 22.2902 10.4688V13.1055H24.4581ZM19.5597 6.61328C18.0363 6.61328 17.0284 7.22266 17.0284 8.30078C17.0284 9.34375 18.0363 9.98828 19.5597 9.98828C21.0714 9.98828 22.0909 9.34375 22.1027 8.30078C22.0909 7.22266 21.0714 6.61328 19.5597 6.61328ZM18.3527 13.1055H20.7784V11.0312C20.3976 11.1074 19.9874 11.1484 19.5597 11.1484C19.132 11.1484 18.7277 11.1133 18.3527 11.0312V13.1055Z" fill="#27C36F"/>
              </svg>
          </div>

          {/* 메모 (입력된 경우만) */}
          {form.memo && (
            <div className="px-5 py-[10px] flex gap-4">
              <span className="text-[14px] text-[#777777] w-[60px] flex-shrink-0 leading-[1.4]">
                메모
              </span>
              <span className="text-[15px] text-[#333333] flex-1 leading-[1.4]">
                {form.memo}
              </span>
            </div>
          )}

          {/* QR 패스 버튼 */}
          <div className="px-5 py-4">
            <button
              onClick={() => navigate("/visitor/qr-pass")}
              className="w-full h-12 rounded-xl border border-[#EDEDED] flex items-center justify-center gap-2 bg-white active:bg-[#F5F6FA] transition-colors"
            >
              <QrCode className="w-[18px] h-[18px] text-[#333333]" />
              <span className="text-[14px] font-semibold text-[#333333]">QR 패스 확인</span>
            </button>
          </div>
        </div>
      </div>

      {/* 하단 버튼 바 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <SecondaryButton fullWidth size="md" variant="tertiary" onClick={() => navigate("/visitor")}>
          신청취소
        </SecondaryButton>
      </div>
    </div>
  );
}
