import React, { useState } from 'react'
import Page from '../Page'

const ResetPasswordPage = ()=> {
    return (
        <>
        
        <Page title="Reset Password" caption="To enable us reset your password, enter your email below" ChildComponent={ ChildComponent } link="Back to login" />
        
        </>
    )
}

const ChildComponent = ()=> {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);

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
    }

    //Email validate function
    const validateEmail = (mail) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/;
            
            if(regex.test(mail)) return true;
            return false;
    }

    return (
        <>
            {/* My form */}
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

                <hr/>
        </>
    )
}

export default ResetPasswordPage
