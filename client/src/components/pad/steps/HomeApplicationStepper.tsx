import { Fragment } from "react";

const STEPS = [
  { label: "방문신청", iconSrc: "/images/ic-edit.svg" },
  { label: "내부승인", iconSrc: "/images/ic-check-circle.svg" },
  { label: "방문수속", iconSrc: "/images/ic-document-check.svg" },
  { label: "방문완료", iconSrc: "/images/ic-location.svg" },
] as const;

export function HomeApplicationStepper() {
  return (
    <div aria-label="미등록 방문객 신청절차 안내">
      <h3 className="mb-5 text-[16px] font-semibold leading-[24px] tracking-[-0.5px] text-gray-600">
        미등록 방문객 신청절차
      </h3>
      <div className="flex w-full max-w-[340px] items-start">
        {STEPS.map((step, index) => (
          <Fragment key={step.label}>
            {index > 0 ? (
              <div className="flex h-11 min-w-6 flex-1 items-center px-3" aria-hidden>
                <div className="h-px w-full bg-gray-200" />
              </div>
            ) : null}
            <div className="flex w-11 shrink-0 flex-col items-center">
              <div className="flex size-11 items-center justify-center rounded-[16px] bg-[#ECEFF4]">
                <img src={step.iconSrc} alt="" className="size-6 shrink-0" draggable={false} aria-hidden />
              </div>
              <span className="mt-2.5 w-[88px] text-center text-[13px] font-medium leading-[19px] tracking-[-0.3px] text-gray-600">
                {step.label}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
