import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/components/CartContext";
import Index from "./pages/Index";
import Tickets from "./pages/Tickets";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Hospitality from "./pages/Hospitality";
// Hospitality pages
import PaddockClub from "./pages/hospitality/PaddockClub";
import Clubhouse from "./pages/hospitality/Clubhouse";
import SkySuite from "./pages/hospitality/SkySuite";
import Observat3 from "./pages/hospitality/Observat3";
import Twenty3 from "./pages/hospitality/Twenty3";
import GreenRoom from "./pages/hospitality/GreenRoom";
import DriversRightLounge from "./pages/hospitality/DriversRightLounge";
import LoungeTurn3 from "./pages/hospitality/LoungeTurn3";
import VistaSuite from "./pages/hospitality/VistaSuite";
import SkyViewPavilion from "./pages/hospitality/SkyViewPavilion";
import SkyLounge from "./pages/SkyLounge";
import NotFound from "./pages/NotFound";
import F1Guide2025 from "./pages/news/F1Guide2025";
import TrackImprovements from "./pages/news/TrackImprovements";
import EarlyBirdTickets from "./pages/news/EarlyBirdTickets";
import SeasonPreview from "./pages/news/SeasonPreview";
import Entertainment from "./pages/news/Entertainment";
import CircuitHistory from "./pages/news/CircuitHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/hospitality" element={<Hospitality />} />
            {/* Hospitality routes */}
            <Route path="/hospitality/formula-one-paddock-club" element={<PaddockClub />} />
            <Route path="/hospitality/the-clubhouse-at-formula-1-paddock-club" element={<Clubhouse />} />
            <Route path="/hospitality/sky-suite" element={<SkySuite />} />
            <Route path="/hospitality/observat3" element={<Observat3 />} />
            <Route path="/hospitality/twenty3" element={<Twenty3 />} />
            <Route path="/hospitality/the-green-room" element={<GreenRoom />} />
            <Route path="/hospitality/drivers-right-lounge" element={<DriversRightLounge />} />
            <Route path="/hospitality/lounge-at-turn-3" element={<LoungeTurn3 />} />
            <Route path="/hospitality/the-vista-suite" element={<VistaSuite />} />
            <Route path="/hospitality/sky-view-pavilion" element={<SkyViewPavilion />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/f1-guide-2025" element={<F1Guide2025 />} />
            <Route path="/news/track-improvements" element={<TrackImprovements />} />
            <Route path="/news/early-bird-tickets" element={<EarlyBirdTickets />} />
            <Route path="/news/season-preview" element={<SeasonPreview />} />
            <Route path="/news/entertainment" element={<Entertainment />} />
            <Route path="/news/circuit-history" element={<CircuitHistory />} />
            <Route path="/sky-lounge" element={<SkyLounge />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
