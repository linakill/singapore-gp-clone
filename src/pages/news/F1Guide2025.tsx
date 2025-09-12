import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const F1Guide2025 = () => {
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
                September 1, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                F1 Singapore Grand Prix 2025: Everything you need to know
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                The 2025 Formula 1 Singapore Grand Prix promises to be another spectacular night race under the lights. Here's your complete guide to the upcoming event, including ticket information, schedule updates, and what to expect.
              </p>

              <div className="bg-gradient-card p-8 rounded-lg border border-border/50 mb-8">
                <h2 className="text-2xl font-bold mb-4">Essential Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Race Dates</h3>
                    <p>September 19-21, 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Circuit</h3>
                    <p>Marina Bay Street Circuit</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Circuit Length</h3>
                    <p>5.063 km (61 laps)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Race Start</h3>
                    <p>8:00 PM (Local Time)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">What's New in 2025</h2>
              <p className="mb-6">
                The 2025 season brings numerous changes to Formula 1, and the Singapore Grand Prix will be no exception. Organizers have prepared several important improvements for fans and participants.
              </p>

              <h3 className="text-xl font-semibold mb-3">Circuit Improvements</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Extended spectator areas with better viewing angles</li>
                <li>Enhanced lighting system for night racing</li>
                <li>New safety zones and evacuation routes</li>
                <li>Modernized pit boxes and paddock facilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Tickets and Pricing</h3>
              <p className="mb-6">
                Tickets for the 2025 Singapore Grand Prix are now on sale. Various seating categories are available - from general grandstands to VIP packages with full service. Early booking offers significant discounts up to 25%.
              </p>

              <h3 className="text-xl font-semibold mb-3">Entertainment Program</h3>
              <p className="mb-6">
                In addition to racing competitions, spectators can enjoy a rich entertainment program featuring world-class performers, interactive zones, and exclusive paddock events.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">Fan Tip</h3>
                <p>
                  Singapore is known for its high humidity. We recommend bringing light clothing, sunscreen, and plenty of water. The race takes place at night, but the day can be very hot and humid.
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

export default F1Guide2025;