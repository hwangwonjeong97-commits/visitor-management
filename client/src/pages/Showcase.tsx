import { useState, useRef, useCallback, useEffect } from "react";
import { Router } from "wouter";
import { MobileDeviceFrame } from "@/components/visitor/MobileDeviceFrame";
import { TabletDeviceFrame } from "@/components/visitor/TabletDeviceFrame";

import MVMainPage from "./mobile-visitor/MainPage";
import MVApplyPage from "./mobile-visitor/ApplyPage";
import MVWaitingPage from "./mobile-visitor/WaitingPage";
import MVQRPassPage from "./mobile-visitor/QRPassPage";
import MVArrivalPage from "./mobile-visitor/ArrivalPage";
import MVInquiryPage from "./mobile-visitor/InquiryPage";
import MEInvitePage from "./mobile-employee/InvitePage";
import MEApprovePage from "./mobile-employee/ApprovePage";
import MEArrivalNoticePage from "./mobile-employee/ArrivalNoticePage";

// ─── 탭 ─────────────────────────────────────────────────────

type TabId = "mobile-visitor-pre" | "mobile-visitor-new" | "mobile-employee" | "pad-visitor";

const TABS: { id: TabId; label: string }[] = [
  { id: "mobile-visitor-pre", label: "모바일-방문객(사전등록 O)" },
  { id: "mobile-visitor-new", label: "모바일-방문객(사전등록 X)" },
  { id: "mobile-employee",    label: "모바일 — 직원" },
  { id: "pad-visitor",        label: "패드 — 방문객" },
];

// ─── 스크린 라우트 맵 ────────────────────────────────────────

const PRE_ROUTES: Record<string, { id: string; name: string; component: () => React.ReactNode }> = {
  "/visitor":         { id: "MV-01", name: "메인화면",            component: () => <MVMainPage isInvited={true} /> },
  "/visitor/apply":   { id: "MV-02", name: "방문신청 입력",        component: () => <MVApplyPage isInvited={true} /> },
  "/visitor/waiting": { id: "MV-03", name: "신청완료 / 승인 대기", component: () => <MVWaitingPage isInvited={true} /> },
  "/visitor/inquiry": { id: "MV-04", name: "신청 조회_등록",       component: () => <MVInquiryPage /> },
  "/visitor/qr-pass": { id: "MV-05", name: "QR 패스",             component: () => <MVQRPassPage /> },
};

const NEW_ROUTES: Record<string, { id: string; name: string; component: () => React.ReactNode }> = {
  "/visitor-new":     { id: "MV-01", name: "메인화면",            component: () => <MVMainPage isInvited={false} /> },
  "/visitor/apply":   { id: "MV-02", name: "방문신청 입력",        component: () => <MVApplyPage isInvited={false} /> },
  "/visitor/waiting": { id: "MV-03", name: "신청완료 / 승인 대기", component: () => <MVWaitingPage isInvited={false} /> },
  "/visitor/arrival": { id: "MV-06", name: "신청 조회_미등록",     component: () => <MVArrivalPage /> },
};

const MOBILE_EMPLOYEE_SCREENS = [
  { id: "ME-01", name: "방문초대 알림톡 발송", route: "/employee/invite",         component: <MEInvitePage /> },
  { id: "ME-02", name: "방문신청 승인 처리",   route: "/employee/approve",        component: <MEApprovePage /> },
  { id: "ME-03", name: "방문객 도착 알림",     route: "/employee/arrival-notice", component: <MEArrivalNoticePage /> },
];

