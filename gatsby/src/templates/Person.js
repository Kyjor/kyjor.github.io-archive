import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
export default function SinglePersonPage({ data: { person } }) {

    return (<div>
        <Img fluid={person.image.asset.fluid} />
        <div>
            <h2>{person.name}</h2>
            <p>{person.description}</p>
        </div>
    </div>
    
    )

}

export const query = graphql`
query($slug: String!) {
    person: sanityPerson(slug: {
        current: {eq: $slug } } ) {
        name
        id
        description
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