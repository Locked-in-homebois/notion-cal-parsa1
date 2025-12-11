'use client'

import { motion } from "motion/react"


const Rotate = () => {
    return (

        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="w-[200px] h-[200px] bg-purple-300 border border-purple-700 rounded m-2 "
        >
            <h2 className="text-center p-4 text-3xl text-purple-900">Charlie Kirk Fuck Nigger</h2>
        </motion.div>

    )
};

export default Rotate;