interface Step {
  id: string;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function StepIndicator({ steps, currentStep, className = "" }: StepIndicatorProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {steps.map((step, i) => {
        const isDone = i < currentStep;
        const isActive = i === currentStep;
        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={[
                  "w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors",
                  isDone ? "bg-[#105AFF] text-white" :
                  isActive ? "bg-[#105AFF] text-white ring-4 ring-[#EFF4FF]" :
                  "bg-[#EDEDED] text-[#989898]",
                ].join(" ")}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <span
                className={[
                  "text-[11px] leading-[16px] text-center whitespace-nowrap",
                  isActive ? "font-semibold text-[#105AFF]" : isDone ? "text-[#333333]" : "text-[#989898]",
                ].join(" ")}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={[
                  "flex-1 h-[2px] mx-1 mb-5",
                  isDone ? "bg-[#105AFF]" : "bg-[#EDEDED]",
                ].join(" ")}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
