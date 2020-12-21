import React from 'react';
import '../styles/Contact.css';
import contact from '../assets/contact.jpg';




function Contact() {
  return (
    <div>
      <div className="headline">
        <h2>Contact</h2>
      </div>
      <section className="contact-container">
        <div className="contact-text spacing">
          <p>Do you have any questions? I'm always available for tea and a nice talk. </p>
          <h6><span className="underline"><strong>EMAIL</strong></span></h6>
          <p>unadanzacosmica@gmail.com</p>
          <h6><span className="underline"><strong>PHONE</strong></span></h6>
          <p>+49 152 36613 077</p>
          <h6><span className="underline"><strong>CITY</strong></span></h6>
          <p> Berlin, Germany</p>
        </div>
        <img src={contact} alt="a beautiful loto in the water" className="contact-photo shadow-box" />
      </section>
    </div>
  )
}

export default Contact
