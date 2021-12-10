import React from 'react'

import Loginman from '../assets/illustration/Loginman.png';
import LogManWoman from '../assets/illustration/LogManWoman.png';
import logo from '../assets/images/text_logo.png';

const Page = ({ title, caption, link, action=null, ChildComponent=null })=> {
    return (
        <div className="page">

        <div className="page-illustration">
            <img src={Loginman} style={{"--shift": "-200"}} />
            <img src={LogManWoman} style={{"--shift": "200"}} />
        </div>

        {/* My logo */}
        <img src={logo} alt="Logo" />
        
        <div className="box">
            <h2>{ title }</h2>
            <span>{ caption }</span>

            {
                ChildComponent ? <ChildComponent /> : null
            }

        <a href="#" onClick={action}>{link}</a>

        </div>
        
    </div>
    )
}

export default Page
