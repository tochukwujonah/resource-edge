import React from 'react'

export const Caption = (props)=> {
    return (
        <div className="caption">
            <h1>{props.title}</h1>
            <small>{props.body}</small>
        </div>
    )
}

export const Card = (props)=> {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <small>{props.body}</small>
        </div>
    )
}


