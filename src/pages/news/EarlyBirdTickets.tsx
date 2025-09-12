import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EarlyBirdTickets = () => {
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
                September 4, 2025
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Early bird tickets for Singapore GP 2025 now available
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Formula 1 fans can now secure their seats for the 2025 Singapore Grand Prix with early bird pricing. Multiple grandstand options and hospitality packages are available for the highly anticipated street circuit race.
              </p>

              <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-8 rounded-lg border border-primary/30 mb-8">
                <div className="flex items-center mb-4">
                  <Ticket className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Special Offer</h2>
                </div>
                <p className="text-lg">
                  Up to 25% discount on all ticket categories when purchasing before March 15, 2025!
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Available Ticket Categories</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">General Grandstands</h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Bay Grandstand - from $180</li>
                    <li>Turn 1 Grandstand - from $220</li>
                    <li>Turn 3 Grandstand - from $150</li>
                    <li>Esplanade Grandstand - from $280</li>
                  </ul>
                </div>

                <div className="bg-gradient-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Premium Seating</h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Pit Grandstand - from $450</li>
                    <li>Start/Finish Grandstand - from $380</li>
                    <li>Turn 2 Grandstand - from $320</li>
                    <li>Padang Grandstand - from $250</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">VIP and Hospitality Packages</h3>
              <div className="bg-gradient-card p-6 rounded-lg border border-border/50 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Paddock Club</h4>
                    <p className="text-sm text-muted-foreground">from $1,200</p>
                    <ul className="list-disc pl-4 mt-2 text-sm">
                      <li>Exclusive paddock access</li>
                      <li>Meet & greet with drivers</li>
                      <li>Premium dining experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Champions Club</h4>
                    <p className="text-sm text-muted-foreground">from $800</p>
                    <ul className="list-disc pl-4 mt-2 text-sm">
                      <li>Private lounge area</li>
                      <li>Hotel transfer included</li>
                      <li>Complimentary merchandise</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skyline Suite</h4>
                    <p className="text-sm text-muted-foreground">from $950</p>
                    <ul className="list-disc pl-4 mt-2 text-sm">
                      <li>Panoramic circuit views</li>
                      <li>Personal concierge service</li>
                      <li>Unlimited beverages</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">What's Included</h3>
              <ul className="list-disc pl-6 mb-6">
                <li>Access to all practice sessions (Friday, Saturday)</li>
                <li>Qualifying session (Saturday)</li>
                <li>Grand Prix race (Sunday)</li>
                <li>Concerts and entertainment events</li>
                <li>Access to team exhibition zones</li>
                <li>Free Wi-Fi throughout the venue</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mb-6">
                <h3 className="text-lg font-semibold mb-2">How to Purchase</h3>
                <p className="mb-4">
                  Tickets can be purchased online through the official website or at authorized retail locations throughout Singapore.
                </p>
                <p className="text-sm text-muted-foreground">
                  Note: Tickets are limited and sell quickly. Early booking is recommended.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3">Terms and Conditions</h3>
              <ul className="list-disc pl-6 mb-6 text-sm">
                <li>Refund available up to 30 days before the event</li>
                <li>Ticket exchange to other categories (subject to availability)</li>
                <li>Special group rates for 10+ people</li>
                <li>50% discount for children under 12</li>
                <li>Free entry for children under 3</li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EarlyBirdTickets;