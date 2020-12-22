import React from 'react';
import '../styles/Practice.css';
import practice from '../assets/practice.jpg';
import yogaIcon from "../assets/yoga.png";


function Practice() {
  return (
    <div>
      <div className="headline">
        <h2>Practice</h2>
      </div>
      <section className="practice-container spacing">
        <div className="practice-text">
          <p>
            In every class we will work with: Pranayama, Kriyas, Asanas, Salutations and Vinyasa.  Those are the basics of our practice. From there I work in a creative way according to the needs of the students at that moment.
          </p>
          <img className="yoga-icon" src={yogaIcon} alt="yoga symbol" />
        </div>
        <div className="practice-dates">
          <h6><span className="underline"><strong>ONLINE LESSONS</strong></span></h6>
          <p>I offer group or private lessons.</p>

          <h6><span className="underline"><strong>PRIVATE LESSONS AT HOME</strong></span></h6>
          <p>Only available in Neukölln, Kreuzberg, Friedirichshain, Berlin.</p>
          <p>For <strong>special workshops</strong>, follow me on instagram to keep update.</p>
        </div>
      </section>
      <img src={practice} alt="images of yoga postures" className="practice-photo shadow-box" />
    </div>
  )
}

export default Practice
