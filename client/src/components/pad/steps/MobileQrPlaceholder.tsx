const QR_VISIT_IMAGE = "/images/qr-visit.png";

export function MobileQrPlaceholder() {
  return (
    <img
      src={QR_VISIT_IMAGE}
      alt="방문 신청 QR 코드"
      className="size-full object-contain"
      draggable={false}
    />
  );
}
