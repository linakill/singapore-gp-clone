import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Eye } from "lucide-react";

const SkySuite = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "sky-suite-table",
      name: "Sky Suite - Premium Table",
      price: 6500,
      image: "/lovable-uploads/sky-suite-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/sky-suite-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            SKY SUITE
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Elevated Racing Experience
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
                Panoramic Views from Sky Suite
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Rise above the excitement at Sky Suite, where breathtaking panoramic views meet exceptional hospitality. Positioned at an elevated vantage point, this premium venue offers unobstructed sightlines across the entire Marina Bay Street Circuit, giving you the ultimate perspective on Formula 1 racing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Sky Suite's floor-to-ceiling windows and spacious outdoor terraces provide the perfect blend of comfort and spectacle. Watch as cars navigate the challenging street circuit while enjoying world-class dining and premium service in an atmosphere of modern elegance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With its contemporary design and sophisticated ambiance, Sky Suite is ideal for corporate entertainment, special occasions, or simply treating yourself to an unforgettable Formula 1 experience with friends and family.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Panoramic Views</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    360-degree views of the circuit and Singapore's stunning skyline
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Strategic Location</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Elevated position with unobstructed views of multiple track sections
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Premium Space</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spacious indoor and outdoor areas with comfortable seating
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">All Sessions</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete weekend access including practice and qualifying
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Sky Suite Inclusions
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium reserved seating with panoramic circuit views</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Access to both indoor climate-controlled areas and outdoor terraces</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Gourmet buffet dining with international cuisine selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium beverage service including champagne and signature cocktails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Live timing screens and race commentary in multiple languages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dedicated hospitality staff and table service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Complimentary WiFi and device charging stations</span>
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
                    Book Your Experience
                  </h3>
                  <p className="text-muted-foreground">
                    Elevated views for up to 8 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $6,500
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
                      <span className="text-muted-foreground">View:</span>
                      <span className="font-semibold">Panoramic Circuit</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Reserve Sky Suite
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Instant confirmation. Payment due at checkout.
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

export default SkySuite;