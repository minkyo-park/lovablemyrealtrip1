import { ExternalLink, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import SchemaOrg from "@/components/SchemaOrg";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "마이리얼트립 할인코드 적용 방법",
  "description": "마이리얼트립에서 할인코드를 적용하는 6단계 가이드",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "로그인", "text": "마이리얼트립 공식 홈페이지 또는 앱에 로그인합니다." },
    { "@type": "HowToStep", "position": 2, "name": "상품 검색", "text": "원하는 상품(항공권·숙소·투어 등)을 검색하고 선택합니다." },
    { "@type": "HowToStep", "position": 3, "name": "결제 단계 이동", "text": "결제 단계로 이동합니다." },
    { "@type": "HowToStep", "position": 4, "name": "할인코드 입력", "text": "결제 페이지의 할인코드 입력란에 코드를 입력하고 적용 버튼을 누릅니다." },
    { "@type": "HowToStep", "position": 5, "name": "자동 최대 할인", "text": "조건에 맞는 쿠폰이 있으면 자동으로 최대 할인 쿠폰이 선택됩니다." },
    { "@type": "HowToStep", "position": 6, "name": "결제 완료", "text": "할인 내역과 최종 결제 금액을 확인하고 결제를 완료합니다." },
  ],
};

const steps = [
  { step: 1, title: "로그인", desc: "마이리얼트립 공식 홈페이지(myrealtrip.com) 또는 앱에 로그인한 상태로 접속합니다. 회원이 아니라면 먼저 무료 회원가입을 진행하세요.", icon: "🔐" },
  { step: 2, title: "상품 검색", desc: "원하는 상품(항공권·숙소·투어 등)을 검색하고 선택합니다. 카테고리별로 적용 가능한 쿠폰이 다르므로 미리 확인하세요.", icon: "🔍" },
  { step: 3, title: "결제 단계 이동", desc: "원하는 상품을 선택한 후 결제 단계로 이동합니다. 여행 일정과 인원을 정확히 입력하세요.", icon: "🛒" },
  { step: 4, title: "할인코드 입력", desc: "결제 페이지의 '할인코드 입력란'에 코드를 입력하고 적용 버튼을 누릅니다. HOT20000, HOT30000, HOT50000 등을 입력해보세요.", icon: "✏️" },
  { step: 5, title: "자동 최대 할인 적용", desc: "조건에 맞는 쿠폰이 여러 개일 경우 자동으로 가장 큰 할인이 적용되는 쿠폰이 선택됩니다.", icon: "🎯" },
  { step: 6, title: "결제 완료", desc: "할인 내역과 최종 결제 금액을 확인하고 결제를 완료합니다. 할인이 정상 적용되었는지 최종 금액을 반드시 확인하세요.", icon: "✅" },
];

const errors = [
  { issue: "코드 미적용", cause: "쿠폰의 적용 카테고리가 다름", solution: "항공·숙소·투어별로 적용 조건이 다르므로 해당 카테고리 확인" },
  { issue: "유효기간 만료", cause: "쿠폰 기간이 지남", solution: "마이페이지 → '내 쿠폰'에서 유효기간 확인 후 기간 내 사용" },
  { issue: "취소 후 재사용 불가", cause: "동일 코드 재사용 제한", solution: "취소된 코드 대신 다른 유효한 코드 사용" },
  { issue: "제휴쿠폰 중복 불가", cause: "1건당 1개 제휴쿠폰 제한", solution: "더 혜택이 큰 코드 1개를 선택하여 적용" },
];

