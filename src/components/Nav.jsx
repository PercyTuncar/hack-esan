import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Inicio </Link>
                </li>
                <li>
                    <Link to="/Project">Projects </Link>
                </li>
                <li>
                    <Link to="/Login">Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
