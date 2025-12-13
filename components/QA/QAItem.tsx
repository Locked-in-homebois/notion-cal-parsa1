"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

interface QAItemProps {
  question: string;
  answer: string;
}

const menuVars: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
};

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <h1 className="text-lg font-medium text-gray-600">{question}</h1>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "backOut" }}
        >
          <Plus size={24} className="text-gray-800" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden text-gray-600"
          >
            <p className="pt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QAItem;
