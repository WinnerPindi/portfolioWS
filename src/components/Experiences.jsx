import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experiences = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // L'animation se déclenche une seule fois
    threshold: 0.1, // Le pourcentage de visibilité nécessaire pour déclencher l'animation
  });

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Expériences</h2>
      <div ref={ref}>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}} // L'animation se déclenche uniquement si inView est vrai
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}} // L'animation se déclenche uniquement si inView est vrai
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
