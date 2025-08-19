"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "JavaScript", icon: "/icons/tech/javascript.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
  { name: "React", icon: "/icons/tech/react.svg" },
  { name: "Redux", icon: "/icons/tech/redux.svg" },
  { name: "Next.js", icon: "/icons/tech/nextjs.svg" },
  { name: "Node.js", icon: "/icons/tech/nodejs.svg" },
  { name: "Express.js", icon: "/icons/tech/express.svg" },
  { name: "FastAPI", icon: "/icons/tech/fastapi.svg" },
  { name: "PostgreSQL", icon: "/icons/tech/postgresql.svg" },
  { name: "MySQL", icon: "/icons/tech/mysql.svg" },
  { name: "MongoDB", icon: "/icons/tech/mongodb.svg" },
  { name: "Expo", icon: "/icons/tech/expo.svg" },
  { name: "Postman", icon: "/icons/tech/postman.svg" },
];

const Toolkit = () => {
  return (
    <section id='toolkit' className='py-20 bg-black/50 font-sarala'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='relative text-3xl font-bold text-center inline-block pb-2 font-sarala mt-12'>
          <h2 className='relative heading'>
            My Toolkit 🖥️
            <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-cyan-500/40 blur-sm opacity-40 rounded-md transform translate-y-2 neon-glow'></span>
          </h2>
        </div>

        <div className='mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center font-quicksand'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center text-center p-4 transition hover:scale-110 border border-cyan-500/30 rounded-lg neon-border'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className=''
              />
              <span className='mt-2 text-sm font-medium text-cyan-200'>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
