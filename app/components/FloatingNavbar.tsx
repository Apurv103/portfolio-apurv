"use client";

import { useState, useEffect } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
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
    <nav className='fixed right-6 top-1/3 flex flex-col space-y-4 bg-white/80 p-4 rounded-lg shadow-lg'>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() =>
            document
              .getElementById(section.id)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`p-3 rounded-full transition ${
            activeSection === section.id
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {section.icon}
        </button>
      ))}
    </nav>
  );
};

export default FloatingNavbar;
