import React from 'react';
import '../styles/Contact.css';


function Contact() {
  return (
    <div>
      <h2 className="contact-headline">Contact</h2>
      <div className="container">
        <p className="contact-text">Do you have any questions? I'm always available for  tea and a nice talk. </p>
        <h4 className="contact-info"> Email</h4>
        <p className="info">lara.daruiz@gmail.com</p>
        <h4 className="contact-info"> Phone</h4>
        <p className="info">0123456789</p>
        <h4 className="contact-info"> City</h4>
        <p className="info"> Berlin, Germany</p>
      </div>
    </div>
  )
}

export default Contact
