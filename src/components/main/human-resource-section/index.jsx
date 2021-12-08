import React from 'react'
import { Caption, Card } from '../../global-components'
import team from '../../../assets/icons/team.svg'
import calender from '../../../assets/icons/calender.svg'
import goal from '../../../assets/icons/goal.svg'

const HumanResourceSectionComponent = ()=> {
    return (
        <section className="main-component-item hr-section">
            <div className="container">

                <Caption title="Human Resources" body="Onboard new employees, manage the employee lifecycle and measure employee performance." />

                <div className="cards">
                    <Card icon={team} color="#5243AA" title="Employee Management" body="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team." />

                    <Card icon={goal} color="#008DA6" title="Performance Management" body="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews." />

                    <Card icon={calender} color="#42526E" title="Paid time off" body="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance." />

                </div>
            </div>

            
        </section>
    )
}

export default HumanResourceSectionComponent;