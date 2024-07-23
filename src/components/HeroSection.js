import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to One Life Health Care</h1>
        <p>Your health, our priority</p>
        <button className="cta-button" onClick={scrollToFeatures}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
