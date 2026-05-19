import { useState } from "react";
import { useLocation } from "wouter";
import { TextInput } from "@/components/visitor/TextInput";
import { PrimaryButton } from "@/components/visitor/PrimaryButton";
import { SecondaryButton } from "@/components/visitor/SecondaryButton";

export default function MVSearchPage() {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const canSearch = name.trim().length > 0 && phone.trim().length > 0;

  return (
    <div className="min-h-full flex flex-col bg-white">
      {/* 상단 헤더 영역 */}
      <div className="relative bg-gradient-to-br from-[#EFF4FF] to-[#D3E7FE] px-5 pt-14 pb-10 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-[24px] font-bold text-[#222222] leading-[34px]">
            방문 신청 조회
          </h1>
          <p className="text-[14px] text-[#777777] mt-1">더존비즈온</p>
        </div>
        {/* 장식 원형 */}
        <div className="absolute -right-6 -top-6 w-36 h-36 rounded-full bg-[#105AFF]/10" />
        <div className="absolute right-10 top-10 w-20 h-20 rounded-full bg-[#105AFF]/10" />
        <div className="absolute right-2 top-16 w-10 h-10 rounded-full bg-[#719BFC]/20" />
      </div>

      {/* 입력 영역 */}
      <div className="flex-1 px-5 pt-8 flex flex-col gap-6">
        <TextInput
          label="성함"
          value={name}
          onChange={setName}
          placeholder="성함을 입력해 주세요"
          required
        />
        <TextInput
          label="연락처"
          value={phone}
          onChange={setPhone}
          placeholder="연락처를 입력해 주세요 (- 제외)"
          type="tel"
          required
        />

        {/* 안내 문구 */}
        <div className="mt-2">
          <div className="flex items-start gap-2">
            <span className="text-[#105AFF] text-[12px] mt-[2px] flex-shrink-0">•</span>
            <p className="text-[13px] text-[#989898] leading-[20px]">
              입력한 정보와 일치하는 신청 내역을 조회합니다. 문의가 있을 경우 담당자에게 연락해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </div>

      {/* 하단 버튼 바 */}
      <div className="no-stagger sticky bottom-0 z-10 bg-white border-t border-[#EDEDED] px-5 py-4">
        <div className="flex gap-2.5">
          <div className="flex-1">
            <SecondaryButton fullWidth size="md" variant="tertiary" onClick={() => window.history.back()}>
              취소
            </SecondaryButton>
          </div>
          <div className="flex-1">
            <PrimaryButton
              fullWidth
              size="md"
              disabled={!canSearch}
              onClick={() => {
                if (canSearch) navigate("/visitor/inquiry");
              }}
            >
              신청 결과 조회
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
