import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { About, Contect, Help, Home } from "../data";
import './Header.css';
import { NavBar } from "./Navbar";


export const Header = () => {
    return (
        <>
            <BrowserRouter>
          <NavBar/> 
            </BrowserRouter>
        </>
    )
}
//////////////////
// export const Header = () => {
//     return (
//         <BrowserRouter>
//         <div>
//         <nav>
//             <ul>
//         <li><NavLink to='/' exact>Home</NavLink></li>
//             <li><NavLink to='/about'>about</NavLink></li>
//             <li><NavLink to='/help'>Help</NavLink></li>
//             <li><NavLink to='/contect'>contect</NavLink></li>
//             </ul>
//         </nav>
//         </div>
    
//         <Route path="/" component={Home} exact />
//         <Route path="/about" component={About} />
//         <Route path="/help" component={Help} />
//         <Route path="/contect" component={Contect} />
//         </BrowserRouter>
//     )
// }