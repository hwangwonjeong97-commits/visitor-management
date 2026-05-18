# 방문객 출입관리 시스템 — UI 화면 시안 기획 문서

> 작성 기준: `design-system.md` (Noto Sans CJK KR · #105AFF Primary Blue · semantic token 우선)  
> 작성일: 2026-05-18  
> 1차 범위: 관리자 웹 제외 / 모바일(방문객·직원) + 패드(방문객) 총 12개 화면

---

## 1. 전체 화면 설계 방향 요약

### 설계 원칙
- **한 화면 = 하나의 핵심 행동**: 화면마다 사용자가 해야 할 일이 1개로 수렴
- **입력 부담 최소화**: 선택형 UI 우선, 텍스트 입력은 필요한 항목만
- **텍스트 위계 명확화**: Heading 1(20px Bold) → Body 1(16px) → Body 3(14px) 계층 유지
- **장식 최소화**: 흰색/밝은 회색 배경, 블루 포인트 컬러(#105AFF)만 강조에 사용
- **상태 피드백 즉각 제공**: 승인 대기/완료/에러 상태를 배지 + 색상으로 명확히 구분

### 디자인 시스템 적용 방침
| 항목 | 적용 값 |
|------|---------|
| 기본 폰트 | Noto Sans CJK KR (Regular 400 / Medium 500 / Bold 700) |
| 페이지 배경 | `color/background/basic` → #F5F6FA |
| 카드 배경 | `color/background/white` → #FFFFFF |
| Primary CTA 버튼 | `color/button/primary-fill` → bg-blue-500 (#105AFF), radius 10px |
| Secondary 버튼 | border-blue-500, bg-white, radius 10px |
| Tertiary 버튼 | border-gray-100, bg-white, radius 10px |
| Input 기본 보더 | `color/input/border` → #D3D3D3, radius 8px |
| Input 포커스 보더 | `color/input/border-active` → #4A4A4A |
| 본문 텍스트 | `color/text/basic` → #333333 |
| 보조 텍스트 | `color/text/subtle` → #777777 |
| 에러 텍스트 | `color/text/point` → #FA4553 |
| 승인 대기 배지 | bg #E4EEFA, text #105AFF |
| 성공 배지 | `color/surface/success-subtler` → #F2FFFA, text #27C36F |

### 디바이스별 레이아웃 전략
- **모바일**: max-width 390px 기준 단일 컬럼, 상단 헤더 + 본문 스크롤 + 하단 고정 버튼
- **패드**: 세로 방향 768×1024px 기준, 중앙 정렬 전체화면, 대형 터치 버튼(min 80px height)

---

## 2. 디바이스별 화면 목록

### A. 모바일 — 방문객 (5개 화면)

| # | 화면명 | 라우트 | 핵심 행동 |
|---|--------|--------|-----------|
| MV-01 | 메인화면 | `/visitor` | 서비스 진입, 방문신청·조회 선택 |
| MV-02 | 방문신청 입력 | `/visitor/apply` | 방문 정보 입력 및 동의 |
| MV-03 | 신청완료 / 승인 대기 | `/visitor/waiting` | 대기 상태 확인, 수정·취소 |
| MV-04 | QR 패스 | `/visitor/qr-pass` | QR 코드 확인, 방문 정보 조회 |
| MV-05 | 방문증 수령 안내 | `/visitor/arrival` | 현장 도착 후 안내 (미등록 승인 완료) |

### B. 모바일 — 직원 (3개 화면)

| # | 화면명 | 라우트 | 핵심 행동 |
|---|--------|--------|-----------|
| ME-01 | 방문초대 알림톡 발송 | `/employee/invite` | 방문객에게 초대 메시지 발송 |
| ME-02 | 방문신청 승인 처리 | `/employee/approve` | 방문객 신청 승인 또는 거절 |
| ME-03 | 방문객 도착 알림 | `/employee/arrival-notice` | 방문객 도착 확인 및 응대 준비 |

### C. 패드 — 방문객 (4개 화면)

| # | 화면명 | 라우트 | 핵심 행동 |
|---|--------|--------|-----------|
| PV-01 | 메인화면 | `/pad` | 사전등록 여부 선택 |
| PV-02 | QR 인식 화면 | `/pad/scan` | QR 코드 스캔 |
| PV-03 | 입장 확인 화면 | `/pad/confirmed` | 입장 확인 완료 안내 |
| PV-04 | 미등록 방문객 QR 안내 | `/pad/register-qr` | 모바일 방문정보 입력 유도 |

---

## 3. 화면 간 연결 흐름

### 플로우 A — 사전등록 방문객

```
[직원 ME-01: 초대 발송]
        ↓ 알림톡 수신
[방문객 MV-01: 메인] → [MV-02: 방문신청 입력] → [MV-03: 승인 대기]
                                                          ↓ 직원 승인
                                                   [직원 ME-02: 승인 처리]
                                                          ↓ 알림톡 발송
                                                   [방문객 MV-04: QR 패스]
                                                          ↓ 현장 도착
                                               [패드 PV-01: 메인] → [PV-02: QR 인식] → [PV-03: 입장 확인]
                                                          ↓ 도착 알림
                                                   [직원 ME-03: 도착 알림]
```

### 플로우 B — 미등록 방문객

```
[패드 PV-01: 메인] → [PV-04: QR 안내]
        ↓ 모바일 QR 스캔
[방문객 MV-02: 방문신청 입력] → [MV-03: 승인 대기]
                                        ↓ 직원 승인
                                 [직원 ME-02: 승인 처리]
                                        ↓ 알림톡 발송
                                 [방문객 MV-05: 방문증 수령 안내]
                                        ↓ 도착 알림
                                 [직원 ME-03: 도착 알림]
```

---

## 4. 공통 재사용 컴포넌트 목록

`client/src/components/visitor/` 폴더에 생성 예정

| 컴포넌트명 | 파일명 | 용도 |
|-----------|--------|------|
| 모바일 헤더 | `MobileHeader.tsx` | 뒤로가기 + 제목, 모바일 공통 상단 |
| 상태 배지 | `StatusBadge.tsx` | 승인 대기 / 승인 완료 / 거절 / 도착 상태 표시 |
| 정보 카드 | `InfoCard.tsx` | 방문 정보 요약 표시 (라벨 + 값 목록) |
| CTA 버튼 바 | `BottomActionBar.tsx` | 하단 고정 버튼 영역 (1~2개 버튼) |
| 폼 입력 필드 | `FormField.tsx` | 라벨 + Input + 에러 메시지 래퍼 |
| 섹션 구분선 | `SectionDivider.tsx` | 섹션 간 8px 회색 배경 구분 |
| QR 코드 영역 | `QRCodeDisplay.tsx` | QR 이미지 + 유효기간 표시 |
| QR 스캔 프레임 | `QRScanFrame.tsx` | 패드용 카메라 인식 UI 영역 |
| 패드 대형 버튼 | `PadActionButton.tsx` | 패드 전용 터치 버튼 (min-h-20, 대형) |
| 절차 안내 스텝 | `ProcessSteps.tsx` | 방문 절차 스텝 인디케이터 |

---

## 5. 구현 순서 제안

### Phase 1 — 기반 셋업 (우선)
1. `client/src/index.css` 업데이트: 디자인시스템 CSS 변수 추가 (shadow, radius, font 토큰)
2. `client/index.html` Noto Sans CJK KR 폰트 CDN 추가
3. `client/src/components/visitor/` 폴더 생성 및 공통 컴포넌트 작성

### Phase 2 — 모바일 방문객 화면 (5개)
4. MV-01: 메인화면 (가장 단순, 기준 화면으로 먼저 제작)
5. MV-02: 방문신청 입력 (폼 로직 집중)
6. MV-03: 승인 대기 화면
7. MV-04: QR 패스 화면
8. MV-05: 방문증 수령 안내

### Phase 3 — 모바일 직원 화면 (3개)
9. ME-02: 승인 처리 (핵심 직원 화면)
10. ME-01: 초대 알림톡 발송
11. ME-03: 도착 알림

### Phase 4 — 패드 화면 (4개)
12. PV-01: 패드 메인 (레이아웃 기준 확립)
13. PV-04: 미등록 QR 안내
14. PV-02: QR 인식
15. PV-03: 입장 확인

### Phase 5 — 라우팅 연결 & 정리
16. `App.tsx`에 모든 라우트 등록
17. 기존 Report 페이지 라우트 버그 수정 (`"/ "` → `"/"`)
18. 반응형 및 크로스 디바이스 확인

---

## 6. 프로젝트 폴더 구조 제안

기존 구조를 해치지 않으면서 아래와 같이 추가합니다.

```
client/src/
├── components/
│   ├── visitor/          ← NEW: 공통 재사용 컴포넌트
│   │   ├── MobileHeader.tsx
│   │   ├── StatusBadge.tsx
│   │   ├── InfoCard.tsx
│   │   ├── BottomActionBar.tsx
│   │   ├── FormField.tsx
│   │   ├── SectionDivider.tsx
│   │   ├── QRCodeDisplay.tsx
│   │   ├── QRScanFrame.tsx
│   │   ├── PadActionButton.tsx
│   │   └── ProcessSteps.tsx
│   └── ui/               ← 기존 shadcn/ui (변경 없음)
├── pages/
│   ├── mobile-visitor/   ← NEW
│   │   ├── MainPage.tsx         (MV-01)
│   │   ├── ApplyPage.tsx        (MV-02)
│   │   ├── WaitingPage.tsx      (MV-03)
│   │   ├── QRPassPage.tsx       (MV-04)
│   │   └── ArrivalPage.tsx      (MV-05)
│   ├── mobile-employee/  ← NEW
│   │   ├── InvitePage.tsx       (ME-01)
│   │   ├── ApprovePage.tsx      (ME-02)
│   │   └── ArrivalNoticePage.tsx (ME-03)
│   ├── pad-visitor/      ← NEW
│   │   ├── PadMainPage.tsx      (PV-01)
│   │   ├── PadScanPage.tsx      (PV-02)
│   │   ├── PadConfirmedPage.tsx (PV-03)
│   │   └── PadRegisterQRPage.tsx (PV-04)
│   ├── Report.tsx        ← 기존 (변경 없음)
│   ├── Home.tsx          ← 기존 (변경 없음)
│   └── NotFound.tsx      ← 기존 (변경 없음)
└── App.tsx               ← 라우트 추가 필요
```

---

## 7. 확인이 필요한 사항

1. **Noto Sans CJK KR 폰트**: 현재 프로젝트는 Pretendard 기반. 디자인시스템 기준은 Noto Sans CJK KR → 교체 또는 병행 여부 확인 필요
2. **QR 코드 생성 방식**: QR 코드 렌더링에 외부 라이브러리(예: `qrcode.react`) 사용 여부 결정 필요
3. **QR 스캔**: 패드에서 실제 카메라 인식이 필요한지, 아니면 시안 목적으로 정적 UI 프레임만 구현할지 확인
4. **상태 데이터**: 방문 신청 상태(대기/승인/거절)는 현재 프로젝트에 서버 API가 없으므로 mock 데이터로 처리
5. **모바일 라우트 진입**: 방문객 모바일 화면에서 `/visitor` 로 직접 진입 시 패드와 구분되는 별도 레이아웃 필요 여부 (현재는 동일 앱 내 라우트로 처리)
6. **기존 Report 페이지 처우**: 신규 화면 추가 후 `/` 라우트를 Report로 유지할지, 새로운 랜딩으로 대체할지

---

## 참고: 화면별 핵심 컬러 적용 예시

| 상황 | Tailwind 클래스 | 값 |
|------|-----------------|-----|
| 페이지 전체 배경 | `bg-[#F5F6FA]` | background/basic |
| 카드 배경 | `bg-white` | background/white |
| Primary 버튼 | `bg-[#105AFF] text-white rounded-[10px]` | button/primary-fill |
| Secondary 버튼 | `border border-[#105AFF] text-[#105AFF] rounded-[10px]` | button/secondary |
| 승인 대기 배지 | `bg-[#E4EEFA] text-[#105AFF]` | pending-bg / pending-text |
| 에러 텍스트 | `text-[#FA4553]` | text/point |
| Input 기본 | `border border-[#D3D3D3] rounded-[8px]` | input/border |
| Input 포커스 | `focus:border-[#4A4A4A]` | input/border-active |
| 본문 텍스트 | `text-[#333333]` | text/basic |
| 보조 텍스트 | `text-[#777777]` | text/subtle |
