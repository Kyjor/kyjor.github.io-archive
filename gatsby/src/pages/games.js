import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/Nav';
import GameList from '../components/GameList';
import SEO from '../components/SEO';
import styled from 'styled-components';
import PageTopper from '../components/PageTopper/PageTopper';


const SectionStyles = styled.section`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    margin-bottom: 20%;

   
`;

export default function GamesPage({data}) {
  const games = data.games.nodes;

  return (
    <>      
      <SEO title='Games Created By Kyjor' />
      <PageTopper title='Games Created By Kyjor'/>

     <SectionStyles>
     
       <GameList games={games}
      />
     </SectionStyles>
      
    
      
    </>


  );
}


export const query = graphql`
query GameQuery {
  games: allSanityGame{
    nodes {
      name
      description
      id
      slug {
        current
      }
      image {
        asset {
          fixed(width: 200, height: 200) {
            ...GatsbySanityImageFixed
          }
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}

`;