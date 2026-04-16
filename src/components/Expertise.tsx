import { motion } from "framer-motion";
import { Database, Layers, Sparkles, BarChart3 } from "lucide-react";

// The orchestrator for the cascading list
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  // 'as const' prevents TypeScript widening errors
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-800/50"
    >
      {/* Title section - Blue 'I' incorporated */}
      <div className="mb-10 pb-6 border-b border-gray-800/50">
        <h2 className="text-[3rem] md:text-[4rem] font-black text-white uppercase tracking-tighter leading-none">
          EXPERT<span className="text-[#3B82F6]">I</span>SE
        </h2>
      </div>

      {/* Main 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-16">
        {/* CARD 1: Data Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a]/40 border border-gray-800 rounded-4xl p-8 hover:border-[#3B82F6]/60 transition-colors duration-300 flex flex-col"
        >
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Data Engineering
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designing robust ETL pipelines, cleaning and preprocessing complex
              datasets, and architecting scalable data models to fuel advanced
              analytics.
            </p>
          </div>

          {/* This is the motion container that handles the stagger */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 mt-auto"
          >
            <ToolItem
              Icon={Database}
              iconColor="#CC2927"
              title="Advanced SQL"
              subtitle="Database Management"
            />
            <ToolItem
              Icon={Layers}
              iconColor="#FF694B"
              title="dbt"
              subtitle="Data Transformation"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/duckdb"
              title="DuckDB"
              subtitle="Analytical Database"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/flask/white"
              title="Flask"
              subtitle="Backend Framework"
            />
          </motion.div>
        </motion.div>

        {/* CARD 2: Machine Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#1a1a1a]/40 border border-gray-800 rounded-4xl p-8 hover:border-[#3B82F6]/60 transition-colors duration-300 flex flex-col"
        >
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Data Science & ML
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Applying rigorous statistical methodologies and machine learning
              algorithms to uncover hidden patterns, train intelligent models,
              and solve real-world problems.
            </p>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 mt-auto"
          >
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/python"
              title="Python"
              subtitle="Core ML Language"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/LangChain/white"
              title="LangChain"
              subtitle="LLM Integration"
            />
            <ToolItem
              Icon={Sparkles}
              iconColor="#10B981"
              title="Generative AI"
              subtitle="Market Intelligence"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/r"
              title="R"
              subtitle="Statistical Analysis"
            />
          </motion.div>
        </motion.div>

        {/* CARD 3: Business Intelligence & UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1a1a1a]/40 border border-gray-800 rounded-4xl p-8 hover:border-[#3B82F6]/60 transition-colors duration-300 flex flex-col"
        >
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Data Visualization & UI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting pixel-perfect Power BI dashboards and intuitive
              full-stack web applications to translate raw metrics into
              actionable business intelligence.
            </p>
          </div>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 mt-auto"
          >
            <ToolItem
              Icon={BarChart3}
              iconColor="#F2C811"
              title="Power BI"
              subtitle="Data Visualization"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/react"
              title="React"
              subtitle="Frontend UI Library"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/typescript"
              title="TypeScript"
              subtitle="Web Development"
            />
            <ToolItem
              iconUrl="https://cdn.simpleicons.org/tailwindcss"
              title="Tailwind CSS"
              subtitle="Design System"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Updated component to handle EITHER an external image URL OR a Lucide icon
function ToolItem({
  iconUrl,
  Icon,
  iconColor,
  title,
  subtitle,
}: {
  iconUrl?: string;
  Icon?: any;
  iconColor?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-[#2a2a2a] border border-gray-700/50 flex items-center justify-center shrink-0 group-hover:border-gray-500 transition-colors duration-300">
        {/* Render Image if URL exists, otherwise render Lucide Icon */}
        {iconUrl ? (
          <img src={iconUrl} alt={title} className="w-6 h-6 object-contain" />
        ) : Icon ? (
          <Icon size={24} color={iconColor || "#ffffff"} />
        ) : null}
      </div>
      <div className="flex flex-col">
        <h4 className="text-white font-bold text-base tracking-wide">
          {title}
        </h4>
        <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-0.5">
          {subtitle}
        </span>
      </div>
    </motion.div>
  );
}
