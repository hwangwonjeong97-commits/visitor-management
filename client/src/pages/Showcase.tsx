import { useState } from "react";
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


type TabId = "mobile-visitor-pre" | "mobile-visitor-new" | "mobile-employee" | "pad-visitor";

const TABS: { id: TabId; label: string }[] = [
  { id: "mobile-visitor-pre", label: "모바일-방문객(사전등록 O)" },
  { id: "mobile-visitor-new", label: "모바일-방문객(사전등록 X)" },
  { id: "mobile-employee",    label: "모바일 — 직원" },
  { id: "pad-visitor",        label: "패드 — 방문객" },
];

const MOBILE_VISITOR_PRE_SCREENS = [
  { id: "MV-01", name: "메인화면",              route: "/visitor",          component: <MVMainPage /> },
  { id: "MV-02", name: "방문신청 입력",          route: "/visitor/apply",    component: <MVApplyPage isInvited={true} /> },
  { id: "MV-03", name: "신청완료 / 승인 대기",   route: "/visitor/waiting",  component: <MVWaitingPage /> },
  { id: "MV-04", name: "신청 조회_등록",         route: "/visitor/inquiry",  component: <MVInquiryPage /> },
  { id: "MV-05", name: "QR 패스",               route: "/visitor/qr-pass",  component: <MVQRPassPage /> },
];

const MOBILE_VISITOR_NEW_SCREENS = [
  { id: "MV-01", name: "메인화면",              route: "/visitor",          component: <MVMainPage /> },
  { id: "MV-02", name: "방문신청 입력",          route: "/visitor/apply",    component: <MVApplyPage isInvited={false} /> },
  { id: "MV-03", name: "신청완료 / 승인 대기",   route: "/visitor/waiting",  component: <MVWaitingPage /> },
  { id: "MV-06", name: "신청 조회_미등록",       route: "/visitor/arrival",  component: <MVArrivalPage /> },
];

const MOBILE_EMPLOYEE_SCREENS = [
  { id: "ME-01", name: "방문초대 알림톡 발송", route: "/employee/invite",         component: <MEInvitePage /> },
  { id: "ME-02", name: "방문신청 승인 처리",   route: "/employee/approve",        component: <MEApprovePage /> },
  { id: "ME-03", name: "방문객 도착 알림",     route: "/employee/arrival-notice", component: <MEArrivalNoticePage /> },
];

const PAD_BASE_URL = "https://visitor-access-system-pad.vercel.app";

const PAD_VISITOR_SCREENS = [
  { id: "PV-01", name: "메인화면",               route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-01" /> },
  { id: "PV-02", name: "QR 인식 화면",           route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-02" /> },
  { id: "PV-03", name: "입장 확인 화면",          route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-03" /> },
  { id: "PV-04", name: "미등록 방문객 QR 안내",   route: PAD_BASE_URL, component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-04" /> },
];

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
          <p className="text-[12px] text-[#B4B4B4]">총 12개 화면</p>
        </div>

        {/* 탭 */}
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
          <ShowcaseSection
            title="모바일-방문객(사전등록 O)"
            description="사전에 방문 신청을 완료한 방문객이 QR 패스를 확인하는 화면"
            screens={MOBILE_VISITOR_PRE_SCREENS}
            frameType="mobile"
          />
        )}
        {activeTab === "mobile-visitor-new" && (
          <ShowcaseSection
            title="모바일-방문객(사전등록 X)"
            description="현장에서 방문 신청을 처음 하는 방문객의 신청 및 안내 화면"
            screens={MOBILE_VISITOR_NEW_SCREENS}
            frameType="mobile"
          />
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

interface Screen {
  id: string;
  name: string;
  route: string;
  component: React.ReactNode;
}

interface ShowcaseSectionProps {
  title: string;
  description: string;
  screens: Screen[];
  frameType: "mobile" | "tablet";
  landscape?: boolean;
}

function ShowcaseSection({ title, description, screens, frameType, landscape = false }: ShowcaseSectionProps) {
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
            <MobileDeviceFrame
              key={screen.id}
              screenId={screen.id}
              label={screen.name}
              routePath={screen.route}
              transparentStatusBar={screen.id === "MV-01"}
            >
              {screen.component}
            </MobileDeviceFrame>
          ) : (
            <TabletDeviceFrame
              key={screen.id}
              screenId={screen.id}
              label={screen.name}
              routePath={screen.route}
              landscape={landscape}
            >
              {screen.component}
            </TabletDeviceFrame>
          )
        )}
      </div>
    </section>
  );
}
