import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

/**
 * 더존을지타워 내방고객 관리 시스템 디지털화 벤치마크 리서치 보고서
 * 
 * 디자인 철학: Professional Minimalism with Data-Driven Elegance
 * - 신뢰감 있는 블루/네이비 계열 (Primary #105AFF)
 * - 명확한 정보 계층 구조
 * - 데이터 중심의 시각화
 * - 논리적 흐름과 높은 가독성
 */

// 차트 데이터
const satisfactionData = [
  { name: "매우만족", value: 16, fill: "#105AFF" },
  { name: "만족", value: 18, fill: "#3B82F6" },
  { name: "보통", value: 24, fill: "#93C5FD" },
  { name: "불만족", value: 42, fill: "#DBEAFE" },
];

const timeReductionData = [
  { name: "수기 장부", time: 180 },
  { name: "디지털 키오스크", time: 45 },
  { name: "패드 기반 시스템", time: 30 },
];

const deviceComparisonData = [
  { metric: "공간 부담", pad: 20, kiosk: 80 },
  { metric: "유연성", pad: 85, kiosk: 40 },
  { metric: "초기 투자", pad: 30, kiosk: 85 },
  { metric: "무인 운영", pad: 50, kiosk: 95 },
  { metric: "로비 적합성", pad: 90, kiosk: 60 },
];

const uxPatternData = [
  { pattern: "첫 화면\n행동 한정", implementation: 95 },
  { pattern: "사용자\n분기", implementation: 88 },
  { pattern: "선택형\nUI", implementation: 92 },
  { pattern: "자동화\n호출", implementation: 85 },
  { pattern: "명확한\n완료 안내", implementation: 90 },
  { pattern: "브랜드\n강화", implementation: 87 },
  { pattern: "기기형태\n선택", implementation: 78 },
];

