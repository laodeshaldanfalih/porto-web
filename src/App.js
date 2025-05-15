import { useState } from "react";
import Navbar from "./components/Navbar"
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <div className="bg-white text-[#232526] min-h-screen">
      <Navbar hidden={projectModalOpen} />
      <About />
      <TechStack />
      <Projects onModalOpen={setProjectModalOpen} />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
