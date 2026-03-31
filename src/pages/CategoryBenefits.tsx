import { ExternalLink, Copy, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import SchemaOrg from "@/components/SchemaOrg";

const AFFILIATE_LINK = "https://myrealt.rip/GVYra5";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "마이리얼트립 카테고리별 할인 혜택 완전 가이드",
  "description": "투어·액티비티, 숙소, 렌터카, 항공권 등 마이리얼트립 카테고리별 할인 혜택과 최적 쿠폰 사용법을 안내합니다.",
  "datePublished": "2026-03-08",
  "dateModified": "2026-03-08",
  "author": { "@type": "Organization", "name": "마이리얼트립 할인쿠폰" },
  "publisher": { "@type": "Organization", "name": "마이리얼트립 할인쿠폰" },
};

const handleCopyCode = (code: string) => {
  navigator.clipboard.writeText(code);
  toast.success(`"${code}" 코드가 복사되었습니다!`);
  window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
};

const categories = [
  {
    title: "투어 · 액티비티",
    img: "/images/tour-activity.png",
    discount: "핫딜 쿠폰 2만~5만 원",
    bestCode: "HOT50000",
    description: "마이리얼트립의 핵심 카테고리입니다. 뉴욕 차량 투어, 나파밸리 와인 투어, 그랜드캐년 투어 등 현지인 가이드와 연결되는 다양한 투어·액티비티 상품에 핫딜 쿠폰코드를 적용할 수 있습니다.",
    tips: [
      "고액 프리미엄 투어에는 HOT50000 코드를 적용하면 최대 할인을 받을 수 있습니다.",
      "당일 액티비티는 HOT20000 코드로 부담 없이 할인받으세요.",
      "한국어 가이드가 포함된 투어는 마이리얼트립만의 강점입니다.",
      "시즌별 기획전에서 특정 여행지 투어가 추가 할인되는 경우가 많습니다.",
    ],
    comparison: {
      headers: ["항목", "마이리얼트립", "K사", "T사"],
      rows: [
        ["한국어 가이드 투어", "✅ 다수", "❌ 제한적", "✅ 일부"],
        ["핫딜 쿠폰 적용", "✅ 최대 5만원", "❌ 미지원", "✅ 최대 3만원"],
        ["최저가 보장", "✅ 차액 2배", "❌ 없음", "✅ 차액 환불"],
        ["투어 리뷰 수", "★★★★★", "★★★☆☆", "★★★★☆"],
      ],
    },
  },
  {
    title: "숙소",
    img: "/images/hotel-deals.png",
    discount: "가입 즉시 쿠폰 + 회원 전용 특가",
    bestCode: "HOT30000",
    description: "마이리얼트립은 국내외 호텔, 리조트, 게스트하우스, 에어비앤비 대안 숙소까지 폭넓은 숙소 옵션을 제공합니다. 가입 즉시 다운로드 가능한 숙소 쿠폰과 회원 전용 특가를 활용하세요.",
    tips: [
      "가입 직후 쿠폰 페이지에서 숙소 전용 쿠폰을 다운로드하세요.",
      "장기 숙박(3박 이상) 시 HOT50000 코드를 적용하면 효과가 극대화됩니다.",
      "카드사 결제 할인과 쿠폰을 병행 적용하면 추가 절약이 가능합니다.",
      "회원 전용 특가는 로그인 후에만 확인 가능합니다.",
    ],
    comparison: {
      headers: ["항목", "마이리얼트립", "B사", "A사"],
      rows: [
        ["가입 무료 쿠폰", "✅ 숙소·렌터카·투어", "✅ 숙소만", "❌ 없음"],
        ["회원 전용 특가", "✅ 있음", "✅ 있음", "✅ 있음"],
        ["카드사 추가 할인", "✅ 매월 업데이트", "✅ 일부", "❌ 미지원"],
        ["한국어 고객 지원", "✅ 전화/채팅/이메일", "✅ 채팅", "✅ 전화"],
      ],
    },
  },
  {
    title: "렌터카",
    img: "/images/rental-car.png",
    discount: "25% 할인 쿠폰",
    bestCode: "가입 쿠폰",
    description: "해외 여행 시 렌터카는 자유여행의 핵심입니다. 마이리얼트립에서는 가입 즉시 렌터카 전용 쿠폰을 다운로드할 수 있으며, 별도 이벤트 페이지에서 최대 25% 할인 쿠폰도 확인할 수 있습니다.",
    tips: [
      "렌터카 전용 쿠폰은 가입 즉시 다운로드 가능합니다.",
      "25% 할인 쿠폰은 별도 이벤트 페이지에서 확인해야 합니다.",
      "장기 렌트(7일 이상) 시 할인 효과가 극대화됩니다.",
      "보험 옵션도 함께 비교해보세요.",
    ],
    comparison: {
      headers: ["항목", "마이리얼트립", "H사 렌터카", "R사"],
      rows: [
        ["가입 쿠폰", "✅ 렌터카 포함", "❌ 없음", "✅ 첫 예약 할인"],
        ["최대 할인율", "25%", "15%", "20%"],
        ["한국어 지원", "✅ 완벽", "❌ 영어 위주", "✅ 일부"],
        ["보험 옵션", "✅ 다양", "✅ 다양", "✅ 기본"],
      ],
    },
  },
  {
    title: "항공권",
    img: "/images/flight-deals.png",
    discount: "아시아나항공 제휴 최대 1만 원 + 카드사 할인",
    bestCode: "아시아나 제휴",
    description: "마이리얼트립에서 항공권도 검색·예약할 수 있습니다. 특히 아시아나항공 제휴 쿠폰으로 최대 1만 원 추가 할인을 받을 수 있으며, 카드사 결제 할인도 병행 적용 가능합니다.",
    tips: [
      "아시아나항공 예약 후 마이리얼트립 배너를 통해 쿠폰을 발급받으세요.",
      "연 3회(1~4월/5~8월/9~12월 각 1회) 발급 가능합니다.",
      "발급 당월까지 사용해야 하므로 여행 직전에 발급하세요.",
      "카드사 무이자 할부(최대 12개월)를 활용하면 부담이 줄어듭니다.",
    ],
    comparison: {
      headers: ["항목", "마이리얼트립", "S사", "N사"],
      rows: [
        ["항공사 제휴 쿠폰", "✅ 아시아나 등", "❌ 없음", "✅ 일부"],
        ["카드사 할인", "✅ 매월 업데이트", "✅ 일부", "❌ 없음"],
        ["무이자 할부", "✅ 최대 12개월", "✅ 최대 6개월", "❌ 미지원"],
        ["한국어 지원", "✅ 전화/채팅", "✅ 채팅만", "✅ 전화"],
      ],
    },
  },
];

