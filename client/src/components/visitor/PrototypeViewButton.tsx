import { ExternalLink } from "lucide-react";

type PrototypeViewButtonProps = {
  href: string;
};

export function PrototypeViewButton({ href }: PrototypeViewButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center gap-1.5 h-10 px-4 rounded-[8px] bg-[#105AFF] text-white text-[14px] font-medium hover:bg-[#0943C6] transition-colors"
    >
      프로토타입 보기
      <ExternalLink size={16} strokeWidth={2} aria-hidden />
    </a>
  );
}
