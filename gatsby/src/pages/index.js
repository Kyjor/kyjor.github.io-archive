import { Link } from 'gatsby';
import React from 'react';
import { useState, useEffect } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react'
import styled from 'styled-components';
import SocialMediaIcon from '../components/SocialMediaIcon';
import TwitterContainer from '../components/TwitterContainer';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import PageTopper from '../components/PageTopper/PageTopper';

const viewportCss = {
  overflow: 'hidden',
}
const containerCss = {
  display: 'flex',
}
const slideCss = {
  position: 'relative',
  minWidth: '100%',
}


const SectionStyles = styled.section`
    margin: 4%;
    text-align: center;

    h1{
      margin-top: 0;
      margin-bottom: 0.67em;
    }
    

    p{
      font-size: 18px;
      font-weight: 1; 
      
    }
  
    
`;

const ParagraphStyles = styled.p`
  line-height: 2vw;
  text-align: center;
`;

const VideoContainerStyles = styled.div`
  margin-top: 5em;
  iframe {
      width: 100%;
      height: clamp(30rem, 60vw, 60rem);
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
      border-radius: 1em;
    }
`;
  
const FlexContainerStyles = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 40%;
`;

const LeftPanelStyles = styled.div`
  border-radius: 1em;
  flex-grow: 2;
  flex-basis: 75%;
  min-width: 800px;

  margin-top: 5%;
  p{
    line-height: 2vw;
    padding: 2%
    
  }
`;
const RightPanelStyles = styled.div`
  border-radius: 1em;

  flex-grow: 1;
  flex-basis: 25%;

  background-color: #454343;
  margin-left: 5%;
  min-width: 400px;
  max-height: 1000px;
  right: 0px;
`;


const RightPanelListStyles = styled.ul`
        margin: 0%;
        padding: 3%;
        
        border-left: .3rem solid #9cb3c9;
        list-style: none;
        background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
        &:hover {
            border-color: white;
        }
        li {
          margin-bottom: 1rem;
        }

        a{
          text-decoration: none;
          &:hover {
            color: var(--red);
        }
        }
`;

const RowStyles = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 62.5rem;
    .accordion:after, .accordion:before, .row .row.collapse:after, .row .row.collapse:before, .row .row:after, .row .row:before, .row:after, .row:before {
    display: table;
    content: " ";
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
`;

const ContainerStyles = styled.div`
  @media only screen and (max-width: 40em)
    {
    padding: 0;
    margin: 0;
}

    width: 100%;

    float: left;
position: relative;

    padding-left: .9375rem;
    padding-right: .9375rem;
    width: 100%;
    float: left;

`;
const FlexSliderStyles = styled.div` 
  height: auto;

blockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {
    margin: 0;
    padding: 0;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

div {
    display: block;
}
`;



export default function HomePage() {
  
  return (

    <>
    {/* <ImageSlider/> */}
  

        <PageTopper title='Welcome to Kyjor Games!'/>
        <ParagraphStyles>Hey everyone! Welcome to the page for the one-man studio, Kyjor Games. My name is Kyle Conel, and I am a 
          solo indie game developer with a passion for creating experiences. Here, you will find my past, current and upcoming
          projects and be up to date on my thoughts in my blog. If you have any questions, feel free to  <Link to="/contact" activeStyle={{ color: "red" }}>contact me</Link>!
        </ParagraphStyles>
      <VideoContainerStyles>
        <iframe  src="https://www.youtube.com/embed/2ID-1lHIjYQ"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </VideoContainerStyles>
      

  
    {/* <RightPanelStyles>
    <SectionStyles>
        <h2>
          Latest Activity
        </h2>
        <RightPanelListStyles>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Blog Post: SOTU Address</Link>
            </li>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Tutorial: How to sell fruit</Link>
            </li>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Game Update: Life Bound 0.02</Link>
            </li>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Tutorial: How to sell fruit</Link>
            </li>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Tutorial: How to sell fruit</Link>
            </li>
          </RightPanelListStyles>
          <h2>
            Social Links
          </h2>
          <SocialMediaIcon icon='twitter' link='https://twitter.com/KyjorDev' name='Twitter' />
          <SectionStyles>
        <TwitterContainer/>
      </SectionStyles>
      </SectionStyles>
    </RightPanelStyles> */}

  </>
  );


}

