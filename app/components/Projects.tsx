"use client";

import { motion } from "framer-motion";

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
    tech: ["Express", "MongoDB", "Node JS"],
  },

  {
    id: 3,
    title: "Omnifood",
    video:
      "https://user-images.githubusercontent.com/37527885/128391666-0c4a4021-f22c-4519-9d8e-7d3a712e9889.mp4",
    description: "A full-stack food browsing application built with Node.js",

    liveLink: "https://bright-bonbon-9d881a.netlify.app/",
    githubLink: "https://github.com/chandrikakillada/Omnifood",
    tech: ["HTML", "CSS", "JS"],
  },
];

const Projects = () => {
  return (
    <section id='projects' className='font-quicksand py-20 bg-white-100'>
      <div className='flex justify-center relative text-4xl font-bold text-red-400 text-center inline-block pb-2 font-sarala'>
        <h2>
          Projects
          <span className='absolute left-1/2 bottom-[-4px] w-[10%] h-[8px] bg-red-300 opacity-150 blur-md rounded-lg transform -translate-x-1/2'></span>
        </h2>
      </div>
      <div className='flex justify-center relative text-2xl mt-10 font-bold text-black text-center inline-block pb-2'>
        <p>Hover over to see the details maybe?</p>
      </div>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='relative bg-white rounded-lg overflow-hidden shadow-lg group'
            whileHover={{ scale: 1.02 }}
          >
            <div className='w-full h-[250px] relative'>
              <video
                src={project.video}
                className='absolute inset-0 w-full h-full object-cover'
                autoPlay
                loop
                muted
              />
            </div>

            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
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

              <div className='mt-4 flex gap-4'>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-gray-700 hover:bg-red-400 text-white rounded-lg text-sm font-semibold'
                  >
                    View Live
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-gray-700 hover:bg-red-400 text-white rounded-lg text-sm font-semibold'
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
