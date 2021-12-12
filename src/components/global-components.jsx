import React, { useState } from 'react'
import show from '../assets/icons/show.png';
import hide from '../assets/icons/hide.png';


export const Caption = ({ title, body })=> {
    return (
        <div className="caption">
            <h1>{ title }</h1>
            <small>{ body }</small>
        </div>
    )
}

export const Card = ({ icon, color, title, body, hasShadow=true })=> {
    return (
        <div className={hasShadow ? "card shadow" : "card"}>
            <div className="icon" style={{backgroundColor: color}}><img src={icon} /></div>
            <>
                <h1>{ title }</h1>
                <small>{ body }</small>
            </>
        </div>
    )
}

export const EmployeeCard = ({ icon, name, neutrals = "mono", floating = false })=> {
    return (
        <div className="emp-card-container">
            <div className={ floating ? "employee-card floating" : "employee-card" }>
                <img src={ icon } />
                <span style={ neutrals === "bi" ? {fontSize: "10.48px"} : null}> { name } </span>
                {
                    neutrals === "bi" ?
                        <div className="neural-bar-lg-group">
                            <br />
                            <span className="neutral-bar-lg"></span>
                            <span className="neutral-bar-lg"></span>
                        </div>
                    : 
                    <>
                        <br />
                        <span className="neutral-bar"></span>
                    </>
                }
            </div>
        </div>
    )
}

export const PasswordField = ({ label, value, onChange, id })=> {
    const [showPassword, setShowpassword] = useState(false);
    // const [password, setPassword] = useState({newPass: '', confirmPass: ''});
    // const [isValid, setIsValid] = useState(false);

    //Toggle password anonimity
    const togglePassword = ()=> {
        setShowpassword(!showPassword);
    }

    return (
        <div className="form-item">
            <label>{label}</label>
            <div className="form-group-item">
                <input type={!showPassword ? "password" : "text"} placeholder="Enter password" value={value} onChange={ onChange } data-id={id}/>
                <img src={!showPassword ? show : hide} alt="Show password" onClick={(togglePassword)} />
            </div>
        </div>
    )
}
