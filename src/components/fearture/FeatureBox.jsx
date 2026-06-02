import React from "react";
import FeatureText from "./FeatureText";
import FeatureImg from "./FeatureImg";
import img from "../../assets/people.jpg";

const FeatureBox = () => {
  return (
    <div className="py-4">
      <div className="flex flex-row-reverse items-center justify-around border border-[rgba(255,255,255,0.08)] rounded-2xl py-4 my-2 bg-[rgba(255,255,255,0.06)] ">
        <FeatureText
          heading="Fintach-Finance-Dashboared"
          para=" A mordern finanace dashboared to track income, expenses with finainacial
        building"
        />
        <FeatureImg feature_Img={img} />
      </div>
      <div className="flex items-center justify-around border border-[rgba(255,255,255,0.08)] rounded-2xl py-4 my-2 bg-[rgba(255,255,255,0.06)]">
        <FeatureText
          heading="Shoppify-E-Commerce-Store"
          para=" A mordern finanace dashboared to track income, expenses with finainacial
        building"
        />
        <FeatureImg feature_Img={img} />
      </div>
      <div className="flex flex-row-reverse items-center justify-around border border-[rgba(255,255,255,0.08)] rounded-2xl py-4 my-2 bg-[rgba(255,255,255,0.06)]">
        <FeatureText
          heading="Ai Analyzer"
          para=" A mordern finanace dashboared to track income, expenses with finainacial
        building"
        />
        <FeatureImg feature_Img={img} />
      </div>
    </div>
  );
};

export default FeatureBox;
