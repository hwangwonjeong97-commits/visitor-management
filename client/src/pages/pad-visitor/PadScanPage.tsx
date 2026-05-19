import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

function PadHeader({ onHome }: { onHome: () => void }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dateStr = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${days[now.getDay()]}요일`;
  const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  return (
    <header className="bg-white border-b border-[#E8E8E8] px-6 h-[64px] flex items-center justify-between flex-shrink-0">
      <button onClick={onHome} className="flex items-center gap-2 border border-[#E0E0E0] bg-white rounded-xl px-4 py-2 active:bg-[#F5F5F5] transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#333" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
        <span className="text-[15px] font-medium text-[#333333]">처음으로</span>
      </button>
      <p className="text-[15px] text-[#999999]">{dateStr} &nbsp;|&nbsp; {timeStr}</p>
    </header>
  );
}

export default function PVScanPage() {
  const [, navigate] = useLocation();

  return (
    <div className="w-full h-full bg-[#F1F3F6] flex flex-col">
      <PadHeader onHome={() => navigate("/pad")} />

      <p className="text-center text-[20px] text-[#555555] mt-10 mb-6">
        화면의 카메라 영역에 QR 코드를 인식해 주세요.
      </p>

      {/* 카메라 영역 */}
      <div className="relative mx-auto rounded-2xl overflow-hidden bg-[#14171F]" style={{ width: 680, height: 460 }}>

        {/* 코너 브라켓 */}
        <div className="absolute top-8 left-8 w-14 h-14 border-t-[3px] border-l-[3px] border-[#4B6BFF] rounded-tl-md" />
        <div className="absolute top-8 right-8 w-14 h-14 border-t-[3px] border-r-[3px] border-[#4B6BFF] rounded-tr-md" />
        <div className="absolute bottom-16 left-8 w-14 h-14 border-b-[3px] border-l-[3px] border-[#4B6BFF] rounded-bl-md" />
        <div className="absolute bottom-16 right-8 w-14 h-14 border-b-[3px] border-r-[3px] border-[#4B6BFF] rounded-br-md" />

        {/* 스캔 애니메이션 라인 */}
        <motion.div
          className="absolute left-8 right-8"
          style={{ height: 2 }}
          animate={{ top: ["12%", "72%", "12%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* 라인 본체 */}
          <div className="w-full h-full bg-[#4B6BFF]" />
          {/* 아래 글로우 */}
          <div
            className="w-full absolute top-0"
            style={{
              height: 24,
              background: "linear-gradient(to bottom, rgba(75,107,255,0.35), transparent)",
            }}
          />
        </motion.div>

        {/* 하단 카메라 인식 버튼 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1E2130] rounded-full px-5 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16Z" fill="#9BA3BF"/>
          </svg>
          <span className="text-[13px] text-[#9BA3BF]">카메라 인식 영역</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/pad/confirmed")}
        className="text-center text-[14px] text-[#4B6BFF] mt-5 underline underline-offset-2 active:opacity-60 transition-opacity"
      >
        QR 인식 완료 시뮬레이션
      </button>
    </div>
  );
}
