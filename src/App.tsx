
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PricingPage from "./pages/Pricing";
import NotFound from "./pages/NotFound";

// Industry Pages
import EcommercePage from "./pages/industry/Ecommerce";
import SaasPage from "./pages/industry/Saas";
import SolopreneursPage from "./pages/industry/Solopreneurs";
import SMBPage from "./pages/industry/SMB";
import MarketingAgenciesPage from "./pages/industry/MarketingAgencies";

// Team Pages
import MarketersPage from "./pages/team/Marketers";
import FoundersPage from "./pages/team/Founders";
import ProductPage from "./pages/team/Product";
import GrowthPage from "./pages/team/Growth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing-hidden" element={<PricingPage />} />
          
          {/* Industry Routes */}
          <Route path="/industry/ecommerce" element={<EcommercePage />} />
          <Route path="/industry/saas" element={<SaasPage />} />
          <Route path="/industry/solopreneurs" element={<SolopreneursPage />} />
          <Route path="/industry/smb" element={<SMBPage />} />
          <Route path="/industry/marketing-agencies" element={<MarketingAgenciesPage />} />
          
          {/* Team Routes */}
          <Route path="/team/marketers" element={<MarketersPage />} />
          <Route path="/team/founders" element={<FoundersPage />} />
          <Route path="/team/product" element={<ProductPage />} />
          <Route path="/team/growth" element={<GrowthPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
