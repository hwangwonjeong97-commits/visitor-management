import { useState, useRef, useCallback } from "react";
import { MobileDeviceFrame } from "@/components/visitor/MobileDeviceFrame";
import { TabletDeviceFrame } from "@/components/visitor/TabletDeviceFrame";
import { VisitorPadSystem } from "@/components/visitor/VisitorPadSystem";
import { BrowserDeviceFrame } from "@/components/visitor/BrowserDeviceFrame";

import MVMainPage from "./mobile-visitor/MainPage";
import MVApplyPage from "./mobile-visitor/ApplyPage";
import MVWaitingPage from "./mobile-visitor/WaitingPage";
import MVQRPassPage from "./mobile-visitor/QRPassPage";
import MVArrivalPage from "./mobile-visitor/ArrivalPage";
import MVInquiryPage from "./mobile-visitor/InquiryPage";
import MVParkingPage from "./mobile-visitor/ParkingPage";
import MEInvitePage from "./mobile-employee/InvitePage";
import MEApprovePage from "./mobile-employee/ApprovePage";
import MEArrivalNoticePage from "./mobile-employee/ArrivalNoticePage";

type TabId = "mobile-visitor-pre" | "mobile-visitor-new" | "mobile-employee" | "pad-visitor" | "web-admin";

const TABS: { id: TabId; label: string }[] = [
  { id: "mobile-visitor-pre", label: "모바일-방문객(사전등록 O)" },
  { id: "mobile-visitor-new", label: "모바일-방문객(사전등록 X)" },
  { id: "mobile-employee",    label: "모바일-직원" },
  { id: "pad-visitor",        label: "패드-방문객" },
  { id: "web-admin",          label: "웹-관리자" },
];

const MOBILE_VISITOR_PRE_SCREENS = [
  { id: "01", name: "메인화면",              component: <MVMainPage isInvited={true} /> },
  { id: "02", name: "방문신청 입력",          component: <MVApplyPage isInvited={true} /> },
  { id: "03", name: "신청완료 / 승인 대기",   component: <MVWaitingPage isInvited={true} /> },
  { id: "04", name: "신청 조회_등록",         component: <MVInquiryPage /> },
  { id: "05", name: "QR 패스",               component: <MVInquiryPage initialFlipped={true} /> },
  { id: "06", name: "주차권 등록",            component: <MVParkingPage />, hideChrome: true },
];

const MOBILE_VISITOR_NEW_SCREENS = [
  { id: "01", name: "메인화면",              component: <MVMainPage isInvited={false} /> },
  { id: "02", name: "방문신청 입력",          component: <MVApplyPage isInvited={false} /> },
  { id: "03", name: "신청완료 / 승인 대기",   component: <MVWaitingPage isInvited={false} /> },
  { id: "04", name: "신청 조회_미등록",       component: <MVArrivalPage /> },
  { id: "05", name: "주차권 등록",            component: <MVParkingPage />, hideChrome: true },
];

const MOBILE_EMPLOYEE_SCREENS = [
  { id: "01", name: "방문초대 알림톡 발송", component: <MEInvitePage /> },
  { id: "02", name: "방문신청 승인 처리",   component: <MEApprovePage /> },
  { id: "03", name: "방문객 도착 알림",     component: <MEArrivalNoticePage /> },
];

