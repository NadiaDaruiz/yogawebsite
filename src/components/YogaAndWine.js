import React from 'react';
import wine from '../assets/yoga_wine.jpg';
import '../styles/YogaAndWine.css';


function YogaAndWine() {
  return (
    <div>
      <div className="headline">
        <h2>Yoga and Wine</h2>
      </div>
      <section className="wine-container">
        <div className="wine-text spacing">
          <p>
            My two passions in life are the practice of yoga and the magical world of wine.
          </p>
          <p>
            As a yoga teacher, I have learned that it is more important to integrate, accept and express than to reject, resign and repress. So I believe that we could use the wonderful creation of wine as a tool to connect with our 5 senses and to be aware of all the aromas and textures that we have the capacity to feel and experience.
          </p>
          <p>
            The proposal is to mix these two ancient things together in one class under the full moon.
            So every month during the full moon I organize a special class where we practice Kyras, Pranayama and Meditation to connect with our perception in a more profound level to enjoy of the wine tasting ritual.
          </p>
          <p>
            Follow me on Instagram to know more details about date, place and prices.
          </p>
        </div>
        <img src={wine} alt="two small pics of meditation and wine" className="wine-photo shadow-box" />
      </section>
    </div>
  )
}

export default YogaAndWine
