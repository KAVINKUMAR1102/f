import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

import aboutpic from "../assets/place.png"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who we are?</h1>
        <p>Anova Technical Club (Data Science) The Team V i s i o n We will work collaboratively and comprehensively with staff
Students and the community to strengthen a learning
environment focused on raising the achievement of all students
and preparing them to success in college and career
M i s s i o n
We will work collaboratively and comprehensively with staff
Students and the community to strengthen a learning
environment focused on raising the achievement of all students
and preparing them to success in college and career
M
1 We assure well rounded learning experiences, which
prepare our students for success in college and career
M
2 We engage, inspire, and challenge all of our students to
become productive citizens ,ethical leaders and positive
contributors to our community country and a global society</p>
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