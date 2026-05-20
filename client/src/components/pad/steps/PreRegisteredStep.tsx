import { CameraScanner } from "./CameraScanner";

type PreRegisteredStepProps = {
  onSimulateScan: () => void;
};

export function PreRegisteredStep({ onSimulateScan }: PreRegisteredStepProps) {
  return (
    <section className="relative min-h-0 flex-1">
      <CameraScanner title="사전에 발급받은 QR 코드를 인식해 주세요." />
      <button
        type="button"
        onClick={onSimulateScan}
        className="absolute bottom-6 right-[80px] z-30 text-[15px] font-medium leading-[22.5px] tracking-[-0.5px] text-gray-0/90 underline-offset-4 transition-colors duration-300 hover:text-gray-0 hover:underline"
      >
        QR 인식 완료 시뮬레이션
      </button>
    </section>
  );
}
