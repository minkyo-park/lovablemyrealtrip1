import { ExternalLink, Copy, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import CouponCard from "@/components/CouponCard";
import SchemaOrg from "@/components/SchemaOrg";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";
const LINKPRICE_LINK = "https://myrealt.rip/ai1986";

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "마이리얼트립 할인코드 목록 2026년 7월",
  "description": "2026년 7월 현재 사용 가능한 마이리얼트립 공식 할인코드 전체 목록",
  "numberOfItems": 8,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "HOT20000 - 2만원 할인" },
    { "@type": "ListItem", "position": 2, "name": "HOT30000 - 3만원 할인" },
    { "@type": "ListItem", "position": 3, "name": "HOT50000 - 5만원 할인" },
    { "@type": "ListItem", "position": 4, "name": "LINKPRICE3000 - 15만원 결제 시 3,000원 할인 (해외 투어·티켓 전용)" },
    { "@type": "ListItem", "position": 5, "name": "LINKPRICE1000 - 5만원 결제 시 1,000원 할인 (해외 투어·티켓 전용)" },
    { "@type": "ListItem", "position": 6, "name": "가입 즉시 무료 쿠폰" },
    { "@type": "ListItem", "position": 7, "name": "아시아나항공 제휴 쿠폰" },
    { "@type": "ListItem", "position": 8, "name": "롯데면세점 제휴 쿠폰" },
  ]
};

const handleCopyCode = (code: string, link: string = AFFILIATE_LINK) => {
  navigator.clipboard.writeText(code);
  toast.success(`"${code}" 코드가 복사되었습니다!`);
  window.open(link, "_blank", "noopener,noreferrer");
};

const quickCopyCodes: { code: string; link: string }[] = [
  { code: "HOT20000", link: AFFILIATE_LINK },
  { code: "HOT30000", link: AFFILIATE_LINK },
  { code: "HOT50000", link: AFFILIATE_LINK },
  { code: "LINKPRICE3000", link: LINKPRICE_LINK },
  { code: "LINKPRICE1000", link: LINKPRICE_LINK },
];

