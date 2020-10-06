import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';


const SectionStyles = styled.section`
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;
const FlexContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    
`;
const FlexItemStyles = styled.div`
    flex-grow: 1;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 1%;
    padding-bottom: 1%;
    width: 50%;
    font-size: 2vw;
    
`;

const FlexImageStyles = styled.img`
     width: 100%;
    height: 100%;
`;
const PostGridStyles = styled.div `
    display: grid;
    grid-template-columns: repeat()(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const PostStyles = styled.div`
    display: grid;
    @supports not(grid-template-row: subgrid){
        --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid);
    grid-area: span 3;
    grid-gap: 1rem;
    h2,
    p{
        margin: 0;
    }
`;
function SinglePost({ post }) {
    return (
       
            
    <div style={{backgroundColor: '#454343', padding: '20px', margin: '20px 0'}}>
        <Link to={`/blog/${post.slug.current}`}><h2>{post.title}</h2></Link>
      <small>{post.date}</small>
      <p>{post.description}</p>
    </div>
    
    )
}

function PostSection({post}) {

    return (
        <SectionStyles>
            <FlexContainerStyles>
                <FlexItemStyles>
                    <SinglePost  post={post}/>
                </FlexItemStyles>
                {/* <FlexItemStyles>
                    <GatsbyImage fluid={post.image.asset.fluid} alt={post.name}/>
                </FlexItemStyles> */}
            </FlexContainerStyles>
        </SectionStyles>
    )

}
export default function BlogPostList({ posts }) {
    
    return(
        
    <>
    {posts.map((post) => (
        <PostSection  key={post.id} post={post}/>
                )
                )}
    </>   
    
                
               
                
            
    
  );
  }

