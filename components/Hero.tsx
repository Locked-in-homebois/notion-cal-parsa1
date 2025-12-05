import React from 'react';
import Image from 'next/image';
import FloatingBox from './general/FloatingBox';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
      <FloatingBox
        color="bg-blue-100"
        accentColor="bg-blue-500"
        className="top-20 left-40"
        icon={<Image src="/Icons/laptop.svg" alt="Laptop" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-yellow-100"
        accentColor="bg-yellow-500"
        className="top-48 right-32"
        icon={<Image src="/Icons/basketball.svg" alt="Basketball" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-red-100"
        accentColor="bg-red-500"
        className="bottom-48 left-32"
        icon={<Image src="/Icons/cat.svg" alt="Cat" width={64} height={64} />}
      />
      <FloatingBox
        color="bg-purple-100"
        accentColor="bg-purple-500"
        className="bottom-32 right-1/4"
        icon={<Image src="/Icons/checklist.svg" alt="Checklist" width={64} height={64} />}
      />
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
