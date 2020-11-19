import React from 'react';
import wine from '../assets/yoga_wine.jpg';
import '../styles/YogaAndWine.css';

function YogaAndWine() {
  return (
    <div>
      <h2 className="yoga-wine-headline">Yoga and Wine </h2>
      <div className="wine-container">
        <img src={wine} alt="" className="yoga-wine-photo" />
        <div className="yoga-wine-text-box">
          <p>
            My two passions in life are the practice of yoga and the magical world of wine.
         </p>
          <p>
            As a yoga teacher, I have learned that it is more important to integrate, accept and express than to reject, resign and repress. So I believe that we could use the wonderful creation of wine as a tool to connect with our five senses and to be aware of all the aromas and textures that we have the capacity to feel and experience.
          </p>
          <p>
            The proposal is to mix these two ancient things together in one class under the full moon.
            So every month during the full moon I organize a special class where we practice Kyras, Pranayama and Meditation to connect with our perception in a more profound level to enjoy of the wine tasting ritual.
          </p>
          <p>
            Follow me on Instagram to know more details about date, place and prices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default YogaAndWine
