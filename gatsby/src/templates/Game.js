import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';

export default function SingleGamePage({ data: { game } }) {

    return (
        <>
        <SEO title={game.name} image={game.image?.asset?.fluid?.src}/>
        <div>
            <Helmet><title>{game.name}</title></Helmet>
            <Img fluid={game.image.asset.fluid} />
            <div>
                <h2>{game.name}</h2>
                <p>{game.description}</p>
            </div>
        </div>
        </>
    
    
    )

}

export const query = graphql`
query($slug: String!) {
    game: sanityGame(slug: {
        current: {eq: $slug } } ) {
        name
        description
        id
        image {
            asset{
                fluid (maxWidth: 800) {
                    ...GatsbySanityImageFluid
                }
            }
        }

    }
}
`;