'use client'

import { motion, scale } from 'motion/react';
import Link from 'next/link'; // Import Link

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[600px] text-center">
      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.div
          whileHover={{ rotate: 20, scale: 1.2, transition: { duration: 0.2, type: "tween", ease: "circOut" } }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-16 h-16 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4"
        >
          <span className="text-black text-3xl font-bold">4</span>
        </motion.div>
        <div className="text-sm font-semibold text-gray-600 mb-2">Notion Calendar</div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-black mb-4"
        >
          It’s time.
        </motion.h1>
        <p className="text-lg text-gray-800 max-w-md md:max-w-lg mb-8">
          All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
        </p>
        <Link
          href="#"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Get Notion Calendar free
        </Link>
      </div>
    </div>
  );
};

export default Hero;