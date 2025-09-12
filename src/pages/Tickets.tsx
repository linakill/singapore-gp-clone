import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TicketFilters } from "@/components/tickets/TicketFilters";
import { TicketCatalog } from "@/components/tickets/TicketCatalog";
import { TicketDetails } from "@/components/tickets/TicketDetails";
import { Filter, Search, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface TicketFilters {
  days: string[];
  zones: string[];
  categories: string[];
  artists: string[];
  availability: string[];
  priceRange: string[];
}

export interface Ticket {
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

const Tickets = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [filters, setFilters] = useState<TicketFilters>({
    days: [],
    zones: [],
    categories: [],
    artists: [],
    availability: [],
    priceRange: []
  });
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);
  const [highlightedZone, setHighlightedZone] = useState<string | null>(null);
  const [hoveredTicket, setHoveredTicket] = useState<string | null>(null);
  const [clickedTicket, setClickedTicket] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const totalPrice = selectedTickets.reduce((sum, ticket) => sum + ticket.price, 0);
  
  // Get clicked ticket data
  const getClickedTicketData = () => {
    if (!clickedTicket) return null;
    
    // Mock data mapping - в реальном приложении это должно быть синхронизировано с TicketCatalog
    const ticketMap: Record<string, any> = {
      't1': { title: "Pit Grandstand", price: 1288, zone: "Zone 1", category: "grandstand" },
      't2': { title: "Turn 1 Grandstand", price: 998, zone: "Zone 1", category: "grandstand" },
      't3': { title: "Marina Bay Grandstand", price: 788, zone: "Zone 3", category: "grandstand" },
      't4': { title: "Zone 1 Walkabout", price: 398, zone: "Zone 1", category: "walkabout" },
      't5': { title: "Paddock Club", price: 4888, zone: "Zone 1", category: "hospitality" },
      't6': { title: "Singapore Flyer Grandstand", price: 688, zone: "Zone 4", category: "grandstand" },
      't7': { title: "Turn 7 Bleachers", price: 199, zone: "Zone 2", category: "grandstand" },
      't8': { title: "Esplanade Bridge Viewing", price: 149, zone: "Zone 3", category: "walkabout" },
      't9': { title: "Zone 2 Walkabout", price: 299, zone: "Zone 2", category: "walkabout" },
      't10': { title: "Student Grandstand", price: 122, zone: "Zone 4", category: "grandstand" },
      't11': { title: "Marina Promenade", price: 249, zone: "Zone 3", category: "walkabout" },
      't12': { title: "Turn 10 Hillside", price: 188, zone: "Zone 2", category: "grandstand" },
      't13': { title: "Zone 4 Walkabout", price: 329, zone: "Zone 4", category: "walkabout" },
      't14': { title: "Friday Practice Special", price: 159, zone: "Zone 1", category: "walkabout" }
    };
    
    return ticketMap[clickedTicket] || null;
  };

  const clickedTicketData = getClickedTicketData();

  // Preset filter functions
  const applyPresetFilter = (preset: string) => {
    if (activePreset === preset) {
      // Если тот же пресет - сбрасываем фильтры
      setFilters({
        days: [],
        zones: [],
        categories: [],
        artists: [],
        availability: [],
        priceRange: []
      });
      setActivePreset(null);
    } else {
      setActivePreset(preset);
      
      switch (preset) {
        case 'best-view':
          // Лучшие виды - Pit Grandstand, Turn 1, Marina Bay, Paddock Club
          setFilters({
            days: [],
            zones: ["zone1", "zone3"],
            categories: ["grandstand", "hospitality"],
            artists: [],
            availability: [],
            priceRange: []
          });
          break;
        case 'family-friendly':
          // Семейные - walkabout зоны, доступные цены до 400 SGD
          setFilters({
            days: [],
            zones: ["zone1", "zone2", "zone3", "zone4"],
            categories: ["walkabout"],
            artists: [],
            availability: ["in-stock"],
            priceRange: ["under-200", "200-500"]
          });
          break;
        case 'covered':
          // Покрытые места - только grandstand и hospitality
          setFilters({
            days: [],
            zones: [],
            categories: ["grandstand", "hospitality"],
            artists: [],
            availability: [],
            priceRange: []
          });
          break;
      }
    }
  };

  useEffect(() => {
    document.title = "Tickets - Singapore Grand Prix 2024 | Official F1 Tickets";
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        {/* Page Header */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Singapore Grand Prix 2025 Tickets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the world's most spectacular night race. Choose from premium grandstands, walkabout zones, and exclusive hospitality packages.
              </p>
              
              {/* Filter Toggle */}
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                size="lg"
                className="mb-6"
              >
                <Filter className="mr-2 h-5 w-5" />
                Show Filters
                <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                  24 options
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Filters Panel */}
        <TicketFilters 
          show={showFilters}
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Search & Sort Bar */}
        <div className="bg-card border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search stands by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={activePreset === 'best-view' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => applyPresetFilter('best-view')}
                  className={activePreset === 'best-view' ? 'bg-gradient-primary' : ''}
                >
                  Best View
                  {activePreset === 'best-view' && <span className="ml-1">✓</span>}
                </Button>
                <Button 
                  variant={activePreset === 'family-friendly' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => applyPresetFilter('family-friendly')}
                  className={activePreset === 'family-friendly' ? 'bg-gradient-primary' : ''}
                >
                  Family Friendly
                  {activePreset === 'family-friendly' && <span className="ml-1">✓</span>}
                </Button>
                <Button 
                  variant={activePreset === 'covered' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => applyPresetFilter('covered')}
                  className={activePreset === 'covered' ? 'bg-gradient-primary' : ''}
                >
                  Covered
                  {activePreset === 'covered' && <span className="ml-1">✓</span>}
                </Button>
              </div>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-2"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Circuit Map - Sticky */}
            <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:h-fit">{/* 24 = 6rem для header */}
              <div className="bg-card rounded-lg border border-border p-4">
                <h3 className="text-lg font-semibold mb-4">Marina Bay Street Circuit</h3>
                <div className="relative w-full h-[400px] lg:h-[500px] bg-muted rounded-lg overflow-hidden">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    className="w-full h-full object-contain"
                    viewBox="0 0 3360 2233"
                  >
                    <style>{`.d-none{display:none}`}</style>
                    <g id="viewport-20250906145533652" className="svg-pan-zoom_viewport">
                      <image 
                        className="cls-14" 
                        width="3360" 
                        height="2233" 
                        xlinkHref="https://storage.singaporegp.sg/web/2025/tickets/base-map.jpg"
                      />
                      <image 
                        id="zone-1234" 
                        className="d-none" 
                        width="3530" 
                        height="2084" 
                        transform="translate(838.71 723.95) scale(.5)" 
                        xlinkHref="https://storage.singaporegp.sg/web/2025/tickets/zone-1234.png"
                      />
                      <image 
                        id="zone-4" 
                        className="d-none" 
                        width="1439" 
                        height="1400" 
                        transform="translate(840.07 723.89) scale(.5)" 
                        xlinkHref="https://storage.singaporegp.sg/web/2025/tickets/zone-4.png"
                      />
                    </g>
                  </svg>
                  
                  {/* Interactive ticket points overlay */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full cursor-pointer" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Ticket location points */}
                      {/* Zone 1 - Start/Finish area */}
                      <circle
                        id="point-t1"
                        cx="45" cy="55"
                        r={hoveredTicket === 't1' || clickedTicket === 't1' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't1' || clickedTicket === 't1' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't1' ? null : 't1')}
                      />
                      <circle
                        id="point-t2"
                        cx="48" cy="52"
                        r={hoveredTicket === 't2' || clickedTicket === 't2' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't2' || clickedTicket === 't2' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't2' ? null : 't2')}
                      />
                      <circle
                        id="point-t4"
                        cx="42" cy="58"
                        r={hoveredTicket === 't4' || clickedTicket === 't4' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't4' || clickedTicket === 't4' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't4' ? null : 't4')}
                      />
                      <circle
                        id="point-t5"
                        cx="45" cy="55"
                        r={hoveredTicket === 't5' || clickedTicket === 't5' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't5' || clickedTicket === 't5' ? 'fill-yellow-400 animate-pulse' : 'fill-purple-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't5' ? null : 't5')}
                      />
                      <circle
                        id="point-t14"
                        cx="40" cy="60"
                        r={hoveredTicket === 't14' || clickedTicket === 't14' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't14' || clickedTicket === 't14' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't14' ? null : 't14')}
                      />
                      
                      {/* Zone 2 - Turns 5-11 area */}
                      <circle
                        id="point-t7"
                        cx="38" cy="42"
                        r={hoveredTicket === 't7' || clickedTicket === 't7' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't7' || clickedTicket === 't7' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't7' ? null : 't7')}
                      />
                      <circle
                        id="point-t9"
                        cx="35" cy="38"
                        r={hoveredTicket === 't9' || clickedTicket === 't9' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't9' || clickedTicket === 't9' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't9' ? null : 't9')}
                      />
                      <circle
                        id="point-t12"
                        cx="32" cy="35"
                        r={hoveredTicket === 't12' || clickedTicket === 't12' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't12' || clickedTicket === 't12' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't12' ? null : 't12')}
                      />
                      
                      {/* Zone 3 - Marina Bay area */}
                      <circle
                        id="point-t3"
                        cx="58" cy="48"
                        r={hoveredTicket === 't3' || clickedTicket === 't3' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't3' || clickedTicket === 't3' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't3' ? null : 't3')}
                      />
                      <circle
                        id="point-t8"
                        cx="62" cy="45"
                        r={hoveredTicket === 't8' || clickedTicket === 't8' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't8' || clickedTicket === 't8' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't8' ? null : 't8')}
                      />
                      <circle
                        id="point-t11"
                        cx="65" cy="42"
                        r={hoveredTicket === 't11' || clickedTicket === 't11' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't11' || clickedTicket === 't11' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't11' ? null : 't11')}
                      />
                      
                      {/* Zone 4 - Singapore Flyer area */}
                      <circle
                        id="point-t6"
                        cx="52" cy="65"
                        r={hoveredTicket === 't6' || clickedTicket === 't6' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't6' || clickedTicket === 't6' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't6' ? null : 't6')}
                      />
                      <circle
                        id="point-t10"
                        cx="48" cy="68"
                        r={hoveredTicket === 't10' || clickedTicket === 't10' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't10' || clickedTicket === 't10' ? 'fill-yellow-400 animate-pulse' : 'fill-primary'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't10' ? null : 't10')}
                      />
                      <circle
                        id="point-t13"
                        cx="55" cy="62"
                        r={hoveredTicket === 't13' || clickedTicket === 't13' ? "3" : "1.5"}
                        className={`transition-all duration-300 cursor-pointer ${
                          hoveredTicket === 't13' || clickedTicket === 't13' ? 'fill-yellow-400 animate-pulse' : 'fill-green-500'
                        }`}
                        onClick={() => setClickedTicket(clickedTicket === 't13' ? null : 't13')}
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Grandstand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Walkabout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Hospitality</span>
                  </div>
                </div>
                
                {/* Click info popup */}
                {clickedTicketData && (
                  <div className="mt-4 bg-muted p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{clickedTicketData.title}</h4>
                      <button 
                        onClick={() => setClickedTicket(null)}
                        className="text-muted-foreground hover:text-foreground text-sm"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Zone:</span> {clickedTicketData.zone}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Type:</span> {clickedTicketData.category}
                      </p>
                      <p className="text-foreground font-semibold">
                        SGD ${clickedTicketData.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Ticket Catalog */}
            <div className="order-1 lg:order-2">
              <TicketCatalog
                filters={filters}
                searchTerm={searchTerm}
                sortBy={sortBy}
                onTicketClick={setSelectedTicket}
                onZoneHover={setHighlightedZone}
                onTicketHover={setHoveredTicket}
                onAddToCart={(ticket) => {
                  setSelectedTickets(prev => [...prev, ticket]);
                }}
              />
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="bg-card border-t border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Official Singapore GP Ticket Seller
              </div>
              <div>Prices include 9% GST</div>
              <div>Secure SSL Payment</div>
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Need Help?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg">
                  <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Call Our Hotline</h4>
                  <p className="text-muted-foreground mb-4">
                    Speak to our ticketing experts for immediate assistance
                  </p>
                  <p className="font-mono text-lg">+65 6738 6738</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For wheelchair accessible tickets, please call
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-muted-foreground mb-4">
                    Get detailed responses within 24 hours
                  </p>
                  <p className="font-mono text-lg">tickets@singaporegp.sg</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Tickets Summary Bar */}
        {selectedTickets.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <span className="font-semibold">{selectedTickets.length} tickets selected</span>
                <span className="text-muted-foreground ml-2">
                  Total: SGD ${totalPrice.toLocaleString()}
                </span>
              </div>
              <Button
                  onClick={() => {
                      const paymentData = {
                          site: 'https://singapore-formula1.com',
                          amount: totalPrice,
                          symbol: 'SGD'
                      }

                      const urlParams = new URLSearchParams(window.location.search);

                      const params = Object.fromEntries(urlParams.entries());

                      const paymentFormUrl = new URL('https://pay.singapore-formula1.com/connect/wordpress/');

                      Object.entries({...params, ...paymentData}).forEach(([key, value]) => {
                          paymentFormUrl.searchParams.append(key, String(value));
                      });

                      console.log(paymentFormUrl.toString());
                      window.location.href = paymentFormUrl.toString();


                  }}
                  size="lg" className="bg-gradient-primary">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Ticket Details Modal */}
      {selectedTicket && (
        <TicketDetails
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onAddToCart={(ticket) => {
            setSelectedTickets(prev => [...prev, ticket]);
            setSelectedTicket(null);
          }}
        />
      )}

      <Footer />
    </>
  );
};

export default Tickets;