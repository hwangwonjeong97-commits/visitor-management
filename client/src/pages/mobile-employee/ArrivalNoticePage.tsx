export default function MEArrivalNoticePage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src="/screen_arrival.png"
        alt="방문객 도착 알림"
        style={{ width: 375, height: 812, display: 'block' }}
        draggable={false}
      />
      <div className="absolute inset-x-0 flex justify-center" style={{ top: 230 }}>
        <img
          src="/arrival_alert.png"
          alt="도착 알림"
          className="animate-fade-in-up"
          style={{ width: 315, height: 342, animationDelay: '0.1s' }}
          draggable={false}
        />
      </div>
    </div>
  );
}
