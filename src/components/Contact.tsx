import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

// --- CUSTOM SVG ICONS (Bulletproof, no dependencies) ---
const GithubIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
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
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => (
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
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- PLACEHOLDER BRAND LOGO ---
// You will swap the SVG paths inside here once you finish designing your logo
const CustomBrandLogo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
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

export default function Contact() {
  return (
    <>
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #111111 inset !important;
          -webkit-text-fill-color: #ffffff !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <section
        id="contact"
        className="py-32 px-6 max-w-6xl mx-auto border-t border-gray-800/50 relative"
      >
        <div className="mb-20 pb-6 border-b border-gray-800/50">
          <h2 className="text-[3rem] md:text-[4rem] font-black text-white uppercase tracking-tighter leading-none">
            LET'S <span className="text-[#3B82F6]">CONNECT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Ready to build data-driven solutions or have an opportunity in
              mind? I'm currently open to new roles and collaborations. Let's
              talk.
            </p>

            <ContactCard
              icon={<Mail className="text-[#3B82F6]" size={24} />}
              title="Email"
              value="himethwe@gmail.com"
              href="mailto:himethwe2003@gmail.com"
            />
            <ContactCard
              icon={<LinkedinIcon className="text-[#3B82F6]" size={24} />}
              title="LinkedIn"
              value="linkedin.com/in/himethweerakkody"
              href="https://www.linkedin.com/in/himeth-weerakkody1/"
            />
            <ContactCard
              icon={<GithubIcon className="text-[#3B82F6]" size={24} />}
              title="GitHub"
              value="github.com/Himethwe"
              href="https://github.com/Himethwe"
            />
            <ContactCard
              icon={<MapPin className="text-[#3B82F6]" size={24} />}
              title="Location"
              value="Colombo, Sri Lanka"
              href="#"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 bg-[#1a1a1a]/40 border border-gray-800/60 rounded-3xl p-8 md:p-10"
          >
            <form
              action="https://formspree.io/f/xgorawnz"
              method="POST"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-[#111111] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-[#111111] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="Data Science Role / Collaboration"
                  className="w-full bg-[#111111] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-400 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#111111] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 group flex items-center justify-center gap-3 w-full md:w-auto md:self-start bg-transparent border-2 border-gray-700 hover:border-[#3B82F6] text-gray-300 hover:text-[#3B82F6] font-semibold text-base tracking-wide px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                <span>Send Message</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- BRANDED MICRO-FOOTER --- */}
        <div className="w-full mt-32 pt-10 pb-4 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Identity Lockup */}
          <div className="flex items-center gap-5">
            <CustomBrandLogo />
            <div className="flex flex-col text-center md:text-left">
              <span className="text-white font-black text-xl tracking-tight leading-none mb-1.5">
                Himeth Weerakkody
              </span>
              <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.2em]">
                Data Science • Analytics
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-700 text-[0.65rem] font-bold uppercase tracking-widest">
              Built with React & Tailwind
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// --- MICRO-COMPONENT: CONTACT CARD ---
function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  const isLink = href !== "#";

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isLink) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          {children}
        </a>
      );
    }
    return <div className="block group">{children}</div>;
  };

  return (
    <CardWrapper>
      <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#1a1a1a]/40 border border-gray-800/60 group-hover:border-gray-600 transition-colors duration-300">
        <div className="w-12 h-12 rounded-xl bg-[#111111] border border-gray-800 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
            {title}
          </span>
          <span className="text-white text-sm md:text-base font-medium truncate group-hover:text-[#3B82F6] transition-colors duration-300">
            {value}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}
