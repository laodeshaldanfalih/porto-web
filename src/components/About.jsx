import ProfilePicture from "../assets/profile-picture.png"

const About = () => {
    return (
        <div id="about" className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row px-4 pt-[120px] sm:pt-[166px] lg:pt-[230px] justify-between items-center gap-12 sm:gap-16 md:gap-20 relative">
            {/* Background elements */}
            
            
            <div className="relative z-10">
                {/* Simple terminal prompt */}
                <div className="mb-4 text-[#58a6ff] font-mono text-sm">
                    <span className="text-[#7d8590]">~/portfolio</span> <span className="text-[#f85149]">$</span> <span className="text-[#58a6ff]">about</span>
                </div>
            
                <h1 className="text-3xl sm:text-4xl font-bold text-[#c9d1d9] text-center justify-center md:text-start lg:text-5xl mb-4 sm:mb-6">
                    Hi 👋 Everyone! <br /> 
                    My name is <br className="hidden md:inline" /> 
                    <span className="inline-block hover:scale-110 transition-transform duration-300 text-[#58a6ff]">Shaldan</span>  <br />
                    I build things with code
                </h1>
            
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                    <a href="#projects" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-semibold transition-all duration-300 text-sm sm:text-base">
                        View Projects
                    </a>
                    <a href="#contact" className="px-6 sm:px-8 py-2.5 sm:py-3 border border-[#30363d] text-[#c9d1d9] rounded-md font-semibold hover:border-[#58a6ff] hover:text-[#58a6ff] transition-all duration-300 text-sm sm:text-base">
                        Contact Me
                    </a>
                </div>
            </div>
            
            <div className="relative z-10 group">
                {/* Terminal-style frame around profile */}
                <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-[#f85149] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#238636] rounded-full"></div>
                        <span className="text-[#7d8590] text-xs font-mono ml-2">profile.jpg</span>
                    </div>
                    <img className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] rounded-lg object-cover transition-all duration-500 group-hover:scale-105" src={ProfilePicture} alt="Shaldan Profile" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-[#21262d] border border-[#30363d] rounded px-2 py-1 text-xs font-mono text-[#58a6ff] animate-bounce delay-300">
                    {}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#21262d] border border-[#30363d] rounded px-2 py-1 text-xs font-mono text-[#f85149] animate-bounce delay-700">
                    &lt;/&gt;
                </div>
            </div>
        </div>
    );
}

export default About;