export default function DiscountCodes() {
  return (
    <>
      <SchemaOrg
        schema={schema}
        title="마이리얼트립 쿠폰"
        description="마이리얼트립 쿠폰 & 프로모션 코드 완전 정리. 최신 할인코드를 확인하고 최대 5만원 할인받으세요."
        canonical="https://lvmrt.agd-offer.co.kr/discount-codes"
      />

      {/* Header */}
      <section className="navy-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="badge-accent mb-4 inline-block">2026년 7월 업데이트</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-3">마이리얼트립 할인코드 모음</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            현재 사용 가능한 모든 마이리얼트립 할인코드와 프로모션 쿠폰을 한곳에서 확인하세요. <a href="https://solar-revival.co.kr/myrealtrip" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/90 hover:underline">마이리얼트립 할인쿠폰</a> 관련 추가 정보도 확인해 보세요.
          </p>
        </div>
      </section>

      {/* Hot Deal Codes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">🔥 핫딜 쿠폰코드 3종</h2>
          <p className="section-subtitle">마이리얼트립 공식 핫딜 페이지에서 제공하는 할인코드입니다. 금액이 클수록 최소 결제 금액 조건이 있을 수 있습니다.</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <CouponCard
              code="HOT20000"
              discount="2만 원 할인"
              description="투어·액티비티·숙소 등 주요 카테고리에 적용 가능합니다. 가장 부담 없이 사용할 수 있는 핫딜 쿠폰입니다."
              image="/images/hot20000.png"
              category="핫딜"
              conditions="마이리얼트립 핫딜 페이지(myrealtrip.com/themes/264/offers)에서 확인"
            />
            <CouponCard
              code="HOT30000"
              discount="3만 원 할인"
              description="중간 금액대 여행 상품에 최적화된 핫딜 쿠폰코드입니다. 투어와 숙소 예약에 적극 활용하세요."
              image="/images/hot30000.png"
              category="핫딜"
              conditions="최소 결제 금액 조건이 있을 수 있으므로 사전 확인 권장"
            />
            <CouponCard
              code="HOT50000"
              discount="5만 원 할인"
              description="최대 할인 금액의 프리미엄 핫딜 코드입니다. 고액 투어 패키지나 호텔 장기 숙박 예약 시 특히 유용합니다."
              image="/images/hot50000.png"
              category="프리미엄 핫딜"
              conditions="최소 결제 금액 제한이 있을 수 있으니 핫딜 페이지에서 조건 확인"
            />
          </div>

          {/* Comparison Table */}
          <div className="card-elevated p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">📊 핫딜 쿠폰코드 비교 분석</h3>
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>코드명</th>
                    <th>할인 금액</th>
                    <th>추천 사용 시나리오</th>
                    <th>예상 최소 결제액</th>
                    <th>실질 할인율 (10만원 기준)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="코드명" className="font-mono font-bold">HOT20000</td>
                    <td data-label="할인 금액">20,000원</td>
                    <td data-label="추천 시나리오">소규모 투어, 당일 액티비티</td>
                    <td data-label="최소 결제액">~5만원</td>
                    <td data-label="할인율">20%</td>
                  </tr>
                  <tr>
                    <td data-label="코드명" className="font-mono font-bold">HOT30000</td>
                    <td data-label="할인 금액">30,000원</td>
                    <td data-label="추천 시나리오">숙소 1~2박, 반일 투어</td>
                    <td data-label="최소 결제액">~10만원</td>
                    <td data-label="할인율">30%</td>
                  </tr>
                  <tr>
                    <td data-label="코드명" className="font-mono font-bold">HOT50000</td>
                    <td data-label="할인 금액">50,000원</td>
                    <td data-label="추천 시나리오">프리미엄 투어, 장기 숙박</td>
                    <td data-label="최소 결제액">~20만원</td>
                    <td data-label="할인율">50% (최대)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* LINKPRICE Overseas Tour & Ticket Coupons */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">✈️ 해외 투어·티켓 전용 쿠폰 (LINKPRICE)</h2>
          <p className="section-subtitle">해외 투어·티켓 상품에만 사용 가능한 전용 할인 쿠폰입니다. 발급 기간: 2026년 7월 1일~7월 30일, 사용 기간: 발급일로부터 7일 이내. 선착순 한정 수량으로 예산 소진 시 별도 안내 없이 종료됩니다.</p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            <CouponCard
              code="LINKPRICE3000"
              discount="3,000원 할인 (약 2%)"
              description="해외 투어·티켓 상품 전용 쿠폰입니다. 15만 원 이상 결제 시 3,000원이 할인됩니다."
              image="/images/hot30000.png"
              category="해외 투어·티켓 전용"
              conditions="15만 원 결제 시 적용 / 발급 후 7일 이내 사용 / 선착순 한정 수량 · 예산 소진 시 종료 · 일부 상품 사용 불가 · 타 쿠폰 중복 불가"
              link={LINKPRICE_LINK}
            />
            <CouponCard
              code="LINKPRICE1000"
              discount="1,000원 할인 (약 2%)"
              description="해외 투어·티켓 상품 전용 쿠폰입니다. 5만 원 이상 결제 시 1,000원이 할인됩니다."
              image="/images/hot20000.png"
              category="해외 투어·티켓 전용"
              conditions="5만 원 결제 시 적용 / 발급 후 7일 이내 사용 / 선착순 한정 수량 · 예산 소진 시 종료 · 일부 상품 사용 불가 · 타 쿠폰 중복 불가"
              link={LINKPRICE_LINK}
            />
          </div>

          {/* LINKPRICE comparison */}
          <div className="card-elevated p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">📊 해외 투어·티켓 전용 쿠폰 비교</h3>
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>코드명</th>
                    <th>할인 금액</th>
                    <th>최소 결제 금액</th>
                    <th>할인율</th>
                    <th>적용 상품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="코드명" className="font-mono font-bold">LINKPRICE3000</td>
                    <td data-label="할인 금액">3,000원</td>
                    <td data-label="최소 결제 금액">15만 원</td>
                    <td data-label="할인율">약 2%</td>
                    <td data-label="적용 상품">해외 투어·티켓</td>
                  </tr>
                  <tr>
                    <td data-label="코드명" className="font-mono font-bold">LINKPRICE1000</td>
                    <td data-label="할인 금액">1,000원</td>
                    <td data-label="최소 결제 금액">5만 원</td>
                    <td data-label="할인율">약 2%</td>
                    <td data-label="적용 상품">해외 투어·티켓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              발급 기간 2026.06.01~06.30 · 사용 기간 발급일로부터 7일 이내 · 선착순 한정 수량(예산 소진 시 별도 안내 없이 종료) · 일부 상품 사용 불가 · 타 쿠폰 중복 사용 불가.
            </p>
            <a href={LINKPRICE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm mt-4 justify-center">
              <ExternalLink className="h-4 w-4" /> 전용 링크에서 쿠폰 받기
            </a>
          </div>
        </div>
      </section>

      {/* Sign-up Coupons */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">🎁 가입 즉시 다운로드 쿠폰</h2>
          <p className="section-subtitle">마이리얼트립 회원 가입 후 쿠폰 페이지에서 무제한으로 다운로드할 수 있는 쿠폰입니다. 매달 새로운 쿠폰이 업데이트됩니다.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-elevated overflow-hidden">
              <img src="/images/signup-coupon.png" alt="가입 즉시 무료 쿠폰" className="w-full h-48 object-contain bg-muted p-4" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">무제한 다운로드 쿠폰</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  마이리얼트립 회원이라면 누구나 쿠폰 다운로드 페이지(myrealtrip.com/promotions/mrtcoupon)에서 다양한 쿠폰을 무제한으로 받을 수 있습니다.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <p className="text-sm"><strong>적용 카테고리:</strong> 숙소, 렌터카, 투어 및 티켓</p>
                  <p className="text-sm mt-1"><strong>발급 방법:</strong> 회원 가입 후 쿠폰 페이지에서 직접 다운로드</p>
                  <p className="text-sm mt-1"><strong>업데이트:</strong> 매월 새로운 쿠폰 추가</p>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm w-full justify-center">
                  <ExternalLink className="h-4 w-4" /> 가입하고 쿠폰 받기
                </a>
              </div>
            </div>

            <div className="card-elevated overflow-hidden">
              <img src="/images/new-member.png" alt="신규 회원 웰컴 보너스" className="w-full h-48 object-contain bg-muted p-4" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">신규 회원 특별 쿠폰</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  처음 가입하는 회원에게는 첫 예약 시 추가 할인이 적용되는 특별 쿠폰이 제공됩니다. 재방문 혜택도 일정 횟수 이상 예약 시 추가 쿠폰이 발급됩니다.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <p className="text-sm"><strong>신규 회원:</strong> 가입 후 첫 예약 시 추가 할인</p>
                  <p className="text-sm mt-1"><strong>재방문 혜택:</strong> 일정 횟수 이상 예약 시 추가 쿠폰</p>
                  <p className="text-sm mt-1"><strong>확인:</strong> myrealtrip.com/promotions/benefit</p>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm w-full justify-center">
                  <ExternalLink className="h-4 w-4" /> 신규 가입 혜택 확인
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Coupons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">🤝 제휴 쿠폰</h2>
          <p className="section-subtitle">항공사, 면세점 등 제휴 파트너를 통해 발급받을 수 있는 추가 할인 쿠폰입니다.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-elevated overflow-hidden">
              <img src="/images/asiana-coupon.png" alt="아시아나항공 제휴 쿠폰" className="w-full h-48 object-contain bg-muted p-4" loading="lazy" />
              <div className="p-6">
                <span className="badge-primary mb-2 inline-block">항공사 제휴</span>
                <h3 className="text-lg font-bold mb-2">아시아나항공 제휴 쿠폰</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  아시아나항공 홈페이지 또는 앱에서 항공권 예약 후 쿠폰 발급 페이지로 이동하면 최대 1만 원 할인 쿠폰을 받을 수 있습니다.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-4 text-sm space-y-1">
                  <p><strong>할인 금액:</strong> 최대 1만 원</p>
                  <p><strong>발급 횟수:</strong> 연 최대 3회 (1~4월 / 5~8월 / 9~12월 각 1회)</p>
                  <p><strong>사용 기간:</strong> 발급 당월까지</p>
                  <p><strong>발급 방법:</strong> 아시아나항공 온라인 예약 완료 → 마이리얼트립 배너 클릭</p>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm w-full justify-center">
                  <ExternalLink className="h-4 w-4" /> 마이리얼트립에서 확인
                </a>
              </div>
            </div>

            <div className="card-elevated overflow-hidden">
              <img src="/images/lotte-coupon.png" alt="롯데면세점 제휴 쿠폰" className="w-full h-48 object-contain bg-muted p-4" loading="lazy" />
              <div className="p-6">
                <span className="badge-primary mb-2 inline-block">면세점 제휴</span>
                <h3 className="text-lg font-bold mb-2">롯데면세점 x 마이리얼트립 제휴 쿠폰</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  롯데면세점에서 면세품을 구매한 뒤 마이리얼트립 제휴쿠폰을 발급받으면 호텔 또는 투어 예약 시 추가 할인을 받을 수 있습니다.
                </p>
                <div className="bg-muted rounded-lg p-4 mb-4 text-sm space-y-1">
                  <p><strong>최대 금액:</strong> 최대 $23 상당</p>
                  <p><strong>적용 조건:</strong> 롯데면세점 공식 홈페이지에서 해외여행 상품 구매 후 발급</p>
                  <p><strong>주의:</strong> 타 제휴쿠폰과 중복 불가 / 주문 1건당 1개 사용</p>
                </div>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm w-full justify-center">
                  <ExternalLink className="h-4 w-4" /> 마이리얼트립에서 확인
                </a>
              </div>
            </div>
          </div>

          {/* Partnership comparison */}
          <div className="card-elevated p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">📋 제휴 쿠폰 비교표</h3>
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>제휴처</th>
                    <th>할인 금액</th>
                    <th>발급 조건</th>
                    <th>횟수 제한</th>
                    <th>중복 사용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="제휴처" className="font-semibold">아시아나항공</td>
                    <td data-label="할인 금액">최대 1만원</td>
                    <td data-label="발급 조건">항공권 예약 후</td>
                    <td data-label="횟수 제한">연 3회</td>
                    <td data-label="중복 사용">❌ 타 제휴쿠폰 불가</td>
                  </tr>
                  <tr>
                    <td data-label="제휴처" className="font-semibold">롯데면세점</td>
                    <td data-label="할인 금액">최대 $23</td>
                    <td data-label="발급 조건">면세품 구매 후</td>
                    <td data-label="횟수 제한">1건당 1개</td>
                    <td data-label="중복 사용">❌ 타 제휴쿠폰 불가</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Card Payment Discounts */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">💳 결제 수단별 추가 할인</h2>
          <p className="section-subtitle">마이리얼트립은 매월 결제 수단별 추가 할인 혜택을 제공합니다. 공식 페이지(myrealtrip.com/promotions/checkout)에서 최신 정보를 확인하세요.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img src="/images/card-discount.png" alt="카드 결제 할인" className="card-elevated h-48 w-full object-contain p-4 bg-card" loading="lazy" />
            <div className="card-elevated p-6">
              <h3 className="text-lg font-bold mb-4">결제 혜택 유형별 정리</h3>
              <div className="space-y-3">
                {[
                  { type: "즉시 할인", desc: "결제 시 바로 차감되어 최종 결제 금액에 반영", icon: "⚡" },
                  { type: "결제일 할인", desc: "특정 결제일에 자동 적용되는 할인", icon: "📅" },
                  { type: "청구 할인", desc: "카드 청구서 발행 시 차감 (결제 금액에는 미반영)", icon: "📄" },
                  { type: "무이자 할부", desc: "선택 카드사에 따라 최대 12개월 무이자", icon: "💰" },
                ].map((item) => (
                  <div key={item.type} className="flex gap-3 items-start">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{item.type}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card-elevated p-6 text-center">
            <img src="/images/double-discount.png" alt="할인 중복 적용" className="h-24 mx-auto mb-4 object-contain" loading="lazy" />
            <h3 className="text-lg font-bold mb-2">💡 할인 중복 적용 팁</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-4">
              마이리얼트립 <strong>플러스쿠폰</strong>은 일부 제휴쿠폰과 중복 적용이 가능합니다. 카드사 결제 할인과도 병행 가능하므로 최대 절약을 위해 여러 할인을 조합해 보세요!
            </p>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button">
              마이리얼트립에서 확인하기 <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Copy Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">⚡ 빠른 코드 복사</h2>
          <p className="section-subtitle text-center">코드를 클릭하면 복사 후 마이리얼트립 페이지가 열립니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {quickCopyCodes.map(({ code, link }) => (
              <button
                key={code}
                onClick={() => handleCopyCode(code, link)}
                className="coupon-code-display cursor-pointer hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                <Copy className="h-4 w-4 text-primary" /> {code}
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <img src="/images/season-special.png" alt="시즌 스페셜 할인" className="h-20 object-contain" loading="lazy" />
            <img src="/images/customer-support.png" alt="고객 지원" className="h-20 object-contain" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
