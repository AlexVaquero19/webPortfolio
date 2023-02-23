import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Habilities from './components/Habilities/Habilities'
import ProjectsSlider from './components/ProjectsSlider/ProjectsSlider'
import SwitchMode from './components/Switch/SwitchMode'
import Projectss from './components/Projectss/Projectss'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projectss />
      <Experience />
      <Habilities />

      <SwitchMode/>

      <span className='text-white d-flex justify-content-center pb-4'>
        &copy; Created with REACT by Alejandro Vaquero Toba
      </span>
    </>
  )
}

export default App
