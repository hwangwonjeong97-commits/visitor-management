import { createContext, useContext, ReactNode } from "react";

const ShowcaseModeContext = createContext(false);

export function ShowcaseModeProvider({ children }: { children: ReactNode }) {
  return (
    <ShowcaseModeContext.Provider value={true}>
      {children}
    </ShowcaseModeContext.Provider>
  );
}

export function useShowcaseMode() {
  return useContext(ShowcaseModeContext);
}
