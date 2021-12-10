import React from 'react'
import Loginman from '../../assets/illustration/Loginman.png';
import LogManWoman from '../../assets/illustration/LogManWoman.png';
import logo from '../../assets/images/text_logo.png';

const AuthPage = ()=> {
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
                <form>
                    <div className="form-item">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email" />
                    </div>
                    <div className="form-item">
                        <button className="btn">Next</button>
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default AuthPage
