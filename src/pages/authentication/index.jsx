import React, { useState } from 'react'


import pencil from '../../assets/icons/pencil.png';
import show from '../../assets/icons/show.png';
import hide from '../../assets/icons/hide.png';
import Page from '../Page';

const AuthPage = ()=> {

    return <Page ChildComponent={ChildComponent} title="Login" caption="Access your resource edge account" link="Forgot password?" path="/forgot-password" />
}


const ChildComponent = ()=> {
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
        <>
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
                <div className="space"></div>
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
                        <button className={ isValid ? "active-btn" : "inactive-btn"} onClick={nextStep}>{ progress === 1 ? "Login" : "Next" }</button>
                    </div>
                </form>

                <hr/>

               
        </>
    )
}

export default AuthPage
