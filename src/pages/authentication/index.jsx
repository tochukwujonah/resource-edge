import React, { useState } from 'react'
import Loginman from '../../assets/illustration/Loginman.png';
import LogManWoman from '../../assets/illustration/LogManWoman.png';
import logo from '../../assets/images/text_logo.png';

const AuthPage = ()=> {


    const user = useState({email: '', password: ''});

    const validateInput = (e)=> {

    }

    return (
        <div className="page">

            <div className="page-illustration">
                <img src={Loginman} style={{"--shift": "-200"}} />
                <img src={LogManWoman} style={{"--shift": "200"}} />
            </div>

            {/* My logo */}
            <img src={logo} alt="Logo" />
            
            <div className="box">
                <h2>Login</h2>
                <span>Access your resource edge account</span>

                {/* My form */}
                <form className="form-control">
                    <div className="form-item">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email" value={user.email} onChange={validateInput}/>
                    </div>
                    <div className="form-item">
                        <button className="inactive-btn">Next</button>
                    </div>
                </form>

                <hr/>

                <a href="#">Forgot password?</a>

            </div>
            
        </div>
    )
}

export default AuthPage
