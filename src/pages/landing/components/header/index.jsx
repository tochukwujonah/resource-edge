import React from 'react'
import Nav from './nav'

import logo from '../../../../assets/images/logo.png'

const Header = ()=> {
    return (
        <header className="header">
            <div className="container main-header macro">
                <span className="logo logo-desk">resource edge</span>

                {/* Navigation component belongs here */}
                <Nav />
            </div>

        <div className="main-header-mini mini">
            <div className="container main-header">
                <div className="logo-mini-container">
                    <span className="logo-mini"><img src={logo} alt="Logo" /></span>
                </div>
                        
                <div className="hamburger-menu hamburger-mini mini">
                    <span style={{"--w": "1"}}></span>
                    <span style={{"--w": ".75"}}></span>
                    <span style={{"-w": ".5"}}></span>
                </div>
            </div>

        </div>
            
        </header>
    )
}

export default Header
