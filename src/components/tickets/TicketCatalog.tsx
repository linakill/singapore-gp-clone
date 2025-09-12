import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Utensils, Car, Eye, AlertTriangle, Clock } from "lucide-react";
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

interface TicketCatalogProps {
  filters: any;
  searchTerm: string;
  sortBy: string;
  onTicketClick: (ticket: Ticket) => void;
  onZoneHover: (zone: string | null) => void;
  onTicketHover: (ticketId: string | null) => void;
  onAddToCart: (ticket: Ticket) => void;
}

// Mock ticket data
const mockTickets: Ticket[] = [
  {
    id: "t1",
    title: "Pit Grandstand",
    category: "grandstand",
    zone: "zone1",
    days: ["3-day", "friday", "saturday", "sunday"],
    price: 1288,
    currency: "SGD",
    description: "Premium grandstand facing the start/finish straight with excellent pit lane views",
    perks: ["Pit lane views", "Starting grid ceremony", "Covered seating", "Padang stage access"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Direct view of Turn 1, pit straight, and starting grid",
    turnNumbers: ["Turn 1"],
    access: ["Zone 1", "Padang Stage"],
    inclusions: ["Reserved seating", "Race program", "Lanyard"],
    mapPosition: { x: 15, y: 45 }
  },
  {
    id: "t2",
    title: "Turn 1 Grandstand",
    category: "grandstand",
    zone: "zone1",
    days: ["3-day", "sunday"],
    price: 998,
    currency: "SGD",
    description: "Perfect view of the first corner action and overtaking opportunities",
    perks: ["Turn 1 views", "Overtaking zone", "Covered seating"],
    availability: "low",
    image: "/api/placeholder/400/200",
    viewDescription: "Elevated view of the first corner complex and braking zone",
    turnNumbers: ["Turn 1", "Turn 2"],
    access: ["Zone 1"],
    inclusions: ["Reserved seating", "Race program"],
    mapPosition: { x: 20, y: 50 }
  },
  {
    id: "t3",
    title: "Marina Bay Grandstand",
    category: "grandstand",
    zone: "zone3",
    days: ["3-day", "saturday", "sunday"],
    price: 788,
    currency: "SGD",
    description: "Spectacular waterfront views with iconic Singapore skyline backdrop",
    perks: ["Marina views", "Skyline backdrop", "Photo opportunities"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Panoramic views of Marina Bay with city lights",
    turnNumbers: ["Turn 14", "Turn 15"],
    access: ["Zone 3", "Bay Stage"],
    inclusions: ["Reserved seating", "Welcome drink"],
    mapPosition: { x: 85, y: 65 }
  },
  {
    id: "t4",
    title: "Zone 1 Walkabout",
    category: "walkabout",
    zone: "zone1",
    days: ["3-day", "friday", "saturday", "sunday"],
    price: 398,
    currency: "SGD",
    description: "General admission access to the start/finish zone with multiple viewing areas",
    perks: ["Multiple viewing spots", "Flexibility to move", "Food courts nearby"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Various viewing angles around the start/finish area",
    turnNumbers: ["Turn 1", "Turn 20"],
    access: ["Zone 1", "Padang Stage"],
    inclusions: ["Zone access", "Event map"],
    mapPosition: { x: 15, y: 45 }
  },
  {
    id: "t5",
    title: "Paddock Club",
    category: "hospitality",
    zone: "zone1",
    days: ["3-day"],
    price: 4888,
    currency: "SGD",
    description: "Ultimate F1 experience with exclusive pit lane access and gourmet dining",
    perks: ["Pit lane access", "Driver meet & greet", "Gourmet buffet", "Premium bar", "Exclusive merchandise"],
    availability: "low",
    image: "/api/placeholder/400/200",
    viewDescription: "Exclusive viewing from the Paddock Club with pit lane access",
    turnNumbers: ["Pit Lane", "Turn 1"],
    access: ["All Zones", "Pit Lane", "All Stages"],
    inclusions: ["All-inclusive hospitality", "Premium gifts", "VIP parking"],
    mapPosition: { x: 15, y: 45 }
  },
  {
    id: "t6",
    title: "Singapore Flyer Grandstand",
    category: "grandstand",
    zone: "zone4",
    days: ["3-day", "sunday"],
    price: 688,
    currency: "SGD",
    description: "Unique elevated views with the Singapore Flyer as backdrop",
    perks: ["Elevated position", "Flyer backdrop", "Turn 17-18 action"],
    availability: "sold-out",
    image: "/api/placeholder/400/200",
    viewDescription: "High-speed section with elevation changes",
    turnNumbers: ["Turn 17", "Turn 18"],
    access: ["Zone 4", "Village Stage"],
    inclusions: ["Reserved seating", "Commemorative ticket"],
    mapPosition: { x: 25, y: 75 }
  },
  // New affordable tickets (122-399 SGD range)
  {
    id: "t7",
    title: "Turn 7 Bleachers",
    category: "grandstand",
    zone: "zone2",
    days: ["sunday"],
    price: 199,
    currency: "SGD",
    description: "Budget-friendly bleacher seating with great Turn 7 corner views",
    perks: ["Corner action", "Affordable pricing", "Close to amenities"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Action-packed corner with overtaking opportunities",
    turnNumbers: ["Turn 7"],
    access: ["Zone 2"],
    inclusions: ["General seating", "Event map"],
    mapPosition: { x: 60, y: 30 }
  },
  {
    id: "t8",
    title: "Esplanade Bridge Viewing",
    category: "walkabout",
    zone: "zone3",
    days: ["friday", "saturday"],
    price: 149,
    currency: "SGD",
    description: "Standing area on the iconic Esplanade Bridge with harbor views",
    perks: ["Historic bridge", "Harbor views", "Free movement", "Budget option"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Elevated bridge position overlooking the track",
    turnNumbers: ["Turn 13", "Turn 14"],
    access: ["Zone 3"],
    inclusions: ["Standing access", "Bridge views"],
    mapPosition: { x: 75, y: 60 }
  },
  {
    id: "t9",
    title: "Zone 2 Walkabout",
    category: "walkabout",
    zone: "zone2",
    days: ["3-day", "saturday", "sunday"],
    price: 299,
    currency: "SGD",
    description: "Flexible general admission with access to multiple viewing areas",
    perks: ["Multiple viewing spots", "Freedom to roam", "Value pricing"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Various trackside viewing positions",
    turnNumbers: ["Turn 5", "Turn 6", "Turn 7"],
    access: ["Zone 2", "Village Stage"],
    inclusions: ["Zone access", "Event guide"],
    mapPosition: { x: 55, y: 35 }
  },
  {
    id: "t10",
    title: "Student Grandstand",
    category: "grandstand",
    zone: "zone4",
    days: ["friday", "saturday"],
    price: 122,
    currency: "SGD",
    description: "Special pricing for students with valid ID - great value seating",
    perks: ["Student discount", "Reserved seating", "Youth atmosphere", "Budget friendly"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Grandstand seating with turn complex views",
    turnNumbers: ["Turn 16", "Turn 17"],
    access: ["Zone 4"],
    inclusions: ["Reserved seating", "Student verification required"],
    mapPosition: { x: 30, y: 80 }
  },
  {
    id: "t11",
    title: "Marina Promenade",
    category: "walkabout",
    zone: "zone3",
    days: ["3-day", "friday", "saturday", "sunday"],
    price: 249,
    currency: "SGD",
    description: "Waterfront promenade access with Marina Bay backdrop",
    perks: ["Waterfront views", "City skyline", "Photo opportunities", "Great value"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Marina Bay promenade with city views",
    turnNumbers: ["Turn 15", "Turn 16"],
    access: ["Zone 3", "Bay Stage"],
    inclusions: ["Promenade access", "Marina views"],
    mapPosition: { x: 80, y: 70 }
  },
  {
    id: "t12",
    title: "Turn 10 Hillside",
    category: "grandstand",
    zone: "zone2",
    days: ["saturday", "sunday"],
    price: 188,
    currency: "SGD",
    description: "Natural hillside seating overlooking the challenging Turn 10 complex",
    perks: ["Natural amphitheater", "Turn 10 action", "Unique perspective"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Elevated hillside view of the technical section",
    turnNumbers: ["Turn 10", "Turn 11"],
    access: ["Zone 2"],
    inclusions: ["Hillside seating", "Cushion rental available"],
    mapPosition: { x: 45, y: 40 }
  },
  {
    id: "t13",
    title: "Zone 4 Walkabout",
    category: "walkabout",
    zone: "zone4",
    days: ["3-day", "sunday"],
    price: 329,
    currency: "SGD",
    description: "General admission to the fastest section of the circuit",
    perks: ["High-speed section", "Multiple viewpoints", "Singapore Flyer views"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Fast straight and corner combinations",
    turnNumbers: ["Turn 16", "Turn 17", "Turn 18"],
    access: ["Zone 4", "Village Stage"],
    inclusions: ["Zone access", "Speed section views"],
    mapPosition: { x: 25, y: 75 }
  },
  {
    id: "t14",
    title: "Friday Practice Special",
    category: "walkabout",
    zone: "zone1",
    days: ["friday"],
    price: 159,
    currency: "SGD",
    description: "Friday-only access to Zone 1 for practice sessions",
    perks: ["Practice sessions", "Friday special pricing", "Start/finish area"],
    availability: "in-stock",
    image: "/api/placeholder/400/200",
    viewDescription: "Practice day access to prime viewing areas",
    turnNumbers: ["Turn 1", "Turn 20"],
    access: ["Zone 1"],
    inclusions: ["Friday access only", "Practice viewing"],
    mapPosition: { x: 15, y: 45 }
  }
];

export const TicketCatalog = ({ 
  filters, 
  searchTerm, 
  sortBy, 
  onTicketClick, 
  onZoneHover, 
  onTicketHover,
  onAddToCart 
}: TicketCatalogProps) => {
  const [waitlistTickets, setWaitlistTickets] = useState<string[]>([]);

  // Filter and sort tickets
  const filteredTickets = useMemo(() => {
    let result = mockTickets.filter(ticket => {
      // Search filter
      if (searchTerm && !ticket.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Category filters
      if (filters.categories.length > 0 && !filters.categories.includes(ticket.category)) {
        return false;
      }
      
      // Zone filters
      if (filters.zones.length > 0 && !filters.zones.includes(ticket.zone)) {
        return false;
      }
      
      // Day filters
      if (filters.days.length > 0 && !filters.days.some((day: string) => ticket.days.includes(day))) {
        return false;
      }
      
      // Availability filters
      if (filters.availability.length > 0 && !filters.availability.includes(ticket.availability)) {
        return false;
      }
      
      // Price range filters
      if (filters.priceRange.length > 0) {
        const matchesPriceRange = filters.priceRange.some((range: string) => {
          switch (range) {
            case "under-200":
              return ticket.price < 200;
            case "200-500":
              return ticket.price >= 200 && ticket.price <= 500;
            case "500-1000":
              return ticket.price >= 500 && ticket.price <= 1000;
            case "1000-3000":
              return ticket.price >= 1000 && ticket.price <= 3000;
            case "over-3000":
              return ticket.price > 3000;
            default:
              return true;
          }
        });
        if (!matchesPriceRange) {
          return false;
        }
      }
      
      return true;
    });

    // Sort tickets
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "popularity":
        default:
          // Сортировка по популярности: сначала доступные, потом с низкой доступностью, потом проданные
          const availabilityOrder = { "in-stock": 0, "low": 1, "sold-out": 2 };
          const aOrder = availabilityOrder[a.availability as keyof typeof availabilityOrder];
          const bOrder = availabilityOrder[b.availability as keyof typeof availabilityOrder];
          if (aOrder !== bOrder) {
            return aOrder - bOrder;
          }
          // Если одинаковая доступность, сортируем по цене (от дешевых к дорогим)
          return a.price - b.price;
      }
    });

    return result;
  }, [mockTickets, filters, searchTerm, sortBy]);

  const handleWaitlist = (ticketId: string) => {
    setWaitlistTickets(prev => [...prev, ticketId]);
  };

  const getAvailabilityBadge = (availability: string) => {
    switch (availability) {
      case "low":
        return <Badge variant="outline" className="text-orange-500 border-orange-500">Low Availability</Badge>;
      case "sold-out":
        return <Badge variant="destructive">Sold Out</Badge>;
      default:
        return null;
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "low":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case "sold-out":
        return <Clock className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  // Group tickets by category
  const grandstandTickets = filteredTickets.filter(t => t.category === "grandstand");
  const walkaboutTickets = filteredTickets.filter(t => t.category === "walkabout");  
  const hospitalityTickets = filteredTickets.filter(t => t.category === "hospitality");

  const TicketCard = ({ ticket }: { ticket: Ticket }) => (
    <div 
      className={cn(
        "bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-card group",
        ticket.availability === "sold-out" && "opacity-75"
      )}
      onMouseEnter={() => {
        onZoneHover(ticket.zone);
        onTicketHover(ticket.id);
      }}
      onMouseLeave={() => {
        onZoneHover(null);
        onTicketHover(null);
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {ticket.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground capitalize">
              {ticket.zone.replace('zone', 'Zone ')}
            </span>
            {getAvailabilityIcon(ticket.availability)}
          </div>
        </div>
        {getAvailabilityBadge(ticket.availability)}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>

      {/* Day Options */}
      <div className="flex flex-wrap gap-2 mb-4">
        {ticket.days.map(day => (
          <Badge key={day} variant="outline" className="text-xs">
            {day === "3-day" ? "3-Day Pass" : day.charAt(0).toUpperCase() + day.slice(1)}
          </Badge>
        ))}
      </div>

      {/* Perks */}
      <div className="space-y-1 mb-4">
        {ticket.perks.slice(0, 3).map((perk, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">{perk}</span>
          </div>
        ))}
        {ticket.perks.length > 3 && (
          <button 
            onClick={() => onTicketClick(ticket)}
            className="text-xs text-primary hover:underline"
          >
            +{ticket.perks.length - 3} more benefits
          </button>
        )}
      </div>

      {/* Price and Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <span className="text-2xl font-bold text-foreground">
            {ticket.currency} ${ticket.price.toLocaleString()}
          </span>
          <div className="text-xs text-muted-foreground">per person</div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onTicketClick(ticket)}
          >
            <Eye className="h-4 w-4 mr-1" />
            More Info
          </Button>
          
          {ticket.availability === "sold-out" ? (
            waitlistTickets.includes(ticket.id) ? (
              <Button variant="outline" size="sm" disabled>
                On Waitlist
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleWaitlist(ticket.id)}
                className="text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Join Waitlist
              </Button>
            )
          ) : (
            <Button
              size="sm"
              onClick={() => onAddToCart(ticket)}
              className="bg-gradient-primary hover:shadow-glow"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          {filteredTickets.length} Tickets Available
        </h2>
      </div>

      {/* Grandstands & Walkabouts */}
      {(grandstandTickets.length > 0 || walkaboutTickets.length > 0) && (
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="h-5 w-5" />
            Grandstands & Walkabouts
          </h3>
          <div className="space-y-4">
            {[...grandstandTickets, ...walkaboutTickets].map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </section>
      )}

      {/* Hospitality */}
      {hospitalityTickets.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Utensils className="h-5 w-5" />
            Trackside Hospitality
          </h3>
          <div className="space-y-4">
            {hospitalityTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </section>
      )}

      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <Car className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No tickets match your filters</h3>
          <p className="text-muted-foreground">Try adjusting your search criteria or clearing some filters.</p>
        </div>
      )}
    </div>
  );
};