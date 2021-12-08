import React from 'react'

export const Caption = ({ title, body })=> {
    return (
        <div className="caption">
            <h1>{ title }</h1>
            <small>{ body }</small>
        </div>
    )
}

export const Card = ({ icon, color, title, body })=> {
    return (
        <div className="card">
            <div className="icon"><img src={icon} /></div>
            <>
                <h1>{ title }</h1>
                <small>{ body }</small>
            </>
        </div>
    )
}


