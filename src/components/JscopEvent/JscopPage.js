import "./JscopPage.scss";
import React from "react";
import YearButton from "../YearButton/YearButton";
import jscop_img from "./JSCOP_7.0.png";

function JscopPage() {
  return (
    <div className="jscop">
      <div className="jscop_upcoming">
        <div className="jscop_mid_heading">
          <div className="jscop_image_outer_div">
            <img src={jscop_img} alt="stay-tuned" className="jscop_image" />
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
            <YearButton text="JSCOP 6.0" />
          </a>

          <YearButton text="JSCOP 5.0" />
          <YearButton text="JSCOP 4.0" />
          {/* <YearButton text="JSCOP 3.0" />
          <YearButton text="JSCOP 2.0" /> */}
        </div>
      </div>
    </div>
  );
}

export default JscopPage;
