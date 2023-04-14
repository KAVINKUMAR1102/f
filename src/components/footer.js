import "./footerStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>Jain Deemed-To-Be University.</p>
              <p>Kanakpura, Bangalore.</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            123456789</h4>
          </div>
          <div className="mail">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            anova@gmail.com</h4>
          </div>
        </div>

        <div className="right">
          <h4>About our club</h4>
          <p></p>
          <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
            <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>         
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer