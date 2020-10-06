import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import twitter from '../assets/images/twitterIcon.svg';
import fb from '../assets/images/fbIcon.svg';
import insta from '../assets/images/instaIcon.svg';
import linkedIn from '../assets/images/linkedInIcon.svg';
import tumblr from '../assets/images/tumblrIcon.svg';
import twitch from '../assets/images/twitchIcon.svg';
import yt from '../assets/images/ytcon.svg';



const ImgStyles = styled.img`
    margin: .25rem;
    
`;
const IconBlockStyles = styled.div`
  background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

`;
export default function SocialMediaIcon ({icon, link, name}){
    return (
        <> 
        <IconBlockStyles>
            <ImgStyles src={twitter} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={fb} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={insta} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={tumblr} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={twitch} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={yt} href={link} alt={name} width="35" height="35"/>
            <ImgStyles src={linkedIn} href={link} alt={name} width="35" height="35"/>

        </IconBlockStyles>
            
        </>
    );
}