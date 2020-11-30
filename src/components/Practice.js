import React from 'react';
import '../styles/Practice.css';
import practice from '../assets/practice.jpg';

function Practice() {
  return (
    <div>
      <h2 className="headline"><span className="underline">Practice</span></h2>
      <div className="practice-container">
        <div className="practice-text-box">
          <div className="practice-text">
            <p>
              In every class we will work with: Pranayama, Kriyas, Asanas, Salutations and Vinyasa.  Those are the basics of our practice. From there I work in a creative way according to the needs of the students at that moment.
          </p>
          </div>
          <div className="practice-dates spacing">
            <h5><strong>ONLINE LESSONS</strong></h5>
            <p>
              Tuesday and Thursday (Spanish) at 9.00 am (ARG) and 13.00 pm (DE)
          </p>
            <p>
              Tuesday and Thursday (English) at 11.00 am (DE)
          </p>
            <p>Private lessons online are also possible.</p>

            <h5 className="space"> <strong>PRIVATE LESSONS AT HOME</strong></h5>
            <p>Only available in Neukölln, Kreuzberg, Friedirichshain, Berlin.</p>
            <p>
              For <strong>special workshops</strong>, follow me on instagram to keep update.
          </p>
          </div>
        </div>
        <img src={practice} alt="images of yoga postures" className="practice-photo shadow-box" />
      </div>
    </div>
  )
}

export default Practice
