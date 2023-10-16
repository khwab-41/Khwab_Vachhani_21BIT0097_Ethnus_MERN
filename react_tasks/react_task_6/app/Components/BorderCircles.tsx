import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BorderCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="flex justify-center items-center relative"
    >
      <div className="border border-white rounded-full h-[450px] w-[450px] opacity-10 animate-pulse mt-40 absolute"></div>
    </motion.div>
  );
};

export default BorderCircles;













{
  /* <div className="border border-[#2F4050] rounded-full h-[50px] w-[50px] mt-8 absolute animate-ping"></div>
<div className="border border-[#2F4050] rounded-full h-[100px] w-[100px] mt-36 absolute"></div>
<div className="border border-[#2F4050] rounded-full h-[200px] w-[200px] mt-36 absolute"></div> */
}
{
  /* <div className="border border-[#2F4050] rounded-full h-[400px] w-[400px] mt-36 absolute"></div> */
}
