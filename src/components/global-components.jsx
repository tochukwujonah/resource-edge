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

export const EmployeeCard = ()=> {
    return (
        <div className="employee-card">
            
        </div>
    )
}


