"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center py-20'>
      <motion.h1
        className='text-4xl md:text-6xl font-bold text-gray-800 dark:text-white'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello! Im <span className='text-pink-500'>Chandrika</span> 👋
      </motion.h1>
      <motion.p
        className='mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A Full-Stack Developer with a passion for building modern web
        applications. 🚀
      </motion.p>
      <motion.a
        href='#projects'
        className='mt-6 px-6 py-3 rounded-lg bg-pink-500 text-white text-lg font-semibold shadow-lg hover:bg-pink-600 transition duration-300'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
