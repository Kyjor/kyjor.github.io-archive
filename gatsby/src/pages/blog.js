import React from "react"
import styled from "styled-components";
import BlogPostList from "../components/BlogPostList"
import Layout from "../components/layout"
import PageTopper from "../components/PageTopper/PageTopper";
import SEO from "../components/SEO"

const PageStyles = styled.div`
    margin: 0 auto;
    display: block;
    max-width: 700px;
    margin-top: 5em;
    margin: auto;`;


const BlogPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
    <SEO title={`Blog`}/>
    <PageTopper title='Blog Posts'/>

    <PageStyles>
      <BlogPostList posts={posts}/>
    </PageStyles>
            
    </>
    

    
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
  posts: allSanityPost(sort: {fields: date, order: ASC}) {
    nodes {
      slug {
        current
      }
      id
      description
      date(formatString: "DD MMMM YY")
      title
      _rawContent(resolveReferences: {maxDepth: 10})
    }
  }
}
`