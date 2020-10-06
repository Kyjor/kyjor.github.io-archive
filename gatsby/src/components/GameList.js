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
const GameGridStyles = styled.div `
    display: grid;
    grid-template-columns: repeat()(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const GameStyles = styled.div`
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
function SingleGame({ game }) {
    return (
        <div>
            <Link to={`/game/${game.slug.current}`}><h2>{game.name}</h2></Link>
            <p>{game.description}</p>

        </div>
    
    )
}

function GameSection({game}) {

    return (
        <SectionStyles>
            <FlexContainerStyles>
                <FlexItemStyles>
                    <SingleGame  game={game}/>
                </FlexItemStyles>
                <FlexItemStyles>
                    <GatsbyImage fluid={game.image.asset.fluid} alt={game.name}/>
                </FlexItemStyles>
            </FlexContainerStyles>
        </SectionStyles>
    )

}
export default function GameList({ games }) {
    
    return(
        
    <>
    {games.map((game) => (
        <GameSection  key={game.id} game={game}/>
                )
                )}
    </>   
    
                
               
                
            
    
  );
  }

