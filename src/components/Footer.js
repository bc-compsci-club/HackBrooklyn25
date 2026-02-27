function Footer(){

    return(
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
    )
}

export default Footer;