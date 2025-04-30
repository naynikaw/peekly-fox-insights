
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
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

// App Pages
import Login from "./pages/app/Login";
import Onboarding from "./pages/app/Onboarding";
import Insights from "./pages/app/Insights";
import AnalyticsChat from "./pages/app/AnalyticsChat";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: (username: string, password: string) => false as boolean,
  logout: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already authenticated (via localStorage)
  useEffect(() => {
    const authStatus = localStorage.getItem("peekly_auth");
    if (authStatus === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (username: string, password: string) => {
    // This is a dummy auth - in production you would use a proper auth system
    if (username === "admin" && password === "peekly2023") {
      setIsAuthenticated(true);
      localStorage.setItem("peekly_auth", "authenticated");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("peekly_auth");
  };

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isAuthenticated) {
      return <Navigate to="/app/login" replace />;
    }
    return <>{children}</>;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
              
              {/* App Routes */}
              <Route path="/app/login" element={<Login />} />
              <Route path="/app/onboarding" element={
                <ProtectedRoute>
                  <Onboarding />
                </ProtectedRoute>
              } />
              <Route path="/app/insights" element={
                <ProtectedRoute>
                  <Insights />
                </ProtectedRoute>
              } />
              <Route path="/app/analytics" element={
                <ProtectedRoute>
                  <AnalyticsChat />
                </ProtectedRoute>
              } />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default App;
