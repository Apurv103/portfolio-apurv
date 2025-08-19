"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Prostore – Full-Stack E-Commerce App",
    description:
      "A feature-rich online shopping platform built with Next.js, TypeScript, Prisma, PostgreSQL, and Tailwind CSS. Implemented secure authentication, Stripe/PayPal payments, and admin controls. Integrated Uploadthing for image uploads and Resend for email receipts, boosting user experience by 35%. Set up CI/CD pipeline on Vercel with GitHub integration, reducing manual deployment time by 80% and minimizing release errors by 50%.",
    liveLink: "https://e-commerce-website-pi-two.vercel.app/", // if you deploy it, add the live URL here
    githubLink: "https://github.com/Apurv103/E-Commerce-website-",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe", "PayPal", "Vercel CI/CD"],
  },
  {
    id: 2,
    title: "Q-Win – Seminar Management System",
    description:
      "A React + TypeScript based seminar management system for the University of Windsor. Solved website crashes and manual entry issues, supporting 500+ concurrent users via Firebase backend. Integrated Microsoft Authentication for secure access and implemented Dynamic QR Codes with SHA-256 hashing, improving attendance tracking efficiency by 50% and reducing manual workloads by 70%.",
    liveLink: "qwin.web.app", // if deployed, add live demo link
    githubLink: "https://github.com/Apurv103/Q-Win",
    tech: ["React", "TypeScript", "Firebase", "Microsoft Authentication", "SHA-256 QR Codes"],
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
          <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-cyan-500/40 opacity-70 rounded-md transform translate-y-2 hidden md:block blur-sm md:blur-md neon-glow'></span>
        </h2>
      </div>

      <div className='mt-8 max-w-5xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16'>
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            className='flex flex-col md:flex-row md:items-center bg-black/50 rounded-lg shadow-lg p-6 sm:p-8 md:p-10 relative gap-6 md:gap-8 border border-cyan-500/30 neon-border'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: projectIndex * 0.2 }}
          >
            <div className='w-full flex flex-col items-start space-y-4'>
              <h3 className='text-lg font-bold text-cyan-300'>
                {project.title}
              </h3>

              <p className='text-sm text-cyan-100 leading-relaxed'>
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
                      <span className='px-4 py-2 text-xs md:text-sm font-bold bg-cyan-600 text-white rounded-lg neon-glow'>
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
                    className='px-5 py-2 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg text-sm font-semibold text-center transition duration-300 border border-cyan-500/30 neon-border'
                  >
                    View Live
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-5 py-2 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg text-sm font-semibold text-center transition duration-300 border border-cyan-500/30 neon-border'
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
