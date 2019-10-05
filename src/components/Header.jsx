import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const Header = () =>(
    <div className="header">
        <div className="header-container">
            <div className="header-content">
                <div className="header-logo">
                   <Link to="/">
                   LOGO
                   </Link> 
                </div>
                <div className="header-nav">
                <Nav />
                </div>
            </div>
        </div>
    </div>
);

export default Header
