import React from "react"

function App() {
  return (
    <div className="w-screen">
      <div className="sticky top-0 z-[2000]">
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
              <a href="#apply" className="flex items-center rounded-lg bg-[#FFE5BA] px-4 py-2 text-[clamp(15px,1.8vw,19px)] font-semibold text-[#2c3e50] transition-all duration-300 ease-in-out hover:bg-[#ffefcf]" >
                Apply
              </a>
            </div>
          </div>
        </nav>
        <div className="bg-[#6B4A49] text-center text-[clamp(10px, 2.5vw, 13px)] text-[#ffe5ba]">
          Fill out our {" "}
          <a href="https://forms.gle/QzHXVrKNTX9fYJou5"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >interest form</a>{" "}
        if you are interested in joining the hackathon!
      </div>
    </div>  
      
      <div className="relative w-screen" id="hero">
        <img src="/images/heroo.svg" alt="Hero" className="block h-auto w-screen" />
        <a
          href="mailto:bc.cis.club@gmail.com"
          className="absolute rounded-2xl bottom-[clamp(10px,3vh,100px)] right-[min(10vw,300px)] inline-block max-w-[calc(100vw-40px)] bg-[#78BBC4] px-[clamp(16px,4vw,32px)] py-[clamp(8px,2vw,16px)] text-[clamp(25px,2.5vw,50px)] font-semibold text-black no-underline transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#f7dc6f] hover:shadow-[0_6px_16px_rgba(244,208,63,0.4)]"
        >
          Sponsor Us
        </a>
        <p className="absolute bottom-[-20px] right-[min(10vw,300px)] z-[1000] text-right text-[clamp(20px,1.5vw,100px)] italic text-[#FFE5BA]">
          Or email bc.cis.club@gmail.com
        </p>
      </div>
      <img src="/images/about.svg" alt="About" id="about" className="block h-auto w-screen" />

      <footer className="bg-[#2c3e50] px-[10px] py-[15px] text-center">
        <div className="flex flex-wrap justify-center gap-[clamp(15px,4vw,40px)]">
          <a
            href="https://www.instagram.com/hackbrooklyn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg px-3 py-2 text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out hover:text-[#3498db]"
          >
            <i className="fab fa-instagram mr-1.5 text-[clamp(21px,3vw,25px)]"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/hack-brooklyn/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg px-3 py-2 text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out hover:text-[#3498db]"
          >
            <i className="fab fa-linkedin mr-1.5 text-[clamp(21px,3vw,25px)]"></i>
          </a>
          <a
            href="https://bccs.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg px-3 py-2 text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out hover:text-[#3498db]"
          >
            <i className="fas fa-globe mr-1.5 text-[clamp(21px,3vw,25px)]"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
