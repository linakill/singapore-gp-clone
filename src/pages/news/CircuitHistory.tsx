import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CircuitHistory = () => {
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
                August 30, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Marina Bay Circuit: A jewel of street racing
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Explore the history and unique characteristics of the Marina Bay Street Circuit, which has been hosting the Singapore Grand Prix since 2008 and remains one of F1's most spectacular venues.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border border-primary/30 mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Historic Milestone</h2>
                </div>
                <p>
                  The first night race in Formula 1 history, held on September 28, 2008
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Creation History</h2>
              
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-3">Concept and Development</h3>
                <p className="mb-4">
                  The idea of hosting a Formula 1 race in Singapore emerged in the mid-2000s as part of an ambitious plan to transform the city-state into Asia's sporting capital.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>2006: Negotiations began with FIA for calendar inclusion</li>
                  <li>2007: Night race concept approved</li>
                  <li>2008: First Singapore Grand Prix held</li>
                  <li>2023: Contract extended until 2028</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Unique Circuit Features</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <h4 className="text-lg font-semibold">Night Lighting</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>1,500 projectors illuminate the circuit</li>
                    <li>Light power 4x brighter than a football stadium</li>
                    <li>Even lighting without shadows</li>
                    <li>Special cameras for TV broadcasts</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <h4 className="text-lg font-semibold">Architectural Landmarks</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Marina Bay Sands Hotel</li>
                    <li>Singapore Flyer (Ferris wheel)</li>
                    <li>Helix Bridge</li>
                    <li>Esplanade Theaters</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Technical Specifications</h3>
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Basic Data</h4>
                    <ul className="text-sm space-y-1">
                      <li>Length: 5.063 km</li>
                      <li>Track width: 14-16 m</li>
                      <li>Corners: 23</li>
                      <li>Lap time: ~1:36</li>
                      <li>Top speed: 320 km/h</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Challenging Sections</h4>
                    <ul className="text-sm space-y-1">
                      <li>Turns 1-3: Corner sequence</li>
                      <li>Turn 10: "Singapore Sling"</li>
                      <li>Turns 14-16: Narrow sector</li>
                      <li>Turns 18-19: Final chicane</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Statistics</h4>
                    <ul className="text-sm space-y-1">
                      <li>Safety Car: 70% of races</li>
                      <li>Overtakes per race: 15-25</li>
                      <li>Tire wear: High</li>
                      <li>Driver load: Extreme</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Memorable Moments</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">2008 - First Night Victory</h4>
                  <p className="text-sm text-muted-foreground">
                    Fernando Alonso wins the inaugural Singapore Grand Prix in challenging conditions after Nelson Piquet Jr.'s crash
                  </p>
                </div>
                
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">2017 - Start Line Collision</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-car crash involving Vettel, Verstappen, and Raikkonen at turn one
                  </p>
                </div>
                
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">2019 - Rain Battle</h4>
                  <p className="text-sm text-muted-foreground">
                    Hamilton wins in wet conditions, showcasing masterful car control in challenging weather
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Circuit Records</h3>
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qualifying Record</h4>
                    <p className="text-sm">1:35.867 - Charles Leclerc (Ferrari, 2019)</p>
                    
                    <h4 className="font-semibold mb-2 mt-4">Race Record</h4>
                    <p className="text-sm">1:41.905 - Kevin Magnussen (Haas, 2018)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Most Wins</h4>
                    <p className="text-sm">Sebastian Vettel - 5 wins (2011-2015, 2019)</p>
                    
                    <h4 className="font-semibold mb-2 mt-4">Longest Race</h4>
                    <p className="text-sm">2:17:26 (2017) - due to multiple Safety Cars</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">Interesting Fact</h3>
                <p className="mb-2">
                  Marina Bay Circuit is the only anti-clockwise track in the modern Formula 1 calendar.
                </p>
                <p className="text-sm text-muted-foreground">
                  This creates additional neck strain for drivers and requires special preparation.
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

export default CircuitHistory;