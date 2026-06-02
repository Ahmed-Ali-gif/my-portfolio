import React from "react";
import { BsMenuUp } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import Button from "../ui/Button";
import { MdFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Icons from "../ui/Icons";

const HeroText = () => {
  return (
    <div>
      <div className="flex gap-2 text-xs items-center border border-[rgba(255,255,255,0.08)] rounded-2xl px-2 py-1 my-2 w-[16rem]">
        <GoDotFill />
        <span>Frontend Developer</span>
        <span>
          <LuDot />
        </span>
        <span>React Spacialist</span>
      </div>
      <div>
        <h1 className="text-[#FFFFFF] font-bold text-7xl tracking-tight leading-[95%] w-[38rem]">
          I build mordern, high-performance web{" "}
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            experiences.
          </span>
        </h1>
        <p className=" font-medium text-xl leading-[180%] w-[26.99rem] py-5 text-[#A1A1AA]">
          Frontened developer on React, TailwindCSS, creating responsive
          interfaces with modern UX.
        </p>
        {/* button div  */}
        <div className="flex gap-4 items-center">
          <Button
            title="View projects"
            className="px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-lg font-semibold leading-[100%]"
          />
          <Button
            title="Download CV"
            icon={MdFileDownload}
            className="px-4 py-3 text-lg font-semibold leading-[100%] border-2 border-[rgba(255,255,255,0.08)]"
          />
        </div>
      </div>
      <div className="py-4 flex gap-2 items-center">
        <Icons icon={<FaGithub />} />
        <Icons icon={<LuLinkedin />} />
        <Icons icon={<FaTwitter />} />
        <Icons icon={<AiFillMessage />} />
      </div>
    </div>
  );
};

export default HeroText;
