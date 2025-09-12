export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Sponsors */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-sm text-muted-foreground font-semibold">OFFICIAL PARTNERS</div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">SIA</span>
              </div>
              <span className="text-sm text-foreground">Singapore Airlines</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">STB</span>
              </div>
              <span className="text-sm text-foreground">Visit Singapore</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          <p className="mb-4">
            © 2025 Singapore GP Pte. Ltd. The F1 FORMULA 1 logo, F1 logo, FORMULA 1, F1, 
            FIA FORMULA ONE WORLD CHAMPIONSHIP, SINGAPORE GRAND PRIX and related marks are 
            trademarks of Formula One Licensing BV, a Formula 1 company. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};