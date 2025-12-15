"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface FloatingBoxProps {
  color: string;
  icon: string;
  className?: string;
}

const FloatingBox: React.FC<FloatingBoxProps> = ({
  color,
  icon,
  className,
}) => {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        viewport={{ once: true, amount: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
        className="relative -z-50 flex h-14 w-20 overflow-hidden rounded-lg shadow-sm md:h-20 md:w-32"
      >
        <div className={`w-2 md:w-4 bg-${color}-500`}></div>
        <div
          className={`flex-1 bg-${color}-200 flex items-center justify-center`}
        >
          <Image
            src={`/Icons/${icon}.svg`}
            alt={`${icon} Icon`}
            width={24}
            height={24}
            className="h-auto w-10 md:w-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingBox;
