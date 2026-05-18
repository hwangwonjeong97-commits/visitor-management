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

  const currentStatus = "pending" as keyof typeof STATUS_MAP;
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
          <div className="px-5 py-4 flex items-center gap-3 border-b border-[#F5F6FA]">
            <div className="w-8 h-8 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0">
              <span className="text-[13px] font-bold text-[#105AFF]">더</span>
            </div>
            <span className="text-[16px] font-bold text-[#222222]">더존비즈온</span>
          </div>

          {/* 정보 rows */}
          {rows.map((row, i) => (
            <div key={i} className="px-5 py-3.5 flex gap-4 border-b border-[#F5F6FA]">
              <span className="text-[13px] text-[#989898] w-[60px] flex-shrink-0 leading-[21px]">
                {row.label}
              </span>
              <span className="text-[13px] text-[#333333] flex-1 leading-[21px]">
                {row.value}
              </span>
            </div>
          ))}

          {/* 신청 상태 */}
          <div className="px-5 py-3.5 flex gap-4 border-b border-[#F5F6FA]">
            <span className="text-[13px] text-[#989898] w-[60px] flex-shrink-0 leading-[21px]">
              신청상태
            </span>
            <span className="text-[13px] font-semibold leading-[21px]" style={{ color: statusColor }}>
              {statusLabel}
            </span>
          </div>

          {/* 메모 (입력된 경우만) */}
          {form.memo && (
            <div className="px-5 py-3.5 flex gap-4 border-b border-[#F5F6FA]">
              <span className="text-[13px] text-[#989898] w-[60px] flex-shrink-0 leading-[21px]">
                메모
              </span>
              <span className="text-[13px] text-[#333333] flex-1 leading-[21px]">
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
          방문신청 취소
        </SecondaryButton>
      </div>
    </div>
  );
}
