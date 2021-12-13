import React from 'react'
import Page from '../Page'

const SignUp = ()=> {
    return <Page ChildComponent={ChildComponent} title="SignUp" caption="Sign up today to get started" link="Login if already signed up" path="/login" />
}



const ChildComponent = ()=> {
    return (
        <></>
    )
}

export default SignUp
