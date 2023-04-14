import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Bgimg from '../components/Bgimg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg heading="ABOUT." text="About our Club"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About