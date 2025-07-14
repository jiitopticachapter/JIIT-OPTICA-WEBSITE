import React from "react";
import { Link } from "react-router-dom";
import "./MentorInfo.scss";
import { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MentorInfo() {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);

useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
    once: true,
  });
}, []);


  return (
    <>
      <div className="mentor">
        <h1 className="mentor-title">OUR MENTORS</h1>
        <div className="mentor-card-container">
          <div
            data-aos="zoom-in"
            className="mentor-details"
            onMouseLeave={() => setIsShown1(true)}
          >
            <div
              className="mentor-image"
              onMouseEnter={() => setIsShown1(false)}
            >
              <img
                src="../images/mentors/anuraj_panwar.jpg"
                alt="img"
                width="200px"
              />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. ANURAJ PANWAR
                <br />
                <span>FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown1 && <h2 className="mentor-name">Dr. ANURAJ PANWAR</h2>}
          </div>

          <div
            data-aos="zoom-in"
            className="mentor-details"
            onMouseLeave={() => setIsShown2(true)}
          >
            <div
              className="mentor-image"
              onMouseEnter={() => setIsShown2(false)}
            >
              <img
                src="../images/mentors/manoj_tripathi.png"
                alt="img"
                width="200px"
              />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. MANOJ TRIPATHI
                <br />
                <span>CO-FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown2 && <h2 className="mentor-name">Dr. MANOJ TRIPATHI</h2>}
          </div>

          <div
            data-aos="zoom-in"
            className="mentor-details"
            onMouseLeave={() => setIsShown3(true)}
          >
            <div
              className="mentor-image"
              onMouseEnter={() => setIsShown3(false)}
            >
              <img
                src="../images/mentors/ashish_bhatnagar.jpg"
                alt="img"
                width="200px"
              />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. ASHISH BHATNAGAR
                <br />
                <span>CO-FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown3 && <h2 className="mentor-name">Dr. ASHISH BHATNAGAR</h2>}
          </div>
          <div
            data-aos="zoom-in"
            className="mentor-details"
            onMouseLeave={() => setIsShown3(true)}
          >
            <div
              className="mentor-image"
              onMouseEnter={() => setIsShown3(false)}
            >
              <img
                src="../images/mentors/ravi_gupta.jpeg"
                alt="img"
                width="200px"
              />
            </div>
            <div className="mentor-content">
              <h2>
                Dr. RAVI GUPTA
                <br />
                <span>CO-FACULTY ADVISOR</span>
                <Link to="/mentors">
                  <button className="mentor-button">Know more</button>
                </Link>
              </h2>
            </div>
            {isShown3 && <h2 className="mentor-name">Dr. RAVI GUPTA</h2>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorInfo;
