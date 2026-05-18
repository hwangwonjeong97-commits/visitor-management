interface QRDisplayCardProps {
  name: string;
  company?: string;
  validUntil?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const STATIC_CELLS = [
  1,0,1,1,0,1,0,1, 0,1,1,0,1,0,1,1,
  0,1,0,0,1,0,1,0, 1,0,0,1,0,1,0,0,
  1,1,0,1,1,1,0,1, 0,1,1,0,1,1,1,0,
  0,0,1,0,0,0,1,0, 1,1,0,1,0,0,0,1,
  1,0,1,1,0,0,0,1, 0,0,1,1,0,1,0,1,
  0,1,0,0,1,1,1,0, 1,0,0,0,1,0,1,0,
  1,0,1,0,0,1,0,1, 0,1,1,0,0,1,0,1,
  0,1,0,1,1,0,1,0, 1,0,0,1,1,0,1,0,
];

export function QRDisplayCard({ name, company, validUntil, size = "md", className = "" }: QRDisplayCardProps) {
  const boxSize = size === "lg" ? 220 : size === "sm" ? 160 : 192;
  const markerSize = Math.round(boxSize * 0.28);
  const innerPad = 16;

  return (
    <div
      className={`bg-white rounded-2xl flex flex-col items-center gap-4 px-6 py-6 ${className}`}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      {/* QR 코드 */}
      <div
        className="bg-white rounded-2xl border border-[#EDEDED] p-4 relative"
        style={{ width: boxSize, height: boxSize }}
      >
        {/* 좌상단 마커 */}
        <div
          className="absolute border-[4px] border-[#1A1A1A] rounded-[5px]"
          style={{ top: innerPad, left: innerPad, width: markerSize, height: markerSize }}
        >
          <div className="absolute inset-[6px] bg-[#1A1A1A] rounded-[2px]" />
        </div>
        {/* 우상단 마커 */}
        <div
          className="absolute border-[4px] border-[#1A1A1A] rounded-[5px]"
          style={{ top: innerPad, right: innerPad, width: markerSize, height: markerSize }}
        >
          <div className="absolute inset-[6px] bg-[#1A1A1A] rounded-[2px]" />
        </div>
        {/* 좌하단 마커 */}
        <div
          className="absolute border-[4px] border-[#1A1A1A] rounded-[5px]"
          style={{ bottom: innerPad, left: innerPad, width: markerSize, height: markerSize }}
        >
          <div className="absolute inset-[6px] bg-[#1A1A1A] rounded-[2px]" />
        </div>
        {/* 데이터 셀 영역 */}
        <div
          className="absolute grid gap-[2px]"
          style={{
            top: innerPad + markerSize + 6,
            left: innerPad + markerSize + 6,
            right: innerPad,
            bottom: innerPad,
            gridTemplateColumns: "repeat(8, 1fr)",
          }}
        >
          {STATIC_CELLS.map((cell, i) => (
            <div
              key={i}
              className="rounded-[1px]"
              style={{ backgroundColor: cell ? "#1A1A1A" : "transparent" }}
            />
          ))}
        </div>
        {/* 우하단 추가 셀들 */}
        <div
          className="absolute grid gap-[2px]"
          style={{
            top: innerPad,
            left: innerPad + markerSize + 6,
            right: innerPad + markerSize + 6,
            height: markerSize,
            gridTemplateColumns: "repeat(5, 1fr)",
          }}
        >
          {[1,0,1,0,1,0,1,1,0,1,0,1,1,0,0].map((cell, i) => (
            <div
              key={i}
              className="rounded-[1px]"
              style={{ backgroundColor: cell ? "#1A1A1A" : "transparent" }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-[17px] font-bold text-[#222222]">{name}</p>
        {company && <p className="text-[13px] text-[#777777]">{company}</p>}
      </div>

      {validUntil && (
        <p className="text-[12px] text-[#989898]">
          유효기간 <span className="font-semibold text-[#333333]">{validUntil}</span>
        </p>
      )}
    </div>
  );
}
