'use client'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BorderCircles from "./BorderCircles";
import Image from "next/image";
import Profile_IMG from "./Profile_IMG.jpg";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const MainBody = () => {
  const [text, count] = useTypewriter({
    words: ["Hey!! You have reached Khwab", "Artist", "<Who also Codes>"],
    loop: true,
    delaySpeed: 1500,
  });

    return (
      <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <BorderCircles />
        <Image
            className="relative rounded-full h-48 w-48 object-cover mx-0 mb-8"
            src={Profile_IMG}
            alt=""
            width={600}
            height={600}
          />
        <div className="text-gray-200 z-20">
          <h2 className="text-back_portfolio-light_green text-sm uppercase pb-2 tracking-[10px]">
            Web Developer
          </h2>
          <h1 className="text-3xl font-semibold xl:text-4xl">
            <span className="">{text}</span>
            <Cursor cursorColor="grey-100" />
          </h1>
        </div>
      </div>
    );
}

export default MainBody;