import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { VisitorFormProvider } from "./contexts/VisitorFormContext";
import Report from "./pages/Report";
import Showcase from "./pages/Showcase";

// 모바일 — 방문객
import MVMainPage from "./pages/mobile-visitor/MainPage";
import MVApplyPage from "./pages/mobile-visitor/ApplyPage";
import MVWaitingPage from "./pages/mobile-visitor/WaitingPage";
import MVQRPassPage from "./pages/mobile-visitor/QRPassPage";
import MVArrivalPage from "./pages/mobile-visitor/ArrivalPage";
import MVInquiryPage from "./pages/mobile-visitor/InquiryPage";
import MVSearchPage from "./pages/mobile-visitor/SearchPage";

// 모바일 — 직원
import MEInvitePage from "./pages/mobile-employee/InvitePage";
import MEApprovePage from "./pages/mobile-employee/ApprovePage";
import MEArrivalNoticePage from "./pages/mobile-employee/ArrivalNoticePage";

// 패드 — 방문객
import PVMainPage from "./pages/pad-visitor/PadMainPage";
import PVScanPage from "./pages/pad-visitor/PadScanPage";
import PVConfirmedPage from "./pages/pad-visitor/PadConfirmedPage";
import PVRegisterQRPage from "./pages/pad-visitor/PadRegisterQRPage";

function Router() {
  return (
    <Switch>
      {/* 쇼케이스 */}
      <Route path="/showcase" component={Showcase} />

      {/* 기존 리서치 리포트 */}
      <Route path="/report" component={Report} />

      {/* 모바일 — 방문객 */}
      <Route path="/visitor" component={MVMainPage} />
      <Route path="/visitor/apply" component={MVApplyPage} />
      <Route path="/visitor/waiting" component={MVWaitingPage} />
      <Route path="/visitor/qr-pass" component={MVQRPassPage} />
      <Route path="/visitor/arrival" component={MVArrivalPage} />
      <Route path="/visitor/inquiry" component={MVInquiryPage} />
      <Route path="/visitor/search" component={MVSearchPage} />

      {/* 모바일 — 직원 */}
      <Route path="/employee/invite" component={MEInvitePage} />
      <Route path="/employee/approve" component={MEApprovePage} />
      <Route path="/employee/arrival-notice" component={MEArrivalNoticePage} />

      {/* 패드 — 방문객 */}
      <Route path="/pad" component={PVMainPage} />
      <Route path="/pad/scan" component={PVScanPage} />
      <Route path="/pad/confirmed" component={PVConfirmedPage} />
      <Route path="/pad/register-qr" component={PVRegisterQRPage} />

      {/* 기본 진입점 → 쇼케이스 */}
      <Route path="/" component={Showcase} />

      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <VisitorFormProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </VisitorFormProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
