import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Bgimg from '../components/Bgimg'
import EventCard from '../components/EventCard'

const Events = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg heading="EVENTS" text="Upcoming events"/>
      <EventCard/>
      <Footer/>
    </div>
  )
}

export default Events