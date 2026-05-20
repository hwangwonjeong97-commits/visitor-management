export default function MEInvitePage() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src="/screen_invite.png"
        alt="방문초대 알림톡 발송"
        style={{ width: 375, height: 812, display: 'block' }}
        draggable={false}
      />
      <div className="absolute inset-x-0 flex justify-center" style={{ top: 105 }}>
        <img
          src="/talk.png"
          alt="알림톡"
          className="animate-fade-in-up"
          style={{ width: 355, height: 446, animationDelay: '0.3s' }}
          draggable={false}
        />
      </div>
    </div>
  );
}
