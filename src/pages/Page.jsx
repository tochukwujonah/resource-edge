import React from 'react'
import { Link } from 'react-router-dom';

import Loginman from '../assets/illustration/Loginman.png';
import LogManWoman from '../assets/illustration/LogManWoman.png';
import logo from '../assets/images/text_logo.png';

const Page = ({ title, caption, link, path=null, ChildComponent=null, user=null, setState=null })=> {
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
            {/* <span>{ caption }</span> */}

            {
                ChildComponent ? <ChildComponent user={user} setUser={setState} /> : null
            }

        <Link to={path}>{link}</Link>

        </div>
        
    </div>
    )
}

export default Page
