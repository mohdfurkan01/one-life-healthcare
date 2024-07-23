import React from "react";
import "../styles/contactForm.css";

const contactForm = () => {
  return (
    <section id="contact" className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default contactForm;
