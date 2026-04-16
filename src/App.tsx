import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// --- THE LOADING LOGO ---
const LoaderLogo = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2L36 10.5V29.5L20 38L4 29.5V10.5L20 2Z"
      fill="#3B82F6"
      fillOpacity="0.1"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="6" fill="#3B82F6" />
  </svg>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function runs when the entire page (including all images) is fully loaded
    const handleLoad = () => {
      // Add a tiny 800ms delay just so the loader doesn't flash too fast
      // This guarantees the user sees the premium branding before entering
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // Check if the page is already fully loaded (sometimes happens if cached)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // If not, wait for the window 'load' event
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
          >
            {/* Pulsing Animation for the Logo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LoaderLogo />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The main website, which waits to fade in until the loader is gone */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen bg-[#111111] text-white font-sans selection:bg-[#3B82F6] selection:text-white"
        >
          <Navbar />
          <Hero />
          <About />
          <Expertise />
          <Projects />
          <Experience />
          <Contact />
        </motion.div>
      )}
    </>
  );
}

export default App;
