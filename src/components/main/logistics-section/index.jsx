import React from 'react'
import { Caption, Card } from '../../global-components'

import sent from '../../../assets/icons/sent.svg'

const LogisticsSectionComponent = ()=> {
    return (
        <div className="main-component-item">
            <div className="container">
                <div className="top">
                    <Caption title="Admin & Logistics" body="Manage and track company assets as well as logistics for travelling employees"/>

                    <Card icon={sent} color="#FF8B00" title="Travel & Logistics" body="Make travel requests, get approvals, and have access to travel information.
                    " />
                </div>
            </div>
            
        </div>
    )
}

export default LogisticsSectionComponent;