import React, { Children } from 'react'
import styled from 'styled-components';
import'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer'
import Nav from './Nav'

const SiteBorderStyles = styled.div `
    max-width: 1000px;
    margin: 12rem auto 4rem auto;
    margin-top: clamp(1rem, 2vw, 12rem);
    padding: 5px;
    padding: clamp(5px, 1vw, 25px);
    min-width: 410px;
`;

const ContentStyles = styled.div `
    padding: 2rem;
`;
export default function Layout({ children }) {
    return (
    <>
        <GlobalStyles />    
        <SiteBorderStyles>
            <ContentStyles>
                <Nav />
                {children}
                <Footer />
            </ContentStyles>
      </SiteBorderStyles> 
    </>
    );
}