export default function HowToUse() {
  return (
    <>
      <SchemaOrg
        schema={schema}
        title="마이리얼트립 쿠폰"
        description="마이리얼트립 쿠폰 & 프로모션 코드 완전 정리. 최신 할인코드를 확인하고 최대 5만원 할인받으세요."
        canonical="https://lvmrt.agd-offer.co.kr/how-to-use"
      />

      {/* Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">할인코드 적용 방법 & 절약 팁</h1>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            마이리얼트립 할인코드를 100% 활용하는 완전 가이드. 적용 방법부터 오류 해결, 최대 절약 전략까지.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">📱 할인코드 적용 6단계</h2>
          <p className="section-subtitle">아래 단계를 따라하면 누구나 쉽게 마이리얼트립 할인코드를 적용할 수 있습니다. 최신 <a href="https://travista.co.kr/myrealtrip-deals-promo-code/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">마이리얼트립 할인쿠폰</a> 정보도 함께 참고해 보세요.</p>

          <div className="flex justify-center mb-8">
            <img src="/images/how-to-apply.png" alt="할인코드 적용 가이드 일러스트" className="h-40 object-contain" loading="lazy" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {steps.map(({ step, title, desc, icon }) => (
              <div key={step} className="card-elevated p-5 flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-xl">
                  {icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge-primary">STEP {step}</span>
                    <h3 className="font-bold">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-base">
              <ExternalLink className="h-5 w-5" /> 지금 바로 적용하기
            </a>
          </div>
        </div>
      </section>

      {/* Must-Know Checklist */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">✅ 할인코드 적용 전 필수 체크리스트</h2>
          <p className="section-subtitle">할인코드를 적용하기 전에 꼭 확인해야 할 사항들입니다.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "할인쿠폰은 결제 단계에서 '할인코드 입력란'에 입력",
              "조건에 맞는 쿠폰이 여러 개일 경우 자동으로 가장 큰 할인이 적용",
              "쿠폰마다 적용 가능한 카테고리(항공·숙소·투어 등)가 다르게 지정",
              "제휴쿠폰은 1건당 1개만 사용 가능하며 타 제휴쿠폰과 중복 불가",
              "마이리얼트립 플러스쿠폰은 일부 제휴쿠폰과 중복 적용 가능",
              "취소·변경 시 할인코드는 재사용이 안 될 수 있음",
              "상품 취소 후 환불 시 제공된 혜택은 회수됨",
              "할인코드 클릭 시 자동 복사되는 플랫폼도 있으니 확인",
            ].map((item, i) => (
              <div key={i} className="card-elevated p-4 flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <img src="/images/signup-coupon.png" alt="가입 쿠폰 이미지" className="h-24 object-contain" loading="lazy" />
            <img src="/images/best-price.png" alt="최저가 보장 이미지" className="h-24 object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">⚠️ 자주 발생하는 오류 & 해결 방법</h2>
          <p className="section-subtitle">할인코드 적용 시 문제가 발생했다면 아래 해결 방법을 확인하세요.</p>

          <div className="flex justify-center mb-8">
            <img src="/images/faq-tips.png" alt="FAQ 및 문제 해결" className="h-32 object-contain" loading="lazy" />
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {errors.map((err, i) => (
              <div key={i} className="card-elevated p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0" />
                  <h3 className="font-bold">{err.issue}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2"><strong>원인:</strong> {err.cause}</p>
                <p className="text-sm"><strong>해결:</strong> {err.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Price Guarantee */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">🛡️ 마이리얼트립 최저가 보장 프로그램</h2>
          <p className="section-subtitle">예약 후 더 저렴한 가격을 발견하면 차액의 2배를 포인트로 돌려받을 수 있습니다.</p>

          <div className="card-elevated p-6 max-w-3xl mx-auto flex flex-col md:flex-row gap-6 items-center">
            <img src="/images/best-price.png" alt="최저가 보장 프로그램" className="h-40 object-contain" loading="lazy" />
            <div>
              <h3 className="text-lg font-bold mb-3">최저가 보장 조건</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> 예약 후 <strong>24시간 이내</strong> 신고 필수</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> 타 플랫폼에서 <strong>동일 상품·동일 조건</strong>의 저렴한 가격 발견 시</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> <strong>차액의 2배</strong>를 포인트로 지급</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> 공식 혜택 페이지에서 상세 조건 확인</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Saving Strategies */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title">💡 최대 절약 전략 가이드</h2>
          <p className="section-subtitle">마이리얼트립에서 최대한 할인받는 5가지 전략을 공개합니다.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "1. 핫딜 쿠폰 + 카드사 할인 조합",
                desc: "핫딜 쿠폰코드(HOT20000~HOT50000)와 카드사 결제 할인은 동시에 적용할 수 있습니다. 매월 업데이트되는 카드사 혜택을 꼭 확인하세요.",
                img: "/images/card-discount.png",
              },
              {
                title: "2. 플러스쿠폰 + 제휴쿠폰 중복 적용",
                desc: "마이리얼트립 플러스쿠폰은 일부 제휴쿠폰과 중복 적용이 가능합니다. 두 개의 쿠폰을 동시에 사용해 이중 할인을 받으세요.",
                img: "/images/double-discount.png",
              },
              {
                title: "3. 가입 직후 쿠폰 대량 다운로드",
                desc: "회원 가입 직후 쿠폰 페이지에서 모든 쿠폰을 미리 다운로드 받아두세요. 사용하지 않아도 보유만으로 손해 없습니다.",
                img: "/images/signup-coupon.png",
              },
              {
                title: "4. 시즌 기획전 활용",
                desc: "봄/여름/가을/겨울 시즌별 특정 여행지 할인 기획전이 수시로 진행됩니다. 여행 시기에 맞는 기획전을 노리세요.",
                img: "/images/season-special.png",
              },
              {
                title: "5. 아시아나항공 예약 후 쿠폰 발급",
                desc: "아시아나항공으로 항공권을 예약했다면 반드시 마이리얼트립 제휴 쿠폰을 발급받으세요. 연 3회, 최대 1만원 추가 할인 가능합니다.",
                img: "/images/asiana-coupon.png",
              },
            ].map((strategy) => (
              <div key={strategy.title} className="card-elevated overflow-hidden">
                <img src={strategy.img} alt={strategy.title} className="w-full h-36 object-contain bg-muted p-3" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-bold mb-2">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-base">
              <ExternalLink className="h-5 w-5" /> 마이리얼트립에서 절약 시작하기
            </a>
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">📞 도움이 필요하신가요?</h2>
          <div className="card-elevated p-6 max-w-xl mx-auto text-center">
            <img src="/images/customer-support.png" alt="고객 지원 센터" className="h-32 mx-auto mb-4 object-contain" loading="lazy" />
            <h3 className="text-lg font-bold mb-2">마이리얼트립 고객센터</h3>
            <p className="text-2xl font-extrabold text-primary mb-2">1670-8208</p>
            <p className="text-sm text-muted-foreground mb-1">운영시간: 평일 기준 (주말·공휴일 별도 확인 필요)</p>
            <p className="text-sm text-muted-foreground mb-4">이메일/채팅: 공식 앱 또는 홈페이지 고객지원 채널 이용</p>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm">
              <ExternalLink className="h-4 w-4" /> 마이리얼트립 고객센터 바로가기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
