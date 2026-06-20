import React from "react";
import Button from "../ui/Button";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const FeatureText = ({ heading, para, liveLink, githubLink, tech = [] }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold w-48 px-2">{heading}</h2>

      <p className="py-2 text-sm w-80 text-[#A1A1AA] px-2">{para}</p>

      <div className="flex items-center mt-4 gap-2 flex-wrap">
        {tech.map((item, index) => (
          <Button
            key={index}
            className="px-2 mx-2 py-1 rounded-xl border"
            title={item}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-12">
        <Button
          className="px-2 mx-2 py-1 rounded-xl border"
          title="Live Demo"
          icon={<FaLocationArrow />}
          path={liveLink}
        />

        <Button
          className="px-2 mx-2 py-1 rounded-xl border"
          title="GitHub"
          icon={<FaGithub />}
          path={githubLink}
        />
      </div>
    </div>
  );
};

export default FeatureText;