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
                <div className="container footer-container">
                    <section className="left">
                        <h1 className="h1">resource edge</h1>
                        <span>Throw paperwork into the trash.</span>
                    </section>
                    <section className="right">
                        <span>Copyright © Genesys DevStudio . All rights reserved</span>
                    </section>
                </div>
            </footer>
            
        </main>
    )
}

export default Main
