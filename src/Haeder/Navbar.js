import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Help, Home } from "../data";
import { Route } from "react-router-dom";
import './Header.css'
export const NavBar = () => {
    const [dropShow, setDropShow] = useState(false)
    return (
        <div className="header">
            <nav >
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>

                <div className="content">
                    <div className="logo">Header</div>
                    <ul className="links">
                        <li><NavLink to='/' exact>Home</NavLink></li>
                        <li><NavLink to='/about'>about</NavLink></li>
                        <li><NavLink to='/help'>Help</NavLink></li>
                        <li><NavLink to='/contect'>contect</NavLink></li>
                        <li className="desktop-link">

                            <input type="checkbox" id="show-features" />
                            <NavLink to='/contect'>userDe</NavLink>

                            <ul>
                                <li><NavLink to="/">Drop Menu 1</NavLink></li>
                                <li><NavLink to="/">Drop Menu 2</NavLink></li>
                                <li><NavLink to="/">Drop Menu 3</NavLink></li>
                                <li><NavLink to="/">Drop Menu 4</NavLink></li>
                            </ul>
                        </li>
                        <li className="desktop-link">
                            <input type="checkbox" id="show-services" />
                            <NavLink to='/Service'>Service</NavLink>
                            <ul>
                                <li><NavLink to="#">Drop  1</NavLink></li>
                                <li><NavLink to="#">Drop  2</NavLink></li>
                                <li><NavLink to="#">Drop  3</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route path="/" component={Home} exact />

            <Route path="/help" component={Help} />

        </div>



    )
}