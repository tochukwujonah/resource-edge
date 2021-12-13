import React, { useState } from 'react'
import Page from '../Page'
import { useNavigate } from 'react-router-dom'

const SignUp = ()=> {
    return <Page ChildComponent={ChildComponent} title="SignUp" caption="Sign up today to get started" link="Login if already signed up" path="/login" />
}



const ChildComponent = ()=> {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        'fullname': '',
        'email': '',
        'password': ''
    });


    const onInputChange = (e)=> {

        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSignup = (e)=> {
        e.preventDefault();


        const users = localStorage.getItem('users') !== null ? localStorage.getItem('users') : [];
        const updatedUsers = [...users, user];

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setUser({
            'fullname': '',
            'email': '',
            'password': ''
        })

        alert('Congratulations, you have be signed up. We are taking you to the login page now!');
        navigate("/login");
    }

    return (
        <>
        <span>Sign up today to get started</span>
        <form className="form-control" onSubmit={onSignup}>
            <div className="form-item">
                <label>Fullname</label>
                <div className="form-group-item">
                    <input placeholder="Enter your fullname" name="fullname" onChange={onInputChange} value={user.fullname}  />
                </div>
            </div>

            <div className="form-item">
                <label>Email</label>
                <div className="form-group-item">
                    <input type="email" placeholder="Enter your email" name="email" onChange={onInputChange} value={user.email} />
                </div>
            </div>

            <div className="form-item">
                <label>Password</label>
                <div className="form-group-item">
                    <input type="password" placeholder="Enter your choice password" name="password" onChange={onInputChange} value={user.password} />
                </div>
            </div>

            <div className="form-item">
                <div className="form-group-item">
                    <button type="submit">Signup</button>
                </div>
            </div>
        </form>

        </>
    )
}

export default SignUp
