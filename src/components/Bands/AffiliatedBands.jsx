import { Facebook, Instagram, Music } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AffiliatedBands = () => {
  return (
    <div className="my-16 text-neutral-200">
      <div className="text-heading">Affiliated Bands</div>
      <div className="bg-neutral-800 relative p-3 gap-3 flex flex-col w-full h-full my-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-fit flex justify-between p-3 rounded-lg w-full  bg-neutral-700 "
          >
            <div className=" font-extralight">Body Prison</div>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@aisamsonreal"
                target="_blank"
              >
                <Instagram
                  href="https://www.youtube.com/@aisamsonreal"
                  width={20}
                />
              </a>
              <Facebook width={20} />
              <Music width={20} />
            </div>
          </div>
        ))}
        <Link to={'/bands'} className="h-[50px] bg-transparent/10 backdrop-blur-md border-t-[0.5px] cursor-pointer border-white z-10 w-full bottom-0 left-0 flex absolute items-center justify-center text-white">
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default AffiliatedBands;
