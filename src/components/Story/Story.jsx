"use client";

import React, { useRef } from "react";

const Story = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="my-16">
      <div>
        <div>
          <div className="text-heading">
            Our Story
          </div>
          <div className="text-content">
            Welcome to Melbourne Metal Mates, where we welcome in fans of metal
            to meet others in the community, make mates and seek gig buddies!
            Here you will find some of the best bands in the Melbourne Metal
            scene and join a bright community of like-minded individuals. Our
            goal in MMM is to welcome in fans of metal (all genres and
            sub-genres!) with open arms, to make going to gigs and meeting mates
            less daunting, and to most importantly, have fun and experience all
            the Melbourne Metal Scene has to offer!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
