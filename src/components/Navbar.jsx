import { useState, useEffect } from "react";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Typed from "react-typed";

const Navbar = ({ hidden }) => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);

            // Update active section based on scroll position
            const sections = ['about', 'stack', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (hidden) return null;

    const handleSideNav = () => {
        setNav(!nav);
    };

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'stack', label: 'Tech Stack' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div id="navbar" className="fixed w-full top-0 z-40">
            <div className={`transition-all duration-300 ${
                scrolled 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white'
            } backdrop-blur-md flex w-full h-20 max-w-[1200px] mx-auto px-4 text-gray-800 justify-between items-center border-b border-gray-200`}>
                <h1 className="text-3xl font-bold">
                    <Typed
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]"
                        strings={["Laode", "Shaldan", "Falih"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </h1>
                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row gap-20 items-center">
                    <ul className="flex flex-row text-lg md:gap-10 lg:gap-16">
                        {navLinks.map(({ id, label }) => (
                            <li key={id} className="relative group">
                                <a 
                                    href={`#${id}`}
                                    className={`font-medium transition-colors duration-300 ${
                                        activeSection === id 
                                            ? 'text-gray-900' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {label}
                                </a>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] transition-all duration-300 group-hover:w-full ${
                                    activeSection === id ? 'w-full' : ''
                                }`} />
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-4">
                        <a 
                            href="https://github.com/laodeshaldanfalih" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                        >
                            <AiOutlineGithub size={24} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/laodeshaldanfalih/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                        >
                            <AiFillLinkedin size={24} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={handleSideNav} 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                    {nav ? <AiOutlineClose size={24} className="text-gray-600" /> : <AiOutlineMenu size={24} className="text-gray-600" />}
                </button>

                {/* Mobile Navigation */}
                <div className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white transform transition-transform duration-300 ease-in-out shadow-xl md:hidden ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-2xl font-bold">
                                <Typed
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]"
                                    strings={["Laode", "Shaldan", "Falih"]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </h1>
                            <button 
                                onClick={handleSideNav}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                <AiOutlineClose size={24} className="text-gray-600" />
                            </button>
                        </div>
                        <ul className="space-y-4">
                            {navLinks.map(({ id, label }) => (
                                <li key={id}>
                                    <a 
                                        href={`#${id}`}
                                        onClick={handleSideNav}
                                        className={`block py-2 px-4 rounded-lg transition-colors duration-300 ${
                                            activeSection === id 
                                                ? 'bg-gray-100 text-gray-900' 
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-8">
                            <a 
                                href="https://github.com/laodeshaldanfalih" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                <AiOutlineGithub size={24} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/laodeshaldanfalih/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                <AiFillLinkedin size={24} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;