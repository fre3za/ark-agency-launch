import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import ScheduleCall from "./pages/ScheduleCall";
import TroubleshootingPage from "./pages/services/Troubleshooting";
import MaintenancePage from "./pages/services/Maintenance";
import SEOPage from "./pages/services/SEO";
import CROPage from "./pages/services/CRO";
import WhyUsPage from "./pages/WhyUs";
import ProcessPage from "./pages/Process";
import AboutPage from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule-call" element={<ScheduleCall />} />
          <Route path="/services/troubleshooting" element={<TroubleshootingPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/cro" element={<CROPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
