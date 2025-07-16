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

            const sections = ['about', 'stack', 'skills', 'projects', 'blog', 'contact'];
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
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div id="navbar" className="fixed w-full top-0 z-50">
            <div className="bg-[#0d1117] border-b border-[#30363d] shadow-lg backdrop-blur-md flex w-full h-20 max-w-[1200px] mx-auto px-4 text-[#c9d1d9] justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-[#58a6ff] font-mono">$</span>
                    <h1 className="text-xl font-bold font-mono">
                        <Typed
                            className="text-[#f85149]"
                            strings={["Laode", "Shaldan", "Falih"]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </h1>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-row gap-8 items-center">
                    <ul className="flex flex-row text-sm gap-6">
                        {navLinks.map(({ id, label }) => (
                            <li key={id} className="relative group">
                                <a 
                                    href={`#${id}`}
                                    className={`transition-colors duration-300 hover:text-[#58a6ff] font-medium ${
                                        activeSection === id 
                                            ? 'text-[#58a6ff]' 
                                            : 'text-[#c9d1d9]'
                                    }`}
                                >
                                    {label}
                                </a>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all duration-300 group-hover:w-full ${
                                    activeSection === id ? 'w-full' : ''
                                }`} />
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-row gap-3">
                        <a 
                            href="https://github.com/laodeshaldanfalih" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-md hover:bg-[#21262d] transition-colors duration-300 border border-transparent hover:border-[#30363d]"
                        >
                            <AiOutlineGithub size={20} className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors duration-300" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/laodeshaldanfalih/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-md hover:bg-[#21262d] transition-colors duration-300 border border-transparent hover:border-[#30363d]"
                        >
                            <AiFillLinkedin size={20} className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors duration-300" />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={handleSideNav} 
                    className="md:hidden p-2 rounded-md hover:bg-[#21262d] transition-colors duration-300 bg-[#21262d] border border-[#30363d]"
                >
                    {nav ? <AiOutlineClose size={24} className="text-[#c9d1d9]" /> : <AiOutlineMenu size={24} className="text-[#c9d1d9]" />}
                </button>

                {/* Mobile Navigation */}
                <div className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#0d1117] border-l border-[#30363d] transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="p-6 bg-[#0d1117] h-screen">
                        <div className="flex justify-end items-center mb-8">
                            <button 
                                onClick={handleSideNav}
                                className="p-2 rounded-md hover:bg-[#21262d] transition-colors duration-300"
                            >
                                <AiOutlineClose size={24} className="text-[#c9d1d9]" />
                            </button>
                        </div>
                        <ul className="space-y-3">
                            {navLinks.map(({ id, label }) => (
                                <li key={id}>
                                    <a 
                                        href={`#${id}`}
                                        onClick={handleSideNav}
                                        className={`block py-3 px-4 rounded-md transition-colors duration-300 text-sm font-medium ${
                                            activeSection === id 
                                                ? 'bg-[#21262d] text-[#58a6ff] border border-[#30363d]' 
                                                : 'text-[#c9d1d9] hover:bg-[#21262d] hover:text-[#58a6ff]'
                                        }`}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3 mt-8">
                            <a 
                                href="https://github.com/laodeshaldanfalih" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-md hover:bg-[#21262d] transition-colors duration-300 border border-[#30363d] flex-1 flex justify-center"
                            >
                                <AiOutlineGithub size={20} className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors duration-300" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/laodeshaldanfalih/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-md hover:bg-[#21262d] transition-colors duration-300 border border-[#30363d] flex-1 flex justify-center"
                            >
                                <AiFillLinkedin size={20} className="text-[#c9d1d9] hover:text-[#58a6ff] transition-colors duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;