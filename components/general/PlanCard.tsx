"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PlanCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <motion.div
        onClick={() => setIsSelected(!isSelected)}
        layout
        animate={{
          borderColor: isSelected ? "#3b82f6" : "#e5e5e5",
          scale: isSelected ? 1.05 : 1,
          boxShadow: isSelected
            ? "0px 10px 30px rgba(59, 130, 246, 0.5)"
            : "0px 10px 30px rgba(0, 0, 0, 0)",
        }}
        className="flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 bg-neutral-50"
      >
        <motion.h3 layout className="font-bold text-neutral-800">
          Pro Plan
        </motion.h3>
        <AnimatePresence>
          {isSelected && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="mt-2 overflow-hidden font-medium text-blue-600"
            >
              ✅ Selected
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PlanCard;
