import { Facebook, Instagram, Music } from "lucide-react";
import Link from "next/link";
import React from "react";

const AffiliatedBands = () => {
  return (
    <div className="my-7 text-neutral-200">
      <div className="text-heading">Affiliated Bands</div>
      <div className="bg-neutral-800 relative p-3 gap-3 flex flex-col w-full h-full my-2">
        {Array.from({ length: 4 }).map((i) => (
          <div className="h-fit flex justify-between p-3 rounded-lg w-full  bg-neutral-700 ">
            <div className=" font-extralight">Body Prison</div>
            <div className="flex gap-3">
              <Link
                href="https://www.youtube.com/@aisamsonreal"
                target="_blank"
              >
                <Instagram
                  href="https://www.youtube.com/@aisamsonreal"
                  width={20}
                />
              </Link>
              <Facebook width={20} />
              <Music width={20} />
            </div>
          </div>
        ))}
        <div className="h-[50px] bg-transparent/10 backdrop-blur-md border-t-[0.5px] border-white z-10 w-full bottom-0 left-0 flex absolute items-center justify-center text-white">Explore more</div>
      </div>
    </div>
  );
};

export default AffiliatedBands;
