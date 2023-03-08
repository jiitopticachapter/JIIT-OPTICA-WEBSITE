import "./Card.scss"
import React from 'react'

const Card = (props) => {
  return (
    // older version

    // <div className="card">
    //   <img loading="lazy" src={props.imgsrc} alt={props.name}/>
    //   <h2 className="card_name">{props.name}</h2>
    //   <div className="card_designation">
    //     <p>{props.designation}</p>
        // <div className="social_links">
        //   <NavLink to={props.instaLink} className="social_links_icon"><i className="fa-brands fa-instagram"></i></NavLink>
        //   <NavLink to={props.linkedinLink} className="social_links_icon"><i className="fa-brands fa-linkedin-in"></i></NavLink>
        // </div>
    //   </div>
    // </div>

    <div className="wrapper">
        <div className="Wrappercard">
          <img loading="lazy" src={props.imgsrc} alt={props.name} />{" "}
          <div className="info">
            <h1 className="card_name">{props.name}</h1>
            <p>{props.designation}</p>
            <div className="social_links">
              <a href={props.instaLink} className="social_links_icon"><i className="fa-brands fa-instagram"></i></a>
              <a href={props.linkedinLink} className="social_links_icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card