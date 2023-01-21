import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <section> <img src="/images/logo.png" alt="" width="300px" /> </section>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/events"> Events </Link>
                </li>
                <li>
                    <Link to="/team"> Team </Link>
                </li>
                <li>
                    <Link to="/gallery"> Gallery </Link>
                </li>
                <li>
                    <Link to="/jscop"> JSCOP </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleclick}>
                {click ?
                    (<i className='fa-solid fa-times' />) :
                    (<i className='fa-solid fa-bars' />)
                }
            </div>
        </div>
    )
};

export default Navbar;


