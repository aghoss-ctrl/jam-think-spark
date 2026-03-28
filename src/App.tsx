import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <SiteNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/week-1" element={<Week1 />} />
          <Route path="/week-2" element={<Week2 />} />
          <Route path="/week-3" element={<Week3 />} />
          <Route path="/week-4" element={<Week4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
