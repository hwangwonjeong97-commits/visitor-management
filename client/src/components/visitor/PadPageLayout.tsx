import { ReactNode } from "react";

export function PadPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F0F2F7] flex items-start justify-center py-10">
      <div
        className="w-[768px] h-[1024px] bg-white overflow-y-auto overflow-x-hidden"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
      >
        {children}
      </div>
    </div>
  );
}
