import React from 'react';
import '../styles/YogaIntegral.css';
import integral from '../assets/integral.jpg';



function YogaIntegral() {
  return (
    <div>
      <div className="headline">
        <h2>Yoga Integral</h2>
      </div>
      <section className="integral-container">
        <div className="integral-text spacing">
          <p>
            Yoga Integral (or Purna Yoga) was created by Sri Aurobindo (1872-1950) in Pondicherry (South India).
            </p>
          <p>
            Aurobindo devised the synthesis of traditional yoga methods.  Thus he promoted the joint practice of yoga: Bhakti yoga, Gñana yoga, Hatha yoga, Karma yoga, Raja yoga and Tantra yoga.
          </p>
          <p>
            Yoga Integral differs from traditional forms of yoga in that it does not encourage abandonment of the world or worldly obligations, but rather seeks to realize supramental awareness through a positive attitude in society.
          </p>
          <p>
            I studied Yoga Integral in the Asociación Bonaerese of Yoga, in Argentina.
          </p>
        </div>
        <img src={integral} alt="banner with text and a candle" className="integral-photo shadow-box" />
      </section>
    </div>
  )
}

export default YogaIntegral
