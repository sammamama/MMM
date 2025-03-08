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
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle scroll events to create parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate parallax speed based on screen size
  const getParallaxSpeed = () => {
    // Reduce parallax effect on smaller screens
    return windowWidth < 768 ? 0.5 : 1;
  };

  // Background animation - slowest movement
  const bgAnimation = useSpring({
    transform: `translateY(${scrollY * -0.1 * getParallaxSpeed()}px)`,
    config: { mass: 1, tension: 120, friction: 14 }
  });

  // Logo animation - medium movement
  const logoAnimation = useSpring({
    transform: `translateY(${scrollY * 0.3 * getParallaxSpeed()}px)`,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  // Foreground animation - fastest movement
  const fgAnimation = useSpring({
    transform: `translateY(${scrollY * -0.2 * getParallaxSpeed()}px)`,
    config: { mass: 1, tension: 210, friction: 20 }
  });

  return (
    <div className="h-[200vh]">
      <div className="overflow-hidden h-screen">
        <div className="relative overflow-hidden bg-black h-screen text-white">    
          {/* Background layer - moves slowest for depth */}
          <animated.div style={bgAnimation} className="absolute inset-0 w-full h-full">
            <Image
              src={bgbg}
              alt="Background"
              className="w-full h-full object-cover opacity-50"
              priority
            />
          </animated.div>

          {/* Logo layer - centered properly for all screen sizes */}
          <div className="absolute inset-0 w-full h-full flex justify-center top-30 md:top-10">
            <animated.div style={logoAnimation} className="w-full max-w-[80%] sm:max-w-[60%] md:max-w-[40%]">
              <Image 
                src={logo}
                alt="logo"
                className="w-full h-auto"
                priority
              />
            </animated.div>
          </div>

          {/* Foreground layer - moves fastest for more dramatic effect */}
          <animated.div style={fgAnimation} className="absolute inset-0 z-10 w-full h-full">
            <Image
              src={fgbg}
              alt="Foreground"
              className="w-full h-full object-cover"
              priority
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
}