import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Button from "../ui/Button";
import { BsArrowsAngleExpand } from "react-icons/bs";
const NavBox = () => {
  return (
    <div className="flex justify-between items-center py-2 px-10 text-white bg-[#0B1120] fixed top-0 left-0 w-full z-50">
      <Logo />
      <NavBar />
      <Button
        title=" Let's Talk"
        icon={<BsArrowsAngleExpand />}
        className=
          "px-4 py-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-semibold leading-[100%]"
      />
  </div>
  );
};

export default NavBox;
