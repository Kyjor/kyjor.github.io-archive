import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }){
    const { site } = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    title
                    description
                    twitter
                }
            }
        }
    `);

    return(
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,
        initial-scale=1.0" />
        <meta charset="utf-8" />
        <meta name="description" content={site.siteMetadata.description}/>

        {location && <meta property="og:url" content={location.href}/>   }
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
        <meta property="og:description" content={description} key={children} />

    </Helmet>
    );
}