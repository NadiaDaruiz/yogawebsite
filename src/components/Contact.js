import React from 'react';
import '../styles/Contact.css';
import contact from '../assets/contact.jpg';


function Contact() {
  return (
    <div>
      <h2 className="headline"><span className="underline">Contact</span></h2>
      <div className="contact-container">
        <div className="contact-text spacing">
          <p>Do you have any questions? I'm always available for tea and a nice talk. </p>
          <h5><strong>EMAIL</strong></h5>
          <p>unadanzacosmica@gmail.com</p>
          <h5><strong> PHONE</strong></h5>
          <p>+49 0152 36613 077</p>
          <h5><strong>CITY</strong></h5>
          <p> Berlin, Germany</p>
        </div>
        <img src={contact} alt="a beautiful loto in the water" className="contact-image shadow-box" />
      </div>
    </div>
  )
}

export default Contact
