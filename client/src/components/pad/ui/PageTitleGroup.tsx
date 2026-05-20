import type { ReactNode } from "react";
import { MainTitle } from "./MainTitle";

type PageTitleGroupProps = {
  title?: string;
  description: ReactNode;
  descriptionClassName?: string;
};

export function PageTitleGroup({ title, description, descriptionClassName }: PageTitleGroupProps) {
  return (
    <header className="mb-6 w-full max-w-3xl">
      {title ? <MainTitle>{title}</MainTitle> : null}
      <p className={["w-full text-center tracking-[-0.5px] text-[#333333]", descriptionClassName ?? "text-[18px] leading-[27px]"].join(" ")}>
        {description}
      </p>
    </header>
  );
}
