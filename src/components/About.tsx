import { motion } from "framer-motion";
import { GraduationCap, Users, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-800/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">
        {/* Left Column: The Bento Box Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          /* THE FIX: Re-added lg:mt-32 to align with buttons, and increased gap-y-12 to gap-y-16 to stretch the bento box and fill the bottom void */
          className="lg:col-span-5 grid grid-cols-2 gap-x-3 gap-y-19 content-start lg:mt-32"
        >
          {/* Main Large Image */}
          <div className="col-span-2 h-82.5 rounded-4xl overflow-hidden relative border border-gray-800/50">
            <img
              src="/explain.jpeg"
              alt="Presenting Data Project"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Secondary Image 1 */}
          <div className="h-57.5 rounded-4xl overflow-hidden relative border border-gray-800/50">
            <img
              src="/cert_get.jpeg"
              alt="Receiving Award"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Secondary Image 2 */}
          <div className="h-57.5 rounded-4xl overflow-hidden relative border border-gray-800/50 flex items-center justify-center">
            <img
              src="/WhatsApp Image 2026-04-09 at 11.17.50 PM.jpeg"
              alt="Himeth Weerakkody"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Right Column: The Narrative & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 flex flex-col pt-4"
        >
          {/* Massive, Brutalist Title */}
          <div className="mb-8 pb-6 border-b border-gray-800/50">
            <h2 className="text-[3rem] md:text-[4rem] font-black text-white uppercase tracking-tighter leading-none">
              ABOUT <span className="text-[#3B82F6]">ME</span>
            </h2>
          </div>

          {/* Action Zone: Status Pill + Resume Button */}
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Live Status Pill */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full border border-gray-800/60 bg-[#1a1a1a]/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
                Open to Work
              </span>
            </div>

            {/* Resume Button */}
            <a
              href="\Himeth_0022_V9.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border-2 border-gray-700 text-gray-300 font-medium text-base tracking-wide hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300"
            >
              <ArrowRight
                size={18}
                className="text-gray-400 group-hover:text-[#3B82F6] transition-colors duration-300"
              />
              <span>View CV</span>
            </a>
          </div>

          <div className="space-y-8 text-[#A1A1AA] text-lg leading-[1.8]">
            <p>
              I have always understood that the most sophisticated technical
              builds are only as good as the actual business value they create.
              Blending a foundational background in commerce with end-to-end
              data expertise, from architecting scalable pipelines to building
              predictive models and intuitive analytics, my passion lies in
              bridging the gap between raw numbers and strategic
              decision-making. I believe that data without clear communication
              is just noise.
            </p>

            {/* Education & Leadership Highlights */}
            <div className="flex flex-col gap-8 py-4">
              {/* Item 1 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={20} className="text-[#3B82F6]" />
                  <h4 className="text-white font-bold text-xl tracking-tight">
                    Applied Data Science Communication
                  </h4>
                </div>
                <p className="text-[1.05rem] pl-8">
                  Currently in my final year of a B.Sc. at General Sir John
                  Kotelawala Defence University (KDU). My academic focus bridges
                  rigorous statistical modeling and machine learning with the
                  ability to effectively communicate complex insights to
                  non-technical stakeholders.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users size={20} className="text-[#3B82F6]" />
                  <h4 className="text-white font-bold text-xl tracking-tight">
                    Treasurer, DatAInspire_KDU
                  </h4>
                </div>
                <p className="text-[1.05rem] pl-8">
                  Leading financial operations and strategy for the university's
                  official Data Science club. This role allows me to foster the
                  local tech community while applying operational leadership
                  outside of the codebase.
                </p>
              </div>
            </div>

            <p>
              This perspective drives my approach to every problem. I
              deliberately seek out projects that have a tangible, real-world
              impact. Whether I am architecting a data pipeline, tuning a
              predictive model, or designing pixel-perfect Power BI dashboards,
              my goal remains the same: to create end-to-end solutions that
              translate complex data into actionable, human-centered insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
