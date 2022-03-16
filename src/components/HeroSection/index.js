import React, {useState} from 'react'
import Video from '../../videos/video5.mp4'
import { Button } from '../ButtonElements'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    HeroContent, 
    HeroH1, 
    HeroP
} from './HeroElements'


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Sandbox</HeroH1>
                <HeroP>
                    
                </HeroP>
                <HeroBtnWrapper>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
