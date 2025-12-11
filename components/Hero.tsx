import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[1000px] text-center">
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="w-16 h-16 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4">
          <span className="text-black text-3xl font-bold">4</span>
        </div>
        <div className="text-sm font-semibold text-gray-600 mb-2">Notion Calendar</div>
        <h1 className="text-6xl md:text-8xl font-bold text-black mb-4">It’s time.</h1>
        <p className="text-lg text-gray-800 max-w-md md:max-w-lg mb-8">
          All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
        </p>
        <Link
          href="#"
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Get Notion Calendar free
        </Link>

        <div className='pointer-events-auto'>
          how is life?
        </div>
      </div>
    </div>
  );
};

export default Hero;