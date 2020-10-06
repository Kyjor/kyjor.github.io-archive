import React from "react"
import BlogPostList from "../components/BlogPostList"
import Layout from "../components/layout"
import SEO from "../components/SEO"


const BlogPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
    <SEO title={`Blog`}/>
            <h1>My blog posts:</h1>
            <BlogPostList posts={posts}/>
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