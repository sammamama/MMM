'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
// import bgbg from '@/public/bgrmvinv.png'
import fgbg from '@/public/realfg1.png'
import bgbg from '@/public/realbg1.png'
import logo from '@/public/logonobg.png'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events to create parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background animation - slowest movement
  const bgAnimation = useSpring({
    transform: `translateY(${scrollY * -0.1}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  // Logo animation - medium movement
  const logoAnimation = useSpring({
    transform: `translateY(${scrollY * 0.3}px)`,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  // Foreground animation - fastest movement
  const fgAnimation = useSpring({
    transform: `translateY(${scrollY * -0.2}px)`,
    config: { mass: 1, tension: 210, friction: 20 }
  });

  return (
    <div className="h-[200vh] ">
    <div className="overflow-hidden h-[100vh]">

    <div className="relative overflow-hidden bg-black h-[100vh] text-white">    
      {/* Background layer - moves slowest for depth */}
      <animated.div style={bgAnimation} className="absolute w-full">
        <Image
          src={bgbg}
          alt="Background"
          className="w-full opacity-50"
        />
      </animated.div>

      {/* Logo layer - moves at medium speed and gets covered by foreground */}
      <div className="w-full h-full flex justify-center md:items-center">
        <animated.div style={logoAnimation} className="absolute w-[40%]">
          <Image 
            src={logo}
            alt="logo"
            className="w-full"
          />
        </animated.div>
      </div>

      {/* Foreground layer - moves fastest for more dramatic effect */}
      <animated.div style={fgAnimation} className="absolute z-10 -top-5 w-full ">
        <Image
          src={fgbg}
          alt="Foreground"
          className="w-full "
        />
      </animated.div>
    </div>
    </div>

    </div>
  );
}