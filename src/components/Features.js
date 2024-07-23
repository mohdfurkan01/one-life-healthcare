import React from "react";
import "../styles/Features.css";

const features = [
  {
    title: "Comprehensive Health Tracking",
    description:
      "Monitor your health metrics with ease and get personalized insights.",
    icon: "🩺",
  },
  {
    title: "24/7 Telehealth Access",
    description: "Connect with healthcare professionals anytime, anywhere.",
    icon: "📞",
  },
  {
    title: "Wellness Programs",
    description: "Participate in wellness programs tailored to your needs.",
    icon: "💪",
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
