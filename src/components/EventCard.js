import "./EventCardStyles.css"

import React from 'react'
import { HiLocationMarker,HiCalendar } from "react-icons/hi";
import eventimg from "../assets/event.jpg"

const EventCard = () => {
  return (    
    <div class="container">
        <div class="item-container">
            <div class="img-container">
                <img src={eventimg} alt="Event image"/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>

                <div class="event-info">
                    <p class="title">CodeWave🌊</p>
                    <div class="separator"></div>
                    <p class="info">Ultimate Coding Challenge</p>
                    <p class="price">Free</p>

                    <div class="additional-info">
                        <p class="info">
                            <i><HiLocationMarker size={20} style={{color:"#fff"}}/></i>
                            Jain University Kanakapura
                        </p>
                        <p class="info">
                            <i><HiCalendar size={20} style={{color:"#fff"}}/></i>
                            Sun , 17-05-23
                        </p>

                        <p class="info description">
The *Code Wave Hackathon - 4 Hours Challenge* is here and open to all semester students who are ready to show off their coding skills and have fun doing it!🥳

                        </p>
                    </div>
                </div>
                <button class="action">Book it</button>
            </div>
        </div>
     </div>

     
     
  )
}

export default EventCard