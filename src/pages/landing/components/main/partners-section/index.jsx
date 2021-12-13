import React from 'react'

import unn from '../../../../../assets/images/partners/unn.png'
import tenece from '../../../../../assets/images/partners/tenece.png'
import estate from '../../../../../assets/images/partners/private-estate.png'
import genesys from '../../../../../assets/images/partners/genesys.png'

const PartnersSectionComponent = ()=> {
    return (
        <div className="partners-container">
            <div className="container partners">
                <div className="partner">
                    <img src={ unn } alt="University of Nigeria Nsukka" />
                </div>
                
                <div className="partner">
                    <img src={ tenece } alt="Tenece" />
                </div>

                <div className="partner">
                    <img src={ estate } alt="Private Estate" />
                </div>

                <div className="partner">
                    <img src={ genesys } alt="Genesys" />
                </div>
            </div>
            
        </div>
    )
}

export default PartnersSectionComponent;