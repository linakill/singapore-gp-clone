import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Mountain } from "lucide-react";

const VistaSuite = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "vista-suite-table",
      name: "The Vista Suite - Premium Table",
      price: 4200,
      image: "/lovable-uploads/vista-suite-new.png",
      category: "hospitality",
      type: "table" as const,
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
          style={{ backgroundImage: `url(/lovable-uploads/vista-suite-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            THE VISTA SUITE
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Spectacular Views & Luxury
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
                Breathtaking Vistas at The Vista Suite
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Elevate your Formula 1 experience at The Vista Suite, where spectacular panoramic views meet luxurious comfort. This premium hospitality venue is positioned to offer some of the most breathtaking vistas of both the Marina Bay Street Circuit and Singapore's iconic skyline, creating an unforgettable backdrop for your Grand Prix weekend.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Vista Suite combines the excitement of world-class motorsport with the beauty of Singapore's urban landscape. As day turns to night during the Grand Prix, watch as the city transforms into a glittering spectacle while Formula 1 cars race past illuminated by thousands of lights, creating a truly magical atmosphere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With its emphasis on both racing action and scenic beauty, The Vista Suite provides a unique perspective that captures the essence of the Singapore Grand Prix - where cutting-edge motorsport meets architectural marvels in one of the world's most beautiful cities.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Spectacular Views</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Panoramic vistas of circuit, Singapore skyline, and Marina Bay
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Premium Location</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Elevated position with unobstructed sightlines and photo opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Luxury Suite</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Premium suite facilities with elegant décor and comfort amenities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Full Weekend</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete 3-day experience including all practice and race sessions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Vista Suite Luxury Package
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium reserved seating in The Vista Suite with panoramic views</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Luxury suite amenities with climate control and premium furnishings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Gourmet dining with curated menus and fine dining service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium beverage selection including champagne and craft cocktails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dedicated concierge service and personalized guest assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Private terraces and viewing areas with comfortable seating</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Exclusive amenities including premium restrooms and lounging areas</span>
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
                    Reserve Vista Suite
                  </h3>
                  <p className="text-muted-foreground">
                    Luxury experience for up to 8 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $4,200
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
                      <span className="text-muted-foreground">Features:</span>
                      <span className="font-semibold">Panoramic Views</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Book Vista Suite
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Premium reservation. Secure payment at checkout.
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

export default VistaSuite;