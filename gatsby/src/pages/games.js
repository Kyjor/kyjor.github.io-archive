import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/Nav';
import GameList from '../components/GameList';
import SEO from '../components/SEO';
import styled from 'styled-components';


const SectionStyles = styled.section`
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;
export default function GamesPage({data}) {
  const games = data.games.nodes;

  return (
    <>      
      <SEO title='Games Created By Kyjor' />
     
      <GameList games={games}
      />
    
      
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