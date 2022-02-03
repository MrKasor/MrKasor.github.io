import React from 'react'
import Icon1 from '../../images/svg-23.svg'
import Icon2 from '../../images/svg-29.svg'
import Icon3 from '../../images/svg-30.svg'
import { ServicesWrapper, ServicesContainer, ServicesH2, ServicesIcon, ServicesCard, ServicesP, ServicesH1 } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Abilities</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard to='/signin'>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Effective Teamwork</ServicesH2>
                        <ServicesP>Communication experience that leads to a strong team member/leader.</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/signin'>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Data & Algorithms</ServicesH2>
                        <ServicesP>Adept at Data Structures and Algoritms for creative and efficient solutions.</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/signin'>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Focused Worker</ServicesH2>
                        <ServicesP>Able to work under stress and time crunches without issue. </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
