type MainTitleProps = {
  children: string;
};

/** Heading 1 — color/text/bolder */
export function MainTitle({ children }: MainTitleProps) {
  return (
    <h2 className="mb-2 w-full text-center text-[24px] font-bold leading-[36px] tracking-[-0.5px] text-[#222222] transition-all duration-300">
      {children}
    </h2>
  );
}