const PAD_BASE_URL = "https://visitor-access-system-pad.vercel.app";
const PAD_VISITOR_SCREENS = [
  { id: "01", name: "메인화면",             component: <VisitorPadSystem forcedStep="HOME" /> },
  { id: "02", name: "QR 인식 화면",         component: <VisitorPadSystem forcedStep="CASE_QR" /> },
  { id: "03", name: "입장 확인 화면",        component: <VisitorPadSystem forcedStep="CASE_QR" forcedShowSuccess={true} /> },
  { id: "04", name: "미등록 방문객 QR 안내", component: <VisitorPadSystem forcedStep="CASE_INFO" /> },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabId>("mobile-visitor-pre");

  return (
    <div className="min-h-screen bg-[#F0F2F7]">
      <header className="sticky top-0 z-[200] bg-white border-b border-[#EDEDED]" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.06)" }}>
        <div className="px-[72px] pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F0F2F7] flex items-center justify-center">
              <img src="/douzone-icon.png" alt="더존을지타워" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-[20px] font-bold text-[#222222] leading-tight">더존을지타워 방문자 출입관리 시스템</p>
              <p className="text-[14px] text-[#989898]">UI 화면 시안</p>
            </div>
          </div>
        </div>
        <div className="px-[72px] flex gap-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                "px-5 py-3 text-[16px] font-medium border-b-2 transition-colors",
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

      <main className="px-[72px] py-10">
        {activeTab === "mobile-visitor-pre" && (
          <ShowcaseSection
            title="모바일-방문객(사전등록 O)"
            description="사전에 방문 신청을 완료한 방문객이 QR 패스를 확인하는 화면"
            screens={MOBILE_VISITOR_PRE_SCREENS}
            openUrl="/visitor"
          />
        )}
        {activeTab === "mobile-visitor-new" && (
          <ShowcaseSection
            title="모바일-방문객(사전등록 X)"
            description="현장에서 방문 신청을 처음 하는 방문객의 신청 및 안내 화면"
            screens={MOBILE_VISITOR_NEW_SCREENS}
            openUrl="/visitor-new"
          />
        )}
        {activeTab === "mobile-employee" && (
          <ShowcaseSection
            title="모바일-직원"
            description="직원이 방문 초대를 보내고, 신청을 승인하고, 도착을 확인하는 화면"
            screens={MOBILE_EMPLOYEE_SCREENS}
            openUrl="/employee/invite"
            hideChrome
          />
        )}
        {activeTab === "pad-visitor" && (
          <ShowcaseSection
            title="패드-방문객"
            description="로비 패드에서 방문객이 QR 인식 또는 정보를 입력하는 화면"
            screens={PAD_VISITOR_SCREENS}
            openUrl={PAD_BASE_URL}
            isTablet
          />
        )}
        {activeTab === "web-admin" && (
          <div>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-[20px] font-bold text-[#222222]">웹-관리자</h2>
                <p className="text-[14px] text-[#777777] mt-1">관리자가 방문 현황을 실시간으로 확인하고 승인 및 출입을 관리하는 화면</p>
              </div>
            </div>
            <div className="overflow-x-auto pb-6" style={{ scrollbarWidth: "thin", scrollbarColor: "#D3D3D3 transparent" }}>
              <div className="flex justify-center gap-10 pt-4 pb-20 flex-nowrap">
                <BrowserDeviceFrame screenId="01" label="대시보드">
                  <div className="w-full h-full bg-[#F5F6FA] flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-[16px] font-bold text-[#222222]">대시보드</p>
                      <p className="text-[13px] text-[#989898]">화면 구현 예정</p>
                    </div>
                  </div>
                </BrowserDeviceFrame>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

interface Screen {
  id: string;
  name: string;
  component: React.ReactNode;
  hideChrome?: boolean;
}

function ShowcaseSection({ title, description, screens, openUrl, isTablet = false, hideChrome = false }: {
  title: string;
  description: string;
  screens: Screen[];
  openUrl: string;
  isTablet?: boolean;
  hideChrome?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const fadeStyle = (dir: "left" | "right") => ({
    background: `linear-gradient(to ${dir === "left" ? "right" : "left"}, rgba(240,242,247,0.85) 0%, rgba(240,242,247,0.4) 50%, transparent 100%)`,
  });

  return (
    <section>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-[20px] font-bold text-[#222222]">{title}</h2>
          <p className="text-[14px] text-[#777777] mt-1">{description}</p>
        </div>
        <a
          href={openUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 h-10 px-4 rounded-[8px] bg-[#105AFF] text-white text-[14px] font-medium hover:bg-[#0943C6] transition-colors"
        >
          프로토타입 보기 ↗
        </a>
      </div>

      <div className="relative">
        {/* 좌측 fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
          style={{ ...fadeStyle("left"), opacity: showLeft ? 1 : 0 }}
        />
        {/* 우측 fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 transition-opacity duration-300"
          style={{ ...fadeStyle("right"), opacity: showRight ? 1 : 0 }}
        />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto"
          style={{
            scrollSnapType: "x proximity",
            scrollbarWidth: "thin",
            scrollbarColor: "#D3D3D3 transparent",
          }}
        >
          <div className="flex gap-6 pr-16 pt-6 pb-20 flex-nowrap">
            {screens.map((screen) =>
              isTablet ? (
                <div key={screen.id} className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
                  <TabletDeviceFrame screenId={screen.id} label={screen.name} landscape>
                    {screen.component}
                  </TabletDeviceFrame>
                </div>
              ) : (
                <div key={screen.id} className="flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
                  <MobileDeviceFrame
                    screenId={screen.id}
                    label={screen.name}
                    transparentStatusBar={screen.id === "01"}
                    hideChrome={hideChrome || !!screen.hideChrome}
                  >
                    {screen.component}
                  </MobileDeviceFrame>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
