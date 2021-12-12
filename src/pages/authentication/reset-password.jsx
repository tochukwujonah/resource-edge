import React, { useState } from 'react'
import Page from '../Page'
import checkCircle from '../../assets/icons/check-circle.png'

import show from '../../assets/icons/show.png';
import hide from '../../assets/icons/hide.png';
import { PasswordField } from '../../components/global-components';

const ResetPasswordPage = ()=> {
    const [showCaption, setShowCaption] = useState(true);

    return  <Page title="Reset Password" ChildComponent={ ChildComponent } link="Back to login" />
}

const ChildComponent = ()=> {

    const [isValid, setIsValid] = useState(false); //Track if email is valid or not
    const [showValidateEmailSentToEmail, setShowValidateEmailSentToEmail] = useState(false); //Switch screen to recovery email sent message
    const [showPasswordChangedMessage, setShowPasswordChangedMessage] = useState(false);

    return (
        <>
            {/* My form */}
            {
                !showPasswordChangedMessage ? <ResetPasswordForm setShowPasswordChangedMessage={setShowPasswordChangedMessage} /> : <PasswordChangedMessage />
            }

            {/* <EmailForm validityState={{isValid, setIsValid}} setShowValidateEmailSentToEmail={setShowValidateEmailSentToEmail} /> */}

            <hr/>
        </>
    )
}


const EmailForm = ({validityState, setShowValidateEmailSentToEmail})=> {
    const {isValid, setIsValid} = validityState;
    const [email, setEmail] = useState(''); //Store user's email

    //Email change handler
    const handleEmailInputChange = (e)=> {
        setEmail(e.target.value);
        if(validateEmail(e.target.value)) setIsValid(true);
        else setIsValid(false);

        return;
    }


    //Form submit handler
    const submitForm = (e)=> {
        e.preventDefault();
        setShowValidateEmailSentToEmail(true);
    }

    //Email validate function
    const validateEmail = (mail) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/;
            
            if(regex.test(mail)) return true;
            return false;
    }

    return (
        <>
            <span>To enable us reset your password, enter your email below</span>
            <form className="form-control">
                   
                   <div className="form-item">
                       <label>Email Address</label>
                       <div className="form-group-item">
                           <input type="email" placeholder="Enter email" value={email} onChange={handleEmailInputChange} autoFocus autoCorrect={true}/>
                       </div>
                   </div>


               <div className="form-item">
                   <button className={ isValid ? "active-btn" : "inactive-btn"} onClick={submitForm}>Submit</button>
               </div>
           </form>

        </>
    )
}

const ResetPasswordForm = ({setShowPasswordChangedMessage})=> {

    const [password, setPassword] = useState({1: '', 2: ''});
    const [isValid, setIsValid] = useState(false);

    const onPasswordChange = (e)=> {

        setPassword({...password, [e.target.dataset.id]: e.target.value});

        if((password[1].length !== 0 || password[2].length !== 0) && (password[1].length === password[2].length) && (password[1] === password[2])) setIsValid(true);   
            else setIsValid(false);       
        
    }


    const submitForm = (e)=> {
        e.preventDefault();

        setShowPasswordChangedMessage(true);
    }


    return (
        <>
            <span>The password should have at least 6 characters</span>
            <form className="form-control">
                   
                  {/* New Password Field */}
                  <PasswordField label="New Password" value={password[1]} onChange={onPasswordChange} id={1} />

                {/* Confirm Password Field */}
                <PasswordField label="Confirm Password" value={password[2]} onChange={onPasswordChange} id={2}  />

                   {/* <div className="form-item">
                       <label>Confirm Password</label>
                       <div className="form-group-item">
                            <input type={!showPassword2 ? "password" : "text"} placeholder="Enter password" value={password.confirmPass} onChange={onPasswordChange}/>
                            <img src={!showPassword2 ? show : hide} alt="Show password" onClick={(_, id=2)=> togglePassword(id)} />
                        </div>
                   </div> */}


               <div className="form-item">
                   <button className={ isValid ? "active-btn" : "inactive-btn"} onClick={submitForm}>Submit</button>
               </div>
           </form>
        </>
    )
}


const RecoveryEmailSent = ()=> {
    return (
        <div className="recovery-email-sent-container">
            <img src={checkCircle} alt="Check Circle" />
            <p>A recovery email has been sent to your email address. </p>
        </div>
    );
}


const PasswordChangedMessage = ()=> {
    return (
        <div className="password-changed-container">
            <img src={checkCircle} alt="Check Circle" />
            <p>Your password has been changed successfully</p>
        </div>
    );
}

export default ResetPasswordPage
