import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team for any questions or support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">info@singaporegp.com</p>
                <p className="text-muted-foreground text-sm">support@singaporegp.com</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm">+65 6738 6738</p>
                <p className="text-muted-foreground text-sm">Hotline: 1800 RACE SG</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground text-sm">Marina Bay Street Circuit</p>
                <p className="text-muted-foreground text-sm">Singapore 018956</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-muted-foreground text-sm">Mon - Fri: 9AM - 6PM</p>
                <p className="text-muted-foreground text-sm">Weekend: 10AM - 4PM</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg shadow-card border border-border/50 p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-md hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-card rounded-lg shadow-card border border-border/50 p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">When do tickets go on sale?</h4>
                  <p className="text-muted-foreground">Tickets for the 2025 Singapore Grand Prix are already available with early bird pricing. General sale starts in February 2025.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Can I refund my tickets?</h4>
                  <p className="text-muted-foreground">All ticket sales are final and non-refundable, except in case of event cancellation by the organizers.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">What are the age restrictions?</h4>
                  <p className="text-muted-foreground">Children under 3 years old can enter for free but must sit on a parent's lap. All other attendees require a valid ticket.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Is parking available?</h4>
                  <p className="text-muted-foreground">Limited parking is available near the circuit. We recommend using public transportation or ride-sharing services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;