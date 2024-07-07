import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const ProjectCard = ({ image, title, description, stack, liveLink, codeLink, className }) => {
    return (
        <div className={`w-[290px] h-[450px] bg-[rgb(54,54,54)] rounded-xl ${className}`}>
            <img className="w-full h-[45%] object-cover rounded-t-lg" src={image} alt={title} />
            <div className="flex flex-col items-start text-[#CCCCCC] p-4 gap-y-2 text-sm mx-auto">
                <h1 className="font-medium text-2xl">{title}</h1>
                <p className="font-light">{description}</p>
                <p className="font-medium text-xs">Tech stack: <span className="font-light">{stack}</span></p>
                <div className="w-full flex flex-row justify-between font-light">
                    {liveLink ? (
                        <div className="flex flex-row items-center gap-2 text-blue-500">
                            <AiOutlineLink />
                            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center gap-2 text-gray-500">
                            <AiOutlineLink />
                            <span>Private</span>
                        </div>
                    )}
                    {codeLink ? (
                        <div className="flex flex-row items-center gap-2 text-blue-500">
                            <AiOutlineGithub />
                            <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    ) : (
                        <div className="flex flex-row items-center gap-2 text-gray-500">
                            <AiOutlineGithub />
                            <span>Private</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
