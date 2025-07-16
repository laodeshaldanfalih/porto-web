import { useState } from "react";
import Navbar from "./components/Navbar"
import About from './components/About';
import TechStack from "./components/TechStack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact"

function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  return (
    <div className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#58a6ff]/10 to-[#f85149]/10 rounded-lg blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#7c3aed]/10 to-[#58a6ff]/10 rounded-lg blur-3xl"></div>
      </div>
      
      {/* Terminal-style background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #21262d 1px, transparent 1px),
            linear-gradient(#21262d 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Main content */}
      <Navbar hidden={projectModalOpen} />
      <About />
      <TechStack />
      <Skills />
      <Projects onModalOpen={setProjectModalOpen} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
