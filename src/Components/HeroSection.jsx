import React from 'react'

function HeroSection() {
  return (
      <div className="mt-20 flex justify-between">
        <div>
 <h1 className="text-slate-200 font-['courgette'] text-7xl">
          Hello,
        </h1>

        <h2 className="text-slate-200 mt-5 font-['crimson'] text-2xl">
          I'm{' '}
          <span className="font-['courgette'] text-8xl  text-sky-400">
            Hridya P V
          </span>
          | Mern Stack Developer
        </h2>
        <h2 className="font-['crimson'] mt-8 text-slate-200">Turning ideas into soft, functional art on the web</h2>
        <div className='flex gap-10 mt-8'>
          <button className='bg-sky-400 text-slate-200 rounded-xl px-2 py-1'>View Projects</button>
          <button>Resume</button>
        </div>
        </div>
        <div className='w-[450px] h-[600px] mr-12' >
          <img src="/image1.png" alt="image" className=' object-fill' />
        </div>


      </div>
  )
}

export default HeroSection
