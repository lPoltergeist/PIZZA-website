import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './Footer.elements'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
   <FooterContainer>
    <FooterWrap>
        <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaInstagram/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
            <FaYoutube/>
        </SocialIconLink>
        <SocialIconLink href="/" target="_blank" arial-label="Facebook">
        <FaFacebook/>
    </SocialIconLink>
            </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
   </FooterContainer>
  )
}

export default Footer