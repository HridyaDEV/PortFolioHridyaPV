import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1 className='text-sky-400 font-["crimson"] font-semibold text-[40px] mt-25'>-Projects</h1>

    <div className='flex justify-evenly'>
        <div className='w-[359px] h-[396px] border border-sky-400 bg-slate-900 rounded-[10px] py-4'>
            <h1 className='text-center text-sky-400 font-["crimson"] text-[20px]'>Toycycle</h1>
            <img src="/ToyCycle.png" alt="ToyCycle" className='h-[146px] w-[302px] mt-4 ml-7 rounded-[5px]'/>
            <p className='ml-7 mt-2 text-slate-200'>Built a full-stack web application  enabling
users to resell or purchase pre-owned toys, 
encouraging sustainable toy usage.</p>
<p className='font-bold text-slate-200 ml-7 mt-2'>Technologies:-<span className='font-normal'>React.js, MongoDB, Node.js,
  <br />Express.js, Tailwind CSS, JavaScript</span></p>
  <div className='flex justify-between'>
    <button>GitHub</button>
    <button>Live</button>
  </div>

        </div>

    </div>
    </div>
  )
}

export default Projects
