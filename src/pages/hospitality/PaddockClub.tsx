import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Star } from "lucide-react";

const PaddockClub = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "paddock-club-table",
      name: "Formula 1 Paddock Club - Premium Table",
      price: 8500,
      image: "/lovable-uploads/paddock-club-new.png",
      category: "hospitality",
      type: "table",
      quantity: 1
    };
    addToCart(item);
    toast.success("Table booking added to cart!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/paddock-club-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            FORMULA 1 PADDOCK CLUB
          </h1>
          <p className="text-xl md:text-2xl font-light">
            The Ultimate Formula 1 Experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-orbitron font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                The Pinnacle of Formula 1 Hospitality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience Formula 1 like never before at the exclusive Paddock Club. This premium hospitality venue offers unparalleled access to the heart of the Grand Prix, where you'll witness the drama, excitement, and pure adrenaline of Formula 1 racing from the most prestigious vantage point.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located directly above the team garages, the Paddock Club provides spectacular views of the pit lane activity, driver preparations, and all the behind-the-scenes action that makes Formula 1 so captivating. Watch as teams make critical strategy decisions and witness history in the making.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With world-class cuisine prepared by renowned chefs, premium beverages, and impeccable service, every moment at the Paddock Club is designed to exceed your expectations. This is more than just watching a race – it's about being part of the Formula 1 family.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Premium Location</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Exclusive access above team garages with unobstructed pit lane views
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">VIP Access</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Meet F1 legends, team principals, and exclusive guest appearances
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">All Weekend</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    3-day access including practice, qualifying, and race day
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Gourmet Dining</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    World-class cuisine and premium beverages throughout the event
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                What's Included
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium seating with unobstructed views of the pit lane and start/finish straight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Access to exclusive Paddock Club lounges and terraces</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Gourmet breakfast, lunch, and afternoon refreshments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium bar service with top-shelf spirits and champagne</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Guided pit lane walks (subject to FIA regulations)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Exclusive gift bag and welcome amenities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dedicated concierge service throughout the weekend</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-orbitron font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    Book Your Table
                  </h3>
                  <p className="text-muted-foreground">
                    Premium experience for up to 8 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $8,500
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Per table (up to 8 guests)
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold">Up to 8 guests</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-semibold">Above Pit Lane</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Reserve Table
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure booking. Payment processed at checkout.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaddockClub;