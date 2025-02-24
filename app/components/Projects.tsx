"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nutri Serve",
    description:
      "A smart nutrition tracking app that helps users log their meals, monitor calories, and get personalized diet recommendations for a healthier lifestyle.",
    video:
      "https://portfolio-chandrika-projects.s3.us-east-1.amazonaws.com/nutriserve.mp4",
    liveLink: "https://your-live-project.com",
    githubLink:
      "https://github.com/2024-Winter-ITE-5425-0NA/project-react-client-webdriver",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "MFLIX",
    video:
      "https://portfolio-chandrika-projects.s3.us-east-1.amazonaws.com/MFLIX.mp4",
    description:
      "A full-stack movie browsing platform that allows users to explore, search, and filter movies while seamlessly integrating with a database-driven backend.",
    liveLink: "",
    githubLink: "https://github.com/chandrikakillada/MFLIX",
    tech: ["Express", "MongoDB", "Node.js"],
  },
  {
    id: 3,
    title: "Omnifood",
    video:
      "https://user-images.githubusercontent.com/37527885/128391666-0c4a4021-f22c-4519-9d8e-7d3a712e9889.mp4",
    description:
      "A responsive food ordering platform that showcases an elegant UI and smooth user experience, built with modern vanilla JS.",
    liveLink: "https://bright-bonbon-9d881a.netlify.app/",
    githubLink: "https://github.com/chandrikakillada/Omnifood",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTech(true);
    }, 500);
  }, []);

  return (
    <section id='projects' className='font-quicksand py-16 relative background'>
      <div className='flex justify-center relative text-xl font-bold text-center inline-block pb-2 font-sarala mt-6'>
        <h2 className='relative heading'>
          These are the projects that define my journey in development.
          <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 opacity-70 rounded-md transform translate-y-2 hidden md:block blur-sm md:blur-md'></span>
        </h2>
      </div>

      <div className='mt-8 max-w-5xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16'>
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            className='flex flex-col md:flex-row-reverse md:items-center bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 relative gap-6 md:gap-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
          >
            <div className='w-full md:w-[45%] flex flex-col items-start space-y-4'>
              <h3 className='text-lg font-bold text-gray-800'>
                {project.title}
              </h3>

              <p className='text-sm text-gray-900 leading-relaxed'>
                {project.description}
              </p>

              {showTech && (
                <div className='relative flex flex-wrap md:flex-col space-y-2 md:space-y-3'>
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: techIndex * 0.15,
                      }}
                      className='relative flex items-center space-x-2 mt-1 mr-2'
                    >
                      <span className='px-4 py-2 text-xs md:text-sm font-bold bg-red-400 text-white rounded-lg'>
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              <div className='flex gap-4 mt-6 flex-wrap'>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-5 py-2 bg-gray-700 hover:bg-red-400 text-white rounded-lg text-sm font-semibold text-center transition duration-300'
                  >
                    View Live
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-5 py-2 bg-gray-700 hover:bg-red-400 text-white rounded-lg text-sm font-semibold text-center transition duration-300'
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Section: Project Video */}
            <div className='w-full md:w-[55%] relative'>
              <video
                src={project.video}
                className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg'
                autoPlay
                loop
                muted
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
