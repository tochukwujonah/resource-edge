import React from 'react'
import HumanResourceSectionComponent from './human-resource-section'
import LogisticsSectionComponent from './logistics-section'
import FinanceSectionComponent from './finance-section'

const Main = ()=> {
    return (
        <main className="main-component">
            <HumanResourceSectionComponent />
            <LogisticsSectionComponent />
            <FinanceSectionComponent />
            
        </main>
    )
}

export default Main
