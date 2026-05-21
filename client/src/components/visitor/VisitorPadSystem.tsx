import { useCallback, useState } from "react";
import { AppHeader } from "@/components/pad/layout/AppHeader";
import { SubPageShell } from "@/components/pad/layout/SubPageShell";
import { HomeStep } from "@/components/pad/steps/HomeStep";
import { PreRegisteredStep } from "@/components/pad/steps/PreRegisteredStep";
import { UnregisteredStep } from "@/components/pad/steps/UnregisteredStep";
import { StepTransition } from "@/components/pad/ui/StepTransition";
import { SuccessModal } from "@/components/pad/ui/SuccessModal";
import type { HomeEntryHighlight } from "@/components/pad/steps/HomeStep";
import type { AppScreen } from "@/components/pad/types";

const SUCCESS_MESSAGE = "안녕하세요 김더존님,\n안내데스크에서 방문증을 수령해주세요";

export type VisitorPadSystemProps = {
  forcedStep?: AppScreen;
  forcedShowSuccess?: boolean;
  highlightHomeEntry?: HomeEntryHighlight;
  initialStep?: AppScreen;
  /** 고정 프로토타입 뷰포트(1024×768) 안에서 모달 표시 */
  modalContained?: boolean;
};

export function VisitorPadSystem({
  forcedStep,
  forcedShowSuccess,
  highlightHomeEntry,
  initialStep = "HOME",
  modalContained = false,
}: VisitorPadSystemProps) {
  const isLocked = forcedStep != null;
  const [internalScreen, setInternalScreen] = useState<AppScreen>(initialStep);
  const [showSuccess, setShowSuccess] = useState(false);

  const screen = forcedStep ?? internalScreen;

  const setScreen = useCallback((next: AppScreen) => {
    if (isLocked) return;
    setInternalScreen(next);
  }, [isLocked]);

  const goHome = useCallback(() => {
    if (isLocked) return;
    setInternalScreen("HOME");
    setShowSuccess(false);
  }, [isLocked]);

  const handleSimulateScan = useCallback(() => {
    if (isLocked) return;
    setShowSuccess(true);
  }, [isLocked]);

  const successModalOpen = isLocked ? Boolean(forcedShowSuccess) : showSuccess;

  return (
    <div className="relative flex h-[768px] w-[1024px] shrink-0 flex-col bg-neutral-50 font-sans">
      <AppHeader screen={screen} onGoHome={goHome} />

      <main className="flex min-h-0 flex-1 flex-col">
        {screen === "HOME" && (
          <StepTransition stepKey="HOME">
            <HomeStep
              onSelectPreRegistered={() => setScreen("CASE_QR")}
              onSelectUnregistered={() => setScreen("CASE_INFO")}
              highlightEntry={highlightHomeEntry}
            />
          </StepTransition>
        )}
        {screen === "CASE_QR" && (
          <StepTransition stepKey="CASE_QR">
            <SubPageShell>
              <PreRegisteredStep onSimulateScan={handleSimulateScan} />
            </SubPageShell>
          </StepTransition>
        )}
        {screen === "CASE_INFO" && (
          <StepTransition stepKey="CASE_INFO">
            <SubPageShell>
              <UnregisteredStep />
            </SubPageShell>
          </StepTransition>
        )}
      </main>

      <SuccessModal
        open={successModalOpen}
        message={SUCCESS_MESSAGE}
        onClose={isLocked ? () => {} : goHome}
        contained={isLocked || modalContained}
      />
    </div>
  );
}
