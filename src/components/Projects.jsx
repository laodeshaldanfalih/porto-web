import { useState } from "react";
import { AiOutlineGithub, AiOutlineLink, AiOutlineCode } from "react-icons/ai";

import Porto0 from "../assets/memovault.png";
import Porto01 from "../assets/hearspeechcare.png";
import Porto1 from "../assets/web_crustea.png";
import Porto2 from "../assets/web_ranmits.png";
import Porto3 from "../assets/mobile_sibunda.png";
import Porto7 from "../assets/mobile_trinityapp.png";
import Porto8 from "../assets/iot_crustea.jpg"
import Porto9 from "../assets/iot_robotic.png"
import Porto10 from "../assets/web_reemotely.png"
import Porto11 from "../assets/web_alnico.png"
 
const Projects = ({ onModalOpen }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [filter, setFilter] = useState('all');
    
    const portos = [
        {
            image: Porto0,
            title: "MemoVault",
            description: "Digital legacy & secure vault platform that allows users to store sensitive data, delegate trusted contacts, and trigger post-death data release using encrypted check-ins and automation logic. Currently in MVP development phase with 50+ early nteractions and idea validation gathered via LinkedIn community feedback.",
            stack: "NextJS, Supabase, Stripe, n8n",
            category: "web",
            status: "development",
            liveLink: "https://memovault.site",
            year: "2025"
        },
        {
            image: Porto01,
            title: "Hear Speech Care",
            description: "Comprehensive healthcare clinic website providing ENT specialist services, speech therapy, occupational therapy, and behavioral therapy. Features online consultation booking, pharmacy services, and home visit scheduling for patients in Surabaya, East Java. Has 64 active visitors (+100% growth), 105 page views (+242% growth), and 70% bounce rate.",
            stack: "NextJS, Tailwind CSS, Healthcare Management System",
            category: "web",
            status: "production",
            liveLink: "https://www.hearspeechcare.com/",
            year: "2025"
    },
        {
            image: Porto11,
            title: "Alnico Agency Partner",
            description: "A tailored custom ERP solution integrated into the Lark ecosystem, designed to effectively manage agency partnerships for Alnico Company.",
            stack: "Next.js, React MUI, Lark server API, Custom ERP, Real-time Analytics, Lark Integration",
            category: "web",
            status: "production",
            year: "2024"
        },
        {
            image: Porto10,
            title: "Reemotely Portal",
            description: "A comprehensive platform designed to facilitate the generation of marketing content, leveraging advanced AI technology.",
            stack: "Next.js, React MUI, OpenAI API",
            category: "web",
            status: "production",
            year: "2024"
        },
        {
            image: Porto1,
            title: "Crustea Web App",
            description: "A comprehensive web application for shrimp pond monitoring and management, featuring real-time data visualization and IoT integration.",
            stack: "Laravel, Bootstrap, MySQL, Chart.js, IoT Integration",
            liveLink: "https://crustea.id",
            codeLink: "https://github.com/laodeshaldanfalih/crustea-app.git",
            category: "web",
            status: "live",
            year: "2023"
        },
        {
            image: Porto2,
            title: "Ranmits Web App",
            description: "Real-time vehicle tracking and reporting system built for Institut Teknologi Sepuluh Nopember, enabling lost vehicle recovery through a web-based submission and notification system.",
            stack: "JS, Tailwind CSS, MongoDB, Node.js",
            liveLink: "https://ranmits.my.id",
            codeLink: "https://github.com/laodeshaldanfalih/ranmits-app.git",
            category: "web",
            status: "live",
            year: "2023"
        },
        {
            image: Porto3,
            title: "Sibunda Mobile App",
            description: "Flutter-based mobile application for child growth and stunting prevention, developed for rural healthcare use during a university community service program. Adopted by 20+ families in Trenggalek and digitized health reporting in collaboration with local health workers.",
            stack: "Dart, Flutter, Firebase, Laravel",
            liveLink: "https://intip.in/SibundaApp",
            codeLink: "https://github.com/laodeshaldanfalih/sibunda_frontend.git",
            category: "mobile",
            status: "live",
            year: "2023"
        },
        {
            image: Porto7,
            title: "Fully CI/CD Integrated Web App",
            description: "Simple Note App to write your to-do list and keep track of your tasks easily",
            stack: "Laravel, Bootstrap, Jenkins, AWS, Terraform, SonarQube",
            liveLink: "http://54.206.116.217",
            codeLink: "https://github.com/laodeshaldanfalih/docker-trinity-app.git",
            category: "web",
            status: "live",
            year: "2023"
        },
        {
            image: Porto8,
            title: "Crustea IoT Devices",
            description: "Building and researching shrimp pond monitoring IoT Hardware and Software",
            stack: "C++, ESP32, Sensors, MQTT, Thingsboard",
            category: "iot",
            status: "production",
            year: "2023"
        },
        {
            image: Porto9,
            title: "Four Legged Autonomous Robot",
            description: "Building and researching rescue mission robot",
            stack: "C++, ESP32, STM, Flutter, Firebase, Sensors",
            category: "iot",
            status: "research",
            year: "2022"
        },
    ];
    
    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'iot', label: 'IoT Projects' }
    ];
    
    const filteredProjects = filter === 'all' ? portos : portos.filter(project => project.category === filter);
    
    const handleOpen = (idx) => {
        setOpenIndex(idx);
        if (onModalOpen) onModalOpen(true);
    };
    
    const handleClose = () => {
        setOpenIndex(null);
        if (onModalOpen) onModalOpen(false);
    };
    
    return (
        <section id="projects" className="relative w-full max-w-[1200px] px-4 py-24 flex flex-col justify-center items-center mx-auto">
            {/* Terminal header */}
            <div className="w-full bg-[#21262d] border border-[#30363d] rounded-t-lg p-4 mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-[#f85149] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#238636] rounded-full"></div>
                    <span className="text-[#7d8590] text-xs font-mono ml-2">projects/</span>
                </div>
                <div className="text-sm">
                    <div className="text-[#7d8590] mb-2">My portfolio of work</div>
                    <div className="text-[#58a6ff]">Project Showcase</div>
                </div>
            </div>
            
            <div className="w-full bg-[#0d1117] border-x border-b border-[#30363d] rounded-b-lg p-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c9d1d9] mb-4">
                        My Projects
                    </h1>
                    <p className="text-[#7d8590] md:text-xl lg:text-2xl mb-12 text-center max-w-2xl mx-auto">
                        A showcase of my work, blending creativity and technology
                    </p>
                </div>
                
                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-4 py-2 rounded-md text-sm transition-all duration-300 border ${
                                filter === category.id
                                    ? 'bg-[#238636] border-[#238636] text-white'
                                    : 'bg-[#21262d] border-[#30363d] text-[#7d8590] hover:border-[#58a6ff] hover:text-[#58a6ff]'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                
                {/* Projects grid - keeping your original design */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
                    {filteredProjects.map((porto, index) => (
                        <div key={index} className="bg-[#21262d] border border-[#30363d] rounded-lg overflow-hidden hover:border-[#58a6ff] transition-all duration-300 group">
                            {/* Project image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={porto.image} 
                                    alt={porto.title}
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`px-2 py-1 rounded text-xs font-mono ${
                                        porto.status === 'live' ? 'bg-[#238636] text-white' :
                                        porto.status === 'production' ? 'bg-[#58a6ff] text-white' :
                                        porto.status === 'development' ? 'bg-[#ffbd2e] text-black' :
                                        'bg-[#7c3aed] text-white'
                                    }`}>
                                        {porto.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                {/* Project header */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-lg font-semibold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors duration-300">
                                        {porto.title}
                                    </h3>
                                    <span className="text-[#7d8590] text-xs">{porto.year}</span>
                                </div>
                                
                                <p className="text-[#7d8590] text-sm mb-4 leading-relaxed">
                                    {porto.description}
                                </p>
                                
                                {/* Tech stack */}
                                <div className="mb-4">
                                    <div className="text-[#7d8590] text-xs mb-2">Tech Stack:</div>
                                    <div className="flex flex-wrap gap-1">
                                        {porto.stack.split(', ').slice(0, 3).map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-[#0d1117] border border-[#30363d] rounded px-2 py-1 text-xs text-[#58a6ff]">
                                                {tech}
                                            </span>
                                        ))}
                                        {porto.stack.split(', ').length > 3 && (
                                            <span className="text-[#7d8590] text-xs px-2 py-1">
                                                +{porto.stack.split(', ').length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Action buttons */}
                                <div className="flex gap-2">
                                    {porto.liveLink && (
                                        <a 
                                            href={porto.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md text-xs transition-colors duration-300"
                                        >
                                            <AiOutlineLink size={14} />
                                            Live Demo
                                        </a>
                                    )}
                                    {porto.codeLink && (
                                        <a 
                                            href={porto.codeLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] rounded-md text-xs transition-colors duration-300"
                                        >
                                            <AiOutlineGithub size={14} />
                                            Source
                                        </a>
                                    )}
                                    <button 
                                        onClick={() => handleOpen(index)}
                                        className="flex items-center gap-2 px-3 py-2 border border-[#30363d] text-[#7d8590] hover:border-[#7c3aed] hover:text-[#7c3aed] rounded-md text-xs transition-colors duration-300"
                                    >
                                        <AiOutlineCode size={14} />
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-sm text-[#c9d1d9]">
                    <span className="text-[#7d8590]">Total projects: {filteredProjects.length}</span>
                </div>
            </div>
            
            {/* Modal */}
            {openIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeInOverlay" onClick={handleClose}>
                    <div className="relative bg-[#21262d] border border-[#30363d] rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-8 animate-fadeInModal" onClick={e => e.stopPropagation()}>
                        <img
                            className="w-full h-64 sm:h-80 object-cover rounded-xl mb-6 bg-gray-100"
                            src={filteredProjects[openIndex].image}
                            alt={filteredProjects[openIndex].title}
                        />
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-3xl font-bold text-[#c9d1d9]">{filteredProjects[openIndex].title}</h2>
                            <span className={`px-3 py-1 rounded text-sm font-mono ${
                                filteredProjects[openIndex].status === 'live' ? 'bg-[#238636] text-white' :
                                filteredProjects[openIndex].status === 'production' ? 'bg-[#58a6ff] text-white' :
                                filteredProjects[openIndex].status === 'development' ? 'bg-[#ffbd2e] text-black' :
                                'bg-[#7c3aed] text-white'
                            }`}>
                                {filteredProjects[openIndex].status}
                            </span>
                        </div>
                        <p className="text-[#7d8590] mb-6 text-lg leading-relaxed">{filteredProjects[openIndex].description}</p>
                        
                        <div className="mb-6">
                            <h3 className="text-[#c9d1d9] text-lg font-semibold mb-3">Technologies Used:</h3>
                            <div className="flex flex-wrap gap-2">
                                {filteredProjects[openIndex].stack.split(', ').map((tech, i) => (
                                    <span key={i} className="bg-[#0d1117] border border-[#30363d] text-[#58a6ff] px-3 py-2 rounded text-sm font-semibold">
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-4 mb-4">
                            {filteredProjects[openIndex].liveLink && (
                                <a href={filteredProjects[openIndex].liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-3 rounded-lg shadow transition font-semibold">
                                    <AiOutlineLink size={18} /> Live Demo
                                </a>
                            )}
                            {filteredProjects[openIndex].codeLink && (
                                <a href={filteredProjects[openIndex].codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] px-6 py-3 rounded-lg shadow transition font-semibold">
                                    <AiOutlineGithub size={18} /> View Code
                                </a>
                            )}
                        </div>
                        
                        <button 
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-[#7d8590] hover:text-[#c9d1d9] text-3xl font-bold transition-colors duration-300"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
