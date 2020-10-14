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

const ImageStyles = styled.div`
     img {
    max-width: 100%;
    max-height: 100%;
}
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
    grid-template-columns: 50% 50%;
   
   
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
        // <SectionStyles>
        //     <FlexContainerStyles>
        //         <FlexItemStyles>
        //             <SingleGame  game={game}/>
        //         </FlexItemStyles>
        //         <FlexItemStyles>
        //             <GatsbyImage fluid={game.image.asset.fluid} alt={game.name}/>
        //         </FlexItemStyles>
        //     </FlexContainerStyles>
        // </SectionStyles>
        <ImageStyles>
            <Link to={`/game/${game.slug.current}`}>
                <GatsbyImage fluid={game.image.asset.fluid} alt={game.name} />
            </Link>
        </ImageStyles>
               )

}
export default function GameList({ games }) {
    
    return(
        
    <>
            <GameStyles>

        {games.map((game) => (
            <GameSection  key={game.id} game={game}/>
                )
                )}
        </GameStyles>
    </>   
    
                
               
                
            
    
  );
  }

