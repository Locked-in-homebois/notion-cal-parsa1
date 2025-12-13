"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { X } from "lucide-react";

const Toast = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="cursor-pointer bg-black px-10 py-5 text-[20px] text-white"
      >
        save changes
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            transition={{
              type: "spring",
              duration: 0.3,
              stiffness: 300,
              damping: 25,
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-1/2 flex h-16 w-[400px] -translate-x-1/2 items-center justify-between rounded-lg border border-neutral-200 bg-white px-6 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="font-medium text-neutral-800">
                Changes saved successfully
              </span>
            </div>
            <X
              size={20}
              className="cursor-pointer text-neutral-600 transition-colors hover:text-black"
              onClick={() => setIsVisible(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