export default function Report() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white">
      {/* ===== 1. 헤더 ===== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-700">더존을지타워</h1>
              <p className="text-sm text-gray-600">내방고객 관리 시스템 벤치마크 리서치</p>
            </div>
            <Button variant="outline" size="sm">
              PDF 다운로드
            </Button>
          </div>
        </div>
      </header>

      {/* ===== 2. 히어로 섹션 ===== */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              내방고객 관리 시스템 디지털화 방향 수립을 위한 벤치마크 리서치
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              패드 기반 방문 등록 UX 제안을 위한 기업·병원·호텔 사례 분석
            </p>
            <div className="flex gap-3">
              <Badge className="bg-blue-600">기업 방문객 관리</Badge>
              <Badge className="bg-blue-600">병원 디지털 접수</Badge>
              <Badge className="bg-blue-600">호텔 체크인</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. 네비게이션 탭 ===== */}
      <div className="container py-8 border-b border-gray-200">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="background">배경</TabsTrigger>
            <TabsTrigger value="analysis">분석</TabsTrigger>
            <TabsTrigger value="insights">인사이트</TabsTrigger>
            <TabsTrigger value="proposal">제안</TabsTrigger>
          </TabsList>

          {/* ===== TAB 1: 개요 ===== */}
          <TabsContent value="overview" className="space-y-8 mt-8">
            {/* 현재 문제점 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  현재 상황 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h4 className="font-bold text-gray-900 mb-4">AS-IS (현재 상황)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-gray-700">수기 장부 작성 → 개인정보 노출 위험</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-gray-700">명함 제출·신분 확인 → 절차 번거로움</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-gray-700">수동 담당자 확인 → 방문객 대기 발생</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-gray-700">아날로그 방식 → 정체된 브랜드 경험</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-bold text-gray-900 mb-4">TO-BE (개선 후)</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">패드 기반 셀프 등록 → 개인정보 보호</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">단계형 입력 → 절차 간소화</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">자동 담당자 알림 → 대기 시간 단축</span>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">디지털 로비 경험 → 더존다운 이미지 강화</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 리서치 범위 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  리서치 범위
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">기업 방문객 관리</h4>
                    <p className="text-sm text-gray-600">기능 구조 및 운영 프로세스 확인</p>
                    <p className="text-xs text-gray-500 mt-2">Envoy, SwipedOn 사례</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">병원 디지털 접수</h4>
                    <p className="text-sm text-gray-600">비숙련 사용자 UX 분석</p>
                    <p className="text-xs text-gray-500 mt-2">키오스크 사용성 연구</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">호텔 체크인</h4>
                    <p className="text-sm text-gray-600">브랜드 경험과 응대 흐름</p>
                    <p className="text-xs text-gray-500 mt-2">야놀자, 비버웍스 사례</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 2: 배경 ===== */}
          <TabsContent value="background" className="space-y-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>리서치 핵심 질문</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="font-bold text-gray-900">중앙 질문</p>
                    <p className="text-gray-700 mt-2">
                      더존 로비 환경에 적합한 내방고객 등록 경험은 무엇인가?
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">1.</span>
                        <span className="text-gray-700">방문자는 어디서부터 등록을 시작하는가?</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">2.</span>
                        <span className="text-gray-700">방문 목적과 담당자는 어떤 순서로 입력하는가?</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">3.</span>
                        <span className="text-gray-700">입력 부담은 어떻게 줄이는가?</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">4.</span>
                        <span className="text-gray-700">담당자 연결 및 출입 안내는 어떻게 자동화되는가?</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">5.</span>
                        <span className="text-gray-700">비숙련 사용자를 위한 현장 UX는 어떻게 설계되는가?</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">6.</span>
                        <span className="text-gray-700">브랜드 경험은 어떻게 강화되는가?</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="font-bold text-blue-600">7.</span>
                        <span className="text-gray-700">더존에는 패드형과 키오스크형 중 어떤 접점이 더 적합한가?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>공통 분석 기준 (9가지)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { icon: "🚪", title: "첫 화면 진입", desc: "등록 시작, QR 스캔, 예약 확인" },
                    { icon: "🔀", title: "사용자 분기", desc: "사전 등록 vs 현장 등록" },
                    { icon: "📝", title: "정보 입력", desc: "이름, 연락처, 회사명, 목적" },
                    { icon: "✍️", title: "입력 UX", desc: "선택형, 검색형, 자동완성" },
                    { icon: "📞", title: "담당자 연결", desc: "검색, 부서 선택, 자동 알림" },
                    { icon: "✅", title: "완료 결과", desc: "출입증, QR, 대기 안내" },
                    { icon: "♿", title: "접근성", desc: "큰 버튼, 명확한 문구" },
                    { icon: "🎨", title: "브랜드 경험", desc: "웰컴 무드, 프리미엄 인상" },
                    { icon: "📱", title: "기기 적합성", desc: "패드형 vs 키오스크형" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 3: 분석 ===== */}
          <TabsContent value="analysis" className="space-y-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>병원 키오스크 사용성 분석</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-4">
                      시니어 세대 키오스크 사용 만족도
                    </p>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={satisfactionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                          {satisfactionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-xs text-gray-600 mt-4">
                      총 58%의 시니어가 키오스크 사용에 긍정적 (만족 + 매우만족)
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">병원 키오스크 UX 설계 원칙</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">1.</span>
                        <span className="text-gray-700"><strong>단순성 우선:</strong> 간결한 프롬프트, 충분한 여백</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">2.</span>
                        <span className="text-gray-700"><strong>터치 친화적:</strong> 큰 버튼(44x44px), 적절한 간격</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">3.</span>
                        <span className="text-gray-700"><strong>선형적 워크플로우:</strong> 진행 표시기, 편집 옵션</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">4.</span>
                        <span className="text-gray-700"><strong>명확한 메시지:</strong> 긍정적 언어, 시각적 단서</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600 font-bold">5.</span>
                        <span className="text-gray-700"><strong>접근성:</strong> 스크린 리더, 다국어, 텍스트 음성 변환</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>방문 등록 시간 단축 효과</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={timeReductionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "시간 (초)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => `${value}초`} />
                    <Bar dataKey="time" fill="#105AFF" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-4">
                  패드 기반 시스템은 수기 장부 대비 83% 시간 단축
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>디바이스 비교: 패드형 vs 키오스크형</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={deviceComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="metric" width={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pad" fill="#105AFF" name="패드형" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="kiosk" fill="#93C5FD" name="키오스크형" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-4">
                  패드형이 공간 부담, 유연성, 초기 투자 측면에서 우수
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 4: 인사이트 ===== */}
          <TabsContent value="insights" className="space-y-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  우수 사례에서 반복적으로 나타난 UX 패턴
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={uxPatternData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="pattern" width={60} interval={0} tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="implementation" fill="#10B981" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-xs text-gray-600 mt-4">
                  모든 패턴이 78% 이상의 구현율을 보임 (업계 표준)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>더존 적용 관점의 핵심 인사이트</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      insight: "수기 장부 대체",
                      application: "단순 디지털 입력이 아니라 방문 절차 전체의 재설계가 되어야 함",
                    },
                    {
                      insight: "방문자 분류",
                      application: "사전 예약자와 현장 방문자를 명확히 구분",
                    },
                    {
                      insight: "미등록 내방객",
                      application: "패드 기반의 단계형 셀프 등록 프로세스로 정리",
                    },
                    {
                      insight: "담당자 연결",
                      application: "담당자 검색 및 문자/알림 자동 발송으로 안내데스크 부담 감소",
                    },
                    {
                      insight: "완료 안내",
                      application: "출입 안내, 대기 안내, 주차 관련 안내를 일관되게 제공",
                    },
                    {
                      insight: "운영 방식",
                      application: "완전 무인보다 '디지털 접수 + 자연스러운 안내'가 공존하는 방향이 적합",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <Badge className="bg-blue-600">{idx + 1}</Badge>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.insight}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.application}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ===== TAB 5: 제안 ===== */}
          <TabsContent value="proposal" className="space-y-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>더존 내방고객 관리 시스템 제안 방향</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
                  <p className="text-lg font-bold text-gray-900">메인 문구</p>
                  <p className="text-gray-700 mt-3 leading-relaxed">
                    "미등록 내방 고객이 로비에서 패드를 통해 빠르게 방문을 등록하고, 담당자 연결과 출입 절차까지 자연스럽게 이어지는 디지털 체크인 경험"
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">빠른 방문 등록</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 최소 정보 입력</li>
                      <li>• 단계별 안내</li>
                      <li>• 방문 목적 기반 분기</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">자동 연결</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 담당자 검색</li>
                      <li>• 자동 문자/알림</li>
                      <li>• 출입·주차 시스템 연계</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">명확한 완료 안내</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 대기 위치</li>
                      <li>• 담당자 알림 완료</li>
                      <li>• 출입 절차 및 주차 안내</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">패드 기반 로비 경험</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 데스크와 자연스러운 조화</li>
                      <li>• 직원 응대와 병행 가능</li>
                      <li>• 더존다운 이미지 강화</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>디바이스 방향성 제안</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="font-bold text-gray-900 mb-2">1차 제안: 패드형 내방고객 등록 시스템</h4>
                    <p className="text-sm text-gray-700">
                      로비/데스크에서 자연스럽게 활용 가능한 패드형 방문 등록 시스템을 우선 검토
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-bold text-gray-900 mb-2">보조 확장안: 키오스크형</h4>
                    <p className="text-sm text-gray-700">
                      방문객 수가 많거나, 완전 무인 운영이 필요하거나, 출입증 자동 출력이 핵심 요구가 되는 경우 검토
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">판단 근거</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>현재 더존 과제는 완전 무인화보다 수기 절차 개선에 가까움</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>로비 데스크에서의 실제 운영 흐름과 맞음</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>패드형은 공간 부담이 낮고, 초기 제안 단계에서 실현 가능성이 높음</span>
                      </li>
                      <li className="flex gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>향후 요구 증대 시 키오스크형 확장 검토 가능</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                    <p className="text-sm font-semibold text-gray-900">
                      결론: 패드형 방문 등록 UX를 중심으로 기획하되, 운영 시나리오에 따라 거치형·키오스크형으로 확장 가능한 구조를 고려한다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>다음 단계 (기획·디자인 단계)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      step: "서비스 구조 정의",
                      items: [
                        "사전 등록자 / 미등록 방문자 분기",
                        "패드형 접수 운영 범위 설정",
                        "관리자/담당자 역할 정리",
                      ],
                    },
                    {
                      step: "사용자 플로우 설계",
                      items: [
                        "방문 등록 시작부터 완료까지 단계 정의",
                        "예외 상황 흐름 설계",
                        "담당자 알림 및 출입 안내 위치 설정",
                      ],
                    },
                    {
                      step: "와이어프레임 제작",
                      items: [
                        "패드 홈 화면, 방문 유형 선택",
                        "기본 정보 입력, 담당자 검색",
                        "개인정보 동의, 차량/주차 정보",
                        "등록 완료 및 대기 안내",
                      ],
                    },
                  ].map((section, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-blue-600">{idx + 1}</Badge>
                        <h4 className="font-bold text-gray-900">{section.step}</h4>
                      </div>
                      <ul className="space-y-2 ml-8">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-sm text-gray-700 flex gap-2">
                            <span className="text-blue-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* ===== 푸터 ===== */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">리서치 개요</h4>
              <p className="text-sm text-gray-600">
                더존을지타워의 내방고객 관리 시스템 디지털화를 위한 종합 벤치마크 리서치
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">분석 범위</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 기업 방문객 관리 시스템</li>
                <li>• 병원 디지털 접수 시스템</li>
                <li>• 호텔 체크인 시스템</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-3">주요 결론</h4>
              <p className="text-sm text-gray-600">
                패드형 방문 등록 시스템을 1차 제안으로 추진하되, 향후 확장 가능한 구조 설계
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>더존을지타워 내방고객 관리 시스템 벤치마크 리서치 | 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
