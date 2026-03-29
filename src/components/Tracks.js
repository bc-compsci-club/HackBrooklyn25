import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STOPS = ["FINANCE", "EDUCATION", "ENTERTAINMENT", "HEALTHCARE"];

const STOP_IMAGES = {
  FINANCE: "/images/finance.svg",
  EDUCATION: "/images/education.svg",
  ENTERTAINMENT: "/images/entertainment.svg",
  HEALTHCARE: "/images/healthcare.svg",
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000
  }),
  center: {
    x: 0
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000
  }),
};

function Tracks() {
  const [activeStop, setActiveStop] = useState("FINANCE");
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  const handleStopClick = (label) => {
    const newIndex = STOPS.indexOf(label);

    if (currentStopIndex === newIndex) {
      // Deselect: train moves left, sign/bulletin show TRACKS
      setActiveStop(null);
      setCurrentStopIndex(null);
      setDirection(-1);
      setIsShaking(true);
      return;
    }

    setActiveStop(label);

    if (currentStopIndex === null) {
      // First selection – move right
      setDirection(1);
      setCurrentStopIndex(newIndex);
      setIsShaking(true);
    } else if (newIndex > currentStopIndex) {
      // Moving right
      setDirection(1);
      setCurrentStopIndex(newIndex);
      setIsShaking(true);
    } else if (newIndex < currentStopIndex) {
      // Moving left
      setDirection(-1);
      setCurrentStopIndex(newIndex);
      setIsShaking(true);
    }
  };

  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => setIsShaking(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isShaking]);

  return (
    <section id="tracks" className="relative w-full min-h-[120vw] transition-[min-height] duration-300 ease-out md:min-h-0">
      {/* Subway Stops Line */}
    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10 h-[clamp(3rem,10vw,4.5rem)] w-[min(60vw,360px)] px-[clamp(0.25rem,2vw,0.5rem)]">
        <div
          className="absolute left-0 right-0 top-1/2 h-[clamp(12px,1.2vw,30px)] -translate-y-1/2 rounded-full -translate-y-1/2 bg-[#edc001]"
          aria-hidden
        />

        <div className="relative flex h-full w-full justify-between">
          {STOPS.map((label) => (
            <div key={label} className="relative flex flex-1 justify-center">
              <button
                type="button"
                onClick={() => handleStopClick(label)}
                aria-pressed={currentStopIndex === STOPS.indexOf(label)}
                aria-label={`Stop: ${label}`}
                className={`relative z-10 h-full w-full transition-transform duration-300 ease-out ${
                  currentStopIndex === STOPS.indexOf(label) ? "scale-125" : "scale-100"
                }`}
              >
                {/* Track Labels */}
                <span className={`absolute bottom-[90%] left-1/2 mb-1 -translate-x-1/2 -rotate-45 whitespace-nowrap text-[clamp(12px,1.2vw,16px)] text-black ${activeStop === label ? "font-bold" : "font-medium"}`}>
                  {label}
                </span>
                {/* Station Stops (circles) */}
                <span
                  className={`absolute left-1/2 top-1/2 block h-[clamp(6px,2.4vw,16px)] w-[clamp(6px,2.4vw,16px)] -translate-x-1/2 -translate-y-1/2 shrink-0 rounded-full border-2 transition-colors duration-300 ${
                    activeStop === label
                      ? "border-white bg-black"
                      : "border-black bg-white hover:bg-gray-50"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Train platform background */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <img
          src="/images/train_platform.svg"
          alt=""
          className="h-full w-full object-cover object-center transition-opacity duration-300"
        />
      </div>
      <img
        src="/images/train_platform.svg"
        alt=""
        aria-hidden
        className="hidden h-auto w-full md:block"
      />

      <div className="absolute inset-0">
        {/* Train sign */}
        <div className="absolute left-1/2 top-[13.7%] flex h-[18%] w-[78%] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:top-[16%]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeStop ?? "TRACKS"}
              className="relative h-full w-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src="/images/train_sign.svg"
                alt="Track sign"
                className="h-full w-full object-contain object-center"
              />
              <span className="absolute left-1/2 top-[52%] flex w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center text-[clamp(24px,4vw,70px)] font-bold font-spenbebgame text-white drop-shadow-sm">
                {currentStopIndex !== null ? STOPS[currentStopIndex] : "TRACKS"}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Train */}
        <div className="absolute bottom-[-5%] left-1/2 flex h-[52%] w-[92%] -translate-x-1/2 translate-y-0 items-end justify-center md:bottom-[5%]">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => {
              const nextIndex = currentStopIndex === null ? 0 : currentStopIndex - 1;
              if (nextIndex >= 0) {
                handleStopClick(STOPS[nextIndex]);
              }
            }}
            aria-label="Previous stop"
            className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[clamp(40px,8vw,80px)] text-black hover:text-gray-700 transition-colors duration-300 select-none cursor-pointer bg-transparent border-none p-0 z-50"
          >
            ←
          </button>

          <motion.img
            src="/images/train.svg"
            alt="Train"
            animate={
              isShaking
                ? {
                    x: [0, -4, 4, -4, 4, 0],
                    y: [0, -3, 3, -3, 3, 0],
                  }
                : { x: 0, y: 0 }
            }
            
            className="h-full w-full object-contain object-center"
          />

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => {
              const nextIndex = currentStopIndex === null ? 0 : currentStopIndex + 1;
              if (nextIndex < STOPS.length) {
                handleStopClick(STOPS[nextIndex]);
              }
            }}
            aria-label="Next stop"
            className="absolute right-[5%] top-1/2 -translate-y-1/2 text-[clamp(40px,8vw,80px)] text-black hover:text-gray-700 transition-colors duration-300 select-none cursor-pointer bg-transparent border-none p-0 z-50"
          >
            →
          </button>
        </div>

        {/* Bulletin Board */}
        <div className="absolute top-[40%] right-[30%] md:right-[-5%] flex h-[60%] w-[45%] md:w-[60%] items-center justify-center pointer-events-none">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              src={activeStop ? STOP_IMAGES[activeStop] : "/images/education.svg"}
              alt={activeStop ? `${activeStop} Content` : "Default Content"}
              key={activeStop ?? "TRACKS"}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute h-full w-full object-contain object-center"
            />
          </AnimatePresence>
        </div>

        {/* Wind Lines Animation */}
        {isShaking && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="absolute h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                style={{
                  width: "200px",
                  top: `${50 + index * 7.5}%`,
                  left: `${direction > 0 ? 70 - index * 12 : 10 + index * 12}%`,
                }}
                initial={{ x: 0, opacity: 0 }}
                animate={
                  direction > 0
                    ? { x: -150, opacity: [0, 1, 0] }
                    : { x: 150, opacity: [0, 1, 0] }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Tracks;
