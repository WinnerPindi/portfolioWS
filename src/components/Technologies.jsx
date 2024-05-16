import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiAngular } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl" style={{ color: "#61DBFB" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl" style={{ color: "#68A063" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl" style={{ color: "#4DB33D" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-7xl" style={{ color: "#6DB33F" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-7xl" style={{ color: "#DD0031" }} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
