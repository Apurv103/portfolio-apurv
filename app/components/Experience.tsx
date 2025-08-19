"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { motion } from "framer-motion";

const floatingIcons = [
  { icon: <FaCode className='text-blue-300 text-2xl' /> },
  { icon: <FaRocket className='text-blue-400 text-2xl' /> },
  { icon: <FaLaptopCode className='text-blue-400 text-2xl' /> },
  { icon: <FaDatabase className='text-blue-500 text-2xl' /> },
  { icon: <FaServer className='text-blue-400 text-2xl' /> },
  { icon: <FaCloud className='text-blue-300 text-2xl' /> },
];

const experiences = [
  {
    title: "Full Stack Engineer Intern",
    company: "FireFly Spark",
    date: "July 2025 - Continue",
    description: [
      "⚡ Built a mobile-first app using React Native and FastAPI, with focus on real-time user onboarding, Google OAuth 2.0 authentication, and location tracking.",
      "⚡ Developed secure REST APIs and integrated third-party services including Google Maps API (geolocation), ID Analyzer API, Standard ID Scan API, and Plaid API for ID and financial verification.",
      "⚡ Engineered and optimized PostgreSQL schemas and integrated AWS S3 for secure document and image storage, ensuring data integrity and scalable access.",
      "⚡ Deployed backend on Render using a cloud Linux server, achieving scalability, HTTPS security, structured logging, and centralized error handling.",
      "⚡ Created modular UI components with navigation, modals, and input validations, boosting frontend development efficiency by 30%.",
    ],
    techStack: [
      "React Native",
      "FastAPI",
      "PostgreSQL",
      "AWS S3",
      "Render",
      "Google Maps API",
      "Google OAuth 2.0",
      "ID Analyzer API",
      "Standard ID Scan API",
      "Plaid API",
    ],
    icon: <FaBriefcase className='text-cyan-400 text-xl neon-glow' />,
    type: "work",
  },
  {
    title: "Software Developer",
    company: "St. Clair College @ Ace Acumen ",
    date: "May 2023 - May 2025",
    description: [
      "✨ Built a Student Info & LMS adopted by 500+ students and 40+ faculty for content delivery, attendance, access control, and analytics.",
      "⚡ Developed scalable, responsive modules using React.js (15+ components) and Node.js/Express APIs (30+ endpoints), reducing manual academic tracking efforts by 70%.",
      "🗄️ Designed and optimized normalized SQL schemas for 8+ core entities (students, courses, attendance, assessments), improving query performance by 40%.",
      "📊 Leveraged Microsoft Graph API and Power BI REST API with CORS, enabling secure data sync, embedded analytics, and seamless frontend-backend communication.",
      "🔐 Integrated JWT-based authentication and Role-Based Access Control (RBAC) for 3 distinct user roles (admin, faculty, student), enhancing data security and access efficiency.",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "SQL (MySQL/SQL Server)",
      "Microsoft Graph API",
      "Power BI REST API",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "CORS"
    ],
    
    icon: <FaBriefcase className='text-cyan-400 text-xl neon-glow' />,
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Webito Infotech",
    date: "June 2021 – March 2023",
    description: [
      "🛠️ Developed a multi-tenant Inventory Management System using FastAPI and React Native for 100+ stores.",
      "📦 Built a scalable multi-tenant inventory system with integrated barcode scanning, GPS-based store tracking via Google Maps API, and real-time inventory synchronization through FastAPI REST APIs, reducing manual tracking efforts by 65%.",
      "⚡ Optimized high-frequency PostgreSQL queries and implemented Stripe API for seamless billing and payment workflows.",
      "🚗 Added vehicle access logging with Plate Recognizer API and automated alerts using Twilio SMS API, enhancing operational visibility and security.",
    ],
    techStack: [
      "FastAPI",
      "React Native",
      "PostgreSQL",
      "Google Maps API",
      "Stripe API",
      "Plate Recognizer API",
      "Twilio SMS API",
      "RESTful APIs"
    ],
    icon: <FaBriefcase className='text-cyan-400 text-xl neon-glow' />,
    type: "work",
  },
  
  {
    title: "Master of Applied Computing",
    company: "University of Windsor",
    date: "May 2022 - Oct 2023",
    description: [
      "📘 Specialized coursework in Advanced Software Engineering, Distributed Systems, Advanced Database Management, and Internet Applications.",
      "🚀 Completed multiple hands-on academic projects, consistently earning bonus marks for building advanced features and exceeding project requirements.",
      "💡 Applied agile methodologies and full-stack development practices across projects, bridging theory with real-world software engineering challenges.",
      "🎯 Internship project focused on designing scalable software systems, integrating cloud solutions, and optimizing database performance.",
    ],
    techStack: [
      "Advanced Software Engineering",
      "Distributed Systems",
      "Database Management",
      "Internet Applications",
      "Agile Development",
      "Full Stack Projects"
    ],
    icon: <FaGraduationCap className='text-cyan-400 neon-glow' />,
    type: "education",
  },
  
  {
    title: "Bachelor of Technology in Information Technology",
    company: "Kadi Sarva Vishwavidhyalaya",
    date: "August 2017 - June 2021",
    description: [
      "🏅 Graduated among the **Top 5 students** throughout the degree program.",
      "🖥️ Built a strong foundation in **Data Structures, Algorithms, and Object-Oriented Programming (OOP)**.",
      "📊 Developed & deployed **real-world projects** using C, C++, and Java.",
      "🚀 Participated in **coding competitions and hackathons**, enhancing problem-solving and teamwork skills.",
    ],
    techStack: ["C", "C++", "Java", "Data Structures", "Algorithms", "OOP"],
    icon: <FaGraduationCap className='text-cyan-400 neon-glow' />,
    type: "education",
  },
  
];

