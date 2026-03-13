import React from 'react'
import Landing from '../components/Home/Landing'
import About from '../components/Home/About'
import Skills from '../components/Home/Skills'
import Contact from '../components/Home/Contact'
import FeaturedProjects from '../components/Home/FeaturedProjects'


function Home() {
  return (
    <>
        <Landing/>
        <About/>
        <FeaturedProjects/>
        <Skills/>
    </>
  )
}

export default Home