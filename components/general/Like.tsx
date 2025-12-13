"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

const Like = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex h-[100px] items-center justify-center">
      <motion.div
        layout
        animate={{
          scale: isOn ? [1, 1.2, 1] : 1,
          color: isOn ? "#ef4444" : "#737373",
        }}
        transition={{ duration: 0.4 }}
        onClick={() => setIsOn(!isOn)}
        className="cursor-pointer"
      >
        <Heart size={40} fill={isOn ? "currentColor" : "none"} />
      </motion.div>
    </div>
  );
};

export default Like;
