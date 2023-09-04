import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="fixed flex mt-[110px] w-[400px] h-[70%] items-center justify-center bg-black border-hot-pink border-[18px] z-50 ">
        <div className="flex flex-col h-[100%] w-[100%] items-center justify-center p-7">
          <div className="flex flex-col items-center justify-center w-[320px] h-[100%] bg-black rounded-lg border-white border-[10px]">
            <Image
              src={profile}
              alt="profile"
              className="mt-8 w-[130px] h-[130px] rounded-full border-[10px] border-white"
            />

            <h1 className="text-[30px] p-3 font-poe text-hot-pink">
              I'm Christine!
            </h1>

            <hr className="w-full border-solid border-t-[10px] border-white" />

            <p className="p-6 font-poe text-[16px] text-justify text-white">
              I like to complain and eat (often both at the same time). Thus,
              this review blog was born! Enjoy my ramblings and petty thoughts.
              Or don’t. You live your own life. Stay Golden. xoxo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
