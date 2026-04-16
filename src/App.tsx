import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#3B82F6] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
