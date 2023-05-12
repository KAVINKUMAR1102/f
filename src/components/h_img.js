import "./h_imgStyles.css";

import React from 'react'
import IntroImg from "../assets/Student-Club-2.jpg"
import { Link } from "react-router-dom";

const h_img = () => {
  return <div className="home">
    <div className="mask">
      <img className="intro-img" src={IntroImg} alt="" />
    </div>
    <div className="Content">
      <p>Welcome, Data Scientists.</p>
      <h1>Let's Explore.</h1>
      <div>
        <Link to="/events"
        className="btn" >LOOK UP THE EVENTS!</Link>
        {/* <Link to="/contact"
        className="btn btn-light" >Contact</Link> */}
      </div>
    </div>

  </div>
}

export default h_img