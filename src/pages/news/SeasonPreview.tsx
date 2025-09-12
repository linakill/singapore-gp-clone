import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SeasonPreview = () => {
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
                August 19, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                F1 2025 season preview: What to expect in Singapore
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                As the 2025 Formula 1 season approaches, the Singapore Grand Prix remains one of the most challenging and prestigious races on the calendar. The unique night race format continues to test drivers and teams.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border border-primary/30 mb-8">
                <div className="flex items-center mb-4">
                  <Trophy className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Key Changes for 2025</h2>
                </div>
                <p>
                  New technical regulations and circuit improvements will make the race even more exciting
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Technical Innovations</h2>
              
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h3 className="text-xl font-semibold mb-3">2025 Regulations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>New aerodynamic packages for better following</li>
                  <li>Improved Pirelli tires with enhanced durability</li>
                  <li>Updated DRS system with three zones on track</li>
                  <li>Increased fuel allowance for night racing</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Marina Bay Circuit Features</h3>
              <p className="mb-6">
                Singapore's street circuit is renowned for its tight sections, numerous corners, and unique night lighting. In 2025, the track will receive several important changes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <h4 className="text-lg font-semibold mb-3">Circuit Statistics</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Length: 5.063 km</li>
                    <li>Laps: 61</li>
                    <li>Corners: 23</li>
                    <li>DRS zones: 3</li>
                    <li>Lap record: 1:35.867</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <h4 className="text-lg font-semibold mb-3">Driver Challenges</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>High temperature and humidity</li>
                    <li>Night lighting conditions</li>
                    <li>Narrow track sections</li>
                    <li>High safety car probability</li>
                    <li>Physical demands</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Championship Contenders</h3>
              <p className="mb-4">
                The 2025 season promises an incredibly tight championship battle. Several teams have shown excellent pace on street circuits in previous seasons:
              </p>

              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">Ferrari</h4>
                    <p className="text-sm">Traditionally strong in Singapore, excellent tire management in heat</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-400">Mercedes</h4>
                    <p className="text-sm">Good aerodynamic efficiency on slow sections</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-400">McLaren</h4>
                    <p className="text-sm">Strong street circuit package, good strategy</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Weather Forecast</h3>
              <p className="mb-6">
                September in Singapore is characterized by high temperatures (around 30°C) and humidity up to 85%. Brief tropical showers are possible, which could dramatically change the race dynamics.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">Historical Note</h3>
                <p className="mb-2">
                  The Singapore Grand Prix has been held since 2008 and became the first night race in Formula 1 history.
                </p>
                <p className="text-sm text-muted-foreground">
                  Sebastian Vettel holds the record for most wins in Singapore with 5 victories.
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

export default SeasonPreview;