const Experience = () => {
  return (
    <section
      id='experience'
      className='background relative overflow-hidden font-quicksand'
    >
      <div className='hidden md:block'>
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 600 - 300,
              y: Math.random() * 600 - 300,
            }}
            animate={{
              x: [
                Math.random() * 700 - 350,
                Math.random() * 700 - 350,
                Math.random() * 700 - 350,
              ],
              y: [
                Math.random() * 500 - 250,
                Math.random() * 500 - 250,
                Math.random() * 500 - 250,
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className='absolute'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className='flex justify-center relative text-xl font-bold text-center inline-block pb-2 font-sarala mt-6'>
        <h2 className='relative heading'>
          From There to Here: My Career Timeline 🏫
          <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-cyan-500/40 opacity-70 rounded-md transform translate-y-2 hidden md:block blur-sm md:blur-md neon-glow'></span>
        </h2>
      </div>

      <div className='py-12 px-4 md:px-10 max-w-5xl mx-auto'>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className='mb-10 relative flex flex-col md:flex-row md:items-start md:text-left items-center text-center'
          >
            <div className='text-sm font-bold text-gray-300 md:w-1/4 md:text-right mt-3'>
              {exp.date}
            </div>

            <div className='p-3 bg-black/50 shadow-md rounded-full border border-cyan-400 flex items-center justify-center my-4 md:my-0 md:ml-4 mr-4 neon-border'>
              {exp.icon}
            </div>

            <div className='w-full bg-black/50 p-6 rounded-lg shadow-lg md:w-3/4 border border-cyan-500/30 neon-border'>
              <h3 className='text-xl font-bold text-cyan-300'>{exp.title}</h3>
              <h4 className='text-lg text-cyan-400 font-semibold'>
                {exp.company}
              </h4>

              <div className='text-cyan-100 mt-3 space-y-2'>
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>

              <div className='flex flex-wrap gap-2 mt-4'>
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-cyan-600 text-white px-3 py-1 text-sm font-semibold rounded-lg neon-glow'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
