import React from "react";
import Button from "../ui/Button";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
const FeatureText = ({ heading, para }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold w-48">{heading}</h2>
      <p className="py-2 text-sm w-80 text-[#A1A1AA]">{para}</p>
      <div className="flex items-center mt-4 gap-2">
        <Button className="px-2 py-1 rounded-xl border" title="HTML" />
        <Button className="px-2 py-1 rounded-xl border" title="CSS" />
        <Button className="px-2 py-1 rounded-xl border" title="React js" />
        <Button className="px-2 py-1 rounded-xl border" title="Vite" />
      </div>
      <div className="flex items-center gap-2 mt-12">
          <Button
            className="px-2 py-1 rounded-xl border"
            title="Live Demo"
            icon={<FaLocationArrow />}
          />
        <Button
          className="px-2 py-1 rounded-xl border"
          title="GitHub"
          icon={<FaGithub />}
        />
      </div>
    </div>
  );
};

export default FeatureText;
