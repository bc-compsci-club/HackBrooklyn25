import { useState } from "react";

function Navbar() {
  const buttonLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScr0RTbU8pG9f6YkxOIIsMqinqDS-8-6cGm4lIjzB0AMDHS3w/viewform";
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tracks", label: "Tracks" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="sticky top-0 z-[2000] bg-[#2c3e50] px-[15px] py-2">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <span className="text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA]">
          Hack Brooklyn
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex flex-wrap gap-[clamp(15px,3vw,30px)] items-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center rounded-lg px-3 py-2 text-[clamp(15px,1.8vw,19px)] font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out"
            >
              {label}
            </a>
          ))}
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-lg bg-[#FFE5BA] px-4 py-2 text-[clamp(15px,1.8vw,19px)] font-semibold text-[#2c3e50] transition-all duration-300 ease-in-out hover:bg-[#ffefcf]"
          >
            Apply
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-[#FFE5BA] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#FFE5BA] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#FFE5BA] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-1 pt-2 pb-3">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center rounded-lg px-3 py-2 text-base font-medium text-[#FFE5BA] no-underline transition-all duration-300 ease-in-out hover:bg-white/10 hover:tracking-wider"
            >
              {label}
            </a>
          ))}
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-lg bg-[#FFE5BA] px-4 py-2 text-base font-semibold text-[#2c3e50] transition-all duration-300 ease-in-out hover:bg-[#ffefcf]"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
