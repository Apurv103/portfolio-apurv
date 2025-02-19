"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id='about' className='py-20 bg-white '>
      <div className='max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center'>
        {/* Text Content */}
        <motion.div
          className='md:w-3/4 text-center md:text-left'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* About Me Header with Faded Underline */}
          <h2 className='relative text-4xl font-bold dark:text-red-400 inline-block'>
            About Me
            <span className='absolute left-0 bottom-0 w-full h-3 bg-red-300 opacity-50 blur-md'></span>
          </h2>

          <p className='mt-4 text-lg text-black'>
            Hello again! Thanks for making it this far! Just a heads up! my
            portfolio is always evolving (just like my code)! I’m constantly
            learning, building, and occasionally breaking things. But hey,
            that’s the beauty of being a developer, right? 😆
          </p>

          <ul className='mt-4 text-lg text-black-600 list-disc pl-6'>
            <li>
              💻 <strong>Grinding LeetCode problems</strong> just for fun (yes,
              really).
            </li>
            <li>
              🛠️ <strong>Tinkering with tiny side projects</strong> because why
              not?
            </li>
            <li>
              🎮 <strong>Playing video games</strong> and occasionally
              rage-quitting.
            </li>
          </ul>
        </motion.div>

        {/* Profile Image - Styled as Circular */}
        <motion.div
          className='mt-10 md:mt-0 md:w-1/4 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative overflow-hidden shadow-lg flex items-center justify-center'>
            <Image src='/prf.png' alt='Chandrika' width={400} height={400} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
