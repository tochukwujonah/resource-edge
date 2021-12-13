import React from 'react'
import Page from '../Page'

const SignUp = ()=> {
    return <Page ChildComponent={ChildComponent} title="SignUp" caption="Sign up today to get started" link="Login if already signed up" path="/login" />
}



const ChildComponent = ()=> {
    return (
        <form className="form-control">
            <div className="form-item">
                <label>Fullname</label>
                <div className="form-group-item">
                    <input placeholder="Enter your fullname" />
                </div>
            </div>

            <div className="form-item">
                <label>Email</label>
                <div className="form-group-item">
                    <input placeholder="Enter your email" />
                </div>
            </div>
        </form>
    )
}

export default SignUp
