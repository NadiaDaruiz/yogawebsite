import React from 'react';
import '../styles/About.css';
import about from '../assets/about.jpg';



function About() {
  return (
    <div>
      <main>
        <div className="headline">
          <h2>About</h2>
        </div>
        <section className="about-container">
          <div className="about-text spacing">
            <p>
              Yoga has been part of my life since I was a child. My mother took me to one of her yoga classes when I was 8 years old. And I still remember the fascination that I felt when I hear the sound OMM.
            </p>
            <p>
              At the age of 18, I started to practice Hatha yoga. And
              later on, during a long trip in South America I discovered
              Ashtanga and Kundalini.
            </p>
            <p>
              Finally when I was 30, I decided to study yoga in the "Asociación Bonaerense de Yoga" in Buenos Aires. And during two years I committed myself to practice and study yoga every day.
            </p>
            <p>
              Recently I went to India to  understand better the culture that gave birth to this amazing philosophy.
            </p>
            <p>
              For the last three years I have been teaching yoga everywhere I go.
            </p>
          </div>
          <img src={about} alt="four small profile pics" className="about-photo shadow-box" />
        </section>
      </main>
    </div>
  )
}

export default About
