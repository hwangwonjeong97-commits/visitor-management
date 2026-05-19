import { useState } from "react";
import { useLocation, useSearch } from "wouter";
import { InfoCard } from "@/components/visitor/InfoCard";
import { ScreenHeader } from "@/components/visitor/ScreenHeader";
import { SectionTitle } from "@/components/visitor/SectionTitle";
import { TextInput } from "@/components/visitor/TextInput";
import { TextArea } from "@/components/visitor/TextArea";
import { SelectField } from "@/components/visitor/SelectField";
import { DateTimeField } from "@/components/visitor/DateTimeField";
import { ConsentCheckItem } from "@/components/visitor/ConsentCheckItem";
import { PrimaryButton } from "@/components/visitor/PrimaryButton";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";
import { useVisitorForm } from "@/contexts/VisitorFormContext";

// ─── 상수 ────────────────────────────────────────────────

const INVITED_PURPOSE_OPTIONS = [
  { value: "업무 미팅", label: "업무 미팅" },
  { value: "면접", label: "면접" },
  { value: "납품/배송", label: "납품/배송" },
  { value: "기타", label: "기타" },
];

const NEW_PURPOSE_OPTIONS = [
  { value: "행사 참석", label: "행사 참석" },
  { value: "업무 미팅", label: "업무 미팅" },
  { value: "납품 / 업무 지원", label: "납품 / 업무 지원" },
  { value: "기타", label: "기타" },
];

const EVENT_OPTIONS = [
  { value: "one-ai", label: "2026 ONE AI 고객 세미나" },
  { value: "solution", label: "더존 솔루션 설명회" },
  { value: "partner", label: "파트너 교육 프로그램" },
];

const EVENT_INFO: Record<string, { label: string; value: string }[]> = {
  "one-ai": [
    { label: "방문 일시", value: "2026.05.20 10:00 ~ 18:00" },
    { label: "방문 장소", value: "더존비즈온 본사 15층 컨퍼런스홀" },
    { label: "담당자", value: "행사 운영팀" },
    { label: "연락처", value: "02-0000-0000" },
  ],
  "solution": [
    { label: "방문 일시", value: "2026.06.10 14:00 ~ 17:00" },
    { label: "방문 장소", value: "더존비즈온 본사 12층 세미나실" },
    { label: "담당자", value: "솔루션 사업팀" },
    { label: "연락처", value: "02-0000-0001" },
  ],
  "partner": [
    { label: "방문 일시", value: "2026.06.25 09:00 ~ 13:00" },
    { label: "방문 장소", value: "더존비즈온 본사 5층 교육실" },
    { label: "담당자", value: "파트너 관리팀" },
    { label: "연락처", value: "02-0000-0002" },
  ],
};

const MOCK_HOSTS = [
  { id: "1", name: "박지훈", dept: "영업팀",    phone: "010-1234-5678", location: "더존비즈온 본사 15층 회의실 A" },
  { id: "2", name: "박지훈", dept: "제품기획팀", phone: "010-9876-5432", location: "더존비즈온 본사 8층 회의실 B" },
  { id: "3", name: "김민준", dept: "인사팀",    phone: "010-1111-2222", location: "더존비즈온 본사 3층 면접실" },
  { id: "4", name: "이수연", dept: "마케팅팀",  phone: "010-3333-4444", location: "더존비즈온 본사 9층 마케팅룸" },
];

type Host = (typeof MOCK_HOSTS)[0];

// ─── 헬퍼 ────────────────────────────────────────────────

function formatDateTime(dt: string) {
  if (!dt) return "";
  const d = new Date(dt);
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const hour = d.getHours().toString().padStart(2, "0");
  const min = d.getMinutes().toString().padStart(2, "0");
  return `${month}월 ${date}일  ${hour}:${min}`;
}

// ─── 공용 섹션 컴포넌트 ──────────────────────────────────

type FormProps = {
  form: ReturnType<typeof useVisitorForm>["form"];
  setField: ReturnType<typeof useVisitorForm>["setField"];
};

