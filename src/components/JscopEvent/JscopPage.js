import "./JscopPage.scss";
import React from "react";
import YearButton from "../YearButton/YearButton";

function JscopPage() {
  return (
    <div className="jscop">
      <div className="jscop_upcoming">
        <div className="jscop_mid_heading">
          <div className="jscop_image_outer_div">
            <img src={"https://res.cloudinary.com/dcuc1uetk/image/upload/v1726309996/JIIT%20OPTICA%20WEBSITE/Jscop_component/JSCOP_COMING_SOON_o5txx6.png"} alt="stay-tuned" className="jscop_image" />
          </div>
        </div>
      </div>
      <div className="jscop_past_events">
        <div className="jscop_mid_heading">
          <h1>Explore Previous JSCOP Websites</h1>
          <br />
          <p>
            Take a journey through the past by exploring the official websites
            of previous JSCOP events. See how our event has evolved over the
            years and get inspired by our past editions.
          </p>
        </div>
        <div className="jscop_year_buttons">
          <a 
          href="https://jscop.jiitopticachapter.com/" 
          target="_blank"
          rel="noreferrer"
          >
            <YearButton text="JSCOP 7.0"/>
          </a>
          <a
            href="https://jscop.jiitopticachapter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <YearButton text="JSCOP 6.0"/>
          </a>
           <a 
              href="https://jscop5.jiitopticachapter.com/"
              target="_blank"
              rel="noreferrer"
              >
          <YearButton text="JSCOP 5.0" />
          </a>

          <a 
              href="https://jscop4.jiitopticachapter.com/"
              target="_blank"
              rel="noreferrer"
              >
          <YearButton text="JSCOP 4.0" />
          </a>
          {/* <YearButton text="JSCOP 3.0" />
          <YearButton text="JSCOP 2.0" /> */}
        </div>
      </div>
    </div>
  );
}

export default JscopPage;
