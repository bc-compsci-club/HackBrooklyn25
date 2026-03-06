import { useState, useEffect } from 'react';

const HERO_BASE_VIEWBOX = { width: 1920, height: 1080 };

const HERO_LAYERS = [
  // Base background (large hero graphic)
  {
    key: 'background',
    // use the original SVG background file
    src: '/images/component_images/background(hero).svg',
    top: '0%',
    left: '0%',
    width: '100%',
    zIndex: 0,
    anchor: 'topLeft',
  },

  // Components (individual pieces)
  // { key: 'carpet', src: '/images/component_images/carpet.svg', alt: 'Carpet', top: '68%', left: '58%', width: '70%', zIndex: 2 },
  // { key: 'carpet-bottom', src: '/images/component_images/carpet(bottom).svg', alt: 'Carpet bottom', top: '85%', left: '50%', width: '100%', zIndex: 1 },
  { key: 'bridge', src: '/images/component_images/bridge.svg', alt: 'Bridge', top: '33%', left: '73%', width: '24%', zIndex: 3 },
  // { key: 'train-platform', src: '/images/component_images/train_platform.svg', alt: 'Train platform', top: '45%', left: '0%', width: '100%', zIndex: 2 },
  // { key: 'train', src: '/images/component_images/train.svg', alt: 'Train', top: '45%', left: '0%', width: '100%', zIndex: 3 },
  { key: 'shelf', src: '/images/component_images/shelf.svg', alt: 'Shelf', top: '33%', left: '93%', width: '10%', zIndex: 5 },
  { key: 'shelf-bottom', src: '/images/component_images/shelf(bottom).svg', alt: 'Shelf bottom', top: '43%', left: '93%', width: '10%', zIndex: 5 },
  { key: 'basket-stand', src: '/images/component_images/basket_stand.svg', alt: 'Basket stand', top: '40%', left: '90%', width: '8%', zIndex: 6 },
  // { key: 'cashier-cat', src: '/images/component_images/cashier_cat.svg', alt: 'Cashier cat', top: '25%', left: '85%', width: '6%', zIndex: 6 },
  { key: 'cat', src: '/images/component_images/cat.svg', alt: 'Cat', top: '54%', left: '80%', width: '6%', zIndex: 6 },
  { key: 'lamp', src: '/images/component_images/lamp.svg', alt: 'Lamp', top: '20%', left: '32%', width: '18%', zIndex: 4 },
  // { key: 'chips', src: '/images/component_images/chips.svg', alt: 'Chips', top: '50%', left: '25%', width: '6%', zIndex: 4 },
  // { key: 'coffee', src: '/images/component_images/coffee.svg', alt: 'Coffee', top: '50%', left: '30%', width: '6%', zIndex: 4 },
];

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
    <div className="relative w-full" id="hero">
      {}
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
        {}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            top: '11.1%',         
            left: '13.4%',        
            width: '21.875%',     
            height: '122px',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 700,
            fontSize: '96px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#5a1f1f',    
            whiteSpace: 'nowrap',
            zIndex: 8,
            transform: 'translate(-50%, -50%)',
          }}
        >
          HACK BROOKLYN
        </div>

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
    </div>
  );
}

export default Hero;
