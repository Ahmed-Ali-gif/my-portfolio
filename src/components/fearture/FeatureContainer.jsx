import React from "react";
import FeatureBox from "./FeatureBox";

const FeatureContainer = () => {
  return (
    <div className="px-10 py-4 bg-[#0B1120]">
      <h3 className="text-[13px] font-semibold leading-[100%] bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent py-2">
        FEATURED WORK
      </h3>
      <h2 className="font-semibold text-2xl">Selected Projects</h2>
      <p className="text-lg text-[#A1A1AA] w-96 py-2">
        A collection of project focous on clean UI, performance and real-world
        usability
      </p>
      <FeatureBox />
    </div>
  );
};

export default FeatureContainer;
