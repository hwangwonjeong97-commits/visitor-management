import type { ReactNode } from "react";

type SubPageShellProps = {
  children: ReactNode;
};

export function SubPageShell({ children }: SubPageShellProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {children}
    </div>
  );
}
