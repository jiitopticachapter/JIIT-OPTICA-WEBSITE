import React from 'react'
import "./Title.css"

function Title() {
  return (
    <div className="title">
        <div className="title-bg">
            {/* <img className="bg" src = "/images/background.jpg" alt = "" /> */}
        </div>
        <div className="content">
            <h1 id="txt-animation">
                JIIT OPTICA CHAPTER
            </h1>
        </div>
        <div className="jumping_arrow">
          <a href="#about_id"><i  className="fa fa-angle-double-down " /></a>          
        </div>
    </div>
  )
}

export default Title