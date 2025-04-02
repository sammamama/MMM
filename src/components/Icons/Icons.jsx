import React from "react";

import insta from "/insta.png";
import fb from "/fb.png";
import gmail from "/gmail.png";
import spotify from "/spotify.png";

const Icons = () => {
  return (
    <div className="flex justify-center gap-x-5 md:gap-x-20 cursor-pointer contrast-150 brightness-75  text-content items-center">
      <a href={"https://www.instagram.com/melbmetalmates/"} className="z-40">
        <img src={insta} width={55} height={55} className="p-2  sm:p-0" alt="Instagram Metal Mates" />
      </a>
      <a
        href={"https://www.facebook.com/groups/251553577979584"}
        className="z-40"
      >
        <img src={fb} width={50} height={50} className="p-2 sm:p-0" alt="Facebook Metal Mates"/>
      </a>
      <a
        href={"https://www.facebook.com/groups/251553577979584"}
        className="z-40"
      >
        <img src={gmail} width={65} height={65} className="p-2 sm:p-0" alt="Gmail Metal Mates" />
      </a>

      <a
        href={"https://www.facebook.com/groups/251553577979584"}
        className="z-40"
      >
        <img src={spotify} width={50} height={50} className="p-2 sm:p-0" alt="Spotify Metal Mates" />
      </a>
    </div>
  );
};

export default Icons;
