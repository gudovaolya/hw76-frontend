import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";



const Header = () => {
    return(
        <header>
            <nav className="main-nav container">
                <ul>
                    <li><NavLink exact to="/" >Messages</NavLink></li>
                    <li><NavLink to="/add_message">Add New Message</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;