import Porto1 from "../assets/porto_1.png";
import Porto2 from "../assets/Porto2.png";
import Porto3 from "../assets/Porto3.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const portos = [
        {   
            image: Porto1,
            title: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JS, Tailwind, React"
        },
        {   
            image: Porto2,
            title: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JS, Tailwind, React"
        },
        {   
            image: Porto3,
            title: "Project Tile goes here",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            stack: "HTML , JS, Tailwind, React"
        }
    ];

    return (
        <div id="projects" className="w-full max-w-[1200px] pb-40 pt-10 lg:pb-60 px-4 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-[#CCCCCC] text-3xl font-bold my-5 md:text-4xl lg:text-5xl">
                Projects    
            </h1>
            <p className="text-[#A7A7A7] md:text-xl lg:text-2xl">
                Things I’ve built so far
            </p>
            <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 w-full justify-center justify-items-center">
                {portos.map((porto)=>{
                    return <ProjectCard 
                        image = {porto.image}
                        title = "Project Tile goes here"
                        description = "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                        stack = "HTML , JS, Tailwind, React"
                    />
                })}
            </div>
        </div>
    )
}

export default Projects;