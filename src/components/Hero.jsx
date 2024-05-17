import React from "react";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="p-20 border-b border-neutral-900 pb-4 lg:mb-35 flex flex-col items-center">
      <div className="flex justify-center">
        <motion.h1
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Winner Pindi
        </motion.h1>
      </div>
      <motion.span
        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{
          opacity: [1, 0.8, 1],
          transition: { duration: 1, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        Developpeur Frontend
      </motion.span>
      <p className="my-2 max-w-xl py-6 font-light tracking-tightter text-xl text-center">
        {HERO_CONTENT}
      </p>
    </div>
  );
};

export default Hero;
