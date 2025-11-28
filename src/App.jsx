import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Journey from './Components/Journey'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Figma from './Components/Figma'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='bg-slate-900 min-h-screen w-full'>
      <div className="pt-28 px-4 md:px-8 lg:px-16">
        <NavBar />
        <HeroSection />
        <About/>
        <Journey/>
        <Skills/>
        <Projects/>
        <Figma/>
        <Contact/>
       </div>

    </div>
  )
}

export default App
