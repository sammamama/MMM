"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { crewData } from "./crewData";
import CrewModal from "../CrewModal/CrewModal";

const Crew = () => {
  const ref = useRef(null);
  const refImg = useRef(null);

  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.2,
  });
  const inViewImg = useInView(ref, {
    triggerOnce: true,
    margin: "10px 0px -10px 0px",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [crewMember, setCrewMember] = useState(null);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <div ref={ref}>
      {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="h-fit"
          >
            <div className="text-neutral-200 font-black text-5xl mb-5">
              Meet the Crew
            </div>

            <div className="relative overflow-x-scroll scrollbar-thin pb-4 scrollbar-thumb-neutral-500 scrollbar-track-gray-900 md:scrollbar-none md:overflow-hidden">
              <div className="w-fit overflow-hidden">
                <div className="flex relative md:flex-wrap gap-10  ">
                  {crewData.map((data, i) => (
                    <React.Fragment key={i}>
                      {inViewImg && (
                        <div
                          ref={refImg}
                          className="w-[300px] h-[300px] md:h-[500px] z-10 bg-neutral-200 overflow-hidden rounded-lg cursor-pointer hover:scale-[1.02]"
                          onClick={() => {
                            modalOpen ? close() : open();
                            setCrewMember(data);
                          }}
                        >
                          <div className="relative h-[90%] md:h-[70%] ">
                            <Image
                              src={data.image}
                              alt={data.name}
                              fill
                              className="object-cover object-top w-full h-full"
                            />
                          </div>
                          <div className="mx-4 my-2 text-black">
                            <div className=" font-bold leading-5">
                              {data.name} <br />
                              <span className=" font-normal">{data.title}</span>
                            </div>
                            <div className=" leading-4 pt-1 tracking-wider font-extralight">
                              {data.description}
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {modalOpen && (
                <div
                  className="fixed inset-0 flex items-center justify-center z-50"
                  onClick={close}
                >
                  <CrewModal data={crewMember} />
                </div>
              )}
            </div>
          </motion.div>
      )}
    </div>
  );
};

export default Crew;
