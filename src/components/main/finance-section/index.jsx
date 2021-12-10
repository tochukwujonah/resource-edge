import React from 'react'

import taskList from '../../../assets/icons/task list.svg'
import pay from '../../../assets/icons/pay.svg'

import { Caption, Card } from '../../global-components'

import IframeComponent from '../../iframe-component'


const FinanceSectionComponent = ()=> {
    return (
        <div className="main-component-item finance-section">
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
                
            </div>
        </div>
    );
}

export default FinanceSectionComponent;