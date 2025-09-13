import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/CartContext";
import { toast } from "sonner";
import { MapPin, Users, Clock, Car } from "lucide-react";

const DriversRightLounge = () => {
  const { addToCart } = useCart();

  const handleBookTable = () => {
    const item = {
      id: "drivers-right-table",
      name: "Drivers Right Lounge - Premium Table",
      price: 3200,
      image: "/lovable-uploads/drivers-right-new.png",
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
          style={{ backgroundImage: `url(/lovable-uploads/drivers-right-new.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            DRIVERS RIGHT LOUNGE
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Close to the Action
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
                Strategic Position at Drivers Right
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience Formula 1 from the Drivers Right Lounge, strategically positioned to offer unique insights into the drivers' world. This exclusive venue provides exceptional access to the heart of the racing action, with proximity to key areas where drivers and teams prepare for their on-track battles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The lounge's location offers guests a behind-the-scenes perspective that few other venues can match. Watch as drivers go through their pre-race rituals, witness team strategies unfold, and experience the intensity that builds before each session. This is Formula 1 from the inside out.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With comfortable seating, excellent amenities, and a vantage point that puts you right in the middle of the Formula 1 experience, Drivers Right Lounge is perfect for racing enthusiasts who want to be as close to the action as possible.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Driver Access</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Close proximity to driver preparation areas and team activities
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Prime Location</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Strategic positioning with exclusive access and great visibility
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Comfortable Lounge</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Relaxed atmosphere with premium seating and excellent service
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Full Event Access</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    3-day package including all practice, qualifying and race
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground">
                Drivers Right Package
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium seating in the exclusive Drivers Right Lounge</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Strategic location near driver preparation areas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>All-day dining with a variety of international dishes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Complimentary beverages including alcoholic and non-alcoholic options</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Exclusive viewing opportunities and behind-the-scenes access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Live race commentary and timing screens</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Dedicated hospitality staff and guest services</span>
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
                    Exclusive access for up to 8 guests
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      $3,200
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
                      <span className="text-muted-foreground">Access:</span>
                      <span className="font-semibold">Driver Area Proximity</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleBookTable}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg py-3"
                  >
                    Reserve Lounge
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Secure booking. Payment processed securely.
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

export default DriversRightLounge;