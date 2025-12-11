import React from 'react';
import Image from 'next/image';

interface FloatingBoxProps {
  color: string;
  icon: string;
  className?: string;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({ color, icon, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative md:w-32 md:h-20 w-20 h-14 rounded-lg shadow-sm flex overflow-hidden -z-50">
        <div className={`md:w-4 w-2 bg-${color}-500`}></div>
        <div className={`flex-1 bg-${color}-200 flex items-center justify-center`}>

          <Image
            src={`/Icons/${icon}.svg`}
            alt={`${icon} Icon`}
            width={24}
            height={24}
            className='md:w-[60px] w-10 h-auto'
          />

        </div>
      </div>
    </div>
  );
};

export default FloatingBox;