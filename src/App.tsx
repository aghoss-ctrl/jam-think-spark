import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNav from "@/components/SiteNav";
import Index from "./pages/Index.tsx";
import StartHere from "./pages/StartHere.tsx";
import Week1 from "./pages/Week1.tsx";
import Week2 from "./pages/Week2.tsx";
import Week3 from "./pages/Week3.tsx";
import Week4 from "./pages/Week4.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <SiteNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/week-1" element={<Week1 />} />
          <Route path="/week-2" element={<Week2 />} />
          <Route path="/week-3" element={<Week3 />} />
          <Route path="/week-4" element={<Week4 />} />
          <Route path="/index-backup" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
