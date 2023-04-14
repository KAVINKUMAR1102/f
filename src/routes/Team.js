import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Bgimg from '../components/Bgimg'
import TeamView from '../components/TeamView'


function Team() {
  return (
    <div>
      <Navbar />
      <Bgimg heading="OUR TEAM." text="Meet the members of our club"/>
      <TeamView/>
      <Footer/>
    </div>
  )
}

export default Team