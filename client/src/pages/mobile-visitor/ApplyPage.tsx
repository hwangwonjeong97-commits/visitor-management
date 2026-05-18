import { useLocation, useSearch } from "wouter";
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

const IS_INVITED = true;

const PURPOSE_OPTIONS = [
  { value: "업무 미팅", label: "업무 미팅" },
  { value: "면접", label: "면접" },
  { value: "납품/배송", label: "납품/배송" },
  { value: "기타", label: "기타" },
];

export default function MVApplyPage() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const isEditMode = new URLSearchParams(search).get("mode") === "edit";
  const { form, setField } = useVisitorForm();

  const canSubmit = form.consentSecurity && form.consentPrivacy && form.visitorName && form.visitorPhone && form.company;

  return (
    <div className="min-h-full flex flex-col bg-[#F5F6FA]">
      <ScreenHeader title={isEditMode ? "신청정보 수정" : "방문신청"} onBack={() => window.history.back()} />

      {/* 초대 안내 배너 */}
      {IS_INVITED && (
        <div className="bg-[#EFF4FF] px-5 py-3 flex items-center gap-2.5">
          <span className="text-[11px] font-bold text-white bg-[#105AFF] px-2 py-0.5 rounded-full flex-shrink-0">
            초대됨
          </span>
          <span className="text-[13px] text-[#105AFF]">
            일부 정보가 미리 입력되어 있습니다.
          </span>
        </div>
      )}

      {/* ── 섹션 A: 기본정보 ── */}
      <div className="bg-white px-5 py-6 flex flex-col gap-4">
        <SectionTitle>기본정보</SectionTitle>

        <div className="flex gap-3">
          <DateTimeField
            label="방문 시작"
            value={form.visitStart}
            onChange={(v) => setField("visitStart", v)}
            required
            readOnly={IS_INVITED}
            className="flex-1"
          />
          <DateTimeField
            label="방문 종료"
            value={form.visitEnd}
            onChange={(v) => setField("visitEnd", v)}
            required
            readOnly={IS_INVITED}
            className="flex-1"
          />
        </div>

        <div className="flex gap-3">
          <TextInput
            label="담당자 이름"
            value={form.hostName}
            onChange={(v) => setField("hostName", v)}
            required
            readOnly={IS_INVITED}
            placeholder="담당자 이름"
            className="flex-1"
          />
          <TextInput
            label="담당자 연락처"
            value={form.hostPhone}
            onChange={(v) => setField("hostPhone", v)}
            required
            readOnly={IS_INVITED}
            placeholder="010-0000-0000"
            className="flex-1"
          />
        </div>

        <TextInput
          label="방문 장소"
          value={form.location}
          onChange={(v) => setField("location", v)}
          required
          readOnly={IS_INVITED}
          placeholder="방문할 장소를 입력해 주세요"
        />

        <SelectField
          label="방문 목적"
          value={form.purpose}
          onChange={(v) => setField("purpose", v)}
          required
          disabled={IS_INVITED}
          options={PURPOSE_OPTIONS}
          placeholder="방문 목적을 선택해 주세요"
        />
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* ── 섹션 B: 방문자 정보 ── */}
      <div className="bg-white px-5 py-6 flex flex-col gap-4">
        <SectionTitle>방문자 정보</SectionTitle>

        <TextInput
          label="이름"
          value={form.visitorName}
          onChange={(v) => setField("visitorName", v)}
          required
          placeholder="홍길동"
        />
        <TextInput
          label="연락처"
          value={form.visitorPhone}
          onChange={(v) => setField("visitorPhone", v)}
          required
          type="tel"
          placeholder="010-0000-0000"
        />
        <TextInput
          label="소속(회사명)"
          value={form.company}
          onChange={(v) => setField("company", v)}
          required
          placeholder="회사명 또는 소속을 입력해 주세요"
        />
        <TextInput
          label="차량번호"
          value={form.carNumber}
          onChange={(v) => setField("carNumber", v)}
          placeholder="차량 이용 시 입력해 주세요 (선택)"
        />
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* ── 섹션 C: 부가정보 ── */}
      <div className="bg-white px-5 py-6 flex flex-col gap-4">
        <SectionTitle>부가정보</SectionTitle>

        <TextInput
          label="동반인"
          value={form.companion}
          onChange={(v) => setField("companion", v)}
          placeholder="동반인이 있을 경우 이름을 입력해 주세요 (선택)"
        />
        <TextArea
          label="메모"
          value={form.memo}
          onChange={(v) => setField("memo", v)}
          rows={3}
          placeholder="전달 사항이 있으면 입력해 주세요 (선택)"
        />
      </div>

      {/* 구분선 */}
      <div className="h-2 bg-[#F5F6FA]" />

      {/* ── 섹션 D: 안내 및 동의 ── */}
      <div className="bg-white px-5 py-6 flex flex-col gap-5">
        <SectionTitle>안내 및 동의</SectionTitle>

        <div className="bg-[#F5F6FA] rounded-xl px-4 py-4">
          <p className="text-[13px] font-bold text-[#333333] mb-2.5">출입 및 보안 안내</p>
          <ul className="flex flex-col gap-2">
            {[
              "방문증은 입장 시 수령 후 반드시 패용해 주세요.",
              "지정된 구역 외 출입은 제한됩니다.",
              "사진 촬영은 사전에 담당자의 허가를 받아 주세요.",
              "퇴장 시 방문증을 반납해 주세요.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#105AFF] text-[11px] mt-[3px] flex-shrink-0">•</span>
                <span className="text-[12px] text-[#777777] leading-[18px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#F5F6FA] rounded-xl px-4 py-4">
          <p className="text-[13px] font-bold text-[#333333] mb-2.5">개인정보 수집 및 보관 안내</p>
          <div className="flex flex-col gap-1">
            {[
              ["수집 항목", "이름, 연락처, 소속, 차량번호"],
              ["수집 목적", "방문자 식별 및 출입 관리"],
              ["보관 기간", "방문일로부터 1년"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="text-[12px] text-[#989898] w-[56px] flex-shrink-0">{label}</span>
                <span className="text-[12px] text-[#777777] leading-[18px]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-1">
          <ConsentCheckItem
            label="출입 및 보안 안내에 동의합니다"
            required
            checked={form.consentSecurity}
            onChange={(v) => setField("consentSecurity", v)}
            onViewDetail={() => {}}
          />
          <ConsentCheckItem
            label="개인정보 수집 및 보관에 동의합니다"
            required
            checked={form.consentPrivacy}
            onChange={(v) => setField("consentPrivacy", v)}
            onViewDetail={() => {}}
          />
        </div>
      </div>

      <div className="h-24" />

      {/* ── 하단 버튼 바 ── */}
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
              onClick={() => {
                if (canSubmit) navigate("/visitor/waiting");
              }}
            >
              완료
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
