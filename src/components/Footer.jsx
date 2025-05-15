import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
import Typed from "react-typed"
const Footer = () => {
    return (
        <div className="w-full max-w-[1200px] text-[#A7A7A7] px-4 pb-10 flex flex-col gap-5 mx-auto justify-between">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold">
                        <Typed
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]"
                            strings={["Laode", "Shaldan", "Falih"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                    <div className="flex flex-row py-4 gap-x-10 md:gap-x-3 md:hidden">
                        <a href="https://github.com/laodeshaldanfalih" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub 
                                className="hover:text-[#D9D9D9]"
                                size={30}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/laodeshaldanfalih/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin 
                                className="hover:text-[#D9D9D9]"
                                size={30}
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-row w-full max-w-[650px] gap-x-16 items-center ">
                    <ul className="w-full flex flex-row justify-between md:max-w-[550px]">
                        <li className="hover:text-[#D9D9D9]"><a href="#about">About</a></li>
                        <li className="hover:text-[#D9D9D9]"><a href="#stack">Tech Stack</a></li>
                        <li className="hover:text-[#D9D9D9]"><a href="#projects">Projects</a></li>
                        <li className="hover:text-[#D9D9D9]"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="hidden md:flex gap-x-3">
                        <a href="https://github.com/laodeshaldanfalih" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub 
                                className="hover:text-[#D9D9D9]"
                                size={30}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/laodeshaldanfalih/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin 
                                className="hover:text-[#D9D9D9]"
                                size={30}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="w-full bg-gray-800 border-0 h-px"/>
            <p className="self-center mt-10 text-sm">@Copyright Laode Shaldan Falih 2025</p>
        </div>  
    )
}

export default Footer;