export default function CategoryBenefits() {
  return (
    <>
      <SchemaOrg
        schema={schema}
        title="마이리얼트립 할인쿠폰"
        description="마이리얼트립 할인쿠폰 & 프로모션 코드 완전 정리. 최신 할인코드를 확인하고 최대 5만원 할인받으세요."
        canonical="https://lvmrt.agd-offer.co.kr/category-benefits"
      />

      {/* Header */}
      <section className="navy-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="badge-accent mb-4 inline-block">카테고리별 완전 분석</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary-foreground mb-3">카테고리별 할인 혜택 가이드</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            투어·액티비티, 숙소, 렌터카, 항공권 — 카테고리마다 다른 할인 혜택을 비교 분석합니다.
          </p>
        </div>
      </section>

      {/* Overview Summary */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">🌍 카테고리별 핵심 혜택 요약</h2>
          <p className="section-subtitle text-center">한눈에 보는 카테고리별 추천 쿠폰 및 핵심 혜택</p>

          <div className="card-elevated overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th>주요 혜택</th>
                    <th>추천 코드</th>
                    <th>예상 절약액</th>
                    <th>난이도</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="카테고리" className="font-semibold">투어·액티비티</td>
                    <td data-label="주요 혜택">핫딜 쿠폰 2만~5만원</td>
                    <td data-label="추천 코드"><span className="font-mono font-bold text-primary">HOT50000</span></td>
                    <td data-label="절약액">최대 5만원+</td>
                    <td data-label="난이도">⭐ 쉬움</td>
                  </tr>
                  <tr>
                    <td data-label="카테고리" className="font-semibold">숙소</td>
                    <td data-label="주요 혜택">가입쿠폰 + 회원특가</td>
                    <td data-label="추천 코드"><span className="font-mono font-bold text-primary">HOT30000</span></td>
                    <td data-label="절약액">최대 3만원+</td>
                    <td data-label="난이도">⭐ 쉬움</td>
                  </tr>
                  <tr>
                    <td data-label="카테고리" className="font-semibold">렌터카</td>
                    <td data-label="주요 혜택">25% 할인쿠폰</td>
                    <td data-label="추천 코드">가입 쿠폰</td>
                    <td data-label="절약액">최대 25%</td>
                    <td data-label="난이도">⭐⭐ 보통</td>
                  </tr>
                  <tr>
                    <td data-label="카테고리" className="font-semibold">항공권</td>
                    <td data-label="주요 혜택">아시아나 제휴 1만원</td>
                    <td data-label="추천 코드">아시아나 제휴</td>
                    <td data-label="절약액">최대 1만원</td>
                    <td data-label="난이도">⭐⭐ 보통</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className="card-elevated overflow-hidden text-center">
                <img src={cat.img} alt={`${cat.title} 할인 혜택`} className="w-full h-36 object-contain bg-muted p-3" loading="lazy" />
                <div className="p-3">
                  <h3 className="font-bold text-sm">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground">{cat.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Category Sections */}
      {categories.map((cat, idx) => (
        <section key={cat.title} className={`py-12 ${idx % 2 === 1 ? "bg-muted/50" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="md:w-1/3">
                <img src={cat.img} alt={`${cat.title} 할인 혜택 상세`} className="w-full h-48 object-contain card-elevated bg-card p-4" loading="lazy" />
              </div>
              <div className="md:w-2/3">
                <h2 className="section-title">{cat.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="badge-primary">{cat.discount}</span>
                  <span className="badge-accent">추천: {cat.bestCode}</span>
                </div>

                <h3 className="font-bold mb-2">💡 절약 팁</h3>
                <ul className="space-y-2 mb-4">
                  {cat.tips.map((tip, i) => (
                    <li key={i} className="text-sm flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>

                {cat.bestCode.startsWith("HOT") && (
                  <button
                    onClick={() => handleCopyCode(cat.bestCode)}
                    className="cta-button text-sm"
                  >
                    <Copy className="h-4 w-4" /> {cat.bestCode} 코드 복사 & 적용
                  </button>
                )}
                {!cat.bestCode.startsWith("HOT") && (
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm">
                    <ExternalLink className="h-4 w-4" /> 마이리얼트립에서 확인
                  </a>
                )}
              </div>
            </div>

            {/* Category Comparison Table */}
            <div className="card-elevated p-6">
              <h3 className="text-lg font-bold mb-4">📊 {cat.title} 플랫폼 비교</h3>
              <div className="overflow-x-auto">
                <table className="table-responsive">
                  <thead>
                    <tr>
                      {cat.comparison.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.comparison.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} data-label={cat.comparison.headers[ci]} className={ci === 1 ? "text-primary font-bold" : ci === 0 ? "font-semibold" : ""}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Discount Stacking Guide */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">🔄 할인 중복 적용 매트릭스</h2>
          <p className="section-subtitle text-center">어떤 할인끼리 중복 적용이 가능한지 한눈에 확인하세요.</p>

          <div className="card-elevated overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="table-responsive">
                <thead>
                  <tr>
                    <th>조합</th>
                    <th>핫딜 쿠폰</th>
                    <th>가입 쿠폰</th>
                    <th>제휴 쿠폰</th>
                    <th>카드사 할인</th>
                    <th>플러스 쿠폰</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["핫딜 쿠폰", "—", "❌", "❌", "✅", "✅"],
                    ["가입 쿠폰", "❌", "—", "❌", "✅", "✅"],
                    ["제휴 쿠폰", "❌", "❌", "—", "✅", "✅ (일부)"],
                    ["카드사 할인", "✅", "✅", "✅", "—", "✅"],
                    ["플러스 쿠폰", "✅", "✅", "✅ (일부)", "✅", "—"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} data-label={["조합", "핫딜 쿠폰", "가입 쿠폰", "제휴 쿠폰", "카드사 할인", "플러스 쿠폰"][i]} className={i === 0 ? "font-semibold" : ""}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <img src="/images/double-discount.png" alt="이중 할인 가이드" className="h-28 object-contain" loading="lazy" />
            <img src="/images/compare-save.png" alt="비교 절약" className="h-28 object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Season Guide */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">📅 시즌별 추천 할인 전략</h2>
          <p className="section-subtitle text-center">시즌에 따라 최적의 할인 전략이 다릅니다.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { season: "봄 (3~5월)", emoji: "🌸", dest: "일본 벚꽃, 동남아", tip: "시즌 기획전 + HOT30000", img: "/images/season-special.png" },
              { season: "여름 (6~8월)", emoji: "🏖️", dest: "괌, 하와이, 유럽", tip: "장기 숙박 HOT50000 + 카드 할인", img: "/images/hotel-deals.png" },
              { season: "가을 (9~11월)", emoji: "🍂", dest: "유럽, 미국 동부", tip: "투어 HOT50000 + 아시아나 제휴", img: "/images/tour-activity.png" },
              { season: "겨울 (12~2월)", emoji: "⛷️", dest: "오키나와, 호주, 스키", tip: "렌터카 25% + 가입쿠폰", img: "/images/rental-car.png" },
            ].map((s) => (
              <div key={s.season} className="card-elevated overflow-hidden">
                <img src={s.img} alt={`${s.season} 여행 할인`} className="w-full h-32 object-contain bg-muted p-3" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">{s.emoji} {s.season}</h3>
                  <p className="text-xs text-muted-foreground mb-1"><strong>인기:</strong> {s.dest}</p>
                  <p className="text-xs text-primary font-semibold">{s.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="hero-gradient rounded-2xl p-8 md:p-12 text-center">
            <img src="/images/hero-illustration.png" alt="여행 할인" className="h-24 mx-auto mb-4" loading="lazy" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
              어떤 카테고리든, 마이리얼트립 할인쿠폰으로 절약하세요!
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              위 가이드를 참고하여 카테고리에 맞는 최적의 쿠폰을 선택하고, 지금 바로 마이리얼트립에서 예약하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button-secondary text-base">
                <ExternalLink className="h-5 w-5" /> 마이리얼트립 바로가기
              </a>
              <button onClick={() => handleCopyCode("HOT50000")} className="cta-button text-base bg-card/20 border border-primary-foreground/30 animate-pulse-glow">
                <Copy className="h-5 w-5" /> HOT50000 복사하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
