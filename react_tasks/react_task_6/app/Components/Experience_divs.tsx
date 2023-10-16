'use client'
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const Experience_divs = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-pot_green hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 p-10 m-10 lg:mx-28 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mb-4 mt-20"
        src="https://1fid.com/wp-content/uploads/2022/06/cool-profile-picture-2-1024x1024.jpg"
        alt="Work Experience Image 1"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-back_portfolio-light_green">
          Web Developer
        </h4>
        <p className="font-bold text-2xl mt-1 text-back_portfolio-pink">
          Go Beyond
        </p>
        <div className="flex space-x-2 my-2 lg:ml-20 ml-6">
          <img src="https://skillicons.dev/icons?i=html" alt="skills" />
          <img src="https://skillicons.dev/icons?i=css" alt="skills" />
          <img src="https://skillicons.dev/icons?i=js" alt="skills" />
          <img src="https://skillicons.dev/icons?i=bootstrap" alt="skills" />
          <img src="https://skillicons.dev/icons?i=nodejs" alt="skills" />
          <img src="https://skillicons.dev/icons?i=express" alt="skills" />
          <img src="https://skillicons.dev/icons?i=mongodb" alt="skills" />
        </div>
        <p className="uppercase py-5 text-back_portfolio-green">
          January 2023 - April 2023
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg text-back_portfolio-light_text mb-20">
          <li>A travel Website to book various vacation packages in India</li>
          <li>Used Vanila Development</li>
          <li>Used AJAX and JSON for realtime data rendering</li>
          <li>Used Bootstrap framwork to style pages</li>
          <li>Used MongoDb for Backend</li>
        </ul>
      </div>
    </article>
  );
};

export default Experience_divs;
