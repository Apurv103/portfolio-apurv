"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id='about' className='py-20 px-6 md:px-12 lg:px-24 background '>
      <div className='max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10'>
        {/* Text Section */}
        <motion.div
          className='md:w-3/4 text-center md:text-left'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className='relative text-3xl font-bold text-center inline-block pb-2 font-sarala mt-12'>
            <h2 className='relative heading'>
              About Me 🤹‍♂️
              <span className='absolute inset-x-0 bottom-[-6px] h-5 bg-cyan-500/40 blur-sm opacity-40 rounded-md transform translate-y-2 neon-glow'></span>
            </h2>
          </div>

          <p className='mt-4 text-lg text-cyan-200 leading-relaxed font-quicksand'>
            Hey there! 👋 I'm Apurv — full developer, part debugger, part coffee 
            enthusiast. My portfolio (like my code) is a work-in-progress: it 
            keeps breaking, I keep fixing, and somehow it always ends up better.  
            Basically, I turn ☕ + keyboard smashing into working applications 🚀.
          </p>

          <ul className='mt-4 text-m text-cyan-100 list-disc pl-6'>
            <li>
              🧑‍💻 <strong>Debugging at 3 AM</strong> because "it worked on my machine."
            </li>
            <li>
              🥚 <strong>Cooking eggs in 20 different ways</strong> (yes, that's my
              only Gordon Ramsay skill).
            </li>
            <li>
              🎮 <strong>Gaming until I rage-quit</strong> and promise to uninstall…
              but never do.
            </li>
            <li>
              📊 <strong>Building side projects</strong> that solve problems no one asked for,
              but hey — they work!
            </li>
          </ul>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className='w-full md:w-1/4 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden shadow-lg flex items-center justify-center'>
            <Image
              src='/Snapseed.jpg'
              alt='Apurv Patel'
              width={400}
              height={400}
              className='object-cover rounded-lg'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
