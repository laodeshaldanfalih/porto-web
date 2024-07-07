import Porto1 from "../assets/web_crustea.png";
import Porto2 from "../assets/web_ranmits.png";
import Porto3 from "../assets/mobile_sibunda.png";
import Porto4 from "../assets/mobile_anakku_sehat.png";
import Porto5 from "../assets/mobile_restoku.png";
import Porto6 from "../assets/mobile_rememberme.png";
import Porto7 from "../assets/mobile_trinityapp.png";
import Porto8 from "../assets/iot_crustea.jpg"
import Porto9 from "../assets/iot_robotic.png"
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const portos = [
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
            image: Porto4,
            title: "AnakkuSehat Healthcare Mobile App",
            description: "Healthcare Application to track child's first 1000 days growth health condition",
            stack: "Dart, Flutter, SQflite",
            liveLink: "https://intip.in/AnakkuSehat",
            codeLink: "https://github.com/laodeshaldanfalih/anakku_sehat_app"
        },
        {
            image: Porto5,
            title: "Restoku Restaurant Mobile App",
            description: "Application for finding you the best restaurant nearby",
            stack: "Dart, Flutter, REST API",
            codeLink: "https://github.com/laodeshaldanfalih/flutter_restaurant_app.git"
        },
        {
            image: Porto6,
            title: "RememberMe Social Mobile App",
            description: "Healthcare Application to prevent stunting for mother and child",
            stack: "Kotlin, SQL",
            codeLink: "https://github.com/laodeshaldanfalih/RememberMe.git"
        },
        {
            image: Porto7,
            title: "Fully CI/CD Integrated Web App (Personal ToDo App)",
            description: "Healthcare Application to prevent stunting for mother and child",
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

    return (
        <div id="projects" className="w-full max-w-[1200px] pb-40 pt-12 lg:pb-60 px-4 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-[#CCCCCC] text-3xl font-bold my-5 md:text-4xl lg:text-5xl">Projects</h1>
            <p className="text-[#A7A7A7] md:text-xl lg:text-2xl">Things I’ve built so far</p>
            <div className="grid mt-10 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-2 w-full justify-center justify-items-center">
                {portos.map((porto, index) => {
                    return (
                        <ProjectCard
                            key={index} // Ensure to add a unique key
                            // className={}
                            image={porto.image}
                            title={porto.title}
                            description={porto.description}
                            stack={porto.stack}
                            liveLink={porto.liveLink}
                            codeLink={porto.codeLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
