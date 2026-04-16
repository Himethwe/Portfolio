import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// --- MILESTONE DATA ARCHITECTURE ---
const experienceData = [
  {
    id: 1,
    date: "2026 - Present",
    title: "Undergraduate Dissertation",
    organization: "Retail SME Analytics Research",
    description:
      "Currently architecting and researching 'A Data-Driven Decision-Making (DDDM) Framework for Sri Lankan Retail SMEs'. Bridging academic statistical modeling with practical, real-world business intelligence applications.",
    tag: "Research",
  },
  {
    id: 2,
    date: "2024 - Present",
    title: "Independent Data Solutions Developer",
    organization: "Domain-Utility Projects",
    description:
      "Architected and deployed full-stack analytics platforms (Gradely, BatchMate) and AI-powered market engines (MarketPulse) to solve real-world data constraints using DuckDB, React, and Machine Learning.",
    tag: "Development",
  },
  {
    id: 3,
    date: "2025 - Present",
    title: "Treasurer & Leadership Board",
    organization: "DatAInspire_KDU",
    description:
      "Leading financial operations and strategy for the university's official Data Science club. Fostering the local tech community, organizing events, and applying operational leadership outside of the codebase.",
    tag: "Leadership",
  },
  {
    id: 4,
    date: "Jan 2025",
    title: "Microsoft Power Up Certified",
    organization: "Microsoft Power Up Program",
    description:
      "Completed an intensive certification track focusing on the Microsoft ecosystem, building foundational capabilities in rapid application development and enterprise data workflows.",
    tag: "Certification",
  },
  {
    id: 5,
    date: "2023 - Present",
    title: "B.Sc. Applied Data Science Communication",
    organization: "General Sir John Kotelawala Defence University",
    description:
      "Maintaining a 3.8/4.0 GPA. Building a rigorous foundation in statistical modeling, machine learning, and data engineering, with a specialized focus on translating complex data into actionable, executive-level insights.",
    tag: "Education",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  // Hook to track how far the user has scrolled through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Transforms the scroll progress (0 to 1) into a percentage height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-800/50"
    >
      {/* Title section */}
      <div className="mb-24 pb-6 border-b border-gray-800/50">
        <h2 className="text-[3rem] md:text-[4rem] font-black text-white uppercase tracking-tighter leading-none">
          THE <span className="text-[#3B82F6]">JOURNEY</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full">
        {/* --- DESKTOP LINES --- */}
        {/* Base dark line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-gray-800 to-transparent" />
        {/* Animated glowing blue line that draws itself on scroll */}
        <motion.div
          style={{ height: lineHeight }}
          className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-linear-to-b from-[#3B82F6] to-[#3B82F6]/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] origin-top"
        />

        {/* --- MOBILE LINES --- */}
        {/* Base dark line */}
        <div className="block md:hidden absolute left-3.75 top-0 w-0.5 h-full bg-linear-to-b from-gray-800 to-transparent" />
        {/* Animated glowing blue line */}
        <motion.div
          style={{ height: lineHeight }}
          className="block md:hidden absolute left-3.75 top-0 w-0.5 bg-linear-to-b from-[#3B82F6] to-[#3B82F6]/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] origin-top"
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {experienceData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative w-full flex justify-end md:justify-center"
              >
                {/* Desktop Layout */}
                <div
                  className={`hidden md:flex w-full ${
                    isEven ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-[calc(50%-3rem)] ${isEven ? "pr-0" : "pl-0"}`}
                  >
                    <TimelineCard
                      item={item}
                      align={isEven ? "right" : "left"}
                    />
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden w-full pl-12">
                  <TimelineCard item={item} align="left" />
                </div>

                {/* The Timeline Node (Glowing Dot) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                  className="absolute left-3.75 md:left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.6)] z-10"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- MICRO-COMPONENT: TIMELINE CARD ---
function TimelineCard({ item, align }: { item: any; align: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: align === "right" ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full bg-[#1a1a1a]/40 border border-gray-500 rounded-3xl p-8 hover:border-[#3B82F6] transition-colors duration-300 ${
        align === "right"
          ? "md:text-right md:items-end"
          : "md:text-left md:items-start"
      } flex flex-col`}
    >
      <div
        className={`flex flex-wrap items-center gap-4 mb-5 ${
          align === "right" ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <span
          className={`px-3 py-1 rounded-full text-[0.65rem] font-bold tracking-widest uppercase bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/30 ${
            align === "right" ? "md:order-last" : ""
          }`}
        >
          {item.tag}
        </span>
        <span className="text-gray-500 font-mono text-sm tracking-tight">
          {item.date}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
        {item.title}
      </h3>
      <h4 className="text-[#A1A1AA] text-sm font-semibold tracking-wide uppercase mb-5">
        {item.organization}
      </h4>

      <p className="text-gray-400 text-[0.95rem] leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}
