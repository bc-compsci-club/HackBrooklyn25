import { useState } from "react";

const PRIZE_DATA = [
  {
    place: "1st Place",
    items: [
      "Logitech Superlight 2 Mouse",
      "Keychron V1 Max Keyboard",
      "3 months of ElevenLabs Pro tier ($297 value/team member)",
      "Featherless credits worth $300",
    ],
  },
  {
    place: "2nd Place",
    items: [
      "Acer Nitro Monitor",
      "Featherless credits worth $150",
    ],
  },
  {
    place: "3rd Place",
    items: [
      "Lego Gameboy",
      "Featherless credits worth $75",
    ],
  },
  {
    place: "Best ElevenLabs Hack",
    items: [
      "6 months of ElevenLabs Scale tier ($1980 value/team member)",
    ],
  },
  {
    place: "Best Prenora Dynamics Hack",
    items: [
      "SteelSeries Apex 3 TKL RGB Gaming Keyboard",
      "Engineering Internship Interview at Prenora Dynamics",
    ],
  },
];

function Prizes() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="prizes" className="w-full bg-[#ffe5ba] py-16 md:py-24">
      <h2 className="text-center text-[clamp(36px,6vw,80px)] font-bold font-spenbebgame text-[#5d0801] mb-12">
        PRIZES
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 md:px-8">
        <img
          src="/images/trophy.png"
          alt="Trophy"
          className="h-[clamp(150px,40vw,600px)] w-auto"
        />
        <div className="flex flex-col items-center">
          <p className="text-center text-[clamp(20px,4vw,60px)] font-bold text-[#5d0801] mb-4 md:mb-8">
            $13K+ worth of prizes
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-2">
            {PRIZE_DATA.slice(0, 3).map((prize, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full font-bold text-[clamp(11px,1.5vw,18px)] transition-colors duration-300 ${
                  activeTab === i
                    ? "bg-[#5d0801] text-white"
                    : "bg-white/60 text-[#5d0801] hover:bg-white/80"
                }`}
              >
                {prize.place}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            {PRIZE_DATA.slice(3).map((prize, i) => (
              <button
                key={i + 3}
                type="button"
                onClick={() => setActiveTab(i + 3)}
                className={`px-3 py-1.5 md:px-6 md:py-3 rounded-full font-bold text-[clamp(11px,1.5vw,18px)] transition-colors duration-300 ${
                  activeTab === i + 3
                    ? "bg-[#5d0801] text-white"
                    : "bg-white/60 text-[#5d0801] hover:bg-white/80"
                }`}
              >
                {prize.place}
              </button>
            ))}
          </div>

          {/* Prize Details */}
          <ul className="list-disc list-inside text-[#5d0801] text-[clamp(13px,1.8vw,20px)] space-y-2 px-2">
            {PRIZE_DATA[activeTab].items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
