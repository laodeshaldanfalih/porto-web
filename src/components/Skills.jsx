import { useState, useEffect } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const experiences = [
        {
            company: "Linkbot Pte Ltd",
            location: "Remote – Singapore",
            title: "Software Engineer",
            date: "Jul 2024 - Present",
            bullets: [
                "Developed and deployed custom ERP web applications and automation systems using n8n, Lark, and SQL, streamlining operations and reducing manual workflows by 60% across 10+ enterprise clients.",
                "Built and deployed communication systems integrating WhatsApp, Email, and Zoho, improving billing speed by 45%.", 
                "Designed internal dashboards and AI-assisted ATS features, increasing client lead conversion by 25%.",
                "Delivered a smart task management system with auto-routing and SLA monitoring, cutting backlog by 35% within 90 days.",
                "Conducted live technical demos and provided continuous client support, improving satisfaction and retention."
            ]
        },
        {
            company: "Community Service Program / KKN (University Program)",
            location: "Trenggalek, Indonesia",
            title: "Mobile Developer (Community Project)",
            date: "May 2024 - Jul 2024",
            bullets: [
                "Developed and improved a complex hybrid mobile application (SiBunda) for iOS & Android using Flutter, Firebase, and PostgreSQL to support stunting prevention efforts in rural communities.",
                "Successfully launched, tested, and onboarded 20+ villagers, enhancing maternal and child health monitoring.",
                "Contributed to local engagement by organizing community events and deploying digital tools to assist child growth tracking and improve pedestrian accessibility."
            ]
        },
        {
            company: "Abinara-1 ITS Robotic Team",
            location: "Surabaya",
            title: "Lead Programmer",
            date: "Feb 2022 - Jul 2024",
            bullets: [
               "Designed and developed C++ control systems for autonomous robots competing in national firefighting and rescue challenges; secured 3rd place nationally in 2022 and Top 8 in 2023.",
                "Integrated ultrasonic, flame, gas, and gyro sensors for real-time navigation and decision-making.",
               "Led system architecture, hardware-software interfacing, and optimization under strict time and technical constraints. Mentored junior developers in embedded programming, circuit integration, and simulation testing to improve build reliability.Mentored junior engineers and led end-to-end system integration."
            ]
        },
        {
            company: "Crustea Indonesia",
            location: "Surabaya",
            title: "IoT & Software Engineer (Part-Time)",
            date: "Nov 2022 - Sep 2023",
            bullets: [
                "Delivered IoT monitoring dashboard and hardware control system for shrimp farming.",
                "Deployed systems across 5+ locations; reduced oxygenation inefficiencies by 20%.",
                "Supported research team in securing $1M+ in funding via smart aquaculture tech innovation.",
                "Programmed embedded microcontrollers (C/C++) for real-time data collection from DO, pH, turbidity, and temperature sensors.",
                "Integrated solar-powered components to support green energy use in remote pond areas.",
                "Built ThingsBoard dashboards for real-time telemetry visualization and farmer-friendly control interfaces."
            ]
        }
    ];
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        
        const element = document.getElementById('skills');
        if (element) observer.observe(element);
        
        return () => observer.disconnect();
    }, []);
    
    return (
        <section id="skills" className="w-full max-w-[1200px] mx-auto px-4 py-24">
            {/* Terminal header */}
            <div className="bg-[#21262d] border border-[#30363d] rounded-t-lg p-4 mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 bg-[#f85149] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#238636] rounded-full"></div>
                    <span className="text-[#7d8590] text-xs font-mono ml-2">skills-experience.js</span>
                </div>
                <div className="text-sm">
                    <div className="text-[#7d8590] mb-2">Technical expertise and professional journey</div>
                    <div className="text-[#58a6ff]">Skills & Experience</div>
                </div>
            </div>
            
            <div className="bg-[#0d1117] border-x border-b border-[#30363d] rounded-b-lg p-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#c9d1d9] mb-4">
                        Skills & Experience
                    </h2>
                    <p className="text-[#7d8590] text-lg md:text-xl max-w-2xl mx-auto">
                        Technical expertise backed by real-world experience
                    </p>
                </div>
                
                {/* Experience Section */}
                <div>
                    <h3 className="text-2xl font-bold text-[#c9d1d9] mb-8 text-center">
                        Professional Experience
                    </h3>
                    <div className="space-y-6">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="bg-[#21262d] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-1">
                                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                                        <span className="font-bold text-lg text-[#c9d1d9]">{exp.company}</span>
                                        <span className="text-[#7d8590] font-medium">
                                            <span className="hidden md:inline">-</span> 
                                            <span className="italic">{exp.location}</span>
                                        </span>
                                    </div>
                                    <span className="text-[#58a6ff] text-sm mt-1 md:mt-0 whitespace-nowrap">{exp.date}</span>
                                </div>
                                <div className="font-semibold text-[#7d8590] mb-3">{exp.title}</div>
                                <ul className="list-disc pl-5 space-y-2 text-[#c9d1d9] text-sm leading-relaxed">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;