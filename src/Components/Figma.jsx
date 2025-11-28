import React from "react";
import { FaSquareBehance } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const figmaProjects = [
  {
    title: "ToyCycle UI",
    desc: "A clean and minimal toys reselling interface designed with modern UI patterns.",
    img: "/ToyCycle.png",
    link: "YOUR_FIGMA_LINK_1",
  },
  {
    title: "Portfolio Design",
    desc: "A responsive dashboard layout focusing on clarity, typography, and spacing.",
    img: "/Portfolio.png",
    link: "YOUR_FIGMA_LINK_2",
  },
];

const Figma = () => {
  return (
    <div>
         <h2 className="text-sky-400 font-['crimson'] font-semibold text-[40px] mt-25">
          -UI/UX Designs
          <p className="text-slate-200 font-['crimson'] font-normal text-[20px] mt-10">
          I use Figma to design clean and user-friendly interfaces. Here are two featured UI/UX designs.
        </p>
        </h2>
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full px-6 py-16">     

        {/*  TWO BOXES HORIZONTALLY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {figmaProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#252C3D] border border-t-8 border-[#FACC15] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-fit transition-transform hover:scale-110 duration-500 "
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold font-['crimson'] text-sky-400">{project.title}</h3>
                <p className="text-slate-400 mt-2 text-sm">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#FACC15] hover:text-amber-400 transition"
                >
                  View on Figma <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/*  Behance Button */}
        <div className="flex justify-center mt-10">
          <a
            href="YOUR_BEHANCE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FACC15] border border-[#FACC15] hover:bg-[#FACC15] w-[200px] h-[50px] rounded-[25px] font-['crimson']
            flex justify-center items-center gap-2 transition-all duration-300
            hover:text-[#252C3D] hover:scale-105 text-lg"
          >
            View More on
            <FaSquareBehance className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
        </div>

  );
};

export default Figma;
