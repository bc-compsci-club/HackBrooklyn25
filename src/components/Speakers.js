import { useEffect, useRef, useState } from "react";

const SPEAKERS = [
  {
    name: "Alejandro Hernandez",
    title: "Software Engineer",
    company: "Cisco Meraki",
    image: "/images/speakers/alejandro-hernandez.jpeg",
  },
  {
    name: "Chris Panican",
    title: "Software Engineer",
    company: "J.P. Morgan",
    image: "/images/speakers/chris-panican.jpeg",
  },
  {
    name: "Shahzoda Davlatova",
    title: "Founder, CEO, Software Engineer",
    company: "TunerBench, Prev. Meta, Apple, J.P. Morgan",
    image: "/images/speakers/shahzoda-davlatova.jpeg",
  },
  {
    name: "Richie Bielak",
    title: "Senior Software Enginner",
    company: "Google, Bloomberg",
    image: "/images/speakers/richie-bielak.png",
  },
  {
    name: "Muhammad Omar",
    title: "Software Engineer",
    company: "Priviom, Wayfair",
    image: "/images/speakers/muhammad-omar.jpeg",
  },
  {
    name: "Dennis Klimenkov",
    title: "Senior Software Enginner",
    company: "The Washington Post",
    image: "/images/speakers/dennis-klimenkov.jpeg",
  },
  {
    name: "Shahidullah Rahman",
    title: "Senior Software Engineer",
    company: "Capital One",
    image: "/images/speakers/Shahidullah.jpeg",
  },
  {
    name: "Robert Cavallito",
    title: "Angel Investor, Founder",
    company: "Masthead Venture",
    image: "/images/speakers/robert-cavallito.jpeg",
  },
  {
    name: "Kevin Brown",
    title: "Founder, Senior Cloud Engineer",
    company: "Canvas Cloud AI, Oracle",
    image: "/images/speakers/kevin_brown.jpeg",
  },
];

function Speakers() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(false);
  const positionRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    const speed = 0.5;

    const animate = () => {
      if (!isPausedRef.current && !isDragging.current) {
        positionRef.current -= speed;
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = positionRef.current;
    setIsPaused(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    const track = trackRef.current;
    positionRef.current = dragStartPos.current + delta;
    const halfWidth = track.scrollWidth / 2;
    if (Math.abs(positionRef.current) >= halfWidth) {
      positionRef.current = 0;
    }
    track.style.transform = `translateX(${positionRef.current}px)`;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartPos.current = positionRef.current;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    const track = trackRef.current;
    positionRef.current = dragStartPos.current + delta;
    const halfWidth = track.scrollWidth / 2;
    if (Math.abs(positionRef.current) >= halfWidth) {
      positionRef.current = 0;
    }
    track.style.transform = `translateX(${positionRef.current}px)`;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  // Duplicate speakers for seamless loop
  const allSpeakers = [...SPEAKERS, ...SPEAKERS];

  return (
    <section id="speakers" className="w-full bg-[#644741] py-32 md:py-56 overflow-hidden">
      <h2 className="text-center text-[clamp(36px,6vw,80px)] font-bold font-spenbebgame text-white mb-12">
        MENTORS
      </h2>

      <div
        className="relative w-full cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => { if (!isDragging.current) setIsPaused(true); }}
        onMouseLeave={() => { isDragging.current = false; setIsPaused(false); }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div ref={trackRef} className="flex w-max gap-8 px-4 pointer-events-none">
          {allSpeakers.map((speaker, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-[200px] md:w-[240px] shrink-0"
            >
              <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden bg-white/20 mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white font-bold text-lg text-center">{speaker.name}</p>
              <p className="text-white/80 text-sm text-center">{speaker.title}</p>
              <p className="text-white/60 text-sm text-center">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
