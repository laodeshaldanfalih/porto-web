import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const placeholder = "https://via.placeholder.com/400x200?text=No+Image";

const ProjectCard = ({ image, title, description, stack, liveLink, codeLink, className, open, onOpen, onClose }) => {
    return (
        <>
            <div
                className={`relative w-[360px] h-[580px] bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer ${className}`}
                onClick={onOpen}
            >
                <img
                    className="w-full h-[44%] object-center object-cover rounded-t-2xl bg-gray-100"
                    src={image || placeholder}
                    alt={title}
                />
                <div className="flex flex-col items-start text-gray-700 p-5 gap-y-3 text-base mx-auto">
                    <h1 className="font-bold text-2xl mb-1 text-[#232526] line-clamp-2">{title}</h1>
                    <p className="font-light text-gray-500 line-clamp-3">{description}</p>
                    <div className="flex flex-wrap gap-2 my-2">
                        {stack && stack.split(',').map((tech, i) => (
                            <span key={i} className="bg-gray-100 text-[#232526] px-2 py-1 rounded text-xs font-semibold border border-gray-200">
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        {liveLink ? (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] hover:from-[#00C0FD] hover:to-[#E70FAA] text-white px-3 py-1 rounded shadow transition font-semibold">
                                <AiOutlineLink /> Live
                            </a>
                        ) : null}
                        {codeLink ? (
                            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-[#232526] px-3 py-1 rounded shadow transition font-semibold border border-gray-300">
                                <AiOutlineGithub /> Code
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm animate-fadeInOverlay" onClick={onClose}>
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-4xl w-full p-8 animate-fadeInModal" onClick={e => e.stopPropagation()}>
                        <img
                            className="w-full h-76 object-cover rounded-xl mb-4 bg-gray-100"
                            src={image || placeholder}
                            alt={title}
                        />
                        <h2 className="text-3xl font-bold text-[#232526] mb-2">{title}</h2>
                        <p className="text-gray-500 mb-4">{description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {stack && stack.split(',').map((tech, i) => (
                                <span key={i} className="bg-gray-100 text-[#232526] px-2 py-1 rounded text-xs font-semibold border border-gray-200">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3">
                            {liveLink ? (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] hover:from-[#00C0FD] hover:to-[#E70FAA] text-white px-4 py-2 rounded shadow transition font-semibold">
                                    <AiOutlineLink /> Live
                                </a>
                            ) : null}
                            {codeLink ? (
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-[#232526] px-4 py-2 rounded shadow transition font-semibold border border-gray-300">
                                    <AiOutlineGithub /> Code
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
