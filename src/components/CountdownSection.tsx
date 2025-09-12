import { useState, useEffect } from "react";
import singaporeImage from "@/assets/singapore-skyline.jpg";

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Singapore Grand Prix 2025 - October 3, 2025, 8:00 PM SGT
    const raceDate = new Date('2025-10-03T20:00:00+08:00');

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = raceDate.getTime() - currentTime;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: `url(${singaporeImage})` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16">
          FORMULA 1 SINGAPORE AIRLINES
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            SINGAPORE GRAND PRIX 2025
          </span>
        </h2>
        
        {/* Countdown Display */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <div className="text-center">
            <div className="bg-gradient-card border border-border/50 rounded-2lg p-6 shadow-card">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2 animate-countdown-bounce">
                {timeLeft.days}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                DAYS
              </div>
            </div>
          </div>
          
          <div className="text-4xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-gradient-card border border-border/50 rounded-2lg p-6 shadow-card">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2 animate-countdown-bounce">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                HRS
              </div>
            </div>
          </div>
          
          <div className="text-4xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-gradient-card border border-border/50 rounded-2lg p-6 shadow-card">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2 animate-countdown-bounce">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                MINS
              </div>
            </div>
          </div>
          
          <div className="text-4xl text-primary font-bold">:</div>
          
          <div className="text-center">
            <div className="bg-gradient-card border border-border/50 rounded-2lg p-6 shadow-card">
              <div className="text-5xl md:text-7xl font-bold text-primary mb-2 animate-countdown-bounce">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                SECS
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Marina Bay Street Circuit • 03-05 October 2025
        </p>
      </div>
    </section>
  );
};