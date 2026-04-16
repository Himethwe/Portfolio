import { useState, useEffect } from "react";
import {
  Home,
  User,
  Terminal,
  Folder,
  Briefcase,
  Mail,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // 1. Track the scroll position to highlight the active icon
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "expertise",
        "projects",
        "experience",
        "contact",
      ];
      // Add an offset so it highlights slightly before you perfectly hit the section
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Custom smooth scroll function to prevent snapping and overlap
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Stops 100px above the section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // 3. Array of navigation items to keep code clean
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "expertise", icon: Terminal, label: "Expertise" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "experience", icon: Compass, label: "Journey" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 bg-[#1a1a1a] px-6 py-3 rounded-2xl border border-[#1a1a1a]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative group transition-colors duration-300 ${
                isActive ? "text-[#3B82F6]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#2a2a2a] text-gray-200 text-xs font-semibold tracking-wide py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
