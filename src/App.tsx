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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
