import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const AFFILIATE_LINK = "https://myrealt.rip/GVYra5";

interface CouponCardProps {
  code: string;
  discount: string;
  description: string;
  image: string;
  category?: string;
  conditions?: string;
}

export default function CouponCard({ code, discount, description, image, category, conditions }: CouponCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success(`"${code}" 코드가 복사되었습니다!`);
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };

  const handleApply = () => {
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="card-elevated overflow-hidden flex flex-col">
      <div className="relative">
        <img src={image} alt={`${code} - ${discount} 할인쿠폰`} className="w-full h-32 md:h-48 object-contain bg-muted p-3 md:p-4" loading="lazy" />
        {category && <span className="badge-primary absolute top-2 left-2 text-[10px] md:text-xs">{category}</span>}
      </div>
      <div className="p-3 md:p-5 flex flex-col flex-1">
        <h3 className="text-sm md:text-lg font-bold mb-1 truncate">{discount}</h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 flex-1 line-clamp-3 md:line-clamp-none">{description}</p>
        {conditions && <p className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3 bg-muted rounded-md px-2 py-1.5 md:px-3 md:py-2 line-clamp-2 md:line-clamp-none">💡 {conditions}</p>}
        <div className="coupon-code-display mb-2 md:mb-3 text-xs md:text-sm py-1.5 md:py-2">{code}</div>
        <div className="flex flex-col md:flex-row gap-1.5 md:gap-2">
          <button onClick={handleCopy} className="cta-button flex-1 text-xs md:text-sm justify-center animate-pulse-glow py-2 md:py-2.5">
            <Copy className="h-3 w-3 md:h-4 md:w-4 shrink-0" /> <span>복사</span>
          </button>
          <button onClick={handleApply} className="cta-button-secondary flex-1 text-xs md:text-sm justify-center py-2 md:py-2.5">
            <ExternalLink className="h-3 w-3 md:h-4 md:w-4 shrink-0" /> <span>적용</span>
          </button>
        </div>
      </div>
    </article>
  );
}
