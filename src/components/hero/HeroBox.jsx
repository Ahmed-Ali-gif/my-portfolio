import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const HeroBox = () => {
  return (
    <>
    <main className="bg-[#0B1120] text-[#FFFF]">
      <section className="flex justify-between mx-10 mt-3 py-2 ">
        <HeroText />
        <HeroImg />
      </section>
    </main>
    </>
  );
};

export default HeroBox;
