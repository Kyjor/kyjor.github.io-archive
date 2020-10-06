import { Link } from 'gatsby';
import React from 'react';
import { useState, useEffect } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react'
import styled from 'styled-components';
import SocialMediaIcon from '../components/SocialMediaIcon';
import TwitterContainer from '../components/TwitterContainer';

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
const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <div style={viewportCss} ref={emblaRef}>
      <div style={containerCss}>
        <div style={slideCss}>Slide 1</div>
        <div style={slideCss}>Slide 2</div>
        <div style={slideCss}>Slide 3</div>
      </div>
    </div>
  )
}


const SectionStyles = styled.section`
    margin: 4rem;
    text-align: center;
  
    iframe {
      width: 60vw;
      height: 30vw;
      background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

    }
    p{
      background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

    }
    
`;

  
const FlexContainerStyles = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2%;
`;

const LeftPanelStyles = styled.div`
  flex-grow: 3;
  background-color: #454343;
  margin-top: 5%;
  p{
    line-height: 2vw;
    padding: 2%
    
  }
`;
const RightPanelStyles = styled.div`
  flex-basis: 75%;
  flex-grow: 2;
  background-color: #454343;
  margin-left: 5%;
  max-height: 500px;
`;

const InnerPanelStyles = styled.div`
  
  margin: 1%;
  background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

`;

const RightPanelListStyles = styled.ul`
        width: 100%;
        margin: 0;
        padding: 3%;
        
        border-left: .3rem solid #9cb3c9;
        list-style: none;
        background-color: #1f1f1f;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

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

const SlidesStyles = styled.ul`
  margin: 0;
    padding: 0;
    list-style: none;

ul {
    margin-left: 1.1rem;
}
dl, ol, ul {
    line-height: 1.6;
    list-style-position: outside;
    margin-bottom: 1.25rem;
}
dl, h6, ol, ul {
    font-size: 1rem;
}
blockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {
    margin: 0;
    padding: 0;
}
dl, ol, p, ul {
    font-family: inherit;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
`;

const ListStyles = styled.li`

    width: 100%;
    float: left;
    margin-right: -100%;
    position: relative;
    opacity: 0;
    display: block;
    z-index: 1;

.flex-control-nav, .flex-direction-nav, .slides, .slides>li {
    margin: 0;
    padding: 0;
    list-style: none;
}
blockquote, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {
    margin: 0;
    padding: 0;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
dl, ol, ul {
    line-height: 1.6;
    list-style-position: outside;
    margin-bottom: 1.25rem;
}
dl, h6, ol, ul {
    font-size: 1rem;
}
dl, ol, p, ul {
    font-family: inherit;
}
ul {
    list-style-type: disc;
}
`;
export default function HomePage() {
  
  return (

    <>
    <EmblaCarousel/>
    {/* <RowStyles>
      <ContainerStyles>
        <FlexSliderStyles>
          <SlidesStyles>
                          <ListStyles>                  
                                      <a href="https://www.roguelegacy2.com/" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2020/08/cdg_site_rl2banner-1.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="https://www.fangamer.com/collections/rogue-legacy" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2019/08/cdg_site_roguelegacy_banner_merch.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="https://www.nintendo.com/en_CA/games/detail/full-metal-furies-switch" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2018/11/nintendo_site_header_out.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="https://apps.apple.com/us/app/rogue-legacy/id1453189467" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2019/08/cdg_site_roguelegacyWE_banner.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="http://cellardoorgames.com/our-games/full-metal-furies/" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2018/10/fmf_site_header.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="http://cellardoorgames.com/our-games/rogue-legacy/" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2019/08/cdg_site_roguelegacy_header_up.png" alt=""/></a>
                                </ListStyles>
                          <ListStyles>                  
                                      <a href="http://cellardoorgames.com/our-games/rogue-legacy/" target="_self"><img src="https://cellardoorgames.com/wp-content/uploads/2015/09/header4-970x420.jpg" alt=""/></a>
                                </ListStyles>
                      </SlidesStyles>
          <div class="custom-navigation-slider">
              <a href="#" class="flex-prev"><div class="fs1" aria-hidden="true" data-icon="&#x34;"></div></a>
              <a href="#" class="flex-next"><div class="fs1" aria-hidden="true" data-icon="&#x35;"></div></a>
          </div>
        </FlexSliderStyles>
      </ContainerStyles>
    </RowStyles>
    */}
  
  
    <FlexContainerStyles> 
    <LeftPanelStyles>
      <SectionStyles>
        <h1>Welcome to Kyjor Games!</h1>
        <p>Hey everyone! Welcome to the page for the one-man studio, Kyjor Games. My name is Kyle Conel, and I am a 
          solo indie game developer with a passion for creating experiences. Here, you will find my past, current and upcoming
          projects and be up to date on my thoughts in my blog. If you have any questions, feel free to contact me!
        </p>
      </SectionStyles>
      <SectionStyles>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2ID-1lHIjYQ"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </SectionStyles>
      <SectionStyles>
        <TwitterContainer/>
      </SectionStyles>

    </LeftPanelStyles>
    <RightPanelStyles>
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

      </SectionStyles>
    </RightPanelStyles>

    
    </FlexContainerStyles>
  </>
  );


}

