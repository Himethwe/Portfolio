import { motion } from "framer-motion";
import profilePic from "../assets/headshot_edit_v2.png";
import Typewriter from "./Typewriter";

// Clean, lightweight SVG components to replace the removed Lucide brand icons
const GithubIcon = ({ size = 24 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// NEW: Mail Icon Component
const MailIcon = ({ size = 24 }: { size?: number }) => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  const roles = ["SCIENTIST", "ANALYST", "ENGINEER"];

  return (
    <main
      className="min-h-screen flex items-center pt-24 pb-12 px-6 max-w-6xl mx-auto"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* Left Column: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 bg-white rounded-[2.5rem] p-6 pb-8 flex flex-col items-center relative shadow-2xl"
        >
          <div className="w-full rounded-3xl overflow-hidden relative border-4 border-white">
            <img
              src={profilePic}
              alt="Himeth Weerakkody"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Fixed Container for name and circle element */}
          <div className="w-full flex items-center justify-between mt-8 px-2">
            <h2 className="text-black text-[1.8rem] leading-tight font-black tracking-tight">
              Himeth <br /> Weerakkody
            </h2>

            {/* Dynamic Dotted Circle perfectly contained */}
            <motion.svg
              width="45"
              height="45"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#757575"
                strokeWidth="3"
                strokeDasharray="8 8"
              />
            </motion.svg>
          </div>

          {/* Social Links Container utilizing the custom SVG components */}
          <div className="w-full flex items-center gap-4 mt-6 px-2">
            <a
              href="https://github.com/Himethwe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 text-gray-500 hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-blue-50/50 transition-all duration-300"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/himeth-weerakkody1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 text-gray-500 hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-blue-50/50 transition-all duration-300"
            >
              <LinkedinIcon size={22} />
            </a>
            {/* NEW: Contact/Mail Link added here */}
            <a
              href="#contact"
              className="p-3 rounded-full border-2 border-gray-300 text-gray-500 hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-blue-50/50 transition-all duration-300"
            >
              <MailIcon size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Typography & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-8 flex flex-col"
        >
          <div className="flex flex-col uppercase tracking-tighter">
            <h1 className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[0.85] text-white">
              DATA
            </h1>
            <Typewriter words={roles} typingSpeed={100} deletingSpeed={50} />
          </div>

          <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
            Bridging the gap between raw data and actionable intelligence. I
            specialize in developing predictive machine learning models,
            designing intuitive analytics dashboards, and architecting the
            scalable data pipelines that power them.
          </p>

          {/* Exact Template Match: Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-14 pt-12 border-t border-gray-800/50">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <h3 className="text-[3.5rem] md:text-[4.5rem] lg:text-[4.5rem] font-bold text-white tracking-tighter leading-none">
                +10
              </h3>
              <p className="text-[#888888] text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-medium mt-4 leading-[1.4]">
                PROJECTS
                <br />
                COMPLETED
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <h3 className="text-[3.5rem] md:text-[4.5rem] lg:text-[4.5rem] font-bold text-white tracking-tighter leading-none">
                +12
              </h3>
              <p className="text-[#888888] text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-medium mt-4 leading-[1.4]">
                CORE
                <br />
                TECHNOLOGIES
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <h3 className="text-[3.5rem] md:text-[4.5rem] lg:text-[4.5rem] font-bold text-white tracking-tighter leading-none">
                +3
              </h3>
              <p className="text-[#888888] text-[0.65rem] md:text-xs tracking-[0.2em] uppercase font-medium mt-4 leading-[1.4]">
                YEARS OF
                <br />
                FOCUS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
