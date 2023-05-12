import "./footerStyles.css"

import React from 'react'
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome"
import { FaHome, FaPhone, FaMailBulk, FaDiscord, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
          <div className="location"><a href=""></a>
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
            <a href="https://discord.com/invite/fYg5z4Yh9W" target="_blank"><i className="discord"><FaDiscord /></i></a>
            <a href="https://www.linkedin.com/company/anova-club/" target="_blank"><i className="linkedin"><FaLinkedin /></i></a>
            <a href="https://github.com/ANOVA-Datasimplified" target="_blank"><i className="github"><FaGithub /></i></a>
            <a href="https://www.instagram.com/anova_ds/" target="_blank"><i className="insta"><FaInstagram /></i></a>     
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer