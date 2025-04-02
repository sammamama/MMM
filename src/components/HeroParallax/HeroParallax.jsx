import React, { useRef } from "react";

import fgbg from "/realfg1.png";
import bgbg from "/realbg1.png";
import logo from "/logonobg.png";

import { useScroll, useTransform, motion, spring, easeIn } from "framer-motion";

const HeroParallax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgbgY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const fgbgY = useTransform(scrollYProgress, [0, 0.3], ["20%", "0%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const variants = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  }

  return (
    <div className="relative h-screen w-full" ref={ref}>
        <motion.div
        className="absolute inset-0 z-10 w-full h-full"
        transition={{
          type: easeIn,
          ...variants
        }}
        style={{ y: fgbgY }}
      >
        <img src={fgbg} alt="asd" className="object-cover w-full h-full" />
      </motion.div>
    
      <motion.div
        className="absolute inset-0 object-cover bg-black opacity-70"
        transition={{
          type: spring,
          ...variants
        }}
        style={{ y: bgbgY }}
      >
        <img src={bgbg} alt="asd" className="object-cover w-full h-full -z-10 opacity-90" />
      </motion.div>
    
      <motion.div
        style={{ y: logoY }}
        transition={{
          type: spring,
          ...variants
        }}
        className="w-full h-screen flex flex-col absolute inset-0 justify-center items-center"
      >
        <img src={logo} alt="asd" className="object-cover w-[100%] lg:w-[45%]" />
      </motion.div>
    </div>
  );
};

export default HeroParallax;
