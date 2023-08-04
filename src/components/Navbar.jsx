import { useState } from "react";
import {AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Typed from "react-typed";
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleSideNav = () =>{
        setNav(!nav);
    }

    return (
        <div id="navbar" className="fixed w-full top-0 mx-auto">
            <div className="border-b border-gray-800 bg-[#191919] flex w-full h-24 max-w-[1200px] mx-auto px-4 text-[#A7A7A7] justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Typed
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]"
                        strings={["Laode", "Shaldan", "Falih"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </h1>
                <div className="hidden flex-row gap-20 items-center md:flex">
                    <ul className="flex flex-row text-lg md:gap-10 lg:gap-16">
                        <li className='font-medium hover:text-[#D9D9D9]'><a href="#about">About</a></li>
                        <li className='font-medium hover:text-[#D9D9D9]'><a href="#stack">Tech Stack</a></li>
                        <li className='font-medium hover:text-[#D9D9D9]'><a href="#projects">Projects</a></li>
                        <li className='font-medium hover:text-[#D9D9D9]'><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="flex flex-row p-4 gap-3">
                        <a href="https://github.com/laodeshaldanfalih" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub 
                                    className="hover:text-[#D9D9D9]"
                                    size={30}
                                />
                        </a>
                        <a href="https://twitter.com/shaldanfalih" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle 
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
                <div onClick={handleSideNav} className="md:hidden">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <ul className= {nav ? "fixed left-0 top-0 bg-[#191919] h-full w-[60%] ease-in-out duration-500 border-r border-gray-800 md:hidden" : "ease-in-out duration-500 fixed left-[-100%]"} >
                    {/* <h1 className="text-3xl font-bold p-4">Lade</h1> */}
                    <h1 className="text-3xl font-bold p-4">
                    <Typed
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]"
                        strings={["Laode", "Shaldan", "Falih"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </h1>
                    <li onClick={handleSideNav} className='font-medium p-4 border-b-2 border-gray-700 hover:text-[#D9D9D9]'><a href="#about">About</a></li>
                    <li onClick={handleSideNav} className='font-medium p-4 border-b-2 border-gray-700 hover:text-[#D9D9D9]'><a href="#stack">Tech Stack</a></li>
                    <li onClick={handleSideNav} className='font-medium p-4 border-b-2 border-gray-700 hover:text-[#D9D9D9]'><a href="#projects">Projects</a></li>
                    <li onClick={handleSideNav} className='font-medium p-4 border-b-2 border-gray-700 hover:text-[#D9D9D9]'><a href="#contact">Contact</a></li>
                    <div className="flex flex-row gap-5 p-4">
                    <a href="https://github.com/laodeshaldanfalih" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub 
                            className="hover:text-[#D9D9D9]"
                            size={30}
                        />
                    </a>
                    <a href="https://twitter.com/shaldanfalih" target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle 
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
                </ul>
            </div>
        </div>
    );
};

export default Navbar;