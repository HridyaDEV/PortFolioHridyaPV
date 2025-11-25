import React from 'react'

const Journey = () => {
    return (
        <div>
            <h1 className='text-sky-400 font-["crimson"] font-semibold text-[40px] mt-50'>-Journey</h1>

            <div className="flex justify-center items-center mt-25">
                <div className="relative">

                    {/* Vertical Line */}
                    <div className="h-[620px] border-l-4 border-sky-400 rounded"></div>

                    {/* ---------- TOP DOT + RIGHT BOX ---------- */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-20 
                                    w-6 h-6 bg-sky-400 rounded-full"></div>

                    <div className="absolute top-0 left-10 ml-10 border-2 border-sky-400
                                   w-[516px] h-[179px] bg-slate-200 rounded-xl shadow-md ">
                        <h1 className='font-["crimson"] text-[25px] text-sky-400 font-semibold px-4 mt-2'>MERN Stack Development Intern</h1>
                        <div className='flex justify-between px-4 mt-1'>
                            <h1 className='font-["crimson"] text-lg font-semibold'>Softroniics</h1>
                            <h2 className='font-["crimson"] text-base'>(Sep 2024 - April 2025)</h2>
                        </div>
                        <p className="text-slate-700 font-semibold px-4 mt-4 text-[14px]"> Built full-stack web applications using MongoDB, Express.js, React, and
                            Node.js. Worked on creating dynamic user interfaces, developing RESTful
                            APIs, and managing backend logic and database operations.</p>
                    </div>


                    {/* ---------- MIDDLE DOT + LEFT BOX ---------- */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                                    w-6 h-6 bg-sky-400 rounded-full"></div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-10 mr-10 border-2 border-sky-400
                                    w-[516px] h-[179px] bg-slate-200 rounded-xl shadow-md ">
                        <h1 className='font-["crimson"] text-[25px] text-sky-400 font-semibold px-4 mt-2'>Web Development Intern</h1>
                         <div className='flex justify-between px-4 mt-1'>
                            <h1 className='font-["crimson"] text-lg font-semibold'>Prodigy Infotech</h1>
                            <h2 className='font-["crimson"] text-base'>(June 2024 - July 2024)</h2>
                        </div>
                        <p className="text-slate-700 font-semibold px-4 mt-4 text-[14px]"> Worked on building responsive web pages using HTML, CSS, and JavaScript, 
strengthening my understanding of front-end development, UI design
 principles, and interactive website features.</p>
                                  </div>


                    {/* ---------- BOTTOM DOT + RIGHT BOX ---------- */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-20 
                                    w-6 h-6 bg-sky-400 rounded-full"></div>

                    <div className="absolute bottom-0 left-10 ml-10
                                   w-[516px] h-[179px] bg-slate-200 border-2 border-sky-400 rounded-xl shadow-md ">
                                     <h1 className='font-["crimson"] text-[25px] text-sky-400 font-semibold px-4 mt-2'>B.Tech in CSE</h1>
                         <div className='flex justify-between px-4 mt-1'>
                            <h1 className='font-["crimson"] text-lg font-semibold'>Government Engineering College Idukki</h1>
                            <h2 className='font-["crimson"] text-base'>(July 2019 - June 2023)</h2>
                        </div>
                        <p className="text-slate-700 font-semibold px-4 mt-4 text-[14px]"> Developed a strong foundation in programming, data structures, and web 
development while working on academic projects involving  software
 development and database management.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Journey
