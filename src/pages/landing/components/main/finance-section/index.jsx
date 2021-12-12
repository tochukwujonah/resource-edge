import React from 'react'

import taskList from '../../../../../assets/icons/task list.svg'
import pay from '../../../../../assets/icons/pay.svg'

import { Caption, Card } from '../../../../../components/global-components'

import IframeComponent from '../../iframe-component'

import Sizwe from '../../../../../assets/images/staffs/Sizwe.png'
import Ebele from '../../../../../assets/images/staffs/Ebele.png'
import Banigo from '../../../../../assets/images/staffs/Banigo.png'
import Abongile from '../../../../../assets/images/staffs/Abongile.png'

const employees = [
    {avatar: Sizwe, name: "Sizwe Bansi", role: "CEO", earning: "50, 000", status: "Sent"},
    {avatar: Ebele, name: "Ebele Rewani", role: "Director", earning: "45, 000", status: "Pending"},
    {avatar: Banigo, name: "Banigo Selema", role: "Marketer", earning: "40, 000", status: "Pending"},
    {avatar: Abongile, name: "Abongile Amba", role: "Sales", earning: "30, 000", status: "Sent"}
];


const FinanceSectionComponent = ()=> {

    return (
        <div className="main-component-item finance-section">
            {/* Design */}
            <div className="design design-left finance-design-left"></div>
            <div className="design design-right finance-design-right"></div>


            <div className="container">
            <div className="top">
                    <Caption title="Finance" body="Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies"/>

                    <Card icon={taskList} color="#0052CC" title="RE Vouchers" body="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers
                    " hasShadow={false} />

                    <Card icon={ pay } color="#008DA6" title="Payroll" body="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.
                    " hasShadow={ false } />
                </div>

                <IframeComponent title="Payroll" IframeBody={ financeIframe } />

            </div>
        </div>
    )
}

export const financeIframe = ()=> {
    return (
        <div>
            <span className="neutral-bar"></span>
            <h3>January Payroll</h3>
            <div className="employees-table">
                <div className="table-header">Employees</div>
                <ul>
                    <li className="t-headers">
                        <span><input type="checkbox" /></span>
                        <span>SN</span>
                        <span>Full Name</span>
                        <span>Role</span>
                        <span>Earning</span>
                        <span>Status</span>
                    </li>
                    {
                        employees.map((emp, idx) =>(
                            <li key={ idx } className="row">
                                <span><input type="checkbox" /></span>
                                <span>GO{ idx+1 }</span>
                                <span><img src={ emp.avatar } />{ emp.name }</span>
                                <span>{ emp.role }</span>
                                <span>{ emp.earning }</span>
                                <span>{ emp.status }</span>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    );
}

// const List = ()=> {
//     return (
//         <div className="list"></div>
//     )
// }

// const ListHeader = ()=> {
//     return (
//         <div className="list-header">Employees</div>
//     )
// }

// const ListItems = ()=> {
//     return (
//         <div className="list-items"></div>
//     )
// }

// const ListItem = ()=> {
//     return (
//         <div className="list-item"></div>
//     )
// }

export default FinanceSectionComponent;