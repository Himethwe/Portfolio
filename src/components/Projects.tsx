import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- CUSTOM SVG ICONS (Bulletproof, no dependencies) ---
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ExternalLinkIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// --- PROJECT DATA ARCHITECTURE ---
const projectsData = [
  {
    id: "batchmate",
    title: "BatchMate",
    tagline: "LLM-Augmented Job Market Analytics",
    description:
      "An end-to-end data processing engine and RAG-based career toolkit. Leverages high-performance analytical databases (DuckDB) and open-source LLMs to transform raw job market data into quantifiable, highly personalized career roadmaps.",
    tech: ["DuckDB", "dbt", "Python", "LangChain", "Llama"],
    github: "https://github.com/Himethwe/BatchMate",
    live: "",
    images: [
      "src/assets/BatchMate/Home.png",
      "src/assets/BatchMate/Demand_engine.png",
      "src/assets/BatchMate/cv_auditor_1.png",
      "src/assets/BatchMate/cv_auditor_2.png",
      "src/assets/BatchMate/cv_auditor_3.png",
      "src/assets/BatchMate/consultant.png",
    ],
  },
  {
    id: "marketpulse",
    title: "MarketPulse",
    tagline: "AI-Powered Market Intelligence Engine",
    description:
      "An automated competitive strategy platform. Features real-time ETL pipelines, NLP for product deduplication, and an XGBoost model providing 7-day price forecasts and actionable stock alerts for the electronics retail market.",
    tech: ["Python", "Flask", "XGBoost", "PostgreSQL", "Selenium"],
    github: "https://github.com/Himethwe/MarketPulse",
    live: "",
    images: [
      "src/assets/MarketPulse/Home.png",
      "src/assets/MarketPulse/search.png",
      "src/assets/MarketPulse/price_exp_1.png",
      "src/assets/MarketPulse/price_exp_2.png",
      "src/assets/MarketPulse/price_exp_3.png",
    ],
  },
  {
    id: "gradely",
    title: "Gradely",
    tagline: "Full-Stack Academic Analytics Platform",
    description:
      "A data-driven academic planner designed to help university students own their journey. Handles complex grading scenarios, tracks performance trends, and reverse-engineers target GPAs with a predictive calculation engine.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Himethwe/Gradely-Webapp",
    live: "https://gradely-webapp.vercel.app",
    images: [
      "src/assets/Gradely/Home.png",
      "src/assets/Gradely/Academic-record.png",
      "src/assets/Gradely/Strategist_1.png",
      "src/assets/Gradely/Strategist_2.png",
      "src/assets/Gradely/Dashboard_1.png",
      "src/assets/Gradely/Dashboard_2.png",
    ],
  },
  {
    id: "manchester",
    title: "Manchester Energy Performance",
    tagline: "Strategic Energy Dashboard",
    description:
      "An end-to-end analytics pipeline tracking 10 years of Manchester’s EPC data. Engineered modular SQL stored procedures for complex data cleaning, feeding a highly interactive Power BI dashboard focused on identifying carbon savings.",
    tech: ["SQL Server", "Power BI", "Data Modeling", "ETL"],
    github:
      "https://github.com/Himethwe/Manchester-Energy-Performance-Dashboard",
    live: "",
    images: [
      "src/assets/Manchester/landing_page.png",
      "src/assets/Manchester/manchester_analysis_pg1.png",
      "src/assets/Manchester/property_attributes_pg2.png",
      "src/assets/Manchester/costs_and_savings_pg3.png",
      "src/assets/Manchester/property_search_pg4.png",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-800/50"
    >
      {/* Title section */}
      <div className="mb-20 pb-6 border-b border-gray-800/50">
        <h2 className="text-[3rem] md:text-[4rem] font-black text-white uppercase tracking-tighter leading-none">
          FEATURED <span className="text-[#3B82F6]">PROJECTS</span>
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

// --- INDIVIDUAL PROJECT CARD COMPONENT ---
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    let initialTimeout: ReturnType<typeof setTimeout>;
    let loopInterval: ReturnType<typeof setInterval>;

    if (isHovered && project.images.length > 1) {
      // THE FIX: Fast 800ms initial reaction to reward the user for hovering
      initialTimeout = setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % project.images.length);

        // Then settle into the comfortable 2.5-second reading pace
        loopInterval = setInterval(() => {
          setCurrentImg((prev) => (prev + 1) % project.images.length);
        }, 2500);
      }, 600);
    } else {
      setCurrentImg(0);
    }

    // Cleanup both timers to prevent memory leaks if they mouse off quickly
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(loopInterval);
    };
  }, [isHovered, project.images.length]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col gap-10 lg:gap-14 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="w-full lg:w-7/12 aspect-video relative rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl bg-[#1a1a1a]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg}
            src={project.images[currentImg]}
            alt={`${project.title} screenshot`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <span className="text-[#3B82F6] font-medium text-sm md:text-base uppercase tracking-widest mb-6">
          {project.tagline}
        </span>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-300"
          >
            <GithubIcon size={18} />
            <span>View Source</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-700 text-gray-300 font-semibold text-sm hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300"
            >
              <ExternalLinkIcon size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
