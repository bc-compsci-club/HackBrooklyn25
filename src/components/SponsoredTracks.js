import { useState } from "react";

const SPONSORED_TRACKS = [
  {
    name: "Best ElevenLabs Hack",
    color: "#4A90D9",
    letter: "E",
    sponsor: "ElevenLabs",
    description:
      "Build a project that creatively integrates ElevenLabs' voice AI or audio APIs.",
    prize: "6 months of ElevenLabs Scale tier ($1980 value/team member)",
  },
  {
    name: "Best Prenora Dynamics Hack",
    color: "#EE352E",
    letter: "P",
    sponsor: "Prenora Dynamics",
    description:
      "Best scalable operational engine for a human-centric, two-sided music instruction marketplace.",
    prize:
      "SteelSeries Apex 3 TKL RGB Gaming Keyboard + Engineering Internship Interview at Prenora Dynamics",
  },
  {
    name: "TunerBench Challenge",
    color: "#00933C",
    letter: "T",
    sponsor: "TunerBench",
    description:
      "Best pretrained model on a specific task through fine-tuning.",
    prize: "AI Tracking WebCam",
  },
  {
    name: "Girls Who Code Challenge",
    color: "#B933AD",
    letter: "G",
    sponsor: "Girls Who Code",
    description: "Build a project that represents inclusivity.",
    prize: "Flower Lego Building Set",
  },
  {
    name: "Best Use of Tavily",
    color: "#FF6319",
    letter: "V",
    sponsor: "Tavily",
    description:
      "Build a project that leverages Tavily's APIs in a creative and impactful way.",
    prize:
      "1st: 10,000 API credits · 2nd: 5,000 API credits · 3rd: 3,000 API credits",
  },
];

function SponsoredTracks() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="sponsored-tracks"
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: "#946656" }}
    >
      <div className="relative mx-auto mb-12 flex h-[min(18vw,160px)] w-[min(78%,720px)] items-center justify-center">
        <div className="relative h-full w-full">
          <img
            src="/images/train_sign.svg"
            alt="Sponsored Tracks sign"
            className="h-full w-full object-contain object-center"
          />
          <span className="absolute left-1/2 top-[52%] flex w-full -translate-x-1/2 -translate-y-1/2 justify-center text-center text-[clamp(20px,4vw,70px)] font-bold font-spenbebgame text-white drop-shadow-sm">
            SPONSORED TRACKS
          </span>
        </div>
      </div>

      <div className="mx-auto flex flex-col md:flex-row items-stretch max-w-5xl px-6 gap-8 md:gap-12">
        {/* Left: subway map lines */}
        <div className="flex flex-col gap-0 md:w-[280px] shrink-0">
          {SPONSORED_TRACKS.map((track, i) => {
            const isActive = active === i;
            return (
              <button
                key={track.letter}
                type="button"
                onClick={() => setActive(i)}
                className="flex items-center gap-3 group text-left transition-all duration-300 py-3 px-3 rounded-lg"
                style={{
                  background: isActive ? "rgba(52,32,24,0.70)" : "transparent",
                }}
              >
                {/* Line + station dot column */}
                <div className="relative flex flex-col items-center w-10 shrink-0">
                  {/* Top connector line */}
                  {i > 0 && (
                    <div
                      className="w-[6px] h-4 -mb-[2px] rounded-t-sm"
                      style={{ backgroundColor: SPONSORED_TRACKS[i - 1].color }}
                    />
                  )}
                  {/* Station circle with letter */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-full font-bold text-white text-[16px] transition-transform duration-300"
                    style={{
                      width: isActive ? 38 : 32,
                      height: isActive ? 38 : 32,
                      backgroundColor: track.color,
                      boxShadow: isActive
                        ? `0 0 14px ${track.color}88`
                        : "none",
                    }}
                  >
                    {track.letter}
                  </div>
                  {/* Bottom connector line */}
                  {i < SPONSORED_TRACKS.length - 1 && (
                    <div
                      className="w-[6px] h-4 -mt-[2px] rounded-b-sm"
                      style={{ backgroundColor: track.color }}
                    />
                  )}
                </div>
                {/* Track name */}
                <span
                  className="text-[clamp(13px,1.6vw,18px)] leading-tight transition-colors duration-300"
                  style={{
                    color: isActive ? "#fff" : "#fff",
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  {track.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: details card */}
        <div className="flex-1 flex items-center">
          <div
            className="w-full rounded-2xl p-6 md:p-10 transition-all duration-500 min-h-[260px]"
            style={{
              backgroundColor: "rgba(52,32,24,0.70)",
              borderLeft: `6px solid ${SPONSORED_TRACKS[active].color}`,
            }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center justify-center rounded-full text-white font-bold text-[18px]"
                style={{
                  width: 42,
                  height: 42,
                  backgroundColor: SPONSORED_TRACKS[active].color,
                }}
              >
                {SPONSORED_TRACKS[active].letter}
              </span>
              <span className="text-white text-[clamp(12px,1.4vw,16px)] uppercase tracking-widest font-semibold">
                {SPONSORED_TRACKS[active].sponsor}
              </span>
            </div>

            <h3
              className="text-[clamp(22px,3.5vw,40px)] font-bold mb-4 leading-tight"
              style={{ color: SPONSORED_TRACKS[active].color }}
            >
              {SPONSORED_TRACKS[active].name}
            </h3>

            <p className="text-white text-[clamp(14px,1.8vw,20px)] leading-relaxed mb-6">
              {SPONSORED_TRACKS[active].description}
            </p>

            <div className="flex items-start gap-2">
              <span className="text-white text-[clamp(12px,1.3vw,16px)] font-semibold uppercase tracking-wider shrink-0 mt-[2px]">
                Prize:
              </span>
              <span className="text-white text-[clamp(14px,1.6vw,19px)] font-medium">
                {SPONSORED_TRACKS[active].prize}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsoredTracks;
