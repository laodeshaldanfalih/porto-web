import Navbar from "./components/Navbar"
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="mx-auto" >
      <Navbar />
      <About /> 
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
