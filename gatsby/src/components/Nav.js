import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';


const NavStyles = styled.nav`
    margin-bottom: 4%;
    width: 100%;
    ul {
        width: 50%;
        margin: 0;
        padding: 0;
        display: grid;
        justify-content:end;
        text-align: right;
        list-style: none;
        display: inline;

        
    }
    li{
        float: right;
        margin-left: 2%;

    }
    a {
        font-size: 3rem;
        text-decoration: none;

        &:hover {
            color: var(--red);
        }
    }
    
`;
export default function Nav (){
    return <NavStyles>
        <ul>
            <li>
                <Link to="/support" activeStyle={{ color: "red" }}>Support Me</Link>
            </li>
            <li>
                <Link to="/contact" activeStyle={{ color: "red" }}>Contact</Link>
            </li>
            <li>
                <Link to="/blog" activeStyle={{ color: "red" }}>Blog</Link>
            </li>
            <li>
                <Link to="/games" activeStyle={{ color: "red" }}>Games</Link>
            </li>
            <li>
                <Link to="/" activeStyle={{ color: "red" }}>Home</Link>
            </li>
            
           
            {/* <li>
                <Link to="/merch" activeStyle={{ color: "red" }}>Merch</Link>
            </li> */}
            {/* <li>
                <Link to="/">Kyjor</Link>
            </li> */}
            
            
            
            {/* <li>
                <Link to="/" activeStyle={{ color: "red" }}>Tutorials</Link>
            </li> */}
        </ul>
    </NavStyles>
}