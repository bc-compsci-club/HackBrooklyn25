import { useState, useEffect } from 'react';

const HERO_BASE_VIEWBOX = { width: 1920, height: 1080 };

const HERO_LAYERS = [
  {
    key: 'background',
    src: '/images/component_images/background(hero).svg',
    top: '0%',
    left: '0%',
    width: '100%',
    zIndex: 0,
    anchor: 'topLeft',
  },
  { key: 'bridge', src: '/images/component_images/bridge.svg', alt: 'Bridge', top: '33%', left: '73%', width: '24%', zIndex: 3 },
  { key: 'shelf', src: '/images/component_images/shelf.svg', alt: 'Shelf', top: '33%', left: '93%', width: '10%', zIndex: 5 },
  { key: 'shelf-bottom', src: '/images/component_images/shelf(bottom).svg', alt: 'Shelf bottom', top: '43%', left: '93%', width: '10%', zIndex: 5 },
  { key: 'basket-stand', src: '/images/component_images/basket_stand.svg', alt: 'Basket stand', top: '40%', left: '90%', width: '8%', zIndex: 6 },
  { key: 'cat', src: '/images/component_images/cat.svg', alt: 'Cat', top: '54%', left: '80%', width: '6%', zIndex: 6 },
  { key: 'lamp', src: '/images/component_images/lamp.svg', alt: 'Lamp', top: '38%', left: '38%', width: '18%', zIndex: 4 },
];

function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const hackathonDate = new Date('2026-04-17T09:00:00');
    const tick = () => {
      const now = new Date();
      const diff = hackathonDate - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full" id="hero">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${HERO_BASE_VIEWBOX.width} / ${HERO_BASE_VIEWBOX.height}` }}
      >
        {HERO_LAYERS.map((layer) => (
          <img
            key={layer.key}
            src={layer.src}
            alt={layer.alt}
            className="absolute select-none pointer-events-none"
            style={{
              top: layer.top,
              left: layer.left,
              width: layer.width,
              height: 'auto',
              zIndex: layer.zIndex,
              transform: layer.anchor === 'topLeft' ? 'none' : 'translate(-50%, -50%)',
            }}
          />
        ))}

        {/* HACK BROOKLYN Title - chunky red, two lines */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            top: '8%',
            left: '3%',
            zIndex: 8,
            fontFamily: '"Arial Black", "Impact", sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(40px, 9vw, 160px)',
            lineHeight: '0.95',
            color: '#8B1A1A',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
          }}
        >
          <div>HACK</div>
          <div>BROOKLYN</div>
        </div>

        {/* Date: 4.17 - 4.19 */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            top: '44%',
            left: '3%',
            zIndex: 8,
            fontFamily: '"Arial Black", "Impact", sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(18px, 3.5vw, 60px)',
            color: '#c0392b',
            letterSpacing: '0.02em',
          }}
        >
          4.17 - 4.19
        </div>

        {/* Countdown Timer */}
<div
  className="absolute flex z-10"
  style={{
    bottom: '8%',
    left: '3%',
    alignItems: 'flex-start',
    gap: 0,
  }}
>
  {[
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MIN' },
  ].map((unit, i, arr) => (
    <div key={unit.label} className="flex items-start">
      <div className="flex flex-col items-center">
        <span
          style={{
            fontSize: 'clamp(36px, 7vw, 120px)',
            color: '#5a1a1a',
            fontFamily: 'Georgia, serif',
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {String(unit.value).padStart(2, '0')}
        </span>
        <span
          style={{
            fontSize: 'clamp(9px, 1.2vw, 16px)',
            color: '#7a3a2a',
            letterSpacing: '0.15em',
            marginTop: '4px',
          }}
        >
          {unit.label}
        </span>
      </div>
      {i < arr.length - 1 && (
        <span
          style={{
            fontSize: 'clamp(30px, 6vw, 100px)',
            color: '#5a1a1a',
            lineHeight: 1,
            paddingTop: '0.05em',   // slight nudge down to vertically center with digits
            marginLeft: 'clamp(4px, 0.8vw, 14px)',
            marginRight: 'clamp(4px, 0.8vw, 14px)',
          }}
        >
          :
        </span>
      )}
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Hero;