import React, { useState } from 'react'


import pencil from '../../assets/icons/pencil.png';
import show from '../../assets/icons/show.png';
import hide from '../../assets/icons/hide.png';
import check from '../../assets/icons/check.png';
import Page from '../Page';
import { useNavigate } from 'react-router-dom';

const AuthPage = ()=> {

    const [user, setUser] = useState({email: '', password: '', fullname: ''});

    return <Page ChildComponent={ChildComponent} title="Login" caption="Access your resource edge account" link="Forgot password?" path="/forgot-password" user={user} setState={setUser} />
}


const ChildComponent = ({ user, setUser })=> {
    

    const navigate = useNavigate();

    const [isValid, setIsValid] = useState(false);
    const [progress, setProgress] = useState(0); //Monitors progress, 1 is forward, -1 is backward 
    const [showPassword, setShowpassword] = useState(false);

    //Validate email and password on value change
    const validateInput = (e)=> {
        if(e.target.type === 'email'){
            setUser({...user, email: e.target.value});
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/;
            
            if(regex.test(user.email || e.target.value)) setIsValid(true);
            else setIsValid(false);

            //Check if input is empty
            if(e.target.value === '') setIsValid(false);
            
        } else {

            //Check if password is upto 6 characters
            if(e.target.value.length < 6) setIsValid(false);
            else setIsValid(true);

            //Update user state password value with input value
            setUser({...user, password: e.target.value});
        }     
        
    }

    //Validate email and password on Input
    // const inputHandler = (e) => {

    // }


    const nextStep = (e)=> {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')); //Load users from localDB
        const you = users.filter(singleUser => singleUser.email === user.email)[0];

        if(progress === 1){
            //Login
            if(you.password === user.password) navigate(`/dashboard/${user.fullname}`);
            else {
                alert("Password incorrect. Please input a valid password");
            }
            

        } else {
            
            //Check if you exist in the DB
            if(you) {
                setUser({...user, fullname: you.fullname});
                setProgress(1);
            } else {
                alert("Invalid login details");
                // Navigate("/signup");
            }

            
        }
        
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
                            <h2>{user.fullname}</h2>
                            <sm>{user.email}</sm>
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
                                <input type="email" placeholder="Enter email" value={user.email} onInput={validateInput} />
                                { isValid ? <img src={check} alt="Check icon "/> : null }
                            </div>
                        </div>


                        <div className={progress === 1 ? "password-field form-item initial-comein" :  progress === -1 ? "password-field form-item forward": "password-field form-item"} style={{"--fromX":"0%", "--toX": "100%", "--opacity": "0", "--opacityFrom": "1", "--opacityTo": "0"}}>
                            <label>Password</label>
                            <div className="form-group-item">
                                <input type={!showPassword ? "password" : "text"} placeholder="Enter password" value={user.password} onInput={validateInput}/>
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
