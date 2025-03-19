"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { crewData } from "./crewData";
import CrewModal from "../CrewModal/CrewModal";

const Crew = () => {
  const ref = useRef(null);
  const refImg = useRef(null);

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
      <div className="h-fit">
        <div className="text-heading">
          Meet the Crew
        </div>

        <div 
          className="relative overflow-x-scroll scrollbar-thin pb-4 scrollbar-thumb-neutral-500 scrollbar-track-gray-900 md:scrollbar-none md:overflow-hidden"
        >
          <div className="w-fit overflow-hidden">
            <div className="flex relative md:flex-wrap gap-10  ">
              {crewData.map((data, i) => (
                <React.Fragment key={i}>
                  {
                    <div
                      ref={refImg}
                      className="w-[300px] h-[500px] z-10 bg-neutral-200 overflow-hidden rounded-lg cursor-pointer hover:scale-[1.02]"
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
                  }
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
      </div>
    </div>
  );
};

export default Crew;
