import React from "react";
import SkillImg from "./SkillImg";
import html from "../../assets/HTML.png";
import TailwindCSS from "../../assets/TailwindCSS.png";
import JSImg from "../../assets/JS.png";
import ReactImg from "../../assets/React.png";
import CSS_pic from "../../assets/CSS-pic.png";
import git from "../../assets/git-pic.png";
const SkillBox = () => {
  return (
    <div className="px-2 py-2 bg-[#0B1120] text-[#FFFF] my-4 overflow-hidden">
      <p className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent text-lg font-semibold tracking-tighter uppercase">
        TECHNOLOGIES I WORK WITH
      </p>
      <div className="flex gap-2 items-center py-2">
        <SkillImg img={html} />
        <SkillImg className="w-40 block" img={CSS_pic} />
        <SkillImg img={TailwindCSS} />
        <SkillImg img={JSImg} />
        <SkillImg img={ReactImg} />
        <SkillImg img={git} />
      </div>
    </div>
  );
};

export default SkillBox;
