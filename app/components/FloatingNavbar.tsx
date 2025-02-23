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
    <nav className='fixed top-1/3 right-4 sm:right-6 flex flex-col space-y-4 p-2 sm:p-4 bg-white/80 rounded-lg shadow-lg z-50'>
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
