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

    return (
        <>
            {/* My form */}
            {
                !showValidateEmailSentToEmail ? <ResetPasswordForm /> : <RecoveryEmailSent />
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

const ResetPasswordForm = ()=> {

    const [showPassword1, setShowpassword1] = useState(false);
    const [showPassword2, setShowpassword2] = useState(false);
    const [password, setPassword] = useState({newPass: '', confirmPass: ''});
    const [isValid, setIsValid] = useState(false);

    const onPasswordChange = (e)=> {
        
            setPassword({...password, newPass: e.target.value});   
        
    }


    const submitForm = (e)=> {

    }


    return (
        <>
            <span>To enable us reset your password, enter your email below</span>
            <form className="form-control">
                   
                  {/* New Password Field */}
                  <PasswordField label="New Password" value={password.newPass} onChange={onPasswordChange} />

                    {/* Confirm Password Field */}

                   <div className="form-item">
                       <label>Confirm Password</label>
                       <div className="form-group-item">
                            <input type={!showPassword2 ? "password" : "text"} placeholder="Enter password" value={password.confirmPass} onChange={onPasswordChange}/>
                            <img src={!showPassword2 ? show : hide} alt="Show password" onClick={(_, id=2)=> togglePassword(id)} />
                        </div>
                   </div>


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


export default ResetPasswordPage
