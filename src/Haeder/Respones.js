import React from "react";
import { NavLink } from "react-router-dom";
import './Respones.css';
export  const Respones=()=>{
    return (
        <div>
                  <nav className="navbar">
                    <div className="navbar-container container">
                        <h2 className="logo">Header</h2>
                        <div className="hamburger-lines">
                        <input type="checkbox" name="" id="" />
                        <i className="fas fa-bars"></i>
                        </div>
                       
                        <div>

                        </div>
                        <ul className="menu-items">

<li><NavLink to='/' exact>Home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/help'>Help</NavLink></li>
        <li><NavLink to='/contect'>contect</NavLink></li>
</ul>
                    </div>
               
            </nav>
        </div>
      
    )
} 