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
  { id: "01", name: "메인화면",              component: <MVMainPage isInvited={true} /> },
  { id: "02", name: "방문신청 입력",          component: <MVApplyPage isInvited={true} /> },
  { id: "03", name: "신청완료 / 승인 대기",   component: <MVWaitingPage isInvited={true} /> },
  { id: "04", name: "신청 조회_등록",         component: <MVInquiryPage /> },
  { id: "05", name: "QR 패스",               component: <MVQRPassPage /> },
];

const MOBILE_VISITOR_NEW_SCREENS = [
  { id: "01", name: "메인화면",              component: <MVMainPage isInvited={false} /> },
  { id: "02", name: "방문신청 입력",          component: <MVApplyPage isInvited={false} /> },
  { id: "03", name: "신청완료 / 승인 대기",   component: <MVWaitingPage isInvited={false} /> },
  { id: "04", name: "신청 조회_미등록",       component: <MVArrivalPage /> },
];

const MOBILE_EMPLOYEE_SCREENS = [
  { id: "01", name: "방문초대 알림톡 발송", component: <MEInvitePage /> },
  { id: "02", name: "방문신청 승인 처리",   component: <MEApprovePage /> },
  { id: "03", name: "방문객 도착 알림",     component: <MEArrivalNoticePage /> },
];

const PAD_BASE_URL = "https://visitor-access-system-pad.vercel.app";
const PAD_VISITOR_SCREENS = [
  { id: "01", name: "메인화면",             component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-01" /> },
  { id: "02", name: "QR 인식 화면",         component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-02" /> },
  { id: "03", name: "입장 확인 화면",        component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-03" /> },
  { id: "04", name: "미등록 방문객 QR 안내", component: <iframe src={PAD_BASE_URL} className="w-full h-full border-none" title="PV-04" /> },
];

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabId>("mobile-visitor-pre");

  return (
    <div className="min-h-screen bg-[#F0F2F7]">
      <header className="sticky top-0 z-20 bg-white border-b border-[#EDEDED]" style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1600px] mx-auto px-8 pt-6 pb-4 flex items-center justify-between">
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
        <div className="max-w-[1600px] mx-auto px-8 flex gap-0">
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

      <main className="max-w-[1600px] mx-auto px-8 py-10">
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
            title="모바일 — 직원"
            description="직원이 방문 초대를 보내고, 신청을 승인하고, 도착을 확인하는 화면"
            screens={MOBILE_EMPLOYEE_SCREENS}
            openUrl="/employee/invite"
          />
        )}
        {activeTab === "pad-visitor" && (
          <ShowcaseSection
            title="패드 — 방문객"
            description="로비 패드에서 방문객이 QR 인식 또는 정보를 입력하는 화면"
            screens={PAD_VISITOR_SCREENS}
            openUrl={PAD_BASE_URL}
            isTablet
          />
        )}
      </main>
    </div>
  );
}

interface Screen {
  id: string;
  name: string;
  component: React.ReactNode;
}

function ShowcaseSection({ title, description, screens, openUrl, isTablet = false }: {
  title: string;
  description: string;
  screens: Screen[];
  openUrl: string;
  isTablet?: boolean;
}) {
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
          className="flex items-center gap-1.5 h-9 px-4 rounded-[8px] bg-[#105AFF] text-white text-[13px] font-medium hover:bg-[#0943C6] transition-colors"
        >
          열기 ↗
        </a>
      </div>

      <div className="flex gap-10 overflow-x-auto pb-6">
        {screens.map((screen) =>
          isTablet ? (
            <TabletDeviceFrame key={screen.id} screenId={screen.id} label={screen.name} landscape>
              {screen.component}
            </TabletDeviceFrame>
          ) : (
            <MobileDeviceFrame
              key={screen.id}
              screenId={screen.id}
              label={screen.name}
              transparentStatusBar={screen.id === "01"}
            >
              {screen.component}
            </MobileDeviceFrame>
          )
        )}
      </div>
    </section>
  );
}
