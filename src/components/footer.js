import "./footerStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-white py-5 overflow-hidden">
      <div className="flex justify-between items-start mx-10">
        <div
          className="flex flex-col space-y-6 "
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <div className="flex space-x-6 items-center">
            <HomeIcon className="text-white" />
            <div>
              Jain Deemed-To-Be University,
              <br /> Kanakpura, Bangalore.
            </div>
          </div>
          <div className="flex space-x-6">
            <CallIcon className="text-white" />
            <div>+91 9876543210</div>
          </div>
          <div className="flex space-x-6">
            <EmailIcon className="text-white" />
            <a href="mailto:anova@gmail.com">anova@gmail.com</a>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="700">
          <p className="mb-2 text-[20px] font-semibold font-mono">
            Social Links
          </p>
          <div className="flex space-x-2 text-zinc-600">
            <div className="group">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  fontSize="medium"
                  sx={{ fontSize: "35px" }}
                  className=" group-hover:text-blue-700 transition duration-200 "
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon
                  fontSize="medium"
                  sx={{ fontSize: "35px" }}
                  className="group-hover:text-pink-600 transition duration-200"
                />
              </a>
            </div>

            <div className="group">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon
                  fontSize="medium"
                  sx={{ fontSize: "35px" }}
                  className="group-hover:text-blue-900 transition duration-200"
                />
              </a>
            </div>

            <div className="group">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GitHubIcon
                  fontSize="medium"
                  sx={{ fontSize: "35px" }}
                  className="transition duration-200 group-hover:text-zinc-400"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
