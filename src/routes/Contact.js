import React from 'react'

import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Bgimg from '../components/Bgimg'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Bgimg heading="CONTACT US" text="Feel free to chat in case of any queries or requests to make"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact