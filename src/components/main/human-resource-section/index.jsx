import React from 'react'
import { Caption, Card } from '../../global-components'
import team from '../../../assets/icons/team.svg'
import calender from '../../../assets/icons/calender.svg'
import goal from '../../../assets/icons/goal.svg'
import IframeComponent from '../../iframe-component'


import search from '../../../assets/icons/search.png'

import { EmployeeCard } from '../../global-components'

import Sizwe from '../../../assets/images/staffs/Sizwe.png'
import Ebele from '../../../assets/images/staffs/Ebele.png'
import Banigo from '../../../assets/images/staffs/Banigo.png'
import Abongile from '../../../assets/images/staffs/Abongile.png'


const HumanResourceSectionComponent = ()=> {
    return (
        <section className="main-component-item hr-section">
            <div className="container">

                <Caption title="Human Resources" body="Onboard new employees, manage the employee lifecycle and measure employee performance." />

                <div className="cards">
                    <Card icon={team} color="#5243AA" title="Employee Management" body="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team." hasShadow = {false}/>

                    <Card icon={goal} color="#008DA6" title="Performance Management" body="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews." />

                    <Card icon={calender} color="#42526E" title="Paid time off" body="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance." hasShadow = {false}/>

                </div>

                {/* My iframe component for employee directory goes here */}
                <IframeComponent title="Employee Directory" IframeBody={employeeDirectoryIframe} />
                
            </div>

            
        </section>
    )
}



const employeeDirectoryIframe = ()=> {
    return (
        <>
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
                    <EmployeeCard icon={Sizwe} name="Sizwe Bansi" />
                    <EmployeeCard icon={Ebele} name="Ebele Rewane" />
                    <EmployeeCard icon={Banigo} name="Banigo Selema" />
                    <EmployeeCard icon={Abongile} name="Abongile Amba" />
                </div>
        </>
    );
}

export default HumanResourceSectionComponent;