import React from "react";
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unleash the full</h1>
        <h2>potential of AI</h2>
        <a>AI Ally is a versatile assistant that utilizes</a>
        <b>state-of-the-art natural language processing</b>
        <c>to provide real-time support and assistance</c>
        <d>across various domains.</d>
        
        <div className="cta-buttons">
          <button className="get-app-btn">Get the App →</button>
          <button className="more-btn">More</button>
        </div>
        <div className="stats">
          <j>4.8</j>
          <f>Rating on AppStore</f>
          <k>700k+</k>
          <r>Active users</r>
        </div>
      </div>
      <div className="hero-image">
      <img src="/phoneImage.png" alt="App preview on phone" />
      </div>
    </section>
  );
};

export default HeroSection;
