import React from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CountdownSection } from "@/components/CountdownSection";
import { QuickLinks } from "@/components/QuickLinks";

import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="pt-16">
        <HeroCarousel />
        <CountdownSection />
        <QuickLinks />
        <LatestNews />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
