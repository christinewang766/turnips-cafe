'use client';
import React from "react";
import Image from "next/image";
import pigIcon from "../public/pig.svg";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 w-full bg-white border-[18px] border-black h-auto flex justify-between">
      <button className="text-black font-poe text-[50px] pl-3" onClick={scrollToTop}>
        TURNIPS CAFE
      </button>
      <button className="align-middle border-black border-l-[18px] pl-3 pr-3">
        <Image src={pigIcon} alt="SVG pig" />
      </button>
    </div>
  );
};

export default Navbar;
