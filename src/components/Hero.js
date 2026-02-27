function Hero(){

    return(
        <div className="relative w-full" id="hero">
            <img src="/images/heroo.svg" alt="Hero" className="block h-auto w-full" />
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
    )



}

export default Hero;