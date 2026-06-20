import React from "react";
import myImage from "../../assets/mypic.png";

const AboutHeroBox = () => {
  return (
    <section id="about" className="py-4 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />
      <div className="text-left mb-4">
        <p className="text-purple-400 uppercase tracking-widest text-sm">
          About Me
        </p>
        <h2 className="text-5xl leading-14 font-bold mt-4 w-[40.5rem]">
          Frontend Developer Crafting
          <span className="text-purple-400 pl-2">Digital Experiences</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-400 text-lg leading-relaxed">
            Hi, I'm Ahmed Ali, a frontend developer passionate about building
            responsive, modern and user-friendly web applications.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I specialize in React, JavaScript and Tailwind CSS. My goal is to
            create clean interfaces that provide a smooth user experience across
            all devices.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            I continuously improve my skills through real-world projects,
            exploring accessibility, performance optimization and modern
            frontend practices.
          </p>
          <div className="flex justify-center items-center block w-full">
            <button
              className="
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-violet-600
              hover:scale-105
              transition-all
              "
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="
              relative
              border
              border-purple-500/20
              rounded-3xl
              overflow-hidden
              bg-[#111827]
              p-4
              "
          >
            <img
                src={myImage}
                alt="Ahmed Ali"
                className="
                w-[320px]
                rounded-2xl
                object-cover
                "
              />

            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-purple-500/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[
          { number: "12+", title: "Projects Built" },
          { number: "1+", title: "Years Learning" },
          { number: "6+", title: "Technologies" },
          { number: "∞", title: "Curiosity" },
        ].map((item, index) => (
          <div
            key={index}
            className="
              bg-[#111827]
              border
              border-purple-500/20
              rounded-3xl
              px-2 py-1
              text-center
              hover:border-purple-500/50
              transition-all
              "
          >
            <h3 className="text-4xl font-bold text-purple-400">
              {item.number}
            </h3>

            <p className="text-gray-400 mt-2">{item.title}</p>
          </div>
        ))}
      </div>
      <div
        className="
          mt-8
          bg-[#111827]
          border
          border-purple-500/20
          rounded-3xl
          p-8
          "
      >
        <h3 className="text-2xl font-bold mb-6">Technologies I Work With</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                border
                border-purple-500/30
                text-purple-300
                "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHeroBox;