function VisitorInfoSection({ form, setField }: FormProps) {
  return (
    <div className="bg-white px-5 py-6 flex flex-col gap-4">
      <SectionTitle>방문자 정보</SectionTitle>
      <TextInput label="이름" value={form.visitorName} onChange={(v) => setField("visitorName", v)} required placeholder="홍길동" />
      <TextInput label="연락처" value={form.visitorPhone} onChange={(v) => setField("visitorPhone", v)} required type="tel" placeholder="010-0000-0000" />
      <TextInput label="소속(회사명)" value={form.company} onChange={(v) => setField("company", v)} required placeholder="회사명 또는 소속을 입력해 주세요" />
      <TextInput label="차량번호" value={form.carNumber} onChange={(v) => setField("carNumber", v)} placeholder="차량 이용 시 입력해 주세요 (선택)" />
    </div>
  );
}

function AdditionalInfoSection({ form, setField }: FormProps) {
  return (
    <div className="bg-white px-5 py-6 flex flex-col gap-4">
      <SectionTitle>부가정보</SectionTitle>
      <TextInput label="동반인" value={form.companion} onChange={(v) => setField("companion", v)} placeholder="동반인이 있을 경우 이름을 입력해 주세요 (선택)" />
      <TextArea label="메모" value={form.memo} onChange={(v) => setField("memo", v)} rows={3} placeholder="전달 사항이 있으면 입력해 주세요 (선택)" />
    </div>
  );
}

