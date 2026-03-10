import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-row pt-[20vh] pl-[5vw] items-left h-screen">
      <div className="flex justify-start flex-col w-1/2 gap-5 z-50 pr-10">
        <p className="text-orange text-lg font-bold">
          Trending Collection 2026
        </p>
        <h1 className="text-slate-900 text-8xl font-buenard font-bold">
          Dreamwear
        </h1>
        <h1 className="text-slate-900 text-8xl font-buenard font-bold">
          Collection
        </h1>
        <p className="max-w-sm">
          Inspired by your fashion dreams, our trending collection brings the
          latest styles to life.
        </p>

        <a className="flex justify-center items-center gap-3 bg-orange px-4 py-3 w-40 text-center font-bold text-white rounded-full">
          Shop Now{" "}
          <span className="">
            <img src={assets.chevron} alt="chevron" />
          </span>
        </a>
      </div>
      <div className="w-1/2 absolute left-[57vw]">
        <div className="w-2/3 aspect-square bg-[#F8D0D2] rounded-full relative">
        <img className=" object-cover h-full rounded-full" src={assets.durefishan} alt="durefishan" />

          <div className="w-[40px] aspect-square bg-[#000000] rounded-full absolute right-[10%] top-[10%]">
          </div>
          <div className="w-[40px] aspect-square bg-[#FE005E] rounded-full absolute left-[10%] bottom-[10%]"></div>
          <div className="w-[29px] aspect-square bg-[#47D366] rounded-full absolute left-[-5%] top-[-20%]"></div>
          <div className="w-[21px] aspect-square bg-[#FF6B01] rounded-full absolute left-[-10%] top-[10%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
