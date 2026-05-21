import { ReactNode } from "react";

const PROTOTYPE_WIDTH = 1024;
const PROTOTYPE_HEIGHT = 768;

export function PadPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div
        className="shrink-0 overflow-auto bg-neutral-50"
        style={{
          width: PROTOTYPE_WIDTH,
          height: PROTOTYPE_HEIGHT,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
