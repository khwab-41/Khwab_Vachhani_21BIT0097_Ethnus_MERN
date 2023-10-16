"use client";
import { motion } from "framer-motion";
import React from "react";

import Experience_divs from "./Experience_divs";

type Props = {};

const Experience = (props: Props) => {
  return (
    <>
      <h3 className="top-24 uppercase tracking-[20px] text-2xl text-back_portfolio-pink mb-10">
        {" "}
        Experience
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      >
        <div className="h-flex overflow-x-scroll p-10 lg:flex lg:w-full">
          <Experience_divs />
          <Experience_divs />
          <Experience_divs />
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
