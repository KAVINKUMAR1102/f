import { Link } from "react-router-dom"
import "./Navbarstyles.css"

import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from "react"

import Logo from "../assets/logo.jpg"

const Navbar = () => {

  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor]=useState(false);
  const changeColor = () => {
    if(window.scrollY>=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);



  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <div>
          <h1>ANOVA</h1>
        </div>
      </Link>
      <ul className={click ? "nav-menu active"
      :"nav-menu"}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="ham-menu" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/>)
        :(<FaBars size={20} style={{color:"#fff"}}/>)
        }
        
        
      </div>
    </div>
  )
}

export default Navbar