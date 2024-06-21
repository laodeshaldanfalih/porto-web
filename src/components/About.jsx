import ProfilePicture from "../assets/profile-picture.png"
const About = () => {
    return (
        <div id="about" className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row px-4 pt-[166px] lg:pt-[230px] justify-between items-center gap-20">
            <h1 className="text-4xl font-bold text-[#D9D9D9] text-center justify-center md:text-start lg:text-5xl">Hi 👋 Everyone ! <br /> My name is <br className="hidden md:inline" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#00C0FD]">Shaldan</span>  <br />I build things from code</h1>
            <div className="p-2 md:p-2 bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] flex justify-center items-center rounded-[50%] self-center">
                <img className="w-[240px] h-[240px] md:w-[260px] md:h-[260px] rounded-[50%] object-cover" src={ProfilePicture} alt="" />
            </div>
        </div>
    );
}

export default About;