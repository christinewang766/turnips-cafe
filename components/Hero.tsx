'use client';
import React from 'react'
import Image from "next/image";
import heroPig from "../public/heroPig.png";
import useWindowDimensions from './WindowDimensions';
import Disclaimer from './Disclaimer';

const Hero = () => {
  const [width, height] = useWindowDimensions();

  return (
    <div className='hero'>
        <div className="hero__fire">
          <div className="flex justify-center h-[100vh]">
        <Disclaimer />
          {/* HEIGHT = TAB HEIGHT - NAVBAR HEIGHT - 20 */}
        <Image priority={true} className='self-end pb-5 z-10' src={heroPig} alt="popcorn pig" height={height-130} />
        </div>
        </div>
    </div>
  )
}

export default Hero