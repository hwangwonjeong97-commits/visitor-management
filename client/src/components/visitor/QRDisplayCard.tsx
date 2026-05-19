interface QRDisplayCardProps {
  name: string;
  company?: string;
  validUntil?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const N = 25;

function buildMatrix(): boolean[][] {
  const m: boolean[][] = Array.from({ length: N }, () => Array(N).fill(false));

  // Finder pattern (7×7)
  const F = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1],
  ];
  const place = (row: number, col: number) =>
    F.forEach((r, dr) => r.forEach((v, dc) => { m[row + dr][col + dc] = !!v; }));
  place(0, 0);       // top-left
  place(0, N - 7);   // top-right
  place(N - 7, 0);   // bottom-left

  // Timing patterns (row 6 & col 6, between separators)
  for (let i = 8; i <= 16; i++) {
    m[6][i] = i % 2 === 0;
    m[i][6] = i % 2 === 0;
  }

  // Alignment pattern — version 2: center at (18, 18)
  const A = [
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
  ];
  A.forEach((r, dr) => r.forEach((v, dc) => { m[16 + dr][16 + dc] = !!v; }));

  // Format info strip (row 8 / col 8 near finders — leave mostly 0 but add dark module)
  m[17][8] = true; // dark module

  const isFixed = (r: number, c: number) =>
    (r < 8 && c < 8) ||
    (r < 8 && c >= N - 8) ||
    (r >= N - 8 && c < 8) ||
    r === 6 || c === 6 ||
    (r >= 16 && r <= 20 && c >= 16 && c <= 20);

  // LCG PRNG for dense, deterministic data cells
  let s = 1013904223;
  const rng = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };

  for (let r = 0; r < N; r++)
    for (let c = 0; c < N; c++)
      if (!isFixed(r, c)) m[r][c] = rng() < 0.54;

  return m;
}

const MATRIX = buildMatrix();

export function QRDisplayCard({ name, company, validUntil, size = "md", className = "" }: QRDisplayCardProps) {
  const px = size === "lg" ? 204 : size === "sm" ? 152 : 178;

  return (
    <div
      className={`bg-white rounded-2xl flex flex-col items-center gap-4 px-6 py-6 ${className}`}
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
    >
      {/* QR 코드 SVG */}
      <div className="bg-white rounded-xl border border-[#EDEDED] p-3">
        <svg
          width={px}
          height={px}
          viewBox={`0 0 ${N} ${N}`}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="crispEdges"
        >
          {MATRIX.flatMap((row, r) =>
            row.map((on, c) =>
              on ? (
                <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#1A1A1A" />
              ) : null
            )
          )}
        </svg>
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
