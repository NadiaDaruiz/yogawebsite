import React from 'react';
import '../styles/Practice.css';

function Practice() {
  return (
    <div>
      <h2 className="practice-headline">Practice</h2>
      <div className="practice-container">
        <div className="practice-text-box">
          <p>
            In every class we will work with: Pranayama, Kriyas, Asanas, Salutations and Vinyasa.  Those are the basics of our practice. From there I work in a creative way according to the needs of the students at that moment.
          </p>
          <div className="practice-times">
            <h5>ONLINE LESSONS</h5>
            <p>
              Tuesday and Thursday (Spanish)
              at 9.00 am ARG / 13.00 pm DE
            </p>
            <p>
              Tuesday and Thursday (English)
              at 11.00 am DE
            </p>
            <p>Private lessons online are also possible.</p>

            <h5>PRIVATE LESSONS @ HOME</h5>
            <p>Only available in Neukölln, Kreuzberg, Friedirichshain, Berlin.</p>
          </div>
          <p>
            Special Workshops. Follow me on Instagram to keep update.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Practice
