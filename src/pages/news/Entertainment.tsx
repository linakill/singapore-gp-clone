import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, Music, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Entertainment = () => {
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
                September 7, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Singapore GP entertainment lineup announced for 2025
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                The 2025 Singapore Grand Prix will feature an exciting entertainment program alongside the racing action, with world-class performers set to take the stage during the race weekend.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border border-primary/30 mb-8">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Star-Studded Lineup</h2>
                </div>
                <p>
                  Over 20 artists will perform on 4 different stages throughout the weekend
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Main Performances</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <div className="flex items-center mb-3">
                    <Music className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Friday, September 19</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Martin Garrix</strong> - Main Stage, 9:00 PM</li>
                    <li><strong>Dua Lipa</strong> - Padang Stage, 10:30 PM</li>
                    <li><strong>Local Bands Showcase</strong> - Zone 4 Stage, 8:00 PM</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <div className="flex items-center mb-3">
                    <Music className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">Saturday, September 20</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>The Chainsmokers</strong> - Main Stage, 11:00 PM</li>
                    <li><strong>OneRepublic</strong> - Padang Stage, 9:30 PM</li>
                    <li><strong>Asian Pop Stars</strong> - Esplanade Stage, 8:30 PM</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-8">
                <div className="flex items-center mb-3">
                  <Music className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Sunday, September 21 (Race Day)</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li><strong>Post-Race Concert</strong> - Calvin Harris - Main Stage, 12:00 AM</li>
                  <li><strong>Victory Celebration</strong> - Special Guests, 11:30 PM</li>
                  <li><strong>DJ Sets</strong> - Various venues until 2:00 AM</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">Interactive Zones</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">F1 Experience Zone</h4>
                  <p className="text-sm text-muted-foreground">
                    Racing simulators, driver meet & greets, autograph sessions
                  </p>
                </div>
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">Tech Hub</h4>
                  <p className="text-sm text-muted-foreground">
                    Virtual reality experiences, F1 innovation showcase
                  </p>
                </div>
                <div className="bg-gradient-card p-4 rounded-lg border border-border/50">
                  <h4 className="font-semibold mb-2">Kids Zone</h4>
                  <p className="text-sm text-muted-foreground">
                    Children's activities, mini karting, educational games
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">Culinary Delights</h3>
              <p className="mb-4">
                The gastronomic program features Singapore's finest restaurants and international cuisine:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Michelin-starred restaurants with pop-up menus</li>
                <li>Singapore street food in dedicated zones</li>
                <li>Craft cocktails and premium beverages</li>
                <li>Vegetarian and halal options</li>
                <li>Special children's menus</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">VIP Programs</h3>
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <h4 className="text-lg font-semibold mb-3">Exclusive Events</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Private concert for VIP guests on Thursday evening</li>
                  <li>Meet & Greet with artists for Paddock Club ticket holders</li>
                  <li>Special photo sessions with F1 drivers</li>
                  <li>Tasting dinners by celebrity chefs</li>
                  <li>Private exhibition and collection viewings</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-lg font-semibold mb-2">Important Information</h3>
                <p className="mb-2">
                  All concerts are included in Grand Prix ticket prices. No additional registration required.
                </p>
                <p className="text-sm text-muted-foreground">
                  Schedule subject to change. Follow updates in the official app.
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

export default Entertainment;