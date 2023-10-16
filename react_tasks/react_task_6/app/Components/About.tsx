"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center  md:text-left md:flex-row max-w-4xl justify-evenly mx-auto items-center">
      <h1 className="text-back_portfolio-pink absolute top-14 uppercase tracking-[10px] text-2xl">
        About
      </h1>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-1024x1024.jpg"
        className="relative w-32 h-32 rounded-full -mb-20 md:mb-0 object-cover md:rounded-md md:w-64 md:h-64 xl:max-w-[300px] md:mr-12 flex-shrink-0"
        viewport={{ once: true }}
      />
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="text-back_portfolio-light_text relative text-center w-50% mx-auto tracking-[2px] p-2"
      >
        Hello! As an undergraduate student who is passionate about tech and
        entrepreneurship, I am eager to take on the world&apos;s most pressing
        challenges through innovation and creativity. With a deep curiosity for
        emerging technologies and a love for problem-solving, I am always
        looking for ways to apply technical skills to create meaningful change.
        I am excited to connect with professionals who share my passion for
        innovation and collaboration, and I am open to exploring new
        opportunities that allow me to make an impact. Let&apos;s connect and
        see where our shared interests can take us.
      </motion.div>
    </div>
  );
};

export default About;
