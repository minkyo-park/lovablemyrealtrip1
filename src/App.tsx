import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import DiscountCodes from "./pages/DiscountCodes";
import HowToUse from "./pages/HowToUse";
import CategoryBenefits from "./pages/CategoryBenefits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <ScrollToTop />
        <Layout />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "discount-codes", element: <DiscountCodes /> },
      { path: "how-to-use", element: <HowToUse /> },
      { path: "category-benefits", element: <CategoryBenefits /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
