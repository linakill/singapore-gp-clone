import { AlertTriangle } from "lucide-react";

export const ResellerBanner = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 text-center">
          <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0" />
          <div className="flex-1 max-w-4xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              IMPORTANT NOTICE FOR BUYERS
            </h3>
            <div className="text-muted-foreground space-y-1">
              <p className="text-base font-medium">
                We are an official reseller of Formula 1 Singapore Grand Prix 2025 tickets
              </p>
              <p className="text-sm">
                • <strong>Prices may differ</strong> from original ticket prices • All tickets are <strong>genuine and valid</strong> • We provide <strong>full guarantee</strong> on all purchased tickets • Additional service fees may apply
              </p>
              <p className="text-xs pt-1 opacity-80">
                By purchasing tickets from us, you agree that we are an authorized reseller, not the event organizer. All sales are subject to our terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};