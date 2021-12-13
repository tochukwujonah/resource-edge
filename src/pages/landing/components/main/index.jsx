import React from 'react'
import HumanResourceSectionComponent from './human-resource-section'
import LogisticsSectionComponent from './logistics-section'
import FinanceSectionComponent from './finance-section'
import PartnersSectionComponent from './partners-section'

import facebook from '../../../../assets/icons/facebook.png'
import twitter from '../../../../assets/icons/twitter.png'
import linkedin from '../../../../assets/icons/linkedin.png'
import instagram from '../../../../assets/icons/instagram.png'

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
                        <div className="social-icons">
                            <img src={facebook} alt="Facebook" />
                            <img src={twitter} alt="Twitter" />
                            <img src={linkedin} alt="LinkedIn" />
                            <img src={instagram} alt="Instagram" />
                        </div>
                        <span className="copy">Copyright © Genesys DevStudio . <span className="br-mini">All rights reserved</span></span>
                    </section>
                </div>
            </footer>
            
        </main>
    )
}

export default Main
