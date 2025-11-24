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
                                    <h1 className='font-["crimson"] text-[25px] text-sky-400 font-semibold '>MERN Stack Development Intern</h1>
                        <p className="text-slate-700 font-semibold">Your Text Here</p>
                    </div>


                    {/* ---------- MIDDLE DOT + LEFT BOX ---------- */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                                    w-6 h-6 bg-sky-400 rounded-full"></div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-10 mr-10 border-2 border-sky-400
                                    w-[516px] h-[179px] bg-slate-200 rounded-xl shadow-md flex items-center justify-center">
                        <p className="text-slate-700 font-semibold">Your Text Here</p>
                    </div>


                    {/* ---------- BOTTOM DOT + RIGHT BOX ---------- */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-20 
                                    w-6 h-6 bg-sky-400 rounded-full"></div>

                    <div className="absolute bottom-0 left-10 ml-10
                                   w-[516px] h-[179px] bg-slate-200 border-2 border-sky-400 rounded-xl shadow-md flex items-center justify-center">
                        <p className="text-slate-700 font-semibold">Your Text Here</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Journey