const PAD_BASE_URL = "https://visitor-access-system-pad.vercel.app";
const PAD_VISITOR_SCREENS = [
  { id: "PV-01", name: "메인화면",             route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-01" /> },
  { id: "PV-02", name: "QR 인식 화면",         route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-02" /> },
  { id: "PV-03", name: "입장 확인 화면",        route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-03" /> },
  { id: "PV-04", name: "미등록 방문객 QR 안내", route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-04" /> },
];

// ─── 인터랙티브 프레임 컴포넌트 ──────────────────────────────

interface InteractiveFrameProps {
  initialPath: string;
  routes: Record<string, { id: string; name: string; component: () => React.ReactNode }>;
  transparentStatusBarPath?: string;
}

function InteractiveFrame({ initialPath, routes, transparentStatusBarPath }: InteractiveFrameProps) {
  const [currentPath, setCurrentPath] = useState(initialPath);

  // 뮤터블 refs (리렌더 없이 최신값 유지)
  const pathRef = useRef(initialPath);
  const listenersRef = useRef(new Set<(p: string) => void>());
  const navigateRef = useRef<(to: string) => void>(null!);

  // navigate 함수 최신화
  navigateRef.current = useCallback((to: string) => {
    const cleanPath = to.split("?")[0];
    // 알려진 라우트에만 반응
    if (routes[cleanPath]) {
      pathRef.current = to;
      setCurrentPath(cleanPath);
      listenersRef.current.forEach((fn) => fn(to));
    }
  }, [routes]);

  // 안정적인 wouter 커스텀 훅 — 한 번만 생성
  const locationHookRef = useRef<(() => [string, (to: string) => void]) | undefined>(undefined);
  if (!locationHookRef.current) {
    locationHookRef.current = (): [string, (to: string) => void] => {
      const [path, setPath] = useState(() => pathRef.current);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        listenersRef.current.add(setPath);
        setPath(pathRef.current);
        return () => { listenersRef.current.delete(setPath); };
      }, []);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const navigate = useCallback((to: string) => navigateRef.current(to), []);
      return [path, navigate];
    };
  }

  const currentRoute = routes[currentPath] ?? routes[initialPath];
  const isTransparent = currentPath === transparentStatusBarPath;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 현재 화면 표시 */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-medium text-[#105AFF] bg-[#EFF4FF] px-2 py-0.5 rounded-full">
          {currentRoute.id}
        </span>
        <span className="text-[14px] font-medium text-[#333333]">{currentRoute.name}</span>
      </div>

      {/* 폰 프레임 */}
      <Router hook={locationHookRef.current!}>
        <MobileDeviceFrame transparentStatusBar={isTransparent}>
          {currentRoute.component()}
        </MobileDeviceFrame>
      </Router>

      {/* 처음으로 버튼 */}
      <button
        onClick={() => {
          pathRef.current = initialPath;
          setCurrentPath(initialPath);
          listenersRef.current.forEach((fn) => fn(initialPath));
        }}
        className="text-[12px] text-[#949DAF] hover:text-[#105AFF] transition-colors"
      >
        ↺ 처음으로
      </button>
    </div>
  );
}

// ─── 기존 방식 섹션 (직원 / 패드) ────────────────────────────

interface Screen { id: string; name: string; route: string; component: React.ReactNode; }

function ShowcaseSection({ title, description, screens, frameType, landscape = false }: {
  title: string; description: string; screens: Screen[];
  frameType: "mobile" | "tablet"; landscape?: boolean;
}) {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-[20px] font-bold text-[#222222]">{title}</h2>
        <p className="text-[14px] text-[#777777] mt-1">{description}</p>
        <p className="text-[12px] text-[#B4B4B4] mt-0.5">{screens.length}개 화면</p>
      </div>
      <div className="flex gap-10 overflow-x-auto pb-6">
        {screens.map((screen) =>
          frameType === "mobile" ? (
            <MobileDeviceFrame key={screen.id} screenId={screen.id} label={screen.name} routePath={screen.route}>
              {screen.component}
            </MobileDeviceFrame>
          ) : (
            <TabletDeviceFrame key={screen.id} screenId={screen.id} label={screen.name} routePath={screen.route} landscape={landscape}>
              {screen.component}
            </TabletDeviceFrame>
          )
        )}
      </div>
    </section>
  );
}

// ─── 메인 Showcase ───────────────────────────────────────────

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabId>("mobile-visitor-pre");

  return (
    <div className="min-h-screen bg-[#F0F2F7]">
      {/* 헤더 */}
      <header className="sticky top-0 z-20 bg-white border-b border-[#EDEDED]" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1600px] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#105AFF] flex items-center justify-center">
              <span className="text-white text-[14px] font-bold">V</span>
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#222222] leading-tight">방문객 출입관리 시스템</p>
              <p className="text-[11px] text-[#989898]">UI 화면 시안</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-8 flex gap-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                "px-5 py-3 text-[14px] font-medium border-b-2 transition-colors",
                activeTab === tab.id
                  ? "border-[#105AFF] text-[#105AFF]"
                  : "border-transparent text-[#777777] hover:text-[#333333]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* 컨텐츠 */}
      <main className="max-w-[1600px] mx-auto px-8 py-10">

        {activeTab === "mobile-visitor-pre" && (
          <div>
            <div className="mb-8">
              <h2 className="text-[20px] font-bold text-[#222222]">모바일-방문객(사전등록 O)</h2>
              <p className="text-[14px] text-[#777777] mt-1">사전에 방문 신청을 완료한 방문객이 QR 패스를 확인하는 화면</p>
            </div>
            <InteractiveFrame
              key="pre"
              initialPath="/visitor"
              routes={PRE_ROUTES}
              transparentStatusBarPath="/visitor"
            />
          </div>
        )}

        {activeTab === "mobile-visitor-new" && (
          <div>
            <div className="mb-8">
              <h2 className="text-[20px] font-bold text-[#222222]">모바일-방문객(사전등록 X)</h2>
              <p className="text-[14px] text-[#777777] mt-1">현장에서 방문 신청을 처음 하는 방문객의 신청 및 안내 화면</p>
            </div>
            <InteractiveFrame
              key="new"
              initialPath="/visitor-new"
              routes={NEW_ROUTES}
              transparentStatusBarPath="/visitor-new"
            />
          </div>
        )}

        {activeTab === "mobile-employee" && (
          <ShowcaseSection
            title="모바일 — 직원"
            description="직원이 방문 초대를 보내고, 신청을 승인하고, 도착을 확인하는 화면"
            screens={MOBILE_EMPLOYEE_SCREENS}
            frameType="mobile"
          />
        )}

        {activeTab === "pad-visitor" && (
          <ShowcaseSection
            title="패드 — 방문객"
            description="로비 패드에서 방문객이 QR 인식 또는 정보를 입력하는 화면"
            screens={PAD_VISITOR_SCREENS}
            frameType="tablet"
            landscape={true}
          />
        )}
      </main>
    </div>
  );
}
