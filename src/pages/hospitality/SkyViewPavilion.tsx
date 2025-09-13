import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Cloud } from "lucide-react";

const SkyViewPavilion = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "sky-view-pavilion-table",
      name: "Sky View Pavilion - Premium Table",
      price: 3800,
      image: "/lovable-uploads/sky-view-pavilion-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/sky-view-pavilion-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            SKY VIEW PAVILION
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Open-Air Racing Experience
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
                Open-Air Excellence at Sky View Pavilion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience the Singapore Grand Prix in its full glory at the Sky View Pavilion, where open-air excitement meets premium hospitality. This unique venue combines the thrill of being outdoors with the comfort and service of a luxury hospitality experience, offering an authentic connection to the race atmosphere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The pavilion's innovative design captures the energy of Singapore's night race while providing excellent protection from the elements. Feel the rumble of engines, hear the roar of the crowd, and breathe in the excitement that can only be experienced in an open-air setting, all while enjoying world-class amenities and service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Perfect for guests who want to be immersed in the full sensory experience of Formula 1 racing, the Sky View Pavilion offers an ideal balance between outdoor excitement and hospitality comfort, making it a favorite among racing purists and casual fans alike.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Open-Air Experience</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unique outdoor pavilion with weather protection and natural ambiance
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Elevated Position</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Raised platform providing excellent circuit and city skyline views
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
                    Spacious pavilion perfect for groups and networking opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Complete Access</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Full weekend package with access to all racing sessions
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Sky View Pavilion Package
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Reserved seating in the exclusive Sky View Pavilion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Open-air pavilion with weather protection and excellent ventilation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Diverse dining options with outdoor BBQ and international cuisines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Full bar service with tropical cocktails and refreshing beverages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Live entertainment and DJ performances during race intervals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Large screens for race timing and close-up action replays</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dedicated staff service and guest assistance throughout the event</span>
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
                    Book Your Pavilion
                  </h3>
                  <p className="text-muted-foreground">
                    Open-air experience for up to 6 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $3,800
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
                      <span className="font-semibold">Open-Air Pavilion</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Reserve Pavilion
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure booking. Payment at final checkout.
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

export default SkyViewPavilion;