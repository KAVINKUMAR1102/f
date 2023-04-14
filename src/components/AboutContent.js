import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

import aboutpic from "../assets/place.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who we are?</h1>
        <p>Should add whoever we are...</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <img src={aboutpic} alt="" />
      </div>
    </div>
  )
}

export default AboutContent