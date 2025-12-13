"use client";

import { useState } from "react";
import { motion } from "motion/react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex h-40 items-center justify-center">
      <div
        onClick={() => setIsOn(!isOn)}
        className={`duratio300 flex h-10 w-16 cursor-pointer items-center rounded-full p-1 transition-colors ${isOn ? "justify-end bg-green-500" : "justify-start bg-neutral-500"}`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="h-8 w-8 rounded-full bg-white shadow-md"
        />
      </div>
    </div>
  );
};

export default Toggle;
