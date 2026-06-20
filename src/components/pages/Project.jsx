import React from "react";
import movieCover from "../../assets/movie-cover.png";
import recipeApp from "../../assets/recipe-app.jpeg";
import convertor from "../../assets/convertor.png";
const projects = [
  {
    title: "Movie Explorer",
    description:
      "A modern movie discovery platform built with React and Tailwind CSS.",
    image: movieCover,
    tags: ["React", "Tailwind", "TMDB API"],
    liveLink: "https://ahmed-ali-gif.github.io/MovieExplorer/",
    githubLink: "https://github.com/Ahmed-Ali-gif/MovieExplorer",
  },
  {
    title: "Recipe App",
    description:
      "A modern recipe discovery application where users can search and explore delicious recipes with a clean and responsive UI.",
    image: recipeApp,
    tags: ["React", "Tailwind CSS", "API"],
    liveLink: "https://recipe-app-khaki-xi.vercel.app/",
    githubLink: "https://github.com/Ahmed-Ali-gif/Recipe-App",
  },
  {
    title: "FinDash",
    description:
      "A finance dashboard for tracking income, expenses and analytics.",
    image: convertor,
    tags: ["React", "Chart.js", "Tailwind"],
    liveLink: "https://ahmed-ali-gif.github.io/Currency-Converter/",
    githubLink: "https://github.com/Ahmed-Ali-gif/Currency-Converter/tree/main",
  },
];

const Project = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            My Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Here are some of the projects I've built with modern technologies
            and clean UI principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="
                bg-[#0f172a]
                border
                border-purple-500/20
                rounded-3xl
                overflow-hidden
                hover:scale-105
                hover:border-purple-500/50
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="
                    w-full
                    h-40
                    object-cover
                    hover:scale-110
                    transition-all
                    duration-500
                  "
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        bg-purple-500/10
                        border
                        border-purple-500/30
                        text-purple-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2
                        rounded-full
                        bg-purple-500
                        hover:bg-purple-600
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5
                        py-2
                        rounded-full
                        border
                        border-gray-700
                        hover:border-purple-500
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
