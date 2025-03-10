"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="my-16">
      {isInView && (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="font-black text-5xl mb-5 text-neutral-300">
              Our Story
            </div>
            <div className="leading-5.5 text-sm md:text-base tracking-widest font-extralight text-neutral-300">
              Welcome to Melbourne Metal Mates, where we welcome in fans of
              metal to meet others in the community, make mates and seek gig
              buddies! Here you will find some of the best bands in the
              Melbourne Metal scene and join a bright community of like-minded
              individuals. Our goal in MMM is to welcome in fans of metal (all
              genres and sub-genres!) with open arms, to make going to gigs and
              meeting mates less daunting, and to most importantly, have fun and
              experience all the Melbourne Metal Scene has to offer!
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Story;
