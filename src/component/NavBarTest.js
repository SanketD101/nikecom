import React from "react";
import { NavLink } from "react-router-dom";
// import "./src/navbartest.css"

function NavBarTest(){
    return (
        <div className="header">
            <h3 className="header-logo">Any Site-11</h3>
                <ul className="header-list">
                    <li><NavLink to="/" className="header-list">Home</NavLink></li>
                    <li><NavLink to="/about" className="header-list">About</NavLink></li>
                    <li><NavLink to="/contact" className="header-list">Contact</NavLink></li>
                </ul>
        </div>
    );
}
export default NavBarTest;