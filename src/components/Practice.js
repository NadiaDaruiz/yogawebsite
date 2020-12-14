import React from 'react';
import '../styles/Practice.css';
import practice from '../assets/practice.jpg';
import Sparkle from 'react-sparkle';


function Practice() {
  return (
    <div>
      <div className="headline sparks-container">
        <h2><span className="underline">Practice</span></h2>
        <Sparkle color='random' overflowPx={0} fadeOutSpeed={10} count={60} flickerSpeed={'slowest'} flicker={false} />
      </div>
      <div className="practice-container spacing">
        <div className="practice-text">
          <p>
            In every class we will work with: Pranayama, Kriyas, Asanas, Salutations and Vinyasa.  Those are the basics of our practice. From there I work in a creative way according to the needs of the students at that moment.
          </p>
        </div>
        <div className="practice-dates">
          <h5><strong>ONLINE LESSONS</strong></h5>
          <p>Tuesday and Thursday (spanish) at 9.00 am (ARG) and 13.00 pm (DE)</p>
          <p>Tuesday and Thursday (english) at 11.00 am (DE)</p>
          <p>Private lessons online are also possible.</p>
        </div>
        <div className="practice-dates">
          <h5><strong>PRIVATE LESSONS AT HOME</strong></h5>
          <p>Only available in Neukölln, Kreuzberg, Friedirichshain, Berlin.</p>
          <p>For <strong>special workshops</strong>, follow me on instagram to keep update.</p>
        </div>

        <img src={practice} alt="images of yoga postures" className="practice-photo shadow-box" />
      </div>
    </div>
  )
}

export default Practice
