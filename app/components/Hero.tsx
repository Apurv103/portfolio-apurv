"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const text = "Hi! I'm Chandrika 👋";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCursorVisible(false);
          setIsTyping(false);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-full background'>
      <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left py-20 px-6 md:px-12 lg:px-24 pt-60'>
        <div className='md:w-1/2'>
          <motion.h1
            className='dark:text-red-400 relative inline-block leading-snug'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className='relative text-3xl sm:text-4xl font-bold heading text-center md:text-left font-sarala'>
              {displayText}
              {cursorVisible && (
                <span
                  className={`blinking-cursor ${
                    isTyping ? "typing" : "hidden-cursor"
                  }`}
                >
                  |
                </span>
              )}
              <span className='absolute left-1/2 bottom-[-5px] transform -translate-x-1/2 w-[102%] h-[7px] bg-red-300 opacity-50 blur-sm rounded-lg'></span>
            </h2>
          </motion.h1>

          <style jsx>{`
            .blinking-cursor {
              display: inline-block;
              margin-left: 5px;
            }

            /* Blinking effect only while typing */
            .typing {
              animation: blink 1s infinite;
            }

            .hidden-cursor {
              opacity: 0;
            }

            @keyframes blink {
              50% {
                opacity: 0;
              }
            }
          `}</style>

          <motion.p
            className='mt-4 text-lg md:text-xl text-gray-700 font-quicksand'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A <span className='text-red-500'>Full-Stack Developer </span>
            passionate about crafting modern, scalable web applications. Turning
            complex problems into elegant, user-friendly solutions. ✨
          </motion.p>
        </div>

        <motion.div
          className='mt-10 md:mt-0 md:w-1/3 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className='relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg flex items-center justify-center'>
            <Image
              src='/profilepic-modified.png'
              alt='Profile'
              width={300}
              height={300}
              className='rounded-full object-cover'
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className='mt-10 flex flex-col items-center pb-10'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 text-gray-800 dark:text-red-400'
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
        <p className='text-gray-600 text-sm mt-2 animate-pulse font-delius'>
          Scroll down to see more details
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
