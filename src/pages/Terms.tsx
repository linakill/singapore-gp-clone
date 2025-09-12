import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-card border border-border/50 p-8">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-gray max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Ticket Purchases</h2>
                <p>
                  All ticket sales are final. Tickets are non-refundable except in the case of 
                  event cancellation. Ticket prices are subject to change without notice. 
                  Each ticket admits one person only and is valid for the specific event and date shown.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Event Entry Requirements</h2>
                <p>
                  Valid photo identification may be required for entry. Age restrictions may apply 
                  to certain areas of the venue. The organizer reserves the right to refuse entry 
                  or remove anyone who violates the terms and conditions or venue policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Items</h2>
                <p>
                  Certain items are prohibited at the event venue for safety and security reasons. 
                  A complete list of prohibited items will be provided with your ticket confirmation 
                  and is available on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  The organizers shall not be liable for any direct, indirect, incidental, 
                  special or consequential damages arising from your use of this website or 
                  attendance at the event, even if advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p>
                  For questions regarding these terms and conditions, please contact us at legal@singaporegp.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;