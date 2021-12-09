import React from 'react'
import { Caption, Card, EmployeeCard } from '../../global-components'

import sent from '../../../assets/icons/sent.svg'
import briefcase from '../../../assets/icons/briefcase.svg'


import Sizwe from '../../../assets/images/staffs/Sizwe.png'

import IframeComponent from '../../iframe-component'

const LogisticsSectionComponent = ()=> {
    return (
        <div className="main-component-item logistics-section">
            <div className="container">
                <div className="top">
                    <Caption title="Admin & Logistics" body="Manage and track company assets as well as logistics for travelling employees"/>

                    <Card icon={sent} color="#FF8B00" title="Travel & Logistics" body="Make travel requests, get approvals, and have access to travel information.
                    " hasShadow={false} />

                    <Card icon={briefcase} color="#008DA6" title="Asset Management" body="Manage the acquisition, assignment, and disposition of assets seamlessly.
                    " hasShadow={false} />
                </div>

                <IframeComponent title="Travel & Logistics" IframeBody={travelLogisticsIframe} />
            </div>
            
        </div>
    )
}



const travelLogisticsIframe = ()=> {
    return (
        <div className="disp-flex">
            <aside>

                <EmployeeCard icon={ Sizwe } name="Sizwe Bansi" />

            </aside>
            <main></main>
        </div>
    );
}

export default LogisticsSectionComponent;