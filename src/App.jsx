import React from "react";
import Navbar from "./components/Navbar";
import ServiceSection from "./pages/home/ServiceSection";
import HeroSection from "./pages/home/HeroSection";
import HowItWorks from "./pages/home/HowItWorks";
import WhyCasa from "./pages/home/WhyCasa";
import ReviewsSection from "./pages/home/ReviewsSection";
import PricingSection from "./pages/home/PricingSection";
import ContactSection from "./pages/home/ContactSection";
import CTASection from "./pages/home/CTASection";
import Footer from "./pages/home/Footer";
import TrustedCompanies from "./pages/home/TrustedCompanies";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection id="hero" />
      <TrustedCompanies />
      <ServiceSection id="services" />
      <HowItWorks id="how-it-works" />
      <WhyCasa id="why-different" />
      <ReviewsSection id="reviews" />
      <PricingSection id="pricing" />
      <ContactSection id="contact" />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
