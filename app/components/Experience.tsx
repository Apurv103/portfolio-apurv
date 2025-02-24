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
    company: "Suncrest Services Inc",
    date: "Oct 2023 - Apr 2024",
    description: [
      "⚡ Spearheaded the modernization of a legacy .NET B2B platform, rebuilding its UI with React and Tailwind CSS to enhance user experience.",
      "⚡ Supercharged API performance by leveraging FastAPI, drastically improving response times and scalability.",
      "⚡ Transformed user experience by crafting interactive Figma prototypes, ensuring a seamless design-to-development transition.",
      "⚡ Enhanced component reusability with Material UI, reducing development time and maintaining UI consistency.",
    ],
    techStack: ["React", "Figma", "Tailwind CSS", "FastAPI", "Material UI"],
    icon: <FaBriefcase className='text-red-500 text-xl' />,
    type: "work",
  },
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    date: "Mar 2021 - Jul 2022",
    description: [
      "⚡ Developed and maintained full-stack features for a Banking platform.",
      "⚡ Implemented API integrations and optimized database queries.",
      "📈 Launched bereavement support pages, increasing user engagement.",
      "⚡ Reduced page load times using lazy loading for improved performance.",
    ],
    techStack: ["Angular", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
    icon: <FaBriefcase className='text-red-500 text-xl' />,
    type: "work",
  },
  {
    title: "Post Graduate Certificate in IT",
    company: "Humber College",
    date: "Sep 2022 - Apr 2024",
    description: [
      "🏆 Dean’s Honour List Awardee for academic excellence.",
      " 🛠 Hands-on experience in Web Development, Software Engineering & Cloud Computing.",
      "  🔗 Strengthened problem-solving with OOP, DSA & Database Management.",
    ],
    link: "https://www.linkedin.com/posts/chandrikakillada_deanslist-humbercollege-appliedsciences-activity-7164469223375777792-6zWi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfUx6kB5PP0vfkIi4V0h6H8Mx_Nx435SGk",
    techStack: [
      "Software Engineering",
      "OOP",
      "Database Management Systems",
      "DSA",
    ],
    icon: <FaGraduationCap className='text-red-500' />,
    type: "education",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "JNTUH",
    date: "Apr 2016 - Sep 2020",
    description: [
      "🖥️ Built a strong foundation in Data Structures, Algorithms & OOP.",
      "   📊 Developed & deployed real-world projects using C, C++, and Java.",
      "   🚀 Participated in coding competitions & hackathons, enhancing problem-solving skills.",
    ],
    techStack: ["C", "C++", "Data Structures", "Algorithms"],
    icon: <FaGraduationCap className='text-red-500' />,
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
        <h2 className='relative heading '>
          From There to Here: My Career Timeline 🏫
          <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 blur-sm opacity-40 rounded-md transform translate-y-2'></span>
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
            <div className='text-sm font-bold text-black md:w-1/4 md:text-right mt-3'>
              {exp.date}
            </div>

            <div className='p-3 bg-white shadow-md rounded-full border border-red-400 flex items-center justify-center my-4 md:my-0 md:ml-4 mr-4'>
              {exp.icon}
            </div>

            <div className='w-full bg-pink-50 p-6 rounded-lg shadow-lg md:w-3/4'>
              <h3 className='text-xl font-bold text-red-800'>{exp.title}</h3>
              <h4 className='text-lg text-red-500 font-semibold'>
                {exp.company}
              </h4>

              <div className='text-black mt-3 space-y-2'>
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>

              <div className='flex flex-wrap gap-2 mt-4'>
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-red-400 text-white px-3 py-1 text-sm font-semibold rounded-lg'
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
