import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaRocket,
} from "react-icons/fa";

const journeyData = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Began learning HTML and CSS and built my first web pages.",
    icon: <FaHtml5 />,
  },
  {
    year: "2024",
    title: "Learned JavaScript",
    description:
      "Created interactive websites and understood programming fundamentals.",
    icon: <FaJs />,
  },
  {
    year: "2025",
    title: "React & Tailwind",
    description:
      "Started building responsive and reusable UI components.",
    icon: <FaReact />,
  },
  {
    year: "2025",
    title: "Real World Projects",
    description:
      "Built portfolio projects and improved problem-solving skills.",
    icon: <FaRocket />,
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-28 px-6 relative overflow-hidden"
    >
      <div className="absolute left-0 top-20 w-40 h-40 bg-purple-500/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 bottom-20 w-40 h-40 bg-violet-500/10 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            My Path
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My
            <span className="text-purple-400">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A timeline of my learning path and growth as a
            frontend developer.
          </p>
        </div>
        <div className="relative">
          <div
            className="
            hidden md:block
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-1
            h-full
            bg-purple-500/30
            "
          />
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`
              relative
              flex
              items-center
              mb-12
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }
              `}
            >
              <div
                className="
                w-full
                md:w-[45%]
                bg-[#111827]
                border
                border-purple-500/20
                rounded-3xl
                p-6
                hover:border-purple-500/50
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="
                    text-3xl
                    text-purple-400
                    "
                  >
                    {item.icon}
                  </div>

                  <span className="text-purple-400 font-semibold">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
              <div
                className="
                hidden md:flex
                absolute
                left-1/2
                -translate-x-1/2
                w-5
                h-5
                rounded-full
                bg-purple-500
                border-4
                border-[#0B0F19]
                "
              />
            </div>
          ))}
        </div>
        <div
          className="
          mt-12
          bg-[#111827]
          border
          border-purple-500/20
          rounded-3xl
          p-8
          text-center
          "
        >
          <h3 className="text-3xl font-bold mb-4">
            What's Next?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuing to improve my React skills, learning
            Next.js, building larger applications, and exploring
            modern frontend technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;