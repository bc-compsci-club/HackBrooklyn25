import { useState } from 'react';

function About(){
    const [loaded, setLoaded] = useState(false);

    return (
      <section id="about" className="relative w-full">
        <img
          src="/images/about.svg"
          alt="About"
          className="block h-auto w-full"
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
        {/* Header in the title area (upper portion) */}
        <div
          className={`absolute top-[20%] left-[4%] transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase"
            style={{
              fontFamily: '"Spenbeb Game", "sans-serif"',
              color: "#580700",
            }}
          >
            About
          </h2>
        </div>
        {/* Description in the red carpet area (lower portion) */}
        <div
          className={`absolute bottom-[10%] md:bottom-[30%] w-[80%] px-10 max-w-md md:max-w-none  transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl md:line-clamp-4"
            style={{
              color: "#FFE5BA",
              fontFamily:
                "'SF Pro Text', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            Hack Brooklyn is Brooklyn College's premier hackathon with the aim
            to empower students in technology. Join us for 48 hours to build in
            person during the day, remote at night. Compete in teams of up to 4
            to create a working prototype based on themed tracks. Win prizes,
            attend workshops, network with fellow students, and meet industry
            professionals!
          </p>
        </div>
      </section>
    );
}
export default About;