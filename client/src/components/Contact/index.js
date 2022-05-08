// import stripe? possibly not for MVP

import React, { Component } from "react";

export class Contact extends Component {
    render() {
        return (
            <contact class="py-5 bg-dark">                
                    <div class="container">
                        <form id="contact-form">
                            <input type="text" name="name" id="name-field" class="contact-form-field" placeholder="Jane Doe"></input>
                            <input type="email" name="email" id="email-field" class="email-form-field" placeholder="janedoe@index.com"></input>
                            <input type="text" name="message" id="message-field" class="message-form-field" placeholder="words go here"></input>
                            <input type="submit" value="send" class="contact-form-submit"></input>
                        </form>                            
                </div>              
            </contact>
        );  
        }  
}
export default Footer;
