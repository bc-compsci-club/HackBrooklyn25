import { useState } from "react";

const STOPS = ["FINANCE", "EDUCATION", "GAMING", "HARDWARE"];

function Tracks() {
  const [activeStop, setActiveStop] = useState(null);

  return (
    <section id="tracks" className="relative w-full min-h-[120vw] transition-[min-height] duration-300 ease-out md:min-h-0">
      {/* Subway Stops Line */}
    <div className="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 z-10 h-[clamp(3rem,10vw,4.5rem)] w-[min(60vw,360px)] px-[clamp(0.25rem,2vw,0.5rem)]">
        <div
          className="absolute left-0 right-0 top-1/2 h-[clamp(12px,1.2vw,30px)] -translate-y-1/2 rounded-full -translate-y-1/2 bg-[#edc001]"
          aria-hidden
        />

        <div className="relative flex h-full w-full justify-between">
          {STOPS.map((label) => (
            <div key={label} className="relative flex flex-1 justify-center">
              <button
                type="button"
                onClick={() => setActiveStop((prev) => (prev === label ? null : label))}
                aria-pressed={activeStop === label}
                aria-label={`Stop: ${label}`}
                className={`relative z-10 h-full w-full transition-transform duration-300 ease-out ${
                  activeStop === label ? "scale-125" : "scale-100"
                }`}
              >
                {/* Track Labels */}
                <span className="absolute bottom-[90%] left-1/2 mb-1 -translate-x-1/2 -rotate-45 whitespace-nowrap text-[clamp(11px,1.2vw,12px)] font-medium text-black">
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
        className="hidden block h-auto w-full md:block"
      />

      <div className="absolute inset-0">
        {/* Train sign */}
        <div className="absolute left-1/2 top-[13.7%] flex h-[18%] w-[78%] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:top-[16%]">
          <div className="relative h-full w-full">
            <img
              src="/images/train_sign.svg"
              alt="Track sign"
              className="h-full w-full object-contain object-center"
            />
            <span className="absolute left-1/2 top-[52%] flex w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center text-[clamp(32px,6vw,120px)] font-bold font-spenbebgame text-white drop-shadow-sm">
              {activeStop ?? "TRACKS"}
            </span>
          </div>
        </div>

        {/* Train */}
        <div className="absolute bottom-[-5%] left-1/2 flex h-[52%] w-[92%] -translate-x-1/2 translate-y-0 items-end justify-center md:bottom-[5%]">
          <img
            src="/images/train.svg"
            alt="Train"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default Tracks;
