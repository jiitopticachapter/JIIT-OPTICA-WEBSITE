import "./JoinUs.css";
import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

function JoinUs() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <div className="planning" id="planning">
            {/* <div data-aos="fade-up" data-aos-anchor-placement="center-center"> */}
            <h1 className="plan_title">JOIN US</h1>
            {/* </div> */}

            <div className="plan-options">
                <div>
                    <div className="plan">
                        <div className="plan-header">
                            <h3 className="plan-heading">Member Benefits</h3>
                            {/* <!-- Benefits --> */}
                        </div>
                        <ul className="plan-feature">
                            <li>Get a certificate signed by OPTICA Ambassador directly shipped from US</li>
                            <li>Get a chance to attend SLC in Washington DC, US fully sponsored by OPTICA</li>
                            <li>Scholarships and grants for study abroad programs, research excellence and even startup ideas</li>
                        </ul>
                        <a href="https://drive.google.com/file/d/1FCexkICzrb_usDcX78LF82XJ9DH5x3mw/view?usp=sharing
                                            "><button className="plan-choose">Know More</button></a>
                    </div>
                </div>
                <div>
                    <div className="plan">
                        <div className="plan-header">
                            <h3 className="plan-heading">Join JIIT Optica Chapter</h3>
                            {/* <button className="plan-save"> Save $40</button>  */}
                        </div>
                        <ul className="plan-feature">
                            <li>Follow step by step guide in the document</li>
                            <li>Fill the google form</li>
                            <li>Reach out to the coordinators and know about the further steps</li>
                        </ul>
                        <a href="https://drive.google.com/file/d/1FCexkICzrb_usDcX78LF82XJ9DH5x3mw/view?usp=sharing
                                            "><button className="plan-choose">Know More</button></a>
                    </div>
                </div>
                <div>
                    <div className="plan">
                        <div className="plan-header">
                            <h3 className="plan-heading">Other Benefits</h3>
                        </div>
                        <ul className="plan-feature">
                            <li>Become a part of the most active chapter of JIIT</li>
                            <li>Acquire new skills(technical as well as non-technical), and advance your professional development
                            </li>
                            <li>Get the required exposure through industry visits and attending conferences around the globe</li>
                        </ul>
                        <a href="https://drive.google.com/file/d/1FCexkICzrb_usDcX78LF82XJ9DH5x3mw/view?usp=sharing
                                            "><button className="plan-choose">Know More</button></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JoinUs