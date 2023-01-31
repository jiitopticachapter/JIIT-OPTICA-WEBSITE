import "./InfoBox.scss"
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const InfoBox1 = (props) => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div data-aos="fade-up" className="infobox">
            <div className="infobox_img">
                <img src={props.image} alt="img here" />
            </div>
            <div className="infobox_content">
                <div className="infobox_heading"><h1>{props.heading}</h1></div>
                <div className="infobox_info"><p>{props.info}</p></div>
            </div>
        </div>
    )
}

const InfoBox2 = (props) => {
    return (
        <div data-aos="fade-up" className="infobox infobox_2">
            <div className="infobox_content">
                <div className="infobox_heading"><h1>{props.heading}</h1></div>
                <div className="infobox_info"><p>{props.info}</p></div>
            </div>
            <div className="infobox_img">
                <img src={props.image} alt="img here" />
            </div>

        </div>
    )
}

const InfoBox3 = (props) => {
    return (
        <div data-aos="fade-up" className="infobox_3">
            <div className="infobox_3_heading"><h1>{props.heading}</h1></div>
            <div className="infobox_3_info"><p>{props.info}</p></div>
        </div>
    )
}



export { InfoBox1, InfoBox2, InfoBox3 };