import React from 'react'
import { Caption, Card, EmployeeCard } from '../../../../../components/global-components'

import sent from '../../../../../assets/icons/sent.svg'
import briefcase from '../../../../../assets/icons/briefcase.svg'

import plane from '../../../../../assets/icons/plane.svg'
import bed from '../../../../../assets/icons/bed.svg'


import Sizwe from '../../../../../assets/images/staffs/Sizwe.png'

import IframeComponent from '../../iframe-component'

const LogisticsSectionComponent = ()=> {
    return (
        <div className="main-component-item logistics-section">
            {/* Design */}
            {/* <div className="design design-left"></div>
            <div className="design design-right"></div> */}

            <div className="container">
                <div className="top">
                    <Caption title="Admin & Logistics" body="Manage and track company assets as well as logistics for travelling employees"/>

                    <Card icon={sent} color="#FF8B00" title="Travel & Logistics" body="Make travel requests, get approvals, and have access to travel information.
                    " hasShadow={false} />

                    <Card icon={ briefcase } color="#008DA6" title="Asset Management" body="Manage the acquisition, assignment, and disposition of assets seamlessly.
                    " hasShadow={ false } />
                </div>

                <IframeComponent title="Travel & Logistics" IframeBody={ travelLogisticsIframe } />
            </div>
            
        </div>
    )
}



const travelLogisticsIframe = ()=> {
    return (

        <>

            <h3>Travel Request</h3>
            <div className="disp-flex">
                <aside>
                    <EmployeeCard icon={ Sizwe } name="Sizwe Bansi" neutrals="bi" />

                </aside>
                <main>

                    <div className="head-section">
                        <h3>Travel Details</h3>
                    </div>

                    <div className="content">
                        <div>
                            <h5>Departure Date</h5>
                            <p>September 25, 2021</p>
                        </div>
                        <div>
                            <h5>Return Date</h5>
                            <p>October 7, 2021</p>
                        </div>
                        <div>
                            <h5>Travel Type</h5>
                            <p>Business</p>
                        </div>
                        <div>
                            <h5>Destination</h5>
                            <p>Lagos, Nigeria.</p>
                        </div>
                        <br />
                        <hr />
                        <h5>More information</h5>

                        <div className="more-info">
                            <div className="left-info">
                                <span style={{"--w":"1"}}></span>
                                <span style={{"--w":".8"}}></span>
                                <span style={{"--w":".6"}}></span>
                                <span style={{"--w":".4"}}></span>
                            </div>
                            <div className="right-info">
                                <div>
                                    <img src={ plane } />
                                    <span></span>
                                </div>

                                <div>
                                    <img src={ bed } />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        
        </>
    );
}

export default LogisticsSectionComponent;