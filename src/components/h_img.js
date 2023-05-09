import "./h_imgStyles.css";

import React from 'react'
import IntroImg from "../assets/Student-Club-2.jpg"
import { Link } from "react-router-dom";

const h_img = () => {
  return <div className="home">
    <div className="mask">
      <img className="intro-img" link="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" alt="" />
    </div>
    <div className="Content">
      <p>Welcome, Data Scientists.</p>
      <h1>Let's Explore.</h1>
      <div>
        <Link to="/team"
        className="btn" >Team</Link>
        <Link to="/contact"
        className="btn btn-light" >Contact</Link>
      </div>
    </div>

  </div>
}

export default h_img