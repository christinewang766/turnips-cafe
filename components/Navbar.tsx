"use client";
import React, { useState } from "react";
import Image from "next/image";
import pigIcon from "../public/pig.svg";
import turnipIcon from "../public/turnip.svg";

// NAVBAR HEIGHT IS 110px
const Navbar = (props: { toggle: () => void }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [hoverPig, setHoverPig] = useState(0.001);

  return (
    <>
      <div className="fixed top-0 w-full bg-white border-[18px] border-black h-auto flex justify-between z-50">
        <button
          className="text-black font-poe text-[50px] pl-3 transition ease-in-out duration-300 hover:text-hot-pink"
          onClick={scrollToTop}
        >
          TURNIPS CAFE
        </button>
        <button
          className="align-middle bg-white border-black border-l-[18px] pl-3 pr-3 transition ease-in-out duration-300 hover:bg-hot-pink"
          onMouseEnter={() => setHoverPig(55)}
          onMouseLeave={() => setHoverPig(0.001)}
        >
          <Image
            width={hoverPig > 0.001 ? 0.001 : 0}
            src={pigIcon}
            alt="SVG pig"
          />
          <Image width={hoverPig} src={turnipIcon} alt="SVG turnip" />
        </button>
      </div>
      <button
        className="fixed mt-[110px] align-middle bg-black border-hot-pink border-[18px] pl-4 pr-5 font-poe text-[40px] text-white z-50 transition ease-in-out duration-300 hover:bg-hot-pink hover:border-white hover:text-black"
        onClick={props.toggle}
      >
        C
      </button>
    </>
  );
};

export default Navbar;
