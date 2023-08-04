import {AiOutlineLink, AiOutlineGithub} from "react-icons/ai";
const ProjectCard = (props) =>{
    return (
        <div className=" w-[290px] h-[450px] bg-[rgb(54,54,54)] rounded-xl">
            <img className="w-full h-[45%]" src={props.image} alt="" />
            <div className="flex flex-col items-start text-[#CCCCCC] p-5 gap-y-4 text-sm mx-auto">
                <h1 className="font-medium text-2xl">{props.title}</h1>
                <p className="font-light">{props.description}</p>
                <p className="font-medium text-xs">Tech stack : <span className="font-light">{props.stack}</span> </p>
                <div className="w-full flex flex-row justify-between font-light">
                    <div className="flex flex-row items-center gap-2">
                        <AiOutlineLink />
                        <p>Live Preview</p>
                    </div>
                        <div className="flex flex-row items-center gap-2">
                            <AiOutlineGithub />
                            <p>View Code</p>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;