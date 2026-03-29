function Sponsors() {
  return (
    <section id="sponsors" className="w-full bg-[#ffe5ba] py-16 md:py-24">
      <h2 className="text-center text-[clamp(36px,6vw,80px)] font-bold font-spenbebgame text-[#5d0801] mb-12">
        SPONSORS
      </h2>
      <div className="flex items-center justify-center gap-8 px-8 max-w-6xl mx-auto">
        <img
          src="/images/cashier_cat.svg"
          alt="Cashier Cat"
          className="hidden md:block h-[clamp(150px,20vw,300px)] w-auto object-contain"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-items-center gap-8 md:gap-16">
        <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/sponsors/elevenlabs-logo-black.svg"
            alt="ElevenLabs"
            className="h-[clamp(60px,14vw,130px)] w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="https://featherless.ai/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/sponsors/featherless-full-original.svg"
            alt="Featherless AI"
            className="h-[clamp(60px,14vw,130px)] w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="https://www.prenoradynamics.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/sponsors/Asset 6_4x.avif"
            alt="Prenora Dynamics"
            className="h-[clamp(60px,14vw,130px)] w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>
        <a href="https://www.bcstudentgov.org/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/sponsors/usg.png"
            alt="USG"
            className="h-[clamp(70px,16vw,150px)] w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
