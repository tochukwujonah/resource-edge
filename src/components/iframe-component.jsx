import React from 'react'
import logo from '../assets/images/logo.png'
import notification from '../assets/icons/notification.svg'
import avatar from '../assets/images/staffs/right-content.png'
import search from '../assets/icons/search.png';

import { EmployeeCard } from './global-components';

const IframeComponent = ()=> {
    return (
        <div className="iframe">
            <header>
                <div className="left">
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="logo">
                        <img src={logo} />
                    </div>
                    
                    <h3>Employee Directory</h3>
                </div>

                <div className="right">
                    <img src={notification} />
                    <img src={avatar} />
                </div>
            </header>

            <main className="iframe-main-section">
                <div className="container">
                    <span className="neutral-bar"></span>
                    <h3>Employees</h3>

                    <div className="search-section">
                        <form>
                            <input placeholder="search" />
                        </form>
                        <img src={search} />
                    </div>

                    <div className="neutral-bars">
                        <span className="neutral-bar"></span>
                        <span className="neutral-bar"></span>
                        <span className="neutral-bar"></span>
                        <span className="neutral-bar"></span>
                        </div>


                    <div className="employees">
                        <EmployeeCard />
                    </div>


                </div>




            </main>
            
        </div>
    )
}

export default IframeComponent
