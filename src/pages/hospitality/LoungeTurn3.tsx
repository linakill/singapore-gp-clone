import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Navigation } from "lucide-react";

const LoungeTurn3 = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "lounge-turn3-table",
      name: "Lounge at Turn 3 - Premium Table",
      price: 2800,
      image: "/lovable-uploads/lounge-turn3-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/lounge-turn3-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            LOUNGE AT TURN 3
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Perfect Views of Racing Drama
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
                Front Row to Turn 3 Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Position yourself at the heart of the racing action at the Lounge at Turn 3, where some of the most exciting moments of the Singapore Grand Prix unfold. This strategically located venue offers unparalleled views of one of the circuit's most challenging corners, where drivers must navigate tight turns at high speed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Turn 3 is where overtaking opportunities present themselves and where racing strategies come to life. From the comfort of the lounge, you'll witness the skill and precision required as drivers brake late, position their cars perfectly, and accelerate out onto the back straight. It's Formula 1 racing at its most intense.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The relaxed lounge atmosphere provides the perfect setting to enjoy the race with fellow motorsport enthusiasts, while the premium amenities ensure your comfort throughout the weekend's exciting racing program.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Navigation className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Turn 3 Views</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct views of Turn 3 racing action and overtaking opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Strategic Position</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prime location overlooking key racing moments and driver battles
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Relaxed Atmosphere</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comfortable lounge setting perfect for socializing and networking
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Complete Weekend</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full 3-day access to all sessions and track activities
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Turn 3 Lounge Package
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Reserved seating with optimal Turn 3 viewing angles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Comfortable lounge areas with air conditioning and outdoor terraces</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Diverse dining options featuring local and international cuisine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Full beverage service including beer, wine, and premium spirits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Live race timing displays and multi-language commentary</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Professional hospitality service throughout the event</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Convenient amenities including restrooms and charging stations</span>
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
                    Reserve Your Spot
                  </h3>
                  <p className="text-muted-foreground">
                    Turn 3 action for up to 6 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $2,800
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Per table (up to 6 guests)
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-semibold">Up to 6 guests</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">View:</span>
                      <span className="font-semibold">Turn 3 Corner</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Book Turn 3 Lounge
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure reservation. Easy checkout process.
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

export default LoungeTurn3;