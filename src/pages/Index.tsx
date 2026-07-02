import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Tag, CreditCard, Plane, ExternalLink } from "lucide-react";
import CouponCard from "@/components/CouponCard";
import SchemaOrg from "@/components/SchemaOrg";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "마이리얼트립 쿠폰",
    "url": "https://lvmrt.agd-offer.co.kr",
    "description": "7월 마이리얼트립 쿠폰 총정리! 최신 할인코드와 마이리얼트립 쿠폰 받는 법까지 한 번에. 지금 바로 쓸 수 있는 쿠폰 모음, 7월 여행 예약 전 할인쿠폰 받아서 더 저렴하게 예약하세요!",
    "inLanguage": "ko",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "마이리얼트립 할인코드는 어떻게 사용하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "마이리얼트립 결제 단계에서 할인코드 입력란에 코드를 입력하고 적용 버튼을 누르면 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "2026년 7월 사용 가능한 마이리얼트립 할인코드는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HOT20000(2만원), HOT30000(3만원), HOT50000(5만원) 핫딜 쿠폰코드와 가입 즉시 다운로드 쿠폰이 있습니다."
        }
      }
    ]
  }
];

const topCoupons = [
  {
    code: "HOT20000",
    discount: "2만 원 할인",
    description: "투어·액티비티·숙소 등 주요 카테고리에 적용 가능한 핫딜 쿠폰코드입니다.",
    image: "/images/hot20000.png",
    category: "핫딜",
    conditions: "마이리얼트립 핫딜 페이지에서 확인 가능",
  },
  {
    code: "HOT30000",
    discount: "3만 원 할인",
    description: "더 큰 할인! 중간 금액대 여행 상품에 최적화된 핫딜 쿠폰코드입니다.",
    image: "/images/hot30000.png",
    category: "핫딜",
    conditions: "최소 결제 금액 조건 확인 필요",
  },
  {
    code: "HOT50000",
    discount: "5만 원 할인",
    description: "최대 할인! 고액 여행 상품 예약 시 최대 절약이 가능한 프리미엄 핫딜 코드입니다.",
    image: "/images/hot50000.png",
    category: "프리미엄 핫딜",
    conditions: "최소 결제 금액 조건 존재 가능",
  },
];

export default function Index() {
  return (
    <>
      <SchemaOrg
        schema={schema}
        title="마이리얼트립 쿠폰"
        description="7월 마이리얼트립 쿠폰 총정리! 최신 할인코드와 마이리얼트립 쿠폰 받는 법까지 한 번에. 지금 바로 쓸 수 있는 쿠폰 모음, 7월 여행 예약 전 할인쿠폰 받아서 더 저렴하게 예약하세요!"
        canonical="https://lvmrt.agd-offer.co.kr/"
      />

      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <span className="badge-accent mb-4 inline-block">2026년 7월 최신</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4 leading-tight">
              마이리얼트립 할인쿠폰<br />최대 5만 원 할인
            </h1>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl">
              마이리얼트립의 최신 할인코드, 프로모션, 제휴쿠폰 정보를 한곳에서 확인하세요.
              항공권, 숙소, 투어, 렌터카까지 모든 카테고리 할인!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button-secondary text-base">
                <ExternalLink className="h-5 w-5" /> 지금 바로 할인받기
              </a>
              <Link to="/discount-codes" className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold bg-card/20 text-primary-foreground border border-primary-foreground/30 hover:bg-card/30 transition-colors">
                할인코드 전체보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/images/hero-illustration.png" alt="마이리얼트립 할인쿠폰 여행 일러스트" className="w-64 md:w-80" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Tag, label: "최대 할인", value: "5만 원" },
              { icon: Sparkles, label: "할인코드", value: "3종+" },
              { icon: Shield, label: "최저가 보장", value: "2배 포인트" },
              { icon: CreditCard, label: "카드 추가할인", value: "즉시적용" },
            ].map((stat) => (
              <div key={stat.label} className="card-elevated p-5 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Coupons */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">🎟️ 지금 사용 가능한 인기 할인코드</h2>
          <p className="section-subtitle text-center">2026년 7월 기준, 검증된 마이리얼트립 핫딜 쿠폰코드입니다.</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {topCoupons.map((coupon) => (
              <CouponCard key={coupon.code} {...coupon} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/discount-codes" className="cta-button text-base">
              전체 할인코드 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">📊 마이리얼트립 vs 타 여행 플랫폼 비교</h2>
          <p className="section-subtitle text-center">마이리얼트립만의 차별화된 강점을 한눈에 비교하세요.</p>
          <div className="card-elevated overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>비교 항목</th>
                    <th>마이리얼트립</th>
                    <th>타 플랫폼 A</th>
                    <th>타 플랫폼 B</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["핫딜 쿠폰코드", "최대 5만원 (3종)", "최대 3만원", "쿠폰 미제공"],
                    ["한국어 가이드 투어", "✅ 다수 보유", "❌ 제한적", "❌ 없음"],
                    ["최저가 보장", "✅ 차액 2배 포인트", "❌ 없음", "✅ 차액 환불"],
                    ["무료 가입 쿠폰", "✅ 숙소/렌터카/투어", "✅ 숙소만", "❌ 없음"],
                    ["카드사 추가 할인", "✅ 매월 업데이트", "✅ 일부 카드", "❌ 미제공"],
                    ["제휴 쿠폰 (항공사 등)", "✅ 아시아나 등", "❌ 없음", "✅ 일부"],
                    ["고객센터 한국어 지원", "✅ 전화/채팅/이메일", "✅ 채팅만", "❌ 영어만"],
                  ].map(([item, mrt, a, b]) => (
                    <tr key={item}>
                      <td data-label="비교 항목" className="font-semibold">{item}</td>
                      <td data-label="마이리얼트립" className="text-primary font-bold">{mrt}</td>
                      <td data-label="타 플랫폼 A">{a}</td>
                      <td data-label="타 플랫폼 B">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <img src="/images/compare-save.png" alt="비교 분석 배지" className="h-24 object-contain" loading="lazy" />
            <img src="/images/best-price.png" alt="최저가 보장 배지" className="h-24 object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">📱 할인코드 적용 방법</h2>
          <p className="section-subtitle text-center">간단 6단계로 마이리얼트립 할인코드를 적용하세요.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: 1, text: "로그인", icon: "🔐" },
              { step: 2, text: "상품 검색", icon: "🔍" },
              { step: 3, text: "결제 단계", icon: "🛒" },
              { step: 4, text: "코드 입력", icon: "✏️" },
              { step: 5, text: "자동 최대할인", icon: "🎯" },
              { step: 6, text: "결제 완료", icon: "✅" },
            ].map(({ step, text, icon }) => (
              <div key={step} className="card-elevated p-4 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-xs font-bold text-primary mb-1">STEP {step}</div>
                <p className="text-sm font-semibold">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <img src="/images/how-to-apply.png" alt="할인코드 적용 방법 가이드" className="h-32 object-contain" loading="lazy" />
          </div>
          <div className="text-center mt-6">
            <Link to="/how-to-use" className="cta-button-secondary">
              자세한 적용 가이드 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category preview */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">🌍 카테고리별 주요 혜택</h2>
          <p className="section-subtitle text-center">여행 카테고리마다 다른 할인 혜택을 확인하세요.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "/images/tour-activity.png", title: "투어·액티비티", desc: "핫딜 2만~5만원 할인" },
              { img: "/images/hotel-deals.png", title: "숙소", desc: "가입 즉시 쿠폰 + 회원 특가" },
              { img: "/images/rental-car.png", title: "렌터카", desc: "25% 할인 쿠폰" },
              { img: "/images/flight-deals.png", title: "항공권", desc: "제휴 최대 1만원 할인" },
            ].map((cat) => (
              <Link key={cat.title} to="/category-benefits" className="card-elevated overflow-hidden text-center">
                <img src={cat.img} alt={`${cat.title} 할인 혜택`} className="w-full h-36 object-contain bg-muted p-3" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <img src="/images/double-discount.png" alt="이중 할인 혜택" className="h-32 mx-auto md:mx-0 object-contain" loading="lazy" />
            </div>
            <div className="flex-1 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                지금 바로 할인코드를 적용하세요!
              </h2>
              <p className="text-primary-foreground/90 mb-6">
                마이리얼트립 핫딜 쿠폰코드로 최대 5만원까지 절약하세요. 플러스쿠폰과 제휴쿠폰을 중복 적용하면 더 큰 할인이 가능합니다.
              </p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button-secondary text-base">
                <Plane className="h-5 w-5" /> 마이리얼트립에서 예약하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
