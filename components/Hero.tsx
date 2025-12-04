import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-white flex flex-col items-center justify-center min-h-screen text-center">
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-white border-2 border-black rounded-lg flex items-center justify-center mb-4">
          <span className="text-black text-3xl font-bold">4</span>
        </div>
        <div className="text-sm font-semibold text-gray-600 mb-2">Notion Calendar</div>
        <h1 className="text-8xl font-bold text-black mb-4">It’s time.</h1>
        <p className="text-lg text-gray-800 max-w-md mb-8">
          All of your commitments, now in one place. Meet the beautifully designed, fully integrated calendar for your work and life.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold">
          Get Notion Calendar free
        </button>
      </div>
    </div>
  );
};

export default Hero;
