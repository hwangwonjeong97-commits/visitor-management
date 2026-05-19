import { useEffect, useState } from "react";

function PadHeader() {
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
      <button className="flex items-center gap-2 border border-[#E0E0E0] bg-white rounded-xl px-4 py-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke="#333" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
        <span className="text-[15px] font-medium text-[#333333]">처음으로</span>
      </button>
      <p className="text-[15px] text-[#999999]">{dateStr} &nbsp;|&nbsp; {timeStr}</p>
    </header>
  );
}

const N = 25;
function buildQR(): boolean[][] {
  const m: boolean[][] = Array.from({ length: N }, () => Array(N).fill(false));
  const F = [[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,1,1,1,0,1],[1,0,1,1,1,0,1],[1,0,1,1,1,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]];
  const place = (r: number, c: number) => F.forEach((row, dr) => row.forEach((v, dc) => { m[r+dr][c+dc] = !!v; }));
  place(0,0); place(0,N-7); place(N-7,0);
  for (let i=8;i<=16;i++){m[6][i]=i%2===0;m[i][6]=i%2===0;}
  const A=[[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];
  A.forEach((row,dr)=>row.forEach((v,dc)=>{m[16+dr][16+dc]=!!v;}));
  m[17][8]=true;
  const fixed=(r:number,c:number)=>(r<8&&c<8)||(r<8&&c>=N-8)||(r>=N-8&&c<8)||r===6||c===6||(r>=16&&r<=20&&c>=16&&c<=20);
  let s=1013904223;
  const rng=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};
  for(let r=0;r<N;r++)for(let c=0;c<N;c++)if(!fixed(r,c))m[r][c]=rng()<0.54;
  return m;
}
const QR_MATRIX = buildQR();

export default function PVRegisterQRPage() {
  return (
    <div className="w-full h-full bg-[#F1F3F6] flex flex-col">
      <PadHeader />

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        {/* 안내 텍스트 */}
        <div className="text-center">
          <p className="text-[22px] text-[#444444] leading-[1.5]">스마트폰 카메라로 QR 코드를 스캔하시면</p>
          <p className="text-[22px] text-[#444444] leading-[1.5]">
            <span className="text-[#3B5BFF] font-bold">모바일 방문 신청 페이지</span>로 연결됩니다.
          </p>
        </div>

        {/* QR 카드 */}
        <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}>
          <svg width="220" height="220" viewBox={`0 0 ${N} ${N}`} xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            {QR_MATRIX.flatMap((row, r) =>
              row.map((on, c) => on ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#1A1A1A" /> : null)
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
