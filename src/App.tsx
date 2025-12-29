import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QrMenuPage from "./pages/services/QrMenuPage";
import CorporateWebPage from "./pages/services/CorporateWebPage";
import EcommercePage from "./pages/services/EcommercePage";
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import MobileAppPage from "./pages/services/MobileAppPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hizmetler/qr-menu" element={<QrMenuPage />} />
          <Route path="/hizmetler/kurumsal-web" element={<CorporateWebPage />} />
          <Route path="/hizmetler/e-ticaret" element={<EcommercePage />} />
          <Route path="/hizmetler/dijital-pazarlama" element={<DigitalMarketingPage />} />
          <Route path="/hizmetler/sosyal-medya" element={<SocialMediaPage />} />
          <Route path="/hizmetler/mobil-uygulama" element={<MobileAppPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
