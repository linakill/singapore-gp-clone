import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrackImprovements = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <Link to="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                August 25, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Singapore GP 2025: New track improvements announced
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                The Marina Bay Street Circuit will feature several improvements for the 2025 race, including enhanced spectator areas, upgraded facilities, and better accessibility options for fans attending the night race.
              </p>

              <h2 className="text-2xl font-bold mb-4">Major Improvements</h2>
              
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-3">Spectator Areas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>New Bay Grandstand overlooking turns 18-19</li>
                  <li>Pit Grandstand expansion with 30% more seats</li>
                  <li>Improved visibility from Turn 1 Grandstand with new layout</li>
                  <li>Additional high-resolution screens around the circuit perimeter</li>
                </ul>
              </div>

              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Upgraded air conditioning systems in enclosed areas</li>
                  <li>Expanded food and beverage zones with local and international cuisine</li>
                  <li>New restroom complexes with improved accessibility</li>
                  <li>Additional charging stations for mobile devices</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Accessibility and Convenience</h3>
              <p className="mb-6">
                Special attention has been given to improving accessibility for people with disabilities. New elevators, ramps, and designated viewing areas have been installed.
              </p>

              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-3">Technology Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Augmented reality system for mobile app</li>
                  <li>Interactive information kiosks</li>
                  <li>Enhanced Wi-Fi network throughout the venue</li>
                  <li>Contactless payment system at all retail points</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Environmental Initiatives</h3>
              <p className="mb-6">
                As part of Formula 1's sustainability program, the circuit will receive new environmental solutions: solar panels for lighting, rainwater collection systems, and waste recycling stations.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">Completion Timeline</h3>
                <p>
                  All major works are planned to be completed by July 2025, two months before the race. This will allow for testing of all systems and staff training.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrackImprovements;