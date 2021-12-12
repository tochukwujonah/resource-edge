import React from 'react'
import Nav from './nav'

const Header = ()=> {
    return (
        <header className="header">
            <div className="container main-header">
                <span className="logo">resource edge</span>

                {/* Navigation component belongs here */}
                <Nav />
            </div>
        </header>
    )
}

export default Header
