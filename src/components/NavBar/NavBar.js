import "./NavBar.css";
import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";

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
            <ul className={click ? "nav-menu mobile" : "nav-menu"}>
                <li>
                    <NavLink to="/" > Home </NavLink>
                </li>
                <li>
                    <NavLink to="/team" > Team </NavLink>
                </li>
                <li>
                    <NavLink to="/alumni"> Alumni </NavLink>
                </li>
                <li>
                    <NavLink to="/events"> Events </NavLink>
                </li>
                <li>
                    <NavLink to="/gallery"> Gallery</NavLink>
                </li>
                <li>
                    <a href="https://jscop.jiitopticachapter.in/"> JSCOP </a>
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


