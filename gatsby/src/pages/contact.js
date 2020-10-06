import React from 'react';
import SEO from "../components/SEO"


export default function ContactPage(){
    

    return (
        <>
            <SEO title={`Contact`}/>
            <div class="container">
  <form  action="https://getform.io/f/b1c5c543-e467-487e-b239-a9a30835fda0" method="POST"  >
  <ul class="flex-outer">
  <li>
  <div class="input-box-container-left">
        <label for="first-name">First Name</label>
        <input type="text" name="firstname" id="first-name" required="required"/> 
  
        </div>
        <div class="input-box-container-right">
        <label for="last-name">Last Name</label>
        <input type="text" name="lastname"  id="last-name"  required="required"/>
        </div>
        </li>
      
        <li>
        <div class="input-box-container-left">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required="required"/>
        </div>
        <div class="input-box-container-right">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" required="required" name="phone" />
        </div>
      </li>
      <li>
      <div class="text-area-container">

        <label for="comments">Comments</label>
        <textarea rows="6" name="message" id="message" required="required" ></textarea>
        </div>
      </li>
    
      <li>
        <div class="center">
         {/* <NavigationButton
      label={'Submit'}
      alignment={'center'} 
      /> */}
      <button type="submit">Send</button>
        </div>
      
    
      </li>
    </ul>
  </form>
</div>
          
        </>
    );
}