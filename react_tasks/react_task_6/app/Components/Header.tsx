"use client";
import React, { useEffect, useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const controlShow = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
    return () => {
      window.removeEventListener("scroll", controlShow);
    };
  }, []);

  return (
    <header ref={targetRef} className={`relative z-20`}>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: [-1000, 30, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.5,
            y: 10,
          }}
        >
          <SocialIcon
            url="https://instagram.com/khwab_.41/"
            fgColor="#DA7B93"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.5,
            y: 10,
          }}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/khwab-vachhani/"
            fgColor="#DA7B93"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.5,
            y: 10,
          }}
        >
          <SocialIcon
            url="https://twitter.com/KhwabV"
            fgColor="#DA7B93"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.5,
            y: 10,
          }}
        >
          <SocialIcon
            url="https://open.spotify.com/user/ueujt2xqdxdx3pvw75luln4k3?si=a25e153487024300"
            fgColor="#DA7B93"
            bgColor="transparent"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: [1000, -30, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        className="flex flex-row items-center justify-center"
      >
        <motion.div
          whileHover={{
            scale: 1.5,
            y: 10,
          }}
        >
          <SocialIcon
            url="https://email"
            fgColor="#DA7B93"
            bgColor="transparent"
          />
          <div className="flex text-back_portfolio-pink mr-3 md:inline-flex justify-center cursor-pointer">
            <p>Get in touch</p>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
