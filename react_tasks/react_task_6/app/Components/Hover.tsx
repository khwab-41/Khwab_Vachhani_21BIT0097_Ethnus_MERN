"use client";
import { motion } from "framer-motion";

const Hover = () => {
    return(
    <motion.button
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        />
    );
}

export default Hover;
