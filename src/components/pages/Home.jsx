import React from "react";
import HeroBox from "../hero/HeroBox";
import SkillBox from "../skillcontainer/SkillBox";
import FeatureContainer from "../fearture/FeatureContainer";
import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <HeroBox />
      <SkillBox />
      <FeatureContainer />
      {/* Nav direction */}
     
    </div>
  );
};

export default Home;
