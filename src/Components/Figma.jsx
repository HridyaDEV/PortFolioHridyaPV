import React from "react";
import { FiExternalLink } from "react-icons/fi";

const figmaProjects = [
  {
    title: "Travel App UI",
    desc: "A clean and minimal travel booking interface designed with modern UI patterns.",
    img: "/travel-ui.png",
    link: "YOUR_FIGMA_LINK_1",
  },
  {
    title: "Dashboard Design",
    desc: "A responsive dashboard layout focusing on clarity, typography, and spacing.",
    img: "/dashboard-ui.png",
    link: "YOUR_FIGMA_LINK_2",
  },
];

const Figma = () => {
  return (
    <div className="w-full flex justify-center">
      {/* Matches EXACLY with your Projects section */}
      <div className="max-w-6xl w-full px-6 py-16">

        <h2 className="text-[40px] font-['crimson'] text-sky-400 mb-6">
          -UI/UX Designs
        </h2>

        <p className="text-slate-400 mb-10 max-w-2xl">
          I use Figma to design clean and user-friendly interfaces before development.
          Here are two of my featured UI/UX designs.
        </p>

        <div className="flex flex-col gap-10">
          {figmaProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1c1f26] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col md:flex-row"
            >
              {/* Left Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* Right Text */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sky-400 hover:text-sky-300 transition font-medium"
                >
                  View on Figma <FiExternalLink className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Figma;
