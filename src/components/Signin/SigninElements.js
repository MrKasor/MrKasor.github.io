import styled from 'styled-components'

export const SigninIcon = styled.img`
    height:400px;
    width: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
`

export const TopLine = styled.p`
    color: #ff6366;
    font-size: 28px;
    line-height: 16px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    text-align: center;
    font-weight: 600;
    margin-bottom: 120px;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`