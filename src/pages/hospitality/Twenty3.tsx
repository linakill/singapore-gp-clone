import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Sparkles } from "lucide-react";

const Twenty3 = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "twenty3-table",
      name: "Twenty3 - Premium Table",
      price: 4500,
      image: "/lovable-uploads/twenty3-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/twenty3-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            TWENTY3
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Contemporary Racing Lounge
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
                Modern Sophistication at Twenty3
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Step into Twenty3, where contemporary design meets Formula 1 excitement in perfect harmony. This stylish hospitality venue represents the modern face of Grand Prix entertainment, featuring cutting-edge design elements, innovative technology, and a vibrant atmosphere that captures the energy of Formula 1 racing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located strategically along the Marina Bay Street Circuit, Twenty3 offers excellent track views combined with a social environment that's perfect for networking, celebrating, or simply enjoying the race with friends and colleagues. The venue's contemporary aesthetic and premium amenities create an unforgettable experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With its focus on modern hospitality and innovative service delivery, Twenty3 attracts a dynamic crowd of Formula 1 enthusiasts who appreciate both the sport's heritage and its exciting future.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Modern Design</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Contemporary architecture with sleek interiors and modern amenities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Great Location</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strategic circuit-side position with excellent track visibility
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Social Setting</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Vibrant atmosphere perfect for networking and socializing
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
                    Full 3-day access to all sessions and exclusive events
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Twenty3 Experience Includes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium reserved seating in contemporary lounge setting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Modern viewing areas with state-of-the-art audio-visual systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Contemporary dining experience with fusion cuisine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Craft cocktails, premium spirits, and curated beverage selection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Interactive racing displays and real-time race analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>High-speed WiFi and mobile device charging stations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Professional event staff and personalized service</span>
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
                    Modern experience for up to 8 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $4,500
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
                      <span className="text-muted-foreground">Style:</span>
                      <span className="font-semibold">Contemporary Lounge</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Reserve Twenty3
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Instant booking confirmation. Pay securely at checkout.
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

export default Twenty3;