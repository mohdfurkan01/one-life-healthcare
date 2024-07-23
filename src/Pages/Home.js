import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonals";
import ContactForm from "../components/contactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
