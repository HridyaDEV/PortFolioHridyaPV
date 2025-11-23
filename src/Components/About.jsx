import React from 'react'
import { GoDatabase } from 'react-icons/go'
import { GrCode } from 'react-icons/gr'
import { MdOutlineDevices, MdOutlineWebAsset } from 'react-icons/md'

const About = () => {
    return (
        <div>
            <h1 className='text-sky-400 font-["crimson"] font-semibold text-[40px]'>-About Me</h1>
            <div className='flex justify-between  mt-25 '>
                <div className='ml-10'>
                    <img src="/image2.png" alt="image" className='w-[446px] h-[445px] rounded-[25px] border-3 border-sky-400' />
                    <div className='flex justify-center items-center h-[62px] w-[213px] border border-[#FACC15] mt-[30px] rounded-[20px] ml-20
                     hover:bg-sky-400 hover:border-0 text-[#FACC15] hover:text-slate-200 '>
                        <h1 className='font-["crimson"] font-semibold text-sm'>Download C V</h1>
                    </div>
                </div>
                <div>
                    <p className='text-slate-200 font-["crimson"] text-xl tracking-[0.04em] mr-15 mt-3'>
                        I'm Hridya P V, a B.Tech CSE graduate with a passion for web <br />
                        development and design. I specialize in building responsive <br />
                        and intuitive user experiences using modern technologies <br />
                        like React and Tailwind CSS. My skill set  includes HTML, <br />
                        CSS, JavaScript, React, Tailwind CSS, Node.js, MongoDB, and <br />
                        MySQL. I’m continuously exploring new technologies to craft <br />
                        innovative and high-quality digital solutions.</p>
                    <p className='font-["crimson"] text-sm italic text-slate-200 mt-3'>
                        “Code is poetry. Clean, scalable, and crafted with love.”</p>
                    <div className='flex justify-between mr-15 mt-10 '>
                        <div className='w-[255px] h-[88px] border border-sky-400 bg-[#252C3D] rounded-[10px] flex items-center gap-5'>
                            < GrCode size={25} className='text-[#FACC15] ml-5'/>
                            <h1 className='font-["roboto"] text-xl text-slate-200 font-medium'>Clean Code</h1>
                        </div>
                        <div className='w-[255px] h-[88px] border border-sky-400 bg-[#252C3D] rounded-[10px] flex justify-center items-center gap-5'>
                            <MdOutlineWebAsset size={25} className='text-[#FACC15]' />
                            <h1 className='font-["roboto"] text-xl text-slate-200 font-medium' >Web Application</h1>
                        </div>
                    </div>
                    <div className='flex justify-between mr-15 mt-10 '>
                        <div className='w-[255px] h-[88px] border border-sky-400 bg-[#252C3D] rounded-[10px] flex justify-center items-center gap-5'>
                            < MdOutlineDevices  size={25} className='text-[#FACC15]'/>
                            <h1 className='font-["roboto"] text-xl text-slate-200 font-medium'>Responsive Design</h1>
                        </div>
                        <div className='w-[255px] h-[88px] border border-sky-400 bg-[#252C3D] rounded-[10px] flex justify-center items-center gap-5'>
                            <GoDatabase  size={25} className='text-[#FACC15]' />
                            <h1 className='font-["roboto"] text-xl text-slate-200 font-medium' >Backend System</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
