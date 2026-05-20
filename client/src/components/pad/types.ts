export type AppScreen = "HOME" | "CASE_QR" | "CASE_INFO";

export const SCREEN_MAIN_TITLES: Record<Exclude<AppScreen, "HOME">, string> = {
  CASE_QR: "사전등록 확인",
  CASE_INFO: "방문 정보 입력",
};
