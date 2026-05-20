import PVMainPage from "@/pages/pad-visitor/PadMainPage";
import PVScanPage from "@/pages/pad-visitor/PadScanPage";
import PVConfirmedPage from "@/pages/pad-visitor/PadConfirmedPage";
import PVRegisterQRPage from "@/pages/pad-visitor/PadRegisterQRPage";

type PadStep = "HOME" | "CASE_QR" | "CASE_SUCCESS" | "CASE_INFO";

export function VisitorPadSystem({ step }: { step: PadStep }) {
  switch (step) {
    case "HOME":         return <PVMainPage />;
    case "CASE_QR":      return <PVScanPage />;
    case "CASE_SUCCESS": return <PVConfirmedPage />;
    case "CASE_INFO":    return <PVRegisterQRPage />;
  }
}
