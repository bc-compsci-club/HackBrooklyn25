function Navbar(){   

    const eventDate = new Date(2026,3,17);
    const today = new Date();
    eventDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    const daysLeft = Math.ceil(eventDate-today)/(86400000);
    const isApplyPhase = daysLeft <= 20;
    const buttonLink = ((isApplyPhase) && (daysLeft >= 0)) ? "#apply"  //place holder for link
                                    : "https://forms.gle/QzHXVrKNTX9fYJou5";
    return(
      <nav className="sticky top-0 z-[2000] bg-[#2c3e50] px-[15px] py-2">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA]">Hack Brooklyn</span>
          </div>
          <div className="flex flex-wrap gap-[clamp(15px,3vw,30px)]">
            <a
              href="#hero"
              className="flex items-center rounded-lg px-3 py-2 text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="flex items-center rounded-2xl px-3 py-2 text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#tracks"
              className="flex items-center rounded-lg px-3 py-2 text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out"
            >
              Tracks
            </a>
            <a
              href="#faq"
              className="flex items-center rounded-lg px-3 py-2 text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out"
            >
              FAQ
            </a>
            <a href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-[#FFE5BA] px-4 py-2 text-[clamp(15px,1.8vw,19px)] font-semibold text-[#2c3e50] transition-all duration-300 ease-in-out hover:bg-[#ffefcf]" >
                {isApplyPhase ? "Apply" : "Interest Form"}
            </a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;