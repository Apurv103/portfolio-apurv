"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Nutri Serve",
    description:
      "A nutrition tracking app that helps users monitor food intake and get diet recommendations.",
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
      "A full-stack movie browsing application built with Node.js, Express, MongoDB, and Handlebars.",
    liveLink: "",
    githubLink: "https://github.com/chandrikakillada/MFLIX",
    tech: ["Express", "MongoDB", "Node.js"],
  },
  {
    id: 3,
    title: "Omnifood",
    video:
      "https://user-images.githubusercontent.com/37527885/128391666-0c4a4021-f22c-4519-9d8e-7d3a712e9889.mp4",
    description: "A full-stack food browsing application built with Node.js",
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
    <section
      id='projects'
      className='font-quicksand py-20  relative background'
    >
      <div className='flex justify-center relative text-3xl font-bold text-center inline-block pb-2 font-sarala mt-0'>
        <h2 className='relative heading'>
          These are the projects that define my journey in development.
          <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-red-200 blur-sm opacity-40 rounded-md transform translate-y-2'></span>
        </h2>
      </div>

      <div className='mt-10 max-w-5xl mx-auto px-6 space-y-16'>
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            className='flex flex-col md:flex-row-reverse md:items-center justify-between bg-white rounded-lg shadow-lg p-8 md:p-10 relative gap-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
          >
            <div className='w-full md:w-[45%] flex flex-col items-start space-y-4 md:space-y-5 mt-4 md:mt-0'>
              <h3 className='text-lg font-bold text-gray-800'>
                {project.title}
              </h3>

              <p className='text-sm text-gray-900 leading-relaxed'>
                {project.description}
              </p>

              {showTech && (
                <div className='relative flex flex-wrap md:flex-col space-y-3 md:space-y-2'>
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: techIndex * 0.15,
                      }}
                      className='relative flex items-center space-x-3 md:space-x-2 mt-1'
                    >
                      <span className='px-4 py-2 text-xs md:text-sm font-semibold bg-red-400 text-white rounded-lg'>
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

            <div className='w-full md:w-[55%] relative'>
              <video
                src={project.video}
                className='w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg'
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
