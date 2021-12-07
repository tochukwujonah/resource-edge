import React from 'react'

const Nav = ()=> {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="right">
                <a href="">Sign Up</a>
                <a href="#" className="btn">Sign In</a>
            </div>
        </nav>
    )
}

export default Nav
