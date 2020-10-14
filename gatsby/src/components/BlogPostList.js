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
    h3,
    p{
        text-align: center;
    }
`;
const PostSectionStyles = styled.section`
margin: 4%;
text-align: center;

    background-color: #454343;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    &:hover {
   
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 100px 0 rgba(0,0,0,.12);
    }



h1{
  margin-top: 0;
  margin-bottom: 0.67em;
}
iframe {
  width: 100%;
  height: 30vw;
  background-color: #1f1f1f;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  border-radius: 1em;
}
p{
 
}

`;
function SinglePost({ post }) {
    return (
       
            
    <div style={{backgroundColor: '#454343', padding: '20px', margin: '20px 0', textAlign: 'center'}}>
        <Link to={`/blog/${post.slug.current}`}><h3 >{post.title}</h3></Link>
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
                    <PostSectionStyles>
                        <SinglePost  post={post}/>
                    </PostSectionStyles>
                    
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

