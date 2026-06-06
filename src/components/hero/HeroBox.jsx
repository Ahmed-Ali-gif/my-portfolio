import React from "react";
import HeroText from "./HeroText";
import HeroImg from "./HeroImg";

const HeroBox = () => {
  return (
    <>
    <main className="bg-[#0B1120] text-[#FFFF] mt-20 ">
      <section className="flex flex-col-reverse md:flex-row lg:flex-row justify-between mx-10 mt-3 py-2 ">
        <HeroText />
        <HeroImg />
      </section>
    </main>
    </>
  );
};

export default HeroBox;
