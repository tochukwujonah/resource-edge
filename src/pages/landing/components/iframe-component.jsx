import React from 'react'
import logo from '../assets/images/logo.png'
import notification from '../assets/icons/notification.svg'
import avatar from '../assets/images/staffs/right-content.png'




const IframeComponent = ({ title, IframeBody })=> {
    return (
        <div className="iframe">
            <header>
                <div className="left">
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="logo">
                        <img src={logo} />
                    </div>
                    
                    <h3> { title } </h3>
                </div>

                <div className="right">
                    <img src={notification} />
                    <img src={avatar} />
                </div>
            </header>

            <main className="iframe-main-section">
                <div className="container">
                    <IframeBody />
                </div>




            </main>
            
        </div>
    )
}

export default IframeComponent
