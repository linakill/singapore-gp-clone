import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Leaf } from "lucide-react";

const GreenRoom = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "green-room-table",
      name: "The Green Room - Premium Table",
      price: 3500,
      image: "/lovable-uploads/green-room-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/green-room-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            THE GREEN ROOM
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Intimate Racing Sanctuary
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
                Serene Excellence at The Green Room
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Discover The Green Room, an intimate hospitality venue that offers a more personal and exclusive Formula 1 experience. Designed as a sanctuary amidst the high-energy atmosphere of the Grand Prix, this venue combines tranquil elegance with exceptional racing views, creating the perfect environment for discerning guests.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Green Room's sophisticated design incorporates natural elements and premium finishes, creating a calming yet luxurious atmosphere. With its limited capacity and personalized service, guests enjoy an intimate setting that allows for meaningful conversations while still being immersed in the excitement of Formula 1 racing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perfect for smaller groups seeking privacy and exclusivity, The Green Room delivers a refined hospitality experience that balances relaxation with the thrill of world-class motorsport entertainment.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Intimate Setting</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Exclusive venue with limited capacity for a personal experience
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Premium Views</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Excellent track visibility with comfortable seating arrangements
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Personal Service</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Dedicated staff providing personalized attention to each guest
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Weekend Package</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete 3-day access with all practice and race sessions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Green Room Experience
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Reserved seating in the exclusive Green Room venue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Intimate dining areas with premium table service</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Carefully curated menu featuring local and international cuisine</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium beverage selection including fine wines and signature cocktails</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Personalized service with dedicated hospitality team</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Quiet areas for relaxation away from the main crowds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Exclusive amenities and comfort facilities</span>
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
                    Reserve Your Space
                  </h3>
                  <p className="text-muted-foreground">
                    Intimate experience for up to 6 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $3,500
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
                      <span className="text-muted-foreground">Setting:</span>
                      <span className="font-semibold">Intimate & Exclusive</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Book Green Room
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure reservation. Payment at checkout.
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

export default GreenRoom;