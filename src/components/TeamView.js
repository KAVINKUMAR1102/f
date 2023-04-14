import './TeamCardStyles.css'
import TeamCard from "./TeamCard"
import TeamCardData from "./TeamCardData"

import React from 'react'


const TeamView = () => {
  return (
    <div className='team-container'>
      <h1 className='team-heading'></h1>
      <div className='team-container'>
        {TeamCardData.map((val, ind)=>{
          return(
            <TeamCard
            key={ind}
            imgsrc={val.imgsrc}
            name={val.name}
            details={val.details}
            linkedin={val.linkedin}
            github={val.github}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TeamView