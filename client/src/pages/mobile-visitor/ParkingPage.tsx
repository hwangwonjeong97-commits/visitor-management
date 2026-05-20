export default function MVParkingPage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src="/screen_invite.png"
        alt="주차권 등록"
        style={{ width: 375, height: 812, display: 'block' }}
        draggable={false}
      />
      <div className="absolute inset-x-0 flex justify-center" style={{ top: 105 }}>
        <img
          src="/talk_parking.png"
          alt="주차권 등록 알림톡"
          className="animate-fade-in-up"
          style={{ width: 355, height: 'auto', animationDelay: '0.1s' }}
          draggable={false}
        />
      </div>
    </div>
  );
}
