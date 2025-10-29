import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ui/error-boundary";
import ScrollToTop from "@/components/ScrollToTop";
import SplashCursor from "@/components/ui/SplashCursor";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Product Pages
import SyncAsset from "./pages/products/SyncAsset";
import OurAttendance from "./pages/products/OurAttendance";
import Spacebee from "./pages/products/Spacebee";
import Foodiisoft from "./pages/products/Foodiisoft";
import EntryIQ from "./pages/products/EntryIQ";
import AIProduct from "./pages/products/AI";

// Service Pages
import CustomSoftwareDevelopment from "./pages/services/CustomSoftwareDevelopment";
import MobileApplicationDevelopment from "./pages/services/MobileApplicationDevelopment";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";

// Company Pages
import AboutUs from "./pages/Company/AboutUs";
import Careers from "./pages/Company/Careers";
import Leadership from "./pages/Company/Leadership";
import Awards from "./pages/Company/Awards";

// Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <SplashCursor />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
              
              {/* Product Routes */}
              <Route path="/products/asset-management" element={<SyncAsset />} />
              <Route path="/smart-attendance-management-system" element={<OurAttendance />} />
              <Route path="/products/spacebee" element={<Spacebee />} />
              <Route path="/products/foodiisoft" element={<Foodiisoft />} />
              <Route path="/products/entryiq" element={<EntryIQ />} />
              <Route path="/products/ai-automation" element={<AIProduct />} />
              
              {/* Service Routes */}
              <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
              <Route path="/services/mobile-application-development" element={<MobileApplicationDevelopment />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              
              {/* Company Routes */}
              <Route path="/company" element={<AboutUs />} />
              <Route path="/company/about-us" element={<AboutUs />} />
              <Route path="/company/careers" element={<Careers />} />
              <Route path="/company/leadership" element={<Leadership />} />
              <Route path="/company/awards" element={<Awards />} />

              {/* Thank You */}
              <Route path="/thank-you" element={<ThankYou />} />
              
              {/* Legal Routes */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </HelmetProvider>
);

export default App;
