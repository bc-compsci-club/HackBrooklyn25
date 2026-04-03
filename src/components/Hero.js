import { useState, useEffect } from 'react';

function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const hackathonDate = new Date('2026-04-17T09:00:00');
    const timer = setInterval(() => {
      const now = new Date();
      const diff = hackathonDate - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full pt-12" id="hero">
      <img src="/images/hero(final).svg" alt="Hero" className="block h-auto w-full" />
      <div
        className="absolute flex items-center justify-center flex-wrap z-10 opacity-0 animate-lampReveal"
        style={{
          top: '80.25%',
          left: '27.88%',
          transform: 'translate(-50%, -50%)',
          gap: 'clamp(8px, 2vw, 20px)',
        }}
      >
        <div className="flex flex-col items-center">
          <span
            className="font-bold leading-none animate-warmPulse"
            style={{
              fontSize: 'clamp(32px, 6vw, 96px)',
              color: '#ffe0b2',
              fontFamily: 'Georgia, serif',
              textShadow: '0 1px 1px rgba(255,220,170,0.4), 0 -1px 1px rgba(40,20,10,0.35), 0 0 14px rgba(255,210,140,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span
            className="uppercase tracking-widest mt-1"
            style={{
              fontSize: 'clamp(10px, 1.3vw, 18px)',
              color: '#e0c0a0',
              textShadow: '0 1px 1px rgba(255,220,170,0.3), 0 -1px 1px rgba(40,20,10,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            Days
          </span>
        </div>
        <span
          className="font-bold self-start"
          style={{
            fontSize: 'clamp(28px, 5vw, 76px)',
            color: '#d0a880',
            mixBlendMode: 'screen',
          }}
        >
          :
        </span>
        <div className="flex flex-col items-center">
          <span
            className="font-bold leading-none animate-warmPulse"
            style={{
              fontSize: 'clamp(32px, 6vw, 96px)',
              color: '#ffe0b2',
              fontFamily: 'Georgia, serif',
              textShadow: '0 1px 1px rgba(255,220,170,0.4), 0 -1px 1px rgba(40,20,10,0.35), 0 0 14px rgba(255,210,140,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span
            className="uppercase tracking-widest mt-1"
            style={{
              fontSize: 'clamp(10px, 1.3vw, 18px)',
              color: '#e0c0a0',
              textShadow: '0 1px 1px rgba(255,220,170,0.3), 0 -1px 1px rgba(40,20,10,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            Hours
          </span>
        </div>
        <span
          className="font-bold self-start"
          style={{
            fontSize: 'clamp(28px, 5vw, 76px)',
            color: '#d0a880',
            mixBlendMode: 'screen',
          }}
        >
          :
        </span>
        <div className="flex flex-col items-center">
          <span
            className="font-bold leading-none animate-warmPulse"
            style={{
              fontSize: 'clamp(32px, 6vw, 96px)',
              color: '#ffe0b2',
              fontFamily: 'Georgia, serif',
              textShadow: '0 1px 1px rgba(255,220,170,0.4), 0 -1px 1px rgba(40,20,10,0.35), 0 0 14px rgba(255,210,140,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span
            className="uppercase tracking-widest mt-1"
            style={{
              fontSize: 'clamp(10px, 1.3vw, 18px)',
              color: '#e0c0a0',
              textShadow: '0 1px 1px rgba(255,220,170,0.3), 0 -1px 1px rgba(40,20,10,0.3)',
              mixBlendMode: 'screen',
            }}
          >
            Min
          </span>
        </div>
        <span
          className="w-full text-center font-bold"
          style={{
            fontSize: 'clamp(12px, 1.8vw, 24px)',
            color: '#ffe0b2',
            letterSpacing: 'clamp(3px, 0.5vw, 8px)',
            marginTop: 'clamp(4px, 0.8vw, 12px)',
            textShadow: '0 1px 1px rgba(255,220,170,0.3), 0 -1px 1px rgba(40,20,10,0.3)',
            mixBlendMode: 'screen',
          }}
        >
          UNTIL HACKBC
        </span>
      </div>
    </div>
  );
}

export default Hero;
