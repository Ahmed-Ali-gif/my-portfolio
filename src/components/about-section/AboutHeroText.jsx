import React from "react";
import Box from "../ui/Box";
import Button from "../ui/Button";

const AboutHeroText = () => {
  return (
    <div className="text-white">
      <span>GET IN TOUCH</span>
      <h2>
        Let's Build Somthing Amazing <span>Together</span>
      </h2>
      <p>Have a project in mind or want to say hi? Feel free to reach out!</p>
      <div className="inline-block">
        <div className="flex flex-col gap-1">
          <Box icon title="Email" info="codewithme@gmail.com" />
          <Box icon title="Location" info="Pakistan" />
          <Box icon title="Availability" info="Available for freelance" />
        </div>
        <h3>let's connect on social media </h3>
        <div className="flex items-center gap-1">
          <Button className={"bg-amber-400 px-1 py-1"} title="Github"/>
          <Button className={"bg-amber-400 px-1 py-1"} title="Linkedin"/>
          <Button className={"bg-amber-400 px-1 py-1"} title="twitter"/>
          <Button className={"bg-amber-400 px-1 py-1"} title="Instagram"/>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroText;
