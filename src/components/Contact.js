import React from 'react';
import '../styles/Contact.css';
import contact from '../assets/contact.jpg';
import Sparkle from 'react-sparkle';



function Contact() {
  return (
    <div>
      <div className="headline sparks-container">
        <h2><span className="underline">Contact</span></h2>
        <Sparkle color='random' overflowPx={0} fadeOutSpeed={10} count={60} flickerSpeed={'slowest'} flicker={false} />
      </div>
      <section className="contact-container">
        <div className="contact-text spacing">
          <p>Do you have any questions? I'm always available for tea and a nice talk. </p>
          <h6><strong>EMAIL</strong></h6>
          <p>unadanzacosmica@gmail.com</p>
          <h6><strong> PHONE</strong></h6>
          <p>+49 0152 36613 077</p>
          <h6><strong>CITY</strong></h6>
          <p> Berlin, Germany</p>
        </div>
        <img src={contact} alt="a beautiful loto in the water" className="contact-photo shadow-box" />
      </section>
    </div>
  )
}

export default Contact
