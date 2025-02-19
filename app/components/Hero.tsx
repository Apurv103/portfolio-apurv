"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=''>
      <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left py-52 px-6'>
        <div className='md:w-1/2'>
          <motion.h1
            className='text-4xl md:text-4xl font-extrabold text-gray-800 dark:text-red-400 relative inline-block'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className='relative dark:text-red-400'>
              <span className='relative inline-block'>
                Hello! I am Chandrika
                <span className='absolute left-0 bottom-0 w-full h-4 bg-red-300 opacity-50 blur-md'></span>
              </span>
            </span>{" "}
            👋
          </motion.h1>
          <motion.p
            className='mt-4 text-lg md:text-xl text-gray-600'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A Full-Stack Developer passionate about building modern, scalable
            web applications. ✨
          </motion.p>
        </div>

        <motion.div
          className='mt-10 md:mt-0 md:w-1/4 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex items-center justify-center'>
            <Image
              src='/profilepic.png'
              alt='Profile'
              width={300}
              height={300}
              className='rounded-full object-cover'
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className='mt-10 flex justify-center '
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 dark:text-red-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
