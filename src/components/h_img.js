import React from "react";
import "./h_imgStyles.css";
import IntroImg from "../assets/Student-Club-2.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const H_img = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home ">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="" />
      </div>
      <div className="Content">
        <p data-aos="fade-up" data-aos-duration="700" className="">
          Welcome, Data Scientists.
        </p>
        <h1 data-aos="fade-up" data-aos-duration="800" className="">
          Let's Explore.
        </h1>
        <div data-aos="fade-up" data-aos-duration="900">
          <Link to="/team" className="btn">
            Team
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default H_img;
