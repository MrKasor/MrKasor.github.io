import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Under Construction</FooterLinkTitle>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>Under Construction</FooterLinkTitle>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Under Construction</FooterLinkTitle>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                            <FooterLink to='/signin'>Temp</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>RyanKasor</SocialLogo>
                        <WebsiteRights>RyanKasor © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com' target="_blank" aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com' target="_blank" aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com' target="_blank" aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com' target="_blank" aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com' target="_blank" aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
