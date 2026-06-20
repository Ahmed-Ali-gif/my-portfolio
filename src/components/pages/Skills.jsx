import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  // SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
  {
    icon: <SiFigma />,
    name: "Figma",
  },
  {
    // icon: <SiVisualstudiocode />,
    name: "VS Code",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            My Expertise
          </p>
          <h2 className="text-5xl font-bold mt-4">
            Skills & <span className="text-purple-400">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies I use to build fast, responsive and modern web
            applications.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              bg-[#111827]
              border
              border-purple-500/20
              rounded-3xl
              p-4
              hover:border-purple-500/50
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div
                className="
                text-5xl
                text-purple-400
                mb-4
                "
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
        <div
          className="
          mt-16
          bg-[#111827]
          border
          border-purple-500/20
          rounded-3xl
          p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">Currently Learning</h3>

          <div className="flex flex-wrap gap-3">
            <span className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/30">
              Advanced React
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              Next.js
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              Accessibility
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
              Performance Optimization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
