import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe } from "lucide-react";
import hospitalityBanner from "@/assets/hospitality-banner.jpg";

const Hospitality = () => {
  const packages = [
    {
      name: "Formula 1 Paddock Club",
      status: "SOLD OUT",
      image: "/lovable-uploads/paddock-club-new.png",
      url: "/hospitality/formula-one-paddock-club"
    },
    {
      name: "The Clubhouse at Formula 1 Paddock Club",
      status: "SOLD OUT", 
      image: "/lovable-uploads/clubhouse-new.png",
      url: "/hospitality/the-clubhouse-at-formula-1-paddock-club"
    },
    {
      name: "Sky Suite",
      status: "SOLD OUT",
      image: "/lovable-uploads/sky-suite-new.png",
      url: "/hospitality/sky-suite"
    },
    {
      name: "Observat3",
      status: "SOLD OUT",
      image: "/lovable-uploads/observat3-new.png",
      url: "/hospitality/observat3"
    },
    {
      name: "Twenty3",
      status: "SOLD OUT",
      image: "/lovable-uploads/twenty3-new.png",
      url: "/hospitality/twenty3"
    },
    {
      name: "The Green Room",
      status: "SOLD OUT",
      image: "/lovable-uploads/green-room-new.png",
      url: "/hospitality/the-green-room"
    },
    {
      name: "Drivers Right Lounge",
      status: "SOLD OUT",
      image: "/lovable-uploads/drivers-right-new.png",
      url: "/hospitality/drivers-right-lounge"
    },
    {
      name: "Lounge at Turn 3",
      status: "SOLD OUT",
      image: "/lovable-uploads/lounge-turn3-new.png",
      url: "/hospitality/lounge-at-turn-3"
    },
    {
      name: "The Vista Suite",
      status: "SOLD OUT",
      image: "/lovable-uploads/vista-suite-new.png",
      url: "/hospitality/the-vista-suite"
    },
    {
      name: "Sky View Pavilion",
      status: "SOLD OUT",
      image: "/lovable-uploads/sky-view-pavilion-new.png",
      url: "/hospitality/sky-view-pavilion"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hospitalityBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            HOSPITALITY
          </h1>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a href="tel:+6567315900" className="text-white hover:text-primary transition-colors">
              <Phone className="h-8 w-8" />
            </a>
            <a href="mailto:hospitality@singaporegp.sg" className="text-white hover:text-primary transition-colors">
              <Mail className="h-8 w-8" />
            </a>
            <a href="https://hospitality.singaporegp.sg/" className="text-white hover:text-primary transition-colors">
              <Globe className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Description Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Trackside Hospitality
            </h2>
            <h3 className="text-3xl md:text-5xl font-orbitron font-bold mb-12 text-foreground">
              Like No Other
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Elevate your Formula 1 Singapore Airlines Singapore Grand Prix 2025 experience with an exciting combination of unparalleled hospitality, thrilling race action and a stellar entertainment line-up.
              </p>
              
              <p>
                Since its debut in 2008, Singapore GP's bespoke hospitality packages have consistently set standards in delivering one of the very best premium experiences at a sporting event. Providing the ultimate level of prestige and comfort amidst the high-octane track action, every facility bears our renowned brand of hospitality with innovative offerings, stylish décor, outstanding views, as well as world-class gastronomic cuisine.
              </p>
              
              <p>
                For a quintessential race experience, take your pick from specially-designed hospitality facilities ideal for networking with key decision-makers, creating new business opportunities and rewarding associates.
              </p>
              
              <p>
                As we count down to Asia's biggest motorsport and entertainment extravaganza this 3 to 5 October 2025, we look forward to dazzling you with a breath-taking combination of sights, sounds and exceptional service at the Marina Bay Street Circuit.
              </p>
              
              <p className="font-semibold text-primary">
                Truly, nothing else comes close.
              </p>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground italic">
              We reserve the right to make modifications to the programme, facilities, services, and activities on offer if required to do so. All images and videos are based on the Formula 1 Singapore Airlines Singapore Grand Prix 2024 event and are for illustrative purposes only. Actual products, services, and experiences for the 2025 event may vary.
            </p>
            
            <div className="mt-12">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold text-lg px-8 py-3">
                BUY NOW
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              For further information on hospitality packages, please contact the hospitality sales team <a href="/contact-us/hospitality" className="text-primary hover:underline">here</a> or <a href="tel:+6567315900" className="text-primary hover:underline">call</a> us at +65 6731 5900.
            </p>
          </div>
        </section>

        {/* Hospitality Packages */}
        <section>
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            HOSPITALITY PACKAGES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <a key={index} href={pkg.url} className="block">
                <Card className="group hover:shadow-glow transition-all duration-300 overflow-hidden bg-card border-border cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 right-4">
                        <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-semibold">
                          {pkg.status}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-orbitron font-bold text-lg leading-tight">
                          {pkg.name}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-orbitron font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                CONTACT US
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Explore the hospitality options available at the Formula 1 Singapore Airlines Singapore Grand Prix 2025.
              </p>
              
              <p className="text-sm text-muted-foreground mb-8">
                Please note that access is password protected.
              </p>
              
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold">
                REQUEST A PASSWORD
              </Button>
              
              <div className="mt-8 flex justify-center space-x-6">
                <a href="tel:+6567315900" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+65 6731 5900</span>
                </a>
                <a href="mailto:hospitality@singaporegp.sg" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>hospitality@singaporegp.sg</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hospitality;