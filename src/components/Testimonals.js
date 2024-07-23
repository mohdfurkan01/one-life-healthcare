import React, { useState } from "react";
import "../styles/Testimonals.css";

const testimonials = [
  {
    quote: "This is the best health care platform I've ever used!",
    name: "John Doe",
    position: "Patient",
  },
  {
    quote: "Fantastic service and support.",
    name: "Jane Smith",
    position: "Healthcare Professional",
  },
  {
    quote: "Highly recommend to everyone.",
    name: "Alice Johnson",
    position: "Patient",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"{testimonials[currentIndex].quote}"</p>
          <h3>- {testimonials[currentIndex].name}</h3>
          <p className="position">{testimonials[currentIndex].position}</p>
        </div>
        <div className="testimonial-controls">
          <button onClick={handlePrevClick} className="control-button">
            ❮
          </button>
          <button onClick={handleNextClick} className="control-button">
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
