import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';
import BlockContent from '@sanity/block-content-to-react'

export default function SinglePostPage({ data: { post } }) {

    return (
        <>
        <SEO title={post.title} /> 
        {/* image={game.image?.asset?.fluid?.src} */}
        <div>
            <Helmet><title>{post.title}</title></Helmet>
            {/* <Img fluid={game.image.asset.fluid} /> */}
            <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <BlockContent blocks={post._rawContent}/>
            </div>
        </div>
        </>
    
    
    )

}

export const query = graphql`
 query ($slug: String!) {
  post: sanityPost(slug: {current: {eq: $slug}}) {
    description
    id
    title
    _rawContent(resolveReferences: {maxDepth: 10})
    date(formatString: "DD MMMM YY")
  }
}`;