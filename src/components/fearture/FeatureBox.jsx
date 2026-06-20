import React from "react";
import FeatureText from "./FeatureText";
import FeatureImg from "./FeatureImg";
import movieimg from "../../assets/movie-cover.png";
import convertor from "../../assets/convertor.png";
import recipe from "../../assets/recipe-app.jpeg";

const FeatureBox = () => {
  const features = [
    {
      heading: "Movie Explorer",
      para:
        "A modern and responsive movie discovery web application built with React and Tailwind CSS.",
      img: movieimg,
      liveLink: "https://ahmed-ali-gif.github.io/MovieExplorer/",
      githubLink: "https://github.com/Ahmed-Ali-gif/MovieExplorer",
      tech: ["React", "Tailwind", "TMDB API"],
      reverse: false,
    },
    {
      heading: "Recipe App",
      para:
        "Browse and discover delicious recipes with an elegant, responsive interface.",
      img: recipe,
      liveLink: "https://recipe-app-khaki-xi.vercel.app/",
      githubLink: "https://github.com/Ahmed-Ali-gif/Recipe-App",
      tech: ["React", "API", "Tailwind"],
      reverse: true,
    },
    {
      heading: "Currency Converter",
      para:
        "Convert currencies in real time with live exchange rates using a fast interface.",
      img: convertor,
      liveLink: "https://ahmed-ali-gif.github.io/Currency-Converter/",
      githubLink: "https://github.com/Ahmed-Ali-gif/Currency-Converter",
      tech: ["React", "API", "JS"],
      reverse: false,
    },
  ];

  return (
    <article className="py-4">
      {features.map((item, index) => (
        <section
          key={index}
          className={`flex flex-col sm:px-4 sm:py-4 md:flex-row items-center justify-around border border-[rgba(255,255,255,0.08)] rounded-2xl py-4 my-2 bg-[rgba(255,255,255,0.06)] ${
            item.reverse ? "md:flex-row-reverse lg:flex-row-reverse" : ""
          }`}
        >
          <FeatureText
            heading={item.heading}
            para={item.para}
            liveLink={item.liveLink}
            githubLink={item.githubLink}
            tech={item.tech}
          />

          <FeatureImg feature_Img={item.img} />
        </section>
      ))}
    </article>
  );
};

export default FeatureBox;