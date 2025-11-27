import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaRegCirclePlay } from 'react-icons/fa6';

const projects = [
  {
    title: "ToyCycle",
    img: "/ToyCycle.png",
    desc: "Built a full-stack web application enabling users to resell or purchase pre-owned toys, encouraging sustainable toy usage.",
    tech: "React.js, MongoDB, Node.js, Express.js, Tailwind CSS, JavaScript",
    github: "https://github.com/HridyaDEV/MainProject-ToyCycle",
    live: "https://toy-cylce-frontend-4okh.vercel.app/"
  },
  {
    title: "CivicEye",
    img: "/CivicEye.png",
    desc: "CivicEye is a web application designed to empower citizens by providing a platform for reporting and monitoring civic issues.",
    tech: "React.js, MongoDB, Node.js, Express.js, Tailwind CSS, JavaScript",
    github: "https://github.com/HridyaDEV/civic-eye",
    live: " https://civic-eye-lemon.vercel.app/"
  },
  {
    title: "WeatherApp",
    img: "/Weather.png",
    desc: "Built a responsive weather app providing real-time updates based on location or user input using an external weather API.",
    tech: "React.js, Tailwind CSS, JavaScript, Rest API",
    github: "https://github.com/HridyaDEV/softronics-react/tree/main/weather-app",
    live: "https://weatherapp-jade-beta.vercel.app/"
  },
  {
    title: "MovieApp",
    img: "/Movie.png",
    desc: "Created an interactive movie app that fetches and displays movie data using an external API. Users can search, view details, and save their favorite movies.",
    tech: "React.js, Tailwind CSS, Rest API",
    github: "https://github.com/HridyaDEV/CiniHub-MovieApp",
    live: "https://cini-hub-movie-app.vercel.app/"
  },
    {
    title: "Portfolio",
    img: "/Class.png",
    desc: "Engineered a web-based platform to streamline library tasks like pre-booking, issuing, and fine tracking. Integrated with tools like phpMyAdmin and XAMPP.",
    tech: "Java, HTML, CSS, XAMPP",
    github: "",
    live: ""
  },
   {
    title: "Class Here",
    img: "/Class.png",
    desc: "Developed an innovative e-learning application using machine learning to predict individual learning styles. Enhanced user experience with CSS and Java, leveraging tools like Android Studio and Firebase.",
    tech: "Java, CSS, Android Studio, Firebase",
    github: "",
    live: ""
  },
 
   {
    title: "Library Mangement System",
    img: "/Class.png",
    desc: "Engineered a web-based platform to streamline library tasks like pre-booking, issuing, and fine tracking. Integrated with tools like phpMyAdmin and XAMPP.",
    tech: "Java, HTML, CSS, XAMPP",
    github: "",
    live: ""
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div>
      <h1 className="text-sky-400 font-['crimson'] font-semibold text-[40px] mt-25">
        -Projects
      </h1>

      <div className="flex justify-center flex-wrap gap-15 mt-20">
        {visibleProjects.map((p, index) => (
          <div
            key={index}
            className="w-[359px] border border-sky-400 bg-slate-900 rounded-xl p-5 flex flex-col
           transition-all duration-500 hover:scale-[1.05] hover:border-sky-400 
           hover:shadow-[0_0_30px_#38bdf8] hover:-translate-y-2"
          >
            <h1 className="text-center text-sky-400 font-['crimson'] text-[22px]
            transition-all duration-300 hover:text-[#FACC15] ">
              {p.title}
            </h1>

            <div className="flex justify-center mt-4">
              <img
                src={p.img}
                alt={p.title}
                className="h-[146px] w-[302px] rounded-md object-cover 
                transition-all duration-700 hover:scale-110 hover:brightness-110"
              />
            </div>

            <p className="mt-3 text-slate-200 font-['crimson'] text-[17px] leading-[22px]">
              {p.desc}
            </p>

            <p className="font-bold text-slate-200 mt-3 text-[17px] font-['crimson']">
              Technologies:{" "}
              <span className="font-light text-[13px] transition-colors duration-300 hover:text-[#FACC15]">
                {p.tech}
              </span>
            </p>

            <div className="flex justify-between items-center mt-5">

  {/* GitHub Button */}
  {p.github ? (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#FACC15] bg-[#252C3D] w-[140px] h-[37px] rounded-[20px] border border-[#FACC15] font-['crimson']
      flex justify-center items-center gap-2 transition-all duration-300 
      hover:bg-[#FACC15] hover:text-[#252C3D] hover:scale-105"
    >
      <span>Repository</span>
      <FaGithub className="w-5 h-5" />
    </a>
  ) : (
    <button
      disabled
      className="w-[140px] h-[37px] rounded-[20px] border border-gray-500 
      bg-gray-700 text-gray-400 font-['crimson'] flex justify-center items-center gap-2 
      cursor-not-allowed"
    >
      <span>Repository</span>
      <FaGithub className="text-gray-400 w-5 h-5" />
    </button>
  )}

  {/* Live Demo Button */}
  {p.live ? (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#252C3D] bg-[#FACC15] w-[140px] h-[37px] rounded-[20px] font-['crimson']
      flex justify-center items-center gap-2 transition-all duration-300
      hover:bg-[#252C3D] hover:text-[#FACC15] hover:scale-105"
    >
      <span>Demo</span>
      <FaRegCirclePlay size={20} />
    </a>
  ) : (
    <button
      disabled
      className="w-[140px] h-[37px] rounded-[20px] border border-gray-500 
      bg-gray-700 text-gray-400 font-['crimson'] flex justify-center items-center gap-2 
      cursor-not-allowed"
    >
      <span>Demo</span>
      <FaRegCirclePlay size={20} className="text-gray-400" />
    </button>
  )}

</div>

          </div>
        ))}
      </div>

    {showAll ? (
  <div className="flex justify-center mt-15">
    <button
      onClick={() => setShowAll(false)}
      className="border border-sky-400 w-[165px] h-[62px] px-2 py-1
      font-['crimson'] rounded-[20px]
      hover:bg-sky-400 hover:text-slate-900 transition
      text-sky-400 hover:scale-105"
    >
      Hide Projects
    </button>
  </div>
) : (
  <div className="flex justify-center mt-15">
    <button
      onClick={() => setShowAll(true)}
      className="border border-[#FACC15] w-[165px] h-[62px] px-2 py-1
      font-['crimson'] rounded-[20px]
      hover:bg-[#FACC15] hover:text-slate-900 transition
      text-[#FACC15] hover:scale-105"
    >
      View All Projects
    </button>
  </div>
)}

    </div>
  );
};

export default Projects;
