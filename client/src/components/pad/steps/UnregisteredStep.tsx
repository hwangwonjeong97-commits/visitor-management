import { PageTitleGroup } from "../ui/PageTitleGroup";
import { MobileQrPlaceholder } from "./MobileQrPlaceholder";

export function UnregisteredStep() {
  return (
    <section className="flex flex-1 flex-col items-center px-8 pb-12 pt-12 lg:px-12 lg:pt-14">
      <PageTitleGroup
        description={
          <>
            QR 코드를 스캔하시면{" "}
            <span className="font-bold text-[#105AFF]">방문 신청 화면</span>
            으로 연결됩니다.
          </>
        }
        descriptionClassName="text-[22px] leading-[33px]"
      />

      <div className="mt-8 flex w-full max-w-2xl flex-col items-center">
        <div className="rounded-[24px] border border-gray-200 bg-gray-0 p-8 shadow-level-3 transition-all duration-300">
          <div className="size-64 sm:size-72 lg:size-80">
            <MobileQrPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
