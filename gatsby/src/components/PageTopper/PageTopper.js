import React from 'react';
import styled from 'styled-components';


const PageTopperStyles = styled.div`
    text-align: center;
    margin-top: 4em;
    margin-bottom: 2em;
   h1{
      margin-top: 0;
      margin-bottom: 0.67em;
    }
`;

export default function PageTopper({ title }) {
    
    return(      
        <>
            <PageTopperStyles>
                <h1>{title}</h1>
                <hr/>
            </PageTopperStyles>
        </>   
       
  );
  }