import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import avatar from '../../assets/icons/avatar.png'

import employee from '../../assets/icons/Employee.png'
import talentManager from '../../assets/icons/Talent Manager.png'
import check from '../../assets/icons/check.png'

const Dashboard = ()=> {
    const params = useParams();

    const [showDropDown, setShowDropDown] = useState(true);
    const [dashboardCaption, setDashboardCaption] = useState('Employee');

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

                    <span>{ dashboardCaption } Dashboard</span>
               </div>

               <div className="header-right">
                   <img src={avatar} alt="Avatar" onClick={toggleDropDown}/>
               </div>

                <DropDown showDropDown={showDropDown} user={params.user} setDashboardCaption={setDashboardCaption} />
                
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

const DropDown = ({showDropDown, user, setDashboardCaption})=> {
    const [selected, setSelected] = useState(0);
    const [listItems, setListItems] = useState([
        {icon: employee, label: 'Employee', selected: true},
        {icon: talentManager, label: 'Talent Manager', selected: false}
    ]);

    /*
    <li data-id={1} onClick={pickDropMenuItem}>Employee <span className={ selected === 1 ? "ok selected" : "ok" }></span></li>
                <li data-id={2} onClick={pickDropMenuItem}>Talent Manager <span className={ selected === 2 ? "ok selected" : "ok" }></span></li> */

    const pickDropMenuItem = (id) => {
        const listItemsClone = [...listItems];
        const clickedItem = listItemsClone.splice(id, 1);
        clickedItem[0].selected = true; //Current element is selected
        listItemsClone[0].selected = false; //Unselect all other items, 1 in our case
        const updatedList = [...clickedItem, ...listItemsClone];
        setListItems(updatedList);

        //Set dashboard caption
        setDashboardCaption(()=> {
            //Check if clickedItem's label has two or more words joined
            //If one word, return else split into array and join the first characters of each word
            if(clickedItem[0].label.split(' ').length > 1) {
                const splittedLabel = clickedItem[0].label.split(' ');
                let initials = '';
                for(let char of splittedLabel){
                    initials += char[0];
                }

                return initials.toUpperCase();
            }

            return clickedItem[0].label;
        });
        
    }

    return (
        <div className={!showDropDown ? "drop-down hide-drop-down" : "drop-down show-drop-down"}>
            <h3 className="user-txt">{user.toUpperCase()}</h3>
            <span className="br-28">Profile</span>
            <small>Use Resource Edge as</small>
            <ul> 
                {
                    listItems.map((item, idx) => (
                        <li key={idx} onClick={()=> pickDropMenuItem(idx)}>
                            <span><img src={item.icon} alt={item.label} />{item.label}</span>
                            <img className={item.selected ? "check show-check" : "check"} src={check} alt="Check" />
                        </li>
                    ))
                }
                
            </ul>

            <hr />

            <Link to="/">Logout</Link>
        </div>
    )
}

export default Dashboard
