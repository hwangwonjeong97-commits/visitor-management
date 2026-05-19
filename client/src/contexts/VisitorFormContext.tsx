import { createContext, useContext, useState, ReactNode } from "react";

export interface VisitorFormData {
  visitStart: string;
  visitEnd: string;
  hostName: string;
  hostPhone: string;
  location: string;
  purpose: string;
  visitorName: string;
  visitorPhone: string;
  company: string;
  carNumber: string;
  companion: string;
  memo: string;
  consentSecurity: boolean;
  consentPrivacy: boolean;
}

const INITIAL: VisitorFormData = {
  visitStart: "2026-05-20T10:00",
  visitEnd: "2026-05-20T18:00",
  hostName: "박지훈",
  hostPhone: "010-1234-5678",
  location: "더존을지타워 15층 회의실 A",
  purpose: "업무 미팅",
  visitorName: "",
  visitorPhone: "",
  company: "",
  carNumber: "",
  companion: "",
  memo: "",
  consentSecurity: false,
  consentPrivacy: false,
};

interface VisitorFormContextType {
  form: VisitorFormData;
  setField: <K extends keyof VisitorFormData>(key: K, value: VisitorFormData[K]) => void;
  resetForm: () => void;
}

const VisitorFormContext = createContext<VisitorFormContextType | null>(null);

export function VisitorFormProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<VisitorFormData>(INITIAL);

  const setField = <K extends keyof VisitorFormData>(key: K, value: VisitorFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => setForm(INITIAL);

  return (
    <VisitorFormContext.Provider value={{ form, setField, resetForm }}>
      {children}
    </VisitorFormContext.Provider>
  );
}

export function useVisitorForm() {
  const ctx = useContext(VisitorFormContext);
  if (!ctx) throw new Error("useVisitorForm must be used within VisitorFormProvider");
  return ctx;
}
