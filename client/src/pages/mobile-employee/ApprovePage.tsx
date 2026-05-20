export default function MEApprovePage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src="/screen_approve.png"
        alt="방문신청 승인 처리"
        style={{ width: 375, height: 812, display: 'block' }}
        draggable={false}
      />
      <div className="absolute inset-x-0 flex justify-center" style={{ top: 240 }}>
        <img
          src="/approve_alert.png"
          alt="승인 알림"
          className="animate-fade-in-up"
          style={{ width: 315, height: 320, animationDelay: '0.1s' }}
          draggable={false}
        />
      </div>
    </div>
  );
}
