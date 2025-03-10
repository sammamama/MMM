"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Story = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { triggerOnce: true, margin: "0px 0px 0px 0px" });

    return (
    <div ref={ref} className="my-16">
        {isInView &&
          <div>
            <motion.div
              className="font-black text-5xl mb-5 text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
                Our Story
            </motion.div>

            <motion.div
              className="leading-5.5 text-sm md:text-base tracking-widest font-extralight text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                doloribus aspernatur fuga, tempore recusandae nisi maxime, dolore
                aperiam voluptates est voluptatibus architecto? Consectetur qui
                modi accusantium harum blanditiis exercitationem facilis sunt
                aperiam doloremque veniam, autem sit. Ratione, quae unde porro in
                harum non fuga distinctio ex veniam debitis facilis cumque sit
                perspiciatis rerum libero quo aut molestias beatae ad! Veniam
                veritatis tempora dicta quam! Ullam ad tempore earum fuga commodi
                iste, libero omnis. Quod similique id quibusdam corrupti iste
                dolorem numquam ullam incidunt aperiam, exercitationem ex tempore
                natus nesciunt voluptatem illo beatae at! Eos labore autem in
                placeat, ut dolorem?
            </motion.div>
          </div>
        }
    </div>
  );
};

export default Story;
