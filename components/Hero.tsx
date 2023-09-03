'use client';
import React from 'react'
import Image from "next/image";
import heroPig from "../public/heroPig.png";
import useWindowDimensions from './WindowDimensions';

const Hero = () => {
  const { height } = useWindowDimensions();

  return (
    <div className='hero'>
        <div className="hero__fire">
          {/* HEIGHT = TAB HEIGHT - NAVBAR HEIGHT - 10 */}
          <div className="flex justify-center h-[100vh]">
        <Image className='self-end' src={heroPig} alt="popcorn pig" height={height-120} />
        </div>
        </div>
    </div>
  )
}

export default Hero