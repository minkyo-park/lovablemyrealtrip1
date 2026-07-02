import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const AFFILIATE_LINK = "https://myrealt.rip/aRT258";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/discount-codes", label: "할인코드 모음" },
  { path: "/how-to-use", label: "적용 방법 & 팁" },
  { path: "/category-benefits", label: "카테고리별 혜택" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto flex items-center justify-between h-16 px-4" aria-label="메인 내비게이션">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg text-foreground" onClick={() => setMobileOpen(false)}>
            <Plane className="h-6 w-6 text-primary" />
            <span>마이리얼트립 쿠폰</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm ml-2">
                마이리얼트립 바로가기
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 열기"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm block text-center mt-2">
                  마이리얼트립 바로가기
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-secondary-foreground">마이리얼트립 쿠폰</h3>
              <p className="text-sm opacity-80">
                <a href="https://xn--bk1b700b1cz40buif.com/dealstore/myrealtrip/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground hover:underline">마이리얼트립 쿠폰</a>과 최신 프로모션 정보를 한곳에서 확인하세요. 2026년 7월 기준 최신 정보를 제공합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-secondary-foreground">빠른 링크</h3>
              <ul className="space-y-2 text-sm opacity-80">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:opacity-100 transition-opacity">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-secondary-foreground">마이리얼트립 고객센터</h3>
              <p className="text-sm opacity-80">전화: 1670-8208</p>
              <p className="text-sm opacity-80">운영시간: 평일 기준</p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm mt-4 inline-block">
                마이리얼트립 방문하기
              </a>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
            <p>© 2026 마이리얼트립 쿠폰. 본 사이트는 마이리얼트립 제휴 파트너 사이트입니다.</p>
            <p className="mt-1">본 사이트의 링크를 통해 예약 시 사이트 운영에 도움이 되는 소정의 수수료를 받을 수 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
