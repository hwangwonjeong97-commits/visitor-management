import { useState } from "react";
import { useLocation } from "wouter";
import { QrCode } from "lucide-react";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { QRDisplayCard } from "@/components/visitor/QRDisplayCard";
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
  pending:  { label: "승인 대기", color: "#105AFF" },
  approved: { label: "승인 완료", color: "#27C36F" },
  rejected: { label: "거절",     color: "#FA4553" },
} as const;

const CARD_HEIGHT = 520;

export default function MVInquiryPage() {
  const [, navigate] = useLocation();
  const { form } = useVisitorForm();
  const [isFlipped, setIsFlipped] = useState(false);

  const currentStatus = "approved" as keyof typeof STATUS_MAP;
  const { label: statusLabel } = STATUS_MAP[currentStatus];

  const rows = [
    { label: "이름",        value: form.visitorName || "홍길동" },
    { label: "소속(회사명)", value: form.company    || "(주)방문회사" },
    { label: "방문 일시",   value: form.visitStart && form.visitEnd ? `${formatDateTime(form.visitStart)} ~ ${formatDateTime(form.visitEnd)}` : "" },
    { label: "담당자 이름",  value: form.hostName   || "박지훈" },
    { label: "담당자 연락처", value: form.hostPhone  || "010-1234-5678" },
    { label: "방문 장소",   value: form.location    || "더존을지타워 15층 회의실 A" },
    { label: "방문 목적",   value: form.purpose     || "업무 미팅" },
  ];

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader title="신청 조회" onBack={() => window.history.back()} />

      <div className="flex-1 px-5 pt-8 pb-5 flex flex-col gap-4">

        {/* ── Flip Card ── */}
        <div style={{ perspective: "1200px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: `${CARD_HEIGHT}px`,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >

            {/* ── 앞면: 방문 신청 정보 ── */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "white",
              }}
              className="flex flex-col"
            >
              <div className="px-5 pt-8 pb-2">
                <p className="text-[16px] font-bold text-[#222222]">방문 신청 정보</p>
              </div>

              {rows.map((row, i) => (
                <div key={i} className="px-5 py-[10px] flex gap-4 items-center">
                  <span className="text-[14px] text-[#777777] w-[80px] flex-shrink-0 leading-[1.4]">
                    {row.label}
                  </span>
                  <span className="text-[15px] text-[#333333] flex-1 leading-[1.4]">
                    {row.value}
                  </span>
                </div>
              ))}

              <div className="px-5 py-[10px] flex gap-4 items-center">
                <span className="text-[14px] text-[#777777] w-[80px] flex-shrink-0 leading-[1.4]">
                  신청상태
                </span>
                <span
                  className="inline-flex items-center px-1 h-6 rounded-[4px] text-[13px] font-semibold"
                  style={{ backgroundColor: "#F2FFFA", color: "#27C36F" }}
                >
                  {statusLabel}
                </span>
              </div>

              <div className="mt-auto px-5 pb-6">
                <button
                  onClick={() => setIsFlipped(true)}
                  className="w-full h-12 rounded-[8px] bg-[#105AFF] flex items-center justify-center gap-[4px] active:bg-[#0943C6] transition-colors"
                >
                  <QrCode className="w-[18px] h-[18px] text-white" />
                  <span className="text-[15px] font-bold text-white tracking-[-0.3px]">QR 패스 확인</span>
                </button>
              </div>
            </div>

            {/* ── 뒷면: QR 패스 ── */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "white",
              }}
              className="flex flex-col items-center px-6 pt-6 pb-6"
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

              {/* 신청 정보 보기 - tertiary 버튼, 하단 고정 */}
              <div className="mt-auto w-full">
                <button
                  onClick={() => setIsFlipped(false)}
                  className="w-full h-12 rounded-[8px] bg-white border border-[#e1e1e1] flex items-center justify-center gap-[4px] active:opacity-70 transition-opacity"
                >
                  <span className="text-[15px] font-normal text-[#333333] tracking-[-0.3px] leading-[1.4]">신청 정보 보기</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* 하단 텍스트 버튼 */}
      <div className="sticky bottom-0 z-10 px-5 py-4 flex items-center justify-center">
        <button
          onClick={() => navigate("/visitor")}
          className="text-[13px] font-normal text-[#777777] underline leading-[1.4] tracking-[-0.26px] active:opacity-60 transition-opacity"
        >
          신청취소
        </button>
      </div>
    </div>
  );
}
