import React from 'react'

import unn from '../../../assets/images/partners/unn.png'
import tenece from '../../../assets/images/partners/tenece.png'
import estate from '../../../assets/images/partners/private-estate.png'
import genesys from '../../../assets/images/partners/genesys.png'

const PartnersSectionComponent = ()=> {
    return (
        <div className="container partners">
            <img src={ unn } alt="University of Nigeria Nsukka" />
            <img src={ tenece } alt="Tenece" />
            <img src={ estate } alt="Private Estate" />
            <img src={ genesys } alt="Genesys" />
            
        </div>
    )
}

export default PartnersSectionComponent;