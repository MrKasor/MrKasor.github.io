//import React from 'react'
import { Button } from '../ButtonElements'
import React from 'react'
import { 
    Column2, 
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Subtitle,
    Img,
    Heading,
    BtnWrap,
    TextWrapper,
    TopLine
} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, imgStart, 
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    link,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to="/signin"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80} //-80 pixels for the navbar
                                        primary={primary ? 1: 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
