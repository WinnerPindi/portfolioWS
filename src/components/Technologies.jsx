import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    y: [0, -20, 0], // animation de montée et de descente
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <FaNodeJs className="text-7xl" style={{ color: "#68A063" }} />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <SiMongodb className="text-7xl" style={{ color: "#4DB33D" }} />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <SiSpringboot className="text-7xl" style={{ color: "#6DB33F" }} />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          variants={iconVariants}
          animate="animate"
        >
          <SiAngular className="text-7xl" style={{ color: "#DD0031" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
