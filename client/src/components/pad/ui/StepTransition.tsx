import type { ReactNode } from "react";

type StepTransitionProps = {
  stepKey: string;
  children: ReactNode;
};

export function StepTransition({ stepKey, children }: StepTransitionProps) {
  return (
    <div key={stepKey} className="flex min-h-0 flex-1 flex-col animate-fade-in-up">
      {children}
    </div>
  );
}
