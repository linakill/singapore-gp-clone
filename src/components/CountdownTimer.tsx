import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Singapore Grand Prix 2025 - October 3, 2025
    const raceDate = new Date('2025-10-03T20:00:00+08:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = raceDate - now;

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
    <div className="flex items-center space-x-2 text-sm font-bold">
      <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-lg">
        <span className="text-2xl text-primary animate-countdown-bounce">{timeLeft.days}</span>
        <span className="text-xs text-muted-foreground">DAYS</span>
      </div>
      <span className="text-primary">:</span>
      <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-lg">
        <span className="text-2xl text-primary animate-countdown-bounce">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">HRS</span>
      </div>
      <span className="text-primary">:</span>
      <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-lg">
        <span className="text-2xl text-primary animate-countdown-bounce">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">MINS</span>
      </div>
      <span className="text-primary">:</span>
      <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-lg">
        <span className="text-2xl text-primary animate-countdown-bounce">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">SECS</span>
      </div>
    </div>
  );
};