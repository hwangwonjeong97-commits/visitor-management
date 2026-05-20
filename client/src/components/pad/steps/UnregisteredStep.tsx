import { MobileQrPlaceholder } from "./MobileQrPlaceholder";

export function UnregisteredStep() {
  return (
    <section className="flex flex-1 flex-col items-center px-8 pb-12 pt-12 lg:px-12 lg:pt-14">
      <header className="mb-6 w-full max-w-3xl">
        <p className="w-full text-center text-[22px] leading-[33px] tracking-[-0.5px] text-[#333333]">
          QR 코드를 스캔하시면{" "}
          <span className="font-bold text-[#105AFF]">방문 신청 화면</span>
          으로 연결됩니다.
        </p>
      </header>
      <div className="mt-8 flex w-full max-w-2xl flex-col items-center">
        <div className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-level-3 transition-all duration-300">
          <div className="size-64 sm:size-72 lg:size-80">
            <MobileQrPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
