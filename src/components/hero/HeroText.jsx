import React from "react";
import { BsMenuUp } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import Button from "../ui/Button";
// import { MdFileDownload } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import Icons from "../ui/Icons";
import { NavLink } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-2 text-xs items-center border border-[rgba(255,255,255,0.08)] rounded-2xl px-2 py-1 my-2 w-[16rem]">
        <GoDotFill />
        <span>Frontend Developer</span>
        <span>
          <LuDot />
        </span>
        <span>React Spacialist</span>
      </div>
      <div>
        <h1 className="text-[#FFFFFF] font-bold text-[clamp(3rem,5vw,4.5rem)] tracking-tight leading-[95%] sm:w-[30rem] lg:w-[38rem]">
          I build mordern, high-performance web
          <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
            experiences.
          </span>
        </h1>
        <p className=" font-medium text-[(.8rem,2vw,1.8rem)] leading-[180%] sm:w-[21.99rem] md:w-[26.99rem] lg:w-[26.99rem] py-5 text-[#A1A1AA]">
          Frontened developer on React, TailwindCSS, creating responsive
          interfaces with modern UX.
        </p>
        <div className="flex gap-4 items-center">
          <Button
            title="View projects"
            icon={<FaLocationArrow />}
            className="px-3 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-lg font-semibold leading-[100%] hover:border-purple-500
             transition-all"
            path="project"
            view="view project"
          />
          {/* <NavLink to="/CV.pptx"
          
            Download CV
            download=""
            icon={}
            className="px-3 py-3 text-lg font-semibold leading-[100%] border-2 border-[rgba(255,255,255,0.08)]"
          /> */}
          <a
            href="/CV.pptx"
            download
            className="
             inline-flex
             items-center
             gap-2
             px-4
             py-3
             text-lg
             font-semibold
             border-2
             border-white/10
             rounded-lg
             hover:border-purple-500
             transition-all
  "
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
      <div className="py-4 flex gap-2 items-center">
        <Icons
          title="Github"
          path="https://github.com/Ahmed-Ali-gif"
          icon={<FaGithub />}
        />
        <Icons
          title="Linkedin"
          path="https://www.linkedin.com/in/ahmed-ali-4791423b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          icon={<LuLinkedin />}
        />
        <Icons
          title="X"
          path="https://x.com/SheikhB60668"
          icon={<FaTwitter />}
        />
        <Icons title="Message" path="" icon={<AiFillMessage />} />
      </div>
    </div>
  );
};

export default HeroText;