function ConsentSection({ form, setField }: FormProps) {
  return (
    <div className="bg-white px-5 py-6 flex flex-col gap-5">
      <SectionTitle>안내 및 동의</SectionTitle>
      <div className="flex flex-col gap-3">
        <div className="bg-[#F5F6FA] rounded-xl px-4 py-4">
          <p className="text-[13px] font-bold text-[#333333] mb-2">출입 및 보안 안내</p>
          <ul className="flex flex-col gap-2">
            {[
              "방문증은 입장 시 수령 후 반드시 패용해 주세요.",
              "지정된 구역 외 출입은 제한됩니다.",
              "사진 촬영은 사전에 담당자의 허가를 받아 주세요.",
              "퇴장 시 방문증을 반납해 주세요.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-[2px]">
                <span className="text-[#777777] text-[12px] flex-shrink-0">•</span>
                <span className="text-[12px] text-[#777777] leading-[1.4] tracking-[-0.24px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#F5F6FA] rounded-xl px-4 py-4">
          <p className="text-[13px] font-bold text-[#333333] mb-2">개인정보 수집 및 보관 안내</p>
          <div className="flex flex-col gap-2">
            {[
              ["수집 항목", "이름, 연락처, 소속, 차량번호"],
              ["수집 목적", "방문자 식별 및 출입 관리"],
              ["보관 기간", "방문일로부터 1년"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="text-[12px] text-[#777777] w-[56px] flex-shrink-0 leading-[1.4] tracking-[-0.24px]">{label}</span>
                <span className="text-[12px] text-[#777777] leading-[1.4] tracking-[-0.24px]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-[#EDEDED]">
        <ConsentCheckItem label="출입 및 보안 안내에 동의합니다" required checked={form.consentSecurity} onChange={(v) => setField("consentSecurity", v)} onViewDetail={() => {}} />
        <ConsentCheckItem label="개인정보 수집 및 보관에 동의합니다" required checked={form.consentPrivacy} onChange={(v) => setField("consentPrivacy", v)} onViewDetail={() => {}} />
      </div>
    </div>
  );
}

// ─── 미등록 방문객 전용: 방문 정보 섹션 ─────────────────

function NonInvitedVisitInfoSection({ form, setField }: FormProps) {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [hostSearchText, setHostSearchText] = useState("");
  const [selectedHost, setSelectedHost] = useState<Host | null>(null);
  const [showHostResults, setShowHostResults] = useState(false);
  const [visitDetail, setVisitDetail] = useState("");
  const [hostDept, setHostDept] = useState("");

  const purpose = form.purpose;

  const filteredHosts = hostSearchText.length >= 1
    ? MOCK_HOSTS.filter(
        (h) => h.name.includes(hostSearchText) || h.dept.includes(hostSearchText)
      )
    : [];

  const handlePurposeChange = (v: string) => {
    setField("purpose", v);
    setSelectedEvent("");
    setHostSearchText("");
    setSelectedHost(null);
    setShowHostResults(false);
    setVisitDetail("");
    setHostDept("");
  };

  return (
    <div className="bg-white px-5 py-6 flex flex-col gap-4">
      <SectionTitle>방문 정보</SectionTitle>

      {/* 방문 목적 - 항상 첫 번째 */}
      <SelectField
        label="방문 목적"
        value={purpose}
        onChange={handlePurposeChange}
        required
        options={NEW_PURPOSE_OPTIONS}
        placeholder="방문 목적을 선택해 주세요"
      />

      {/* ── Case A: 행사 참석 ── */}
      {purpose === "행사 참석" && (
        <>
          <SelectField
            label="참석 행사"
            value={selectedEvent}
            onChange={setSelectedEvent}
            required
            options={EVENT_OPTIONS}
            placeholder="참석할 행사를 선택해 주세요"
          />
          {selectedEvent && EVENT_INFO[selectedEvent] && (
            <div className="flex flex-col gap-2">
              <p className="text-[12px] text-[#949DAF] leading-[1.4]">
                행사 정보에 따라 자동 입력되었습니다.
              </p>
              <InfoCard rows={EVENT_INFO[selectedEvent]} />
            </div>
          )}
        </>
      )}

      {/* ── Case B: 업무 미팅 ── */}
      {purpose === "업무 미팅" && (
        <>
          {!selectedHost ? (
            <div className="flex flex-col gap-2">
              <TextInput
                label="담당자 검색"
                value={hostSearchText}
                onChange={(v) => {
                  setHostSearchText(v);
                  setShowHostResults(v.length > 0);
                }}
                required
                placeholder="담당자 이름을 검색해 주세요"
              />
              {showHostResults && filteredHosts.length > 0 && (
                <div
                  className="rounded-[8px] overflow-hidden border border-[#EDEDED] bg-white"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                >
                  {filteredHosts.map((host, i) => (
                    <button
                      key={host.id}
                      onClick={() => {
                        setSelectedHost(host);
                        setShowHostResults(false);
                        setHostSearchText("");
                      }}
                      className={`w-full px-4 py-3 flex flex-col items-start gap-0.5 text-left active:bg-[#F5F6FA] transition-colors ${i > 0 ? "border-t border-[#EDEDED]" : ""}`}
                    >
                      <span className="text-[14px] font-semibold text-[#222222]">{host.name}</span>
                      <span className="text-[12px] text-[#949DAF]">{host.dept} · {host.phone}</span>
                    </button>
                  ))}
                </div>
              )}
              {showHostResults && filteredHosts.length === 0 && (
                <div className="bg-[#F7F8FA] rounded-[8px] px-4 py-3 text-center">
                  <p className="text-[13px] text-[#949DAF]">검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[12px] text-[#949DAF] leading-[1.4]">담당자가 선택되었습니다.</p>
                <button
                  onClick={() => { setSelectedHost(null); setHostSearchText(""); }}
                  className="text-[12px] text-[#105AFF] font-medium"
                >
                  변경
                </button>
              </div>
              <InfoCard
                rows={[
                  { label: "담당자", value: `${selectedHost.name} (${selectedHost.dept})` },
                  { label: "연락처", value: selectedHost.phone },
                  { label: "방문 장소", value: selectedHost.location },
                ]}
              />
            </div>
          )}

          {/* 방문 일시 */}
          <div className="flex gap-2">
            <DateTimeField label="방문 시작" value={form.visitStart} onChange={(v) => setField("visitStart", v)} required className="flex-1" />
            <DateTimeField label="방문 종료" value={form.visitEnd} onChange={(v) => setField("visitEnd", v)} required className="flex-1" />
          </div>
        </>
      )}

      {/* ── Case C: 납품 / 업무 지원 ── */}
      {purpose === "납품 / 업무 지원" && (
        <>
          <TextArea
            label="방문 상세 내용"
            value={visitDetail}
            onChange={setVisitDetail}
            required
            rows={3}
            placeholder="방문 목적이나 전달 사항을 입력해 주세요"
          />
          <TextInput
            label="담당 부서"
            value={hostDept}
            onChange={setHostDept}
            placeholder="담당 부서 또는 담당자를 입력해 주세요 (선택)"
          />
        </>
      )}

      {/* ── Case D: 기타 ── */}
      {purpose === "기타" && (
        <TextArea
          label="방문 사유"
          value={visitDetail}
          onChange={setVisitDetail}
          required
          rows={3}
          placeholder="방문 목적을 입력해 주세요"
        />
      )}
    </div>
  );
}

// ─── 메인 컴포넌트 ───────────────────────────────────────

export default function MVApplyPage({ isInvited = true }: { isInvited?: boolean }) {
  const [, navigate] = useLocation();
  const search = useSearch();
  const isEditMode = new URLSearchParams(search).get("mode") === "edit";
  const { form, setField } = useVisitorForm();

  const canSubmit =
    form.consentSecurity && form.consentPrivacy &&
    form.visitorName && form.visitorPhone && form.company;

  const basicInfoRows = [
    {
      label: "방문 일시",
      value:
        form.visitStart && form.visitEnd
          ? `${formatDateTime(form.visitStart)} ~ ${formatDateTime(form.visitEnd)}`
          : "6월 3일  09:00 ~ 18:00",
    },
    { label: "담당자", value: `${form.hostName || "박지훈"} (${form.hostPhone || "010-1234-5678"})` },
    { label: "방문 장소", value: form.location || "더존비즈온 본사 15층 회의실 A" },
    { label: "방문 목적", value: form.purpose || "업무 미팅" },
  ];

  const divider = <div className="h-2 bg-[#F7F8FA]" />;

  return (
    <div className="min-h-full flex flex-col bg-white">
      <ScreenHeader title={isEditMode ? "신청정보 수정" : "방문신청"} onBack={() => window.history.back()} />

      {isInvited ? (
        /* ── 사전등록 O ── */
        <>
          {/* 초대 안내 배너 */}
          <div className="bg-white px-5 pt-3 pb-0">
            <div className="h-[46px] bg-[#EFF4FF] rounded-[8px] px-3 flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 7.5C8.46167 7.50008 8.02527 7.94763 8.02515 8.49976V12.5002C8.02528 13.0524 8.46167 13.4999 9 13.5C9.5384 13.5 9.97472 13.0524 9.97485 12.5002V8.49976C9.97472 7.94758 9.5384 7.5 9 7.5ZM9 4.5C8.46159 4.50008 8.02515 4.93642 8.02515 5.47485C8.02523 6.01322 8.46164 6.44963 9 6.44971C9.53843 6.44971 9.97477 6.01326 9.97485 5.47485C9.97485 4.93638 9.53848 4.5 9 4.5Z" fill="#105AFF" />
              </svg>
              <span className="text-[14px] text-[#105AFF] leading-[1.4] tracking-[-0.3px] flex-1">
                초대된 방문으로 일부 정보가 자동 입력되었습니다.
              </span>
            </div>
          </div>

          {/* 안내 텍스트 */}
          <div className="bg-white px-5 pt-6 pb-0">
            <p className="text-[22px] font-normal text-[#333333] leading-[1.4] tracking-[-0.44px]">
              <span className="font-bold">방문 정보</span>를 확인하고,<br />
              <span className="font-bold">필요한 항목</span>을 입력해주세요.
            </p>
          </div>

          {/* 기본정보 카드 */}
          <div className="bg-white px-5 pt-6 pb-6">
            <InfoCard rows={basicInfoRows} />
          </div>

          {divider}
          <VisitorInfoSection form={form} setField={setField} />
          {divider}
          <ConsentSection form={form} setField={setField} />
        </>
      ) : (
        /* ── 사전등록 X ── */
        <>
          {/* 안내 텍스트 */}
          <div className="bg-white px-5 pt-5 pb-0">
            <p className="text-[22px] font-normal text-[#333333] leading-[1.4] tracking-[-0.44px]">
              <span className="font-bold">방문 정보</span>를 입력하고,<br />
              <span className="font-bold">필요한 항목</span>을 작성해주세요.
            </p>
          </div>

          {/* 섹션 1: 방문자 정보 */}
          <div className="pt-4">
            <VisitorInfoSection form={form} setField={setField} />
          </div>

          {divider}

          {/* 섹션 2: 방문 정보 (방문 목적 기반 조건부 UI) */}
          <NonInvitedVisitInfoSection form={form} setField={setField} />

          {divider}
          <ConsentSection form={form} setField={setField} />
        </>
      )}

      <div className="flex-1" />

      {/* 하단 버튼 바 */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <div className="flex gap-2.5">
          <div className="flex-1">
            <SecondaryButton fullWidth size="md" variant="tertiary" onClick={() => {}}>
              임시저장
            </SecondaryButton>
          </div>
          <div className="flex-1">
            <PrimaryButton
              fullWidth
              size="md"
              disabled={!canSubmit}
              onClick={() => { if (canSubmit) navigate("/visitor/waiting"); }}
            >
              완료
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
