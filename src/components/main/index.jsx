import React from 'react'
import HumanResourceSectionComponent from './human-resource-section'
import LogisticsSectionComponent from './logistics-section'
import FinanceSectionComponent from './finance-section'
import PartnersSectionComponent from './partners-section'

const Main = ()=> {
    return (
        <main className="main-component">
            <HumanResourceSectionComponent />
            <LogisticsSectionComponent />
            <FinanceSectionComponent />
            <PartnersSectionComponent />

            <footer>
                
            </footer>
            
        </main>
    )
}

export default Main
