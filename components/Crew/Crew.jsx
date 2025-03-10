"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { crewData } from "./crewData";
import CrewModal from "../CrewModal/CrewModal";

import './crew.css'

const Crew = () => {
  const ref = useRef(null);
  const refImg = useRef(null);

  const inView = useInView(ref, {
    triggerOnce: true,
    margin: "0px 0px 20px 0px",
  });
  const inViewImg = useInView(ref, {
    triggerOnce: true,
    margin: "0px 0px 20px 0px",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [crewMember, setCrewMember] = useState(null);

  const close = () => {
    setModalOpen(false);
    console.log(modalOpen);
  };
  const open = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };

  return (
    <div ref={ref}>
      {inView && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="text-neutral-200 font-black text-5xl mb-5"
          >
            Meet the Crew
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="font-black text-5xl mb-5"
          ></motion.div>

          <div className="relative crew-container overflow-x-scroll scrollbar-thin pb-4 scrollbar-thumb-neutral-500 scrollbar-track-gray-900 md:scrollbar-none md:overflow-hidden">
            <div className="w-fit crew-container overflow-hidden">
              <div className="flex crew-container relative md:flex-wrap gap-10  ">
                {crewData.map((data, i) => (
                  <React.Fragment key={i}>
                    {inViewImg && (
                      <motion.div
                        ref={refImg}
                                                
                        whileHover={{ scale: 1.02 }}
                        className="w-[300px] h-[500px] z-10 bg-neutral-200 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => {modalOpen ? close() : open(); setCrewMember(data)}}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative h-[80%] ">
                          <Image
                            
                            src={data.image}
                            alt="asd"
                            fill
                            className="object-cover w-full h-full"
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
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {modalOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50"
                onClick={close} // Clicking outside closes the modal
              >
                <CrewModal 
                  data={crewMember}
                />
              </div>
            )}
          </div>
        </div>
      )}
      {/* <div className=""> */}
      {/* </div> */}
    </div>
  );
};

export default Crew;
