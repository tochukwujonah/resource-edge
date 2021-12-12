import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Nav = ()=> {

    // const navigate = useNavigate();

    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="right">
                <Link to="">Sign Up</Link>
                <Link to="/login" className="btn">Sign In</Link>
            </div>
        </nav>
    )
}

export default Nav
