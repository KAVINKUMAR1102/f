import './TeamCardStyles.css'

import React from 'react'
import { NavLink } from 'react-router-dom'

const TeamCard = (props) => {
  return (
    <div className='team-card'>
          <img src={props.imgsrc} alt="image" />
          <h2 className='team-name'>{props.name}</h2>
          <div className='team-details'>
            <p>{props.details}</p>
            <div className='team-btns'>
              <NavLink to={props.linkedin} className="btn">LinkedIn</NavLink>
              <NavLink to={props.github} className="btn">GitHub</NavLink>
            </div>
          </div>
        </div>
  )
}

export default TeamCard