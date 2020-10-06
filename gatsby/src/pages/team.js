import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';


const TeamGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

const TeamStyles = styled.div`
    a{
        text-decoration: none;


    }
    .gatsby-image-wrapper {
        height: 400px;
    }
`;

export default function TeamPage({ data }){
    const team = data.team.nodes;

    return (
        <>
            <SEO title={`Team`}/>

            <TeamGrid>
                {team.map(person => (
                    <TeamStyles>
                        <Link to={`/team/${person.slug.current}`}>
                            <h2>
                                <span>{person.name}</span>
                            </h2>
                        </Link>
                        <Img fluid={person.image.asset.fluid}/>
                <p>{person.description}</p>
                    </TeamStyles>
                ))}
            </TeamGrid>
        </>
    );
}

export const query = graphql`
# query ($skip: Int = 0, $pageSize: Int = 2){
  query {
  team: allSanityPerson{
      totalCount
    nodes {
      name
      id
      slug {
        current
      }
      description
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}

`;