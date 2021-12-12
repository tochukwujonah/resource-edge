import React, { useState } from 'react'
import Page from '../Page'
import checkCircle from '../../assets/icons/check-circle.png'

const ResetPasswordPage = ()=> {
    

    return (
        <>
        
        <Page title="Reset Password" caption="To enable us reset your password, enter your email below" ChildComponent={ ChildComponent } link="Back to login" />
        
        </>
    )
}

const ChildComponent = ()=> {

    const [isValid, setIsValid] = useState(false); //Track if email is valid or not
    const [showValidateEmailSentToEmail, setShowValidateEmailSentToEmail] = useState(false); //Switch screen to recovery email sent message

    return (
        <>
            {/* My form */}
            {
                !showValidateEmailSentToEmail ? <EmailForm validityState={{isValid, setIsValid}} setShowValidateEmailSentToEmail={setShowValidateEmailSentToEmail} /> : <RecoveryEmailSent />
            }

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
