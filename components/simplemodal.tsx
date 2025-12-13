"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

const overlayVars: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVars: Variants = {
  initial: {
    y: 20,
    opacity: 0,
    scale: 0.95,
  },

  animate: {
    y: 0,

    opacity: 1,

    scale: 1,
    transition: {
      type: "spring",

      bounce: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const Pop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[200px] flex-col items-center justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-black px-6 py-2 font-medium text-white"
      >
        open something
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVars}
              onClick={(e) => e.stopPropagation()}
              className="max-w-sm rounded-2xl bg-white p-8 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold">SYBAU AMK</h2>
              <p className="mb-6 text-gray-600">HANG URSELF</p>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
              >
                close me
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pop;
