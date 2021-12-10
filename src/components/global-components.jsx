import React from 'react'

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

export const EmployeeCard = ({ icon, name, neutrals = 1 })=> {
    return (
        <div className="emp-card-container">
            <div className="employee-card">
                <img src={ icon } />
                <span style={ neutrals === 2 ? {fontSize: "10.48px"} : null}> { name } </span>
                {
                    neutrals === 2 ?
                        <div className="neural-bar-lg-group">
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


