import React from 'react';
import '../styles/About.css';
import about from '../assets/about.jpg';
import Sparkle from 'react-sparkle';


function About() {
  return (
    <div>
      <main>
        <div className="headline sparks-container">
          <h2><span className="underline">About</span></h2>
          <Sparkle color='random' overflowPx={0} fadeOutSpeed={10} count={30} flickerSpeed={'slowest'} flicker={false} />
        </div>
        <div className="about-container">
          <div className="about-text spacing">
            <p>
              Yoga is part of my life since I’m a child. My mother took me to a yoga class when I was 8 years old. And I still remember the fascination that I felt when I hear the sound OMM.
            </p>
            <p>
              At the age of eighteen, I started to practice Hatha yoga. And
              later on, during a long trip in South America I discovered
              Ashtanga and Kundalini.
            </p>
            <p>
              Finally when I was thirty, I decided to study yoga in the "Asociación Bonaerense de Yoga" in Buenos Aires. And during two years I committed myself to practice and study yoga every day.
            </p>
            <p>
              Recently I went to India to  understand better the culture that gave birth to this amazing philosophy.
            </p>
            <p>
              For the last three years I have been teaching yoga everywhere I go. I start the pranayama formation in the "Asociación Bonaerense de Yoga".
            </p>
          </div>
          <img src={about} alt="four small profile pics" className="about-photo shadow-box" />
        </div>
      </main>
    </div>
  )
}

export default About
