import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import SEO from '../components/SEO';
import BlockContent from '@sanity/block-content-to-react'
import { DiscussionEmbed } from 'disqus-react';
import PageTopper from '../components/PageTopper/PageTopper';

export default function SinglePostPage({ data: { post } }) {


    const disqusShortname = "kyjor";
    const disqusConfig = {
        identifier: post.id,
        title: post.title,
    };

    return (
        <>
        <SEO title={post.title} /> 
        {/* image={game.image?.asset?.fluid?.src} */}
       

        <div>
            <Helmet><title>{post.title}</title></Helmet>
            {/* <Img fluid={game.image.asset.fluid} /> */}
            <PageTopper title={post.title}/>
            <div>
                <p>{post.description}</p>
                <BlockContent blocks={post._rawContent}/>
            </div>
            <div>
                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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