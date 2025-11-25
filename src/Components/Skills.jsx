import React, { useState } from "react";
import {FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGitAlt,FaGithub} from "react-icons/fa";

import {SiJavascript,SiTailwindcss,SiBootstrap,SiExpress,SiFigma,SiMongodb,SiVite,SiPostman,SiVercel,SiC,SiCanva} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";


const Skills = () => {
    const categories = ["All", "Frontend", "Backend", "Languages", "Designing", "Database", "Tools"];

    const skills = [
        // ------------------ Frontend ------------------
        { name: "HTML", category: "Frontend", icon: <FaHtml5 size={41} className=" text-orange-500" /> },
        { name: "CSS", category: "Frontend", icon: <FaCss3Alt size={41} className=" text-blue-500" /> },
        { name: "React", category: "Frontend", icon: <FaReact size={41} className=" text-sky-400" /> },
        { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss size={41} className=" text-sky-300" /> },
        { name: "Bootstrap", category: "Frontend", icon: <SiBootstrap size={41} className=" text-purple-500" /> },

        // ------------------ Backend ------------------
        { name: "Node.js", category: "Backend", icon: <FaNodeJs size={41} className=" text-green-600" /> },
        { name: "Express.js", category: "Backend", icon: <SiExpress size={41} className=" text-black" /> },

        // ------------------ Languages ------------------
        { name: "JavaScript", category: "Languages", icon: <SiJavascript size={41} className=" text-yellow-400" /> },
        { name: "C", category: "Languages", icon: <SiC size={41} className=" text-blue-400" /> },
        { name: "Java", category: "Languages", icon: <FaJava size={41} className=" text-blue-500" /> },

        // ------------------ Designing ------------------
        { name: "Figma", category: "Designing", icon: <SiFigma size={41} className=" text-black" /> },
        { name: "Canva", category: "Designing", icon: <SiCanva size={41} className=" text-sky-400" /> },

        // ------------------ Database ------------------
        { name: "MySQL", category: "Database", icon: <GrMysql size={41} className=" text-blue-500" /> },
        { name: "MongoDB", category: "Database", icon: <SiMongodb size={41} className=" text-green-500" /> },

        // ------------------ Tools ------------------
        { name: "Git", category: "Tools", icon: <FaGitAlt size={41} className=" text-orange-600" /> },
        { name: "GitHub", category: "Tools", icon: <FaGithub size={41} className=" text-black" /> },
        { name: "VS Code", category: "Tools", icon: <VscVscode size={41} className=" text-blue-500" /> },
        { name: "Postman", category: "Tools", icon: <SiPostman size={41} className=" text-orange-400" /> },
        { name: "Vercel", category: "Tools", icon: <SiVercel size={41} className=" text-black" /> },
        { name: "Vite", category: "Tools", icon: <SiVite size={41} className=" text-purple-400" /> },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <div className="w-full py-10" id="skills">
            <h2 className="text-[40px] font-semibold text-sky-400 font-['crimson'] mb-20">
                -Skills
            </h2>

            {/* Category Buttons */}
            <div className="flex flex-wrap  gap-5 mb-30">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-5 py-2  transition 
              ${selectedCategory === cat
                                ? "bg-[#FACC15] text-slate-900 rounded-[10px] font-['crimson'] "
                                : "border-[#FACC15] border-b-2 text-slate-200 hover:rounded-[10px] hover:bg-[#FACC15] hover:text-slate-900" }`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skills Grid WITH ICONS (190x123) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-6 mt-10" >
                {filteredSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="w-[190px] h-[123px] border border-sky-300 rounded-[15px] shadow-md
                       text-slate-200 bg-[#252C3D] flex flex-col justify-center items-center gap-2"
                    >
                        {skill.icon}
                        <p className="text-base font-normal font-['roboto']">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
