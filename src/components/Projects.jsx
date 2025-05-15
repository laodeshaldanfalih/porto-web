import { useState } from "react";
import Porto1 from "../assets/web_crustea.png";
import Porto2 from "../assets/web_ranmits.png";
import Porto3 from "../assets/mobile_sibunda.png";
import Porto7 from "../assets/mobile_trinityapp.png";
import Porto8 from "../assets/iot_crustea.jpg"
import Porto9 from "../assets/iot_robotic.png"
import Porto10 from "../assets/web_reemotely.png"
import Porto11 from "../assets/web_alnico.png"
import ProjectCard from "./ProjectCard";

const Projects = ({ onModalOpen }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const portos = [
        {
            image: Porto11,
            title: "Alnico Agency Partner",
            description: "A tailored custom ERP solution integrated into the Lark ecosystem, designed to effectively manage agency partnerships for Alnico Company. Features include KPI dashboards, client management, department administration, and real-time analytics, all seamlessly connected with Lark's communication and automation tools.",
            stack: "Next.js, React MUI, Lark server API, Custom ERP, Real-time Analytics, Lark Integration"
        },
        {
            image: Porto10,
            title: "Reemotely Portal",
            description: "A comprehensive platform designed to facilitate the generation of marketing content, leveraging advanced AI technology to enhance efficiency and creativity.",
            stack: "Next.js, React MUI, OpenAI API"
        },
        {
            image: Porto1,
            title: "Crustea Company Website",
            description: "During my previous job at Crustea Indonesia, I developed their company website",
            stack: "React JS, Tailwind, TypeScript",
            liveLink: "https://www.crustea.id/",
        },
        {
            image: Porto2,
            title: "Ranmits Web App",
            description: "Facing with the problem of vehicle thief in our university area, I developed Ranmits web app to help victims call, report, and find their lost vehicle immediately",
            stack: "Mongo DB, Express JS, Node JS",
            liveLink: "https://ranmits.up.railway.app/",
            codeLink: "https://github.com/laodeshaldanfalih/RanmITS-NodeJS.git",
        },
        {
            image: Porto3,
            title: "Sibunda Healthcare Mobile App",
            description: "Healthcare Application to prevent stunting for mother and child",
            stack: "Dart, Flutter, Firebase, Laravel",
            liveLink: "https://intip.in/SibundaApp",
            codeLink: "https://github.com/laodeshaldanfalih/sibunda_frontend.git"
        },
        {
            image: Porto7,
            title: "Fully CI/CD Integrated Web App (Personal ToDo App)",
            description: "Simple Note App to write your to-do list and keep track of your tasks easily",
            stack: "Laravel, Bootstrap, Jenkins, AWS, Terraform, SonarQube",
            liveLink: "http://54.206.116.217",
            codeLink: "https://github.com/laodeshaldanfalih/docker-trinity-app.git",
        },
        {
            image: Porto8,
            title: "Crustea IoT Devices",
            description: "Building and researching shrimp pond monitoring IoT Hardware and Software",
            stack: "C++, ESP32, Sensors, MQTT, Thingsboard"
        },
        {
            image: Porto9,
            title: "Four Legged Autonomous Robot",
            description: "Building and researching rescue mission robot",
            stack: "C++, ESP32, STM, Flutter, Firebase, Sensors",
        },
    ];

    // Notify parent (App) if a modal is open or closed
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
            {/* Subtle background effect */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-30 z-0 bg-gradient-to-br from-[#E70FAA]/30 via-[#232526]/60 to-[#00C0FD]/30 blur-2xl" />
            <h1 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] mb-4 text-center drop-shadow-lg">Projects</h1>
            <p className="relative z-10 text-[#A7A7A7] md:text-xl lg:text-2xl mb-12 text-center max-w-2xl">A showcase of my work, blending creativity and technology to solve real-world problems.</p>
            <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3 w-full justify-center justify-items-center">
                {portos.map((porto, index) => (
                    <ProjectCard
                        key={index}
                        image={porto.image}
                        title={porto.title}
                        description={porto.description}
                        stack={porto.stack}
                        liveLink={porto.liveLink}
                        codeLink={porto.codeLink}
                        open={openIndex === index}
                        onOpen={() => handleOpen(index)}
                        onClose={handleClose}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
