import React from 'react'
import Illustration from './illustration'
import { Caption } from '../../../../components/global-components'

const Showcase = ()=> {
    return (
        <section className="showcase">
            <div className="container showcase-container">
                <Caption title="Throw paperwork into the trash where it belongs." body="Eliminate all the hassle involved in managing people operations by automating it." />

                <Illustration />
            </div>
            
        </section>
    )
}

export default Showcase
