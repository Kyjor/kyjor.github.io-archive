import React from 'react';
import styled from 'styled-components';
import PageTopper from '../components/PageTopper/PageTopper';
import SEO from "../components/SEO"


export default function ContactPage(){
    
  const FormStyles = styled.div`
    margin: 0 auto;
    display: block;
    max-width: 700px;
    margin-top: 5em;
    margin: auto;
    input, select, textarea {
    display: block;
    padding: 1em;
    background-color: #eee;
    vertical-align: middle;
    width: 100%;
    max-width: 100%;
    border: none;
    border-bottom: 2px solid #eee;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: "Open Sans", sans-serif;
    margin-bottom: 1.5em;
    color: black;
    

}
textarea {
  margin: auto;
    width: 770px;
    height: 166px;
}
  input {
    margin: auto;
    width: 770px;
  }
  bu{
    text-align: center;
  }
  `;

    return (
        <>
            <SEO title={`Contact`}/>

            <PageTopper title='Contact Me'/>

            <FormStyles>
           
		<p>Send me a message by filling out the form below. You can also message me through <a href="https://twitter.com/kyjordev" target="_blank">Twitter</a> or <a href="https://www.instagram.com/kyjordev" target="_blank">Instagram</a>.</p>
		<form action="https://formspree.io/f/xayleedk" method="POST">
			<label>Email</label>
			<input type="text" name="_replyto" required />
			<label>Message</label>
			<textarea rows="12" id="autoExpand" name="message" required></textarea>
			<button type="submit" >Send message</button>
		</form>
</FormStyles>
          
        </>
    );
}