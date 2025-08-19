"use client";

import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className='fixed top-1/3 right-4 sm:right-6 flex flex-col space-y-4 p-2 sm:p-4 bg-black/70 rounded-lg shadow-lg z-50 border border-cyan-500/30 backdrop-blur neon-border'>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() =>
            document
              .getElementById(section.id)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`p-3 sm:p-4 rounded-full transition ${
            activeSection === section.id
              ? "bg-cyan-500 text-black neon-glow"
              : "bg-slate-800 text-cyan-300 border border-cyan-500/30"
          }`}
        >
          {section.icon}
        </button>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
