import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HomeIndicator } from "./HomeIndicator";
import { StatusBar } from "./StatusBar";

export function MobilePageLayout({ children, transparentStatusBar = false }: { children: ReactNode; transparentStatusBar?: boolean }) {
  return (
    <div className="min-h-screen bg-[#F0F2F7] flex items-start justify-center py-10">
      <motion.div
        className="relative w-[390px] h-[844px] bg-white flex flex-col overflow-hidden"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="absolute top-0 left-0 right-0 z-20">
          <StatusBar transparent={transparentStatusBar} />
        </div>
        <div className={`flex-1 overflow-y-auto overflow-x-hidden ${transparentStatusBar ? "" : "pt-[44px]"}`}>
          {children}
        </div>
        <HomeIndicator />
      </motion.div>
    </div>
  );
}
