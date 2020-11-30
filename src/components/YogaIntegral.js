import React from 'react';
import '../styles/YogaIntegral.css';
import integral from '../assets/integral.jpg';


function YogaIntegral() {
  return (
    <div>
      <h2 className="headline"><span className="underline">Yoga Integral Philosophy</span></h2>
      <div className="integral-container">
        <div className="integral-text-box">
          <div className="inline-container">
            <p>
              Integral Yoga (or Purna Yoga) was created by Sri Aurobindo (1872-1950) in Pondicherry (South India).
            </p>
            <p>
              Aurobindo devised the synthesis of traditional yoga methods.  Thus he promoted the joint practice of yoga: Bhakti yoga, Gñana yoga, Hatha yoga, Karma yoga, Raja yoga and Tantra yoga.
            </p>
          </div>
          <div className="inline-container">
            <p>
              Yoga Integral differs from traditional forms of yoga in that it does not encourage abandonment of the world or worldly obligations, but rather seeks to realize supramental awareness through a positive attitude in society.
            </p>
            <p>
              I studied Yoga Integral in the Asociación Bonaerese of Yoga, in Argentina. The president, founder of the association and my teacher is <em>Ricardo García</em>. I learn from him and from my other teachers <em> Rocío Blazques, Fernando Dayan y Tomás Berengan Mendaña</em>. They teach me everything I know and I still continue learning from them.
            </p>
          </div>
        </div>
        <img src={integral} alt="banner with text and a candle" className="integral-photo shadow-box" />
      </div>
    </div>
  )
}

export default YogaIntegral
