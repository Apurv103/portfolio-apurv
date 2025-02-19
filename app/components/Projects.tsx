"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Nutri Serve",
    description:
      "A nutrition tracking app that helps users monitor food intake and get diet recommendations.",
    video: "/nutriserve.mp4",
    liveLink: "https://your-live-project.com",
    githubLink: "https://github.com/yourusername/nutriserve",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "MFLIX",
    description:
      "A full-stack movie browsing application built with Node.js, Express, MongoDB, and Handlebars.",
    image: "/Mflix.png",
    liveLink: "",
    githubLink: "https://github.com/chandrikakillada/MFLIX",
    tech: ["Express", "MongoDB", "Node JS"],
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-20 bg-white-100'>
      <div className='text-center dark:text-red-400'>
        <h2 className='text-4xl font-bold'>Projects</h2>
        <p className='mt-2 text-lg text-gray-600 dark:text-red-400'>
          Hover over a project to see details!
        </p>
      </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='relative bg-white rounded-lg overflow-hidden shadow-lg group'
            whileHover={{ scale: 1.02 }}
          >
            <div className='w-full h-[250px] '>
              {project.video ? (
                <video
                  src={project.video}
                  className='absolute inset-0 w-full h-full object-cover'
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='w-full object-cover'
                />
              )}
            </div>

            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-white text-center'>
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <p className='mt-2 text-sm'>{project.description}</p>

              <div className='mt-4 flex gap-2'>
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 text-xs font-semibold bg-gray-700 rounded-full'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='mt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gray-700 hover:bg-pink-600 text-white rounded-lg text-sm font-semibold'
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gray-700 hover:bg-pink-600 text-white rounded-lg text-sm font-semibold'
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
