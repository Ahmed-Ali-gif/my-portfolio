import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const HeroBox = () => {
  return (
    <div className="bg-[#0B1120] text-[#FFFF]">
      <div className="flex justify-between mx-10 mt-3 py-2 ">
        <HeroText />
        <HeroImg />
      </div>
    
    </div>
  );
};

export default HeroBox;
