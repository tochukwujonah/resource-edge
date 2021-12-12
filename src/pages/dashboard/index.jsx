import React from 'react'
import { useParams } from 'react-router-dom'
import avatar from '../../assets/icons/avatar.png';

const Dashboard = ()=> {
    const params = useParams();

    return (
        <div className="dashboard">
            <header className="header dashboard-header">
               <div className="header-left">
                <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <span className="logo">resource edge</span>

                    <hr className="vertical-hr" />

                    <span>TM Dashboard</span>
               </div>

               <div className="header-right">
                   <img src={avatar} alt="Avatar"/>
               </div>

                
            </header>

            <main>

                <div className="container dashboard-container">
                    <h1>Hello, {params.user}</h1>
                    <h5>Welcome and good to have you back</h5>
                    <br /><br /><br />

                    <h3>Things to do</h3>
                    <div className="todos">
                        <div className="todo">
                            <div className="todo-left">
                                <div className="empty-circle"></div>
                                <small>Upload your employee performance agreement</small>
                            </div>

                            <button className="btn-empty">Begin</button>

                        </div>

                        <div className="todo">
                            <div className="todo-left">
                                <div className="empty-circle"></div>
                                <small>Start quarterly self review</small>
                            </div>

                            <button className="btn-grey">Resume</button>

                        </div>
                    </div>
                </div>

            </main>
            
        </div>
    )
}

const DropDown = (item)=> {
    return (
        <div className="drop-down">
            
        </div>
    )
}

export default Dashboard
