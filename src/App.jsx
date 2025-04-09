import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects' // Import Projects
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App () {
  const [activeSection, setActiveSection] = useState('')

  return (
    <div className='bg-background'>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero id='hero' setActiveSection={setActiveSection} />
        <About id='about' setActiveSection={setActiveSection} />
        <Skills id='skills' setActiveSection={setActiveSection} />
        <Experience id='experience' setActiveSection={setActiveSection} />
        <Projects id='projects' setActiveSection={setActiveSection} />{' '}
        {/* Add Projects section */}
        <Education id='education' setActiveSection={setActiveSection} />
        <Contact id='contact' setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  )
}

export default App
