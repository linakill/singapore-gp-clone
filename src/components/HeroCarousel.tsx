import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-f1-singapore.jpg";
import merchandiseImage from "@/assets/merchandise-banner.jpg";
import hospitalityImage from "@/assets/hospitality-banner.jpg";
import {useNavigate} from "react-router-dom";

const slides = [
  {
    id: 1,
    image: heroImage,
    title: "GET YOUR",
    subtitle: "TICKETS NOW",
    description: "Experience the thrill of Formula 1 Singapore Airlines Singapore Grand Prix 2025",
    ctaText: "BUY NOW",
    ctaLink: "/tickets"
  },
  {
    id: 2,
    image: merchandiseImage,
    title: "GET RACE READY",
    subtitle: "",
    description: "Official F1 merchandise and team gear now available",
    ctaText: "GEAR UP NOW", 
    ctaLink: "/shop"
  },
  {
    id: 3,
    image: hospitalityImage,
    title: "UNPARALLELED",
    subtitle: "TRACKSIDE HOSPITALITY",
    description: "Premium hospitality packages with exclusive trackside access",
    ctaText: "BUY NOW",
    ctaLink: "/tickets"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] overflow-hidden bg-gradient-hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${slide.image})` 
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <h2 className="text-lg uppercase tracking-wider text-primary mb-2 font-semibold">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                  {slide.subtitle}
                </h1>
              )}
              <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
                {slide.description}
              </p>
              <Button
                  onClick={()=> navigate(slide.ctaLink) }
                size="lg"
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-4 transition-all duration-300 font-semibold"
              >
                {slide.ctaText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-primary shadow-glow' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};