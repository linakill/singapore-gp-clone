import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import {useNavigate} from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-header">
      <div className="container mx-auto px-4">  
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              SINGAPORE GP
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/tickets" className="font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-glow">
              TICKETS
            </a>
            <a href="/hospitality" className="font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-glow">
              HOSPITALITY
            </a>
            <a href="/sustainability" className="font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-glow">
              SUSTAINABILITY
            </a>
            <a href="/shop" className="font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-glow">
              SHOP
            </a>
          </nav>

          {/* Countdown Timer */}
          <div className="hidden lg:flex">
            <CountdownTimer />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            <Button onClick={()=> navigate("/tickets") }
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold">
              BUY TICKETS
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <nav className="py-4 space-y-4">
              <a href="/tickets" className="block px-4 py-2 font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300">
                TICKETS
              </a>
              <a href="/hospitality" className="block px-4 py-2 font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300">
                HOSPITALITY
              </a>
              <a href="/sustainability" className="block px-4 py-2 font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300">
                SUSTAINABILITY
              </a>
              <a href="/shop" className="block px-4 py-2 font-orbitron font-semibold text-lg tracking-wide text-foreground hover:text-primary transition-all duration-300">
                SHOP
              </a>
              <div className="px-4 pt-4 border-t border-border">
                <CountdownTimer />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};