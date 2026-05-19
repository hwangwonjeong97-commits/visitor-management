import { useEffect, useState } from "react";
import { useLocation } from "wouter";

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

export default function PVConfirmedPage() {
  const [, navigate] = useLocation();

  return (
    <div className="w-full h-full bg-[#F1F3F6] flex flex-col">
      <PadHeader onHome={() => navigate("/pad")} />

      <p className="text-center text-[20px] text-[#555555] mt-10 mb-6">
        화면의 카메라 영역에 QR 코드를 인식해 주세요.
      </p>

      {/* 카메라 영역 + 모달 */}
      <div className="relative mx-auto rounded-2xl overflow-hidden bg-[#14171F]" style={{ width: 680, height: 460 }}>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute top-8 left-8 w-14 h-14 border-t-[3px] border-l-[3px] border-[#4B6BFF] rounded-tl-md" />
        <div className="absolute top-8 right-8 w-14 h-14 border-t-[3px] border-r-[3px] border-[#4B6BFF] rounded-tr-md" />
        <div className="absolute bottom-16 left-8 w-14 h-14 border-b-[3px] border-l-[3px] border-[#4B6BFF] rounded-bl-md" />
        <div className="absolute bottom-16 right-8 w-14 h-14 border-b-[3px] border-r-[3px] border-[#4B6BFF] rounded-br-md" />
        <div className="absolute left-8 right-8 h-[2px] bg-[#4B6BFF]" style={{ top: "42%" }} />

        {/* 모달 */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="bg-white rounded-2xl px-10 py-8 flex flex-col items-center gap-5" style={{ width: 420, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
            <div className="w-14 h-14 rounded-full bg-[#3B5BFF] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[22px] font-bold text-[#222222] leading-[1.4]">안녕하세요 김더존님,</p>
              <p className="text-[22px] text-[#222222] leading-[1.4]">안내데스크에서 방문증을 수령해주세요</p>
            </div>
            <button
              onClick={() => navigate("/pad")}
              className="w-full h-12 bg-[#3B5BFF] rounded-xl text-white text-[16px] font-semibold active:opacity-80 transition-opacity"
            >
              확인
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-[14px] text-[#AAAAAA] mt-5">QR 인식 완료 시뮬레이션</p>
    </div>
  );
}
