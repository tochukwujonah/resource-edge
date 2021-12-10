import React, { useState } from 'react'
import Loginman from '../../assets/illustration/Loginman.png';
import LogManWoman from '../../assets/illustration/LogManWoman.png';
import logo from '../../assets/images/text_logo.png';

import pencil from '../../assets/icons/pencil.png';
import show from '../../assets/icons/show.png';
import hide from '../../assets/icons/hide.png';

const AuthPage = ()=> {


    const [user, setUser] = useState({email: '', password: ''});
    const [isValid, setIsValid] = useState(false);
    const [progress, setProgress] = useState(0); //Monitors progress, 1 is forward, -1 is backward 
    const [showPassword, setShowpassword] = useState(false);

    const validateInput = (e)=> {
        if(e.target.type === 'email'){
            setUser({...user, email: e.target.value});
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/;
            
            if(regex.test(user.email)) setIsValid(true);
            else setIsValid(false);
            
        } else {

            setUser({...user, password: e.target.value});
        }     
        
    }


    const nextStep = (e)=> {
        e.preventDefault();
        setProgress(1);
    }

    const backStep = ()=> setProgress(-1);

    //Toggle password anonimity
    const togglePassword = ()=> setShowpassword(!showPassword);

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

                {/* If current field is password  field*/}

                {
                    progress === 1
                    ?

                    <div className="email-name-edit">
                        <p>
                            <h2>Ositadinma Nwangwu</h2>
                            <sm>o.nwangwu@genesystechhub.com</sm>
                        </p>
                        <img src={pencil} alt="Pencil" onClick={backStep} />
                    </div>

                    : null
                }

                {/* My form */}
                <form className="form-control">
                    <div className="input-group">
                        <div className={progress === 0 ? "form-item initial-comein" : progress === 1  ? "form-item backward" :  "form-item forward"} style={{"--fromX":"-100%", "--toX": "0%", "--opacityFrom": "0", "--opacityTo": "1"}}>
                            <label>Email Address</label>
                            <div className="form-group-item">
                                <input type="email" placeholder="Enter email" value={user.email} onChange={validateInput} autoFocus autoCorrect={true}/>
                            </div>
                        </div>


                        <div className={progress === 1 ? "form-item initial-comein" :  progress === -1 ? "form-item forward": "form-item"} style={{"--fromX":"0%", "--toX": "100%", "--opacity": "0", "--opacityFrom": "1", "--opacityTo": "0"}}>
                            <label>Password</label>
                            <div className="form-group-item">
                                <input type={!showPassword ? "password" : "text"} placeholder="Enter password" value={user.password} onChange={validateInput}/>
                                <img src={!showPassword ? show : hide} alt="Show password" onClick={togglePassword} />
                            </div>
                        </div>

                    </div>
                    <div className="form-item">
                        <button className={ isValid ? "active-btn" : "inactive-btn"} onClick={nextStep}>Next</button>
                    </div>
                </form>

                <hr/>

                <a href="#">Forgot password?</a>

            </div>
            
        </div>
    )
}

export default AuthPage
