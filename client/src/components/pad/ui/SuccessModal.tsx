const CHECK_ICON = "/images/ic-check-circle-fill.svg";

type SuccessModalProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  contained?: boolean;
};

export function SuccessModal({ open, message, onClose, contained = false }: SuccessModalProps) {
  if (!open) return null;

  return (
    <div
      className={["inset-0 z-50 flex items-center justify-center bg-black/40 p-5 animate-fade-in", contained ? "absolute" : "fixed"].join(" ")}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-[400px] rounded-[20px] bg-white px-6 pb-6 pt-8 text-center shadow-level-3 animate-scale-in">
        <img src={CHECK_ICON} alt="" width={64} height={64} className="mx-auto h-[64px] w-[64px] shrink-0" draggable={false} aria-hidden />
        <h2 className="mt-5 whitespace-pre-line text-[20px] font-medium leading-[30px] tracking-[-0.5px] text-[#222222]">
          {message}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-[10px] bg-blue-500 py-3.5 text-[17px] font-semibold tracking-[-0.5px] text-white transition-all duration-300 hover:bg-blue-600 active:scale-[0.98] active:bg-blue-700"
        >
          확인
        </button>
      </div>
    </div>
  );
}
