import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import avatar from '../../assets/icons/avatar.png';

const Dashboard = ()=> {
    const params = useParams();

    const [showDropDown, setShowDropDown] = useState(true);

    const toggleDropDown = _=> setShowDropDown(!showDropDown);

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
                   <img src={avatar} alt="Avatar" onClick={toggleDropDown}/>
               </div>

                <DropDown showDropDown={showDropDown} user={params.user} />
                
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

const DropDown = ({showDropDown, user})=> {
    const [selected, setSelected] = useState(1);
    

    const pickDropMenuItem = (e) => {
        setSelected(parseInt(e.target.dataset.id));
    }

    return (
        <div className={!showDropDown ? "drop-down hide-drop-down" : "drop-down show-drop-down"}>
            <h3 className="user-txt">{user.toUpperCase()}</h3>
            <span className="br-28">Profile</span>
            <small>Use Resource Edge as</small>
            <ul> 
                <li data-id={1} onClick={pickDropMenuItem}>Employee <span className={ selected === 1 ? "ok selected" : "ok" }></span></li>
                <li data-id={2} onClick={pickDropMenuItem}>Talent Manager <span className={ selected === 2 ? "ok selected" : "ok" }></span></li>
            </ul>

            <hr />

            <Link to="/">Logout</Link>
        </div>
    )
}

export default Dashboard
