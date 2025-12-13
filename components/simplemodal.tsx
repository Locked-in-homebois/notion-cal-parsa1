'use client'
import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "motion/react"


const overlayVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalVars: Variants = {
    initial: {
        y: 20,
        opacity: 0,
        scale: 0.95
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.5
        }
    },
    exit: {
        y: 20,
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.2
        }
    }
}

const Pop = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-[200px]">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-black text-white px-6 py-2 rounded-lg font-medium"
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
                            className="bg-white p-8 max-w-sm text-center rounded-full border-2 border-red-700 ">
                            <h2 className="text-2xl font-bold mb-4 ">SYBAU AMK</h2>
                            <p className="text-gray-600 mb-6 ">
                                HANG URSELF
                            </p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                                close me
                            </button>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Pop;