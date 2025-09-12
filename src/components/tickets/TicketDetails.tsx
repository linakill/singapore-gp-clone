import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X, MapPin, Calendar, Users, Utensils, Car, Phone, Mail, Camera, Star, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Ticket {
  id: string;
  title: string;
  category: "grandstand" | "walkabout" | "hospitality";
  zone: string;
  days: string[];
  price: number;
  currency: string;
  description: string;
  perks: string[];
  availability: "in-stock" | "low" | "sold-out";
  image: string;
  viewDescription: string;
  turnNumbers: string[];
  access: string[];
  inclusions: string[];
  mapPosition: { x: number; y: number };
}

interface TicketDetailsProps {
  ticket: Ticket;
  onClose: () => void;
  onAddToCart: (ticket: Ticket) => void;
}

export const TicketDetails = ({ ticket, onClose, onAddToCart }: TicketDetailsProps) => {
  const [selectedDay, setSelectedDay] = useState(ticket.days[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock additional data
  const images = [
    ticket.image,
    "/api/placeholder/600/300",
    "/api/placeholder/600/300",
    "/api/placeholder/600/300"
  ];

  const dayPrices = {
    "3-day": ticket.price,
    "friday": Math.round(ticket.price * 0.3),
    "saturday": Math.round(ticket.price * 0.35),
    "sunday": Math.round(ticket.price * 0.4)
  };

  const faqItems = [
    {
      question: "What time should I arrive?",
      answer: "Gates open 3 hours before the first session. We recommend arriving early to avoid queues and explore the venue."
    },
    {
      question: "Can I bring food and drinks?",
      answer: "Outside food and non-alcoholic beverages in non-glass containers are permitted. Alcohol must be purchased on-site."
    },
    {
      question: "Is there parking available?",
      answer: "Limited parking is available for purchase. We recommend using public transport or ride-sharing services."
    },
    {
      question: "What if it rains?",
      answer: "The event continues rain or shine. Covered areas and ponchos are available for purchase."
    }
  ];

  const currentPrice = dayPrices[selectedDay as keyof typeof dayPrices] || ticket.price;
  const totalPrice = currentPrice * quantity;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{ticket.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground capitalize">
                {ticket.zone.replace('zone', 'Zone ')} • {ticket.category}
              </span>
              {ticket.availability === "low" && (
                <Badge variant="outline" className="text-orange-500 border-orange-500">
                  Low Availability
                </Badge>
              )}
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Left Column - Images and Map */}
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${ticket.title} view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>
                <div className="flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-16 h-16 rounded border-2 transition-colors",
                        currentImageIndex === index
                          ? "border-primary"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <img
                        src={images[index]}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mini Seating Map */}
              <div className="bg-card rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Seating Area</h4>
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-4 aspect-video">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    {/* Track section */}
                    <path
                      d="M10,30 L90,30"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Seating area highlight */}
                    <rect 
                      x={ticket.mapPosition.x - 5} 
                      y={ticket.mapPosition.y - 3} 
                      width="10" 
                      height="6" 
                      fill="hsl(var(--accent))" 
                      opacity="0.8"
                      rx="1"
                    />
                    <text 
                      x={ticket.mapPosition.x} 
                      y={ticket.mapPosition.y + 1} 
                      textAnchor="middle" 
                      className="text-xs fill-white font-bold"
                    >
                      {ticket.title.split(' ')[0]}
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {ticket.viewDescription}
                </p>
              </div>
            </div>

            {/* Right Column - Details and Purchase */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">About This Ticket</h3>
                <p className="text-muted-foreground mb-4">{ticket.description}</p>
                
                {/* Turn Numbers */}
                <div className="flex items-center gap-2 mb-2">
                  <Car className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    View: {ticket.turnNumbers.join(', ')}
                  </span>
                </div>
                
                {/* Zone Access */}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Access: {ticket.access.join(', ')}
                  </span>
                </div>
              </div>

              <Separator />

              {/* Day Selection */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Select Day</h4>
                <div className="grid grid-cols-2 gap-2">
                  {ticket.days.map(day => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={cn(
                        "p-3 rounded-lg border text-sm font-medium transition-colors",
                        selectedDay === day
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <div>
                        {day === "3-day" ? "3-Day Pass" : day.charAt(0).toUpperCase() + day.slice(1)}
                      </div>
                      <div className="text-xs opacity-75">
                        SGD ${dayPrices[day as keyof typeof dayPrices]?.toLocaleString()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Quantity</h4>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.min(8, quantity + 1))}
                  >
                    +
                  </Button>
                  <span className="text-sm text-muted-foreground ml-2">
                    (Max 8 per order)
                  </span>
                </div>
              </div>

              <Separator />

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">What's Included</h4>
                <div className="space-y-2">
                  {ticket.perks.map((perk, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Price and Purchase */}
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">
                    SGD ${totalPrice.toLocaleString()}
                  </span>
                </div>
                
                {ticket.availability === "sold-out" ? (
                  <Button size="lg" className="w-full" variant="outline" disabled>
                    Sold Out - Join Waitlist
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow"
                    onClick={() => onAddToCart(ticket)}
                  >
                    Add to Cart • SGD ${totalPrice.toLocaleString()}
                  </Button>
                )}
                
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Price includes 9% GST • Secure SSL payment
                </p>
              </div>

              {/* Accessibility Note */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h5 className="font-medium text-foreground mb-2">Need Accessibility Support?</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Wheelchair accessible seating and companion tickets are available.
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    <span>+65 6738 6738</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    <span>access@singaporegp.sg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="px-6 pb-6">
            <Separator className="mb-6" />
            <h3 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">{item.question}</h5>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};